"use client";
import { useEffect, useState } from "react";

const StatCard = ({ title, value, bgColor, text }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md  flex flex-col justify-between h-24`}
      style={{ backgroundColor: bgColor, color: text}}
    >
      <p className="text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default function Total() {
  //   const [stats, setStats] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     const fetchStats = async () => {
  //       try {
  //         const res = await fetch("https://your-backend-api.com/admin/stats");
  //         if (!res.ok) throw new Error("Failed to fetch stats");
  //         const data = await res.json();

  //         // Map backend data to UI structure
  //         const mappedStats = [
  //           { title: "Total Property Listings", value: data.totalPropertyListings, bg: "#5D14AD" },
  //           { title: "Total Sold", value: data.totalSold, bg: "#5D14AD99" },
  //           { title: "Total Users", value: data.totalUsers, bg: "#5D14AD4D" },
  //           { title: "Total Artisans", value: data.totalArtisans, bg: "#5D14AD4D" },
  //           { title: "Total Landlords", value: data.totalLandlords, bg: "#5D14AD4D" },
  //           { title: "Total Agent", value: data.totalAgents, bg: "#5D14AD4D" },
  //           { title: "Total Caretaker", value: data.totalCaretakers, bg: "#5D14AD4D" },
  //           { title: "Pending Inspection", value: data.pendingInspections, bg: "#5D14AD1A" },
  //           { title: "Active Subscribers", value: data.activeSubscribers, bg: "#9747FF" },
  //           { title: "Total Transactions", value: data.totalTransactions, bg: "#FFFFFF" },
  //           { title: "Total Income", value: `$${data.totalIncome}`, bg: "#FFFFFF" },
  //           { title: "Total Expense", value: `$${data.totalExpense}`, bg: "#FFFFFF" },
  //         ];

  //         setStats(mappedStats);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchStats();
  //   }, []);

  //   if (loading) {
  //     return <p className="p-6">Loading stats...</p>;
  //   }

  //   if (error) {
  //     return <p className="p-6 text-red-500">Error: {error}</p>;
  //   }

  //   return (
  //     <div className="p-6">
  //       <h1 className="text-xl font-semibold mb-6">Dashboard</h1>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //         {stats.map((stat, idx) => (
  //           <StatCard
  //             key={idx}
  //             title={stat.title}
  //             value={stat.value}
  //             bgColor={stat.bg}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  const stats = [
    {
      title: "Total Property Listings",
      value: "1,245",
      bg: "#5D14AD",
      text: "#FFFFFF",
    },
    { title: "Total Sold", value: "210", bg: "#5D14AD99", text: "#FFFFFF" },
    { title: "Total Users", value: "3,502", bg: "#5D14AD4D", text: "#FFFFFF" },
    { title: "Total Artisans", value: "543", bg: "#5D14AD4D", text: "#000000" },
    {
      title: "Total Landlords",
      value: "320",
      bg: "#5D14AD4D",
      text: "#000000",
    },
    { title: "Total Agent", value: "198", bg: "#5D14AD4D", text: "#000000" },
    { title: "Total Caretaker", value: "75", bg: "#5D14AD4D", text: "#FFFFFF" },
    {
      title: "Pending Inspection",
      value: "12",
      bg: "#5D14AD1A",
      text: "#FFFFFF",
    },
    {
      title: "Active Subscribers",
      value: "850",
      bg: "#9747FF",
      text: "#FFFFFF",
    },
    {
      title: "Total Transactions",
      value: "1,002",
      bg: "#FFFFFF",
      text: "#000000",
    },
    { title: "Total Income", value: "$45,000", bg: "#FFFFFF", text: "#000000" },
    { title: "Total Expense", value: "$8,500", bg: "#FFFFFF", text: "#000000" },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            title={stat.title}
            value={stat.value}
            bgColor={stat.bg}
            text={stat.text}
          />
        ))}
      </div>
    </div>
  );
}
