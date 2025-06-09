"use client";
import React from "react";
import RoleImage from "../shared/RoleImage";
import { AccountInfo } from "../sections/userProfile/AccountInfo";
import { Button } from "../ui/button";
import { Text } from "../shared/Text";
import { ProfileImage } from "../sections/userProfile/ProfileImage";
import { cn } from "@/lib/utils";

const ProfileCard = ({ role = 'user', profileDetails = [], isEditable = false, className }) => {
  const isUser = role === 'user'
  return (
    <div className={cn("p-1 border-2 border-[#9747FF] rounded-[12px]", className)}>
      <div className="p-5 rounded-[6px] flex md:flex-row justify-between flex-col-reverse relative gap-4 overflow-hidden">
        <RoleImage
          role={role}
          className="object-cover object-left-top"
          alt="Profile Image"
          fill
        />
        <div className="absolute inset-0 bg-black/70 rounded-[8px]" />
        <div className="z-[10] flex flex-col gap-3 justify-between">
          {profileDetails.map((detail, index) => (
            <AccountInfo
              key={index}
              title={detail.title}
              value={detail.value}
            />
          ))}
          {isEditable && (
            <Button className="bg-white text-black rounded-[8px] w-[185px] text-center text-[16px]">
              <Text style="underline">Edit account info</Text>
            </Button>
          )}
        </div>
        <ProfileImage
          isEditable={isEditable}
          isUser={isUser}
          role={role}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
