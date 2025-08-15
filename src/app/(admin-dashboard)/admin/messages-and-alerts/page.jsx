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
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Eye,
  Send,
  Check,
  X,
} from "lucide-react";

// Helper: classnames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Colors
const purple = "#5D14AD";
const purpleLight = "#9747FF";
const purpleSoft = "#DDC7F0";

// Dummy messages per month
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

const monthlyMessages = months.map((m, i) => ({
  month: m,
  messages: [18, 25, 35, 29, 44, 52, 38, 41, 30, 48, 55, 59][i],
}));

const topicBreakdown = [
  { name: "Inquiries", value: 50, color: purple },
  { name: "Feedback", value: 20, color: "#E77C40" },
  { name: "Requests", value: 30, color: "#2DC071" },
];

// Table dummy rows
const sampleRows = Array.from({ length: 28 }).map((_, i) => ({
  id: `USR#${1000 + i}`,
  user: ["Lola Duro", "Mary Okafor", "Grace Olori", "Tunde Adebayo"][i % 4],
  agent: ["Miracle Iyanu", "Kola Dan", "Olu George", "Zainab Musa"][i % 4],
  lastMessage: [
    "Can we schedule a visit?",
    "Please share more details.",
    "Thanks, received.",
    "When is the best time?",
  ][i % 4],
  date: "01/03/2025 - Sat - 2:17 PM",
  status: ["Read", "Unread", "Resolved", "Pending"][i % 4],
}));

// WhatsApp-like chat messages
const chatSeed = [
  { id: 1, who: "in", text: "Hi, I saw your listing for a 2-bedroom flat." },
  { id: 2, who: "out", text: "Hello! Yes, it's still available." },
  { id: 3, who: "in", text: "Great. Can we schedule an inspection for Saturday?" },
  { id: 4, who: "out", text: "Saturday 2 PM works. Sharing location shortly." },
];

export default function AdminMessagesAndAlertsPage() {
  // KPI state
  const [activeKpi, setActiveKpi] = useState("total");

  // Filters
  const [search, setSearch] = useState("");
  const [statusFilterOpen, setStatusFilterOpen] = useState(false);
  const [status, setStatus] = useState("All");

  // Table / pagination
  const [page, setPage] = useState(1);
  const pageSize = 7;

  // Chat modal
  const [chatOpen, setChatOpen] = useState(false);
  const [chatWith, setChatWith] = useState(null);
  const [chatMessages, setChatMessages] = useState(chatSeed);
  const [chatInput, setChatInput] = useState("");

  // Broadcast section
  const [recipientsOpen, setRecipientsOpen] = useState(false);
  const [priorityOpen, setPriorityOpen] = useState(false);
  const [recipient, setRecipient] = useState("Select Recipients");
  const [priority, setPriority] = useState("Set Priority");
  const [announcement, setAnnouncement] = useState("");

  // Hover for bar chart
  const [hoveredBar, setHoveredBar] = useState(null);

  // KPI numbers (dummy)
  const kpis = {
    total: 120,
    unread: 40,
    rate: "85%",
    resolved: 80,
  };

  // Filter rows based on active KPI + search + status
  const filteredRows = useMemo(() => {
    let rows = [...sampleRows];
    // Change dataset by KPI (example logic)
    if (activeKpi === "unread") rows = rows.filter((r) => r.status === "Unread");
    if (activeKpi === "resolved") rows = rows.filter((r) => r.status === "Resolved");
    // For response rate, show read/unread mix
    if (activeKpi === "rate") rows = rows.filter((_, i) => i % 2 === 0);

    if (status !== "All") rows = rows.filter((r) => r.status === status);

    if (search.trim()) {
      const s = search.toLowerCase();
      rows = rows.filter(
        (r) =>
          r.id.toLowerCase().includes(s) ||
          r.user.toLowerCase().includes(s) ||
          r.agent.toLowerCase().includes(s) ||
          r.lastMessage.toLowerCase().includes(s)
      );
    }

    return rows;
  }, [activeKpi, search, status]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const pageRows = filteredRows.slice((page - 1) * pageSize, page * pageSize);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages((m) => [
      ...m,
      { id: Date.now(), who: "out", text: chatInput.trim() },
    ]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages((m) => [
        ...m,
        { id: Date.now() + 1, who: "in", text: "Got it. Thanks!" },
      ]);
    }, 600);
  };

  const KPIBox = ({ label, value, active, onClick }) => (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 rounded-2xl p-4 md:p-6 transition shadow-sm border",
        active
          ? "bg-[#5D14AD] text-white border-transparent"
          : "bg-white text-gray-900 hover:bg-gray-50 border-gray-200"
      )}
    >
      <div className="text-sm md:text-base opacity-80">{label}</div>
      <div className="mt-2 text-2xl md:text-3xl font-semibold">{value}</div>
    </button>
  );

  const Dropdown = ({ open, setOpen, placeholder, options, value, setValue }) => (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm md:text-base"
      >
        <span className={cn(value === placeholder && "text-gray-400")}>{value}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white p-2 shadow-lg"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setValue(opt);
                  setOpen(false);
                  setPage(1);
                }}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-gray-50"
              >
                <span
                  className={cn(
                    "inline-flex h-4 w-4 items-center justify-center rounded border",
                    value === opt
                      ? "bg-[#5D14AD] border-[#5D14AD]"
                      : "bg-white border-gray-300"
                  )}
                >
                  {value === opt && <Check className="w-3 h-3 text-white" />}
                </span>
                <span>{opt}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold">MESSAGES & ALERTS</h1>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mb-6">
        <KPIBox
          label="Total Messages"
          value={kpis.total}
          active={activeKpi === "total"}
          onClick={() => {
            setActiveKpi("total");
            setPage(1);
          }}
        />
        <KPIBox
          label="Unread Messages"
          value={kpis.unread}
          active={activeKpi === "unread"}
          onClick={() => {
            setActiveKpi("unread");
            setStatus("Unread");
            setPage(1);
          }}
        />
        <KPIBox
          label="Response Rate"
          value={kpis.rate}
          active={activeKpi === "rate"}
          onClick={() => {
            setActiveKpi("rate");
            setStatus("All");
            setPage(1);
          }}
        />
        <KPIBox
          label="Resolved Messages"
          value={kpis.resolved}
          active={activeKpi === "resolved"}
          onClick={() => {
            setActiveKpi("resolved");
            setStatus("Resolved");
            setPage(1);
          }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Messages Received Per Month */}
        <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base md:text-lg font-semibold">Messages Received Per Month</h2>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 text-xs md:text-sm">
                <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: purple }} />
                Messages
              </span>
            </div>
          </div>
          <div
            className={cn(
              "rounded-xl p-2 md:p-4 transition",
              hoveredBar !== null && "bg-[radial-gradient(circle_at_top,#5D14AD_0%,#000_100%)] text-white"
            )}
          >
            <div className="h-64 md:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyMessages}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: "transparent" }}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg bg-white px-3 py-2 text-xs shadow-lg border border-gray-200">
                            <div className="font-medium">{label}</div>
                            <div>Report: {payload[0].value}</div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <defs>
                    <linearGradient id="barFill" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={purple} />
                      <stop offset="100%" stopColor={purpleLight} />
                    </linearGradient>
                    <linearGradient id="barFillDim" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(93,20,173,0.6)" />
                      <stop offset="100%" stopColor="rgba(151,71,255,0.6)" />
                    </linearGradient>
                  </defs>
                  <Bar
                    dataKey="messages"
                    radius={[10, 10, 0, 0]}
                    onMouseMove={(_, idx) => setHoveredBar(idx)}
                    onMouseLeave={() => setHoveredBar(null)}
                    fill="url(#barFill)"
                  >
                    {monthlyMessages.map((_, idx) => (
                      <Cell key={idx} fill={hoveredBar === idx ? "url(#barFillDim)" : "url(#barFill)"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Breakdown of Message Topics */}
        <div className="rounded-2xl bg-white p-4 md:p-6 shadow-sm">
          <h2 className="text-base md:text-lg font-semibold mb-4">Breakdown of Message Topics</h2>
          <div className="h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const p = payload[0];
                      return (
                        <div className="rounded-lg bg-white px-3 py-2 text-xs shadow-lg border border-gray-200">
                          <div className="font-medium">{p.name}</div>
                          <div>{p.value}%</div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Pie
                  data={topicBreakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={90}
                  paddingAngle={6}
                  label
                >
                  {topicBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={3} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: purple }} /> Inquiries</div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: "#2DC071" }} /> Requests</div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: "#E77C40" }} /> Feedback</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
        <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-gray-200">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            className="w-full bg-white text-sm md:text-base outline-none"
            placeholder="Search by user or agent"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <Dropdown
          open={statusFilterOpen}
          setOpen={setStatusFilterOpen}
          placeholder="Filter by status"
          options={["All", "Pending", "Under Review", "Resolved", "Unread", "Read"]}
          value={status}
          setValue={setStatus}
        />
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white p-2 md:p-4 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm md:text-base">
            <thead>
              <tr className="text-left text-gray-600">
                {[
                  "ID",
                  "User",
                  "Agent",
                  "Last Message",
                  "Date",
                  "Status",
                  "Action",
                ].map((h, idx) => (
                  <th key={h} className={cn("py-3 px-3 whitespace-nowrap", idx === 6 && "text-left")}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageRows.map((r) => (
                <tr key={r.id} className="border-t border-gray-100">
                  <td className="py-3 px-3 whitespace-nowrap">{r.id}</td>
                  <td className="py-3 px-3 whitespace-nowrap">{r.user}</td>
                  <td className="py-3 px-3 whitespace-nowrap">{r.agent}</td>
                  <td className="py-3 px-3">{r.lastMessage}</td>
                  <td className="py-3 px-3 whitespace-nowrap">{r.date}</td>
                  <td className="py-3 px-3 whitespace-nowrap">{r.status}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-1 rounded-full bg-[#5D14AD] px-3 py-1.5 text-white text-xs md:text-sm">
                        <Eye className="w-4 h-4" /> View
                      </button>
                      <button
                        onClick={() => {
                          setChatWith(r.user);
                          setChatOpen(true);
                        }}
                        className="inline-flex items-center gap-1 rounded-full bg-[#9747FF] px-3 py-1.5 text-white text-xs md:text-sm"
                      >
                        <MessageCircle className="w-4 h-4" /> Message
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {/* Left double angles */}
          <button
            onClick={() => setPage(1)}
            className="rounded-full p-2"
            style={{ background: purple, color: "white" }}
            aria-label="First page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-full p-2"
            style={{ background: purpleSoft, color: "#111827" }}
            aria-label="Prev page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: Math.min(6, totalPages) }).map((_, i) => {
            const n = i + 1;
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm",
                  page === n ? "bg-[#5D14AD] text-white" : "bg-gray-100"
                )}
              >
                {n}
              </button>
            );
          })}

          {/* Right double angles */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-full p-2"
            style={{ background: purpleSoft, color: "#111827" }}
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage(totalPages)}
            className="rounded-full p-2"
            style={{ background: purple, color: "white" }}
            aria-label="Last page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Broadcast Announcements */}
      <div className="mt-6 rounded-2xl bg-white p-4 md:p-6 shadow-sm">
        <h3 className="text-base md:text-lg font-bold mb-4">Broadcast Announcements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <Dropdown
            open={recipientsOpen}
            setOpen={setRecipientsOpen}
            placeholder="Select Recipients"
            options={["All Users", "Agents", "Artisans", "Landlords", "Subscribed"]}
            value={recipient}
            setValue={setRecipient}
          />
          <Dropdown
            open={priorityOpen}
            setOpen={setPriorityOpen}
            placeholder="Set Priority"
            options={["Normal", "Important", "Urgent"]}
            value={priority}
            setValue={setPriority}
          />
        </div>
        <div className="relative mt-4">
          <textarea
            className="w-full rounded-2xl border border-gray-200 bg-white p-4 pr-40 min-h-[140px] outline-none"
            placeholder="Enter your announcement..."
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
          />
          <button
            className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white"
            style={{ background: purple }}
            onClick={() => alert("Announcement sent (demo)")}
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </div>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10"
          >
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="w-full max-w-2xl rounded-2xl bg-white shadow-xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <div className="font-semibold">Chat with {chatWith}</div>
                  <button onClick={() => setChatOpen(false)} className="p-1 rounded hover:bg-gray-100">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="h-[60vh] p-4 overflow-y-auto space-y-3 bg-gray-50">
                  {chatMessages.map((m) => (
                    <div key={m.id} className={cn("flex", m.who === "out" ? "justify-end" : "justify-start")}>
                      <div
                        className={cn(
                          "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                          m.who === "out" ? "text-white" : "text-black"
                        )}
                        style={
                          m.who === "out"
                            ? { background: "linear-gradient(86.19deg, #5D14AD 0%, #9747FF 100%)" }
                            : { background: "#E8E8E8" }
                        }
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 p-3 border-t bg-white">
                  <input
                    className="flex-1 rounded-xl border border-gray-200 px-3 py-2 outline-none"
                    placeholder="Type a message"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white"
                    style={{ background: purple }}
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
