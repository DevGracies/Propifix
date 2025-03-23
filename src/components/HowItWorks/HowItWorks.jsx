import { HOWITWORKS } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-[50px] px-5 md:px-[72px] flex flex-col gap-4  md:gap-6">
      <div>
        <h1 className="text-[#9D71C6] text-[20px] md:text-[30px] font-semibold">
          How Propi<span className="text-[#5D14AD]">Fix Works</span>
        </h1>
        <p className="text-[13px] md:text-[15px] font-normal mt-1">
          Finding the right professional for your property and service needs is
          easy with Propifix. Just follow these simple steps.
        </p>
      </div>
      
      {HOWITWORKS.map((step) => (
        <div className="flex gap-4">
          <div className="size-[50px] relative flex">
            <Image src={`/icons/${step.no}.svg`} height={50} width={50} alt="progress bar" className={`absolute top-0 left-0 ${step.no === '01' ? 'size-1/2' : ''} ${step.no === '02' ? 'w-1/2 h-full' : ''}`}/>
            <h1 className="text-[#9D71C6] text-center items-center w-fit mx-auto my-auto text-[20px] font-semibold">{step.no}</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-[18px] md:text-[20px]">{step.title}</h1>
            <p className="text-[12px] md:text-[14px] font-normal">{step.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks;
