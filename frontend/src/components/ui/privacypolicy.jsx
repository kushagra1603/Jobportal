import React from 'react'

function Privacypolicy() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Privacy Policy</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Welcome to JobPortal. We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your information when you use our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Personal Identification Information: Name, email address, etc.</li>
            <li>Usage Data: Information on how you use our website and services.</li>
            <li>Cookies: Small files placed on your device to help us improve your experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            We use your information to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Provide and improve our services.</li>
            <li>Personalize your experience.</li>
            <li>Communicate with you about updates and offers.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of receiving promotional emails.</li>
            <li>Request information on how your data is being used.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security</h2>
          <p className="text-gray-700 mb-6">
            We use reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this privacy policy, please contact us at <a href="mailto:support@jobfinder.com" className="text-blue-500 hover:underline">support@jobfinder.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacypolicy