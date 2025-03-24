import { LOCATIONS } from "@/lib/constants";
import Image from "next/image";
import LocationSwiper from "../LocationSwiper";
import Card from "../custom-ui/Card";

const FeaturedLocations = () => {
  return (
    <section class="bg-gradient-to-r from-[#5D14AD] to-[#9747FF] py-[50px] px-5 md:px-[72px] pb-[109px] relative text-white" id="featured-location">
      <Image
        src={"/GridTop.svg"}
        height={274}
        width={251}
        alt="top-grid"
        className="absolute top-0 right-0"
      />
      <Image
        src={"/GridBottom.svg"}
        height={274}
        width={251}
        alt="bottom-grid"
        className="absolute bottom-0 left-0"
      />
      <div className="flex flex-col gap-10">
        <div className="space-y-[3px]">
          <h1 className="text-[40px] md:text-[50px] font-semibold capitalize">
            Featured Location
          </h1>
          <p className="text-[13px] md:text-[15px] font-medium capitalize">
            Explore Popular Locations
          </p>
        </div>
        <LocationSwiper />
        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10 md:ml-10 md:hidden">
          {LOCATIONS.map((location) => (
            <Card
              className={"max-w-[400px] mx-auto h-[428px] border-white/90"}
              titleClassName={"text-[30px] font-semibold"}
              descClassName={"text-[15px] font-medium"}
              title={location.location}
              image={location.image}
              desc={location.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
