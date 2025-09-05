import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    whyJoin: {
      type: String,
      required: [true, "Please explain why you want to join"],
      trim: true
    },
    skills: {
      type: String,
      required: [true, "Please provide your skills and experience"],
      trim: true
    },
    teamPreference: {
      type: String,
      required: [true, "Please select a team preference"],
      enum: ["Tech", "Design", "Content", "Marketing"],
      trim: true
    },
    resumeUrl: {
      type: String,
      trim: true,
      // This is for the base64 encoded file data
      maxlength: 15728640 // 15MB max size (as base64 string)
    },
    resumeFileName: {
      type: String,
      trim: true
    },
    resumeFileType: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
