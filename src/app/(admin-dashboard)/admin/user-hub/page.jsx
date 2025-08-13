"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function UserHub() {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedSignupPeriod, setSelectedSignupPeriod] = useState("Today");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showUserModal, setShowUserModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const stats = [
    { id: 1, title: "Total Registered Users", value: 5000 },
    { id: 2, title: "Active Users", value: 2500 },
    {
      id: 3,
      title: "New Signups",
      value: 2400,
      dropdown: ["Today", "This Week", "This Month"],
    },
    { id: 4, title: "Suspended Users", value: 100 },
  ];

  const users = [
    {
      id: "123ABC5",
      phone: "09054883483",
      email: "usergraceolori@gmail.com",
      device: "Windows PC",
      ip: "192.168.23.191",
      location: "Lagos, Nigeria",
      registered: "01/03/2025 - Sat - 2:17 PM",
      name: "Grace Olori",
      role: "Agent",
      status: "Active",
      address: "Lagos, Nigeria",
    },
    // Duplicate for demo
    ...Array(15).fill({
      id: "XYZ987",
      phone: "08012345678",
      email: "sampleuser@email.com",
      device: "iPhone",
      ip: "192.168.1.1",
      location: "Abuja, Nigeria",
      registered: "02/03/2025 - Sun - 3:00 PM",
      name: "John Doe",
      role: "User",
      status: "Active",
      address: "Abuja, Nigeria",
    }),
  ];

  const itemsPerPage = 7;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const displayedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openUserModal = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">USER HUB</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            onClick={() => setActiveCard(stat.id)}
            className={`p-4 rounded-lg shadow cursor-pointer transition ${
              activeCard === stat.id
                ? "bg-purple-700 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              {stat.id === 3 && (
                <select
                  value={selectedSignupPeriod}
                  onChange={(e) => setSelectedSignupPeriod(e.target.value)}
                  className="bg-purple-700 text-white rounded p-1 text-sm"
                >
                  {stat.dropdown.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name, email, or phone number"
          className="flex-1 p-3 border rounded bg-white"
        />
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="flex-1 p-3 border rounded bg-purple-700 text-white"
        >
          {["All", "User", "Agent", "Artisans", "Landlord", "Caretaker"].map(
            (type) => (
              <option key={type}>{type}</option>
            )
          )}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-3">ID</th>
              <th className="p-3">Email</th>
              <th className="p-3">Device</th>
              <th className="p-3">IP Address</th>
              <th className="p-3">Location</th>
              <th className="p-3">Registered</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, idx) => (
              <tr key={idx} className="border-t text-sm">
                <td className="p-3">User #{user.id}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.device}</td>
                <td className="p-3">{user.ip}</td>
                <td className="p-3">{user.location}</td>
                <td className="p-3">{user.registered}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => openUserModal(user)}
                    className="px-3 py-1 rounded text-white bg-[#5D14AD]"
                  >
                    View
                  </button>
                  <button className="px-3 py-1 rounded text-white bg-[#AD1417]">
                    Suspend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-purple-700 text-white"
                : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          className="px-3 py-1 bg-gray-200 rounded"
        >
          &gt;
        </button>
      </div>

      {/* User Modal */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setShowUserModal(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>
            <h2 className="text-lg font-bold mb-4">User Details</h2>
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <p><strong>Joined:</strong> {selectedUser.registered}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <p
              className="underline text-[#5D14AD] mt-2 cursor-pointer"
            >
              Transaction History View
            </p>
            <button
              onClick={() => {
                setShowUserModal(false);
                setShowDeleteModal(true);
              }}
              className="mt-4 px-4 py-2 bg-[#E74040] text-white rounded"
            >
              Delete Account
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Delete Account?</h2>
            <p className="mb-4">
              Are you sure you want to delete this account?
            </p>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-[#5D14AD] text-white rounded">
                Yes, delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-[#9747FF] text-white rounded"
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
