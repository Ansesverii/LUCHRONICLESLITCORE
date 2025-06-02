import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAuthorByUsername, getArticlesByAuthor } from '@/data';
import AuthorCard from '@/components/ui/AuthorCard';
import NewsCard from '@/components/ui/NewsCard';

export default function AuthorProfile() {
  const { username } = useParams();
  const author = getAuthorByUsername(username);
  const articles = getArticlesByAuthor(username);

  if (!author) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Author Not Found</h1>
          <p className="mt-4 text-gray-600">The author you're looking for doesn't exist.</p>
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
      {/* Author Profile Card */}
      <div className="max-w-4xl mx-auto mb-12">
        <AuthorCard author={author} featuredArticles={articles.slice(0, 2)} />
      </div>

      {/* All Articles */}
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">
          All Articles by {author.name}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
} 