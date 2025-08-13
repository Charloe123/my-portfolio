"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className=" text-gray-800 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <div className="relative group">
            <Image
              src="/portfolio.jpg"
              alt=""
              width={288}
              height={288}
              className="rounded-2xl object-cover shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-pink-500/40 via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>
        </motion.div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I am{" "}
            <span className="font-semibold text-purple-600">Charlotte</span> — a
            passionate <span className="font-semibold">Software Developer</span>{" "}
            with a love for creating clean, functional, and user-friendly
            applications. I specialize in{" "}
            <span className="font-semibold">
              Next.js, React, and Tailwind CSS
            </span>
            , and I enjoy solving complex problems with elegant solutions.
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

          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-semibold shadow-md hover:bg-gray-300 transition"
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
      className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition transform"
      animate={{ y: [0, -10, 0] }}
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
