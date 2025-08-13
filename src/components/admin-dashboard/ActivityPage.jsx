"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, User } from "lucide-react";
import Image from "next/image";

export default function ActivityPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [time, setTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(null);

  // Mock data (replace with API call)
  const tableData = Array.from({ length: 20 }).map((_, idx) => ({
    id: `User #123ABC${idx}`,
    date: "01/02/2025",
    device: "Windows PC",
    ip: "192.168.23.191",
    location: "Lagos, Nigeria",
    action: idx % 2 === 0 ? "Logged in" : "Failed login",
    status: idx % 2 === 0 ? "success" : "failed",
  }));

  const rowsPerPage = 7;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const paginatedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Time updater
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Battery API
  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        setBatteryLevel(Math.round(battery.level * 100));
        battery.addEventListener("levelchange", () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left: Recent Activities */}
      <div className="bg-white rounded-lg shadow p-4 md:w-[90%]">
        <h2 className="text-lg font-semibold mb-4">Recent Activities (Live Updates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left">
                <th className="py-2">User</th>
                <th>Date/Time</th>
                <th>Device</th>
                <th>IP Address</th>
                <th>Location</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="flex items-center gap-2 py-2">
                    <User size={16} />
                    {row.id}
                  </td>
                  <td>{row.date}</td>
                  <td>{row.device}</td>
                  <td>{row.ip}</td>
                  <td>{row.location}</td>
                  <td>{row.action}</td>
                  <td>
                    {row.status === "success" ? (
                      <CheckCircle2 size={18} className="text-green-500" />
                    ) : (
                      <XCircle size={18} className="text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

   {/* Pagination */}
<div className="flex justify-end mt-4 space-x-2">
  {/* Left angles (one button) */}
  <button
    className="p-2 rounded flex items-center space-x-1"
    onClick={() => {
      if (startPage > 1) {
        setStartPage(startPage - 1);
      }
    }}
    disabled={startPage === 1}
  >
    <ChevronLeft className="w-5 h-5" style={{ color: "#5D14AD" }} />
    <ChevronLeft className="w-5 h-5" style={{ color: "#DDC7F0" }} />
  </button>

  {/* Page numbers */}
  {Array.from({ length: 6 }, (_, i) => i + 1)
    .slice(startPage - 1, startPage + 3) // show 4 pages at a time
    .map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`px-3 py-1 rounded ${
          page === currentPage ? "bg-purple-700 text-white" : "bg-gray-100"
        }`}
      >
        {page}
      </button>
    ))}

  {/* Right angles (one button) */}
  <button
    className="p-2 rounded flex items-center space-x-1"
    onClick={() => {
      if (startPage + 3 < 6) {
        setStartPage(startPage + 1);
      }
    }}
    disabled={startPage + 3 >= 6}
  >
    <ChevronRight className="w-5 h-5" style={{ color: "#DDC7F0" }} />
    <ChevronRight className="w-5 h-5" style={{ color: "#5D14AD" }} />
  </button>
</div>


      </div>

      {/* Right: Time & Battery */}
   <div
    className="rounded-lg shadow p-4 flex flex-col items-center justify-center text-white md:w-[10%]"
    style={{
      background: "linear-gradient(173.8deg, #5D14AD 0%, #9747FF 100%)",
    }}
  >
        <h3 className="text-lg font-semibold mb-2">Current Time</h3>
        <p className="text-2xl mb-4">{time}</p>

        <h3 className="text-lg font-semibold mb-2">System Battery</h3>
        <Image src="/admin/Liquid loading.svg"  alt="Battery"  className="w-12 h-12 mb-2" width={10} height={10} />
        <p className="text-xl">{batteryLevel !== null ? `${batteryLevel}%` : "N/A"}</p>
      </div>
    </div>
  );
}
