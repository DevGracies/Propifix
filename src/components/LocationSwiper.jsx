"use client";
import { LOCATIONS } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const LocationSwiper = () => {
  const swiperRef = useRef(null);
  return (
    <section className="flex gap-10 justify-center items-center">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="min-w-[40px] h-[40px] relative justify-center items-center cursor-pointer hidden md:flex"
      >
        <Image
          src={"/icons/ellipse-left.svg"}
          fill
          alt="left icon"
        />
        <ChevronLeft size={18} />
      </button>

      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        className="h-[428px] !hidden md:!flex "
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {LOCATIONS.map((location) => (
          <SwiperSlide className="border-[3px] overflow-hidden border-white/90 rounded-[36px] !p-[3px] max-w-[400px] mx-auto  min-h-[428px]">
            <div className="!flex !items-end h-full max-w-[400px] p-[30px] text-white relative !overflow-hidden  mx-auto rounded-4xl ">
              <Image
                src={location.image}
                fill
                alt={location.location}
                className="object-cover brightness-75 backdrop-blur-sm"
              />
              <div className="space-y-1 relative z-10">
                <h1 className="text-[30px] font-semibold">
                  {location.location}
                </h1>
                <p className="text-[15px] font-medium">{location.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="min-w-[40px] h-[40px] relative justify-center items-center cursor-pointer hidden md:flex"
      >
        <Image
          src={"/icons/ellipse-right.svg"}
          fill
          alt="right icon"
        />
        <ChevronRight size={18} />
      </button>
    </section>
  );
};

export default LocationSwiper;
