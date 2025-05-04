import Navbarr from "../../../../components/Navbarr";

const TermsAndConditonsPage = () => {
  return (
    <div>
      <Navbarr>
        <h1 className="text-center text-4xl md:text-5xl font-extrabold">
          Terms & Conditions
        </h1>
      </Navbarr>
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          Welcome to <strong>Propifix</strong>! By using our website, mobile
          app, or services, you agree to these Terms & Conditions. If you do not
          agree, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Definitions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Propifix</strong> refers to our company, website, and
            services.
          </li>
          <li>
            <strong>User</strong> refers to any individual or entity accessing
            our services.
          </li>
          <li>
            <strong>Service Provider</strong> refers to artisans and real estate
            professionals listed on our platform.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Use of Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You must be at least 18 years old or have parental consent to use
            our services.
          </li>
          <li>
            You agree not to misuse our platform or engage in fraudulent
            activities.
          </li>
          <li>
            Any attempt to use the platform for fraud, deception, or illegal
            activities will result in immediate account suspension, legal
            action, and potential prosecution under relevant laws.
          </li>
          <li>
            Propifix reserves the right to modify or discontinue services at any
            time.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Payments & Refunds
        </h2>
        <h3 className="font-semibold mt-4">Authorized Payment Methods</h3>
        <p className="mb-2">
          All payments must be made via our official platform.
        </p>
        <h3 className="font-semibold mt-4">Prohibited Direct Payments</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Such payments void service guarantees, refund eligibility, and
            dispute rights.
          </li>
          <li>Propifix disclaims any liability from direct payments.</li>
          <li>
            Agents facilitating such are deemed in violation and engaging in
            fraud.
          </li>
        </ul>
        <h3 className="font-semibold mt-4">Exclusive Client Benefits</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service Protections:</strong> Dispute resolution, refunds,
            and service guarantees.
          </li>
          <li>
            <strong>Discounts:</strong> 10% off on selected services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Service Charges & Fees
        </h2>
        <p className="mb-2">
          Propifix applies a 20% fee on real estate services and 40% on artisan
          services. These cover platform maintenance, quality checks, and
          validator compensation.
        </p>
        <p className="mb-2">
          By booking, you agree to the applicable fees, which are non-refundable
          once a service is completed.
        </p>
        <hr className="my-10 border-gray-400" />
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Refund Policy</h2>
        <h3 className="font-semibold mt-4">1. Eligibility for Refunds</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Service not delivered within agreed time due to provider or Propifix
            fault.
          </li>
          <li>
            Unsatisfactory service after formal complaint and no resolution.
          </li>
          <li>Unauthorized charges due to system error.</li>
        </ul>

        <h3 className="font-semibold mt-4">2. Non-Refundable Situations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service completed as described.</li>
          <li>Personal dissatisfaction not based on service quality.</li>
          <li>Customer didn’t provide access/info needed.</li>
          <li>Force majeure (e.g. disasters, 3rd party interference).</li>
          <li>Late cancellations or jobs already started.</li>
          <li>Payments not made through the official platform.</li>
        </ul>

        <h3 className="font-semibold mt-4">3. Refund Request Process</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Email{" "}
            <a href="mailto:propifix@gmail.com" className="text-blue-600">
              propifix@gmail.com
            </a>{" "}
            within 2 days of the issue.
          </li>
          <li>Provide transaction proof and supporting documents.</li>
          <li>
            Allow Propifix to attempt resolution before processing a refund.
          </li>
        </ol>

        <h3 className="font-semibold mt-4">4. Approval & Processing</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reviewed within 3 business days.</li>
          <li>Processed in 7 days if approved.</li>
          <li>Partial refunds may apply.</li>
        </ul>

        <h3 className="font-semibold mt-4">5. Dispute Resolution</h3>
        <p>
          Email{" "}
          <a href="mailto:propifix@gmail.com" className="text-blue-600">
            propifix@gmail.com
          </a>{" "}
          if you disagree with a refund decision.
        </p>

        <h3 className="font-semibold mt-4">6. Changes to Policy</h3>
        <p>
          Propifix may modify the policy anytime. Updates are effective
          immediately when posted on the website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensure all provided information is accurate.</li>
          <li>Do not violate laws or infringe rights using the platform.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Service Provider Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service providers must be professional and honest.</li>
          <li>Propifix is not liable for user–provider disputes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Propifix is not liable for damages from service usage.</li>
          <li>Accuracy of third-party providers is not guaranteed.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Termination of Use
        </h2>
        <p>We may suspend or terminate your account for violations.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law</h2>
        <p>These terms are governed by the laws of Nigeria.</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p>
          Email:{" "}
          <a href="mailto:propifix@gmail.com" className="text-blue-600">
            propifix@gmail.com
          </a>
        </p>

        <hr className="my-10 border-gray-400" />

        <h1 className="text-3xl font-bold mb-4 text-purple-700">
          Cancellation Policy
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Cancellation by Customers
        </h2>
        <h3 className="font-semibold mt-4">1.1 Free Cancellations</h3>
        <p>
          Cancellations 48+ hours before service are fully refundable or
          reschedulable.
        </p>

        <h3 className="font-semibold mt-4">1.2 Late Cancellations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cancellations within 24 hours incur a 30% fee.</li>
          <li>No refund if provider is already at the location.</li>
        </ul>

        <h3 className="font-semibold mt-4">1.3 No-Show Policy</h3>
        <p>If you don’t show up without notice, no refund will be issued.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Cancellation by Propifix or Providers
        </h2>
        <p>
          We may cancel due to emergencies or policy violations and will notify
          you to reschedule or refund.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Refunds for Canceled Services
        </h2>
        <p>Processed within 3 business days as per our Refund Policy.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Modifications & Rescheduling
        </h2>
        <p>Request rescheduling 48+ hours in advance to avoid penalties.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Exceptions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Some services have unique cancellation rules.</li>
          <li>Emergency/urgent bookings may be non-refundable.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Policy Updates</h2>
        <p>Propifix may update this policy at any time.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:propifix@gmail.com" className="text-blue-600">
            propifix@gmail.com
          </a>{" "}
          | Phone: 09069663123
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditonsPage;
