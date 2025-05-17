import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory, getCategoryBySlug, authors } from '@/data';
import NewsCard from '@/components/ui/NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import SortingControl, { SortOption } from '@/components/ui/SortingControl';

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || '');
  const allArticles = getArticlesByCategory(slug || '');
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  // Get Shumaila Khan's profile for Editorial category
  const editor = useMemo(() => {
    if (slug === 'editorial') {
      return authors.find(author => author.isFounder);
    }
    return null;
  }, [slug]);

  const sortedArticles = useMemo(() => {
    return [...allArticles].sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return (b.views || 0) - (a.views || 0);
      }
    });
  }, [allArticles, sortBy]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
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
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="font-serif text-4xl font-bold mb-2">{category.name}</h1>
        {category.description && (
          <p className="text-gray-600">{category.description}</p>
        )}
        
        {/* Editor Profile Link for Editorial Category */}
        {slug === 'editorial' && editor && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <img 
                src={editor.image} 
                alt={editor.name} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">Editor-in-Chief</h3>
                <Link 
                  to={`/author/${editor.username}`}
                  className="text-luChronicles-black hover:underline font-medium"
                >
                  {editor.name}
                </Link>
                <p className="text-sm text-gray-600 mt-1">{editor.course} • {editor.designation}</p>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="mb-8 flex justify-between items-center">
        <h2 className="font-serif text-xl font-bold">Articles</h2>
        <SortingControl activeSort={sortBy} onChange={setSortBy} />
      </div>

      {sortedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No articles found</h2>
          <p className="text-gray-600 mb-6">There are no articles in this category yet.</p>
          <Button asChild>
            <Link to="/">Go to Homepage</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Category;
