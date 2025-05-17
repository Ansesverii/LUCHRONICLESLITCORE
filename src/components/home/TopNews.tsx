
import React, { useState, useMemo } from 'react';
import { Article } from '@/types';
import NewsCard from '@/components/ui/NewsCard';
import SortingControl, { SortOption } from '@/components/ui/SortingControl';

interface TopNewsProps {
  articles: Article[];
}

const TopNews: React.FC<TopNewsProps> = ({ articles }) => {
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
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl font-bold">Top News</h2>
          <SortingControl activeSort={sortBy} onChange={setSortBy} />
        </div>
        
        {sortedArticles.length >= 4 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6">
              <NewsCard article={sortedArticles[0]} variant="large" />
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedArticles.slice(1, 4).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopNews;
