import React from 'react';

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Support LU Chronicles
          </h1>
          <p className="text-lg text-gray-600">
            Your contribution helps us continue bringing quality journalism to the university community.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-8">
            {/* Why Donate Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Support Us?
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-luChronicles-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Independent student journalism that serves the university community</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-luChronicles-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Training and development opportunities for student journalists</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-luChronicles-black mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>High-quality content that informs and engages readers</span>
                </li>
              </ul>
            </div>

            {/* Donation Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Make a Donation
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    min="100"
                    step="100"
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luChronicles-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luChronicles-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luChronicles-black focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-luChronicles-black text-white py-3 px-6 rounded-md hover:bg-luChronicles-darkGray transition-colors duration-200"
                >
                  Donate Now
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="text-center text-sm text-gray-500">
              <p>Your donation is secure and will be processed through our payment partner.</p>
              <p className="mt-2">For any questions, please contact us at support@luchronicles.edu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 