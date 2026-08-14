import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import clarityImg from '../assets/images/ur.jpg';
import realEstateImg from '../assets/images/workshop.jpg';
import serviceImg from '../assets/images/meet.jpg';

const staticArticles = [
  {
    id: 'static-1',
    title: 'The 3 Clarities: Why Most Businesses Stay Stuck',
    category: 'Business Growth',
    date: 'October 12, 2023',
    image: clarityImg,
    excerpt: "Most businesses don't fail because they lack passion—they fail because they lack clarity. Without clarity of purpose, message, and pricing, you are just grinding without moving forward.",
    content: "When I meet with entrepreneurs, the first thing I look for is clarity. Can they explain what they do in one sentence? Do they know exactly who they serve? Are they pricing their services based on the value they deliver, or are they just guessing? The 3 Clarities—Purpose, Message, and Pricing—are the foundation of any scalable business. Without them, you will constantly fight fires. You will attract the wrong clients. You will work 16-hour days and wonder why your bank account isn't growing. But once you lock in these three elements, everything changes. Marketing becomes easier. Sales conversations become natural. Your energy shifts from 'chasing' to 'attracting'. If you feel stuck in your business right now, don't look for a new marketing tactic. Look at your foundation. Fix the clarity, and the business fixes itself.",
  },
  {
    id: 'static-2',
    title: 'Building Generational Wealth Through Real Estate',
    category: 'Real Estate',
    date: 'November 5, 2023',
    image: realEstateImg,
    excerpt: "Business provides cash flow, but real estate provides wealth. Here is why every successful entrepreneur needs a solid property investment strategy to secure their future.",
    content: "Many entrepreneurs make the mistake of leaving all their wealth tied up in their trading business. While your business is your engine for generating cash flow, it is also inherently risky. Markets change. Competitors emerge. Crises happen. That is why building a real estate portfolio is not just an option—it is a necessity for long-term wealth preservation. Real estate offers what a trading business often cannot: stability, passive income, and appreciation over time. I always advise my mentoring clients to take profits from their active business and funnel them into carefully selected property investments. This creates a dual-engine wealth system. The business generates the capital; the real estate protects and grows it. Start small if you must, but start. The best time to invest in property was twenty years ago. The second best time is today.",
  },
  {
    id: 'static-3',
    title: 'Service Excellence: The Ultimate Competitive Advantage',
    category: 'Leadership',
    date: 'December 18, 2023',
    image: serviceImg,
    excerpt: "In a crowded market, your product is rarely unique. What sets you apart is how you make your customers feel. Service excellence is not a department; it's a culture.",
    content: "We live in a world where products are commoditized. No matter what you sell, someone else is probably selling something similar, maybe even cheaper. So how do you win? You win on experience. Service excellence is the ultimate differentiator. It is the one thing your competitors cannot easily copy, because it relies on your people and your culture. Delivering exceptional service is not about grand gestures; it is about consistent, predictable, high-quality interactions at every touchpoint. It means doing what you said you would do, when you said you would do it. It means anticipating the client's needs before they even ask. When you build a culture of service excellence, you stop competing on price. You create fiercely loyal customers who become your best marketers. Remember: a transaction makes you a living, but a relationship makes you a fortune.",
  }
];

export function Blog() {
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({});
  const [articles, setArticles] = useState<any[]>(staticArticles);

  useEffect(() => {
    const saved = localStorage.getItem('admin_blogs');
    if (saved) {
      try {
        const dynamicBlogs = JSON.parse(saved).map((b: any) => ({
          id: b.id,
          title: b.heading,
          category: 'News',
          date: b.date,
          image: null,
          excerpt: b.subheading || b.quote,
          content: b.body,
        }));
        setArticles([...dynamicBlogs, ...staticArticles]);
      } catch (e) {
        console.error("Failed to parse dynamic blogs", e);
      }
    }
  }, []);

  const toggleArticle = (id: string) => {
    setExpandedArticles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Blogs & News | Harish Dabasia" 
        description="Articles and insights on building a business, pricing, clarity, and the African opportunity."
      />
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6">
            Blogs & News
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Insights, strategies, and principles for building a business that works without you.
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-8">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {article.image ? (
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-auto aspect-[4/3] object-cover border-b border-gray-100"
                />
              ) : (
                <div className="w-full h-auto aspect-[4/3] bg-gray-100 flex items-center justify-center border-b border-gray-100">
                  <span className="text-gray-400 font-display font-bold text-xl">{article.category}</span>
                </div>
              )}
              <div className="p-5 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">{article.category}</span>
                  <span className="text-gray-400 text-xs">{article.date}</span>
                </div>
                <h2 className="font-display font-bold text-2xl mb-4 text-brand-dark">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-6 italic border-l-4 border-brand-green pl-4 py-1 text-sm">
                  {article.excerpt}
                </p>
                {expandedArticles[article.id] && (
                  <div className="text-gray-700 leading-relaxed space-y-4 mb-6 text-sm">
                    {article.content.split('. ').map((sentence, idx, arr) => {
                      if (idx % 2 === 0 && idx + 1 < arr.length) {
                         return <p key={idx}>{sentence.trim()}. {arr[idx+1].trim()}.</p>;
                      }
                      if (idx % 2 === 0 && idx + 1 === arr.length && sentence.trim() !== "") {
                         return <p key={idx}>{sentence.trim()}.</p>
                      }
                      return null;
                    })}
                  </div>
                )}
                <div className="mt-auto pt-2">
                  <button 
                    onClick={() => toggleArticle(article.id)}
                    className="font-bold text-brand-dark border-b-2 border-brand-gold hover:text-brand-gold transition-colors pb-1 text-sm"
                  >
                    {expandedArticles[article.id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-brand-navy py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-6 text-white">Want More Insights?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of African entrepreneurs receiving weekly insights on scaling their business directly in your inbox.
          </p>
          <div className="flex justify-center">
            <a href="mailto:dabasiah@gmail.com?subject=Newsletter Subscription" className="bg-brand-gold text-white font-bold text-lg py-4 px-10 hover:bg-[#E65C00] transition-colors flex justify-center items-center gap-2">
              <Mail className="w-5 h-5" /> Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
