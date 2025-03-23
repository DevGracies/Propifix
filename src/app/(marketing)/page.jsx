import FeaturedLocations from "@/components/FeaturedLocations/FeaturedLocations";
import FindAgent from "@/components/FindAnAgent/FindAgent";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import MeetTopAgents from "@/components/MeetTopAgents/MeetTopAgents";
import WhyPropifix from "@/components/WhyPropifix/WhyPropifix";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FindAgent />
      <HowItWorks />
      <FeaturedLocations />
      <MeetTopAgents />
      <WhyPropifix/>
    </>
  );
};

export default HomePage;
