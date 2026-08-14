import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

const mediaItems = [
  {
    id: '1',
    title: "Why Hard Work Alone Won't Build a Successful Business | Harish Dabasia",
    source: "ROYAL FM 94.3 KIGALI",
    date: "Jul 16, 2026",
    description: "Welcome to Royal FM, The Heartbeat of Kigali. Tune in for a royal blend of entertainment, lifestyle, music, and politics – all in one place. From feel-good jams to thought-provoking convos, Royal FM is where Kigali clicks, listens, and vibes.",
    videoId: "B3kw_tbIEQs"
  },
  {
    id: '2',
    title: "Can You Build Wealth in Real Estate With Just $1,000? | Harish Dabasia",
    source: "94.3 PODCAST",
    date: "Jul 30, 2026",
    description: "Can you really build wealth in Africa's real estate market with just $1,000?",
    videoId: "2LjdjVlGlOc"
  },
  {
    id: '3',
    title: "I Lost Everything at 55. Then I Started Again in Africa",
    source: "The Voices Podcast With Arafat",
    date: "Jul 23, 2026",
    description: "I Lost Everything at 55... Then I Started Again in Africa",
    videoId: "c0YIC-CE7ts"
  }
];

export function Media() {
  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Media & Press | Harish Dabasia" 
        description="Interviews, podcasts, and press featuring Harish Dabasia on business growth, real estate, and service excellence."
      />
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6">
            Media & Press
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Latest interviews, podcasts, and media appearances.
          </p>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-8">
          {mediaItems.map((item) => (
            <article key={item.id} className="flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${item.videoId}`} 
                  title={item.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full object-cover border-b border-gray-100"
                ></iframe>
              </div>
              <div className="p-5 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center gap-4 mb-4">
                  <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">{item.source}</span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h2 className="font-display font-bold text-xl mb-4 text-brand-dark line-clamp-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={`https://youtu.be/${item.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-dark hover:text-brand-gold transition-colors text-sm flex items-center gap-2"
                  >
                    Watch on YouTube <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-6 text-white">Press Inquiries</h2>
          <p className="text-xl text-gray-300 mb-12">
            For media features, podcast interviews, or speaking engagements, please get in touch with our team.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-10 hover:bg-[#E65C00] transition-colors">
              Contact Press Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
