import { cn } from "@/lib/utils";
import React from "react";

const MultiColorHeader = ({
  lighterText,
  lighterColor,
  heavierText,
  heavierColor,
  className,
}) => {
  return (
    <h1 className={cn(`text-[${lighterColor}]`, className)}>
      {lighterText}{" "}
      <span className={`text-[${heavierColor}]`}>{heavierText}</span>
    </h1>
  );
};

export default MultiColorHeader;
