import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAuthorByUsername, getArticlesByAuthor } from '@/data';
import NewsCard from '@/components/ui/NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AuthorProfile = () => {
  const { username } = useParams<{ username: string }>();
  const author = getAuthorByUsername(username || '');
  const articles = getArticlesByAuthor(username || '');
  
  // Sort articles by date (latest first)
  const latestArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Sort articles by views (most viewed first)
  const topArticles = [...articles].sort(
    (a, b) => (b.views || 0) - (a.views || 0)
  );
  
  // Get top picks (for demonstration, using the top 2 articles)
  const topPicks = topArticles.slice(0, 2);

  // Format bio paragraphs for specific authors
  const formatBio = (bio: string) => {
    // Special formatting for Shumaila Khan
    if (author?.username === 'shumaila-khan') {
      const paragraphs = [
        "I've always believed that stories are how civilizations speak—and universities, in particular, are teeming with voices that deserve a headline. That belief gave rise to LU.Chronicles, the student-run daily I founded not simply to report what happens, but to reflect what matters.",
        
        "I'm Shumaila—a sophomore at Lucknow University and IGNOU—studying English Literature, Psychology, Ancient Indian History, and Public Administration. Yes, all at once. And no, sleep is not overrated—it's just scheduled.",
        
        "Before founding LU.Chronicles, I spent my school years juggling grades, gathering trophies, captaining literary events, and finding my voice in auditoriums packed with applause and adjudicators. That same hunger for challenge has since found a home in multiple arenas: inter-university debates, writing rooms, and as the President of LU.LITCORE, the official literary society of Lucknow University.",
        
        "But Chronicles is something different. It's not about just adding another title to the résumé. It's about building a newsroom run by students, for students—one that blends editorial rigor with youthful defiance. As the founder and editor of LU.Chronicles, I wear a lot of hats—curate content, mentor writers, map out editorial strategy, and occasionally jump in with a byline or two (or ten). Every piece we publish aims to balance curiosity with credibility.",
        
        "When I'm not chasing stories—fictional or otherwise—I'm probably chasing a dozen other interests: public speaking, film criticism, poetry, Pilates, languages, art, aesthetics, or the perfect chord on one of my instruments. My life is stitched together by a simple rule—if you can learn it, try it.",
        
        "What I bring to the paper is not just a résumé of accolades but an ethic: of inquiry, imagination, and intention. Because if you're going to write history—be it personal or institutional—you may as well make sure it's worth reading.",
        
        "LU.Chronicles began as an idea scribbled in the margins of a too-busy notebook—something between a passion project and a quiet rebellion. I didn't set out to create a legacy; I just wanted to build a space where student voices weren't sidelined but centered. And somewhere along the way, it became more than a paper. It became a pulse.",
        
        "What people don't see is the chaos behind it all. I didn't know how to set up a website or handle the technical stuff—I learned as I went, often fumbling in the dark. Balancing deadlines, managing stress, and fighting doubt felt endless. Finding a team was harder. But then, somehow, I found the best—brilliant, fierce, and all in. That's when it clicked.",
        
        "One day, I hope LU.Chronicles will outgrow me and become more than just a campus paper—it will be the face of student journalism in India. Like all things that root slowly but grow into something much bigger than the seed that birthed it. What started as a personal venture, shaped by my own perspective, will eventually take on a life of its own, powered by the voices that follow. I'll still be here, watching from the sidelines—proud, but perhaps a little nostalgic for the days when it was just my vision, my challenge. But that's the beauty of it. It was never meant to stay mine. It was meant to grow, to outlast, and to be shaped by those who come after. And when it does, I'll know I helped build something that won't just be a part of my story—but part of many others.",
        
        "Because a big part of telling a good story?",
        "Is having a good one to tell.",
        
        "'Cause in the end, we all become the stories we leave behind."
      ];

      return (
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => {
            const isPoeticEnding = index === paragraphs.length - 3 || index === paragraphs.length - 2;
            const isLastLine = index === paragraphs.length - 1;
            return (
              <p 
                key={index} 
                className={`${isPoeticEnding ? 'italic' : ''} ${isLastLine ? 'mb-8' : 'mb-6'}`}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      );
    }

    // Special formatting for Atulit Pandey
    if (author?.username === 'atulit-pandey') {
      const paragraphs = bio.split('\n\n');
      return (
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => {
            const isLastParagraph = index === paragraphs.length - 1;
            const isSignature = paragraph.startsWith('Peace,');
            
            if (isSignature) {
              const signatureLines = paragraph.split('\n');
              return (
                <div key={index} className="mt-8">
                  {signatureLines.map((line, lineIndex) => (
                    <p 
                      key={lineIndex} 
                      className={`${lineIndex === 0 ? 'font-medium' : ''} ${lineIndex === signatureLines.length - 1 ? 'mb-0' : 'mb-2'}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              );
            }

            return (
              <p 
                key={index} 
                className={isLastParagraph ? 'mb-8' : 'mb-6'}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      );
    }
    
    // Format for all other authors
    const paragraphs = bio.split('\n\n').filter(p => p.trim());
    return (
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => {
          const isLastParagraph = index === paragraphs.length - 1;
          const lines = paragraph.split('\n').filter(line => line.trim());
          
          // If paragraph has multiple lines (like a signature or list)
          if (lines.length > 1) {
            return (
              <div key={index} className={isLastParagraph ? 'mb-8' : 'mb-6'}>
                {lines.map((line, lineIndex) => (
                  <p 
                    key={lineIndex} 
                    className={`${lineIndex === 0 ? 'font-medium' : ''} ${lineIndex === lines.length - 1 ? 'mb-0' : 'mb-2'}`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            );
          }
          
          // Single line paragraph
          return (
            <p 
              key={index} 
              className={`text-gray-800 ${isLastParagraph ? 'mb-8' : 'mb-6'}`}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    );
  };
  
  if (!author) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Author not found</h1>
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
      <div className="max-w-5xl mx-auto">
        {/* Author Header */}
        <div className="mb-10 pb-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img 
              src={author.image} 
              alt={author.name} 
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-center md:text-left flex-1">
              <h1 className="font-serif text-3xl font-bold mb-2">{author.name}</h1>
              {author.designation && (
                <p className="text-lg text-gray-700 mb-1">{author.designation}</p>
              )}
              {author.course && (
                <p className="text-gray-600 mb-4">
                  {author.course}
                </p>
              )}
              <div className="text-gray-800">
                {formatBio(author.bio)}
              </div>
              
              {author.email && (
                <div className="mt-4">
                  <a 
                    href={`mailto:${author.email}`}
                    className="inline-flex items-center text-sm font-medium text-luChronicles-black hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {author.email}
                  </a>
                </div>
              )}
              
              {author.categories && author.categories.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Writing Categories:</h3>
                  <div className="flex flex-wrap gap-2">
                    {author.categories.map(category => (
                      <Link 
                        key={category} 
                        to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                        className="inline-block px-3 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Top Picks Section */}
          {topPicks.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="font-serif text-xl font-bold mb-4">Top Picks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topPicks.map((article) => (
                  <NewsCard key={article.id} article={article} variant="small" />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Author Articles */}
        <div>
          <Tabs defaultValue="latest" className="mb-8">
            <TabsList>
              <TabsTrigger value="latest">Latest Articles</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
            </TabsList>
            <TabsContent value="latest">
              {latestArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No articles found for this author.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="popular">
              {topArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No articles found for this author.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
