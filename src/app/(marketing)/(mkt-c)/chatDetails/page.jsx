"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ChatDetail({
  userType = 'agent',
  isOnline = true,
  chatWith = {
    name: 'John Doe',
    profile: '/images/profile.jpg',
    properties: ['/images/prop1.jpg', '/images/prop2.jpg'],
  },
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('properties');
  const router = useRouter();

  const suggestions = [
    'Hello, how can I help you?',
    'Would you like to schedule a visit?',
    'I have a property you might like.',
  ];

  const handleSendSuggestion = (text) => {
    console.log('Sent:', text);
    // send logic here
  };

  return (
    <div className="h-screen bg-[#f9f9f9] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b">
        <button
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
          onClick={() => router.back()}
        >
          ←
        </button>
        <div className="relative cursor-pointer" onClick={() => router.push('/profile/image')}>
          <Image
            src={chatWith.profile}
            width={40}
            height={40}
            className="rounded-full"
            alt="User"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          )}
        </div>
        <div className="flex flex-col cursor-pointer" onClick={() => router.push('/profile/user')}>
          <span className="font-bold">{chatWith.name}</span>
          <span className="text-xs text-gray-500">{isOnline ? 'Online' : 'Offline'}</span>
        </div>
      </div>

      {/* Date Divider */}
      <div className="flex items-center justify-center my-4">
        <span className="bg-white border rounded-full px-4 py-1 text-sm text-gray-500">
          Today
        </span>
      </div>

      {/* AI Suggestions */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto">
        {suggestions.map((text, index) => (
          <button
            key={index}
            onClick={() => handleSendSuggestion(text)}
            className="bg-[#E8E8E8] px-3 py-2 rounded-full text-sm"
          >
            {text}
          </button>
        ))}
      </div>

      {/* Bottom tab for agent/caretaker/landlord */}
      {(userType === 'agent' || userType === 'caretaker' || userType === 'landlord') && (
        <div className="mt-auto border-t p-2">
          <div className="flex justify-around">
            {['properties', 'images'].map((tab) => (
              <div
                key={tab}
                onClick={() => {
                  setSelectedTab(tab);
                  setShowModal(true);
                }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="border p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span className="text-xs mt-1 capitalize">{tab}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-4 rounded-lg relative">
            <h3 className="text-center font-semibold mb-4 capitalize">{selectedTab}</h3>
            {/* Carousel */}
            <div className="flex gap-2 overflow-x-auto mb-4">
              {chatWith.properties.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt={`property-${index}`}
                />
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-sm text-gray-500"
            >
              ✖
            </button>
            <div className="text-center">
              <button className="bg-[#5D14AD] text-white px-6 py-2 rounded-full">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
