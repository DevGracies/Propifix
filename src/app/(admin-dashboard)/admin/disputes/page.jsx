"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Flame,
  Search,
  Filter,
} from "lucide-react";

/*
  Disputes Admin Page
  - Tailwind + Next.js compatible React component
  - Uses recharts for graphs and react-icons for icons
  - Mock data included; replace fetchData() with real API calls

  How to use:
  1. Install dependencies:
     npm install recharts react-icons

  2. Put this file in pages/admin/disputes.jsx (or app route) and import it.
  3. Ensure Tailwind CSS is configured in your Next.js project.
*/

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mockMonthly = MONTHS.map((m, i) => ({
  month: m,
  disputes: Math.floor(Math.random() * 60),
}));
const mockPie = [
  { name: "Payment Disputes", value: 50, color: "#5D14AD" },
  { name: "Caretaker Issues", value: 20, color: "#E77C40" },
  { name: "Service Complaints", value: 30, color: "#2DC071" },
];

const generateRows = (n = 23) => {
  const rows = [];
  for (let i = 0; i < n; i++) {
    rows.push({
      id: `#DPT${1000 + i}`,
      user: ["Lola Duro", "Olori Grace", "Tunde Bala"][i % 3],
      agent: ["Miracle Iyanu", "Grace Olori", "Jon Snow"][i % 3],
      property: ["2-bedroom Apartment", "3-bedroom House"][i % 2],
      date: new Date(2025, i % 12, (i % 28) + 1, 14, 17).toLocaleString(),
      status: ["Pending", "Resolved", "Under Review", "Escalated"][i % 4],
    });
  }
  return rows;
};

export default function AdminDisputesPage() {
  // Stats cards
  const [activeStat, setActiveStat] = useState("Total Disputes");

  // Chart data
  const [monthly, setMonthly] = useState(mockMonthly);
  const [pieData, setPieData] = useState(mockPie);

  // Filters
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  // Table & pagination
  const allRows = useMemo(() => generateRows(37), []);
  const [page, setPage] = useState(1);
  const perPage = 7;
  const pages = Math.max(1, Math.ceil(allRows.length / perPage));
  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return allRows.slice(start, start + perPage);
  }, [page, allRows]);

  // Modal state
  const [viewRow, setViewRow] = useState(null);
  const [showEscalateModal, setShowEscalateModal] = useState(false);
  const [escalateRow, setEscalateRow] = useState(null);

  // Bar hover state (for gradient effect)
  const [hoveredBar, setHoveredBar] = useState(null);

  useEffect(() => {
    // Replace this with a real API fetch
    // fetch('/api/disputes/summary').then(...)
    // For now we use mocks (monthly/pie/allRows)
  }, []);

  // Stats numbers derived from current data (mocked)
  const stats = useMemo(
    () => ({
      "Total Disputes": allRows.length,
      "Resolved Cases": allRows.filter((r) => r.status === "Resolved").length,
      "Pending Cases": allRows.filter((r) => r.status === "Pending").length,
      "Escalated Cases": allRows.filter((r) => r.status === "Escalated").length,
    }),
    [allRows]
  );

  // table actions
  const onView = (row) => setViewRow(row);
  const onEscalate = (row) => {
    setEscalateRow(row);
    setShowEscalateModal(true);
  };

  // pagination helpers for the numbered buttons shifting window
  const getPageButtons = () => {
    // show up to 4 page numbers in the control (as example from figma)
    const windowSize = 4;
    let start = Math.max(1, page - Math.floor(windowSize / 2));
    if (start + windowSize - 1 > pages)
      start = Math.max(1, pages - windowSize + 1);
    return Array.from(
      { length: Math.min(windowSize, pages) },
      (_, i) => start + i
    );
  };

  // search + filter apply
  const filteredRows = paginated.filter((r) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      [r.user, r.agent, r.property, r.id].join(" ").toLowerCase().includes(q);
    const matchesFilter = filter === "All" || r.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">DISPUTES</h1>
          <div className="text-sm text-gray-600">Messages & Alerts</div>
        </header>

        {/* A. Stats cards */}
        <section className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {Object.keys(stats).map((key) => {
              const active = activeStat === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveStat(key);
                    setPage(1);
                  }}
                  className={`p-4 rounded-lg shadow flex flex-col items-start transition-colors duration-200 ${
                    active
                      ? "bg-purple-700 text-white"
                      : "bg-white text-gray-800"
                  }`}
                  aria-pressed={active}
                >
                  <span className="text-sm">{key}</span>
                  <span className="text-2xl mt-2 font-semibold">
                    {stats[key]}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* B. Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left: Disputes Per Month */}
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">Disputes Per Month</h2>
              <div className="flex items-center gap-2">
                <div className="text-xs">Number of Disputes</div>
              </div>
            </div>

            <div style={{ height: 260 }} className="relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthly}
                  margin={{ top: 30, right: 20, left: 12, bottom: 40 }}
                >
                  <defs>
                    <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#5D14AD" stopOpacity={1} />
                      <stop offset="100%" stopColor="#000000" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id="gradHover" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#5D14AD" stopOpacity={1} />
                      <stop offset="100%" stopColor="#000000" stopOpacity={1} />
                    </linearGradient>
                  </defs>

                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 60]} tickLine={false} axisLine={false} />
                  <ReTooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    }}
                    formatter={(value) => [`Disputes: ${value}`]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Bar
                    dataKey="disputes"
                    onMouseEnter={(_, index) => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={false}
                  >
                    {monthly.map((entry, idx) => (
                      <Cell
                        key={`cell-${idx}`}
                        fill={
                          hoveredBar === idx ? "url(#gradHover)" : "#A78BFA"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* center title & small circle with "Disputes" */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 text-center">
                <div className="text-sm font-medium">Month</div>
                <div
                  className="mt-2 mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg,#5D14AD 0%, #000000 100%)",
                  }}
                >
                  <span className="text-xs text-white">Disputes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pie chart Breakdown */}
          <div className="bg-white rounded-xl p-4 shadow flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">Breakdown of Dispute Categories</h2>
            </div>
            <div className="flex-1 flex flex-col lg:flex-row items-center gap-4">
              <div
                style={{ width: 260, height: 240 }}
                className="flex items-center justify-center"
              >
                <ResponsiveContainer width={260} height={240}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={48}
                      paddingAngle={6}
                      stroke="#fff"
                    >
                      {pieData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* external boxes around pie (stacked) */}
              <div className="flex-1 flex flex-col gap-4 px-2">
                {pieData.map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md border border-black bg-white flex items-center justify-center text-sm font-medium text-black">
                      {" "}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-gray-600">{p.value}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend below */}
            <div className="mt-4 flex items-center gap-6 justify-center">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#0F9BFB" }}
                ></span>
                <span className="text-sm">Payment Disputes</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#AA71F4" }}
                ></span>
                <span className="text-sm">Service Complaints</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#5D14AD" }}
                ></span>
                <span className="text-sm">Caretaker Issues</span>
              </div>
            </div>
          </div>
        </section>

        {/* C. Filters */}
        <section className="mb-6 bg-white rounded-xl p-4 shadow">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center bg-white rounded-md shadow-sm px-3">
              <Search className="text-gray-400 mr-2" />
              <input
                className="w-full py-3 outline-none text-sm"
                placeholder="Search by user or agent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="w-64 relative">
              <button
                onClick={() => setShowFilterOptions(!showFilterOptions)}
                className="w-full border border-gray-200 bg-white rounded-md px-3 py-3 flex items-center justify-between"
              >
                <div className="text-sm">Filter by status</div>
                <Filter />
              </button>

              {showFilterOptions && (
                <div className="absolute z-20 mt-2 w-full bg-white border shadow-lg rounded-md">
                  {[
                    "All",
                    "Pending",
                    "Under Review",
                    "Resolved",
                    "Escalated",
                  ].map((opt) => (
                    <div
                      key={opt}
                      className="px-3 py-2 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="status"
                        checked={filter === opt}
                        onChange={() => setFilter(opt)}
                        className="text-purple-600"
                      />
                      <div className="text-sm">{opt}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* D. Table */}
        <section className="bg-white rounded-xl p-4 shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="text-sm text-gray-600">
                  <th className="py-3 pr-4">ID</th>
                  <th className="py-3 pr-4">User</th>
                  <th className="py-3 pr-4">Agent</th>
                  <th className="py-3 pr-4">Property</th>
                  <th className="py-3 pr-4">Date filed</th>
                  <th className="py-3 pr-4">Status</th>
                  <th className="py-3 pr-4">
                    {" "}
                    <input type="checkbox" /> Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id} className="border-t">
                    <td className="py-4 pr-4 text-sm">{row.id}</td>
                    <td className="py-4 pr-4 text-sm">{row.user}</td>
                    <td className="py-4 pr-4 text-sm">{row.agent}</td>
                    <td className="py-4 pr-4 text-sm">{row.property}</td>
                    <td className="py-4 pr-4 text-sm">{row.date}</td>
                    <td className="py-4 pr-4 text-sm">{row.status}</td>
                    <td className="py-4 pr-4 text-sm flex gap-2">
                      <button
                        onClick={() => onView(row)}
                        className="px-3 py-1 rounded text-white text-sm"
                        style={{ background: "#5D14AD" }}
                      >
                        View
                      </button>
                      <button
                        onClick={() => onEscalate(row)}
                        className="px-3 py-1 rounded text-white text-sm"
                        style={{ background: "#9747FF" }}
                      >
                        Escalate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="p-2 rounded-l-md"
                aria-label="previous"
              >
                <div className="flex">
                  <div
                    className="p-2 rounded-l-md"
                    style={{ background: "#5D14AD", color: "white" }}
                  >
                    <ChevronLeft />
                  </div>
                  <div
                    className="p-2 rounded-r-md"
                    style={{ background: "#DDC7F0", color: "#4C1D95" }}
                  >
                    <ChevronLeft />
                  </div>
                </div>
              </button>

              {getPageButtons().map((pbtn) => (
                <button
                  key={pbtn}
                  onClick={() => setPage(pbtn)}
                  className={`px-3 py-1 rounded ${
                    page === pbtn ? "bg-purple-600 text-white" : "bg-gray-100"
                  }`}
                >
                  {pbtn}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                className="p-2 rounded-r-md"
                aria-label="next"
              >
                <div className="flex">
                  <div
                    className="p-2 rounded-l-md"
                    style={{ background: "#DDC7F0", color: "#4C1D95" }}
                  >
                    <ChevronRight />
                  </div>
                  <div
                    className="p-2 rounded-r-md"
                    style={{ background: "#5D14AD", color: "white" }}
                  >
                    <ChevronRight />
                  </div>
                </div>
              </button>
            </div>

            <div className="text-sm text-gray-600">
              Showing {Math.min(perPage, allRows.length - (page - 1) * perPage)}{" "}
              of {allRows.length}
            </div>
          </div>
        </section>
      </div>

      {/* View Modal */}
      {viewRow && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          <div
            className="absolute inset-0 bg-white/40 backdrop-blur-sm"
            onClick={() => setViewRow(null)}
          ></div>
          <div className="relative bg-white rounded-lg w-11/12 md:w-3/5 p-6 shadow-xl z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Dispute Details</h3>
              <button
                onClick={() => setViewRow(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500">User</div>
                <div className="font-medium">{viewRow.user}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Agent</div>
                <div className="font-medium">{viewRow.agent}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Property</div>
                <div className="font-medium">{viewRow.property}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Issue</div>
                <div className="font-medium">Payment Dispute</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-medium">February 28, 2025</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Status</div>
                <div className="font-medium">{viewRow.status}</div>
              </div>
            </div>

            <div className="mb-4 font-semibold">Dispute Status Tracking</div>
            <div className="flex items-center gap-4">
              {["Pending Confirmation", "Under Review", "Resolved"].map(
                (step, idx) => {
                  const completedIndex = 0; // example: first step is current
                  const state =
                    idx < completedIndex
                      ? "done"
                      : idx === completedIndex
                      ? "current"
                      : "pending";
                  const active = idx <= completedIndex;
                  return (
                    <div key={step} className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          active
                            ? "bg-purple-600 text-white"
                            : "bg-black text-white"
                        }`}
                      >
                        <Flame />
                      </div>
                      <div
                        className={`text-sm ${
                          active ? "text-purple-600 font-medium" : "text-black"
                        }`}
                      >
                        {step}
                      </div>
                      {idx < 2 && (
                        <div
                          className={`w-16 h-0.5 ${
                            active ? "bg-purple-600" : "bg-gray-300"
                          }`}
                        ></div>
                      )}
                    </div>
                  );
                }
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setViewRow(null)}
                className="px-4 py-2 rounded bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Escalate Modal */}
      {showEscalateModal && escalateRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-white/40 backdrop-blur-sm"
            onClick={() => setShowEscalateModal(false)}
          ></div>
          <div className="relative bg-white rounded-lg w-11/12 sm:w-96 p-6 shadow-xl z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Confirm Escalation</h3>
              <button
                onClick={() => setShowEscalateModal(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to escalate this dispute?
            </p>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  /* call escalate API */ setShowEscalateModal(false);
                }}
                className="flex-1 px-4 py-2 rounded text-white"
                style={{ background: "#E74040" }}
              >
                Confirm
              </button>
              <button
                onClick={() => setShowEscalateModal(false)}
                className="flex-1 px-4 py-2 rounded text-white"
                style={{ background: "#9747FF" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
