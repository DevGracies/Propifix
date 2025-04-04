"use client";

import { ChevronLeft } from "lucide-react";
import { Logo } from "./Logo";
import { useRouter } from "nextjs-toploader/app";
import { Text } from "./Text";

export const AdminAuthInnerLayout = ({
  children,
  title,
  footerRoute,
  footerLabel,
  footerActionText,
}) => {
  const router = useRouter();

  return (
    <div className="sm:p-8 p-4 bg-white border rounded-lg flex flex-col">
      <Logo style="mx-auto mb-2" />
      <Text
        as="h1"
        style="text-[15px] font-normal leading-[40.49px] text-center"
      >
        Welcome to
      </Text>
      <Text
        as="h2"
        style="text-[29.15px] font-semibold leading-[40.49px] text-center"
      >
        PropiFix
      </Text>
      <Text
        as="h3"
        style="mb-6 text-[15px] font-normal leading-[40.49px] text-center"
      >
        {title}
      </Text>

      {children}

      <div className="mt-3 sm:w-[65%] w-full flex justify-between gap-4">
        {/* Back to Homepage  */}
        <div
          className="flex items-center cursor-pointer text-[11.34px] font-normal whitespace-nowrap"
          onClick={() => router.push("/")}
        >
          <ChevronLeft className="w-[20.02px] h-[16.51px]" />
          <span className="underline">Back to homepage</span>
        </div>

        {/* Footer Navigation */}
        <div
          className="flex gap-x-1 cursor-pointer text-[11.34px] font-normal whitespace-nowrap"
          onClick={() => router.push(`/admin/${footerRoute}`)}
        >
          <span>{footerLabel}</span>
          <span className="text-primary-color">{footerActionText}</span>
        </div>
      </div>
    </div>
  );
};
