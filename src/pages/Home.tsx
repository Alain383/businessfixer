import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, TrendingUp, Users, Building, PlayCircle, Calendar } from 'lucide-react';
import img1 from '../assets/images/dabasia.jpg';
import myNewHero from '../assets/images/hero.jpg';
import img3 from '../assets/images/rad.jpg';

export function Home() {
  const [mentorImg, setMentorImg] = useState(img1);
  const [heroImg, setHeroImg] = useState(myNewHero);
  const [ctaImg, setCtaImg] = useState(img3);

  useEffect(() => {
    const savedMentor = localStorage.getItem('image_home_mentor');
    if (savedMentor) {
      setMentorImg(savedMentor);
    }
    const savedHero = localStorage.getItem('image_home_hero');
    if (savedHero) {
      setHeroImg(savedHero);
    }
    const savedCta = localStorage.getItem('image_home_cta');
    if (savedCta) {
      setCtaImg(savedCta);
    }
  }, []);

  return (
    <div className="bg-brand-light font-body">
      <SEO 
        title="Real-Estate Businessmentor | Harish Dabasia" 
        description="Build Real-Estate Businesses. Create Generational Wealth. Elevate Service Excellence Across Africa."
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 md:py-32 mt-16 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white leading-[1.1] mb-8">
              Build Better Businesses.<br/>
              <span className="text-[#FF6700]">Create Generational Wealth.</span><br/>
              Elevate Service Excellence Across Africa.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              Helping entrepreneurs gain clarity, grow profitable businesses, invest wisely, and create lasting impact over the next 30 years.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/447956883334" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-gold text-white font-bold text-lg px-8 py-4 rounded-[8px] hover:bg-[#E65C00] transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Discovery Call
              </a>
              <Link 
                to="/assessment" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold text-lg px-8 py-4 hover:text-brand-gold transition-all"
              >
                Take Free Business Assessment <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars Section */}
      <section className="py-12 md:py-20 md:py-32 px-4 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-6">Three Pillars of Growth</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              True prosperity requires a holistic approach. I work with leaders to master business scalability, long-term wealth, and unmatched customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:p-12">
            <div className="bg-white rounded-[8px] shadow-sm hover:shadow-md transition-shadow border border-gray-50 p-6 md:p-10">
              <div className="w-14 h-14 bg-brand-navy text-brand-gold rounded-[8px] flex items-center justify-center mb-8">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">Business Growth</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Helping entrepreneurs gain clarity of message, pricing, and purpose through The No-Grind System™.
              </p>
              <Link to="/system" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-700 transition-colors">
                Learn the System <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-[8px] shadow-sm hover:shadow-md transition-shadow border border-gray-50 p-6 md:p-10">
              <div className="w-14 h-14 bg-brand-navy text-brand-gold rounded-[8px] flex items-center justify-center mb-8">
                <Building className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">Generational Wealth</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Teaching long-term property investment as a practical, proven path to wealth creation across Africa.
              </p>
              <Link to="/bootcamp" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-700 transition-colors">
                Explore Property Strategy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-[8px] shadow-sm hover:shadow-md transition-shadow border border-gray-50 p-6 md:p-10">
              <div className="w-14 h-14 bg-brand-navy text-brand-gold rounded-[8px] flex items-center justify-center mb-8">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">Service Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Helping Rwandan and African businesses build a world-class culture of customer service to dominate their markets.
              </p>
              <Link to="/services/service-excellence" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-700 transition-colors">
                Elevate Your Standards <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Harish */}
      <section className="py-12 md:py-20 md:py-32 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-[8px] overflow-hidden shadow-2xl relative z-10">
               <img 
                 src={mentorImg} 
                 alt="Harish Dabasia" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand-gold/20 rounded-[8px] blur-3xl -z-10"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-8 leading-tight">
              One entrepreneur at a time.<br/>
              <span className="text-brand-orange">One business at a time.</span><br/>
              One million millionaires.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 35 years building businesses across three continents, Harish has seen it all. From growing a family construction business in Kenya, to building multi-million-pound portfolios in the UK, to starting fresh in Rwanda.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              He doesn't teach theory. He teaches the disciplined execution, pricing power, and clarity that actually scales income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="bg-brand-navy text-white font-bold flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] hover:bg-gray-800 transition-colors">
                Read My Story <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/podcast" className="bg-white border border-gray-200 text-brand-navy font-bold text-center px-8 py-4 rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                <PlayCircle className="w-5 h-5 text-brand-orange" />
                Listen to Podcast
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Lead Gen */}
      <section className="py-12 md:py-20 md:py-32 px-4 bg-brand-navy text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
          style={{ backgroundImage: `url(${ctaImg})` }}
        ></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-8">Stop Guessing. Start Growing.</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Discover exactly what's holding your business back. Take the free assessment and get a customized growth score in under 5 minutes.
          </p>
          <Link to="/assessment" className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white font-bold text-lg px-10 py-5 rounded-[8px] hover:bg-[#E65C00] transition-all hover:scale-105 shadow-xl">
            Start Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
