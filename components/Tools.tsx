"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

export default function Tools() {
  const tools = [
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <SiNextdotjs className="text-[#000000]" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
    { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
  ];

  return (
    <section
      id="tools"
      className="py-20 text-[#F5F7FA] text-center overflow-hidden bg-black"
    >
      <h2 className="text-4xl font-bold mb-12">
        My <span className="text-[#947EA7]">Tools & Skills</span>
      </h2>

      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-6 sm:space-x-12"
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
              className="flex flex-col items-center bg-[#947EA7]/20  backdrop-blur-sm p-4 sm:p-6 rounded-lg text-white shadow-lg min-w-[120px] sm:min-w-[150px] mt-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            >
              <div className="text-4xl sm:text-5xl mb-3">{tool.icon}</div>
              <p className="text-base sm:text-lg">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
