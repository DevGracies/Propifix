import Image from "next/image";
import React from "react";

const Card = ({title, desc, image, className, titleClassName, descClassName}) => {
  return (
    <div
      className={`border-[3px] overflow-hidden  rounded-[36px] p-[3px] ${className}`}
    >
      <div className="!flex !items-end h-full w-full  p-[20px] text-white relative overflow-hidden  mx-auto rounded-4xl  ">
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover brightness-75 bg-gray-100/60"
        />
        <div className="space-y-1 relative z-10">
          <h1 className={titleClassName}>{title}</h1>
          <p className={descClassName}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
