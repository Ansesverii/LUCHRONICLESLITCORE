import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import Leadership from '@/components/home/Leadership';
import LatestNews from '@/components/home/LatestNews';
import TopNews from '@/components/home/TopNews';
import BestAuthor from '@/components/home/BestAuthor';
import Contact from '@/components/home/Contact';
import { 
  getLatestArticles, 
  getTopArticles, 
  getBestAuthor,
  getArticlesByAuthor
} from '@/data';

const Index = () => {
  // Get data for each section
  const latestArticles = getLatestArticles(6);
  const topArticles = getTopArticles(4);
  const bestAuthor = getBestAuthor();
  const bestAuthorArticles = getArticlesByAuthor(bestAuthor.username);

  return (
    <div>
      {/* University Banner */}
      <HeroBanner />
      
      {/* Leadership Section */}
      <Leadership />
      
      {/* Latest News */}
      <LatestNews articles={latestArticles} />
      
      {/* Top News */}
      <TopNews articles={topArticles} />
      
      {/* Best Author */}
      <BestAuthor author={bestAuthor} articles={bestAuthorArticles} />
      
      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Index;
