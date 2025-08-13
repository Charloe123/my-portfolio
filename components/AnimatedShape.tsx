"use client";

import React from "react";

export default function AnimatedShapesWithPulse() {
  const shapeCount = 8;

  return (
    <div className="absolute inset-0 overflow-hidden flex">
      {[...Array(shapeCount)].map((_, i) => {
        const size = 10 + Math.random() * 30;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 2;

        return (
          <div
            key={`shape-${i}`}
            className="absolute rounded-full bg-teal-600"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              animation: `bounce 4s ease-in-out infinite`, // slower bounce
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(0);
          }
          75% {
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
