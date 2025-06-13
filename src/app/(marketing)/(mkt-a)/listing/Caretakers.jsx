"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Caretakers = () => {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState("Filter by location");
  const [showDropdown, setShowDropdown] = useState(false);
    const [caretakers, setCaretakers] = useState([]);
    const [loading, setLoading] = useState(true);

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
        const res = await fetch("api/location/caretaker")
        if (!res.ok) {
          throw new Error("Failed to fetch caretaker location")
        }
        const data = await res.json()
        setCaretakers(data)
      } catch (error) {
        console.error("Error fetching caretaker location")
      }
    } 
     const fetchCaretakers = async () => {
      try {
        const res = await fetch("/api/agents")
        const data = await res.json()
        setCaretakers(data)
      } catch (error) {
        console.error("Error fetching caretakers:", error)
      } finally{
        setLoading(false)
      }
    }

   
  useEffect(() => {
    const fetchAllData = async () => {
          // fetchLocations();
      await  fetchCaretakers()
      await fetchLocations()
    }
fetchAllData()
   
  }, []);

    if (loading) return <p>Loading agents...</p>;
  if (caretakers.length === 0) return <p>No agents found.</p>;
  return (
    <div>
      <div>
        <div className=" flex justify-between items-center w-full">
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
      </div>
    </div>
  );
};

export default Caretakers;
