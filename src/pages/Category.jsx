import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory } from '@/data';
import NewsCard from '@/components/ui/NewsCard';

export default function Category() {
  const { slug } = useParams();
  const articles = getArticlesByCategory(slug);

  // Convert slug to display name (e.g., "arts-culture" -> "Arts & Culture")
  const categoryName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('And', '&');

  if (!articles || articles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">No Articles Found</h1>
          <p className="mt-4 text-gray-600">There are no articles in this category yet.</p>
          <Link 
            to="/"
            className="inline-block mt-6 text-luChronicles-black hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          {categoryName}
        </h1>
        <p className="text-gray-600">
          {articles.length} {articles.length === 1 ? 'article' : 'articles'} in this category
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
} 