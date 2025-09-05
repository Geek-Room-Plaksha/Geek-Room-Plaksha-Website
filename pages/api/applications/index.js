import formidable from "formidable";
import { Buffer } from "buffer";
import fs from "fs";
import dbConnect from "@/lib/mongodb";
import Application from "@/models/application";

export const config = {
  api: {
    bodyParser: false
  }
};

// Define the maximum file size (1 MB in bytes)
const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

function isValidPlakshaEmail(email) {
  return email.endsWith("@plaksha.edu.in");
}

const processFile = async (file) => {
  // The file is actually coming as an array in some cases - handle both cases
  const fileToProcess = Array.isArray(file) ? file[0] : file;

  // Double-check the file object
  if (!fileToProcess || !fileToProcess.filepath) {
    console.error("Invalid file object or missing filepath:", fileToProcess);
    return null;
  }

  try {
    // Read the file as a buffer
    const fileBuffer = Buffer.from(
      await fs.promises.readFile(fileToProcess.filepath)
    );

    // Check file size
    if (fileBuffer.length > MAX_FILE_SIZE) {
      console.error("File too large:", fileBuffer.length, "bytes (max: 1 MB)");
      return { error: "File size exceeds the 1 MB limit." };
    }

    // Determine the mime type based on the file extension
    const fileName = fileToProcess.originalFilename || "";
    const extension = fileName.split(".").pop().toLowerCase();

    let mimeType = "application/octet-stream"; // default mime type
    if (extension === "pdf") {
      mimeType = "application/pdf";
    } else if (["doc", "docx"].includes(extension)) {
      mimeType = "application/msword";
    } else if (["txt", "rtf"].includes(extension)) {
      mimeType = "text/plain";
    }

    // Convert the file to base64 for MongoDB storage
    const base64File = fileBuffer.toString("base64");

    // Create a data URI that can be used to display the file
    const dataUri = `data:${mimeType};base64,${base64File}`;

    console.log(
      "File processed successfully, size:",
      fileBuffer.length,
      "bytes"
    );
    return { dataUri };
  } catch (error) {
    console.error("Error processing file:", error);
    return { error: "Error processing file." };
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();

    // Configure formidable with size limits
    const form = formidable({
      multiples: true,
      maxFileSize: MAX_FILE_SIZE // Set maximum file size here
    });

    return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Form parsing error:", err);
          // Check if the error is related to file size
          if (err.code === 1009) {
            // Formidable error code for maxFileSize exceeded
            res
              .status(413)
              .json({ error: "Resume file exceeds the 1 MB size limit." });
          } else {
            res.status(500).json({ error: "Error parsing form" });
          }
          return resolve();
        }

        try {
          // Get field values, handling arrays properly
          const name = Array.isArray(fields.name)
            ? fields.name[0]
            : fields.name;
          const email = Array.isArray(fields.email)
            ? fields.email[0]
            : fields.email;
          const whyJoin = Array.isArray(fields.whyJoin)
            ? fields.whyJoin[0]
            : fields.whyJoin;
          const skills = Array.isArray(fields.skills)
            ? fields.skills[0]
            : fields.skills;
          const teamPreference = Array.isArray(fields.teamPreference)
            ? fields.teamPreference[0]
            : fields.teamPreference;

          console.log("Processing fields:", {
            name,
            email,
            whyJoin,
            skills,
            teamPreference
          });

          // Validate required fields
          if (!name || !email || !whyJoin || !skills || !teamPreference) {
            res.status(400).json({ error: "Missing required fields" });
            return resolve();
          }

          // Validate email domain
          if (!isValidPlakshaEmail(email)) {
            return res.status(400).json({
              success: false,
              error: "Please use your Plaksha Email"
            });
          }

          // Process application data
          const applicationData = {
            name,
            email,
            whyJoin,
            skills,
            teamPreference
          };

          // Handle resume upload if provided
          if (files.resume) {
            const fileToProcess = Array.isArray(files.resume)
              ? files.resume[0]
              : files.resume;
            console.log(
              "Resume file received:",
              fileToProcess.originalFilename
            );

            const result = await processFile(files.resume);
            if (result.error) {
              res.status(413).json({ error: result.error });
              return resolve();
            }

            if (result.dataUri) {
              console.log(
                "Resume processed successfully and ready for storage"
              );
              applicationData.resumeUrl = result.dataUri;
              applicationData.resumeFileName = fileToProcess.originalFilename;
              applicationData.resumeFileType =
                fileToProcess.mimetype ||
                (fileToProcess.originalFilename.endsWith(".pdf")
                  ? "application/pdf"
                  : fileToProcess.originalFilename.endsWith(".doc")
                  ? "application/msword"
                  : fileToProcess.originalFilename.endsWith(".docx")
                  ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  : "application/octet-stream");
            } else {
              console.error("Failed to process resume file");
            }
          } else {
            console.log("No resume file uploaded");
          }

          // Save to database
          const application = new Application(applicationData);
          await application.save();

          res.status(201).json({
            success: true,
            message: "Application submitted successfully!"
          });
          resolve();
        } catch (error) {
          console.error("Error processing application:", error);
          res.status(500).json({ error: "Error processing application" });
          resolve();
        }
      });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
}
