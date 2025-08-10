import Image from "next/image";
import React from "react";

const AnimatedLinks = ({ className, children, iconColor, onClick, isSelected }) => {
  const leftIcon = iconColor === "white" ? "/icons/white-left.svg" : "/icons/left.svg";
  const rightIcon = iconColor === "white" ? "/icons/white-right.svg" : "/icons/right.svg";
  const dotColor = iconColor === "white" ? "bg-white" : "bg-[#9747FF]";

  return (
    <button
      onClick={onClick}
      className={`${className} flex flex-col justify-center items-center group cursor-pointer tracking-wide`}
    >
      <h1>{children}</h1>
      <div className="h-[10px] w-[53px] flex justify-center items-center gap-[1px]">
        {/* Left arrow */}
        <Image
          src={leftIcon}
          width={24}
          height={10}
          className={`transition-all duration-200 ${
            isSelected
              ? "visible translate-x-0"
              : "invisible -translate-x-2 group-hover:visible group-hover:translate-x-0"
          }`}
        />

        {/* Middle dot */}
        <div
          className={`w-[4px] h-[4px] rounded-[1px] transition-all duration-200 ${dotColor} ${
            isSelected ? "visible" : "invisible group-hover:visible"
          }`}
        ></div>

        {/* Right arrow */}
        <Image
          src={rightIcon}
          width={24}
          height={10}
          className={`transition-all duration-200 ${
            isSelected
              ? "visible translate-x-0"
              : "invisible translate-x-2 group-hover:visible group-hover:translate-x-0"
          }`}
        />
      </div>
    </button>
  );
};

export default AnimatedLinks;
