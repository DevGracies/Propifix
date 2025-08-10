"use client";
import React, { useEffect, useState } from "react";
import FindAgentForm from "../forms/FindAgentForm";
import Image from "next/image";
import MapComponent from "../MapContainer";

const agents = [
  { id: 1, name: "Grace Olori", lat: 6.5244, lng: 3.3792 },
  { id: 2, name: "John Doe", lat: 6.6, lng: 3.35 },
];

const FindAgent = () => {
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
          
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.county ||
              data.address.locality ||
              data.address.suburb ||
              "";
          
            const state = data.address.state || data.address.region || "";
          
            setLocation(`${city.toUpperCase()}, ${state.toUpperCase()}`);
          } catch (error) {
            console.error("Reverse geocoding failed:", error);
            setLocation("Location unavailable");
          }
          
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocation("Location permission denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <section className="lg:flex text-white" id="find-an-agent">
      <div
        className="w-full lg:w-1/2 px-5 md:px-[72px] lg:pl-[72px] py-[60px] md:py-[40px] bg-gradient-to-l from-[#5D14AD] to-[#9747FF] flex flex-col gap-5 relative z-40"
      >
        <h1 className="font-semibold text-[20px] md:text-[30px] max-w-[530px]">
          Discover house agents, caretakers, landlords and trusted service
          providers near you, from carpenters and cleaners to painters and
          electricians and more.
        </h1>

        <div className="flex gap-[4px] items-center">
          <Image
            src={"/icons/Alert.svg"}
            width={18}
            height={18}
            alt="icon"
            className="size-[12px] md:size-[18px]"
          />
          <p className="text-[13px] md:text-[15px] font-light">
            We&apos;ve detected your location as{" "}
            <span className="font-semibold">{location}</span>
          </p>
        </div>

        <FindAgentForm />
      </div>

      <div className="relative w-1/2">
        <MapComponent agents={agents} />
      </div>
    </section>
  );
};

export default FindAgent;

