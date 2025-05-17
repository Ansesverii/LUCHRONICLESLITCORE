import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-gray-100 animate-banner-pop">
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-gray-100 py-8">
        <picture className="w-full h-full flex items-center justify-center animate-fade-in">
          {/* Mobile image */}
          <source
            media="(max-width: 768px)"
            srcSet="/Lucem Sequimur.jpg"
          />
          {/* Desktop image */}
          <source
            media="(min-width: 769px)"
            srcSet="/Lucem Sequimur (1).jpg"
          />
          {/* Fallback image */}
          <img 
            src="/Lucem Sequimur (1).jpg"
            alt="University of Lucknow" 
            className="w-auto h-auto max-w-full max-h-[500px] md:max-h-[600px] object-contain shadow-lg rounded-lg"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroBanner;
