import dbConnect from "../../../lib/mongodb";
import Certificate from "../../../models/certificate";
import QRCode from "qrcode";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const {
          memberName,
          memberId,
          description,
          photo,
          teamName,
          memberSince,
          position
        } = req.body;

        const certificateId = `${memberId}-${Date.now()}`;

        const cert = await Certificate.create({
          memberName,
          memberId,
          certificateId,
          description,
          photo,
          teamName,
          memberSince,
          position
        });

        // URL to verify certificate
        const baseUrl =
          process.env.NEXT_PUBLIC_CERTIFICATE_URL ||
          "https://geekroom-plaksha.tech/verify-certificate";
        const verifyUrl = `${baseUrl}/${certificateId}`;

        // Generate QR code as Data URL
        const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl);

        res.status(201).json({
          message: "Certificate issued",
          certificate: cert,
          qrCode: qrCodeDataUrl,
          verifyUrl
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
