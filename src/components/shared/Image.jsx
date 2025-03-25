"use client";

import { cn } from "@/lib/utils";
import Image from "next/legacy/image";
import { useState } from "react";

export const CustomImage = ({
  src,
  alt = "object not found",
  style,
  imgStyle,
  priority = false,
  clickFunc,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={cn("relative", style)} onClick={clickFunc && clickFunc}>
      {isLoading && (
        <div
          className={cn("w-full animate-pulse bg-hick-grey", style, imgStyle)}
        ></div>
      )}
      <Image
        src={src}
        alt={alt}
        className={cn("w-full", imgStyle)}
        onLoadingComplete={() => setIsLoading(false)}
        layout="fill"
        priority={priority}
      />
    </div>
  );
};
