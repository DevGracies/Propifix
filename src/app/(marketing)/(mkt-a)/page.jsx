import CallToAction from "@/components/sections/CallToAction";
import DiscoverMore from "@/components/sections/DiscoverMore";
import FeaturedLocations from "@/components/sections/FeaturedLocations";
import FindAgent from "@/components/sections/FindAgent";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import MeetTopAgents from "@/components/sections/MeetTopAgents";
import WhyPropifix from "@/components/sections/WhyPropifix";

const HomePage = () => {

  return (
    <>
      <Hero />
      <FindAgent />
      <HowItWorks />
      {/* <FeaturedLocations /> */}
      <MeetTopAgents />
      <WhyPropifix />
      <DiscoverMore />
      <CallToAction/>
    </>
  );
};

export default HomePage;
