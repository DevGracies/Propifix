import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Form from "../forms/Form";

const SELECTOPTIONS = [
  {
    label: "Type",
    items: [
      "flat & apartment",
      "self contain",
      "mini flats",
      "houses",
      "land",
      "shop",
      "office space",
      "semi detached bungalow",
      "semi detached duplex",
      "detached bungalow",
      "detached duplex",
      "commercial property",
    ],
  },
  {
    label: "Bedroom",
    items: [
      "1 bedroom",
      "2 bedroom",
      "3 bedroom",
      "4 bedroom",
      "5 bedroom",
      "6 bedroom",
      "7 bedroom",
      "8 bedroom",
      "9 bedroom",
      "10 bedroom",
    ],
  },
  {
    label: "Toilet",
    items: [
      "1 toilet",
      "2 toilet",
      "3 toilet",
      "4 toilet",
      "5 toilet",
      "6 toilet",
      "7 toilet",
      "8 toilet",
      "9 toilet",
      "10 toilet",
    ],
  },
  {
    label: "Min. Price",
    items: [
      "50,000",
      "100,000",
      "200,000",
      "300,000",
      "400,000",
      "500,000",
      "600,000",
      "700,000",
      "800,000",
      "900,000",
      "1 million",
      "2 million",
    ],
  },
  {
    label: "Max. Price",
    items: [
      "500,000",
      "600,000",
      "700,000",
      "800,000",
      "900,000",
      "1 million",
      "2 million",
      "3 million",
      "5 million",
      "10 million",
      "20 million",
      "30 million",
    ],
  },
];

const Hero = () => {
  return (
    <section className="w-full h-[870px] md:h-[940px]  relative text-white flex flex-col pt-28 md:pt-32" id="hero">
      <Image
        src={"/home-images/bg3.svg"}
        width={100}
        height={681}
        alt="backgroung-image"
        className="absolute w-full h-[681px] md:h-[820px] object-cover object-left lg:object-right top-[100px] md:top-[35px]"
      />
      <Image
        src={"/home-images/bg2.svg"}
        width={100}
        height={681}
        alt="backgroung-image"
        className="absolute w-full h-[681px] md:h-[820px] object-cover object-left lg:object-right top-[85px] md:top-[15px]"
      />
      <div
        className="bg-[#5D14AD] w-full absolute top-0 h-[750px] md:h-[820px] clip-svg
 overflow-hidden"
      >
        <Image
          src={"/home-images/bg1.svg"}
          width={100}
          height={681}
          alt="backgroung-image"
          className="absolute w-full h-[750px] md:h-[820px] object-cover object-left lg:object-right"
        />
        <Image
          src={"/home-images/sidehouse.png"}
          height={592}
          width={1000}
          alt="house image"
          className="h-[600px] min-w-[1000px] relative translate-x-[80px] translate-y-32 md:translate-x-[300px] md:translate-y-20"
        />
      </div>
      <div className="relative px-5 md:px-[50px]">
        <h3 className="text-base md:text-[18px] font-medium">
          Welcome to Propifix
        </h3>
        <h1 className="w-full max-w-[600px] text-[35px] md:text-[50px] font-bold mt-[10px] leading-tight tracking-wider">
          Affordable Excellence, Trusted Service
        </h1>
        <p className="text-sm md:text-[15px] mt-[15px] leading-tight">
          Find Your Perfect Home with Trusted Landlords, Caretakers, or Agents
        </p>
        <Form SELECTOPTIONS={SELECTOPTIONS} />
      </div>
      <div className="absolute bottom-20 right-0 pr-[50px] hidden lg:block">
        <div>
          <h1 className="text-[#9D71C6] text-right text-[30px] font-semibold">
            Trusted Agents <br />{" "}
            <span className="text-[#5D14AD]">Essential Services</span>
          </h1>
          <p className="mt-[20px] text-right text-[13px] leading-6 text-black max-w-[416px]">
            Built on core values—integrity, quality, trust, innovation,
            entrepreneurship, profitability, and leadership; Propifix is
            dedicated to enhancing everyday living.
            <br />
            <br /> We empower communities to build, live, and thrive with
            confidence, setting industry standards and ensuring that every
            transaction reflects excellence and care.
          </p>
        </div>
      </div>
      <div className="flex gap-[10px] items-center w-fit absolute bottom-10 md:bottom-16 left-0 pl-[20px]">
        <Image
          src={"/icons/playIcon.svg"}
          width={44}
          height={44}
          alt="play-icon"
        />
        <div>
          <h1 className="font-medium text-sm italic text-black">
            Watch how{" "}
            <span className="text-[#9D71C6]">
              Propi<span className="text-[#5D14AD]">Fix</span>
            </span>{" "}
            works
          </h1>
          <p className="text-[#828282] text-xs">Presented by PropiFix CEO</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
