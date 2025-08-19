"use client";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedShapes from "@/components/AnimatedShape";
import MouseTrailer from "@/components/MouseTrailer";
import TwoButton from "@/components/TwoButton";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Tools from "@/components/Tools";
import MyProject from "../components/MyProject";


export default function Home() {
  return (
    <>
      <MouseTrailer />

      <Navbar />

      <section>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute bottom-1 top-0.5 left-0 w-full min-h-[100vh] object-cover z-[-1]"
          >
            <source src="/bg-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 z-10">
            <AnimatedShapes />
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-16">
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Grafting Code & Creativity
            </h1>
            <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Hello, I am Charlotte Ncube, a Software Developer
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-10">
              <TwoButton />
            </div>
          </div>
        </div>

        <div className="min-h-screen mt">
          <AboutPage />
        </div>

        <div>
          <Tools />
        </div>

        <div className="h-screen w-full  overflow-x-hidden">
          <MyProject />
        </div>

        <div className="">
          <ContactPage />
        </div>
      </section>
    </>
  );
}
