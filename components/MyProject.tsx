"use client";

import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Jameson",
    github: "https://github.com/user/project-one",
    description: "This is Project One.",
    image:
      "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763372734/Capture_jam_d4d2vk.png",
    liveLink: "https://project-one.com",
  },
  {
    id: 2,
    title: "Nyamatusi",
    github: "https://github.com/user/project-two",
    description: "This is Project Two.",
    image:
      "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763372736/Capture_Nyamatusi_jnheaw.png",
    liveLink: "https://project-two.com",
  },
  {
    id: 3,
    title: "Charlotte-facet",
    github: "https://github.com/user/project-three",
    description: "This is Project Three.",
    image:
      "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763382152/linked_j7ttcd.png",
    liveLink: "https://project-three.com",
  },
];

export default function ThreeCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
    } else {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const handleHover = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="flex flex-col gap-6">
          <div className="bg-black p-6 rounded-2xl shadow-md h-52 flex flex-col justify-center items-center relative">
            <h2 className="text-7xl text-gray-400 font-bold animate-pulse opacity-0">
              Projects
            </h2>
            <h4 className="text-5xl font-semibold text-white text-center">
              My Projects
            </h4>
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center gap-2 rounded-full bg-purple-700 w-36 text-white p-2 hover:bg-purple-800 transition">
                View More <HiArrowRight size={20} />
              </button>
              <FaGithub
                size={28}
                className="text-gray-800 cursor-pointer hover:text-purple-700 transition"
              />
            </div>
          </div>

          <div className="bg-black p-6 rounded-2xl shadow-md flex flex-col gap-4 overflow-y-auto max-h-96">
            {projects.map((proj, index) => (
              <div
                key={proj.id}
                onMouseEnter={() => handleHover(index)}
                className="flex justify-between items-center p-2 rounded-md cursor-pointer hover:bg-gray-800 transition"
              >
                <span className="font-semibold text-white">{proj.title}</span>
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-300 hover:text-purple-400" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-black p-6 rounded-2xl shadow-md h-[440px] overflow-hidden relative flex items-center justify-center"
          onWheel={handleWheel}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center justify-center absolute"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                width={400}
                height={256}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-white">
                {projects[currentIndex].title}
              </h2>
              <p className="text-gray-300 mb-2">
                {projects[currentIndex].description}
              </p>
              <a
                href={projects[currentIndex].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                View Live
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
