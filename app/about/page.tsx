"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket, } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="about" className="text-[#F5F7FA] bg-black min-h-screen flex items-center justify-center px-6 py-20 -mt-32">
      <div className="max-w-7xl w-full">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-[#947EA7]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#947EA7] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#947EA7] to-[#6E2B62] p-1">
                <div className="relative rounded-2xl bg-[#0A0F1F] w-80 h-80 sm:w-96 sm:h-96">
                  <Image
                    src="/dev.jpg"
                    alt="Charlotte Ncube"
                    fill
                    className="rounded-2xl object-cover shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#947EA7]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>
             
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#947EA7] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#6E2B62] rounded-full animate-pulse"></div>
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="pt-12">
              <h3 className="text-3xl font-bold mb-6 text-[#947EA7]">My Journey</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                A passionate <span className="text-[#947EA7] font-semibold">Software Developer</span> with a love for creating
                clean, functional, and user-friendly applications. I specialize in modern web technologies and enjoy
                solving complex problems with elegant solutions.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                My journey in tech is driven by curiosity and the desire to build meaningful digital experiences that
                make a difference. When I am not coding, you will find me exploring new technologies or contributing to
                open-source projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SkillCard icon={<FaCode />} title="Frontend" desc="React & Next.js" />
              <SkillCard icon={<FaLaptopCode />} title="Frontend" desc="React & Vue.js" />
              <SkillCard icon={<FaLightbulb />} title="UI/UX" desc="Design & Prototyping" />
              <SkillCard icon={<FaRocket />} title="Performance" desc="Optimization & SEO" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function SkillCard({ icon, title, desc }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-[#947EA7]/25 rounded-xl border border-[#947EA7]/35 hover:border-[#947EA7]/60 transition-all duration-300 shadow-lg"
    >
      <div className="text-[#947EA7] text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </motion.div>
  );
}
