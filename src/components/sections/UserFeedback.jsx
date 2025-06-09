"use client";
import React, { useRef, useState } from "react";
import MultiColorHeader from "../shared/MultiColorHeader";
import ArrowButton from "../custom-ui/ArrowButton";
import { Progress } from "../ui/progress";
import FeedbackCard from "../custom-ui/FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const UserFeedback = ({feedbackList}) => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  return (
    <div className="mt-10 space-y-8">
      <div className="flex gap-8 justify-between items-center">
        <MultiColorHeader
          className="text-[30px] font-semibold tracking-wide md:whitespace-nowrap"
          lighterColor={"#9D71C6"}
          lighterText={"User"}
          heavierColor={"#5D14AD"}
          heavierText={"Feedback"}
        />
        <Progress
          className="hidden md:flex h-1"
          value={progress}
        />
        <div className="flex gap-4">
          <ArrowButton
            onClick={() => swiperRef?.current?.slidePrev()}
            className={"rotate-90"}
            backgroundColor={"gray"}
          />
          <ArrowButton
            onClick={() => swiperRef?.current?.slideNext()}
            className={"rotate-[270deg]"}
            backgroundColor={"#5D14AD"}
            arrowColor={"white"}
          />
        </div>
      </div>
      <Swiper
        spaceBetween={25}
        slidesPerView={"auto"}
        className="!px-5 h-[max-content] cursor-default"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onProgress={(swiper) => {
          const percent = Math.round(swiper.progress * 100);
          setProgress(percent);
        }}
      >
        {feedbackList.map((feedback, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[419px] !h-[max-content] py-4"
          >
            <FeedbackCard
              ratingValue={feedback.rating}
              feedback={feedback.feedback}
              author={feedback.author}
              imageSrc={feedback.authorImage}
              date={feedback.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserFeedback;
