
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getArticlesByCategory } from '@/data';
import NewsCard from '@/components/ui/NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');
  const relatedArticles = article 
    ? getArticlesByCategory(article.category.toLowerCase().replace(' ', '-')).filter(a => a.id !== article.id).slice(0, 3)
    : [];

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button asChild>
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Article Header */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to={`/category/${article.category.toLowerCase().replace(' ', '-')}`}
          className="inline-block text-sm text-gray-600 hover:underline mb-2"
        >
          {article.category}
        </Link>
        
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {article.title}
        </h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center">
            <img 
              src={article.author.image} 
              alt={article.author.name} 
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <Link to={`/author/${article.author.username}`} className="author-link block">
                {article.author.name}
              </Link>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="article-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Social Sharing */}
          <div className="border-t border-b border-gray-200 py-4 my-8">
            <div className="flex items-center justify-between">
              <span className="font-medium">Share this article:</span>
              <div className="flex space-x-3">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <span className="sr-only">Share on Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <span className="sr-only">Share via Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <img 
                src={article.author.image} 
                alt={article.author.name} 
                className="w-24 h-24 rounded-full"
              />
              <div className="text-center sm:text-left">
                <Link to={`/author/${article.author.username}`} className="font-serif text-xl font-bold hover:underline">
                  {article.author.name}
                </Link>
                <p className="text-gray-700 mt-2">
                  Author at LU Chronicles
                </p>
                <Link 
                  to={`/author/${article.author.username}`}
                  className="inline-block mt-2 text-sm font-medium text-luChronicles-black hover:underline"
                >
                  View Profile and Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
