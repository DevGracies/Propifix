import { TOPAGENTS } from "@/lib/constants";
import { Button } from "../ui/button";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const MeetTopAgents = () => {
  return (
    <section className="py-[40px] " id="meet-top-agents">
      <h1 className="capitalize text-[#9D71C6] text-[30px] font-semibold mb-10 mx-5 md:ml-[72px]">
        meet our top <span className="text-[#5D14AD]">agents</span>
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:pr-20">
        <div className="w-full flex-1 flex flex-col gap-10 p-5 md:px-[60px] !py-[50px]  relative bg-[linear-gradient(272deg,#9747FF_21.29%,#5D14AD_95.99%)] lg:bg-none lg:bg-transparent">
          <Image
            src={"/backgrounds/locationbg3.svg"}
            width={500}
            height={700}
            alt="background"
            className="object-cover object-right absolute left-2  top-1/2 -translate-y-1/2 w-full h-[99%] hidden lg:block"
          />
          <Image
            src={"/backgrounds/locationbg2.svg"}
            width={500}
            height={700}
            alt="background"
            className="object-cover object-right absolute -left-4  top-1/2 -translate-y-1/2 w-full h-[97%] hidden lg:block"
          />
          <Image
            src={"/backgrounds/locationbg.svg"}
            width={500}
            height={700}
            alt="background"
            className="object-cover object-right absolute -left-6  top-1/2 -translate-y-1/2 w-full h-[95%] hidden lg:block"
          />
          {TOPAGENTS.map((agent, index) => (
            <Button
              variant={"outline"}
              className={`bg-transparent p-5 w-full h-fit flex flex-col items-start group relative cursor-pointer`}
              style={{ maxWidth: `${100 - index * 15}%` }}
            >
              <div className="space-y-1">
                <div className="w-fit text-[13px] md:text-[15px] font-medium italic text-white group-hover:text-[#9747FF]">
                  Agent Name:{" "}
                  <span className="not-italic text-white group-hover:text-[#5D14AD] font-bold capitalize">
                    {agent.agentName}
                  </span>
                </div>
                <div className="w-fit text-[13px] md:text-[15px] font-medium italic text-white group-hover:text-[#9747FF] flex justify-center items-center">
                  Rating:{" "}
                  <span className="not-italic text-[#5D14AD] font-bold capitalize">
                    <Rating
                      name="half-rating-read"
                      defaultValue={agent.rating}
                      precision={0.5}
                      readOnly
                      className="!text-white group-hover:!text-[#5D14AD]"
                    />
                  </span>
                </div>
                <div className="w-fit text-[13px] md:text-[15px] font-medium italic text-white group-hover:text-[#9747FF]">
                  Location:{" "}
                  <span className="not-italic text-white group-hover:text-[#5D14AD] font-bold capitalize">
                    {agent.location}
                  </span>
                </div>
              </div>
            </Button>
          ))}
          <Button
            variant={"outline"}
            className={
              "bg-transparent relative w-fit text-white !px-10 rounded-xl"
            }
            asChild
          >
            <Link href={"top-agents"}>See all</Link>
          </Button>
        </div>
        <div className="p-[2px] rounded-xl w-[350px] h-[428px] border-[2px] border-[#9747FF] mx-auto mt-10">
          <div className="relative w-full h-full flex items-end overflow-hidden rounded-lg p-[30px]">
            <Image
              src="/images/grace.jpg"
              fill
              alt="agent picture"
              className="object-cover brightness-75 backdrop-blur-sm"
            />

            <div className="flex flex-col gap-1 text-white relative ">
              <h1 className="font-bold text-[30px] capitalize">Grace Olori</h1>
              <p className="font-semibold text-[20px] capitalize">
                house agent
              </p>
              <p className="font-medium text-[18px] capitalize">
                reviews <span className="font-bold text-[20px]"> • 20+</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTopAgents;
