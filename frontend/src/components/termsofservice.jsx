import React from "react";

function Termsofservice() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Terms of Service</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to JobFinder. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>You must be at least 18 years old to use our services.</li>
            <li>You agree to provide accurate and complete information when registering.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Content Ownership</h2>
          <p className="text-gray-700 mb-4">
            All content on our website, including text, graphics, and logos, is the property of JobFinder or its licensors and is protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Prohibited Activities</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Do not use our services for any illegal or unauthorized purpose.</li>
            <li>Do not interfere with or disrupt the security, integrity, or performance of our website.</li>
            <li>Do not attempt to gain unauthorized access to our systems or networks.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            JobFinder is not liable for any indirect, incidental, or consequential damages arising from your use of our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We may update these terms from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these terms, please contact us at <a href="mailto:support@jobfinder.com" className="text-blue-500 hover:underline">support@jobfinder.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Termsofservice;
