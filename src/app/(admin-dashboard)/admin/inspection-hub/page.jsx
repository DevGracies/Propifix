// pages/admin/inspection-hub.js
"use client";
import { useState } from "react";
import { X, CreditCard, Flame } from "lucide-react";

export default function InspectionHub() {
  const [activeCard, setActiveCard] = useState(1);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedInspection, setSelectedInspection] = useState(null);

  const cards = [
    { id: 1, title: "Total Inspections", value: 50 },
    { id: 2, title: "Scheduled", value: 5 },
    { id: 3, title: "Pending", value: 35 },
    { id: 4, title: "Completed", value: 10 },
  ];

  const tableData = [
    {
      id: "123ABC5",
      property: "2-Bedroom Apartment",
      user: "Mary Jackson",
      agent: "Lola Joseph",
      date: "01/03/2025 - Sat - 2:17 PM",
      status: "Pending",
      spent: "₦14,000.00",
      paymentMethod: "Debit card",
      cardNumber: "1502********4832",
    },
    // ... add more rows
  ];

  const handleView = (inspection) => {
    setSelectedInspection(inspection);
    setShowDetailsModal(true);
  };

  const handleViewStatus = (inspection) => {
    setSelectedInspection(inspection);
    setShowStatusModal(true);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">INSPECTION HUB</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveCard(card.id)}
            className={`p-4 rounded-lg shadow cursor-pointer text-center ${
              activeCard === card.id
                ? "bg-purple-700 text-white"
                : "bg-white border"
            }`}
          >
            <p className="text-sm font-medium">{card.title}</p>
            <p className="text-xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by user name, agent name, property title, or inspection ID"
          className="flex-1 bg-white border px-3 py-2 rounded"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-purple-700 text-white px-3 py-2 rounded flex-1"
        >
          {["All", "Pending", "Scheduled", "Completed"].map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Inspection ID",
                "Property",
                "User",
                "Agent",
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
            {tableData.slice(0, 7).map((insp) => (
              <tr key={insp.id} className="border-b">
                <td className="p-3">#{insp.id}</td>
                <td className="p-3">{insp.property}</td>
                <td className="p-3">{insp.user}</td>
                <td className="p-3">{insp.agent}</td>
                <td className="p-3">{insp.date}</td>
                <td className="p-3">{insp.status}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleView(insp)}
                    className="bg-[#5D14AD] text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleViewStatus(insp)}
                    className="bg-[#9747FF] text-white px-3 py-1 rounded"
                  >
                    View Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button>&lt;</button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-purple-100"
          >
            {n}
          </button>
        ))}
        <button>&gt;</button>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedInspection && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-white/10 backdrop-blur-lg"
            onClick={() => setShowDetailsModal(false)}
          ></div>
          <div className="bg-white p-6 rounded-lg relative z-10 max-w-md w-full">
            <button
              className="absolute top-3 right-3"
              onClick={() => setShowDetailsModal(false)}
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Inspection Details</h2>
            <p>ID: {selectedInspection.id}</p>
            <p>Property: {selectedInspection.property}</p>
            <p>User: {selectedInspection.user}</p>
            <p>Agent: {selectedInspection.agent}</p>
            <p>Date: {selectedInspection.date}</p>
            <p>Status: {selectedInspection.status}</p>
            <button
              onClick={() => setShowCancelModal(true)}
              className="bg-[#E74040] text-white px-4 py-2 rounded mt-4"
            >
              Force Cancel
            </button>

            {/* Cancel Confirmation Modal */}
            {showCancelModal && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="font-bold mb-2">Cancel Inspection?</h3>
                <p className="mb-4">
                  Are you sure you want to cancel this inspection?
                </p>
                <div className="flex justify-between">
                  <button className="bg-[#5D14AD] text-white px-4 py-2 rounded">
                    Yes, Cancel
                  </button>
                  <button
                    onClick={() => setShowCancelModal(false)}
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

      {/* Status Modal */}
      {showStatusModal && selectedInspection && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-white/10 backdrop-blur-lg"
            onClick={() => setShowStatusModal(false)}
          ></div>
          <div className="bg-white p-6 rounded-lg relative z-10 max-w-2xl w-full">
            <button
              className="absolute top-3 right-3"
              onClick={() => setShowStatusModal(false)}
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Inspection Status</h2>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#EDDCFA] text-[#5D14AD] p-4 rounded-lg">
                <p>Total Spent</p>
                <h3 className="text-xl font-bold">{selectedInspection.spent}</h3>
                <p className="text-sm">
                  as of 16-February 2025
                </p>
              </div>
              <div className="bg-white border text-[#5D14AD] p-4 rounded-lg">
                <p className="flex justify-between">
                  Payment Method <span>{selectedInspection.paymentMethod}</span>
                </p>
                <p className="flex items-center gap-2">
                  <CreditCard className="text-[#5D14AD]" />
                  {selectedInspection.cardNumber}
                </p>
                <p>mastercard</p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              {[
                "Pending Confirmation",
                "Scheduled",
                "In Progress",
                "Completed",
                "Canceled",
              ].map((step, i) => {
                const isCurrent = i === 1; // example current step
                const isCompleted = i < 1;
                return (
                  <div key={step} className="flex items-center justify-between">
                    <div
                      className={`flex items-center gap-2 ${
                        isCurrent || isCompleted
                          ? "text-[#5D14AD]"
                          : "text-black"
                      }`}
                    >
                     <Flame size={28} /> <span>{step}</span>
                    </div>
                    <button
                      className={`text-white px-3 py-1 rounded ${
                        isCompleted
                          ? "bg-gradient-to-r from-[#5D14AD]/60 to-[#9747FF]/60"
                          : "bg-gradient-to-r from-[#5D14AD] to-[#9747FF]"
                      }`}
                    >
                      {isCompleted ? "Checked" : "Check"}
                    </button>
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
