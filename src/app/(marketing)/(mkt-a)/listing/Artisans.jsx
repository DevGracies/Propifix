"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import axios from "axios";
import { artisanlisting as topArtisansMock } from "@/lib/constants";
import LocationDropdown from "@/components/listing/LocationDropdown";
import { useRouter } from "next/navigation";

const Artisans = () => {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [artisanTypes, setArtisanTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Filter by location");
  const [selectedType, setSelectedType] = useState("Type of Artisan");

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredArtisans, setFilteredArtisans] = useState([]);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/artisan`);
        const data = response?.data?.data?.data || [];
        setArtisans(data);
        setFilteredArtisans(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to fetch artisans at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();

    setLocations([
      "All", "Ikeja", "Ipaja", "Agege", "Victoria Island", "Banana Island",
      "Ikoyi", "Lekki", "Ikorodu"
    ]);

    setArtisanTypes([
      "All",
      "Carpentry",
      "Dry_Cleaning",
      "Electrical_Work",
      "House_Cleaning",
      "Plumbing",
      "Painting",
      "Roofing",
      "Bricklaying",
      "Glazing",
      "Tiling",
      "HVAC_Installation",
      "Welding"
    ]);
    
  }, []);

  useEffect(() => {
    let filtered = artisans;

    if (selectedLocation !== "Filter by location" && selectedLocation !== "All") {
      filtered = filtered.filter(artisan =>
        artisan.homeAddress?.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    if (selectedType !== "Type of Artisan" && selectedType !== "All") {
      filtered = filtered.filter(artisan =>
        artisan.skill?.toLowerCase() === selectedType.toLowerCase()
      );
    }

    setFilteredArtisans(filtered);
  }, [selectedLocation, selectedType, artisans]);

  return (
    <div className="px-4 min-h-screen sm:px-6 md:px-8 lg:px-10 xl:px-20 py-8">
      <h1 className="text-[#9D71C6] text-3xl pb-4 font-medium">
        Top <span className="text-[#5D14AD]">Artisans</span>
      </h1>

      {/* Top Artisans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {topArtisansMock.map((artisan) => (
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
              {selectedType === "Type of Artisan"
                ? selectedType
                : selectedType === "All"
                ? "All"
                : selectedType.replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
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
                    {type === "All"
                      ? "All"
                      : type.replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Dropdown */}
          <LocationDropdown
            locations={locations}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
          />
        </div>
      </div>

      {/* All Artisans */}
      {loading ? (
         <div className="text-center w-full py-8">
         <p className="text-[#5D14AD] text-lg md:text-xl font-semibold italic">Loading artisans...</p>
       </div>
      ) : error ? (
        <p className="text-center text-red-500 text-lg italic">{error}</p>
      ) : filteredArtisans.length === 0 ? (
        <p className="text-center text-gray-600 text-lg italic">
          No artisans found for the selected filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtisans.map((artisan) => (
            <div
              key={artisan._id}
              className="relative rounded-[24px] border-2 border-[#5D14AD] h-[350px] bg-cover bg-center overflow-hidden shadow-md"
            >
              <div
                className="absolute rounded-[24px] inset-0 m-1 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/carpentry.jpg')" }}
              />
              <div className="absolute rounded-[24px] inset-0 m-1 bg-black/70 z-10" />

              <div className="relative z-20 h-full flex flex-col justify-between p-5 text-white">
                <div className="space-y-2 mt-5">
                  <h2 className="text-sm md:text-base lg:text-lg italic">
                    Artisan Name: <span className="font-semibold not-italic">{artisan.fullName}</span>
                  </h2>
                  <div className="flex items-center">
                    <span className="text-sm md:text-base lg:text-lg italic mr-2">Rating:</span>
                    <Rating
                      name={`rating-${artisan._id}`}
                      value={artisan.ratings.averageRating}
                      precision={0.5}
                      readOnly
                      className="!text-white"
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Location: <span className="font-semibold not-italic">{artisan.homeAddress}</span>
                  </p>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Type:{" "}
                    <span className="font-semibold not-italic">
                      {artisan.skill
                        ?.replace(/[_-]/g, " ")        
                        .replace(/\b\w/g, (c) => c.toUpperCase())} 
                    </span>
                  </p>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Reviews: <span className="font-semibold not-italic">18</span>
                  </p>
                </div>
                <button 
                onClick={() => router.push(`/artisan/${artisan._id}`)}
                className="mt-3 text-sm md:text-base lg:text-lg font-semibold border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Artisans;

