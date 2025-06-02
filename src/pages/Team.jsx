import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '@/data';
import AuthorCard from '@/components/ui/AuthorCard';

export default function Team() {
  // Sort authors by role/designation
  const sortedAuthors = [...authors].sort((a, b) => {
    // Founders first
    if (a.isFounder && !b.isFounder) return -1;
    if (!a.isFounder && b.isFounder) return 1;
    
    // Then by designation
    if (a.designation && b.designation) {
      return a.designation.localeCompare(b.designation);
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-600">
          The passionate individuals behind LU Chronicles, dedicated to bringing you quality journalism
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {sortedAuthors.map((author) => (
            <AuthorCard 
              key={author.id} 
              author={author}
              featuredArticles={[]} // You can add featured articles if needed
            />
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate writers, editors, and contributors to join our team.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-luChronicles-black text-white rounded-md hover:bg-luChronicles-darkGray transition-colors duration-200"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center px-6 py-3 border border-luChronicles-black text-luChronicles-black rounded-md hover:bg-luChronicles-black hover:text-white transition-colors duration-200"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 