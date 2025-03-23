import { LOCATIONS } from "@/lib/constants";
import Image from "next/image";
import LocationSwiper from "./LocationSwiper";

const FeaturedLocations = () => {
  return (
    <section class="bg-gradient-to-r from-[#5D14AD] to-[#9747FF] py-[50px] px-5 md:px-[72px] pb-[109px] relative text-white">
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
            <div className="border-[3px] overflow-hidden border-white/90 rounded-[36px] p-[3px] max-w-[400px] mx-auto min-h-[428px]">
              <div className="!flex !items-end h-full max-w-[400px] p-[30px] text-white relative overflow-hidden  mx-auto rounded-4xl ">
                <Image
                  src={location.image}
                  fill
                  alt={location.location}
                />
                <div className="space-y-1 relative z-10">
                  <h1 className="text-[30px] font-semibold">
                    {location.location}
                  </h1>
                  <p className="text-[15px] font-medium">{location.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
