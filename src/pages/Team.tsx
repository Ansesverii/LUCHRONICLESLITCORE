import React, { useState } from 'react';
import { authors } from '@/data';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Team = () => {
  const [currentView, setCurrentView] = useState<'all' | 'editor'>('all');
  
  const founder = authors.find(author => author.isFounder);
  const teamMembers = authors
    .filter(author => !author.isFounder)
    .sort((a, b) => {
      // Put Mani Kant Soni first
      if (a.id === "9") return -1;
      if (b.id === "9") return 1;
      // Then sort by article count for others
      return (b.articlesCount || 0) - (a.articlesCount || 0);
    });

  // Function to get the appropriate image for Shumaila Khan
  const getShumailaImage = (isTeamView: boolean) => {
    if (isTeamView) {
      return "/Shumilaprofile.jpeg";
    }
    return founder?.image || "";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="font-serif text-4xl font-bold mb-2">Our Team</h1>
        <p className="text-gray-600">
          Meet the talented individuals behind LU Chronicles who work to bring you the latest news and insightful content.
        </p>
      </header>

      <Tabs defaultValue="all" className="mb-8" onValueChange={(value) => setCurrentView(value as 'all' | 'editor')}>
        <TabsList>
          <TabsTrigger value="all">All Members</TabsTrigger>
          <TabsTrigger value="editor">Editor</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Founder Section - Always visible if viewing "editor" tab */}
      {(currentView === 'editor' && founder) && (
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6">Founder</h2>
          <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <img 
                    src={getShumailaImage(false)} 
                    alt={founder.name} 
                    className="w-40 h-40 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Founder
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-serif text-2xl font-bold text-gray-900">
                    <Link to={`/author/${founder.username}`} className="hover:text-luChronicles-black transition-colors">
                      {founder.name}
                    </Link>
                  </h3>
                  <p className="text-lg text-gray-700 mt-2 font-medium">{founder.designation}</p>
                  <p className="text-sm text-gray-600 mt-1">{founder.course}</p>
                  <div className="mt-4">
                    {founder.categories && (
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {founder.categories.map(category => (
                          <span 
                            key={category} 
                            className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="mt-6 text-gray-700 leading-relaxed">{founder.bio}</p>
                  <Link 
                    to={`/author/${founder.username}`}
                    className="inline-flex items-center mt-6 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                  >
                    View Full Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Members Section - Visible in "all" tab or when editor tab is empty */}
      {(currentView === 'all' || (currentView === 'editor' && !founder)) && (
        <>
          {/* Render founder card first in "all" view */}
          {currentView === 'all' && founder && (
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-bold mb-6">Founder</h2>
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="relative">
                        <img 
                          src={getShumailaImage(true)} 
                          alt={founder.name} 
                          className="w-40 h-40 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Founder
                        </div>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3 className="font-serif text-2xl font-bold text-gray-900">
                          <Link to={`/author/${founder.username}`} className="hover:text-luChronicles-black transition-colors">
                            {founder.name}
                          </Link>
                        </h3>
                        <p className="text-lg text-gray-700 mt-2 font-medium">{founder.designation}</p>
                        <p className="text-sm text-gray-600 mt-1">{founder.course}</p>
                        <div className="mt-4">
                          {founder.categories && (
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                              {founder.categories.map(category => (
                                <span 
                                  key={category} 
                                  className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <Link 
                          to={`/author/${founder.username}`}
                          className="inline-flex items-center mt-6 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                        >
                          View Full Profile
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Members */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map(member => (
                <div 
                  key={member.id} 
                  className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                        />
                        {member.designation && (
                          <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            {member.designation}
                          </div>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900">
                        <Link to={`/author/${member.username}`} className="hover:text-luChronicles-black transition-colors">
                          {member.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{member.course}</p>
                      <div className="mt-4">
                        {member.categories && (
                          <div className="flex flex-wrap gap-2 justify-center">
                            {member.categories.slice(0, 3).map(category => (
                              <span 
                                key={category} 
                                className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                              >
                                {category}
                              </span>
                            ))}
                            {member.categories.length > 3 && (
                              <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow">
                                +{member.categories.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <Link 
                        to={`/author/${member.username}`}
                        className="inline-flex items-center mt-6 text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
                      >
                        View Profile
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Team;
