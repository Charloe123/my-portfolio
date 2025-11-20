"use client";

import React from "react";
import { FaHandshake, FaDownload } from "react-icons/fa";

export default function TwoButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
     
      <button
        className="flex items-center justify-center gap-2 sm:gap-2.5 px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto bg-purple-700 hover:bg-purple-500 text-white rounded-full font-semibold transition-transform duration-200 transform hover:scale-105"
        onClick={() => alert("Let's connect!")}
      >
        <FaHandshake size={18} />
        Let us Connect
      </button>

      
      <button
        className="flex items-center justify-center gap-2 sm:gap-2.5 px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-white rounded-full font-bold transition-transform duration-200 transform hover:scale-105"
        onClick={() => alert("Downloading Resume...")}
      >
        <FaDownload size={18} />
        Download Resume
      </button>
    </div>
  );
}
