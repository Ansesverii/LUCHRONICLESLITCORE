
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/types';
import NewsCard from '@/components/ui/NewsCard';
import SortingControl, { SortOption } from '@/components/ui/SortingControl';

interface LatestNewsProps {
  articles: Article[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ articles }) => {
  const [sortBy, setSortBy] = useState<SortOption>('latest');
  
  const sortedArticles = useMemo(() => {
    if (articles.length === 0) return [];
    
    return [...articles].sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        // Popular - sort by views
        return (b.views || 0) - (a.views || 0);
      }
    });
  }, [articles, sortBy]);
  
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl font-bold">Latest News</h2>
          <SortingControl activeSort={sortBy} onChange={setSortBy} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.slice(0, 6).map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
