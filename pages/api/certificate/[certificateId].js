import dbConnect from "../../../lib/mongodb";
import Certificate from "../../../models/certificate";

export default async function handler(req, res) {
  const { method } = req;
  const { certificateId } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const cert = await Certificate.findOne({ certificateId });

        if (!cert) {
          return res.status(404).json({
            verified: false,
            message: "Certificate not found"
          });
        }

        res.status(200).json({
          verified: true,
          certificate: cert
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Invalid method" });
      break;
  }
}
