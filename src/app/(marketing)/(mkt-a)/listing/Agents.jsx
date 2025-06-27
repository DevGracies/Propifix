"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import { agentlisting } from "@/lib/constants";

const Agents = () => {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState("Filter by location");
  const [showDropdown, setShowDropdown] = useState(false);
  const [agents, setAgents] = useState([]);
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
  //     const res = await fetch("/api/agents")
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch agents location")
  //     }
  //     const data = await res.json()
  //     setLocations(data)
  //   } catch (error) {
  //   console.error("Error fetching agents location:", error)
  //   }
  // }
  //  const fetchAgents = async () => {
  //     try {
  //       const res = await fetch("/api/agents"); // Example API route
  //       const data = await res.json();
  //       setAgents(data);
  //     } catch (error) {
  //       console.error("Error fetching agents:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchLocations();
      // await fetchAgents();
    };
    fetchAllData();
  }, []);

  // if (loading) return <p>Loading agents...</p>;
  // if (agents.length === 0) return <p>No agents found.</p>;
  return (
    <div>
      <div>
        <h1 className="text-[#9D71C6] text-3xl font-medium">
          Top House <span className="text-[#5D14AD]">Agents</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* {agentlisting.map((agent) => (
            <div key={agent.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-1">{agent.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{agent.location}</p>
              <div className="flex items-center space-x-2 mb-1">
                <Rating
                  name={`rating-${agent.id}`}
                  value={agent.rating}
                  precision={0.5}
                  readOnly
                />
                <span className="text-gray-500 text-sm">
                  ({agent.reviews} reviews)
                </span>
              </div>
            </div>
          ))} */}
          {agentlisting.map((agent) => (
            <div
              key={agent.id}
              className="relative w-[290px] h-[267px] rounded-[24px] p-5  flex items-center justify-center bg-cover bg-center"
              style={{
                borderWidth: "2.4px",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(229.55deg, #9747FF 0%, #5D14AD 100%) 1",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundImage: "url('/backgroundListing.png')",
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div className=" flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                    {agent.id}
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">
                    Agent Name: {agent.name}
                  </h2>
                  <div className="flex items-center ">
                    <h2 className="text-sm">
                      Rating:
                      <Rating
                        name={`rating-${agent.id}`}
                        value={agent.rating}
                        precision={0.5}
                        readOnly
                        className="flex items-center space-x-2 mb-1"
                      />
                    </h2>
                  </div>
                  <p className="text-sm">Location: {agent.location}</p>
                  <p className="text-sm">
                    Reviews:
                    <span className="text-gray-500 text-sm ml-1">
                      {agent.reviews}
                    </span>
                  </p>
                </div>
                <button className="mt-4 border border-black px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className=" flex justify-between items-center w-full p-7">
          <h1 className="text-[#9D71C6] text-3xl font-medium">
            Other <span className="text-[#5D14AD]">Agents</span>
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
          {agentlisting.map((agent) => (
            <div
              key={agent.id}
              className="relative w-[290px] h-[267px] rounded-[24px] p-5  flex items-center justify-center bg-cover bg-center"
              style={{
                borderWidth: "2.4px",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(229.55deg, #9747FF 0%, #5D14AD 100%) 1",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundImage: "url('/backgroundListing.png')",
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div className=" flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                    {agent.id}
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">
                    Agent Name: {agent.name}
                  </h2>
                  <div className="flex items-center ">
                    <h2 className="text-sm">
                      Rating:
                      <Rating
                        name={`rating-${agent.id}`}
                        value={agent.rating}
                        precision={0.5}
                        readOnly
                        className="flex items-center space-x-2 mb-1"
                      />
                    </h2>
                  </div>
                  <p className="text-sm">Location: {agent.location}</p>
                  <p className="text-sm">
                    Reviews:
                    <span className="text-gray-500 text-sm ml-1">
                      {agent.reviews}
                    </span>
                  </p>
                </div>
                <button className="mt-4 border border-black text-black px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
