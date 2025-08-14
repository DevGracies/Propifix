"use client";
import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Mail,
  Printer,
  Download,
  CreditCard,
  Gift,
  Plus,
  Phone,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

// Helper to format Naira values nicely
const formatCurrency = (n) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
    n
  );

const purple = {
  base: "#5D14AD",
  light: "#9747FF",
  soft: "#DDC7F0",
};

const STAT_CARDS = [
  { key: "total", label: "Total Earnings", value: 20000000 },
  { key: "monthly", label: "Monthly Revenue", value: 3000000 },
  { key: "active", label: "Active Subcriptions", value: 109 },
  { key: "completed", label: "Completed Transactions", value: 100 },
];

const MONTHLY_REVENUE = [
  { month: "Jan", revenue: 1200000 },
  { month: "Feb", revenue: 800000 },
  { month: "Mar", revenue: 1500000 },
  { month: "Apr", revenue: 900000 },
  { month: "May", revenue: 2000000 },
  { month: "Jun", revenue: 1300000 },
  { month: "Jul", revenue: 1700000 },
  { month: "Aug", revenue: 1900000 },
  { month: "Sep", revenue: 1600000 },
  { month: "Oct", revenue: 1100000 },
  { month: "Nov", revenue: 1400000 },
  { month: "Dec", revenue: 2100000 },
];

const PIE_DATA = [
  { name: "Basic", value: 40, color: "#0F9BFB", anchor: "left" },
  { name: "Premium", value: 45, color: purple.base, anchor: "right" },
  { name: "Standard", value: 15, color: "#AA71F4", anchor: "bottom" },
];

// Seed demo transactions (enough for 6 pages @ 7 per page = 42 rows)
function seedTransactions() {
  const agents = [
    "Lola Duro",
    "Mary Jackson",
    "Grace Olori",
    "Aisha Bello",
    "Kunle Ade",
    "Chioma Obi",
    "John Paul",
  ];
  const plans = ["Basic", "Standard", "Premium"];
  const statuses = ["Paid", "Pending", "Failed", "Paid", "Paid"]; // skew toward Paid
  const rows = [];
  let idNum = 1234500;
  for (let i = 0; i < 42; i++) {
    const agent = agents[i % agents.length];
    const plan = plans[i % plans.length];
    const amount = plan === "Premium" ? 15000 : plan === "Standard" ? 10000 : 5000;
    const status = statuses[i % statuses.length];
    const date = new Date(2025, (i % 12), (i % 28) + 1, 14, 17);
    rows.push({
      id: `#${(idNum + i).toString(16).toUpperCase()}`,
      agent,
      plan,
      amount,
      date,
      status,
    });
  }
  return rows;
}

const ALL_TRANSACTIONS = seedTransactions();

export default function AdminPlansandPaymentPage() {
  const [activeKey, setActiveKey] = useState("total");
  const [page, setPage] = useState(1);
  const [details, setDetails] = useState(null); // row for modal
  const [hoverBar, setHoverBar] = useState(null);
  const [gateway, setGateway] = useState(null); // Stripe | Paypal | Flutterwave
  const [currency, setCurrency] = useState(null); // USD | NGN
  const [autoRenew, setAutoRenew] = useState(false);

  // Filter table content based on active stat card (demo logic)
  const filteredRows = useMemo(() => {
    switch (activeKey) {
      case "monthly":
        // show rows from latest 30 days (approx using months Dec/Nov)
        return ALL_TRANSACTIONS.filter((r) => ["Nov", "Dec"].includes(r.date.toLocaleString("en", { month: "short" })));
      case "active":
        // show only active subscriptions -> Premium & Standard (as demo)
        return ALL_TRANSACTIONS.filter((r) => ["Premium", "Standard"].includes(r.plan));
      case "completed":
        return ALL_TRANSACTIONS.filter((r) => r.status === "Paid");
      default:
        return ALL_TRANSACTIONS;
    }
  }, [activeKey]);

  // Pagination
  const pageSize = 7;
  const totalPages = Math.max(1, Math.min(6, Math.ceil(filteredRows.length / pageSize))); // cap at 6 as requested
  const currentRows = filteredRows.slice((page - 1) * pageSize, page * pageSize);

  // Handlers
  const openDetails = (row) => setDetails(row);
  const closeDetails = () => setDetails(null);

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">PLANS AND PAYMENTS</h1>
      </div>

      {/* A. Stat Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_CARDS.map((card) => {
          const active = activeKey === card.key;
          return (
            <button
              key={card.key}
              onClick={() => {
                setActiveKey(card.key);
                setPage(1);
              }}
              className={`group rounded-2xl border border-transparent px-5 py-4 text-left transition-all shadow-sm hover:shadow-md focus:outline-none ${
                active
                  ? "bg-[#5D14AD] text-white"
                  : "bg-white text-gray-900 border-gray-100"
              }`}
            >
              <div className="text-sm opacity-90">{card.label}</div>
              <div className="mt-2 text-2xl md:text-3xl font-bold">
                {card.key === "total" || card.key === "monthly"
                  ? formatCurrency(card.value)
                  : card.value.toLocaleString()}
              </div>
            </button>
          );
        })}
      </div>

      {/* B. Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue Chart */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="font-semibold text-lg">Monthly Revenue</h2>
              <p className="text-xs text-gray-500">Amount (₦) — Number of Agents</p>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_REVENUE} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                {/* No grid lines (plain) */}
                <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} label={{ value: "Month", position: "insideBottom", offset: -2 }} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                  domain={[0, 2000000]}
                  ticks={[200000, 500000, 1000000, 1500000, 2000000]}
                  label={{ value: "Amount (₦)", angle: -90, position: "insideLeft" }}
                />
                <defs>
                  <linearGradient id="barHover" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5D14AD" />
                    <stop offset="100%" stopColor="#000000" />
                  </linearGradient>
                </defs>
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const v = payload[0].value;
                      return (
                        <div className="rounded-md text-white text-xs px-3 py-2" style={{ background: "linear-gradient(180deg, #5D14AD 0%, #000000 100%)" }}>
                          <div className="font-semibold mb-0.5">{label}</div>
                          <div>Revenue: {formatCurrency(v)}</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="revenue"
                  radius={[8, 8, 8, 8]}
                  onMouseMove={(d) => setHoverBar(d?.activeTooltipIndex ?? null)}
                  onMouseLeave={() => setHoverBar(null)}
                >
                  {MONTHLY_REVENUE.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={hoverBar === index ? "url(#barHover)" : purple.base} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subscription Breakdown Pie */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Subscription Breakdown</h2>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
                  </filter>
                </defs>
                <Pie
                  data={PIE_DATA}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={6}
                  stroke="#fff"
                  strokeWidth={2}
                  isAnimationActive={false}
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={entry.color} filter="url(#shadow)" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* External labels with white boxes */}
          <div className="grid grid-cols-3 gap-4 mt-2 text-center">
            {PIE_DATA.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-2">
                <div className="bg-white rounded-md shadow px-2 py-1">
                  <div className="text-black text-xs font-semibold">{s.name}</div>
                  <div className="text-xs" style={{ color: s.color }}>{s.value}%</div>
                </div>
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded" style={{ background: "#0F9BFB" }} /> Basic</div>
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded" style={{ background: "#AA71F4" }} /> Standard</div>
            <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded" style={{ background: purple.base }} /> Premium</div>
          </div>
        </div>
      </div>

      {/* C. Transactions Table */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full">
            <thead>
              <tr className="text-left text-sm bg-gray-50">
                <th className="py-3 px-4">Transation ID</th>
                <th className="py-3 px-4">Agent</th>
                <th className="py-3 px-4">Plan</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2"><input type="checkbox" className="w-3.5 h-3.5 accent-[#5D14AD]" /><span>Action</span></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((r, idx) => (
                <tr key={idx} className="border-b last:border-none text-sm">
                  <td className="py-3 px-4 font-medium">{r.id}</td>
                  <td className="py-3 px-4">{r.agent}</td>
                  <td className="py-3 px-4">{r.plan}</td>
                  <td className="py-3 px-4">{formatCurrency(r.amount)}</td>
                  <td className="py-3 px-4">{r.date.toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })} - {r.date.toLocaleDateString("en-US", { weekday: "short" })} - {r.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.status === "Paid" ? "bg-green-100 text-green-700" : r.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => openDetails(r)}
                      className="text-white text-sm px-3 py-2 rounded-md"
                      style={{ background: "#5D14AD" }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {/* Left double angles: first #5D14AD then #DDC7F0 */}
          <button
            onClick={() => setPage(1)}
            className="p-2 rounded-md"
            aria-label="First page"
            style={{ color: "#5D14AD" }}
            disabled={page === 1}
          >
            <ChevronsLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded-md"
            aria-label="Prev page"
            style={{ color: "#DDC7F0" }}
            disabled={page === 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page numbers (show up to 4 as example + grow later) */}
          {Array.from({ length: Math.min(6, totalPages) }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1.5 rounded-md text-sm border ${p === page ? "bg-[#5D14AD] text-white border-transparent" : "bg-white text-gray-700 border-gray-200"}`}
            >
              {p}
            </button>
          ))}

          {/* Right double angles: first #DDC7F0 then #5D14AD */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="p-2 rounded-md"
            aria-label="Next page"
            style={{ color: "#DDC7F0" }}
            disabled={page === totalPages}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPage(totalPages)}
            className="p-2 rounded-md"
            aria-label="Last page"
            style={{ color: "#5D14AD" }}
            disabled={page === totalPages}
          >
            <ChevronsRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* D. Payment Settings */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Payment Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Payment Gateway */}
          <div>
            <label className="text-sm font-medium">Payment Gateway</label>
            <Dropdown
              placeholder="Payment Gateway"
              options={["Stripe", "Paypal", "Flutterwave"]}
              value={gateway}
              onChange={setGateway}
            />
          </div>
          {/* Currency */}
          <div>
            <label className="text-sm font-medium">Currency</label>
            <Dropdown
              placeholder="Currency"
              options={["USD", "NGN"]}
              value={currency}
              onChange={setCurrency}
            />
          </div>
        </div>
        {/* Auto-Renew */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-sm">Enable Auto-Renewal</span>
          <button
            onClick={() => setAutoRenew((v) => !v)}
            className={`w-12 h-7 rounded-full p-1 transition ${autoRenew ? "bg-[#5D14AD]" : "bg-gray-300"}`}
          >
            <span className={`block w-5 h-5 bg-white rounded-full transition-transform ${autoRenew ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        </div>
      </div>

      {/* View Details Modal */}
      {details && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop (transparent, blurred) */}
          <div className="absolute inset-0 backdrop-blur-sm bg-transparent" onClick={closeDetails} />
          <div className="relative z-10 max-w-4xl mx-auto mt-16 mb-10">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">Transaction Details</h3>
                  <div className="text-sm mt-1"><span style={{ color: purple.base }}>Plans & Payments</span> / <span className="font-mono">{details.id}</span></div>
                  <div className="text-xs text-[#49454FCC] mt-1">ID Payment</div>
                </div>
                {/* ID + actions */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono hidden sm:inline">#00283488</span>
                  <button className="px-3 py-2 rounded-full border text-[#5D14AD] flex items-center gap-2"><Mail className="w-4 h-4"/> <span className="hidden sm:inline">Send to agent email</span></button>
                  <button className="px-3 py-2 rounded-full border text-[#5D14AD] flex items-center gap-2"><Printer className="w-4 h-4"/> <span className="hidden sm:inline">Print</span></button>
                  <button className="px-3 py-2 rounded-full text-white flex items-center gap-2" style={{ background: "linear-gradient(93.19deg, #5D14AD 0%, #9747FF 100%)" }}><Download className="w-4 h-4"/> <span className="hidden sm:inline">Download Report</span></button>
                </div>
              </div>

              {/* Four info boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                <div className="bg-[#EDDCFA] rounded-xl p-4">
                  <div className="text-xs opacity-70">Amount</div>
                  <div className="text-lg font-semibold" style={{ color: purple.base }}>{formatCurrency(details.amount)}</div>
                </div>
                <div className="bg-[#EDDCFA] rounded-xl p-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" style={{ color: purple.base }} />
                  <div>
                    <div className="text-xs opacity-70">Payment Method</div>
                    <div className="text-sm font-semibold" style={{ color: purple.base }}>Master card</div>
                  </div>
                </div>
                <div className="bg-[#EDDCFA] rounded-xl p-4 flex items-center gap-2">
                  <Plus className="w-4 h-4" style={{ color: purple.base }} />
                  <div>
                    <div className="text-xs opacity-70">Plan</div>
                    <div className="text-sm font-semibold" style={{ color: purple.base }}>{details.plan}</div>
                  </div>
                </div>
                <div className="bg-[#EDDCFA] rounded-xl p-4 flex items-center gap-2">
                  <Gift className="w-4 h-4" style={{ color: purple.base }} />
                  <div>
                    <div className="text-xs opacity-70">Date Paid</div>
                    <div className="text-sm font-semibold" style={{ color: purple.base }}>{details.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
                  </div>
                </div>
              </div>

              <div className="my-5 h-px bg-gray-200" />

              {/* Agent row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(details.agent)}`}
                    alt={details.agent}
                    className="w-20 h-20 object-cover rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md border"
                  />
                  <div>
                    <div className="font-semibold">{details.agent}</div>
                    <div className="text-sm text-gray-500">Email: {details.agent.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}@example.com</div>
                    <div className="text-sm">Status: <span className="font-medium">Pending</span></div>
                  </div>
                </div>

                {/* Phone pill with gradient border + gradient text */}
                <div className="p-[2px] rounded-xl" style={{ background: "linear-gradient(100.88deg, #5D14AD 0%, #9747FF 100%)" }}>
                  <div className="rounded-xl bg-white px-4 py-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" style={{ color: purple.base }} />
                    <div>
                      <div className="text-xs">Phone no</div>
                      <div className="font-semibold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(100.88deg, #5D14AD 0%, #9747FF 100%)" }}>0700659984</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close */}
              <div className="mt-6 flex justify-end">
                <button onClick={closeDetails} className="px-4 py-2 rounded-md border text-sm">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------ UI SUBCOMPONENTS ------------------ */
function Dropdown({ placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative mt-1">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 flex items-center justify-between text-sm"
      >
        <span className={!value ? "text-gray-400" : ""}>{value || placeholder}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl p-2 shadow-lg">
          {options.map((opt) => {
            const active = value === opt;
            return (
              <button
                key={opt}
                onClick={() => {
                  onChange(active ? null : opt);
                  setOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-50"
              >
                <span className={`inline-flex w-4 h-4 items-center justify-center rounded border ${active ? "bg-[#5D14AD] border-[#5D14AD]" : "border-gray-300"}`}>
                  {active && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3"><path d="M20 6L9 17l-5-5"/></svg>
                  )}
                </span>
                <span className="text-sm">{opt}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
