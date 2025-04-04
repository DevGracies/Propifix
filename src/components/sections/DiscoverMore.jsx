import Link from "next/link";
import { Button } from "../ui/button";
import Card from "../custom-ui/Card";
import { SERVICES } from "@/lib/constants";

const DiscoverMore = () => {
  return (
    <section className="p-5 pt-10 md:px-[40px] md:py-[40px] space-y-16" id="discover">
      <div className="flex justify-between items-center gap-14">
        <h1 className="text-[25px] md:text-[30px] font-semibold text-[#9D71C6]">
          Discover More Services on Propi
          <span className="text-[#5D14AD]">Fix</span>
        </h1>

        <Button
          variant={"outline"}
          className={
            "bg-transparent rounded-lg px-8 text-[#5D14AD] border-[#5D14AD] hover:bg-[#5D14AD] hover:text-white"
          }
          asChild
        >
          <Link href={"artisans"}>View All </Link>
        </Button>
      </div>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(122px,1fr))] md:grid-rows-2 gap-4 h-[650px] md:h-[535px]">
        <Card
          desc={"Custom furniture and repair services tailored to your needs"}
          title={"carpentry"}
          image={"/images/carpentry.jpg"}
          className={"col-span-2 row-span-2 border-[#5D14AD]"}
          titleClassName={
            "text-[24px] font-semibold capitalize max-w-full truncate"
          }
          descClassName={"text-[15px] font-medium"}
        />
        <div className="col-span-2 row-span-2 grid grid-cols-2 gap-4 ">
          <Card
            desc={"Professional cleaning for your garments with convenience"}
            title={"dry cleaning"}
            image={"/images/dry-cleaning.png"}
            className={"col-span-1 row-span-1 border-[#5D14AD]"}
            titleClassName={
              "text-[24px] font-semibold capitalize"
            }
            descClassName={"text-[15px] font-medium"}
          />
          <Card
            desc={"Comprehensive cleaning services for a spotless home"}
            title={"house cleaning"}
            image={"/images/house-cleaning.png"}
            className={"col-span-1 row-span-1 border-[#5D14AD]"}
            titleClassName={
              "text-[24px] font-semibold capitalize"
            }
            descClassName={"text-[15px] font-medium"}
          />
          <Card
            desc={"Safe and reliable electrical installations and maintenance"}
            title={"electrical work"}
            image={"/images/electrical-work.png"}
            className={"col-span-2 row-start-2 border-[#5D14AD]"}
            titleClassName={
              "text-[24px] font-semibold capitalize"
            }
            descClassName={"text-[15px] font-medium"}
          />
        </div>
        <Card
          desc={
            "Transform your space with our expert painting and wallpaper services"
          }
          title={"Painting and Wallpaper Installation"}
          image={"/images/painting.png"}
          className={"col-span-2 row-span-2 border-[#5D14AD]"}
          titleClassName={
            "text-[24px] font-semibold capitalize truncate"
          }
          descClassName={"text-[15px] font-medium"}
        />
      </div>
    </section>
  );
};

export default DiscoverMore;
