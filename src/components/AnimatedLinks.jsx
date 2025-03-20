import Image from "next/image";
import React from "react";

const AnimatedLinks = ({ className, children, iconColor }) => {
  return (
    <button
      className={`${className} flex flex-col justify-center items-center group cursor-pointer tracking-wide`}
    >
      <h1>{children}</h1>
      <div className="h-[10px] w-[53px] flex justify-center items-center gap-[1px]">
        <Image
          src={
            iconColor === "white" ? "/icons/white-left.svg" : "/icons/left.svg"
          }
          width={24}
          height={10}
          className="-translate-x-2 invisible group-hover:visible group-hover:translate-x-0 transition-all duration-200"
        />
        <div
          className={`w-[4px] h-[4px] rounded-[1px] ${
            iconColor === "white" ? "bg-white" : "bg-[#9747FF]"
          } invisible group-hover:visible transition-all duration-100`}
        ></div>
        <Image
          src={
            iconColor === "white"
              ? "/icons/white-right.svg"
              : "/icons/right.svg"
          }
          width={24}
          height={10}
          className="translate-x-2 invisible group-hover:visible group-hover:translate-x-0 transition-all duration-200"
        />
      </div>
    </button>
  );
};

export default AnimatedLinks;
