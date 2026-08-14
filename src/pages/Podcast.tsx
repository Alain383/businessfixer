import { SEO } from '../components/SEO';
import { Youtube, Users, Video, Eye, Calendar, MapPin, ExternalLink, PlayCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import img6 from '../assets/images/rad.jpg';
import img1 from '../assets/images/dabasia.jpg';

export function Podcast() {
  const [heroImg, setHeroImg] = useState(img6);
  const [profileImg, setProfileImg] = useState(img1);

  useEffect(() => {
    const savedHero = localStorage.getItem('image_podcast_hero');
    if (savedHero) {
      setHeroImg(savedHero);
    }
  }, []);

  const playlists = [
    {
      title: "Live Business Coaching",
      count: "4 episodes",
      url: "https://www.youtube.com/@Harishdabasia/playlists"
    },
    {
      title: "Live Entrepreneur Masterclass",
      count: "3 episodes",
      url: "https://www.youtube.com/@Harishdabasia/playlists"
    },
    {
      title: "Africa Talks Business Show",
      count: "16 episodes",
      url: "https://www.youtube.com/@Harishdabasia/playlists"
    }
  ];

  const socialLinks = [
    { name: "Harish Dabasia Main Website", url: "https://harishdabasia.com" },
    { name: "Instagram", url: "https://instagram.com/dabasiah" },
    { name: "X (Twitter)", url: "https://x.com/dabasiah" },
    { name: "LinkedIn", url: "https://linkedin.com/in/harish-dabasia-7a04131b" },
    { name: "Buy Me a Coffee", url: "https://buymeacoffee.com/HarishDabasia" },
    { name: "📔 From Grind To Million", url: "https://buy.stripe.com/14A5kC6keaFK2299Q79sk03" }
  ];

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Harish Dabasia | Podcast & Videos" 
        description="Harish Dabasia The Business Coach - Serious Entrepreneurs shouldn't struggle to fix Growth & Profitability." 
      />
      
      {/* Banner */}
      <div 
        className="w-full h-48 md:h-64 lg:h-80 bg-brand-navy relative"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 23, 38, 0.4), rgba(14, 23, 38, 0.8)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Channel Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-200 pb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-[8px] overflow-hidden border-4 border-white shadow-lg bg-brand-dark flex-shrink-0 -mt-16 md:-mt-24 relative z-10">
            <img src={profileImg} alt="Harish Dabasia" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mb-2">
              Harish Dabasia
            </h1>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-gray-600 mb-4 font-medium text-sm sm:text-base">
              <span className="font-bold text-brand-navy">@Harishdabasia</span>
              <span className="hidden sm:inline">•</span>
              <span>961 subscribers</span>
              <span className="hidden sm:inline">•</span>
              <span>593 videos</span>
            </div>
            
            <p className="text-gray-700 mb-6 max-w-2xl">
              Harish Dabasia The Business Coach. Serious Entrepreneurs shouldn't struggle to fix Growth & Profitability.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="https://www.youtube.com/@Harishdabasia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#CC0000] text-white font-bold py-2.5 px-6 rounded-[8px] hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Youtube className="w-5 h-5" />
                Subscribe on YouTube
              </a>
              <a 
                href="https://harishdabasia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-navy font-bold hover:text-brand-gold transition-colors text-sm"
              >
                harishdabasia.com and 4 more links
              </a>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:p-12 pt-12">
          
          {/* Main Column - Playlists */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display font-bold text-2xl mb-6 text-brand-dark border-b border-gray-200 pb-2">
                Featured Series
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {playlists.map((playlist, idx) => (
                  <a key={idx} href={playlist.url} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-gray-100 aspect-video rounded-[8px] relative overflow-hidden mb-3 border border-gray-200 flex items-center justify-center group-hover:shadow-md transition-all">
                      <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/30 transition-colors z-10 flex items-center justify-center">
                        <PlayCircle className="text-white w-12 h-12 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded-[8px] z-20">
                        {playlist.count}
                      </div>
                    </div>
                    <h3 className="font-bold text-brand-dark group-hover:text-brand-gold transition-colors line-clamp-2">
                      {playlist.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">View full podcast</p>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-5 md:p-8 border border-gray-200 shadow-sm rounded-[8px]">
              <h2 className="font-display font-bold text-2xl mb-6 text-brand-dark">
                About Harish Dabasia The Business Coach
              </h2>
              
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="font-medium text-xl text-brand-navy mb-6">
                  Serious Entrepreneurs shouldn't struggle to fix Growth & Profitability. Business Owners won't have to with 3 C Formula Sales & Marketing Systems to Build Generational Wealth.
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">👨‍💼 Who I Am:</h3>
                <ul className="space-y-2 mb-8 list-disc pl-5">
                  <li>Business Mentor helping entrepreneurs stand out to win new business</li>
                  <li>Serial Entrepreneur with 35+ years building successful companies</li>
                  <li>Former Founder: Elevate Properties, Elevate Builders, ActOn Solar, Manage My Builder</li>
                  <li>Expertise in Business Development, Client Acquisition & Entrepreneurial Success</li>
                  <li>Passionate about helping business owners avoid costly mistakes and accelerate growth</li>
                </ul>

                <div className="bg-gray-50 p-6 border-l-4 border-[#CC0000] mb-8">
                  <p className="text-gray-800 font-medium m-0 flex items-start gap-3">
                    <span className="text-2xl">🔔</span> 
                    <span>Subscribe for weekly business mentoring, entrepreneur coaching, and proven strategies to help you stand out and win more business.</span>
                  </p>
                </div>

                <div className="space-y-2 text-gray-600 mb-8">
                  <p><strong>📧 Business Mentoring Enquiries:</strong> <a href="mailto:hd@harishdabasia.com" className="text-brand-gold hover:underline">hd@harishdabasia.com</a></p>
                  <p><strong>🌐 Website:</strong> <a href="https://harishdabasia.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">harishdabasia.com</a></p>
                  <p><strong>💼 LinkedIn:</strong> <a href="https://linkedin.com/in/harish-dabasia-7a04131b" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">linkedin.com/in/harish-dabasia-7a04131b</a></p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  <span className="text-sm font-bold text-brand-navy bg-brand-light px-3 py-1 rounded-[8px]">#BusinessMentor</span>
                  <span className="text-sm font-bold text-brand-navy bg-brand-light px-3 py-1 rounded-[8px]">#Entrepreneurship</span>
                  <span className="text-sm font-bold text-brand-navy bg-brand-light px-3 py-1 rounded-[8px]">#BusinessCoaching</span>
                  <span className="text-sm font-bold text-brand-navy bg-brand-light px-3 py-1 rounded-[8px]">#ClientAcquisition</span>
                  <span className="text-sm font-bold text-brand-navy bg-brand-light px-3 py-1 rounded-[8px]">#BusinessGrowth</span>
                  <span className="text-sm font-bold text-brand-navy bg-brand-light px-3 py-1 rounded-[8px]">#EntrepreneurMindset</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Stats & Links */}
          <div className="space-y-8">
            
            {/* Channel Stats */}
            <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-[8px]">
              <h3 className="font-bold text-lg mb-4 text-brand-dark pb-2 border-b border-gray-100">Channel Stats</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span>961 subscribers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-gray-400" />
                  <span>593 videos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-gray-400" />
                  <span>529,695 views</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>Joined Jul 5, 2011</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-[8px]">
              <h3 className="font-bold text-lg mb-4 text-brand-dark pb-2 border-b border-gray-100">Links</h3>
              <div className="space-y-4">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-brand-gold transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand-gold transition-colors" />
                    <span className="font-medium truncate text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <a 
              href="https://www.youtube.com/@Harishdabasia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-navy text-white font-bold py-4 rounded-[8px] hover:bg-brand-dark transition-colors"
            >
              Visit YouTube Channel
            </a>

          </div>
          
        </div>
      </div>
    </div>
  );
}
