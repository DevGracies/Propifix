"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import { landlordlisting } from "@/lib/constants";

const Landlords = () => {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState("Filter by location");
  const [showDropdown, setShowDropdown] = useState(false);
  const [landord, setLandlord] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Static locations for now
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

  // ✅ Simulated landlords fetch (replace later with real API)
  const fetchLandlords = async () => {
    try {
      // const res = await fetch("/api/landlord");
      // const data = await res.json();
      const data = agentlisting; // Replace with landlord listing
      setLandlord(data);
    } catch (error) {
      console.error("Error fetching landlords:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchAll = async () => {
  //     await fetchLocations();
  //     await fetchLandlords();
  //   };
  //   fetchAll();
  // }, []);

  // if (loading) return <p>Loading landlords...</p>;
  // if (landord.length === 0) return <p>No landlords found.</p>;

  return (
    <div>
      <div className="flex justify-between items-center w-full p-5">
        <h1 className="text-[#9D71C6] text-3xl font-medium">
          All <span className="text-[#5D14AD]">Landlords</span>
        </h1>
        <div className="w-[542px] h-[44px]">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full h-full flex items-center justify-between px-4 border border-gray-300 rounded-[12px] text-gray-700 bg-white"
          >
            <span
              className={
                selected === "Filter by location" ? "text-gray-400" : ""
              }
            >
              {selected}
            </span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>

          {showDropdown && (
            <ul className="absolute top-full left-0 z-10 w-full mt-1 bg-white border border-gray-300 rounded-[12px] shadow-lg max-h-60 overflow-y-auto">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {landlordlisting.map((landlord) => (
            <div
              key={landlord.id}
              className="relative border-2 border-[#5D14AD] w-[290px] h-[300px] rounded-[24px] p-5 flex items-center justify-center bg-cover bg-center"
            >
             <div
              className="rounded-xl m-2 absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('/home-images/sidehouse.svg')"
              }}>

             <div className="absolute inset-0 rounded-xl bg-black/70 z-0" />
             
            <div className="relative">
            <div className="flex flex-col h-full text-white justify-between p-7">
                <div className=" flex justify-center items-center">
                </div>
                <div className="space-y-2">
                  <h2 className="text-md italic">
                    Landlord Name: <span className="not-italic font-semibold">{landlord.name}</span>
                  </h2>
                  <div className="flex items-center ">
                    <h2 className="text-md italic flex items-center">
                      Rating:
                      <Rating
                        name={`rating-${landlord.id}`}
                        value={landlord.rating}
                        precision={0.5}
                        readOnly
                        className="flex items-center !text-white space-x-2 mb-1"
                      />
                    </h2>
                  </div>
                  <p className="text-md italic">Location: <span className="not-italic font-semibold">{landlord.location}</span></p>
                  <p className="text-md italic">Properties Owned: <span className="not-italic font-semibold">{landlord.propertiesOwned}</span></p>
                  <p className="text-md italic">Verification Status: <span className="not-italic font-semibold">{landlord.verificationStatus}</span></p>
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
  );
};

export default Landlords;
