import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import CustomLink from "../custom-ui/CustomLink";

const CallToAction = () => {
  return (
    <section className="md:px-[72px] py-[50px] ">
      <div className="relative w-full max-w-[1200px] mx-auto py-[96px] flex justify-center items-center px-5 md:rounded-2xl overflow-hidden">
        <Image
          src={"/backgrounds/call-to-action-bg-image.jpg"}
          fill
          alt="background image"
          className="object-cover brightness-75"
        />
        <div className="w-full h-full bg-white shadow rounded-lg py-[38px] px-5 md:px-[64px] space-y-6 relative max-w-[900px]">
          <h1 className="font-bold text-[25px] md:text-[32px] text-[#08110C] text-center w-full max-w-[700px] mx-auto  ">
            Looking for an Apartment? Let a Trusted Agent Help You!
          </h1>
          <p className="text-[16px] md:font-medium text-[#313131] text-center w-full max-w-[600px] mx-auto">
            Connect with agents, explore properties, or book skilled
            professionals for carpentry, cleaning, repairs, and more. Get
            started with Propifix now!
          </p>
          <div className="flex gap-5 w-fit   mx-auto">
            <Button
              className={
                "bg-[#9747FF] hover:bg-transparent text-white hover:text-[#9747FF] border-2 border-[#9747FF]"
              }
              asChild
            >
              <CustomLink url="/find-an-agent">Contact Us</CustomLink>
            </Button>
            <Button
              variant={"outlined"}
              className={
                "bg-transparent text-[#5D14AD] border-2 border-[#5D14AD] hover:bg-[#5D14AD] hover:text-white"
              }
            >
              <CustomLink url="find-an-agent">Find an Agent</CustomLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
