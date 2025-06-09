"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SERVICEIMAGESOURCE } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css'

const Slider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onInit={(swiper) => {
        setActiveIndex(swiper.activeIndex + 1);
        setTotalSlides(swiper.slides.length);
      }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex + 1);
      }}
      className="h-[480px] flex w-full max-w-[650px] relative"
    >
      {SERVICEIMAGESOURCE.map((src, idx) => (
        <SwiperSlide
          key={idx}
          className=" rounded-[12px] overflow-hidden relative mx-auto  min-h-[480px] z-10"
        >
          <Image
            src={src}
            alt="image"
            fill
            // height={480}
            // width={450}
          />
        </SwiperSlide>
      ))}
      <div className="w-[105px] h-[74px] rounded-t-[100px] absolute -bottom-[19px] z-50 bg-[#E0E0E0] left-1/2 -translate-x-1/2 flex justify-center items-center gap-1">
        <Image
          src={"/icons/images_icon.svg"}
          height={18}
          width={18}
        />
        <h3 className="font-bold text-[16px]">
          {activeIndex}/{totalSlides}
        </h3>
      </div>
      <div className="absolute top-0  w-full h-full z-30 bg-black/20 flex justify-between items-center px-5">
        <div
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white shadow-[0_5px_10px_rgba(0,0,0,0.2)] backdrop-blur-[62.5px] text-black cursor-pointer hover:bg-white/80"
          onClick={() => swiperRef?.current.slidePrev()}
        >
          <ChevronLeft className="w-[30px] h-[30px]" />
        </div>
        <div
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white shadow-[0_5px_10px_rgba(0,0,0,0.2)] backdrop-blur-[62.5px] text-black cursor-pointer hover:bg-white/80"
          onClick={() => swiperRef?.current.slideNext()}
        >
          <ChevronRight className="w-[25px] h-[25px]" />
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
