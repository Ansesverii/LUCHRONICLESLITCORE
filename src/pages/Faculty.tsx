import React from 'react';
import { Link } from 'react-router-dom';

// This is a placeholder for the faculty page, which would require real faculty data
const Faculty = () => {
  // Mock data for faculty members
  const facultyMembers = [
    { 
      id: '1', 
      name: 'Dr. Rajesh Kumar', 
      role: 'Dean, Faculty of Arts', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop',
      department: 'Department of English',
      categories: ['Literature', 'Research', 'Academic Leadership']
    },
    { 
      id: '2', 
      name: 'Dr. Meera Sharma', 
      role: 'Professor, Department of History', 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop',
      department: 'Department of History',
      categories: ['Modern History', 'Research', 'Cultural Studies']
    },
    { 
      id: '3', 
      name: 'Dr. Arun Singh', 
      role: 'Associate Professor, Department of Political Science', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop',
      department: 'Department of Political Science',
      categories: ['Political Theory', 'International Relations', 'Public Policy']
    },
    { 
      id: '4', 
      name: 'Dr. Priya Verma', 
      role: 'Assistant Professor, Department of Sociology', 
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&h=200&auto=format&fit=crop',
      department: 'Department of Sociology',
      categories: ['Social Research', 'Gender Studies', 'Urban Sociology']
    },
  ];

  // Group faculty by department
  const departments = [...new Set(facultyMembers.map(member => member.department))];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="font-serif text-4xl font-bold mb-2">Faculty</h1>
        <p className="text-gray-600">
          Our distinguished faculty members contribute valuable insights and expertise to LU Chronicles.
        </p>
      </header>

      <div className="flex flex-col items-center">
        {/* Pyramid Layout Container */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* First row - 1 faculty member */}
          <div className="flex justify-center">
            {facultyMembers.slice(0, 1).map(member => (
              <div 
                key={member.id} 
                className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl w-80"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-40 h-40 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Dean
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">
                      <Link to={`/author/faculty-${member.id}`} className="hover:text-luChronicles-black transition-colors">
                        {member.name}
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-700 mt-2 font-medium">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-1">{member.department}</p>
                    <div className="mt-4">
                      {member.categories && (
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.categories.map(category => (
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
                      to={`/author/faculty-${member.id}`}
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

          {/* Second row - 2 faculty members */}
          <div className="flex justify-center gap-8">
            {facultyMembers.slice(1, 3).map(member => (
              <div 
                key={member.id} 
                className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl w-72"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-36 h-36 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {member.role.split(',')[0]}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900">
                      <Link to={`/author/faculty-${member.id}`} className="hover:text-luChronicles-black transition-colors">
                        {member.name}
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-700 mt-2 font-medium">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-1">{member.department}</p>
                    <div className="mt-4">
                      {member.categories && (
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.categories.slice(0, 2).map(category => (
                            <span 
                              key={category} 
                              className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                            >
                              {category}
                            </span>
                          ))}
                          {member.categories.length > 2 && (
                            <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow">
                              +{member.categories.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <Link 
                      to={`/author/faculty-${member.id}`}
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

          {/* Third row - remaining faculty members */}
          <div className="flex justify-center gap-8">
            {facultyMembers.slice(3).map(member => (
              <div 
                key={member.id} 
                className="bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl w-72"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-36 h-36 rounded-full object-cover ring-4 ring-gray-100 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {member.role.split(',')[0]}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900">
                      <Link to={`/author/faculty-${member.id}`} className="hover:text-luChronicles-black transition-colors">
                        {member.name}
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-700 mt-2 font-medium">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-1">{member.department}</p>
                    <div className="mt-4">
                      {member.categories && (
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.categories.slice(0, 2).map(category => (
                            <span 
                              key={category} 
                              className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow"
                            >
                              {category}
                            </span>
                          ))}
                          {member.categories.length > 2 && (
                            <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full shadow-sm hover:shadow-md transition-shadow">
                              +{member.categories.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <Link 
                      to={`/author/faculty-${member.id}`}
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
      </div>

      <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-8 mt-12">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Faculty Contributions</h3>
        <p className="text-gray-700 leading-relaxed">
          Faculty members contribute to LU Chronicles through opinion pieces, research highlights, and expert commentary.
          If you're a faculty member interested in contributing, please contact our editorial team.
        </p>
        <div className="mt-6">
          <Link 
            to="/contact"
            className="inline-flex items-center text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
          >
            Contact Editorial Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
