import Link from "next/link";
import Image from "next/image";
import Form from "../forms/Form";
import { SELECTOPTIONS } from "@/lib/constants";

const Hero = () => {
  return (
    <section
      className="w-full h-[870px] md:h-[940px]  relative text-white flex flex-col pt-28 md:pt-32"
      id="hero"
    >
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
        className="bg-[#5D14AD] w-full absolute top-0 h-[750px] md:h-[820px] clip-svg overflow-hidden"
      >
        <Image
          src={"/home-images/bg1.svg"}
          width={100}
          height={681}
          alt="backgroung-image"
          className="absolute w-full h-[750px] md:h-[820px] object-cover object-left lg:object-right"
        />
        <Image
          src={"/home-images/sidehouse.svg"}
          fill
          alt="house image"
          className="h-[800px] min-w-[1000px] relative translate-x-[80px] translate-y-32 md:translate-x-[300px] md:translate-y-20"
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
      <div className="absolute bottom-10 right-0 pr-[50px] hidden lg:block">
        <div>
          <h1 className="text-[#9D71C6] text-right text-[30px] font-semibold">
            Trusted Real Estate + <br />{" "}
            <span className="text-[#5D14AD]">Artisan Services</span>
          </h1>
          <p className="mt-[20px] text-right text-[13px] leading-6 text-black max-w-[416px]">
           Built on core values— Integrity, trust, innovation, entrepreneurship, excellence, and leadership. Propifix is dedicated to enhancing everyday living and making life simpler — because when the little things are easy, people can live their biggest lives.
            <br />
            <br /> We empower communities to build, live, and thrive with
            confidence, setting industry standards and ensuring that every
            transaction reflects excellence and care.
          </p>
        </div>
      </div>
      <Link
        href="https://www.youtube.com/watch?v=yourVideoId"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex gap-[10px] items-center w-fit absolute bottom-10 md:bottom-16 left-0 pl-[20px] cursor-pointer">
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
      </Link>
    </section>
  );
};

export default Hero;
