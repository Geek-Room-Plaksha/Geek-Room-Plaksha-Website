import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Check if model already exists to prevent overwrite during hot reloads
export default mongoose.models.ContactUs ||
  mongoose.model("ContactUs", contactUsSchema);
