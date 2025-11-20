"use client";

import React, { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Jameson",
    github: "https://github.com/user/project-one",
    description: "This is Project One.",
    image: "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763372734/Capture_jam_d4d2vk.png",
    liveLink: "https://project-one.com",
  },
  {
    id: 2,
    title: "Nyamatusi",
    github: "https://github.com/user/project-two",
    description: "This is Project Two.",
    image: "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763372736/Capture_Nyamatusi_jnheaw.png",
    liveLink: "https://project-two.com",
  },
  {
    id: 3,
    title: "Mkhosane ASD",
    github: "https://github.com/user/project-three",
    description: "This is Project Three.",
    image: "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763382152/linked_j7ttcd.png",
    liveLink: "https://project-three.com",
  },
];

export default function ThreeCards() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with first project

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
    
      setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
    } else {
     
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-10 bg-black">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">


        <div className="flex flex-col gap-8">

          <div className="bg-black p-12 rounded-2xl shadow-md h-80 flex flex-col relative border border-gray-800">
            <h2 className="text-8xl text-gray-600 font-bold animate-pulse opacity-0">Projects</h2>
            <h4 className="text-6xl font-semibold absolute p-12 text-white">My Projects</h4>
            <div className="absolute bottom-12 left-12 right-12">
              <p className="text-gray-400 text-lg mb-6 max-w-md">
                Explore my portfolio of innovative web applications and creative solutions
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center justify-center gap-2 rounded-full bg-purple-700 w-32 text-white py-2 px-4 hover:bg-purple-800 transition text-sm">
                    View More <HiArrowRight size={16} />
                  </button>
                  <FaGithub size={36} className="text-gray-300 cursor-pointer hover:text-purple-400 transition" />
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">3 Projects</p>
                  <p className="text-gray-500 text-sm">Web Development</p>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-black p-8 rounded-2xl shadow-md flex flex-col gap-6 overflow-y-auto max-h-[500px] border border-gray-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-lg border border-gray-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-white text-lg">{projects[currentIndex].title}</h3>
                  <a href={projects[currentIndex].github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-400 hover:text-purple-400" size={20} />
                  </a>
                </div>
                <p className="text-gray-300 text-sm mb-3">{projects[currentIndex].description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[currentIndex].id === 1 && (
                    <>
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Node.js</span>
                      <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs">MongoDB</span>
                    </>
                  )}
                  {projects[currentIndex].id === 2 && (
                    <>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Next.js</span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">Tailwind</span>
                      <span className="bg-cyan-600 text-white px-2 py-1 rounded text-xs">TypeScript</span>
                    </>
                  )}
                  {projects[currentIndex].id === 3 && (
                    <>
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Express</span>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">PostgreSQL</span>
                    </>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={projects[currentIndex].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    View Live →
                  </a>
                  <a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 text-sm font-medium"
                  >
                    Source Code →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


        <div
          className="bg-black p-8 rounded-2xl shadow-md h-[550px] overflow-hidden relative flex items-center justify-center border border-gray-800"
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
              <div className="w-full h-80 relative mb-6">
                <Image
                  fill
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="object-cover rounded-md"
                />
              </div>
              <h2 className="text-3xl font-bold mb-3 text-white">{projects[currentIndex].title}</h2>
              <p className="text-gray-300 mb-4 text-lg text-center max-w-md">{projects[currentIndex].description}</p>
              <a
                href={projects[currentIndex].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 hover:underline text-lg font-medium"
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
