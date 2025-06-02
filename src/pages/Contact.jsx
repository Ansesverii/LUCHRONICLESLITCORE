import React from 'react';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12">
            We'd love to hear from you! Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Email Section */}
          <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-shrink-0">
              <FaEnvelope className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h2>
              <a 
                href="mailto:Theluchronicles@gmail.com"
                className="text-blue-600 hover:text-blue-800 text-lg"
              >
                Theluchronicles@gmail.com
              </a>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-shrink-0">
              <FaInstagram className="h-8 w-8 text-pink-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Follow Us on Instagram</h2>
              <a 
                href="https://www.instagram.com/the.lu.chronicles?igsh=MXF5eGx4MjZ2bWtv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 text-lg"
              >
                @the.lu.chronicles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 