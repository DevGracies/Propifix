"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";
import LocationDropdown from "@/components/listing/LocationDropdown";
import { useRouter } from "next/navigation";

const Caretakers = () => {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Filter by location");
  const [showDropdown, setShowDropdown] = useState(false);

  const [caretakers, setCaretakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredCaretakers, setFilteredCaretakers] = useState([]);

  useEffect(() => {
    const fetchCaretakers = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/caretaker`);
        console.log("Caretakers response:", response);
        const data = response?.data?.data?.data || [];
        setCaretakers(data);
        setFilteredCaretakers(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to fetch caretakers at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchCaretakers();

    setLocations([
      "All", "Ikeja", "Ipaja", "Agege", "Victoria Island", "Banana Island",
      "Ikoyi", "Lekki", "Ikorodu"
    ]);
  }, []);

  useEffect(() => {
    let filtered = caretakers;

    if (selectedLocation !== "Filter by location" && selectedLocation !== "All") {
      filtered = filtered.filter(caretaker =>
        caretaker.businessLocation?.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    setFilteredCaretakers(filtered);
  }, [selectedLocation, caretakers]);

  return (
    <div className="px-4 min-h-screen sm:px-6 md:px-8 lg:px-10 xl:px-20 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-6 gap-4">
        <h1 className="text-[#9D71C6] text-3xl pb-4 font-medium">
          All <span className="text-[#5D14AD]">Caretakers</span>
        </h1>

        {/* Location Filter */}
        <LocationDropdown
            locations={locations}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
        />
      </div>

      {/* All Caretakers */}
      {loading ? (
         <div className="text-center w-full py-8">
         <p className="text-[#5D14AD] text-lg md:text-xl font-semibold italic">Loading caretakers...</p>
       </div>
      ) : error ? (
        <p className="text-center text-red-500 text-lg italic">{error}</p>
      ) : filteredCaretakers.length === 0 ? (
        <p className="text-gray-500 text-center italic text-lg md:text-xl">
              No caretakers found for <span className="font-semibold">{selectedLocation}</span>.
       </p>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCaretakers.map((caretaker) => (
          <div
            key={caretaker.id}
            className="relative border-2 border-[#5D14AD] h-[350px] rounded-[24px] overflow-hidden bg-cover bg-center"
          >
            <div
              className="rounded-[24px] absolute m-1 inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/home-images/sidehouse.svg')",
              }}
            >
              <div className="absolute inset-0 rounded-[24px] bg-black/70" />

              <div className="relative z-10 p-4 flex flex-col justify-between h-full text-white">
                <div className="space-y-2">
                  <h2 className="text-sm md:text-base lg:text-lg italic">
                    Caretaker Name:{" "}
                    <span className="not-italic font-semibold">{caretaker.fullName}</span>
                  </h2>
                  <div className="flex items-center">
                    <span className="text-sm md:text-base lg:text-lg italic">Rating:</span>
                    <Rating
                      name={`rating-${caretaker.id}`}
                      value={caretaker.ratings.averageRating}
                      precision={0.5}
                      readOnly
                      className="!text-white ml-2"
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Location:{" "}
                    <span className="not-italic font-semibold">{caretaker.businessLocation}</span>
                  </p>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Assigned Properties:{" "}
                    <span className="not-italic font-semibold">{caretaker.assingedProperties}</span>
                  </p>
                  <p className="text-sm md:text-base lg:text-lg italic">
                    Reviews:{" "}
                    <span className="not-italic font-semibold ml-1">
                      {caretaker.reviews}
                    </span>
                  </p>
                </div>
                <button 
                onClick={() => router.push(`/caretaker/${caretaker._id}`)}
                className="mt-4 text-sm md:text-base lg:text-lg font-semibold border border-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-[#5D14AD] transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
       )}
    </div>
  );
};

export default Caretakers;
