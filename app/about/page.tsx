"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="text-gray-800 bg-black/10 min-h-[130vh] flex items-center justify-center px-6 py-0">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-20 mt-44">
        <motion.div
          className="flex-1 flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <div className="relative group">
            <div className="relative flex justify-center items-center">
              <div className="relative rounded-full bg-[#040d15] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
                <Image
                  src="/dev.jpg"
                  alt=""
                  fill
                  className="rounded-full object-contain shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-pink-500/40 via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I am{" "}
            <span className="font-semibold text-purple-600">Charlotte</span> - a
            passionate <span className="font-semibold">Software Developer</span>{" "}
            with a love for creating clean, functional, and user-friendly
            applications. I specialize in Next.js, React, and Tailwind CSS, and
            I enjoy solving complex problems with elegant solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <FloatingCard
              icon={<FaCode />}
              title="Web Development"
              desc="Building responsive and dynamic websites."
              delay={0}
            />
            <FloatingCard
              icon={<FaLaptopCode />}
              title="Frontend Focus"
              desc="Crafting beautiful UI with modern frameworks."
              delay={0.5}
            />
            <FloatingCard
              icon={<FaLightbulb />}
              title="Problem Solving"
              desc="Turning ideas into working solutions."
              delay={1}
            />
            <FloatingCard
              icon={<FaRocket />}
              title="Fast Learner"
              desc="Always exploring new tech & improving skills."
              delay={1.5}
            />
          </div>

          <div className="flex mt-[30px]">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-gray-800 rounded-full font-semibold shadow-md hover:bg-gray-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type FloatingCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
};

function FloatingCard({ icon, title, desc, delay }: FloatingCardProps) {
  return (
    <motion.div
      className="p-4 rounded-xl shadow hover:shadow-lg transition transform"
      animate={{
        y: [0, -10, 0],
        backgroundColor: [
          "#ffffff",
          "#f3e8ff",
          "#e0f2fe",
          "#fff7ed",
          "#ffffff",
        ], // cycles through colors
      }}
      transition={{
        delay,
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-purple-600 text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}
