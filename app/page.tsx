"use client";

import React from "react";
import { motion } from "framer-motion";

import TwoButton from "@/components/TwoButton";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Tools from "@/components/Tools";
import MyProject from "../components/MyProject";

export default function Home() {
  return (
    <>
    

     
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#947EA7] leading-tight">
              <span className="block text-[#6E2B62]">
                Crafting Code
              </span>{" "}
              & Creativity
            </h1>

            <p className="text-white text-lg sm:text-xl leading-relaxed max-w-lg">
              Hello, I am{" "}
              <span className="text-[#947EA7] font-semibold">
                Charlotte Ncube
              </span>
              , a Software Developer turning ideas into immersive digital
              experiences.
            </p>

            <div className="pt-4 flex items-center justify-end w-full">
              <TwoButton />
              
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="animate-bounce w-12 h-12 bg-[#947EA7]/20 backdrop-blur-md rounded-full flex items-center justify-center text-[#1F162F] hover:text-[#6E2B62] hover:bg-[#947EA7]/30 transition-all duration-300 ml-10"
                aria-label="Scroll down"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-96 h-96 animate-rotate-slow">
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#947EA7] via-[#6E2B62] to-[#0A0F1F] rounded-full opacity-20 animate-pulse"></div>

              
              <div className="absolute inset-0 flex items-center justify-center">
              
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#007ACC] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  VS
                </div>

                <div className="absolute top-12 right-12 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  N
                </div>

            
                <div className="absolute bottom-12 right-12 w-12 h-12 bg-[#61DAFB] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  R
                </div>

                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#3178C6] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  TS
                </div>

                
                <div className="absolute bottom-12 left-12 w-12 h-12 bg-[#E34F26] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  HTML
                </div>

               
                <div className="absolute top-12 left-12 w-12 h-12 bg-[#06B6D4] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  TW
                </div>

               
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-[#1572B6] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  CSS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    
      <section className="min-h-screen pt-0">
        <AboutPage />
      </section>

      <section>
        <Tools />
      </section>

      <section id="projects" className=" w-full overflow-x-hidden">
        <MyProject />
      </section>
<section>
  <ContactPage />
</section>
    </>
  );
}
