"use client";

import { EditSvg, ClipBoard } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { CustomImage } from "@/components/shared/Image";
import { Text } from "@/components/shared/Text";
import profilePics from "../../../../public/user_profile.svg";
export const ProfileImage = ({ isEditable = true, isUser = true, role }) => {
  return (
    <div className="z-[10]">
      <div className="relative w-[185px] h-[185px]">
        <CustomImage
          src={profilePics}
          alt="Profile Image"
          style="w-full h-full rounded-tr-[20px] rounded-bl-[20px] rounded-tl-[50px] rounded-bl-[50px]"
        />
        {isEditable && (
          <div className="absolute top-[0.65rem] right-[0.65rem]">
            <EditSvg className="bg-light-purple" />
          </div>
        )}
      </div>
      <div className="mt-4 mb-5 flex items-center cursor-pointer md:text-[16px] text-[13px] font-[400] whitespace-nowrap text-white group">
        <span className="mr-2">UID: ****3984852</span>
        <div className="cursor-pointer">
          <ClipBoard />
        </div>
      </div>
    </div>
  );
};
