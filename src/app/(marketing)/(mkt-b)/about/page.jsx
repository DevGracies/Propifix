import { MEMBERS, SOCIALLINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MembersCard = (info) => {
  return (
    <div className="relative  h-[393px] text-left">
      <div className="relative w-full h-full rounded-[12px] overflow-hidden">
        <Image
          src={"/images/grace.jpg"}
          fill
          alt="member_image"
          className="object-cover z-0"
        />
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#E6D2F8] shadow-md rounded-[12px] w-[243px] py-[15px] px-[15px] z-10">
        <div className="flex gap-4">
          {info.link.map((link, i) => (
            <Link
              href={link.ref}
              className={
                "rounded-full bg-white hover:bg-white/60 w-[24px] h-[24px] flex justify-center items-center"
              }
            >
              <Image
                src={link.icon}
                width={15}
                height={15}
                alt={link.title}
              />
            </Link>
          ))}
        </div>
        <h1 className="text-[24px] font-bold capitalize">{info.name}</h1>
        <p className="text-[16px] font-medium capitalize">{info.role}</p>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <section className="pt-28 md:pt-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_0.83%,rgba(230,230,230,0.80)_50%,rgba(230,230,230,0.80)_100%)]">
      <section className="max-w-[1040px] w-full px-5 mx-auto text-[#313131]">
        <div className="text-center pb-[37px]">
          <div className="text-[35px] md:text-[48px] font-bold tracking-wide bg-gradient-to-r from-[#5D14AD] to-[#9747FF] bg-clip-text">
            <h1 className="text-transparent">About Propifix</h1>
          </div>
          <h2 className="text-[20px] md:text-[32px] font-medium md:font-semibold mt-2 md:mt-[20px]">
            Redefining Real Estate and Artisan Services
          </h2>
          <p className=" text-[16px] md:font-medium mt-7 md:mt-[31px]">
            Propifix is an innovative company and brand that transforms real
            estate and artisan services by delivering customer-centric,
            affordable, and seamless solutions. Our commitment is to make life
            easier for our clients—ensuring that whenever they need our
            services, they can access them effortlessly and affordably.
            <br />
            <br /> Built on core values—integrity, quality, trust, innovation,
            entrepreneurship, profitability, and leadership—Propifix is
            dedicated to enhancing everyday living. We empower communities to
            build, live, and thrive with confidence, setting industry standards
            and ensuring that every transaction reflects excellence and care.
          </p>
        </div>
        <div className="py-[50px] space-y-[20px] md:space-y-[30px]">
          <h1 className="text-[24px] font-medium text-center">Our Services</h1>
          <div className="space-y-5 md:font-medium text-[16px]">
            <h1>
              We offer a wide range of real estate and artisans services,
              including:
            </h1>
            <ul className="space-y-3 list-disc pl-5 md:pl-0">
              <li className="font-semibold md:font-bold">
                Real Estate Service
              </li>
              <li>
                <span className="font-semibold md:font-bold">
                  Artians Services:
                </span>{" "}
                Plumbing, Carpentry, Electrical Work, Painting, Masonry
                (Bricklaying), Tiling, Welding, Roofing, Glazing (Glasswork),
                HVAC (Heating, Ventilation, and Air Conditioning), and Cleaning
                Services.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[50px] space-y-[20px] md:space-y-[30px]">
          <h1 className="text-[24px] font-medium text-center">Core Values</h1>
          <div className="space-y-5 md:font-medium text-[16px]">
            <ul className="space-y-3 list-disc pl-5 md:pl-0">
              <li>
                <span className="font-semibold md:font-bold">Integrity:</span>{" "}
                We operate with honesty and transparency in every transaction.
              </li>
              <li>
                <span className="font-semibold md:font-bold">Quality:</span> We
                uphold high standards in both real estate offerings and artisan
                services.
              </li>
              <li>
                <span className="font-semibold md:font-bold">Trust:</span> We
                build strong relationships through verified professionals and
                consistent performance.
              </li>
              <li>
                <span className="font-semibold md:font-bold">Innovation:</span>{" "}
                We embrace new technologies and methods to continuously improve
                user experience.
              </li>
              <li>
                <span className="font-semibold md:font-bold">
                  Entrepreneurship:
                </span>{" "}
                We drive innovation and problem-solving, enabling us to seize
                opportunities, adapt to change, and create valuable solutions
                for our market.
              </li>
              <li>
                <span className="font-semibold md:font-bold">
                  Profitability:
                </span>{" "}
                We ensure financial sustainability by generating more revenue
                than expenses, allowing for steady growth and reinvestment.
              </li>
              <li>
                <span className="font-semibold md:font-bold">Leadership:</span>{" "}
                We set the standard for excellence through visionary
                decision-making, strong management, and industry influence
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#5D14AD] to-[#9747FF] py-[50px] px-5 relative text-white overflow-hidden">
        <Image
          src={"/GridTop.svg"}
          height={274}
          width={251}
          alt="top-grid"
          className="absolute -top-16 -right-30"
        />
        <Image
          src={"/GridBottom.svg"}
          height={274}
          width={251}
          alt="bottom-grid"
          className="absolute -bottom-16 -left-10"
        />
        <div className="max-w-[1040px] w-full mx-auto md:flex gap-14">
          <div className="space-y-[20px] md:space-y-[30px] w-full">
            <h1 className="text-[24px] font-semibold uppercase">our mission</h1>
            <p className="text-[16px] md:font-medium">
              "To be the leading platform for excellence in real estate and
              artisan services, built on integrity, trust, innovation, and
              leadership. Through quality service, entrepreneurial thinking, and
              sustainable profitability, we aim to transform customer
              experiences, set industry standards, and create lasting value in
              every community we serve."
            </p>
          </div>
          <div className="space-y-[20px] md:space-y-[30px] w-full mt-10 md:mt-0">
            <h1 className="text-[24px] font-semibold uppercase">our vision</h1>
            <p className="text-[16px] md:font-medium">
              "Our mission is to revolutionize real estate and artisan services
              by providing innovative, affordable, and customer-centric
              solutions. We are committed to making transactions seamless and
              accessible while upholding integrity, trust, and quality. Through
              leadership, entrepreneurship, and continuous innovation, we create
              opportunities for growth while driving sustainable profitability.
              Our commitment to excellence ensures that every client experiences
              reliability, value, and peace of mind in achieving their vision
              within their budget."
            </p>
          </div>
        </div>
      </section>
      <section className="relative pb-[72px]">
        <Image
          src={"/backgrounds/about_page_background.png"}
          fill
          alt="background"
          className="object-cover"
        />
        <div className="w-full relative">
          <div className="py-[50px] px-5 w-full bg-[linear-gradient(0deg,_rgba(215,215,215,0.54)_0%,_rgba(215,215,215,0.54)_100%)]">
            <div className="max-w-[1040px] mx-auto md:space-y-4 space-y-[30px] text-center">
              <h1 className="text-[24px] font-semibold uppercase">
                our purpose
              </h1>
              <p className="text-[16px] text-[#313131] md:font-medium">
                "Our purpose is to enhance everyday living by making quality
                real estate and artisan services more accessible—ensuring people
                enjoy what they can afford with confidence and peace of mind. We
                are dedicated to promoting leadership, driving innovation,
                empowering entrepreneurship, and achieving sustainable
                profitability for long-term growth and impact."
              </p>
            </div>
          </div>
          <div className="py-[50px] px-5 w-full bg-[linear-gradient(0deg,_rgba(255,255,255,0.90)_0%,_rgba(215,215,215,0.54)_100%)]">
            <div className="max-w-[1040px] mx-auto md:space-y-4 space-y-[30px] text-center">
              <h1 className="text-[24px] font-semibold uppercase">
                our mantra
              </h1>
              <p className="text-[32px] text-[#313131] md:font-medium">
                Your Budget, Your Vision, Our Trusted Expertise
              </p>
            </div>
          </div>

          <div className="py-[50px] px-5 pb-[100px] w-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0.9)_83.79%,_rgba(255,255,255,0)_100%)]">
            <div className="max-w-[1040px] mx-auto space-y-[20px] text-center">
              <h1 className="text-[24px] font-semibold uppercase">
                meet our team
              </h1>
              <div className="text-[30px] md:text-[40px] font-bold tracking-wide bg-gradient-to-r from-[#5D14AD] to-[#9747FF] bg-clip-text">
                <h1 className="text-transparent uppercase">
                  our expert members
                </h1>
              </div>
              <p className="text-[16px] text-[#313131] md:font-medium">
                Behind Propifix is a team of visionary professionals dedicated
                to revolutionizing the real estate industry
              </p>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(303px,_1fr))] gap-x-10 gap-y-20 md:gap-y-32">
                {MEMBERS.map((member) => MembersCard(member))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
