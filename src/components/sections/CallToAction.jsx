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
            Let Propifix Do the Work for You
          </h1>

          <ul className="text-[16px] md:text-lg text-[#313131] space-y-4 max-w-[700px] mx-auto list-decimal list-inside">
            <li>
              Skip the stress of searching on your own.
            </li>
            <li>
              At Propifix, we go beyond just showing you options - we actively help you <strong>find exactly what you need.</strong>
            </li>
            <li>
              Whether you're trying to rent, buy, sell, shortlet, or hire a reliable artisan, simply tell us - and we'll take it from there.
            </li>
            <li>
              We connect you directly with verified landlords, agents, and service providers who are ready to deliver - so you can relax and focus on what matters.
            </li>
          </ul>
          
          <p className="text-center font-bold text-base text-[#313131] max-w-[600px] mx-auto">
            No guesswork. No stress. Just real solutions - done for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button
              className="bg-[#9747FF] hover:bg-transparent text-white hover:text-[#9747FF] border-2 border-[#9747FF] transition-all duration-300"
              asChild
            >
              <CustomLink url="/contact">Get Personal Support - <strong>Talk to Us Now</strong></CustomLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
