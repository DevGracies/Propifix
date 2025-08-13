/* components/PropertyListingsByType.jsx */
"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PropertyListingsByType() {
  const data = [
    { name: "Hostels", value: 450 },
    { name: "Single Room", value: 800 },
    { name: "Self Contain", value: 1200 },
    { name: "Room & Parlour Self Contained", value: 950 },
    { name: "One Bedroom", value: 1400 },
    { name: "Two Bedroom", value: 1700 },
    { name: "Three Bedroom", value: 2000 },
    { name: "Four Bedroom Flat", value: 1600 },
    { name: "Five Bedroom", value: 1100 },
    { name: "Semi Detached Bungalow", value: 900 },
    { name: "Office Space", value: 1500 },
    { name: "Semi Detached Duplex", value: 1300 },
    { name: "Detached Bungalow", value: 800 },
    { name: "Detached Duplex", value: 1000 },
    { name: "Shop", value: 600 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-md p-2 text-sm">
          <p className="font-medium">Properties: {label}</p>
          <p>Value: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">
        Property Listings by Type
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 50 }}>
          {/* GRID with dashed lines */}
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* X Axis */}
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12 }}
            label={{
              value: "Properties",
              position: "insideBottom",
              offset: -40,
            }}
          />

          {/* Y Axis */}
          <YAxis
            domain={[50, 2000]}
            tick={{ fontSize: 12 }}
            label={{
              value: "Number of Property(ies)",
              angle: -90,
              position: "insideLeft",
            }}
          />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Line with gradient fill */}
          <defs>
            <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5D14AD" stopOpacity={1} />
              <stop offset="100%" stopColor="rgba(93, 20, 173, 0)" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Line
            type="monotone"
            dataKey="value"
            stroke="#5D14AD"
            strokeWidth={2}
            dot={{ fill: "#5D14AD", r: 4 }}
            activeDot={{ r: 6 }}
            fill="url(#colorWave)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}