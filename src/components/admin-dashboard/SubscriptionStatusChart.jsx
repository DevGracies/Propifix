"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { status: "Active", agents: 420 },
  { status: "Pending Renewal", agents: 150 },
  { status: "Expired", agents: 280 },
  { status: "Cancelled", agents: 90 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md p-3 rounded border text-sm">
        <p className="font-semibold">{label}</p>
        <p>Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function SubscriptionStatusChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-[500px]">
      <h2 className="text-lg font-bold mb-4">Subscription Status</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 40 }}>
          <XAxis
            dataKey="status"
            tick={{ fontSize: 14 }}
            label={{
              value: "Subscription Status",
              position: "insideBottom",
              offset: -25,
            }}
          />
          <YAxis
            label={{
              value: "Number of Agents",
              angle: -90,
              position: "insideLeft",
              offset: 5,
            }}
            domain={[0, 500]}
            ticks={[50, 100, 200, 300, 400, 500]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="agents"
            fill="#5D14AD"
            barSize={60} // thicker bars
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
