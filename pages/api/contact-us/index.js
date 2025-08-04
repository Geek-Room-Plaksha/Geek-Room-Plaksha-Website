import dbConnect from "../../../lib/mongodb";
import ContactUs from "../../../models/contactus";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { name, email, message } = req.body;

        // Simple validation
        if (!name || !email || !message) {
          return res
            .status(400)
            .json({
              success: false,
              message: "Please provide all required fields"
            });
        }

        const contactRequest = await ContactUs.create({
          name,
          email,
          message
        });

        res.status(201).json({ success: true, data: contactRequest });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Invalid method" });
      break;
  }
}
