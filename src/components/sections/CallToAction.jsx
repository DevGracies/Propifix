import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import CustomLink from "../custom-ui/CustomLink";

const CallToAction = () => {
  return (
    <section className="md:px-[72px] py-[50px]">
      <div className="relative w-full max-w-[1200px] mx-auto py-[96px] flex justify-center items-center px-5 md:rounded-2xl overflow-hidden">
        <Image
          src="/backgrounds/call-to-action-bg-image.jpg"
          fill
          alt="background image"
          className="object-cover brightness-75"
        />
        <div className="relative z-10 w-full h-full bg-white/95 shadow-xl rounded-2xl py-10 px-6 md:px-16 space-y-8 max-w-[900px] backdrop-blur-sm">
          <h1 className="font-bold text-2xl md:text-4xl text-[#08110C] text-center leading-snug">
            How Propifix Works for You
          </h1>

          <ul className="text-[16px] md:text-lg text-[#313131] space-y-4 max-w-[700px] mx-auto list-decimal list-inside">
  <li>
    <strong>Send requests to agents</strong> to help you rent, buy, sell,
    or shortlet apartments and land.
  </li>
  <li>
    <strong>Discover verified providers</strong> near you using our
    interactive map.
  </li>
  <li>
    <strong>Contact Propifix directly</strong> if you need personalized help.
  </li>
  <li>
    <strong>Search listings and artisan profiles</strong>, compare options,
    and make the best choice for your needs.
  </li>
</ul>


          <p className="text-center text-base text-[#313131] max-w-[600px] mx-auto">
            Whether you’re handling property or fixing up your space, Propifix
            is your all-in-one solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button
              className="bg-[#9747FF] hover:bg-transparent text-white hover:text-[#9747FF] border-2 border-[#9747FF] transition-all duration-300"
              asChild
            >
              <CustomLink url="/contact">Contact Us</CustomLink>
            </Button>
            <Button
              variant="outlined"
              className="bg-transparent text-[#5D14AD] border-2 border-[#5D14AD] hover:bg-[#5D14AD] hover:text-white transition-all duration-300 "
            >
              <CustomLink url="/listing">Find an Agent</CustomLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
