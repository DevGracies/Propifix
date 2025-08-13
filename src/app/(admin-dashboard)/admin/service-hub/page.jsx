// pages/admin/service-hub.js
"use client";

import { useMemo, useState } from "react";
import {
  X,
  Flame,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

const PURPLE = "#5D14AD";
const PURPLE_2 = "#9747FF";
const RED = "#E74040";

const STEPS = [
  "Pending Confirmation",
  "Scheduled",
  "In Progress",
  "Completed",
  "Canceled",
];

const STATUS_TO_STEP_INDEX = {
  Pending: 0,
  Scheduled: 1,
  "In Progress": 2,
  Completed: 3,
  Canceled: 4,
};

export default function AdminServiceHubPage() {
  // ----- Cards -----
  const cards = [
    { id: 1, title: "Total Services", value: 15, status: "All" },
    { id: 2, title: "Pending", value: 7, status: "Pending" },
    { id: 3, title: "In Progress", value: 5, status: "In Progress" },
    { id: 4, title: "Completed", value: 3, status: "Completed" },
  ];
  const [activeCard, setActiveCard] = useState(1);

  // ----- Controls -----
  const [search, setSearch] = useState("");
  // NOTE: Spec asks for All, Pending, Scheduled, Completed (no "In Progress" in dropdown),
  // so we’ll match that exactly.
  const [statusFilter, setStatusFilter] = useState("All");

  // ----- Table Data (dummy) -----
  const [rows, setRows] = useState(() => {
    const sample = [
      {
        id: "123ABC5",
        service: "Plumbing",
        user: "Mary Jackson",
        provider: "Lola Joseph",
        date: "01/03/2025 - Sat - 2:17 PM",
        status: "Pending",
        spent: "₦14,000.00",
        paymentMethod: "Debit card",
        cardNumber: "1502********4832",
        cardBrand: "mastercard",
      },
      {
        id: "88ZXC11",
        service: "Carpentry",
        user: "Grace Olori",
        provider: "Olori Grace",
        date: "02/28/2025 - Fri - 10:04 AM",
        status: "Scheduled",
        spent: "₦22,500.00",
        paymentMethod: "Debit card",
        cardNumber: "4210********1029",
        cardBrand: "visa",
      },
      {
        id: "77HHD90",
        service: "Electrical",
        user: "Samuel John",
        provider: "Bola Kay",
        date: "02/20/2025 - Thu - 4:35 PM",
        status: "In Progress",
        spent: "₦8,000.00",
        paymentMethod: "Transfer",
        cardNumber: "—",
        cardBrand: "bank",
      },
      {
        id: "66QWE31",
        service: "Cleaning",
        user: "Omolara K",
        provider: "Adeyemi T",
        date: "02/18/2025 - Tue - 9:15 AM",
        status: "Completed",
        spent: "₦6,500.00",
        paymentMethod: "Debit card",
        cardNumber: "5532********8871",
        cardBrand: "mastercard",
      },
      {
        id: "44PLM21",
        service: "Painting",
        user: "Tina Love",
        provider: "Ola Painter",
        date: "02/10/2025 - Mon - 1:12 PM",
        status: "Pending",
        spent: "₦13,000.00",
        paymentMethod: "Transfer",
        cardNumber: "—",
        cardBrand: "bank",
      },
      {
        id: "19KJU06",
        service: "Gardening",
        user: "Mike Opara",
        provider: "Green Hands",
        date: "02/07/2025 - Fri - 3:42 PM",
        status: "In Progress",
        spent: "₦4,000.00",
        paymentMethod: "Debit card",
        cardNumber: "4184********6710",
        cardBrand: "visa",
      },
      {
        id: "55TYU77",
        service: "Plumbing",
        user: "Wale A",
        provider: "TapFix",
        date: "02/05/2025 - Wed - 8:29 AM",
        status: "Completed",
        spent: "₦9,500.00",
        paymentMethod: "Debit card",
        cardNumber: "5351********3201",
        cardBrand: "mastercard",
      },
      {
        id: "29HJK33",
        service: "Carpentry",
        user: "Adaeze M",
        provider: "WoodCraft",
        date: "02/03/2025 - Mon - 11:18 AM",
        status: "Scheduled",
        spent: "₦18,000.00",
        paymentMethod: "Transfer",
        cardNumber: "—",
        cardBrand: "bank",
      },
      {
        id: "21OKM19",
        service: "Electrical",
        user: "Tosin O",
        provider: "SafeWire",
        date: "01/31/2025 - Fri - 2:51 PM",
        status: "Pending",
        spent: "₦7,200.00",
        paymentMethod: "Debit card",
        cardNumber: "4111********1111",
        cardBrand: "visa",
      },
      {
        id: "14BNM01",
        service: "Cleaning",
        user: "Seyi B",
        provider: "Sparkle Team",
        date: "01/29/2025 - Wed - 5:16 PM",
        status: "Pending",
        spent: "₦3,500.00",
        paymentMethod: "Debit card",
        cardNumber: "4556********2222",
        cardBrand: "visa",
      },
      {
        id: "10CVB91",
        service: "Painting",
        user: "Ifeanyi C",
        provider: "ProBrush",
        date: "01/27/2025 - Mon - 12:09 PM",
        status: "In Progress",
        spent: "₦12,750.00",
        paymentMethod: "Debit card",
        cardNumber: "5199********0077",
        cardBrand: "mastercard",
      },
      {
        id: "08ZXC45",
        service: "Carpentry",
        user: "Ngozi E",
        provider: "Olori Grace",
        date: "01/24/2025 - Fri - 9:40 AM",
        status: "Completed",
        spent: "₦16,000.00",
        paymentMethod: "Transfer",
        cardNumber: "—",
        cardBrand: "bank",
      },
      {
        id: "07QAZ12",
        service: "Electrical",
        user: "Halima Y",
        provider: "Wires & More",
        date: "01/21/2025 - Tue - 10:20 AM",
        status: "Scheduled",
        spent: "₦5,500.00",
        paymentMethod: "Debit card",
        cardNumber: "4000********0002",
        cardBrand: "visa",
      },
      {
        id: "06WSX34",
        service: "Plumbing",
        user: "Lanre D",
        provider: "PipePro",
        date: "01/17/2025 - Fri - 4:02 PM",
        status: "Pending",
        spent: "₦11,300.00",
        paymentMethod: "Transfer",
        cardNumber: "—",
        cardBrand: "bank",
      },
      {
        id: "05EDC56",
        service: "Cleaning",
        user: "Bisi Q",
        provider: "ShinyHome",
        date: "01/11/2025 - Sat - 7:38 AM",
        status: "Pending",
        spent: "₦2,800.00",
        paymentMethod: "Debit card",
        cardNumber: "4444********3333",
        cardBrand: "visa",
      },
    ];
    return sample;
  });

  // ----- Derived / Filters -----
  const activeCardStatus = cards.find((c) => c.id === activeCard)?.status;

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return rows.filter((r) => {
      // Card filter
      if (activeCardStatus && activeCardStatus !== "All" && r.status !== activeCardStatus)
        return false;
      // Dropdown filter (All, Pending, Scheduled, Completed)
      if (statusFilter !== "All" && r.status !== statusFilter) return false;
      // Search (service type, user, provider, id)
      if (!s) return true;
      return (
        r.service.toLowerCase().includes(s) ||
        r.user.toLowerCase().includes(s) ||
        r.provider.toLowerCase().includes(s) ||
        r.id.toLowerCase().includes(s)
      );
    });
  }, [rows, activeCardStatus, statusFilter, search]);

  // ----- Pagination (7 per page) -----
  const PAGE_SIZE = 7;
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goPage = (p) => setPage(Math.min(Math.max(1, p), pageCount));

  // When top filters change, reset to page 1
  const handleCardClick = (id) => {
    setActiveCard(id);
    setPage(1);
  };
  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setPage(1);
  };

  // ----- Modals -----
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openDetails = (row) => {
    setSelected(row);
    setDetailsOpen(true);
  };
  const openStatus = (row) => {
    setSelected(row);
    setStatusOpen(true);
  };

  const cancelService = () => {
    // Demo: mark as Canceled in table
    if (!selected) return;
    const newRows = rows.map((r) =>
      r.id === selected.id ? { ...r, status: "Canceled" } : r
    );
    setRows(newRows);
    setConfirmOpen(false);
    setDetailsOpen(false);
  };

  // ----- Status modal interactions -----
  const currentStepIdx = selected
    ? STATUS_TO_STEP_INDEX[selected.status] ?? 0
    : 0;

  const advanceFromCurrent = () => {
    if (!selected) return;
    // Only allow advancing if not Completed/Canceled
    if (currentStepIdx >= 3) return;
    const nextIdx = Math.min(3, currentStepIdx + 1); // up to Completed
    const nextStatus = Object.keys(STATUS_TO_STEP_INDEX).find(
      (k) => STATUS_TO_STEP_INDEX[k] === nextIdx
    );
    const newRows = rows.map((r) =>
      r.id === selected.id ? { ...r, status: nextStatus } : r
    );
    setRows(newRows);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">SERVICE HUB</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <button
            key={c.id}
            onClick={() => handleCardClick(c.id)}
            className={`p-4 rounded-lg shadow text-left transition-colors ${
              activeCard === c.id
                ? "bg-[#5D14AD] text-white"
                : "bg-white text-black border"
            }`}
          >
            <p className="text-sm font-medium">{c.title}</p>
            <p className="text-2xl font-bold mt-2">{c.value}</p>
          </button>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by service type..."
          className="flex-1 bg-white border px-3 py-2 rounded"
        />
        <div className="flex-1">
          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="w-full bg-[#5D14AD] text-white px-3 py-2 rounded"
          >
            {["All", "Pending", "Scheduled", "Completed"].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {[
                "ID",
                "Service",
                "User",
                "Provider",
                "Date",
                "Status",
                "Actions",
              ].map((h) => (
                <th key={h} className="p-3 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="p-3">User #{r.id}</td>
                <td className="p-3">{r.service}</td>
                <td className="p-3">{r.user}</td>
                <td className="p-3">{r.provider}</td>
                <td className="p-3">{r.date}</td>
                <td className="p-3 capitalize">{r.status}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => openDetails(r)}
                    className="bg-[#5D14AD] text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => openStatus(r)}
                    className="bg-[#9747FF] text-white px-3 py-1 rounded"
                  >
                    View Status
                  </button>
                </td>
              </tr>
            ))}
            {paged.length === 0 && (
              <tr>
                <td className="p-6 text-center text-gray-500" colSpan={7}>
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (only 7 rows visible per page) */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => goPage(page - 1)}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        {/* show up to 5 numbers like the spec example */}
        {Array.from({ length: Math.min(5, pageCount) }, (_, i) => i + 1).map(
          (n) => (
            <button
              key={n}
              onClick={() => goPage(n)}
              className={`px-3 py-1 rounded ${
                page === n ? "bg-[#5D14AD] text-white" : "bg-gray-100"
              }`}
            >
              {n}
            </button>
          )
        )}

        <button
          onClick={() => goPage(page + 1)}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Service Details Modal */}
      {detailsOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-white/10 backdrop-blur-lg"
            onClick={() => setDetailsOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md bg-white rounded-xl p-6 shadow-lg">
            <button
              className="absolute top-3 right-3"
              onClick={() => setDetailsOpen(false)}
              aria-label="Close"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Service Details</h2>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">ID:</span> {selected.id}
              </p>
              <p>
                <span className="font-semibold">Service Type:</span>{" "}
                {selected.service}
              </p>
              <p>
                <span className="font-semibold">User:</span> {selected.user}
              </p>
              <p>
                <span className="font-semibold">Provider:</span>{" "}
                {selected.provider}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {selected.date}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selected.status}
              </p>
            </div>

            <button
              onClick={() => setConfirmOpen(true)}
              className="mt-5 bg-[#E74040] text-white px-4 py-2 rounded"
            >
              Cancel Service
            </button>

            {/* Cancel Confirm inline */}
            {confirmOpen && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="font-bold mb-2">Cancel Service?</h3>
                <p className="mb-4">
                  Are you sure you want to cancel this service?
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={cancelService}
                    className="bg-[#5D14AD] text-white px-4 py-2 rounded"
                  >
                    Yes, Cancel
                  </button>
                  <button
                    onClick={() => setConfirmOpen(false)}
                    className="bg-[#9747FF] text-white px-4 py-2 rounded"
                  >
                    No, don’t cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Service Status Modal */}
      {statusOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-white/10 backdrop-blur-lg"
            onClick={() => setStatusOpen(false)}
          />
          <div className="relative z-10 w-full max-w-3xl bg-white rounded-xl p-6 shadow-lg">
            <button
              className="absolute top-3 right-3"
              onClick={() => setStatusOpen(false)}
              aria-label="Close"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Service Status</h2>

            {/* Top info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-4 bg-[#EDDCFA] text-[#5D14AD]">
                <p className="text-sm">Total Spent</p>
                <p className="text-2xl font-bold">{selected.spent}</p>
                <p className="text-xs mt-1">as of 16-February 2025</p>
              </div>

              <div className="rounded-xl p-4 bg-white border text-[#5D14AD]">
                <div className="flex items-center justify-between text-sm">
                  <span>Payment Method</span>
                  <span className="font-medium">{selected.paymentMethod}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <CreditCard />
                  <span className="font-mono">{selected.cardNumber}</span>
                </div>
                <p className="text-xs mt-1">{selected.cardBrand}</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {STEPS.map((label, idx) => {
                const isCompleted = idx < currentStepIdx;
                const isCurrent = idx === currentStepIdx;
                const isFuture = idx > currentStepIdx;

                return (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3"
                  >
                    <div
                      className={`flex items-center gap-2 ${
                        isCompleted || isCurrent ? "text-[#5D14AD]" : "text-black"
                      }`}
                    >
                      <div className="relative flex flex-col items-center">
                        <Flame size={28} />
                        {/* tiny line below flame to "reach" next */}
                        {/* <div
                          className={`h-0.5 mt-1 ${
                            isCompleted || isCurrent ? "bg-[#5D14AD]" : "bg-black"
                          }`}
                          style={{ width: 32 }}
                        /> */}
                      </div>
                      <span className="text-sm">{label}</span>
                    </div>

                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
