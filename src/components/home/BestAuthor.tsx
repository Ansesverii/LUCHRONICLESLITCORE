import React from 'react';
import { Author, Article } from '@/types';
import AuthorCard from '@/components/ui/AuthorCard';

interface BestAuthorProps {
  author: Author;
  articles: Article[];
}

const BestAuthor: React.FC<BestAuthorProps> = ({ author, articles }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">Best Author of the Month</h2>
            <p className="text-gray-600 mt-2">Recognizing outstanding contributions to LU Chronicles</p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AuthorCard author={author} featuredArticles={articles.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
};

export default BestAuthor;
