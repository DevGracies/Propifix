"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  Trash2,
  BedDouble,
  ShowerHead,
  Toilet,
  MapPin,
} from "lucide-react";
import { useRouter } from "next/navigation"; 

function Donut({ percent = 0, size = 72, stroke = 8, color = "#5D14AD" }) {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const dash = (percent / 100) * circ;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* background circle (white) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth={stroke}
      />
      {/* progress arc */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ - dash}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      {/* center text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={14}
        fontWeight={700}
        fill="#1f2937"
      >
        {Math.round(percent)}%
      </text>
    </svg>
  );
}

const CARDS = [
  {
    key: "Active",
    bg: "#5D14AD33",
    ring: "#5D14AD",
    percent: 40,
    count: 700,
  },
  { key: "Pending", bg: "#12DA9A33", ring: "#12DA9A", percent: 22, count: 380 },
  { key: "Sold", bg: "#389CC733", ring: "#389CC7", percent: 30, count: 520 },
  { key: "Rented", bg: "#EE1D5233", ring: "#EE1D52", percent: 8, count: 142 },
];

const STATUS_FILTERS = ["All", "Active", "Pending", "Sold"]; // per spec (no Rented here)

export default function AdminPropertyHubPage() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState("Active");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 7;

  const [rows, setRows] = useState(() => {
    // demo dataset (add as many as you want)
    const data = [
      {
        id: "123ABC5",
        title: "2-Bedroom Apartment",
        type: "Flats & Apartments",
        location: "Chevron, Lekki, Lagos",
        price: 3000000,
        status: "Active",
        beds: 6,
        baths: 6,
        toilets: 4,
        image: "https://images.unsplash.com/photo-1505692794403-34d4982b3a3a?q=80&w=1200&auto=format&fit=crop",
        slug: "2",
      },
      {
        id: "888XYZ1",
        title: "4-Bedroom Duplex",
        type: "Duplex",
        location: "Ikoyi, Lagos",
        price: 95000000,
        status: "Sold",
        beds: 4,
        baths: 5,
        toilets: 5,
        image: "https://images.unsplash.com/photo-1560448075-bb4caa6c8d9b?q=80&w=1200&auto=format&fit=crop",
        slug: "3",
      },
      {
        id: "777HHD9",
        title: "Studio Apartment",
        type: "Studio",
        location: "Yaba, Lagos",
        price: 800000,
        status: "Pending",
        beds: 1,
        baths: 1,
        toilets: 1,
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
        slug: "4",
      },
      {
        id: "555PLM2",
        title: "3-Bedroom Terrace",
        type: "Terrace",
        location: "Gwarinpa, Abuja",
        price: 45000000,
        status: "Active",
        beds: 3,
        baths: 4,
        toilets: 4,
        image: "https://images.unsplash.com/photo-1532089363165-b5c4f3bda6fe?q=80&w=1200&auto=format&fit=crop",
        slug: "5",
      },
      {
        id: "444PLM3",
        title: "Mini Flat",
        type: "Mini Flat",
        location: "Magodo, Lagos",
        price: 1800000,
        status: "Rented",
        beds: 2,
        baths: 2,
        toilets: 2,
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c73b?q=80&w=1200&auto=format&fit=crop",
        slug: "6",
      },
      {
        id: "333QWE1",
        title: "Luxury Penthouse",
        type: "Penthouse",
        location: "Victoria Island, Lagos",
        price: 250000000,
        status: "Sold",
        beds: 5,
        baths: 6,
        toilets: 6,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
        slug: "7",
      },
      {
        id: "222JKL9",
        title: "Self-Contain",
        type: "Single Room",
        location: "Surulere, Lagos",
        price: 350000,
        status: "Pending",
        beds: 1,
        baths: 1,
        toilets: 1,
        image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1200&auto=format&fit=crop",
        slug: "8",
      },
      {
        id: "199BNM0",
        title: "5-Bedroom Mansion",
        type: "Mansion",
        location: "Asokoro, Abuja",
        price: 800000000,
        status: "Active",
        beds: 5,
        baths: 7,
        toilets: 7,
        image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=1200&auto=format&fit=crop",
        slug: "9",
      },
      {
        id: "188UYT2",
        title: "2-Bedroom Bungalow",
        type: "Bungalow",
        location: "Enugu, Enugu",
        price: 12000000,
        status: "Rented",
        beds: 2,
        baths: 2,
        toilets: 2,
        image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1200&auto=format&fit=crop",
        slug: "10",
      },
      {
        id: "177MKO7",
        title: "3-Bedroom Apartment",
        type: "Flats & Apartments",
        location: "Port Harcourt, Rivers",
        price: 15000000,
        status: "Active",
        beds: 3,
        baths: 3,
        toilets: 4,
        image: "https://images.unsplash.com/photo-1560449752-3a2f91f5c4e3?q=80&w=1200&auto=format&fit=crop",
        slug: "11",
      },
    ];
    return data;
  });

  // Filtered dataset based on activeCard, statusFilter and search
  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return rows.filter((r) => {
      // Clicked card filter
      if (activeCard && r.status !== activeCard) return false;
      // Dropdown filter (All, Active, Pending, Sold). If All -> no extra filter
      if (statusFilter !== "All" && r.status !== statusFilter) return false;
      // Search
      if (!s) return true;
      return (
        r.title.toLowerCase().includes(s) ||
        r.type.toLowerCase().includes(s) ||
        r.location.toLowerCase().includes(s) ||
        r.id.toLowerCase().includes(s)
      );
    });
  }, [rows, activeCard, statusFilter, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goPage = (p) => setPage(Math.min(Math.max(1, p), pageCount));

  const onCardClick = (k) => {
    setActiveCard(k);
    setPage(1);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (row) => {
    setSelected(row);
    setModalOpen(true);
  };

  const deleteProperty = (row) => {
    setRows((prev) => prev.filter((r) => r.id !== row.id));
    setModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">PROPERTY HUB</h1>

      {/* A. Four rectangular boxes (keep on one line on large screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 overflow-x-auto xl:overflow-visible">
        {CARDS.map((c) => (
          <button
            key={c.key}
            onClick={() => onCardClick(c.key)}
            className={`flex items-center gap-4 p-4 rounded-2xl border shadow min-w-[280px] transition-colors`}
            style={{ background: c.bg }}
          >
            <div className="shrink-0">
              <Donut percent={c.percent} color={c.ring} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">{c.key}</p>
              <p className="text-2xl font-bold">{c.count.toLocaleString()}</p>
            </div>
          </button>
        ))}
      </div>

      {/* B. Search + Filter (full width side by side) */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search by user name, agent name, property title, or inspection ID"
          className="flex-1 bg-white border px-3 py-2 rounded"
        />
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          className="flex-1 bg-[#5D14AD] text-white px-3 py-2 rounded"
        >
          {STATUS_FILTERS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* C. Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {["ID", "Title", "Type", "Location", "Price", "Status", "Action"].map((h) => (
                <th key={h} className="p-3 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="p-3">Agent #{r.id}</td>
                <td className="p-3">{r.title}</td>
                <td className="p-3">{r.type}</td>
                <td className="p-3">{r.location}</td>
                <td className="p-3">₦ {r.price.toLocaleString()}</td>
                <td className="p-3">{r.status}</td>
                <td className="p-3">
                  <button
                    onClick={() => openModal(r)}
                    className="bg-[#5D14AD] text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-500">
                  No properties found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (7 per page) */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => goPage(page - 1)}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: Math.min(4, Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))) }, (_, i) => i + 1).map(
          (n) => (
            <button
              key={n}
              onClick={() => goPage(n)}
              className={`px-3 py-1 rounded ${page === n ? "bg-[#5D14AD] text-white" : "bg-gray-100"}`}
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

      {/* Modal: Property details */}
      {modalOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-white/10 backdrop-blur-lg"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl p-6 shadow-xl">
            <button
              className="absolute top-3 right-3"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <X />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Image */}
              <div className="overflow-hidden rounded-xl h-64 md:h-80 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-2xl font-bold mb-2">₦ {selected.price.toLocaleString()}</p>
                  <div className="flex flex-wrap gap-3 text-sm mb-3">
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                      <BedDouble size={16} /> {selected.beds} Bedrooms
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                      <ShowerHead size={16} /> {selected.baths} Bathrooms
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                      <Toilet size={16} /> {selected.toilets} Toilets
                    </span>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin size={16} /> {selected.location}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => router.push(`/property/${selected.slug || selected.id}`)}
                    className="text-white px-4 py-2 rounded flex items-center justify-center gap-2"
                    style={{
                      background:
                        "linear-gradient(95.46deg, #5D14AD 0.77%, #9747FF 100%)",
                    }}
                  >
                    View More <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => deleteProperty(selected)}
                    className="bg-[#E74040] text-white px-4 py-2 rounded flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} /> Delete Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
