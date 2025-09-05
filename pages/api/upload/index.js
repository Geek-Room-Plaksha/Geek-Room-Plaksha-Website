import Busboy from "busboy";
import { Buffer } from "buffer";
import dbConnect from "../../../lib/mongodb";

// Configure to parse form with files
export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Connect to MongoDB (will be used to store resume data)
    await dbConnect();

    // Use busboy to parse the form without storing files to disk
    const busboy = Busboy({ headers: req.headers });

    let fileName = "";
    let mimeType = "";
    let fileBuffer = null;
    let chunks = [];

    // Set up event handlers for busboy
    busboy.on("file", (fieldname, file, info) => {
      const { filename, encoding, mimeType: fileMimeType } = info;

      // Set file information
      fileName = filename;
      mimeType = fileMimeType;

      // Collect file data in memory
      file.on("data", (chunk) => {
        chunks.push(chunk);
      });

      file.on("end", () => {
        // Convert chunks to a Buffer once the file is fully read
        fileBuffer = Buffer.concat(chunks);
        // Process the file as soon as we have it fully loaded
        processFileUpload();
      });
    });

    async function processFileUpload() {
      try {
        if (!fileBuffer) {
          return res.status(400).json({ message: "No file uploaded" });
        }

        // Convert the file to base64 for MongoDB storage
        const base64File = fileBuffer.toString("base64");

        // Create a data URI that can be used to display the file
        const dataUri = `data:${mimeType};base64,${base64File}`;

        // Return success response with data URI
        if (!res.headersSent) {
          res.status(200).json({
            success: true,
            data: {
              name: fileName,
              mimeType: mimeType,
              dataUri: dataUri
            }
          });
        }
      } catch (error) {
        console.error("Error processing file:", error);
        if (!res.headersSent) {
          // Simplify the error object to avoid any potential issues
          res.status(500).json({
            success: false,
            message: "File upload failed"
          });
        }
      }
    }

    // Handle any errors from busboy
    busboy.on("error", (error) => {
      console.error("Busboy error:", error);
      if (!res.headersSent) {
        // Simplified error response
        return res.status(500).json({
          success: false,
          message: "File parsing error"
        });
      }
    });

    // Handle finish event
    busboy.on("finish", () => {
      if (chunks.length === 0 && !res.headersSent) {
        // Simplified error response
        return res.status(400).json({
          success: false,
          message: "No file found in request"
        });
      }
    });

    // Start parsing the request
    req.pipe(busboy);
  } catch (error) {
    console.error("Error in handler:", error);
    // Simplify the error response
    return res.status(500).json({
      success: false,
      message: "Upload processing failed"
    });
  }
}
