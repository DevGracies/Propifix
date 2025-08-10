"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

const LocationDropdown = ({ locations, selected, setSelected }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div className="relative w-full md:w-[350px]">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full h-[44px] flex items-center justify-between px-4 border border-gray-300 rounded-[12px] text-gray-900 italic bg-white"
      >
        <span className={selected === "Filter by location" ? "text-gray-900" : ""}>
          {selected}
        </span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </button>

      {showDropdown && (
        <ul className="absolute top-full left-0 z-30 w-full mt-1 bg-white border border-gray-300 rounded-[12px] shadow-lg max-h-60 overflow-y-auto">
          {locations.map((location) => (
            <li
              key={location}
              onClick={() => {
                setSelected(location);
                setShowDropdown(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-purple-100"
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;
