import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { authors } from '@/data';

const Leadership: React.FC = () => {
  const founder = authors.find(author => author.isFounder);
  const firstParagraph = "I've always believed that stories are how civilizations speak—and universities, in particular, are teeming with voices that deserve a headline. That belief gave rise to LU.Chronicles, the student-run daily I founded not simply to report what happens, but to reflect what matters.";

  return (
    <section className="py-16 bg-gray-50 mb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leader behind LU Chronicles, driving our mission to illuminate campus stories and amplify student voices.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Founder Card */}
          <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="relative">
                  <img 
                    src="/Shumilaprofile.jpeg" 
                    alt="Shumaila Khan" 
                    className="w-48 h-48 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Founder & Editor-in-Chief
                  </div>
                </div>
                
                {/* Profile Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-serif text-3xl font-bold text-gray-900">Shumaila Khan</h2>
                  <p className="text-luChronicles-black font-medium text-lg mt-2">Founder & Editor-in-Chief</p>
                  <p className="text-gray-600 mt-1">B.A. 4th semester</p>
                  
                  {/* Expertise Tags */}
                  <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Politics Beat</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Editorial Leadership</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Student Journalism</span>
                  </div>

                  {/* Social Media Icons */}
                  <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-luChronicles-black hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-luChronicles-black hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a 
                      href="mailto:" 
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-luChronicles-black hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <FaEnvelope size={20} />
                    </a>
                  </div>

                  {/* About Section */}
                  <div className="mt-8">
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">About the Founder & Editor</h3>
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-6">{firstParagraph}</p>
                      {founder && (
                        <div className="mt-6">
                          <Link 
                            to={`/author/${founder.username}`}
                            className="inline-flex items-center px-6 py-2 bg-luChronicles-black text-white rounded-md hover:bg-luChronicles-darkGray transition-all duration-300 transform hover:scale-[1.02]"
                          >
                            View Full Profile
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Link */}
          <div className="mt-8 text-center">
            <Link 
              to="/team" 
              className="inline-flex items-center text-luChronicles-black hover:text-luChronicles-darkGray transition-colors text-lg font-medium"
            >
              Meet Our Full Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
