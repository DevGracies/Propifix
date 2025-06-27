"use client";
import Navbarr from "@/components/Navbarr";
import Image from "next/image";
import React, { useState } from "react";
import Agents from "./Agents";
import Artisans from "./Artisans";
import Caretakers from "./Caretakers";
import Landlords from "./Landlords";

const roleData = {
  agents: {
    title: "Top Four in All Categories",
    subtitle: "Find the Best Agents and Artisans for Every Service",
    component: <Agents />,
  },
  artisan: {
    title: "All Artisans Listing",
    subtitle: "Find the Best Artisans for Every Service",
    component: <Artisans />,
  },
  caretakers: {
    title: "All Caretaker Listing",
    subtitle: "Looking for a caretaker?",
    component: <Caretakers />,
  },
  landlords: {
    title: "All Landlord Listing",
    subtitle: "Looking for a Landlord?",
    component: <Landlords />,
  },
};
const page = () => {
  const [activeRole, setActiveRole] = useState("agents");
  return (
    <div>
      <Navbarr>
        <div className=" flex justify-between items-center ">
          <div>
            <h1 className=" text-3xl md:text-5xl font-medium">
              {roleData[activeRole].title}
            </h1>
            <h6 className="text-sm md:text-base ">{roleData[activeRole].subtitle}</h6>
          </div>
          <Image src={"/categoryNavbar.svg"} width={300} height={100} />
        </div>
      </Navbarr>

      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-10 px-4">
        {Object.keys(roleData).map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`relative px-4 py-2 m-10 cursor-pointer font-semibold transition-all duration-300
              ${
                activeRole === role
                  ? "text-[#9D71C6] "
                  : "hover:text-[#9D71C6] "
              }`}
          >
            <span
              className={`absolute top-0 left-0 w-full h-1 ${
                activeRole === role ? "bg_linear-purple" : "bg-transparent"
              }`}
            ></span>

            {role.charAt(0).toUpperCase() + role.slice(1)}
            <span
              className={`absolute bottom-0 left-0 w-full h-1 ${
                activeRole === role ? "bg_linear-purple" : "bg-transparent"
              }`}
            ></span>
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        {roleData[activeRole].component}
      </div>
    </div>
  );
};

export default page;
