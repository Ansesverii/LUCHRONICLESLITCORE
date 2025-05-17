
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luChronicles-black text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About LU Chronicles</h3>
            <p className="text-sm text-gray-300">
              LU Chronicles is the official news publication of Lucknow University, 
              featuring articles from students and faculty across multiple categories.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/team" className="hover:underline">Our Team</Link></li>
              <li><Link to="/category/faculty" className="hover:underline">Faculty</Link></li>
              <li><Link to="/donate" className="hover:underline">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-luChronicles-black font-medium py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-gray-300">
          <p>Lucem Sequimur</p>
          <p>&copy; {new Date().getFullYear()} LU Chronicles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
