"use client";

import { FaArrowRight } from "react-icons/fa";

export default function MyProject() {
  return (
    <section className="min-h-[70vh] bg-gray-50 flex justify-center items-center px-6">
      <div className="relative bg-white shadow-2xl rounded-2xl p-12 w-full max-w-3xl overflow-hidden">
       
        <h2 className="text-8xl font-bold text-gray-100 absolute top-8 left-6 select-none font-[Mersad]">
          Projects
        </h2>

       
        <div className="relative z-10">
          <h4 className="text-4xl font-bold text-gray-800 mb-6 font-[Mersad]">
            My Projects
          </h4>

          <p className="text-lg md:text-xl text-gray-600 font-[Nunito] leading-relaxed">
            From concept to reality-my work in action.
          </p>
 
          <button className="mt-8 px-8 py-3 flex items-center gap-3  bg-teal-600 text-white rounded-full font-semibold hover:from-black hover:to-gray-800 transition-all duration-300 shadow-md">
            View More
            <FaArrowRight className="animate-pulse" />
          </button>
        </div>

      
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </section>
  );
}
