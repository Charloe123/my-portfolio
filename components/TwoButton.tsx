"use client";

import React from "react";
import { FaHandshake, FaDownload } from "react-icons/fa"; // Icons

export default function TwoButtons() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      {/* Connect Button */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "12px 24px",
          minWidth: "220px", // Same width for both buttons
          backgroundColor: "#7928ca",
          color: "white",
          border: "none",
          borderRadius: "9999px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "16px",
          transition: "transform 0.2s ease, background-color 0.3s ease",
        }}
        onClick={() => alert("Let's connect!")}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#9b59b6";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#7928ca";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <FaHandshake size={18} />
        Let’s Connect
      </button>

      {/* Download Resume Button */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "12px 24px",
          minWidth: "220px", // Same width for both buttons
          backgroundColor: "#00d4ff",
          color: "#171717",
          border: "none",
          borderRadius: "9999px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "16px",
          transition: "transform 0.2s ease, background-color 0.3s ease",
        }}
        onClick={() => alert("Downloading Resume...")}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#66e0ff";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#00d4ff";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <FaDownload size={18} />
        Download Resume
      </button>
    </div>
  );
}
