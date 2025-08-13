"use client";
import React, { useState } from "react";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending data
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#040d15] via-[#0d2c3b] to-[#285a6e] px-4 py-16"
    >
      <div className="max-w-2xl w-full bg-[#0d2c3b] p-8 rounded-xl shadow-xl text-[#bed2da] animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#42a6c4]">
          Get in Touch
        </h2>

        {submitted && (
          <div
            className="mb-6 px-4 py-3 rounded bg-green-600 text-green-100 text-center animate-fade-in"
            onClick={() => setSubmitted(false)}
            role="alert"
          >
            Thank you! Your message has been sent.
          </div>
        )}

        <form action={"https://formspree.io/f/xblkpgvj"} onSubmit={handleSubmit} className="space-y-6">
         
          <div className="relative group">
            <FiUser className="absolute left-3 top-3 text-[#bed2da]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full pl-10 pr-4 py-3 rounded-md bg-[#44434b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#42a6c4] peer"
            />
            <label className="absolute left-10 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#42a6c4] transition-all">
              Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative group">
            <FiMail className="absolute left-3 top-3 text-[#bed2da]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full pl-10 pr-4 py-3 rounded-md bg-[#44434b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#42a6c4] peer"
            />
            <label className="absolute left-10 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#42a6c4] transition-all">
              Email Address
            </label>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <FiMessageSquare className="absolute left-3 top-3 text-[#bed2da]" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder=" "
              className="w-full pl-10 pr-4 py-3 rounded-md bg-[#44434b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#42a6c4] peer resize-none"
            />
            <label className="absolute left-10 top-3 text-sm text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#42a6c4] transition-all">
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold text-white transition transform hover:scale-105 active:scale-95 ${
              loading
                ? "bg-[#42a6c4]/60 cursor-not-allowed"
                : "bg-[#42a6c4] hover:bg-[#227597]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
