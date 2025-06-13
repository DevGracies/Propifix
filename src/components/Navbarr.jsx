"use client";

import React from "react";

const Navbarr = ({ children }) => {
  const rows = 10;  
  const cols = 30;  
  const gapX = 3.5; 
  const gapY = 6;  

  return (
    <header className="relative bg_linear-purple h-[300px] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {Array.from({ length: rows * cols }).map((_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const top = row * gapY;
          const left = col * gapX;
          return (
            <div
              key={index}
              className="absolute rotate-45"
              style={{
                top: `${top}vh`,
                left: `${left}vw`,
                width: "2px",
                height: "28px",
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.05), rgba(255,255,255,0.9))",
                opacity: 0.8,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 px-6 py-16 md:py-24">
        {children}
      </div>
    </header>
  );
};

export default Navbarr;
