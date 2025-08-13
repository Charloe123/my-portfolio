"use client";

import { useEffect, useState } from "react";

export default function MouseTrailer() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <>
      {/* Big circle with gradient from bottom to top */}
      <div
        style={{
          position: "fixed",
          top: pos.y - 50,
          left: pos.x - 50,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "linear-gradient(to top, #ec4899, #a855f7, #2dd4bf)", // Tailwind: pink-500 → purple-500 → teal-400
          pointerEvents: "none",
          zIndex: 9999,
          transition: "top 0.05s linear, left 0.05s linear",
        }}
      />

      
    </>
  );
}
