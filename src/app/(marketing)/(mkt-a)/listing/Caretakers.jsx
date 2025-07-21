"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import { caretakerlisting } from "@/lib/constants";

const Caretakers = () => {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState("Filter by location");
  const [showDropdown, setShowDropdown] = useState(false);
  const [caretakers, setCaretakers] = useState([]);
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

  // const fetchLocations = async () => {
  //   try {
  //     const res = await fetch("api/location/caretaker")
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch caretaker location")
  //     }
  //     const data = await res.json()
  //     setCaretakers(data)
  //   } catch (error) {
  //     console.error("Error fetching caretaker location")
  //   }
  // }
  //  const fetchCaretakers = async () => {
  //   try {
  //     const res = await fetch("/api/agents")
  //     const data = await res.json()
  //     setCaretakers(data)
  //   } catch (error) {
  //     console.error("Error fetching caretakers:", error)
  //   } finally{
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    const fetchAllData = async () => {
      // fetchLocations();
      // await  fetchCaretakers()
      await fetchLocations();
    };
    fetchAllData();
  }, []);

  //   if (loading) return <p>Loading agents...</p>;
  // if (caretakers.length === 0) return <p>No agents found.</p>;
  return (
    <div>
      <div>
        <div className=" flex justify-between items-center w-full p-5">
          <h1 className="text-[#9D71C6] text-3xl font-medium">
            All <span className="text-[#5D14AD]">Caretakers</span>
          </h1>
          <div className=" w-[542px] h-[44px]">
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
        {caretakerlisting.map((caretaker) => (
            <div
              key={caretaker.id}
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
                    Caretaker Name: <span className="not-italic font-semibold">{caretaker.name}</span>
                  </h2>
                  <div className="flex items-center ">
                    <h2 className="text-md italic flex items-center">
                      Rating:
                      <Rating
                        name={`rating-${caretaker.id}`}
                        value={caretaker.rating}
                        precision={0.5}
                        readOnly
                        className="flex items-center !text-white space-x-2 mb-1"
                      />
                    </h2>
                  </div>
                  <p className="text-md italic">Location: <span className="not-italic font-semibold">{caretaker.location}</span></p>
                  <p className="text-md italic">Assigned Properties: <span className="not-italic font-semibold">{caretaker.assingedProperties}</span></p>
                  <p className="text-md italic">
                    Reviews:
                    <span className="text-md not-italic font-semibold ml-1">
                      {caretaker.reviews}
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

export default Caretakers;
