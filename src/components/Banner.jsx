"use client";
import React, { useEffect, useState } from "react";

const Banner = ({ content }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const rows = 6;
      const cols = 7;
      let id = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Odd rows (0, 2, 4) -> Full stars in columns 1 to 7
          if (row % 2 === 0) {
            newStars.push({
              id: id++,
              top: `${((row / (rows - 1)) * 100)*2}%`,
              left: `${(col / (cols - 1)) * 100}%`,
              width: "3px",
              height: "41px",
              opacity: 0.3 + Math.random() * 0.2,
            });
          }
          // Even rows (1, 3, 5) -> Skip the first column (col 0)
          else if (col > 0) {
            newStars.push({
              id: id++,
              top: `${(row / (rows - 1)) * 100}%`,
              left: `${(col / (cols - 1)) * 100}%`,
              width: "3px",
              height: "41px",
              opacity: 0.3 + Math.random() * 0.2,
            });
          }
        }
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="relative py-[55px] pt-28 md:pt-32 flex justify-center items-center bg-[linear-gradient(86deg,_#5D14AD_0%,_#9747FF_100%)] overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        {stars.map((star, index) => (
          <div
            key={star.id}
            className="absolute bg-gradient-to-t from-transparent to-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
              transform: "rotate(45deg)", // gives the shooting streak look
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">{content}</div>
    </div>
  );
};

export default Banner;
