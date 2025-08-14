"use client";
import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronDown,
  Search,
  X as XIcon,
  Eye,
} from "lucide-react";

// Utility: classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Dummy data generators
const months = [
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

const pendingReportsData = months.map((m, i) => ({
  month: m,
  count: [12, 8, 22, 30, 18, 26, 45, 35, 28, 14, 9, 7][i],
}));

const issuesBreakdown = [
  { name: "Misleading info", value: 40, color: "#E77C40", key: "misleading" },
  { name: "Fraudulent Listing", value: 10, color: "#5D14AD", key: "fraud" },
  { name: "Fake Ownership", value: 15, color: "#AA71F4", key: "fake1" },
  { name: "Other", value: 35, color: "#2A7CC7", key: "other" },
];

const allRows = Array.from({ length: 28 }).map((_, i) => {
  const id = `#${(100000 + i).toString(36).toUpperCase()}`;
  const statuses = ["Pending", "Under Review", "Resolved"];
  const status = statuses[i % statuses.length];
  const reasons = ["Fraudulent Listing", "Misleading info", "Fake Ownership"]; 
  return {
    id,
    property: i % 2 ? "2-Bedroom Apartment" : "Luxury Penthouse",
    reportedBy: i % 3 ? "Lola Duro" : "Grace Olori",
    reason: reasons[i % reasons.length],
    date: "01/03/2025 - Sat - 2:17 PM",
    status,
  };
});

// Pie label as small white square with black border and text inside
const PieLabel = ({ cx, cy, midAngle, outerRadius, percent, index, name, color }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const label = `${name}`;
  const pct = `${Math.round(percent * 100)}%`;
  const boxW = Math.max(label.length * 6 + 12, 110);
  const boxH = 38;
  return (
    <g>
      <rect x={x - boxW / 2} y={y - boxH / 2} width={boxW} height={boxH} fill="#fff" stroke="#000" rx={6} ry={6} />
      <text x={x} y={y - 4} textAnchor="middle" fill="#000" fontSize={12} fontWeight={600}>
        {label}
      </text>
      <text x={x} y={y + 12} textAnchor="middle" fill={color} fontSize={12} fontWeight={700}>
        {pct}
      </text>
    </g>
  );
};

// Custom tooltip for bar chart
const CustomBarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const count = payload[0].value;
    return (
      <div className="rounded-xl px-3 py-2 text-white shadow-lg" style={{ background: "linear-gradient(180deg,#5D14AD 0%, #000000 100%)" }}>
        <div className="text-xs opacity-90">{label}</div>
        <div className="text-sm font-bold">Report: {count}</div>
      </div>
    );
  }
  return null;
};

// Select dropdown options component
function StatusSelect({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none"
      >
        <span className="text-gray-600">{value ?? "Filter by status"}</span>
        <ChevronDown size={18} className="text-gray-500" />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
          {options.map((opt) => {
            const checked = value === opt;
            return (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm",
                  checked ? "bg-[#EDDCFA]" : "hover:bg-gray-50"
                )}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 rounded-[4px] border",
                    checked ? "border-[#5D14AD] bg-[#5D14AD]" : "border-gray-300 bg-white"
                  )}
                />
                <span className="text-gray-700">{opt}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Modal wrapper
function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur and transparency */}
      <div
        onClick={onClose}
        className="absolute inset-0 backdrop-blur-sm bg-black/10"
      />
      <div className="relative z-10 max-h-[90vh] w-[95vw] max-w-5xl overflow-auto rounded-2xl bg-white p-6 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

// Confirmation Modal
function ConfirmModal({ open, onClose, title, message, confirmLabel, confirmColor = "#5D14AD", cancelLabel = "No, don’t cancel", onConfirm }) {
  if (!open) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
          <XIcon size={18} />
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-700">{message}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          onClick={onConfirm}
          className="rounded-xl px-4 py-2 text-white"
          style={{ backgroundColor: confirmColor }}
        >
          {confirmLabel}
        </button>
        <button
          onClick={onClose}
          className="rounded-xl px-4 py-2 text-white"
          style={{ backgroundColor: "#9747FF" }}
        >
          {cancelLabel}
        </button>
      </div>
    </Modal>
  );
}

export default function AdminReportsandAnalyticsPage() {
  const [activeCard, setActiveCard] = useState("Total Reported Properties");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [hoveringBar, setHoveringBar] = useState(false);

  // Table pagination
  const [page, setPage] = useState(1);
  const pageSize = 7;
  const totalPages = Math.ceil(allRows.length / pageSize);

  // Filter rows by active card and status / search
  const filtered = useMemo(() => {
    let rows = allRows;
    if (activeCard !== "Total Reported Properties") {
      const map = {
        "Pending Reports": "Pending",
        "Under Review": "Under Review",
        Resolved: "Resolved",
      };
      const desired = map[activeCard];
      if (desired) rows = rows.filter((r) => r.status === desired);
    }
    if (statusFilter && statusFilter !== "All") {
      rows = rows.filter((r) => r.status === statusFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      rows = rows.filter(
        (r) =>
          r.id.toLowerCase().includes(q) ||
          r.property.toLowerCase().includes(q) ||
          r.reportedBy.toLowerCase().includes(q)
      );
    }
    return rows;
  }, [activeCard, statusFilter, search]);

  const pagedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const statCards = [
    { label: "Total Reported Properties", value: 7 },
    { label: "Pending Reports", value: 1 },
    { label: "Under Review", value: 2 },
    { label: "Resolved", value: 100 },
  ];

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [details2Open, setDetails2Open] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmKind, setConfirmKind] = useState(null);

  const [selectedRow, setSelectedRow] = useState(null);

  const openRow = (row) => {
    setSelectedRow(row);
    setDetailsOpen(true);
  };

  // Colors
  const purple = "#5D14AD";
  const lightPurple = "#EDDCFA";

  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      {/* Title */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-wide md:text-3xl">REPORTS & ANALYTICS</h1>
      </div>

      {/* A. Stat Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((c) => {
          const isActive = activeCard === c.label;
          return (
            <button
              key={c.label}
              onClick={() => {
                setActiveCard(c.label);
                setPage(1);
              }}
              className={cn(
                "rounded-2xl border p-4 text-left shadow-sm transition-all",
                isActive ? "text-white" : "text-gray-800",
                isActive ? "bg-[#5D14AD]" : "bg-white hover:bg-gray-50"
              )}
            >
              <div className="text-sm opacity-80">{c.label}</div>
              <div className="mt-2 text-2xl font-bold">{c.value}</div>
            </button>
          );
        })}
      </div>

      {/* B. Charts */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Pending Reports Bar Chart */}
        <div
          className={cn(
            "rounded-2xl border bg-white p-4 shadow-sm transition-colors",
            hoveringBar ? "[background:linear-gradient(180deg,#5D14AD_0%,#000_100%)]" : ""
          )}
        >
          <div className={cn("mb-3 flex items-center justify-between", hoveringBar ? "text-white" : "text-gray-900")}> 
            <h3 className="text-base font-semibold">Pending Reports</h3>
            <span className={cn("text-xs", hoveringBar ? "text-white/80" : "text-gray-500")}>Number of Reports</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pendingReportsData} onMouseEnter={() => setHoveringBar(true)} onMouseLeave={() => setHoveringBar(false)}>
                <XAxis dataKey="month" stroke={hoveringBar ? "#fff" : "#6B7280"} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} label={{ value: "Month", position: "insideBottom", dy: 18, fill: hoveringBar ? "#fff" : "#6B7280", fontSize: 12 }} />
                <YAxis domain={[0, 60]} stroke={hoveringBar ? "#fff" : "#6B7280"} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} label={{ value: "Number of Reports", angle: -90, position: "insideLeft", dx: -10, fill: hoveringBar ? "#fff" : "#6B7280", fontSize: 12 }} />
                <ReTooltip cursor={{ fill: "transparent" }} content={<CustomBarTooltip />} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]} fill={hoveringBar ? "#fff" : "#5D14AD"} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Most Reported Issues Pie Chart */}
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-semibold">Most Reported Issues</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={issuesBreakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={0}
                  paddingAngle={6}
                  label={(props) => (
                    <PieLabel
                      {...props}
                      name={props.payload.name}
                      color={props.payload.color}
                    />
                  )}
                  labelLine={false}
                >
                  {issuesBreakdown.map((entry, idx) => (
                    <Cell key={`slice-${entry.key}`} fill={entry.color} stroke="#fff" strokeWidth={3} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: "#0F9BFB" }} /> Misleading info</div>
            <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: "#AA71F4" }} /> Fake Ownership</div>
            <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: "#5D14AD" }} /> Fraudulent Listing</div>
          </div>
        </div>
      </div>

      {/* C. Filters */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <Search size={18} className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search Reported Properties by ID, Title, or User"
            className="w-full bg-white text-sm text-gray-700 outline-none placeholder:text-gray-500"
          />
        </div>
        <StatusSelect
          value={statusFilter}
          onChange={(v) => {
            setStatusFilter(v);
            setPage(1);
          }}
          options={["All", "Pending", "Under Review", "Resolved"]}
        />
      </div>

      {/* D. Table */}
      <div className="mt-6 rounded-2xl border bg-white p-0 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600">
                {[
                  "ID",
                  "Property",
                  "Reported by",
                  "Reason",
                  "Date",
                  "Status",
                  "Action",
                ].map((h, i) => (
                  <th key={h} className={cn("px-4 py-3", i === 6 ? "whitespace-nowrap" : "")}>
                    {h === "Action" ? (
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-3 w-3 rounded-sm border border-gray-400" /> {h}
                      </div>
                    ) : (
                      h
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pagedRows.map((row, idx) => (
                <tr key={row.id} className={cn(idx % 2 ? "bg-white" : "bg-gray-50/30", "border-b last:border-0")}> 
                  <td className="px-4 py-3 font-medium text-gray-800">{row.id}</td>
                  <td className="px-4 py-3 text-gray-700">{row.property}</td>
                  <td className="px-4 py-3 text-gray-700">{row.reportedBy}</td>
                  <td className="px-4 py-3 text-gray-700">{row.reason}</td>
                  <td className="px-4 py-3 text-gray-700">{row.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-semibold",
                        row.status === "Pending" && "bg-yellow-100 text-yellow-800",
                        row.status === "Under Review" && "bg-blue-100 text-blue-800",
                        row.status === "Resolved" && "bg-green-100 text-green-800"
                      )}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openRow(row)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#5D14AD] px-3 py-2 text-xs font-semibold text-white shadow hover:opacity-95"
                    >
                      <Eye size={14} /> View Details
                    </button>
                  </td>
                </tr>
              ))}
              {pagedRows.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-center text-gray-500" colSpan={7}>
                    No data matches your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 px-4 py-4">
          {/* Left double angles */}
          <button
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="rounded-lg p-2 disabled:opacity-40"
            title="First"
          >
            <ChevronsLeft className="h-5 w-5" style={{ color: "#5D14AD" }} />
          </button>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg p-2 disabled:opacity-40"
            title="Prev"
          >
            <ChevronLeft className="h-5 w-5" style={{ color: "#DDC7F0" }} />
          </button>

          {/* number buttons show up to 6 (or totalPages if less). Keep centered window around current */}
          {Array.from({ length: Math.min(6, totalPages) }).map((_, i) => {
            // windowed index around current page
            let start = Math.min(Math.max(1, page - 2), Math.max(1, totalPages - 5));
            const num = start + i;
            if (num > totalPages) return null;
            const active = num === page;
            return (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={cn(
                  "min-w-[40px] rounded-xl px-3 py-2 text-sm",
                  active ? "bg-[#5D14AD] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                )}
              >
                {num}
              </button>
            );
          })}

          {/* Right double angles */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-lg p-2 disabled:opacity-40"
            title="Next"
          >
            <ChevronRight className="h-5 w-5" style={{ color: "#DDC7F0" }} />
          </button>
          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className="rounded-lg p-2 disabled:opacity-40"
            title="Last"
          >
            <ChevronsRight className="h-5 w-5" style={{ color: "#5D14AD" }} />
          </button>
        </div>
      </div>

      {/* Modal 1: View Details */}
      <Modal open={detailsOpen} onClose={() => setDetailsOpen(false)}>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold">User Report Details</h3>
          <button onClick={() => setDetailsOpen(false)} className="rounded-full p-1 hover:bg-gray-100">
            <XIcon size={18} />
          </button>
        </div>

        {/* Two columns separated by a line (line closer to right side) */}
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1.2fr]">
          {/* Left details */}
          <div>
            <h4 className="mb-2 text-sm font-semibold">Property Details</h4>
            <dl className="grid grid-cols-1 gap-1 text-sm text-gray-700">
              <div className="flex justify-between"><dt className="font-medium">Property ID:</dt><dd>4HBWD</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Property Type:</dt><dd>Apartment</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Location:</dt><dd>Lekki Phase 1, Lagos, Nigeria</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Price:</dt><dd>₦150,000,000</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Bedrooms:</dt><dd>3</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Bathrooms:</dt><dd>3</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Size:</dt><dd>250 sqm</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Furnishing:</dt><dd>Fully Furnished</dd></div>
              <div className="flex justify-between"><dt className="font-medium">Listed By:</dt><dd>Agent</dd></div>
            </dl>
          </div>
          {/* Vertical line close to right */}
          <div className="hidden md:block">
            <div className="ml-[-8px] h-full w-px bg-gray-200" />
          </div>
          {/* Right: Evidence grid */}
          <div>
            <h4 className="mb-2 text-sm font-semibold">Evidence Submitted</h4>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="aspect-[4/3] overflow-hidden rounded-xl border bg-gray-100">
                  <img
                    src={`https://picsum.photos/seed/report-${n}/600/400`}
                    alt={`evidence-${n}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description & CTA */}
        <div className="mt-6">
          <h4 className="mb-1 text-sm font-semibold">Report Description:</h4>
          <p className="text-sm text-gray-700">
            The listing states that the apartment has ocean views, but after visiting, I found out that it is located in a busy street with no view at all. Additionally, the listed price is lower than what the agent requested in person.
          </p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setDetails2Open(true)}
              className="rounded-xl bg-[#5D14AD] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
            >
              Report Details
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal 2: Report Details */}
      <Modal open={details2Open} onClose={() => setDetails2Open(false)}>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold">Report Details</h3>
          <button onClick={() => setDetails2Open(false)} className="rounded-full p-1 hover:bg-gray-100">
            <XIcon size={18} />
          </button>
        </div>
        <div className="mt-2 text-sm">
            <div className="flex items-center gap-3">
  
              <div>
                 <div className="font-semibold">Report ID: 123ABC</div>
                  <div className="font-semibold">Property: Luxury Apartment</div>
                 <div className="font-semibold">Reported by: Grace Olori</div>
                <div className="font-semibold">Agent: Grace Olori</div>
                 <div className="font-semibold">Reason: Fraudulent Listing <button className=" border-none underline text-[#9747FF]">View more </button></div>
                <div className="text-sm text-gray-600">Date: Februabry 28, 2025</div>
                <div className="text-sm text-gray-600">Status: Pending</div>
              </div>
            </div>
           
         
          <div className="mt-6 flex justify-between ">
            <button
              onClick={() => {
                setConfirmKind("resolve");
                setConfirmOpen(true);
              }}
              className="rounded-xl px-4 py-2 text-white"
              style={{ backgroundColor: "#5D14AD" }}
            >
              Mark as Resolved
            </button>
            <button
              onClick={() => {
                setConfirmKind("suspend");
                setConfirmOpen(true);
              }}
              className="rounded-xl px-4 py-2 text-white"
              style={{ backgroundColor: "#E74040" }}
            >
              Suspend Property
            </button>
          </div>
        </div>
      </Modal>

      {/* Confirm Modals */}
      <ConfirmModal
        open={confirmOpen && confirmKind === "suspend"}
        onClose={() => setConfirmOpen(false)}
        title="Suspend Property?"
        message="Are you sure you want to suspend this property?"
        confirmLabel="Yes, suspend property"
        confirmColor="#5D14AD"
        onConfirm={() => {
          setConfirmOpen(false);
          setDetails2Open(false);
        }}
      />

      <ConfirmModal
        open={confirmOpen && confirmKind === "resolve"}
        onClose={() => setConfirmOpen(false)}
        title="Mark as Resolved?"
        message="Are you sure you want to suspend this property?"
        confirmLabel="Yes, mark as resolved"
        confirmColor="#5D14AD"
        onConfirm={() => {
          setConfirmOpen(false);
          setDetails2Open(false);
        }}
      />
    </div>
  );
}

