import React from 'react';
import { Link } from 'react-router-dom';
import { Author, Article } from '@/types';
import NewsCard from './NewsCard';

interface AuthorCardProps {
  author: Author;
  featuredArticles?: Article[];
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author, featuredArticles = [] }) => {
  const { name, image, bio, username, designation } = author;
  
  // Get top picks (first 2 featured articles)
  const topPicks = featuredArticles.slice(0, 2);
  
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden animate-fade-in transform hover:scale-[1.01] transition-transform duration-300">
      <div className="p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="flex-shrink-0">
            <Link to={`/author/${username}`} className="block">
              <div className="relative">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 shadow-md"
                />
                <div className="absolute -bottom-2 -right-2 bg-luChronicles-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center sm:text-left flex-1">
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              <Link to={`/author/${username}`} className="hover:text-luChronicles-black transition-colors">
                {name}
              </Link>
            </h3>
            {designation && (
              <p className="text-lg text-gray-700 mt-1 font-medium">{designation}</p>
            )}
            <p className="text-gray-600 mt-3 line-clamp-3 leading-relaxed">{bio}</p>
            <div className="mt-4">
              <Link 
                to={`/author/${username}`}
                className="inline-flex items-center text-sm font-medium text-luChronicles-black hover:text-luChronicles-black/80 transition-colors"
              >
                View Full Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Top Picks Section */}
        {topPicks.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="font-serif text-xl font-bold text-gray-900 mb-6">Top Picks</h4>
            <div className="space-y-6">
              {topPicks.map((article) => (
                <NewsCard key={article.id} article={article} variant="small" />
              ))}
            </div>
          </div>
        )}
        
        {/* If there are more than 2 featured articles, show them in Recent Articles section */}
        {featuredArticles.length > 2 && (
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="font-serif text-xl font-bold text-gray-900 mb-6">Recent Articles</h4>
            <div className="space-y-6">
              {featuredArticles.slice(2).map((article) => (
                <NewsCard key={article.id} article={article} variant="small" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorCard;
