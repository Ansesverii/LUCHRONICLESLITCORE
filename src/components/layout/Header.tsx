import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/search/SearchBar';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header className="site-header bg-white text-luChronicles-black py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="flex items-center relative">
        <div className="absolute left-0">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-luChronicles-black"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </Button>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/76b542ab-fd84-4596-b20e-cf71052bdbd2.png" 
              alt="LU Chronicles Logo" 
              className="h-12"
            />
          </Link>
        </div>

        <div className="absolute right-0">
          <Button
            variant="ghost"
            size="icon"
            className="text-luChronicles-black"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <Search size={20} />
          </Button>
        </div>
        
        {/* Search Dialog */}
        <SearchBar 
          isOpen={isSearchOpen}
          onOpenChange={setIsSearchOpen}
        />
      </div>
    </header>
  );
};

export default Header;
