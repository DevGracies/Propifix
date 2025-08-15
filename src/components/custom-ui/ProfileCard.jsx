"use client";
import React from "react";
import RoleImage from "../shared/RoleImage";
import { AccountInfo } from "../sections/userProfile/AccountInfo";
import { Button } from "../ui/button";
import { ProfileImage } from "../sections/userProfile/ProfileImage";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

const ProfileCard = ({
  role = "user",
  agentProfileDetails = [],
  artisanProfileDetails = [],
  caretakerProfileDetails = [],
  landlordProfileDetails = [],
  isEditable = false,
  className,
}) => {
  const isUser = role === "user";
  const isAgent = role === "agent";
  const isArtisan = role === "artisan";
  const isCaretaker = role === "caretaker";
  const isLandlord = role === "landlord";

  const showUploadButton = !isArtisan && !isUser; 

  let profileDetails = [];

  if (isArtisan) {
    profileDetails = artisanProfileDetails;
  } else if (isCaretaker) {
    profileDetails = caretakerProfileDetails;
  }  else if (isAgent) {
      profileDetails = agentProfileDetails;
  } else if (isLandlord) {
    profileDetails = landlordProfileDetails;
  } else {
    profileDetails = agentProfileDetails;
  }

  return (
    <div
      className={cn(
        "p-1 border-2 border-[#9747FF] rounded-[12px] h-full",
        className
      )}
    >
      <div className="p-5 rounded-[6px] h-full flex md:flex-row justify-between flex-col-reverse relative gap-4 overflow-hidden">
        <RoleImage
          role={role}
          className="object-cover object-left-top z-[0]"
          alt="Profile background"
          fill
        />

        <div className="absolute inset-0 bg-black/70 rounded-[8px] z-[1]" />

        <div className="z-[10] flex flex-col gap-3">
          {profileDetails.map((detail, index) => (
            <AccountInfo
              key={index}
              title={detail.title}
              value={detail.value}
            />
          ))}
        </div>

        <ProfileImage
          isEditable={isEditable}
          isUser={isUser}
          role={role}
        />

        {showUploadButton && (
          <Button
            className="bg-white z-10 absolute bottom-3 right-2 rounded-xl cursor-pointer hover:bg-transparent border-2 border-white w-fit hover:text-white text-[#5D14AD]"
            asChild
          >
            <Link
              href="/upload-property"
              className="text-lg font-semibold tracking-wide"
            >
              <PlusIcon size={26} />
              Upload Property
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
