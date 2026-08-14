import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import propertyImg from '../assets/images/gg.jpg';
import { Building2, Globe, TrendingUp, Presentation, Users, Megaphone, ShieldCheck, MapPin, Calendar, ArrowRight } from 'lucide-react';

export function PropertyInvestment() {
  const [heroImg, setHeroImg] = useState(propertyImg);

  useEffect(() => {
    const saved = localStorage.getItem('image_property_hero');
    if (saved) {
      setHeroImg(saved);
    }
  }, []);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Property Investment & Global Investor Network | Harish Dabasia" 
        description="Building Generational Wealth Through Property. Connecting Africa with Global Capital."
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-dark pt-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(15, 23, 42, 0.4) 100%), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Property Investment & Global Investor Network
            </h1>
            <p className="text-2xl text-brand-gold font-display font-bold mb-6">
              Building Generational Wealth Through Property. Connecting Africa with Global Capital.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-light">
              Helping investors, developers, entrepreneurs, and governments unlock property opportunities across Africa while connecting projects with investors from Europe, the UK, North America, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-8 text-center hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book an Investment Strategy Session
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-8 text-center hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Join the Investor Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In-page Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-[88px] z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-8 overflow-x-auto py-4 text-sm font-bold text-brand-navy">
            <li><a href="#mission" className="hover:text-brand-gold transition-colors whitespace-nowrap">Our Mission</a></li>
            <li><a href="#pillars" className="hover:text-brand-gold transition-colors whitespace-nowrap">The Four Pillars</a></li>
            <li><a href="#forum" className="hover:text-brand-gold transition-colors whitespace-nowrap">Property Forum</a></li>
            <li><a href="#developers-investors" className="hover:text-brand-gold transition-colors whitespace-nowrap">Developers & Investors</a></li>
            <li><a href="#marketing" className="hover:text-brand-gold transition-colors whitespace-nowrap">Global Marketing</a></li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="w-16 h-16 text-brand-gold mx-auto mb-8" />
          <h2 className="font-display font-bold text-4xl mb-8 text-brand-dark">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Africa is one of the world's fastest-growing regions, with increasing demand for housing, commercial developments, hospitality, and mixed-use projects.
          </p>
          <div className="bg-brand-light p-5 md:p-8 border-l-4 border-brand-green">
            <p className="text-2xl text-brand-navy font-display font-bold">
              Our mission is to educate investors, support developers, and create trusted connections between African real estate opportunities and international investors.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section id="pillars" className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-brand-dark">Our Four Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-8">
            {/* Pillar 1 */}
            <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-[8px]">
              <TrendingUp className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">1. Strategic Property Investment</h3>
              <p className="text-gray-600 leading-relaxed">
                Helping individuals and businesses build long-term wealth through carefully planned property investments.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-[8px]">
              <Building2 className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">2. Off-Plan Property Investment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Investing before construction is completed can provide opportunities for capital appreciation and flexible payment structures. We help investors understand:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-brand-green font-bold">✓</span> How off-plan developments work</li>
                <li className="flex items-start gap-2"><span className="text-brand-green font-bold">✓</span> Due diligence & assessment</li>
                <li className="flex items-start gap-2"><span className="text-brand-green font-bold">✓</span> Risk management</li>
                <li className="flex items-start gap-2"><span className="text-brand-green font-bold">✓</span> Exit strategies</li>
                <li className="flex items-start gap-2"><span className="text-brand-green font-bold">✓</span> Investment timelines</li>
                <li className="flex items-start gap-2"><span className="text-brand-green font-bold">✓</span> Legal considerations</li>
                <li className="flex items-start gap-2"><span className="text-brand-green font-bold">✓</span> Financing options</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-[8px]">
              <Megaphone className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">3. Property Marketing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Helping developers successfully market high-quality projects to qualified buyers and investors. Services include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Project branding</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Digital marketing campaigns</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> International promotion</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Investment presentations</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Sales strategy</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Investor brochures</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Website development</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Lead generation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Video marketing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-gold rounded-[8px]"></span> Virtual property showcases</li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-[8px]">
              <Users className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">4. International Investor Network</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Creating relationships between African developers and qualified investors from:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['United Kingdom', 'Europe', 'United States', 'Canada', 'Middle East', 'Africa', 'Global African Diaspora'].map(region => (
                  <span key={region} className="bg-brand-navy text-white text-xs px-3 py-1 font-bold rounded-[8px]">{region}</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">
                Our objective is to facilitate introductions, networking, and collaboration. Investment decisions remain the responsibility of the parties involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Investment Forum */}
      <section id="forum" className="py-16 md:py-24 px-4 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl mb-4 text-brand-gold">Property Investment Forum</h2>
            <p className="text-2xl font-light mb-8">Connecting Opportunities with Capital</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              The Property Investment Forum is a platform where developers, investors, entrepreneurs, and industry professionals can meet, learn, and explore opportunities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Investment conferences',
                'Developer showcases',
                'Off-plan project launches',
                'Networking events',
                'Market updates',
                'Expert panels',
                'Property exhibitions',
                'Site visits',
                'Investor roundtables'
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-[8px] bg-brand-dark flex items-center justify-center text-brand-gold text-xs shrink-0">✓</div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-brand-dark p-6 md:p-12 border border-gray-700 text-center relative overflow-hidden rounded-[8px]">
            <div className="absolute top-0 right-0 bg-brand-gold text-white font-bold text-xs px-3 py-1 uppercase tracking-wider">Coming Soon</div>
            <h3 className="font-display font-bold text-3xl mb-6 text-white">Africa Property Investment Forum</h3>
            <p className="text-gray-400 mb-8">A premium annual event bringing together:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Developers', 'Investors', 'Banks', 'Architects', 'Government representatives',
                'Construction companies', 'Legal professionals', 'Financial institutions',
                'Property technology companies', 'International investment partners'
              ].map(item => (
                <span key={item} className="bg-gray-800 text-gray-300 text-sm px-4 py-2 border border-gray-700">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developers & Investors */}
      <section id="developers-investors" className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark flex items-center gap-3">
              <Presentation className="text-brand-gold w-8 h-8" />
              For Developers
            </h2>
            <p className="text-gray-600 mb-6 text-lg">We help developers:</p>
            <ul className="space-y-4">
              {[
                'Showcase projects',
                'Build credibility',
                'Reach international audiences',
                'Generate qualified investor leads',
                'Improve project marketing',
                'Present investment opportunities professionally'
              ].map(item => (
                <li key={item} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100">
                  <span className="text-brand-green font-bold shrink-0 mt-0.5">→</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark flex items-center gap-3">
              <ShieldCheck className="text-brand-gold w-8 h-8" />
              For Investors
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Access opportunities to learn about:</p>
            <ul className="space-y-4">
              {[
                'Residential developments',
                'Commercial property',
                'Mixed-use projects',
                'Hospitality investments',
                'Industrial developments',
                'Land opportunities',
                'Urban regeneration projects'
              ].map(item => (
                <li key={item} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100">
                  <span className="text-brand-green font-bold shrink-0 mt-0.5">→</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* International Marketing & Why Harish */}
      <section id="marketing" className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark">International Marketing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Using digital marketing and strategic partnerships, we aim to increase the visibility of selected African property developments to international audiences.
            </p>
            <p className="font-bold text-gray-800 mb-4">Potential channels include:</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Investment webinars',
                'Property roadshows',
                'LinkedIn campaigns',
                'YouTube content',
                'International conferences',
                'Investor newsletters',
                'Strategic partnerships',
                'Referral networks'
              ].map(item => (
                <div key={item} className="flex items-center gap-2 bg-white p-3 border border-gray-200 shadow-sm rounded-[8px]">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-gray-700 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark">Why Work With Harish Dabasia?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Harish Dabasia combines decades of experience in construction, business growth, and property with a passion for helping Africa attract investment responsibly and sustainably.
            </p>
            <div className="bg-white p-5 md:p-8 border-l-4 border-brand-green shadow-sm rounded-[8px]">
              <p className="text-xl text-brand-navy italic font-medium">
                "His focus is on creating long-term relationships built on transparency, education, and strategic thinking."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-6 text-white">Join the Global Investor Network</h2>
          <p className="text-xl text-gray-300 mb-12">
            Whether you're an investor seeking opportunities, a developer looking for visibility, or an organization interested in collaboration, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-8 hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Become an Investor Member
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-8 hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5" />
              List Your Development
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-8 hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-brand-dark py-12 px-4 border-t border-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-4">Important Disclaimer</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Harish Dabasia does not act as a licensed financial advisor, investment manager, or broker. Information provided through mentoring, workshops, and forums is educational and strategic in nature. All investment decisions should be made independently after conducting appropriate legal, financial, and technical due diligence. Note: Every investment carries risk, and returns are never guaranteed.
          </p>
        </div>
      </section>
    </div>
  );
}
