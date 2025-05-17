
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/types';

interface NewsCardProps {
  article: Article;
  variant?: 'small' | 'medium' | 'large';
}

const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'medium' }) => {
  const { id, title, excerpt, image, author, category, date, slug } = article;
  
  if (variant === 'small') {
    return (
      <div className="group flex space-x-3 animate-fade-in">
        <div className="flex-shrink-0 w-20 h-20 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <Link to={`/category/${category.toLowerCase().replace(' ', '-')}`} className="text-xs text-gray-600 hover:underline">
            {category}
          </Link>
          <h3 className="font-serif font-bold text-sm mt-1 group-hover:underline">
            <Link to={`/article/${slug}`}>{title}</Link>
          </h3>
          <div className="mt-1 text-xs text-gray-600">
            By <Link to={`/author/${author.username}`} className="author-link">{author.name}</Link> • {date}
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'large') {
    return (
      <div className="animate-fade-in">
        <div className="group overflow-hidden mb-3">
          <Link to={`/article/${slug}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
        <Link to={`/category/${category.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-600 hover:underline">
          {category}
        </Link>
        <h2 className="font-serif font-bold text-2xl mt-2 hover:underline">
          <Link to={`/article/${slug}`}>{title}</Link>
        </h2>
        <p className="text-gray-700 mt-2">{excerpt}</p>
        <div className="mt-3 text-sm text-gray-600">
          By <Link to={`/author/${author.username}`} className="author-link">{author.name}</Link> • {date}
        </div>
      </div>
    );
  }
  
  // Default: medium
  return (
    <div className="group animate-fade-in">
      <div className="overflow-hidden mb-3">
        <Link to={`/article/${slug}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      <Link to={`/category/${category.toLowerCase().replace(' ', '-')}`} className="text-xs text-gray-600 hover:underline">
        {category}
      </Link>
      <h3 className="font-serif font-bold text-lg mt-2 group-hover:underline">
        <Link to={`/article/${slug}`}>{title}</Link>
      </h3>
      <p className="text-gray-700 mt-1 text-sm line-clamp-2">{excerpt}</p>
      <div className="mt-2 text-xs text-gray-600">
        By <Link to={`/author/${author.username}`} className="author-link">{author.name}</Link> • {date}
      </div>
    </div>
  );
};

export default NewsCard;
