"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Artisans = () => {
  const [locations, setLocations] = useState([]);
  const [artisanTypes, setArtisanTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] =
    useState("Filter by location");
  const [selectedType, setSelectedType] = useState("Type of Artisan");

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  // // Static location options (can also be fetched from backend)
  // const fetchLocations = async () => {
  //   const data = [
  //     "All",
  //     "Ikeja",
  //     "Agege",
  //     "Victoria Island",
  //     "Banana Island",
  //     "Ikoyi",
  //     "Lekki",
  //     "Ikorodu",
  //   ];
  //   setLocations(data);
  // };
  const fetchLocations = async () => {
    try {
      const response = await fetch("api/location");
      if (!response.ok) {
        throw new Error("Failed to fetch artisan location");
      }
      const data = await response.json();
      setArtisanTypes(data);
    } catch (error) {
      console.error("Error fetching artisan location:", error);
    }
  };

  // const fetchArtisanTypes = () => {
  //   const data = [
  //     "All",
  //     "Carpentry",
  //     "Dry Cleaning",
  //     "Electrical work",
  //     "House Cleaning",
  //     "Plumbing",
  //     "Painting",
  //     "Roofing",
  //     "Bricklaying",
  //     "Glazing",
  //     "Tiling",
  //     "HVAC Installation",
  //     "Welding",
  //   ];
  //   setArtisanTypes(data);
  // };

  // ✅ Fetch artisan types from the backend instead of using static data
  const fetchArtisanTypes = async () => {
    try {
      const response = await fetch("/api/artisan-types"); // ⬅️ Replace with your actual endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch artisan types");
      }
      const data = await response.json(); // ⬅️ Assume backend returns an array of strings
      setArtisanTypes(data);              // ⬅️ Update state with fetched artisan types
    } catch (error) {
      console.error("Error fetching artisan types:", error);
    }
  }

  // Fetching artisan data from backend
  const fetchArtisans = async () => {
    try {
      const res = await fetch("/api/artisan"); // ✅ API call to your backend
      const data = await res.json(); // ✅ Parse JSON response
      setArtisans(data); // ✅ Store artisans data in state
    } catch (error) {
      console.error("Error fetching artisans", error);
    } finally {
      setLoading(false); // ✅ Stop loading state
    }
  };
  useEffect(() => {
    const fetchAllData = async () => {
      await fetchLocations();
      await fetchArtisanTypes();
      await fetchArtisans();
    };
    fetchAllData();
  }, []);

  // Optional Loading/Empty UI
  if (loading) return <p>Loading artisans...</p>;
  if (artisans.length === 0) return <p>No artisans found.</p>;

  return (
    <div>
      {/* Heading */}
      <div>
        <h1 className="text-[#9D71C6] text-3xl font-medium">
          Top <span className="text-[#5D14AD]">Artisans</span>
        </h1>
      </div>

      {/* Filter section */}
      <div className="flex justify-between items-center w-full mt-4">
        <h1 className="text-[#9D71C6] text-3xl font-medium">
          All <span className="text-[#5D14AD]">Artisans</span>
        </h1>

        <div className="flex gap-3">
          {/* Type Filter Dropdown */}
          <div className="relative h-[44px]">
            <button
              onClick={() => {
                setShowTypeDropdown(!showTypeDropdown);
                setShowLocationDropdown(false);
              }}
              className="w-full h-full flex items-center justify-between px-4 border border-gray-300 rounded-[12px] text-gray-700 bg-white"
            >
              <span
                className={
                  selectedType === "Type of Artisan" ? "text-gray-400" : ""
                }
              >
                {selectedType}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {showTypeDropdown && (
              <ul className="absolute top-full left-0 z-10 w-full mt-1 bg-white border border-gray-300 rounded-[12px] shadow-lg max-h-60 overflow-y-auto">
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

          {/* Location Filter Dropdown */}
          <div className="relative h-[44px]">
            <button
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowTypeDropdown(false);
              }}
              className="w-full h-full flex items-center justify-between px-4 border border-gray-300 rounded-[12px] text-gray-700 bg-white"
            >
              <span
                className={
                  selectedLocation === "Filter by location"
                    ? "text-gray-400"
                    : ""
                }
              >
                {selectedLocation}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </button>

            {showLocationDropdown && (
              <ul className="absolute top-full left-0 z-10 w-full mt-1 bg-white border border-gray-300 rounded-[12px] shadow-lg max-h-60 overflow-y-auto">
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
    </div>
  );
};

export default Artisans;
