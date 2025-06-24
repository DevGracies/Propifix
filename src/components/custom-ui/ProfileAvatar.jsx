import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileAvatar = ({ name, image, className }) => {
  return (
    <Avatar className={className}>
      <AvatarImage
        src={image || ""}
        className={"rounded-full"}
      />
      <AvatarFallback>
        {name &&
          name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
