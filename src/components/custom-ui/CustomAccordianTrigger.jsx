"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";


export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;

export const CustomAccordionTrigger = React.forwardRef(
  ({ className, children, value, openItem, ...props }, ref) => (
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex items-center justify-between w-full py-4 text-left",
        className
      )}
      {...props}
    >
      {children}
      <div
        className={cn(
          "shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 flex justify-center items-center w-[40px] h-[40px] rounded-full relative",
          openItem === value ? "-rotate-180" : "rotate-0"
        )}
      >
        {openItem !== value ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="bg-[radial-gradient(circle,_#d3d3d3,_#ffffff)] rounded-full shadow absolute"
          >
            <path
              d="M22.993 36.9997C23.2553 38.4894 24.6846 39.5024 26.1245 39.0392C29.9995 37.7928 33.4249 35.385 35.9161 32.111C38.9634 28.1064 40.389 23.1002 39.9087 18.0909C39.4283 13.0817 37.0773 8.43763 33.3246 5.08503C29.5718 1.73243 24.6931 -0.0822765 19.6616 0.00286016C14.6301 0.0880006 9.81564 2.06673 6.17846 5.54438C2.54127 9.02203 0.348719 13.743 0.0381294 18.7656C-0.27246 23.7882 1.32174 28.7433 4.50275 32.6426C7.10332 35.8304 10.6082 38.1209 14.5231 39.2356C15.9779 39.6498 17.3721 38.5889 17.5838 37.0912C18.0203 34.0039 22.4524 33.9289 22.993 36.9997Z"
              fill="white"
            />
            <path
              d="M22.993 36.9997C23.2553 38.4894 24.6846 39.5024 26.1245 39.0392C29.9995 37.7928 33.4249 35.385 35.9161 32.111C38.9634 28.1064 40.389 23.1002 39.9087 18.0909C39.4283 13.0817 37.0773 8.43763 33.3246 5.08503C29.5718 1.73243 24.6931 -0.0822765 19.6616 0.00286016C14.6301 0.0880006 9.81564 2.06673 6.17846 5.54438C2.54127 9.02203 0.348719 13.743 0.0381294 18.7656C-0.27246 23.7882 1.32174 28.7433 4.50275 32.6426C7.10332 35.8304 10.6082 38.1209 14.5231 39.2356C15.9779 39.6498 17.3721 38.5889 17.5838 37.0912C18.0203 34.0039 22.4524 33.9289 22.993 36.9997Z"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="bg-[radial-gradient(circle,_#d3d3d3,_#ffffff)] rounded-full shadow absolute rotate-180"
          >
            <path
              d="M22.993 3.0003C23.2553 1.5106 24.6846 0.497567 26.1245 0.960754C29.9995 2.20723 33.4249 4.61503 35.9161 7.88895C38.9634 11.8936 40.389 16.8998 39.9087 21.9091C39.4283 26.9183 37.0773 31.5624 33.3246 34.915C29.5718 38.2676 24.6931 40.0823 19.6616 39.9971C14.6301 39.912 9.81565 37.9333 6.17846 34.4556C2.54127 30.978 0.348724 26.257 0.0381332 21.2344C-0.272457 16.2118 1.32174 11.2567 4.50275 7.3574C7.10332 4.16964 10.6082 1.87911 14.5231 0.764446C15.9779 0.350241 17.3721 1.41105 17.5838 2.90877C18.0203 5.9961 22.4524 6.0711 22.993 3.0003Z"
              fill="url(#paint0_linear_144_26613)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_144_26613"
                x1="0"
                y1="0"
                x2="40"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9747FF" />
                <stop
                  offset="1"
                  stop-color="#5D14AD"
                />
              </linearGradient>
            </defs>
          </svg>
        )}

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("z-10", openItem === value ? "text-white" : "text-purple-800")}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </AccordionPrimitive.Trigger>
  )
);
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";
