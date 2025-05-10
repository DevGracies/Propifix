import ProfileCard from "@/components/custom-ui/ProfileCard";
import { BackButton } from "@/components/sections/userProfile/BackButton";
import MultiColorHeader from "@/components/shared/MultiColorHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/custom-ui/Slider";
import { MOREINFO } from "@/lib/constants";

const page = () => {


  return (
    <section className="flex flex-col gap-6 md:gap-12 py-28  md:px-[50px] px-4">
      <div className="space-y-7">
        <BackButton />
        <div className="flex flex-col md:flex-row gap-12 ">
          <div className="flex-1 grow">
            <Slider/>
          </div>
          <div className="flex flex-col gap-10">
            <ProfileCard
              role="electrician"
              profileDetails={[
                {
                  title: "Artisans Full Name",
                  value: "Grace Olori",
                },
                {
                  title: "Contact",
                  value: "0700657832",
                },
                {
                  title: "Location",
                  value: "Lagos, Ikeja",
                },
              ]}
            />
            <div className="space-y-3">
              <MultiColorHeader
                className={"text-[30px] font-semibold tracking-wide"}
                heavierColor={"#5D14AD"}
                heavierText={"Address"}
                lighterColor={"#9D71C6"}
                lighterText={"Artisan"}
              />
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <Image
                      src={"/icons/location.svg"}
                      height={24}
                      width={24}
                    />
                    <h4 className="text-[16px] font-semibold">
                      Chevron Lekki Lagos
                    </h4>
                  </div>
                  <h4 className="text-[16px] font-semibold">PID: 4HBWD</h4>
                </div>
                <p className="text-[16px] font-normal">
                  Last updated 2025-01-06 18:18:18.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 ">
        <div className="grow space-y-5">
          <div className="w-full p-5 rounded-[24px] bg-[linear-gradient(90deg,_#5D14AD_0%,_#9747FF_100%)]">
            <h4 className="text-[20px] md:text-[32px] font-bold text-white tracking-wide">
              ₦150,000 per service
            </h4>
          </div>
          <div className="space-y-5 p-5">
            <MultiColorHeader
              className={"text-[30px] font-semibold tracking-wide"}
              heavierColor={"#5D14AD"}
              heavierText={"Description"}
              lighterColor={"#9D71C6"}
              lighterText={"Service"}
            />
            <p className="text-[14px] font-normal">
              Reach out to us for your house cleaning, upholstery cleaning,
              couch cleaning, and fumigation services.
              <br />
              We give the best service.
            </p>
          </div>
          <div className="p-5 rounded-[24px] bg-[rgba(232,_190,_254,_0.30)] space-y-5">
            <MultiColorHeader
              className={"text-[24px] font-semibold tracking-wide"}
              heavierColor={"#5D14AD"}
              heavierText={"Info"}
              lighterColor={"#9D71C6"}
              lighterText={"More"}
            />
            <ul className="list-disc pl-5 space-y-2">
              {MOREINFO.map((info, index) => (
                <li
                  className="text-[16px]"
                  key={index}
                >
                  <span className="font-bold capitalize">{info.title}</span>:{" "}
                  {info.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:min-w-[450px] space-y-10">
          <div className="w-full p-5 rounded-[12px] border-2 border-[#9747FF] flex gap-3 justify-between  items-start">
            <Image
              src={"/icons/verified.png"}
              width={100}
              height={100}
            />
            <div className="space-y-[10px]">
              <h2 className="text-[16px] font-bold tracking-wide">
                Service authenticity is confirmed
              </h2>
              <p className="text-[16px] tracking-wide">
                We will look into whether this service is authentic or not if it
                is reported as such.
              </p>
              <Button
                className={
                  "w-full bg-[linear-gradient(87deg,#5D14AD_0%,#9747FF_100%)] mt-1 hover:opacity-90 cursor-pointer"
                }
              >
                Report Service
              </Button>
            </div>
          </div>
          <div className="bg-[rgba(232,190,254,0.3)] p-[20px] flex flex-col items-center justify-between w-full h-[208px] rounded-[24px]">
            <h2 className="text-[16px] font-medium">
              By continuing, you agree to propiFix's{" "}
              <span
                className="text-[#5D14AD]"
                AsChild
              >
                <Link href={"/terms&conditions"}>Terms and Conditions</Link>
              </span>
                & 
              <span className="text-[#5D14AD]">
                {" "}
                <Link href={"/privacy-policy"}>Privacy Policy.</Link>
              </span>
            </h2>
            <Button
              className={
                "w-full bg-[linear-gradient(87deg,#5D14AD_0%,#9747FF_100%)] mt-1 hover:opacity-90 cursor-pointer rounded-[12px]"
              }
            >
              Book Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
