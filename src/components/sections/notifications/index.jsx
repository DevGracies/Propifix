"use client";

import React, { useState } from "react";
import MultiColorHeader from "@/components/shared/MultiColorHeader";
import { MaxWidth } from "@/components/shared/MaxWidth";
import NotificationList from "./NotificationList";

const NotificationType = ["All", "Admin Messages", "Requests", "Platform Updates"];

const sampleNotifications = [
  {
    id: 1,
    title: "Request",
    type: "Request",
    from: "Sent from a user",
    date: "August 1, 2025",
    message:
      'Hello Grace Olori, I am looking for a "semi-detached duplex" with "4 bedrooms" and "4 toilets" at "Chevy Lekki Lagos", between the price of "₦ 20,000,000 and ₦ 135,000,000" to "buy". Thank you!',
    isHighlighted: true,
    actions: [
      { label: "Accept", variant: "primary", onClick: () => {} },
      { label: "Reject", variant: "secondary", onClick: () => {} },
    ],
  },
  {
    id: 2,
    title: "Announcement",
    type: "Message",
    from: "Sent from the Admin",
    date: "August 2, 2025",
    message:
      "Platform Maintenance Notice\nWe will be undergoing scheduled maintenance on Aug 5, 11PM - 2AM. Some services may be temporarily unavailable.",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Announcement",
    type: "Message",
    from: "Sent from the admin",
    date: "August 6, 2025",
    message:
      "New Feature: Share Property with Agents\nAgents can now share verified listings directly with other agents on PropiFix.",
    isHighlighted: true,
  },
];

export default function Notifications() {
  const [activeNotificationType, setActiveNotificationType] = useState("All");

  const handleTabClick = (notificationType) => {
    setActiveNotificationType(notificationType);
  };

  const filteredNotifications = sampleNotifications.filter((notif) => {
    if (activeNotificationType === "All") return true;
    if (activeNotificationType === "Requests") return notif.title === "Request";
    if (activeNotificationType === "Admin Messages") return notif.title === "Announcement";
    if (activeNotificationType === "Platform Updates")
      return notif.title === "Platform update";
    return false;
  });

  return (
    <MaxWidth className="bg-white py-28 md:px-[50px] px-4">
      <div className="flex justify-between items-center">
        <MultiColorHeader
          className="text-[30px] font-semibold tracking-wide mb-4 mt-5"
          lighterText={"My"}
          heavierText={"Notifications"}
          lighterColor="#9D71C6"
          heavierColor="#5D14AD"
        />
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-1 px-4">
          {NotificationType.map((notificationType) => (
            <button
              key={notificationType}
              onClick={() => handleTabClick(notificationType)}
              className={`relative px-4 py-2 cursor-pointer font-semibold transition-all duration-300 ${
                activeNotificationType === notificationType
                  ? "text-[#9D71C6]"
                  : "hover:text-[#9D71C6]"
              }`}
            >
              <span
                className={`absolute top-0 left-0 w-full h-1 ${
                  activeNotificationType === notificationType
                    ? "bg_linear-purple"
                    : "bg-transparent"
                }`}
              ></span>
              {notificationType}
              <span
                className={`absolute bottom-0 left-0 w-full h-1 ${
                  activeNotificationType === notificationType
                    ? "bg_linear-purple"
                    : "bg-transparent"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-screen">
      <NotificationList notifications={filteredNotifications} />
      </div>
    </MaxWidth>
  );
}
