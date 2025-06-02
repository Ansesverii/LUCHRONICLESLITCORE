import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '@/data';
import AuthorCard from '@/components/ui/AuthorCard';

export default function Faculty() {
  // Filter authors who are faculty members
  const facultyMembers = authors.filter(author => author.isFaculty);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          Our Faculty Contributors
        </h1>
        <p className="text-lg text-gray-600">
          Meet the distinguished faculty members who contribute their expertise to LU Chronicles
        </p>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-4xl mx-auto">
        {facultyMembers.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {facultyMembers.map((faculty) => (
              <AuthorCard 
                key={faculty.id} 
                author={faculty}
                featuredArticles={[]} // You can add featured articles if needed
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No Faculty Members Found
            </h2>
            <p className="text-gray-600 mb-6">
              We're currently working on adding faculty contributors to our platform.
            </p>
            <Link 
              to="/team"
              className="inline-flex items-center text-luChronicles-black hover:text-luChronicles-darkGray transition-colors"
            >
              View Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Are You a Faculty Member?
          </h2>
          <p className="text-gray-600 mb-6">
            Join our community of contributors and share your expertise with the university community.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-luChronicles-black text-white rounded-md hover:bg-luChronicles-darkGray transition-colors duration-200"
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 