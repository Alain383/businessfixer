import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Building2, Sun, Share2, Shield, ArrowRight, Calendar } from 'lucide-react';
import myNewHero from '../assets/images/dabasia.jpg';

export function About() {
  const [heroImg, setHeroImg] = useState(myNewHero);

  useEffect(() => {
    const saved = localStorage.getItem('image_about_hero');
    if (saved) {
      setHeroImg(saved);
    }
  }, []);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="About Harish Dabasia — Business Fixer" 
        description="35 years building businesses across three continents. Now on a mission to create 1,000,000 African millionaires."
      />
      
      {/* Hero Image Section */}
      <div className="w-full h-[40vh] md:h-[60vh] bg-gray-200 overflow-hidden">
        <img 
          src={heroImg} 
          alt="Harish Dabasia" 
          className="w-full h-full object-cover"
        />
      </div>

      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6">
            Harish Dabasia — <span className="text-brand-green">Business Fixer</span>
          </h1>
          <h2 className="font-display font-bold text-3xl mb-12 text-brand-dark">Building Businesses. Creating Wealth. Elevating Service.</h2>
          
          <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
            <p className="text-xl font-semibold mb-8 text-brand-dark">
              Harish Dabasia is a Business Growth Mentor, entrepreneur, investor, and lifelong builder with more than 35 years of business experience across three continents.
            </p>
            <p className="mb-6">
              His journey has taken him from helping grow a family construction business in Kenya, to building successful businesses in the UK, experiencing major financial setbacks, and starting again from the ground up in Rwanda.
            </p>
            <p className="mb-12">
              Today, his mission is larger than building businesses. His mission is to help entrepreneurs build profitable companies, help families create generational wealth through property, and contribute to making Africa a continent known for world-class service and opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-brand-light border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-6">Mission</h2>
          <p className="text-2xl font-bold text-brand-green mb-6">To help create one million millionaires across Africa over the next 30 years.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-16">
            This mission isn't about overnight success. It's about equipping entrepreneurs, investors, and leaders with the mindset, systems, and discipline to build lasting prosperity that can be passed on to future generations.
          </p>

          <h2 className="font-display font-bold text-4xl mb-10">How I Plan to Do It</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">1. Fix Why Most Business Marketing Fails</h3>
              <p className="text-lg text-gray-700 mb-4">
                Most businesses don't fail because they have a bad product. They fail because customers don't clearly understand why they should buy. I help business owners gain three essential clarities:
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 mb-4">
                <li><strong>Clarity of Message</strong> – Say the right thing to the right audience.</li>
                <li><strong>Clarity of Price</strong> – Price with confidence and profitability.</li>
                <li><strong>Clarity of Purpose</strong> – Build a business with direction and meaning.</li>
              </ul>
              <p className="text-lg text-gray-700">
                When these three clarities align, marketing becomes simpler, sales improve, and businesses grow sustainably.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">2. Build Generational Wealth Through Real Estate</h3>
              <p className="text-lg text-gray-700 mb-4">
                Africa's financial markets are still developing, limiting many traditional wealth-building opportunities. For millions of African families, <strong>real estate remains one of the most practical and reliable paths to building long-term, generational wealth.</strong>
              </p>
              <p className="text-lg text-gray-700">
                I teach people how to think strategically about property—not as speculation, but as a long-term wealth-building asset.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">3. Help Rwanda Become a Global Benchmark for Service Excellence</h3>
              <p className="text-lg text-gray-700 mb-4">
                Rwanda has achieved remarkable progress and continues to inspire Africa. I believe the country's next competitive advantage is creating a world-class <strong>service excellence culture</strong>.
              </p>
              <p className="text-lg text-gray-700">
                By helping businesses, entrepreneurs, and organizations consistently raise service standards, we can improve customer experiences, strengthen businesses, attract investment, and create a stronger national brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-16 text-center">The Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-8">
            <div className="bg-white p-6 md:p-10 shadow-sm border border-gray-100 rounded-[8px]">
              <Building2 className="w-12 h-12 text-brand-blue mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4">Property & Construction</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Elevate Properties, Elevate Builders, Dabasia Property Investments.</strong> Decades of building real assets across the UK. Managing full-cycle developments, scaling construction operations, and retaining high-yield property portfolios through strategic investment.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-10 shadow-sm border border-gray-100 rounded-[8px]">
              <Sun className="w-12 h-12 text-brand-gold mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4">Renewable Energy</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>ActOn Solar Power.</strong> Named the UK's most connected person in the solar energy sector. Pioneered large-scale renewable rollouts by building robust supply chains and high-leverage sales systems.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-10 shadow-sm border border-gray-100 rounded-[8px]">
              <Share2 className="w-12 h-12 text-brand-green mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4">Digital Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Act On Social Media.</strong> Done-for-you services that transformed how an entire industry markets itself. Moving businesses away from competing on price and toward competing on authority.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-10 shadow-sm border border-gray-100 rounded-[8px]">
              <Shield className="w-12 h-12 text-brand-red mb-6" />
              <h3 className="font-display font-bold text-2xl mb-4">Consumer Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Manage My Builder.</strong> A rescue service for victims of cowboy builders. A prime example of business with purpose—solving a massive market problem with systemic leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-8">No Magic Wand</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I don't promise overnight riches. I don't sell "get rich quick" schemes.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Everything I teach requires consistent learning, disciplined execution, and patience over many years. Sustainable success is built one decision, one customer, one investment, and one improvement at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/system" className="bg-brand-green text-white font-bold py-4 px-8 hover:bg-green-700 transition-colors flex justify-center items-center gap-2">
              Explore the No-Grind System <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 hover:bg-white hover:text-brand-dark transition-colors flex justify-center items-center gap-2">
              <Calendar className="w-5 h-5" /> Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
