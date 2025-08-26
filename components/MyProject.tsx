"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ThreeCards() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md h-52 flex flex-col  relative">
            <h2 className="text-7xl text-gray-400 font-[Mersad] font-bold  animate-pulse opacity-0 relative">
              Projects
            </h2>
            <h4 className="text-5xl font-semibold font-[Mersad] absolute p-7">
              My Projects
            </h4>
            <div className="flex items-center gap-3 mt-10">
            <button className="flex items-center justify-center gap-2 rounded-full bg-purple-700 w-36 text-white p-2 font-[Nunito] hover:bg-purple-800 transition">
                View More
                <HiArrowRight size={20} />
              </button>

              <FaGithub
                size={28}
                className="text-gray-800 cursor-pointer hover:text-purple-700 transition"
              /> 
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md h-52 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">Card 2</h2>
            <p className="text-gray-600"></p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-center h-[440px]">
          <h2 className="text-xl font-bold mb-2">Card 3</h2>
          <p className="text-gray-600"></p>
        </div>
      </div>
    </section>
  );
}
