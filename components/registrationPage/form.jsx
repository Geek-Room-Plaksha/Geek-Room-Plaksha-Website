import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FileUpload } from "../ui/file-upload";
import Typography from "../display/typography/Typography";
import { Loader2, ChevronDown } from "lucide-react";
// CSS import is moved to _app.js or globals.css

const ApplicationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whyJoin: "",
    skills: "",
    teamPreference: ""
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [resumeError, setResumeError] = useState(""); // Add this new state

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const validatePlakshaEmail = (email) => {
    return email.endsWith("@plaksha.edu.in");
  };

  // Enhanced email validation with visual feedback
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For email field, provide real-time validation feedback
    if (name === "email") {
      setEmailError("");
      // Only validate if there's content and it contains @ (indicating they're typing an email)
      if (value && value.includes("@") && !value.endsWith("@plaksha.edu.in")) {
        setEmailError(
          "Please use your Plaksha University email (@plaksha.edu.in)"
        );
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleResumeUpload = (files) => {
    setResumeError(""); // Clear any previous errors

    if (files && files.length > 0) {
      const file = files[0]; // Take only the first file
      // Check file size immediately when selected
      if (file.size > 1048576) {
        // 1MB = 1048576 bytes
        setResumeError(
          "File size exceeds the 1 MB limit. Please select a smaller file."
        );
        setResume(null); // Don't set the oversized resume
      } else {
        // Store the raw file object if it's within size limits
        setResume(file);
        console.log(
          "Resume selected:",
          file.name,
          "Size:",
          (file.size / 1024 / 1024).toFixed(2) + "MB"
        );
      }
    } else {
      // Handle case when files array is empty (file was removed)
      setResume(null);
      console.log("Resume removed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setEmailError("");

    try {
      // Validate form
      if (
        !formData.name ||
        !formData.email ||
        !formData.whyJoin ||
        !formData.skills ||
        !formData.teamPreference
      ) {
        setError("Please fill all required fields");
        return; // Stop execution here instead of throwing
      }

      // Validate Plaksha email
      if (!validatePlakshaEmail(formData.email)) {
        setEmailError(
          "Please use your Plaksha University email (@plaksha.edu.in)"
        );
        setError("Only Plaksha University email addresses are accepted");
        return; // Stop execution here instead of throwing
      }

      // Check resume file size (1MB = 1048576 bytes)
      if (resume && resume.size > 1048576) {
        setError(
          "Resume file exceeds the 1 MB size limit. Please select a smaller file."
        );
        return;
      }

      // Create form data for submission
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("whyJoin", formData.whyJoin);
      submitData.append("skills", formData.skills);
      submitData.append("teamPreference", formData.teamPreference);

      if (resume) {
        console.log(
          "Attaching resume to form submission:",
          resume.name,
          resume.type,
          resume.size + " bytes"
        );
        submitData.append("resume", resume);
      }

      // Submit form
      const response = await fetch("/api/applications", {
        method: "POST",
        body: submitData
      });

      const result = await response.json();

      if (!response.ok) {
        // Instead of throwing an error, set the error state
        setError(result.error || "Failed to submit application");
        return; // Return early to avoid executing success code
      }

      // Handle success
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        whyJoin: "",
        skills: "",
        teamPreference: ""
      });
      setResume(null);
    } catch (err) {
      console.error("Application submission error:", err);
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center py-8 md:py-12 application-form-container mb-[50px] rounded-lg bg-[#ffffff0d] md:w-[175vh]"
    >
      {success ? (
        <div className="text-center py-8 w-full">
          <Typography variant="h2" className="text-green-500 mb-4">
            Application Submitted
          </Typography>
          <Typography variant="body" className="text-white">
            Thank you for applying to join Geek Room Plaksha, we&apos;ll review your
            application and get back to you soon.
          </Typography>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-12 w-full">
          {error && (
            <div className="p-4 mb-6 w-full bg-red-900/20 border border-red-800 rounded-md text-red-400">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="w-full md:flex md:flex-wrap md:gap-x-8 md:justify-between"
          >
            <div className="md:w-[48%] md:flex-shrink-0 space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border-solid border-[#00acb2] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#00acb2] bg-transparent"
                  placeholder="Full Name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 border-solid ${
                    emailError ? "border-red-500" : "border-[#00acb2]"
                  } text-white rounded focus:outline-none focus:ring-2 ${
                    emailError ? "focus:ring-red-500" : "focus:ring-[#00acb2]"
                  } bg-transparent`}
                  placeholder="Email Address"
                  required
                  disabled={isSubmitting}
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-400">{emailError}</p>
                )}
              </div>

              <div>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border-solid border-[#00acb2] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#00acb2] bg-transparent"
                  placeholder="Why do you want to join Geek Room Plaksha?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border-solid border-[#00acb2] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#00acb2] bg-transparent"
                  placeholder="What skills and experience do you have? (Programming languages, design tools, writing skills, etc.)"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="md:w-[48%] md:flex-shrink-0 mt-6 md:mt-0 application-file-upload">
              <div className="mb-6">
                <p className="mb-2 text-sm text-white">
                  Which team would you like to join?
                </p>
                <div className="relative">
                  <select
                    id="teamPreference"
                    name="teamPreference"
                    value={formData.teamPreference}
                    onChange={handleInputChange}
                    className="w-full p-3 border-solid border-[#00acb2] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#00acb2] bg-transparent appearance-none"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled className="text-white">
                      Select a team
                    </option>
                    <option value="Tech" className="text-black">
                      Tech
                    </option>
                    <option value="Design" className="text-black">
                      Design
                    </option>
                    <option value="Content" className="text-black">
                      Content
                    </option>
                    <option value="Marketing" className="text-black">
                      Marketing
                    </option>
                  </select>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <p className="mb-2 text-sm text-white">Resume / CV (Optional)</p>
              <div
                className={`bg-transparent border ${
                  resumeError ? "border-red-500" : "border-[#00acb2]"
                } rounded file-box h-[220px] flex items-center justify-center overflow-hidden`}
              >
                <div className="w-full max-w-full">
                  <FileUpload onChange={handleResumeUpload} />
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-gray-400 upload-text">
                  Upload your resume or CV (PDF or Word format preferred)
                </p>
                {/* {resume && !resumeError && (
                  <p className="text-sm text-green-400">
                    ✓ {resume.name} selected (
                    {(resume.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )} */}
              </div>
              {resumeError && (
                <p className="mt-1 text-sm text-red-400">{resumeError}</p>
              )}
            </div>

            <div className="w-full mt-6">
              <button
                type="submit"
                disabled={isSubmitting || resumeError !== ""}
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 transition-colors duration-300 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
