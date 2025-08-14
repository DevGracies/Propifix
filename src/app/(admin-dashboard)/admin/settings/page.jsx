"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    platformName: "",
    logo: "",
    phone: "",
    timezone: "",
    enableUserRegistration: false,
    requireEmailVerification: false,
    profileFields: "",
    enableEmailNotif: false,
    enableSmsNotif: false,
    automatedMessages: "",
    enableTwoFactor: false,
    passwordStrength: "",
    sessionTimeout: "",
    paymentMethod: "",
    transactionFee: "",
    enableDarkMode: false,
    enableAdminLogs: false,
    trackTransactionErrors: false,
  });

  const handleChange = (name, value) => {
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const Toggle = ({ name, value }) => (
    <div
      onClick={() => handleChange(name, !value)}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
        value ? "bg-[#9747FF]" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
          value ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );

  const Section = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="font-bold text-lg">{title}</h2>
      {children}
      <div className="flex gap-4 pt-2">
        <button className="bg-[#5D14AD] text-white px-4 py-2 rounded">
          Save Changes
        </button>
        <button className="bg-[#9747FF] text-white px-4 py-2 rounded">
          Edit
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold">SETTINGS</h1>

      {/* 1. General Settings */}
      <Section title="General Settings">
        <input
          type="text"
          placeholder="Enter Platform name"
          value={settings.platformName}
          onChange={(e) => handleChange("platformName", e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="file"
          placeholder="Choose a file"
          onChange={(e) => handleChange("logo", e.target.files[0]?.name)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={settings.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="border p-2 w-full"
        />
        <select
          value={settings.timezone}
          onChange={(e) => handleChange("timezone", e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Timezone</option>
          <option value="GMT">GMT</option>
          <option value="WAT">WAT</option>
        </select>
      </Section>

      {/* 2. User Management */}
      <Section title="User Management">
        <div className="flex items-center gap-3">
          <span>Enable User Registration</span>
          <Toggle
            name="enableUserRegistration"
            value={settings.enableUserRegistration}
          />
        </div>
        <div className="flex items-center gap-3">
          <span>Require Email Verification</span>
          <Toggle
            name="requireEmailVerification"
            value={settings.requireEmailVerification}
          />
        </div>
        <input
          type="text"
          placeholder="Basic"
          value={settings.profileFields}
          onChange={(e) => handleChange("profileFields", e.target.value)}
          className="border p-2 w-full"
        />
      </Section>

      {/* 3. Messaging & Notifications */}
      <Section title="Messaging & Notifications">
        <div className="flex items-center gap-3">
          <span>Enable Email Notifications</span>
          <Toggle
            name="enableEmailNotif"
            value={settings.enableEmailNotif}
          />
        </div>
        <div className="flex items-center gap-3">
          <span>Enable SMS Notifications</span>
          <Toggle
            name="enableSmsNotif"
            value={settings.enableSmsNotif}
          />
        </div>
        <textarea
          placeholder="Customize automated messages"
          value={settings.automatedMessages}
          onChange={(e) => handleChange("automatedMessages", e.target.value)}
          className="border p-2 w-full"
        />
      </Section>

      {/* 4. Security & Privacy */}
      <Section title="Security & Privacy">
        <div className="flex items-center gap-3">
          <span>Enable Two-Factor Authentication</span>
          <Toggle
            name="enableTwoFactor"
            value={settings.enableTwoFactor}
          />
        </div>
        <select
          value={settings.passwordStrength}
          onChange={(e) => handleChange("passwordStrength", e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Password Strength</option>
          <option value="Weak">Weak</option>
          <option value="Strong">Strong</option>
        </select>
        <input
          type="text"
          placeholder="Enter timeout"
          value={settings.sessionTimeout}
          onChange={(e) => handleChange("sessionTimeout", e.target.value)}
          className="border p-2 w-full"
        />
      </Section>

      {/* 5. Payment & Transactions */}
      <Section title="Payment & Transactions">
        <select
          value={settings.paymentMethod}
          onChange={(e) => handleChange("paymentMethod", e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Transfer">Transfer</option>
          <option value="Debit Card">Debit Card</option>
        </select>
        <input
          type="text"
          placeholder="Enter transaction fee"
          value={settings.transactionFee}
          onChange={(e) => handleChange("transactionFee", e.target.value)}
          className="border p-2 w-full"
        />
      </Section>

      {/* 6. Platform Customization */}
      <Section title="Platform Customization">
        <div className="flex items-center gap-3">
          <span>Enable Dark Mode</span>
          <Toggle
            name="enableDarkMode"
            value={settings.enableDarkMode}
          />
        </div>
      </Section>

      {/* 7. Logs & Activity Tracking */}
      <Section title="Logs & Activity Tracking">
        <div className="flex items-center gap-3">
          <span>Enable Admin Logs</span>
          <Toggle
            name="enableAdminLogs"
            value={settings.enableAdminLogs}
          />
        </div>
        <div className="flex items-center gap-3">
          <span>Track Transaction Errors</span>
          <Toggle
            name="trackTransactionErrors"
            value={settings.trackTransactionErrors}
          />
        </div>
      </Section>
    </div>
  );
}
