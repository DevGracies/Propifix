"use client";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Inspection", value: 23, color: "#40BB15", amount: "₦ 10,000,000.00" },
  { name: "Rent", value: 17, color: "#EE0AE2", amount: "₦ 10,000,000.00" },
  { name: "Buy", value: 25, color: "#E74040", amount: "₦ 10,000,000.00" },
  { name: "Services", value: 12, color: "#9747FF", amount: "₦ 10,000,000.00" },
  { name: "Subscriptions", value: 23, color: "#006FFF", amount: "₦ 10,000,000.00" },
];

export default function TransactionOverview() {
 const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const xStart = cx + outerRadius * Math.cos(-midAngle * RADIAN);
  const yStart = cy + outerRadius * Math.sin(-midAngle * RADIAN);
  const xEnd = cx + outerRadius + 80; // fixed horizontal right offset
  const yEnd = yStart; // keep horizontal line

  return (
    <g>
      {/* Percentage badge */}
      <foreignObject x={xStart - 20} y={yStart - 15} width={40} height={30}>
        <div
          className="flex items-center justify-center rounded-full border text-xs font-bold"
          style={{
            background: "white",
            color: data[index].color,
            borderColor: data[index].color,
          }}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </div>
      </foreignObject>

      {/* Arrow with arrowhead */}
      <defs>
        <marker
          id={`arrowhead-${index}`}
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L6,3 z" fill={data[index].color} />
        </marker>
      </defs>
      <line
        x1={xStart}
        y1={yStart}
        x2={xEnd}
        y2={yEnd}
        stroke={data[index].color}
        strokeWidth={2}
        markerEnd={`url(#arrowhead-${index})`}
      />

      {/* ₦ Amount text outside */}
      <text
        x={xEnd + 10}
        y={yEnd + 4}
        fill={data[index].color}
        fontSize={12}
        fontWeight="bold"
      >
        {data[index].amount}
      </text>
    </g>
  );
};

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-6">Transaction Overview</h2>

      <div className="flex flex-col items-center">
        <PieChart width={650} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        {/* Legend */}
        <div className="flex flex-wrap justify-between w-full mt-6">
          {[
            { color: "#E74040", text: "Buy" },
            { color: "#EE0AE2", text: "Rent" },
            { color: "#40BB15", text: "Inspection" },
            { color: "#006FFF", text: "Subscriptions" },
            { color: "#9747FF", text: "Services" },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full" style={{ background: item.color }}></span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
