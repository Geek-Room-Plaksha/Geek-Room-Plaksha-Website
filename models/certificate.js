import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  memberName: { type: String, required: true },
  memberId: { type: String, required: true },
  certificateId: { type: String, required: true, unique: true },
  description: { type: String },
  photo: { type: String }, // URL or base64 string
  teamName: { type: String },
  memberSince: { type: String }, // e.g., '2023' or 'Jan 2024'
  position: { type: String },
  issuedAt: { type: Date, default: Date.now }
  // Add more fields as needed
});

// Check if model already exists to prevent overwrite during hot reloads
export default mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);
