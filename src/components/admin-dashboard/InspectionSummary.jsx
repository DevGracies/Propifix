/* components/InspectionSummary.jsx */
"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function InspectionSummary({ totalInspections = 40 }) {
  // percentages you gave
  const slices = [
    { key: "Completed", pct: 40, color: "#E74040" },
    { key: "Pending", pct: 35, color: "#EE0AE2" },
    { key: "Cancelled", pct: 15, color: "#40BB15" },
    { key: "Rescheduled", pct: 10, color: "#006FFF" },
  ];

  // Build data for recharts (donut must sum to 100)
  const pieData = slices.map((s) => ({ name: s.key, value: s.pct, color: s.color }));

  // compute counts from percentages (rounded)
  const counts = slices.map((s) => ({
    ...s,
    count: Math.round((s.pct / 100) * totalInspections),
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-center text-lg font-semibold mb-6">Inspection Summary</h3>

      {/* Chart area */}
      <div className="relative w-full max-w-[720px] mx-auto">
        {/* Chart (center) */}
        <div className="w-full flex justify-center">
          <div className="relative" style={{ width: 480, height: 420 }}>
            <ResponsiveContainer width="100%" height="100%">
              {/* NO paddingAngle so donut is continuous (no breakage) */}
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={110}
                  outerRadius={160}
                  startAngle={90}
                  endAngle={450}
                  labelLine={false}
                  paddingAngle={0} /* no gap */
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* CENTER NUMBER */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-bold">{totalInspections}</span>
              <span className="text-sm text-gray-500">Inspections</span>
            </div>

            {/* UPPER LEFT label box */}
            <div
              className="absolute flex flex-col items-start bg-white shadow-sm rounded-md px-3 py-2"
              style={{ top: 18, left: 8, width: 160 }}
            >
              <span className="text-sm font-medium">Completed</span>
              <span className="text-sm font-bold" style={{ color: "#E74040" }}>
                40%
              </span>
            </div>

            {/* UPPER RIGHT label box */}
            <div
              className="absolute flex flex-col items-start bg-white shadow-sm rounded-md px-3 py-2"
              style={{ top: 18, right: 24, width: 160 }}
            >
              <span className="text-sm font-medium">Rescheduled</span>
              <span className="text-sm font-bold" style={{ color: "#006FFF" }}>
                10%
              </span>
            </div>

            {/* RIGHT label box (middle-right) */}
            <div
              className="absolute flex flex-col items-start bg-white shadow-sm rounded-md px-3 py-2"
              style={{
                top: "50%",
                right: 6,
                transform: "translateY(-50%)",
                width: 160,
              }}
            >
              <span className="text-sm font-medium">Cancelled</span>
              <span className="text-sm font-bold" style={{ color: "#40BB15" }}>
                15%
              </span>
            </div>

            {/* LOWER CENTER label box */}
            <div
              className="absolute flex flex-col items-start bg-white shadow-sm rounded-md px-3 py-2"
              style={{
                bottom: 18,
                left: "50%",
                transform: "translateX(-50%)",
                width: 180,
              }}
            >
              <span className="text-sm font-medium">Pending</span>
              <span className="text-sm font-bold" style={{ color: "#EE0AE2" }}>
                35%
              </span>
            </div>
          </div>
        </div>

        {/* BELOW: rows with curved top/bottom borders but no left/right border */}
        <div className="mt-6 space-y-3 max-w-[720px] mx-auto">
          {counts.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between px-4 py-3 rounded-full"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.08)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                borderLeft: "none",
                borderRight: "none",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="text-sm font-medium">
                  {item.key} Inspections - {item.count}
                </span>
              </div>

              <div className="text-sm font-semibold" style={{ color: item.color }}>
                {item.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
