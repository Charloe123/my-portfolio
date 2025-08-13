import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import AnimatedShapes from "@/components/AnimatedShape";
import MouseTrailer from "@/components/MouseTrailer"; 
import TwoButton from "@/components/TwoButton";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <>
     
      <MouseTrailer />

      <Navbar />

      <section>
        <div className="relative h-screen w-full overflow-hidden ">
        
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src="/bg-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="z-10">
            <AnimatedShapes />
          </div>

          <div className="flex flex-col justify-center font-[Mersad] items-center h-[100%] z-50">
            <h1 className="text-white text-6xl ">Grafting Code & Creativity</h1>
            <p className="text-white text-2xl mt-3">
              Hello, I am Charlotte Ncube, a Software Developer
            </p>    
            <div className="gap-10 flex"></div>

            <TwoButton />
          </div>

        
          <div className="flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-[30px] h-full relative">
            
          </div>
        </div>
        <div >
          <AboutPage/>
        </div>

       
        <div className="mt-32">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
