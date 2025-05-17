
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from '@/components/ui/command';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { articles, authors, categories } from '@/data';
import { Article, Author, Category } from '@/types';

interface SearchBarProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onOpenChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articleResults, setArticleResults] = useState<Article[]>([]);
  const [authorResults, setAuthorResults] = useState<Author[]>([]);
  const [categoryResults, setcategoryResults] = useState<Category[]>([]);
  
  // When search query changes, update results
  useEffect(() => {
    if (searchQuery.length < 2) {
      setArticleResults([]);
      setAuthorResults([]);
      setcategoryResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    
    // Search articles
    const matchedArticles = articles.filter(article => 
      article.title.toLowerCase().includes(query) || 
      article.content.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    ).slice(0, 5);
    setArticleResults(matchedArticles);
    
    // Search authors
    const matchedAuthors = authors.filter(author => 
      author.name.toLowerCase().includes(query) ||
      author.bio?.toLowerCase().includes(query) ||
      author.designation?.toLowerCase().includes(query) ||
      author.course?.toLowerCase().includes(query)
    ).slice(0, 3);
    setAuthorResults(matchedAuthors);
    
    // Search categories
    const matchedCategories = categories.filter(category =>
      category.name.toLowerCase().includes(query) ||
      category.description?.toLowerCase().includes(query)
    ).slice(0, 3);
    setcategoryResults(matchedCategories);
    
  }, [searchQuery]);
  
  // Highlight matched text in search results
  const highlightMatch = (text: string, query: string) => {
    if (!query || query.length < 2) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={i} className="bg-yellow-100 font-medium">{part}</mark> 
        : part
    );
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Search articles, authors, categories..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="h-12"
            autoFocus
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            {articleResults.length > 0 && (
              <CommandGroup heading="Articles">
                {articleResults.map(article => (
                  <CommandItem 
                    key={article.id}
                    onSelect={() => {
                      onOpenChange(false);
                      setSearchQuery('');
                    }}
                    className="cursor-pointer"
                  >
                    <Link 
                      to={`/article/${article.slug}`} 
                      className="flex items-start py-2 px-1 hover:bg-gray-50 w-full"
                    >
                      <div className="flex-shrink-0 w-12 h-12 mr-3">
                        <img src={article.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">
                          {highlightMatch(article.title, searchQuery)}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {highlightMatch(article.excerpt, searchQuery)}
                        </p>
                        <span className="text-xs text-gray-400">{article.date} • {article.category}</span>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            {authorResults.length > 0 && (
              <CommandGroup heading="Authors">
                {authorResults.map(author => (
                  <CommandItem 
                    key={author.username}
                    onSelect={() => {
                      onOpenChange(false);
                      setSearchQuery('');
                    }}
                    className="cursor-pointer"
                  >
                    <Link 
                      to={`/author/${author.username}`} 
                      className="flex items-center py-2 px-1 hover:bg-gray-50 w-full"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden mr-3">
                        <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">
                          {highlightMatch(author.name, searchQuery)}
                        </h4>
                        {author.designation && (
                          <p className="text-xs text-gray-500">{author.designation}</p>
                        )}
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            {categoryResults.length > 0 && (
              <CommandGroup heading="Categories">
                {categoryResults.map(category => (
                  <CommandItem 
                    key={category.slug}
                    onSelect={() => {
                      onOpenChange(false);
                      setSearchQuery('');
                    }}
                    className="cursor-pointer"
                  >
                    <Link 
                      to={`/category/${category.slug}`} 
                      className="flex items-center py-2 px-1 hover:bg-gray-50 w-full"
                    >
                      <div>
                        <h4 className="font-medium text-sm">
                          {highlightMatch(category.name, searchQuery)}
                        </h4>
                        {category.description && (
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {highlightMatch(category.description, searchQuery)}
                          </p>
                        )}
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
