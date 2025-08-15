import React from "react";
import { MessageSquareText } from "lucide-react";

const NotificationCard = ({ type, date, from, title, message, isHighlighted, actions }) => {
  return (
    <div
      className={`flex gap-4 p-6 rounded-2xl border border-y-[#5D14AD] border-r-[#5D14AD] ${
        isHighlighted ? "bg-gradient-to-r from-[#EBD9F9]/20 to-[#5D14AD]/40" : "bg-white"
      }`}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#5D14AD] flex items-center justify-center text-white">
          <MessageSquareText size={20} className="text-white" />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
          <span className="text-[#5D14AD] font-semibold">{type}</span> {from} • {date}
        </p>
        <div className="mt-3 max-w-3xl text-gray-700 whitespace-pre-line">{message}</div>

        {actions && actions.length > 0 && (
          <div className="flex gap-3 mt-4">
            {actions.map((action) => (
              <button
                key={action.label}
                onClick={action.onClick}
                className={`px-5 py-2 cursor-pointer rounded-lg font-medium ${
                  action.variant === "primary"
                    ? "bg-gradient-to-r text-white from-[#9D71C6] to-[#5D14AD]"
                    : "bg-transparent border border-[#5D14AD] text-[#5D14AD]"
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
