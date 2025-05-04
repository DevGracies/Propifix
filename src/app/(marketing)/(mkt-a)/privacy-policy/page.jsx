import Navbarr from "@/components/Navbarr";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Navbarr>
        <h1 className="text-center text-4xl md:text-5xl font-extrabold">
          Privacy Policy
        </h1>
      </Navbarr>
      <div className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-2">
          <strong>Effective Date:</strong> Monday, 30th of June 2025
        </p>
        <p className="mb-6">
          <strong>Last Updated:</strong> Monday, 30th of June 2025
        </p>

        <p className="mb-6">
          Welcome to <strong>Propifix</strong> ("we", "our", or "us"). Your
          privacy is important to us, and we are committed to protecting the
          personal information you share with us. This Privacy Policy explains
          how we collect, use, disclose, and protect your information when you
          visit our website{" "}
          <a
            href="https://www.propifix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            www.propifix.com
          </a>{" "}
          and use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            location, and any other information voluntarily provided during
            sign-up or communication.
          </li>
          <li>
            <strong>Property & Service Data:</strong> Property details,
            documents, images, preferences, and related inquiries.
          </li>
          <li>
            <strong>Usage Information:</strong> IP address, browser type, pages
            visited, and device data.
          </li>
          <li>
            <strong>Cookies and Tracking:</strong> Cookies help improve your
            experience and track usage. You can control cookies via browser
            settings.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>To provide and improve our services</li>
          <li>To communicate with you about bookings and support</li>
          <li>To personalize your experience</li>
          <li>To process transactions and verify data</li>
          <li>To send promotional content (with opt-out)</li>
          <li>To maintain platform security and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          3. How We Share Your Information
        </h2>
        <p className="mb-4">
          We do <strong>not</strong> sell your personal data. We may share it
          with:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Trusted partners (e.g., payment processors)</li>
          <li>Legal authorities when required</li>
          <li>Buyers/investors during a business acquisition</li>
        </ul>
        <p className="mb-6">
          All parties must use your information only for intended purposes and
          safeguard it accordingly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Your Privacy Rights</h2>
        <p className="mb-4">You may have rights to:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Restrict or object to certain processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mb-6">
          To make a request, email{" "}
          <a
            href="mailto:support@propifix.com"
            className="text-indigo-600 hover:underline"
          >
            support@propifix.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="mb-6">
          We use industry-standard methods to protect your data, but no system
          is completely secure. Use strong passwords and avoid public networks
          when submitting personal info.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Children’s Privacy</h2>
        <p className="mb-6">
          We do not knowingly collect data from children under 18. If we
          discover such data, we delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          7. Changes to This Policy
        </h2>
        <p className="mb-6">
          We may revise this Privacy Policy. The most recent version will always
          be available here, with an updated "Last Updated" date.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="mb-6">
          <strong>Propifix</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:support@propifix.com"
            className="text-indigo-600 hover:underline"
          >
            support@propifix.com
          </a>
          <br />
          Phone: 09069663123
          <br />
          Website:{" "}
          <a
            href="https://www.propifix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            www.propifix.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
