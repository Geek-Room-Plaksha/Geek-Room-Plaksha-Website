import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div
      className="flex justify-center items-center py-6"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        marginBottom: "50px"
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:pl-24 md:px-0">
        {/* Left side content */}
        <div className="w-full md:w-1/2 space-y-6 order-1">
          {!isMobile && (
            <h1 className="text-5xl font-bold text-white">HAVE A QUESTION ?</h1>
          )}
          {isMobile && (
            <h1 className="text-3xl font-bold text-white text-center">
              HAVE A QUESTION ?
            </h1>
          )}
          <p className="text-lg text-white">
            Send us your query and our team will get back to you as soon as
            possible!!
          </p>
        </div>

        {/* Right side Image */}
        <div className="w-full md:w-1/3 order-2 md:order-3">
          <img
            src="/images/email.png"
            alt="Contact Us"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 relative order-3 md:order-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg bg-transparent"
          >
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border-solid border-[#00acb2] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#00acb2] bg-transparent"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-solid border-[#00acb2] rounded focus:outline-none focus:ring-2 focus:ring-[#00acb2] bg-transparent"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border-solid border-[#00acb2] rounded focus:outline-none focus:ring-2 focus:ring-[#00acb2] bg-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
