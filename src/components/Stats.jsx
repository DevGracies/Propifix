import React from "react";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@mui/material";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Stats = ({
  role = "artisan",
  profileData = {},
}) => {
  const ratings = profileData.ratings || {};

  const roleDisplay = role.charAt(0).toUpperCase() + role.slice(1);
  const responseTime = profileData.responseTime || "Typically responds within 1 hour.";

  return (
    <div className="bg-[linear-gradient(247deg,_#9747FF_0%,_#5D14AD_100%)] w-full h-[497px] lg:h-full p-5 rounded-[12px] flex flex-col justify-between text-white">
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="text-[24px] font-semibold">{roleDisplay} Performance</h1>

        <div className="flex flex-col gap-[6px] md:gap-[10px]">
          <h3 className="text-[16px] font-semibold">Response Time</h3>
          <p className="text-[16px] font-light">{responseTime}</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[16px] font-semibold">Jobs Completed</h3>
          <p className="text-[16px] font-light">{ratings.totalSuccessRate || 0} Jobs</p>
        </div>

        <div className="flex gap-16">
          <div className="space-y-[10px]">
            <h3 className="text-[16px] font-semibold">Success Rate</h3>
            <div className="relative w-[100px] h-[100px] rounded-[12px] bg-black/10 p-1 flex justify-center items-center">
              <CircularProgress
                size={"75px"}
                variant="determinate"
                value={ratings.averageSuccessRate || 0}
                color="white"
                className="absolute top-1/2 left-1/2 -translate-1/2"
              />
              <p className="text-[16px]">{(ratings.averageSuccessRate || 0) + "%"}</p>
            </div>
          </div>

          <div className="space-y-[10px]">
            <h3 className="text-[16px] font-semibold">
              Customer Rating{" "}
              {ratings.totalReviews > 0 && (
                <span className="text-[12px] font-light">
                  • From {ratings.totalReviews} reviews
                </span>
              )}
            </h3>
            <div className="relative w-[100px] h-[100px] rounded-[12px] bg-black/10 p-1 flex justify-center items-center">
              <CircularProgress
                size={"75px"}
                variant="determinate"
                value={(ratings.averageRating / 5) * 100 || 0}
                color="white"
                className="absolute top-1/2 left-1/2 -translate-1/2"
              />
              <p className="text-[16px]">
                {ratings.averageRating > 0 ? `${ratings.averageRating}/5` : "0/5"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-col gap-3 md:flex-row">
        {profileData.serviceFee && (
          <Button className="bg-white flex gap-1 text-black cursor-pointer hover:bg-white/90 w-fit">
            <Image
              src={"/icons/ion_bulb.svg"}
              width={16}
              height={16}
              alt="icon"
            />
            <h3 className="text-[12px] font-bold tracking-wide">
              Service fee:{" "}
              <span className="font-normal">
                ₦ {profileData.serviceFee} per service
              </span>
            </h3>
          </Button>
        )}
        <Button
          className="bg-white flex gap-1 cursor-pointer hover:bg-transparent border-2 border-white w-fit hover:text-white text-[#5D14AD]"
          asChild
        >
          <Link href={`/personnel/service/${profileData._id}`} className="text-[12px] font-medium tracking-wide">
            View Service
            <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Stats;
