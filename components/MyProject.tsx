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
    github: "https://github.com/Charloe123/Jameson",
    description: "This is Project One.",
    image: "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763372734/Capture_jam_d4d2vk.png",
    liveLink: "https://jameson-theta.vercel.app/",
  },
  {
    id: 2,
    title: "Nyamatusi",
    github: "https://github.com/Charloe123/Nyamatusi",
    description: "This is Project Two.",
    image: "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763372736/Capture_Nyamatusi_jnheaw.png",
    liveLink: "https://nyamatusi-one.vercel.app/",
  },
  {
    id: 3,
    title: "Charlotte-Facet",
    github: "https://github.com/Charloe123/Charlotte-facet",
    description: "This is Project Three.",
    image: "https://res.cloudinary.com/dpahyb1x9/image/upload/v1763382152/linked_j7ttcd.png",
    liveLink: "https://charlotte-facet.vercel.app/",
  },
];

export default function ThreeCards() {
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000); 

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
    <section className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 bg-black">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">


        <div className="flex flex-col gap-8">

          <div className="bg-black p-6 sm:p-8 md:p-12 rounded-2xl shadow-md h-64 sm:h-72 md:h-80 flex flex-col relative border border-gray-800">
            <h2 className="text-5xl sm:text-6xl md:text-8xl text-gray-600 font-bold animate-pulse opacity-0">Projects</h2>
            <h4 className="text-4xl sm:text-5xl md:text-6xl font-semibold absolute p-6 sm:p-8 md:p-12 text-white">My Projects</h4>
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-6 sm:left-8 md:left-12 right-6 sm:right-8 md:right-12">
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-md">
                Explore my portfolio of innovative web applications and creative solutions
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <div className="flex items-center gap-4 sm:gap-6">
                  <button className="flex items-center justify-center gap-2 rounded-full bg-purple-700 w-28 sm:w-32 text-white py-2 px-3 sm:px-4 hover:bg-purple-800 transition text-xs sm:text-sm">
                    View More <HiArrowRight size={14} />
                  </button>
                  <FaGithub size={28} className="text-gray-300 cursor-pointer hover:text-purple-400 transition" />
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-gray-500 text-xs sm:text-sm">3 Projects</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Web Development</p>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-black p-4 sm:p-6 md:p-8 rounded-2xl shadow-md flex flex-col gap-4 sm:gap-6 overflow-y-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] border border-gray-800">
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
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Html</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">SASS</span>
                      
                    </>
                  )}
                  {projects[currentIndex].id === 2 && (
                    <>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Html</span>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">SASS</span>
                      
                    </>
                  )}
                  {projects[currentIndex].id === 3 && (
                    <>
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Nextjs</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Typescript</span>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">Mongo db</span>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Tailwind</span>
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
          className="bg-black p-4 sm:p-6 md:p-8 rounded-2xl shadow-md h-[450px] sm:h-[500px] md:h-[550px] overflow-hidden relative flex items-center justify-center border border-gray-800"
          onWheel={handleWheel}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center justify-center absolute px-4"
            >
              <div className="w-full h-64 sm:h-72 md:h-80 relative mb-4 sm:mb-6">
                <Image
                  fill
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="object-cover rounded-md"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white text-center">{projects[currentIndex].title}</h2>
              <p className="text-gray-300 mb-3 sm:mb-4 text-base sm:text-lg text-center max-w-sm sm:max-w-md">{projects[currentIndex].description}</p>
              <a
                href={projects[currentIndex].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 hover:underline text-base sm:text-lg font-medium"
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
