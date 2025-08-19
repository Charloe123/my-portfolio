"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function Tools() {
  const tools = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
    { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  ];

  return (
    <section id="tools" className="py-20  text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-12">
        My <span className="text-purple-500">Tools & Skills</span>
      </h2>

      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...tools, ...tools].map((tool, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg text-white shadow-lg min-w-[150px]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: i * 0.1, 
              }}
            >
              <div className="text-5xl mb-3">{tool.icon}</div>
              <p className="text-lg">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
