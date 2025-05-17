
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CategoryLink {
  name: string;
  path: string;
}

const categories: CategoryLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Faculty', path: '/category/faculty' },
  { name: 'Editorial', path: '/category/editorial' },
  { name: 'Our Team', path: '/team' },
  { name: 'International', path: '/category/international' },
  { name: 'National', path: '/category/national' },
  { name: 'City', path: '/category/city' },
  { name: 'University', path: '/category/university' },
  { name: 'Arts & Culture', path: '/category/arts-culture' },
  { name: 'Sports', path: '/category/sports' },
  { name: 'Business', path: '/category/business' },
  { name: 'Sci-tech', path: '/category/sci-tech' },
  { name: 'Features', path: '/category/features' },
  { name: 'Guest Columns', path: '/category/guest-columns' },
  { name: 'Op-ed', path: '/category/op-ed' },
  { name: 'Blogs', path: '/category/blogs' },
  { name: 'Magazine', path: '/category/magazine' },
  { name: 'Podcasts', path: '/category/podcasts' },
  { name: 'Crosswords', path: '/category/crosswords' },
  { name: 'Donate', path: '/donate' },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={`site-sidebar bg-white border-r border-gray-200 w-64 ${isOpen ? 'open' : ''}`}>
      <ScrollArea className="h-full">
        <div className="px-4 py-6">
          <nav>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className={`block py-2 px-3 rounded-md transition-colors ${
                      isActive(category.path)
                        ? 'bg-luChronicles-black text-white font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleSidebar();
                      }
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
