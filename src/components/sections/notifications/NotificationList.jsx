import React from "react";
import NotificationCard from "./NotificationCard";

const NotificationList = ({ notifications }) => {
  return (
    <div className="flex flex-col gap-6 mt-8">
      {notifications.map((notif) => (
        <NotificationCard key={notif.id} {...notif} />
      ))}
    </div>
  );
};

export default NotificationList;
