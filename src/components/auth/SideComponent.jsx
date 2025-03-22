import React from "react";
import { assets } from "../../../public/assets/assets";
import Image from "next/image";

const SideComponent = () => {
  return (
    <div className="relative p-6 shadow-lg text-center max-w-sm md:max-w-md flex-col items-center justify-center bg-gradient-to-b from-white to-white/90 w-[455px] h-[280px] rounded-[20px] hidden sm:hidden md:hidden lg:flex">
      <Image
        src={assets.gridVector}
        alt="Grid Vector"
        width={100}
        height={100}
        className="absolute top-0 right-0"
      />

      <Image src={assets.icon1} alt="Propifix Icon" width={150} height={54} />

      <p className="mt-4 text-gray-700 text-center px-4">
        Seamless transactions, trusted professionals, and quality service every
        time.
      </p>

      <div>
        <Image
          src={assets.Vector}
          alt="Vector"
          width={100}
          height={100}
          className="absolute bottom-0 left-0 mt-20"
        />
      </div>
    </div>
  );
};

export default SideComponent;
