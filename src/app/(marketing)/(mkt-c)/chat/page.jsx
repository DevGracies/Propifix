"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ChatPage({
  userType = "customer", 
  messages = [], 
  isOnline = true, 
  username = "Grace"
}) {
  const isEmpty = messages.length === 0;
  const router = useRouter();

  const emptyMessage =
    userType === "customer"
      ? "Send requests to any service provider - real estate agents, caretakers, landlords or artisans."
      : "When a customer sends you a message, it will appear here.";

  const handleChatClick = () => {
    router.push("/chatDetails");
  };

  return (
    <div className="h-screen bg-[#f0f0f0] flex flex-col p-4">
      {/* Header Navbar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-[#5D14AD]">Propifix</h1>
        <div className="flex items-center gap-2 bg-[#E8E8E8] px-3 py-2 rounded-full w-60">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium text-gray-700">{username}</span>
        <div className="relative w-10 h-10">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            layout="fill"
            className="rounded-full object-cover"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          )}
        </div>
      </div>

      {/* My Messages Header */}
      <div className="text-lg font-semibold mb-3">
        <span className="text-[#9D71C6]">My </span>
        <span className="text-[#5D14AD]">Messages</span>
      </div>

      {/* Chat Body */}
      <div className="flex-1 bg-white rounded-xl p-6 overflow-y-auto">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-600">
            <Image
              src="/images/no-messages.png"
              width={120}
              height={120}
              alt="No Messages"
            />
            <h2 className="font-bold mt-4 text-lg text-gray-800">
              No Messages yet
            </h2>
            <p className="mt-2 text-sm max-w-xs">{emptyMessage}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="bg-[#F1F1F1] px-4 py-3 rounded-xl w-fit max-w-xs cursor-pointer"
                onClick={handleChatClick}
              >
                <p className="text-sm">{msg}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
