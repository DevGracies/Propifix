"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Rating } from "@mui/material";
import axios from "axios";
import { agentlisting as topAgentsMock } from "@/lib/constants";

const Agents = () => {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState("Filter by location");
  const [showDropdown, setShowDropdown] = useState(false);
  const [allAgents, setAllAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  console.log("BASE_URL:", BASE_URL);

  useEffect(() => {
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

    const fetchAllAgents = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/agent`);
        const agents = res?.data?.data?.data;
    
        if (Array.isArray(agents)) {
          setAllAgents(agents);
        } else {
          setAllAgents([]);
          console.error("Unexpected agents format:", res.data);
        }
      } catch (err) {
        console.error("Failed to fetch agents:", err);
        setError("Unable to fetch agents at this time. Please try again later.");
        setAllAgents([]);
      } finally {
        setLoading(false);
      }
    };
    

    fetchLocations();
    fetchAllAgents();
  }, [BASE_URL]);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-8">
      <div>
        <h1 className="text-[#9D71C6] text-3xl pb-4 font-medium">
          Top House <span className="text-[#5D14AD]">Agents</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {topAgentsMock.map((agent) => (
            <div
              key={agent.id}
              className="relative border-2 border-[#5D14AD] h-[350px] rounded-[24px] overflow-hidden bg-cover bg-center"
            >
              <div
                className="rounded-[24px] absolute m-1 inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/backgrounds/agent-card-bg.jpg')",
                }}
              >
                <div className="absolute rounded-[24px] inset-0 bg-black/70" />
                <div className="relative z-10 p-4 flex flex-col justify-between h-full text-white">
                  <div className="flex justify-center mb-2">
                    <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white text-[#5D14AD] flex items-center justify-center text-xl font-bold">
                      {agent.id}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-sm md:text-base lg:text-lg italic">
                      Agent Name:{" "}
                      <span className="not-italic font-semibold">{agent.name}</span>
                    </h2>
                    <div className="flex items-center">
                      <span className="text-sm md:text-base lg:text-lg italic">Rating:</span>
                      <Rating
                        name={`rating-${agent.id}`}
                        value={agent.rating}
                        precision={0.5}
                        readOnly
                        className="!text-white ml-2"
                      />
                    </div>
                    <p className="text-sm md:text-base lg:text-lg italic">
                      Location:{" "}
                      <span className="not-italic font-semibold">{agent.location}</span>
                    </p>
                    <p className="text-sm md:text-base lg:text-lg italic">
                      Reviews:{" "}
                      <span className="not-italic font-semibold ml-1">{agent.reviews}</span>
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

      <div className="mt-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-6 gap-4">
          <h1 className="text-[#9D71C6] text-3xl font-medium">
            Other <span className="text-[#5D14AD]">Agents</span>
          </h1>

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

        {error && <p className="text-red-600 italic">{error}</p>}

        {loading ? (
          <div className="text-center w-full py-8">
            <p className="text-[#5D14AD] text-lg md:text-xl font-semibold italic">Loading agents...</p>
          </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.isArray(allAgents) &&
                  allAgents.map((agent) => (
                    <div
                      key={agent.id}
                      className="relative border-2 border-[#5D14AD] w-full h-[350px] rounded-[24px] overflow-hidden bg-cover bg-center"
                    >
                      <div
                        className="rounded-[24px] m-1 absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: "url('/backgrounds/agent-card-bg.jpg')",
                        }}
                      >
                        <div className="absolute rounded-[24px] inset-0 bg-black/70" />
                        <div className="relative z-10 p-4 flex flex-col justify-between h-full text-white">
                          <div className="space-y-1 mt-5">
                            <h2 className="text-sm md:text-base lg:text-lg italic">
                              Agent Name:{" "}
                              <span className="not-italic font-semibold">{agent.fullName}</span>
                            </h2>
                            <div className="flex items-center">
                              <span className="text-sm md:text-base lg:text-lg italic">Rating:</span>
                              <Rating
                                name={`rating-${agent.id}`}
                                value={agent.rating}
                                precision={0.5}
                                readOnly
                                className="!text-white ml-2"
                              />
                            </div>
                            <p className="text-sm md:text-base lg:text-lg italic">
                              Location:{" "}
                              <span className="not-italic font-semibold">{agent.businessLocation}</span>
                            </p>
                            <p className="text-sm md:text-base lg:text-lg italic">
                              Reviews:{" "}
                              <span className="not-italic font-semibold ml-1">{agent.reviews}</span>
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
            )}
      </div>
    </div>
  );
};

export default Agents;
