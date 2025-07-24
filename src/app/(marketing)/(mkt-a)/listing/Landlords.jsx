"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import { landlordlisting } from "@/lib/constants";

const Landlords = () => {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState("Filter by location");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const data = [
      "All",
      "Ikeja",
      "Agege",
      "Victoria Island",
      "Banana Island",
      "Ikoyi",
      "Lekki",
      "Ikorodu",
    ];
    setLocations(data);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-6 gap-4">
        <h1 className="text-[#9D71C6] text-3xl font-medium">
          All <span className="text-[#5D14AD]">Landlords</span>
        </h1>

        {/* Filter Dropdown */}
        <div className="relative w-full md:w-[350px]">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full h-[44px] flex items-center justify-between px-4 border border-gray-300 rounded-[12px] text-gray-700 italic bg-white"
          >
            <span className={selected === "Filter by location" ? "text-gray-900" : ""}>
              {selected}
            </span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>

          {showDropdown && (
            <ul className="absolute top-full left-0 z-20 w-full mt-1 bg-white border border-gray-300 rounded-[12px] shadow-lg max-h-60 overflow-y-auto">
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
      </div>

      {/* Landlord */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {landlordlisting.map((landlord) => (
          <div
            key={landlord.id}
            className="relative border-2 border-[#5D14AD] h-[350px] rounded-[24px] overflow-hidden bg-cover bg-center"
          >
            <div
              className="rounded-[24px] absolute m-1 inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/backgrounds/about_page_background.png')",
              }}
            >
              <div className="absolute inset-0 rounded-[24px] bg-black/70" />

              <div className="relative z-10 p-4 flex flex-col justify-between h-full text-white">
                <div className="space-y-2">
                  <h2 className="text-sm md:text-base lg:text-lg italic">
                    Landlord Name:{" "}
                    <span className="not-italic font-semibold">{landlord.name}</span>
                  </h2>
                  <div className="flex items-center">
                    <span className="text-sm md:text-base lg:text-lg italic">Rating:</span>
                    <Rating
                      name={`rating-${landlord.id}`}
                      value={landlord.rating}
                      precision={0.5}
                      readOnly
                      className="!text-white ml-2"
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Location:{" "}
                    <span className="not-italic font-semibold">{landlord.location}</span>
                  </p>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Properties Owned:{" "}
                    <span className="not-italic font-semibold">{landlord.propertiesOwned}</span>
                  </p>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Verification Status:{" "}
                    <span className="not-italic font-semibold">{landlord.verificationStatus}</span>
                  </p>
                </div>
                <button className="mt-4 text-sm md:text-base lg:text-lg font-semibold border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landlords;
