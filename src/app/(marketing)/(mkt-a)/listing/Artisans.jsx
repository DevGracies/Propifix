"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import { artisanlisting } from "@/lib/constants";

const Artisans = () => {
  const [locations, setLocations] = useState([]);
  const [artisanTypes, setArtisanTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Filter by location");
  const [selectedType, setSelectedType] = useState("Type of Artisan");

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLocations([
        "All", "Ikeja", "Agege", "Victoria Island", "Banana Island",
        "Ikoyi", "Lekki", "Ikorodu"
      ]);
      setArtisanTypes([
        "All", "Carpentry", "Dry Cleaning", "Electrical work", "House Cleaning",
        "Plumbing", "Painting", "Roofing", "Bricklaying", "Glazing",
        "Tiling", "HVAC Installation", "Welding"
      ]);
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-8">
      {/* Top Artisans */}
      <h1 className="text-[#9D71C6] text-3xl pb-4 font-medium">
        Top <span className="text-[#5D14AD]">Artisans</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {artisanlisting.map((artisan) => (
          <div
            key={artisan.id}
            className="relative rounded-[24px] border-2 border-[#5D14AD] h-[350px] bg-cover bg-center overflow-hidden shadow-md"
          >
            <div
              className="absolute rounded-[24px]  inset-0 m-1 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/images/carpentry.jpg')" }}
            />
            <div className="absolute rounded-[24px] inset-0 m-1 bg-black/70 z-10" />

            <div className="relative z-20 h-full flex flex-col justify-between p-5 text-white">
              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-white text-[#5D14AD] flex items-center justify-center text-xl font-bold">
                  {artisan.id}
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-sm md:text-base lg:text-lg italic">
                  Artisan Name: <span className="font-semibold not-italic">{artisan.name}</span>
                </h2>
                <div className="flex items-center">
                  <span className="text-sm md:text-base lg:text-lg italic mr-2">Rating:</span>
                  <Rating
                    name={`rating-${artisan.id}`}
                    value={artisan.rating}
                    precision={0.5}
                    readOnly
                    className="!text-white"
                  />
                </div>
                <p className="text-sm md:text-base lg:text-lg italic">Location: <span className="font-semibold not-italic">{artisan.location}</span></p>
                <p className="text-sm md:text-base lg:text-lg italic">Type: <span className="font-semibold not-italic">{artisan.type}</span></p>
                <p className="text-sm md:text-base lg:text-lg italic">
                  Reviews:
                  <span className="font-semibold not-italic ml-1">
                    {artisan.reviews}
                  </span>
                </p>
              </div>
              <button className="mt-3 text-sm md:text-base lg:text-lg font-semibold border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <h1 className="text-[#9D71C6] text-3xl font-medium">
          All <span className="text-[#5D14AD]">Artisans</span>
        </h1>
        <div className="flex gap-4 flex-wrap">
          {/* Artisan Type Dropdown */}
          <div className="relative h-[44px]">
            <button
              onClick={() => {
                setShowTypeDropdown(!showTypeDropdown);
                setShowLocationDropdown(false);
              }}
              className="w-[180px] h-full flex items-center justify-between px-4 border border-gray-300 rounded-[12px] text-gray-700 italic bg-white"
            >
              <span className={selectedType === "Type of Artisan" ? "text-gray-900" : ""}>
                {selectedType}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {showTypeDropdown && (
              <ul className="absolute top-full left-0 z-30 w-full mt-1 bg-white border border-gray-300 rounded-[12px] shadow-lg max-h-60 overflow-y-auto">
                {artisanTypes.map((type) => (
                  <li
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setShowTypeDropdown(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-purple-100"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative h-[44px]">
            <button
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowTypeDropdown(false);
              }}
              className="w-[180px] h-full flex items-center justify-between px-4 border border-gray-300 rounded-[12px] text-gray-700 italic bg-white"
            >
              <span className={selectedLocation === "Filter by location" ? "text-gray-900" : ""}>
                {selectedLocation}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {showLocationDropdown && (
              <ul className="absolute top-full left-0 z-30 w-full mt-1 bg-white border border-gray-300 rounded-[12px] shadow-lg max-h-60 overflow-y-auto">
                {locations.map((location) => (
                  <li
                    key={location}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocationDropdown(false);
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
      </div>

      {/* All Artisans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artisanlisting.map((artisan) => (
          <div
            key={artisan.id}
            className="relative rounded-[24px] border-2 border-[#5D14AD] h-[350px] bg-cover bg-center overflow-hidden shadow-md"
          >
            <div
              className="absolute rounded-[24px] m-1 inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/images/carpentry.jpg')" }}
            />
            <div className="absolute rounded-[24px] m-1 inset-0 bg-black/70 z-10" />

            <div className="relative z-20 h-full flex flex-col justify-between p-5 text-white">
              <div className="space-y-2 mt-5">
                <h2 className="text-sm md:text-base lg:text-lg italic">
                  Artisan Name: <span className="font-semibold not-italic">{artisan.name}</span>
                </h2>
                <div className="flex items-center">
                  <span className="text-sm md:text-base lg:text-lg italic mr-2">Rating:</span>
                  <Rating
                    name={`rating-${artisan.id}`}
                    value={artisan.rating}
                    precision={0.5}
                    readOnly
                    className="!text-white"
                  />
                </div>
                <p className="text-sm md:text-base lg:text-lg italic">Location: <span className="font-semibold not-italic">{artisan.location}</span></p>
                <p className="text-sm md:text-base lg:text-lg italic">Type: <span className="font-semibold not-italic">{artisan.type}</span></p>
                <p className="text-sm md:text-base lg:text-lg italic">
                  Reviews:
                  <span className="font-semibold not-italic ml-1">
                    {artisan.reviews}
                  </span>
                </p>
              </div>
              <button className="mt-3 text-sm md:text-base lg:text-lg font-semibold border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artisans;
