"use client";
import { cn } from "@/lib/utils";
import React from "react";

const ArrowButton = ({ className, backgroundColor, arrowColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 transition-transform duration-200  flex justify-center items-center w-[40px] h-[40px] rounded-full relative cursor-pointer hover:opacity-90",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="bg-white rounded-full shadow absolute"
      >
        <path
          d="M22.993 36.9997C23.2553 38.4894 24.6846 39.5024 26.1245 39.0392C29.9995 37.7928 33.4249 35.385 35.9161 32.111C38.9634 28.1064 40.389 23.1002 39.9087 18.0909C39.4283 13.0817 37.0773 8.43763 33.3246 5.08503C29.5718 1.73243 24.6931 -0.0822765 19.6616 0.00286016C14.6301 0.0880006 9.81564 2.06673 6.17846 5.54438C2.54127 9.02203 0.348719 13.743 0.0381294 18.7656C-0.27246 23.7882 1.32174 28.7433 4.50275 32.6426C7.10332 35.8304 10.6082 38.1209 14.5231 39.2356C15.9779 39.6498 17.3721 38.5889 17.5838 37.0912C18.0203 34.0039 22.4524 33.9289 22.993 36.9997Z"
          fill={backgroundColor}
        />
        <path
          d="M22.993 36.9997C23.2553 38.4894 24.6846 39.5024 26.1245 39.0392C29.9995 37.7928 33.4249 35.385 35.9161 32.111C38.9634 28.1064 40.389 23.1002 39.9087 18.0909C39.4283 13.0817 37.0773 8.43763 33.3246 5.08503C29.5718 1.73243 24.6931 -0.0822765 19.6616 0.00286016C14.6301 0.0880006 9.81564 2.06673 6.17846 5.54438C2.54127 9.02203 0.348719 13.743 0.0381294 18.7656C-0.27246 23.7882 1.32174 28.7433 4.50275 32.6426C7.10332 35.8304 10.6082 38.1209 14.5231 39.2356C15.9779 39.6498 17.3721 38.5889 17.5838 37.0912C18.0203 34.0039 22.4524 33.9289 22.993 36.9997Z"
          fill="white"
          fill-opacity="0.2"
        />
      </svg>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`z-10 text-${arrowColor}`}
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
