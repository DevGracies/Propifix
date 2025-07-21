"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import { artisanlisting } from "@/lib/constants"; // 🔁 Your array of artisans (replace with real data)

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
  const fetchLocations = async () => {
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
  };
   const fetchArtisanTypes = () => {
    const data = [
      "All",
      "Carpentry",
      "Dry Cleaning",
      "Electrical work",
      "House Cleaning",
      "Plumbing",
      "Painting",
      "Roofing",
      "Bricklaying",
      "Glazing",
      "Tiling",
      "HVAC Installation",
      "Welding",
    ];
    setArtisanTypes(data);
  };

  // const fetchLocations = async () => {
  //   try {
  //     const res = await fetch("/api/artisans")
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch artisan locations")
  //     }
  //     const data = await res.json()
  //     setLocations(data)
  //   } catch (error) {
  //   console.error("Error fetching artisan locations:", error)
  //   }
  // }

  // const fetchArtisans = async () => {
  //   try {
  //     const res = await fetch("/api/artisans"); // Example API route
  //     const data = await res.json();
  //     setArtisans(data);
  //   } catch (error) {
  //     console.error("Error fetching artisans:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchLocations();
      await fetchArtisanTypes()
      // await fetchArtisans();
    };
    fetchAllData();
  }, []);

  // if (loading) return <p>Loading artisans...</p>;
  // if (artisans.length === 0) return <p>No artisans found.</p>;

  return (
    <div>
      <div>
        <h1 className="text-[#9D71C6] pb-4 text-3xl font-medium">
          Top <span className="text-[#5D14AD]">Artisans</span>
        </h1>
        <div className="grid grid-cols-1 pb-4 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* {artisanlisting.map((artisan) => (
            <div key={artisan.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-1">{artisan.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{artisan.location}</p>
              <div className="flex items-center space-x-2 mb-1">
                <Rating
                  name={`rating-${artisan.id}`}
                  value={artisan.rating}
                  precision={0.5}
                  readOnly
                />
                <span className="text-gray-500 text-sm">
                  ({artisan.reviews} reviews)
                </span>
              </div>
            </div>
          ))} */}

          {/* Top Artisans */}
          {artisanlisting.map((artisan) => (
            <div
              key={artisan.id}
              className="relative border-2 border-[#5D14AD] w-[290px] h-[310px] rounded-[24px] p-5 flex items-center justify-center bg-cover bg-center"
            >
             <div
              className="rounded-xl m-2 absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('/images/carpentry.jpg')"
              }}>

             <div className="absolute inset-0 rounded-xl bg-black/70 z-0" />
             
            <div className="relative">
            <div className="flex flex-col h-full text-white justify-between p-4">
                <div className=" flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#5D14AD] flex items-center justify-center text-xl font-bold">
                    {artisan.id}
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-md italic">
                    Artisan Name: <span className="not-italic font-semibold">{artisan.name}</span>
                  </h2>
                  <div className="flex items-center ">
                    <h2 className="text-md italic flex items-center">
                      Rating:
                      <Rating
                        name={`rating-${artisan.id}`}
                        value={artisan.rating}
                        precision={0.5}
                        readOnly
                        className="flex items-center !text-white space-x-2 mb-1"
                      />
                    </h2>
                  </div>
                  <p className="text-md italic">Location: <span className="not-italic font-semibold">{artisan.location}</span></p>
                  <p className="text-md italic">Type: <span className="not-italic font-semibold">{artisan.type}</span></p>
                  <p className="text-md italic">
                    Reviews:
                    <span className="text-md not-italic font-semibold ml-1">
                      {artisan.reviews}
                    </span>
                  </p>
                </div>
                <button className="mt-4 border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
             </div>
            </div>
          ))}
        </div>
      </div>

      <div>
       <div className="flex justify-between items-center w-full mt-4 p-5">
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

       {/* All Artisans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {artisanlisting.map((artisan) => (
            <div
              key={artisan.id}
              className="relative border-2 border-[#5D14AD] w-[290px] h-[300px] rounded-[24px] p-5 flex items-center justify-center bg-cover bg-center"
            >
             <div
              className="rounded-xl m-2 absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('/images/carpentry.jpg')"
              }}>

             <div className="absolute inset-0 rounded-xl bg-black/70 z-0" />
             
            <div className="relative">
            <div className="flex flex-col h-full text-white justify-between p-7">
                <div className=" flex justify-center items-center">
                </div>
                <div className="space-y-2">
                  <h2 className="text-md italic">
                    Artisan Name: <span className="not-italic font-semibold">{artisan.name}</span>
                  </h2>
                  <div className="flex items-center ">
                    <h2 className="text-md italic flex items-center">
                      Rating:
                      <Rating
                        name={`rating-${artisan.id}`}
                        value={artisan.rating}
                        precision={0.5}
                        readOnly
                        className="flex items-center !text-white space-x-2 mb-1"
                      />
                    </h2>
                  </div>
                  <p className="text-md italic">Location: <span className="not-italic font-semibold">{artisan.location}</span></p>
                  <p className="text-md italic">Type: <span className="not-italic font-semibold">{artisan.type}</span></p>
                  <p className="text-md italic">
                    Reviews:
                    <span className="text-md not-italic font-semibold ml-1">
                      {artisan.reviews}
                    </span>
                  </p>
                </div>
                <button className="mt-7 border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artisans;
