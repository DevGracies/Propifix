"use client"
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChevronDown } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Transactions() {
  const [selectedMonth, setSelectedMonth] = useState("This month");
  const [showDropdown, setShowDropdown] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [500000, 800000, 600000, 750000, 900000, 650000, 700000],
      maxBarThickness: 20,
      borderRadius: 4,
      categoryPercentage: 0.6,
      barPercentage: 0.9,
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "#9D71C6");
        gradient.addColorStop(1, "#5D14AD");
        return gradient;
      },
    },
    {
      label: "Expenses",
      data: [300000, 600000, 500000, 450000, 700000, 500000, 550000],
      maxBarThickness: 20,
      borderRadius: 4,
      categoryPercentage: 0.6,
      barPercentage: 0.9,
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "#5D14AD");
        gradient.addColorStop(1, "#9D71C6");
        return gradient;
      },
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (tooltipItem) => {
          const label = tooltipItem.dataset.label || "";
          return `${label}: ₦${tooltipItem.raw.toLocaleString()}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: { display: true, text: "Amount (₦)" },
      ticks: {
        callback: (value) => {
          if (value >= 1000000) return "1M";
          if (value >= 100000) return `${value / 1000}k`;
          return value;
        },
      },
      min: 100000,
      max: 1000000,
      grid: {
        borderDash: [5, 5],
      },
    },
    x: {
      title: { display: true, text: "Days of the week" },
      grid: {
        borderDash: [5, 5],
      },
    },
  },
};


  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">Transaction Overview</h2>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-md"
            >
              {selectedMonth}
             <ChevronDown size={16} />
            </button>
            {showDropdown && (
              <ul className="absolute mt-1 bg-white shadow-md rounded-md z-10">
                {months.map((month) => (
                  <li
                    key={month}
                    onClick={() => {
                      setSelectedMonth(month);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {month}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#5D14AD" }}
            ></span>
            <span>Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#9D71C6" }}
            ></span>
            <span>Expenses</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <Bar data={data} options={options} />
    </div>
  );
}
