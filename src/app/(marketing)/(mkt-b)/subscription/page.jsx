"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CheckCircle, Plus, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = ["Basic", "Standard", "Premium"];
const monthlyPrices = ["Free", "₦5000 NGN", "₦10000 NGN"];
const yearlyPrices = ["Free", "₦45000 NGN", "₦90000 NGN"];

const features = [
  {
    name: "Number of Listings",
    values: ["5 properties", "Unlimited", "Unlimited"],
  },
  {
    name: "Visibility in Search Results",
    values: ["Standard", "Priority", "Top-tier"],
  },
  {
    name: "Featured Listings",
    values: ["No", "Yes (Limited)", "Yes (Premium)"],
  },
  {
    name: "Direct Inquiries & Leads",
    values: ["Standard", "Priority", "Top Priority"],
  },
  { name: "Social Media Promotion", values: ["No", "No", "Yes"] },
  { name: "Performance Analytics", values: ["No", "No", "Yes"] },
  {
    name: "Customer Support",
    values: ["Community", "Basic Support", "Personalized"],
  },
  { name: "Exclusive Agent Badge", values: ["No", "No", "Yes"] },
];

const subscriptionData = {
  Basic: {
    title: "Basic",
    price: "Free",
    type: "All agents",
    features: [
      "List up to 4 properties at once",
      "limited access to agent dashboard",
      "No visibility on search results and map",
      "No featured listings",
      "No access to other agents dashboard",
    ],
    icon: "/icons/basic.svg",
  },
  Standard: {
    title: "Standard",
    price: "₦5,000",
    type: "For professional Agent",
    discountedPriceFrom: "₦10,000",
    duration: "monthly",
    features: [
      "List up to 10 properties at once",
      "Standard Visibility on search results and map",
      "Full Access to agent dashboard",
      "Featured listings",
      "No access to other agents dashboard",
      "Basic customer support",
    ],
    icon: "/icons/standard.svg",
  },
  Premium: {
    title: "Premium",
    price: "₦15,000",
    type: "For professional Agent",
    discountedPriceFrom: "₦30,000",
    duration: "monthly",
    features: [
      "List up to 30 properties at once",
      "Standard Visibility on search results and map",
      "Full Access to agent dashboard",
      "Featured listings",
      "Access to other agents dashboard and sharing of their properties",
      "Top-tier exposure with premium listing placement",
      "Personalised customer support",
      "Exclusive agent badge",
    ],
    icon: "/icons/premium.svg",
  },
};

const SubscriptionPage = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 md:px-12 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#5D14AD]">
          Subscription Plans for Agents on Propifix
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Choose the right plan to maximize your property visibility and attract
          serious buyers and renters.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {Object.entries(subscriptionData).map(([key, data]) => {
          const isSelected = selectedTier === key;
          return (
            <div
              key={key}
              onClick={() => setSelectedTier(key)}
              className={`w-full max-w-sm p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ${
                isSelected
                  ? "bg-[#5D14AD] text-white"
                  : "bg-white text-black border"
              }`}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={data.icon}
                  alt={`${data.title} icon`}
                  width={60}
                  height={60}
                />
              </div>

              <h3 className="text-2xl font-semibold text-center mb-2">
                {data.title}
              </h3>

              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-bold">{data.price}</h1>
                {data.discountedPriceFrom && (
                  <div className="text-right">
                    <p className="line-through text-sm">
                      {data.discountedPriceFrom}
                    </p>
                    <p className="text-xs">{data.duration}</p>
                  </div>
                )}
              </div>

              <h5 className="text-sm mb-4">{data.type}</h5>

              <section className="space-y-2 mb-6">
                {data.features.map((item, subIndex) => (
                  <div key={subIndex} className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      color={isSelected ? "white" : "#5D14AD"}
                    />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </section>

              <Button
                className={
                  isSelected
                    ? "bg-white text-[#5D14AD]"
                    : "bg-[#5D14AD] text-white w-full"
                }
              >
                Start 7-day free trial
              </Button>
            </div>
          );
        })}
      </div>

      <div className="overflow-x-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Compare all plan features
        </h2>
        <div className="grid grid-cols-4 items-end gap-4 mb-4">
          {/* Empty first column to align with left-most feature label column */}
          <div></div>

          {/* Subscription tiers aligned visually with table columns */}
          {Object.values(subscriptionData).map((item, index) => (
            <div key={index} className="text-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="mx-auto"
              />
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {!showTable && (
            <Button
              className="flex gap-3 bg-white cursor-pointer hover:text-white hover:bg-[#5D14AD] text-[#5D14AD] mt-12"
              onClick={() => setShowTable(true)}
            >
              <Plus />
              <p>Open full list of features</p>
            </Button>
          )}
        </div>

        {showTable && (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50 text-left text-sm text-gray-700">
                    <th className="p-4"> </th>
                    {plans.map((plan) => (
                      <th key={plan} className="p-4 text-center font-semibold">
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="text-sm text-gray-700">
                  <tr className="bg-gray-100 font-medium">
                    <td className="p-4">Pay monthly</td>
                    {monthlyPrices.map((price, i) => (
                      <td key={i} className="p-4 text-center">
                        {price}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-100 font-medium">
                    <td className="p-4">
                      Pay yearly{" "}
                      <span className="text-purple-600">(Save up to 25%)</span>
                    </td>
                    {yearlyPrices.map((price, i) => (
                      <td key={i} className="p-4 text-center">
                        {price}
                      </td>
                    ))}
                  </tr>

                  {features.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-4 font-medium">{feature.name}</td>
                      {feature.values.map((val, i) => (
                        <td key={i} className="p-4 text-center">
                          {val.toLowerCase() === "yes" ||
                          val.toLowerCase().includes("yes") ? (
                            <span className="flex items-center justify-center gap-1 text-green-600">
                              <CheckCircle size={16} />
                              {val}
                            </span>
                          ) : val.toLowerCase() === "no" ? (
                            <span className="flex items-center justify-center gap-1 text-gray-400">
                              <XCircle size={16} />
                              {val}
                            </span>
                          ) : (
                            val
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr className="bg-gray-50 border-t">
                    <td></td>
                    {plans.map((plan, i) => (
                      <td key={i} className="p-4 text-center">
                        <button className="bg-purple-100 text-purple-600 hover:bg-purple-200 px-4 py-2 rounded-md text-sm font-medium">
                          Start free trial
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-6">
              <Button
                onClick={() => setShowTable(false)}
                className="bg-white cursor-pointer hover:text-white hover:bg-[#5D14AD] text-[#5D14AD] underline text-sm"
              >
                ← Close full list of features
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPage;
