"use client";

import React, { useEffect, useState } from "react";

export default function AnimatedShapesWithPulse() {
  const shapeCount = 8;
  const [shapes, setShapes] = useState<
    { size: number; top: number; left: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generatedShapes = Array.from({ length: shapeCount }, () => ({
      size: 10 + Math.random() * 30,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setShapes(generatedShapes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden flex">
      {shapes.map((shape, i) => (
        <div
          key={`shape-${i}`}
          className="absolute rounded-full bg-teal-600"
          style={{
            width: shape.size,
            height: shape.size,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            animation: `bounce 4s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}

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
