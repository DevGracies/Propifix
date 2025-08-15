"use client";
import React, { useMemo, useState } from "react";
import {
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Eye,
  EyeOff,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
/*
  Admin Panel Page – Next.js + Tailwind (JavaScript)
  --------------------------------------------------
  - Fully responsive UI
  - Lucide icons only
  - No external UI deps required
  - Swap mock data with your backend API later

  How to use:
  1) Ensure Tailwind is configured.
  2) Install lucide-react:  npm i lucide-react
  3) Add this file in pages/admin/panel.jsx (or an app route). Export default component below.
*/

// ---- Mock Data --------------------------------------------------------------
const makeAdmins = (n = 18) => {
  const roles = ["Super Admin", "Admin"];
  const statuses = ["Active", "Inactive"];
  const names = [
    "Lola Duro",
    "Olori Grace",
    "Miracle Iyanu",
    "Tunde Bala",
    "Grace Olori",
    "Jon Snow",
  ];
  const rows = [];
  for (let i = 0; i < n; i++) {
    const name = names[i % names.length];
    const email = `${name.split(" ")[0].toLowerCase()}${i}@gmail.com`;
    rows.push({
      id: `ADM${1000 + i}`,
      name,
      email,
      role: roles[i % roles.length],
      date: new Date(2025, i % 12, (i % 28) + 1, 14, 17).toLocaleString(),
      status: statuses[i % statuses.length],
    });
  }
  return rows;
};

const makeLogs = (n = 24) => {
  const actions = [
    "Approved Property",
    "Suspended Agent",
    "Created Announcement",
    "Resolved Dispute",
  ];
  const roles = ["Super Admin", "Admin"];
  const rows = [];
  for (let i = 0; i < n; i++) {
    rows.push({
      ts: new Date(2025, i % 12, (i % 28) + 1, 14, 17).toLocaleString(),
      action: actions[i % actions.length],
      by: ["Olori Grace", "Lola Duro", "Miracle Iyanu"][i % 3],
      role: roles[i % roles.length],
      entity: `${["Property", "Agent", "Announcement", "Dispute"][i % 4]} #${
        120 + i
      }`,
      ip: `192.168.23.${100 + i}`,
      details:
        "Lorem ipsum: entity reviewed and action applied successfully for audit.",
    });
  }
  return rows;
};

// ---- Small UI Helpers -------------------------------------------------------
const GradientButton = ({ onClick, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white shadow transition-opacity hover:opacity-90 ${className}`}
    style={{
      background: "linear-gradient(95.46deg, #5D14AD 0.77%, #9747FF 100%)",
    }}
  >
    {children}
  </button>
);

const PurpleBtn = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded text-white text-sm`}
    style={{ background: "#5D14AD" }}
  >
    {children}
  </button>
);

const VioletBtn = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded text-white text-sm`}
    style={{ background: "#9747FF" }}
  >
    {children}
  </button>
);

const ModalShell = ({ title, onClose, children, titleRight = null }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      className="absolute inset-0 bg-white/40 backdrop-blur-sm"
      onClick={onClose}
    />
    <div className="relative z-10 bg-white rounded-xl shadow-xl w-11/12 md:w-[680px] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {titleRight}
        <button
          onClick={onClose}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      {children}
    </div>
  </div>
);

// ---- Main Page --------------------------------------------------------------
export default function AdminPanelPage() {
  // Header button (Create Account) modal
  const [showCreate, setShowCreate] = useState(false);

  // Search / Filter
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showStatusOptions, setShowStatusOptions] = useState(false);

  // Stats
  const [activeStat, setActiveStat] = useState("Total Admins");

  // Admins table
  const allAdmins = useMemo(() => makeAdmins(23), []);
  const perPageAdmins = 7;
  const [pageAdmins, setPageAdmins] = useState(1);
  const pagesAdmins = Math.max(1, Math.ceil(allAdmins.length / perPageAdmins));

  // Logs table
  const allLogs = useMemo(() => makeLogs(31), []);
  const perPageLogs = 7;
  const [pageLogs, setPageLogs] = useState(1);
  const pagesLogs = Math.max(1, Math.ceil(allLogs.length / perPageLogs));

  // Row modals
  const [viewAdmin, setViewAdmin] = useState(null);
  const [editAdmin, setEditAdmin] = useState(null);
  const [showPermissions, setShowPermissions] = useState(false);
  const [activeRoleTab, setActiveRoleTab] = useState("Super Admin");

  // Create fields
  const [createName, setCreateName] = useState("");
  const [createRole, setCreateRole] = useState("Admin");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createShowPass, setCreateShowPass] = useState(false);

  // Edit fields (simple mirror of create fields when loading)
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editShowPass, setEditShowPass] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const logDetails = {
    timestamp: "01/03/2025 - Sat - 2:17 PM",
    action: "Approved Property",
    performedBy: "Olori Grace",
    userRole: "Super Admin",
    affectedEntity: "Property #123",
    ipAddress: "192.168.23.191",
    details: "Property #123 was reviewed and approved by Super Admin",
  };

  // Derived stats
  const stats = useMemo(
    () => ({
      "Total Admins": allAdmins.length,
      "Active Admins": allAdmins.filter((a) => a.status === "Active").length,
      Roles: new Set(allAdmins.map((a) => a.role)).size,
      "Resolved Messages": 15, // placeholder
    }),
    [allAdmins]
  );

  // Filtered admins (by active stat, search, and status filter)
  const filteredAdminsFull = allAdmins.filter((a) => {
    const q = query.toLowerCase();
    const matchesQuery = !q || `${a.name} ${a.email}`.toLowerCase().includes(q);
    const matchesStatus = statusFilter === "All" || a.status === statusFilter;

    // stat filter effect
    if (activeStat === "Active Admins" && a.status !== "Active") return false;
    return matchesQuery && matchesStatus;
  });
  const adminsSlice = useMemo(() => {
    const start = (pageAdmins - 1) * perPageAdmins;
    return filteredAdminsFull.slice(start, start + perPageAdmins);
  }, [filteredAdminsFull, pageAdmins]);

  // Logs pagination slice
  const logsSlice = useMemo(() => {
    const start = (pageLogs - 1) * perPageLogs;
    return allLogs.slice(start, start + perPageLogs);
  }, [allLogs, pageLogs]);

  const pageWindow = (page, pages, windowSize = 4) => {
    let start = Math.max(1, page - Math.floor(windowSize / 2));
    if (start + windowSize - 1 > pages)
      start = Math.max(1, pages - windowSize + 1);
    return Array.from(
      { length: Math.min(windowSize, pages) },
      (_, i) => start + i
    );
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">ADMIN PANEL</h1>
          <span className="text-sm text-gray-600 tracking-wide">
            MESSAGES & ALERTS
          </span>
        </div>
        <GradientButton onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">Create Account</span>
        </GradientButton>
      </div>

      {/* A. Stats */}
      <section className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {Object.entries(stats).map(([label, value]) => {
            const active = activeStat === label;
            return (
              <button
                key={label}
                onClick={() => {
                  setActiveStat(label);
                  setPageAdmins(1);
                }}
                className={`p-4 rounded-xl shadow text-left transition ${
                  active ? "bg-purple-700 text-white" : "bg-white text-gray-800"
                }`}
              >
                <div className="text-sm">{label}</div>
                <div className="text-2xl font-semibold mt-2">{value}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* B. Search & Filter */}
      <section className="mb-6 bg-white rounded-xl p-4 shadow">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 flex items-center bg-white rounded-md shadow-sm px-3">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              className="w-full py-3 outline-none text-sm"
              placeholder="Search by name or email"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {/* Status Dropdown */}
          <div className="w-64 relative">
            <button
              onClick={() => setShowStatusOptions((s) => !s)}
              className="w-full border border-gray-200 bg-white rounded-md px-3 py-3 flex items-center justify-between"
            >
              <span className="text-sm">Filter by status</span>
              <Filter className="w-4 h-4" />
            </button>
            {showStatusOptions && (
              <div className="absolute z-20 mt-2 w-full bg-white border shadow-lg rounded-md">
                {["All", "Active", "Inactive"].map((opt) => (
                  <label
                    key={opt}
                    className="px-3 py-2 hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="status"
                      className="accent-purple-600"
                      checked={statusFilter === opt}
                      onChange={() => setStatusFilter(opt)}
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* C. Manage Admins Table */}
      <section className="bg-white rounded-xl p-4 shadow mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Manage Admins</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-sm text-gray-600">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Role</th>
                <th className="py-3 pr-4">Date</th>
                <th className="py-3 pr-4">Status</th>
                <th className="py-3 pr-4">
                  <input type="checkbox" className="accent-purple-600" /> Action
                </th>
              </tr>
            </thead>
            <tbody>
              {adminsSlice.map((row) => (
                <tr key={row.id} className="border-t">
                  <td className="py-4 pr-4 text-sm">{row.name}</td>
                  <td className="py-4 pr-4 text-sm">{row.email}</td>
                  <td className="py-4 pr-4 text-sm">{row.role}</td>
                  <td className="py-4 pr-4 text-sm">{row.date}</td>
                  <td className="py-4 pr-4 text-sm">{row.status}</td>
                  <td className="py-4 pr-4 text-sm flex gap-2">
                    <button
                      onClick={() => setViewAdmin(row)}
                      className="px-3 py-1 rounded text-white text-sm"
                      style={{ background: "#5D14AD" }}
                    >
                      View
                    </button>
                    <button
                      onClick={() =>
                        setEditAdmin(row) ||
                        (setEditName(row.name), setEditEmail(row.email))
                      }
                      className="px-3 py-1 rounded text-white text-sm"
                      style={{ background: "#9747FF" }}
                    >
                      Edit
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
              onClick={() => setPageAdmins((p) => Math.max(1, p - 1))}
              aria-label="Previous"
            >
              <div className="flex">
                <div
                  className="p-2 rounded-l-md"
                  style={{ background: "#5D14AD", color: "white" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <div
                  className="p-2 rounded-r-md"
                  style={{ background: "#DDC7F0", color: "#4C1D95" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </div>
            </button>
            {pageWindow(pageAdmins, pagesAdmins).map((n) => (
              <button
                key={n}
                onClick={() => setPageAdmins(n)}
                className={`px-3 py-1 rounded ${
                  pageAdmins === n ? "bg-purple-600 text-white" : "bg-gray-100"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPageAdmins((p) => Math.min(pagesAdmins, p + 1))}
              aria-label="Next"
            >
              <div className="flex">
                <div
                  className="p-2 rounded-l-md"
                  style={{ background: "#DDC7F0", color: "#4C1D95" }}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div
                  className="p-2 rounded-r-md"
                  style={{ background: "#5D14AD", color: "white" }}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          </div>
          <div className="text-sm text-gray-600">
            Showing {adminsSlice.length} of {filteredAdminsFull.length}
          </div>
        </div>
      </section>

      {/* D. Manage Roles */}
      <section className="bg-white rounded-xl p-4 shadow mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Manage Roles</h2>
          <PurpleBtn onClick={() => setShowPermissions(true)}>
            Edit Permissions
          </PurpleBtn>
        </div>
        <p className="text-sm text-gray-600">
          Define capabilities for Super Admin and Admin roles.
        </p>
      </section>

      {/* E. Activity Logs */}
      <section className="bg-white rounded-xl p-4 shadow">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Activity Logs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-sm text-gray-600">
                <th className="py-3 pr-4">Timestamp</th>
                <th className="py-3 pr-4">Action</th>
                <th className="py-3 pr-4">Performed By</th>
                <th className="py-3 pr-4">User Role</th>
                <th className="py-3 pr-4">Affected Entity</th>
                <th className="py-3 pr-4">IP Address</th>
                <th className="py-3 pr-4">
                  <input type="checkbox" className="accent-purple-600" /> Action
                </th>
              </tr>
            </thead>
            <tbody>
              {logsSlice.map((row, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-4 pr-4 text-sm">{row.ts}</td>
                  <td className="py-4 pr-4 text-sm">{row.action}</td>
                  <td className="py-4 pr-4 text-sm">{row.by}</td>
                  <td className="py-4 pr-4 text-sm">{row.role}</td>
                  <td className="py-4 pr-4 text-sm">{row.entity}</td>
                  <td className="py-4 pr-4 text-sm">{row.ip}</td>
                  <td className="py-4 pr-4 text-sm flex gap-2">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="px-3 py-1 rounded text-white text-sm"
                      style={{ background: "#5D14AD" }}
                    >
                      View More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                  <h2 className="text-lg font-bold">Activity Log Details</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-red-500 transition"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Timestamp:</strong> {logDetails.timestamp}
                  </p>
                  <p>
                    <strong>Action:</strong> {logDetails.action}
                  </p>
                  <p>
                    <strong>Performed By:</strong> {logDetails.performedBy}
                  </p>
                  <p>
                    <strong>User Role:</strong> {logDetails.userRole}
                  </p>
                  <p>
                    <strong>Affected Entity:</strong>{" "}
                    {logDetails.affectedEntity}
                  </p>
                  <p>
                    <strong>IP Address:</strong> {logDetails.ipAddress}
                  </p>
                  <p>
                    <strong>Details:</strong> {logDetails.details}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPageLogs((p) => Math.max(1, p - 1))}
              aria-label="Previous logs"
            >
              <div className="flex">
                <div
                  className="p-2 rounded-l-md"
                  style={{ background: "#5D14AD", color: "white" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <div
                  className="p-2 rounded-r-md"
                  style={{ background: "#DDC7F0", color: "#4C1D95" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </div>
            </button>
            {pageWindow(pageLogs, pagesLogs).map((n) => (
              <button
                key={n}
                onClick={() => setPageLogs(n)}
                className={`px-3 py-1 rounded ${
                  pageLogs === n ? "bg-purple-600 text-white" : "bg-gray-100"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPageLogs((p) => Math.min(pagesLogs, p + 1))}
              aria-label="Next logs"
            >
              <div className="flex">
                <div
                  className="p-2 rounded-l-md"
                  style={{ background: "#DDC7F0", color: "#4C1D95" }}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div
                  className="p-2 rounded-r-md"
                  style={{ background: "#5D14AD", color: "white" }}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          </div>
          <div className="text-sm text-gray-600">
            Showing {logsSlice.length} of {allLogs.length}
          </div>
        </div>
      </section>

      {/* Create Account Modal */}
      {showCreate && (
        <ModalShell title="Create Account" onClose={() => setShowCreate(false)}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                value={createName}
                onChange={(e) => setCreateName(e.target.value)}
                placeholder="Enter name"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>

            {/* Role dropdown */}
            <div className="relative">
              <label className="text-sm text-gray-600">Role</label>
              <RoleDropdown
                value={createRole}
                onChange={setCreateRole}
                options={["Super Admin", "Admin"]}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                value={createEmail}
                onChange={(e) => setCreateEmail(e.target.value)}
                placeholder="Enter email"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="mt-1 flex items-center border rounded-md overflow-hidden">
                <input
                  type={createShowPass ? "text" : "password"}
                  value={createPassword}
                  onChange={(e) => setCreatePassword(e.target.value)}
                  placeholder="****************"
                  className="flex-1 px-3 py-2 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setCreateShowPass((s) => !s)}
                  className="px-3 py-2 text-white"
                  style={{ background: "#9747FF" }}
                >
                  {createShowPass ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <PurpleBtn>Save Changes</PurpleBtn>
              <VioletBtn>Edit</VioletBtn>
            </div>
          </div>
        </ModalShell>
      )}

      {/* Admin Details Modal (View) */}
      {viewAdmin && (
        <ModalShell title="Admin Details" onClose={() => setViewAdmin(null)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Field label="Name" value={viewAdmin.name} />
            <Field label="Email" value={viewAdmin.email} />
            <Field label="Role" value={viewAdmin.role} />
            <Field label="Date" value={viewAdmin.date} />
            <Field label="Status" value={viewAdmin.status} />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 rounded text-white"
              style={{ background: "#E74040" }}
            >
              {viewAdmin.status === "Active" ? "Deactivate" : "Activate"}
            </button>
            <PurpleBtn onClick={() => setViewAdmin(null)}>Close</PurpleBtn>
          </div>
        </ModalShell>
      )}

      {/* Edit Admin Modal */}
      {editAdmin && (
        <ModalShell title="Edit Admin" onClose={() => setEditAdmin(null)}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Enter name"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                placeholder="Enter gmail"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="mt-1 flex items-center border rounded-md overflow-hidden">
                <input
                  type={editShowPass ? "text" : "password"}
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                  placeholder="****************"
                  className="flex-1 px-3 py-2 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setEditShowPass((s) => !s)}
                  className="px-3 py-2 text-white"
                  style={{ background: "#9747FF" }}
                >
                  {editShowPass ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <PurpleBtn>Save Changes</PurpleBtn>
              <VioletBtn>Edit</VioletBtn>
            </div>
          </div>
        </ModalShell>
      )}

      {/* Edit Permissions Modal */}
      {showPermissions && (
        <ModalShell
          title={"Edit Permissions for"}
          onClose={() => setShowPermissions(false)}
        >
          {/* Tabs */}
          <div className="mb-4 flex items-center gap-2">
            {["Super Admin", "Admin"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveRoleTab(tab)}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  activeRoleTab === tab
                    ? "border-purple-600 text-purple-700"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Permissions List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-auto pr-1">
            {(activeRoleTab === "Super Admin"
              ? superAdminPerms
              : adminPerms
            ).map((p) => (
              <label key={p} className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 accent-purple-600"
                />
                <span>{p}</span>
              </label>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <PurpleBtn>Save Changes</PurpleBtn>
            <VioletBtn>Edit</VioletBtn>
          </div>
        </ModalShell>
      )}
    </div>
  );
}

// ---- Sub-components & Data --------------------------------------------------
const Field = ({ label, value }) => (
  <div>
    <div className="text-sm text-gray-500">{label}</div>
    <div className="font-medium break-words">{value}</div>
  </div>
);

const RoleDropdown = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-1 w-full border rounded-md px-3 py-2 text-left text-sm flex items-center justify-between"
      >
        <span>{value}</span>
        <Filter className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border shadow-lg rounded-md">
          {options.map((opt) => (
            <label
              key={opt}
              className="px-3 py-2 hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="role"
                className="accent-purple-600"
                checked={value === opt}
                onChange={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const superAdminPerms = [
  "Super Admin",
  "Admin",
  "Manage Users (Create, Edit, Delete)",
  "Manage Agents (Approve, Suspend, Remove)",
  "Manage Properties (Approve, Remove, Edit)",
  "Manage Transactions (View, Approve, Refund)",
  "Manage Messages (View, Send, Delete)",
  "Manage Announcements (Create, Edit, Delete, Schedule)",
  "Manage Reports & Disputes (View, Resolve, Escalate)",
  "Manage System Settings (Security, Notifications, Configurations)",
  "Assign & Edit Admin Roles",
];

const adminPerms = [
  "Super Admin",
  "Admin",
  "View Users & Agents",
  "Manage Messages (View & Send)",
  "Manage Reports & Disputes (View & Resolve)",
  "Manage Announcements (Create, Edit, Delete, Schedule)",
  "Moderate Properties (Approve & Remove Listings)",
];
