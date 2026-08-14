import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import advisoryImg from '../assets/images/gg.jpg';
import { Calendar, Briefcase } from 'lucide-react';

export function Advisory() {
  const [heroImg, setHeroImg] = useState(advisoryImg);

  useEffect(() => {
    const saved = localStorage.getItem('image_advisory_hero');
    if (saved) {
      setHeroImg(saved);
    }
  }, []);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Executive Advisory | Harish Dabasia" 
        description="Strategic Thinking for Leaders Who Want to Build Exceptional Businesses"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-dark pt-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(15, 23, 42, 0.3) 100%), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Strategic Thinking for Leaders Who Want to Build Exceptional Businesses
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-light">
              Helping founders, CEOs, and business owners make better decisions, solve complex challenges, and create long-term value.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-8 text-center hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Confidential Strategy Session
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-8 text-center hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5" />
                Request an Executive Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl mb-8 text-brand-dark">Executive Leadership Is a Lonely Journey</h2>
          
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p className="text-xl mb-6">As your business grows, the decisions become bigger.</p>
            <p className="text-xl mb-6">The risks become greater.</p>
            <p className="text-xl mb-12">The margin for error becomes smaller.</p>
            
            <div className="bg-brand-light p-6 md:p-10 border-l-4 border-brand-gold mb-12">
              <p className="text-2xl text-gray-800 italic mb-0">
                Most leaders don't need another consultant. They need a trusted strategic advisor—someone who challenges assumptions, provides an independent perspective, and helps them make better decisions.
              </p>
            </div>
            
            <p className="font-bold text-2xl text-brand-navy">That is where I come in.</p>
          </div>
        </div>
      </section>

      {/* What Is Executive Advisory? */}
      <section className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark">What Is Executive Advisory?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Executive Advisory is a confidential, one-to-one strategic partnership designed for leaders who want to think more clearly, lead more effectively, and grow more sustainably.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Rather than offering generic advice, I work alongside you to:
            </p>
            
            <ul className="space-y-4">
              {[
                'Clarify strategic priorities',
                'Identify growth opportunities',
                'Solve complex business challenges',
                'Improve leadership effectiveness',
                'Strengthen decision-making',
                'Build scalable systems',
                'Increase profitability',
                'Prepare your business for long-term success'
              ].map(item => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-brand-green font-bold shrink-0 mt-1">✓</span>
                  <span className="font-semibold text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-dark">Who This Is For</h2>
            <div className="bg-white p-5 md:p-8 border border-gray-200 shadow-sm rounded-[8px]">
              <p className="text-gray-600 mb-6">Executive Advisory is designed for:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'CEOs',
                  'Founders',
                  'Entrepreneurs',
                  'Family Business Leaders',
                  'Managing Directors',
                  'Business Partners',
                  'Investors',
                  'Executive Teams'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 bg-gray-50 p-3 border border-gray-100 rounded-[8px]">
                    <div className="bg-brand-navy text-brand-gold w-6 h-6 rounded-[8px] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Areas of Strategic Support */}
      <section className="py-16 md:py-24 px-4 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-brand-gold">Areas of Strategic Support</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-8">
            <div className="bg-brand-dark p-5 md:p-8 border border-gray-700 rounded-[8px]">
              <h3 className="font-bold text-xl mb-4 text-brand-gold">Business Growth Strategy</h3>
              <p className="text-gray-400 leading-relaxed">Develop a clear roadmap for sustainable growth while avoiding costly mistakes.</p>
            </div>
            <div className="bg-brand-dark p-5 md:p-8 border border-gray-700 rounded-[8px]">
              <h3 className="font-bold text-xl mb-4 text-brand-gold">Leadership & Decision Making</h3>
              <p className="text-gray-400 leading-relaxed">Gain an experienced, independent perspective on high-impact business decisions.</p>
            </div>
            <div className="bg-brand-dark p-5 md:p-8 border border-gray-700 rounded-[8px]">
              <h3 className="font-bold text-xl mb-4 text-brand-gold">Marketing & Positioning</h3>
              <p className="text-gray-400 leading-relaxed">Clarify your message, strengthen your market position, and create a compelling value proposition.</p>
            </div>
            <div className="bg-brand-dark p-5 md:p-8 border border-gray-700 rounded-[8px]">
              <h3 className="font-bold text-xl mb-4 text-brand-gold">Scaling & Systems</h3>
              <p className="text-gray-400 leading-relaxed">Build processes and systems that allow your business to grow without relying on the founder for every decision.</p>
            </div>
            <div className="bg-brand-dark p-5 md:p-8 border border-gray-700 rounded-[8px]">
              <h3 className="font-bold text-xl mb-4 text-brand-gold">Customer Experience & Service Excellence</h3>
              <p className="text-gray-400 leading-relaxed">Transform customer service into a competitive advantage that builds loyalty and long-term value.</p>
            </div>
            <div className="bg-brand-dark p-5 md:p-8 border border-gray-700 rounded-[8px]">
              <h3 className="font-bold text-xl mb-4 text-brand-gold">Property & Long-Term Wealth Strategy</h3>
              <p className="text-gray-400 leading-relaxed">Explore how strategic property investment can support business growth and contribute to building generational wealth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect & Philosophy */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark">What You Can Expect</h2>
            <p className="text-gray-600 mb-8">Every engagement is tailored to your business and leadership challenges.</p>
            <p className="font-bold text-gray-800 mb-6">Typical areas include:</p>
            <div className="flex flex-wrap gap-3">
              {[
                'Strategic planning', 'Business model review', 'Growth opportunities', 'Leadership coaching',
                'Accountability', 'Pricing strategy', 'Marketing clarity', 'Customer experience',
                'Operational improvement', 'Long-term business planning'
              ].map(item => (
                <span key={item} className="bg-brand-light border border-gray-200 px-5 py-2 font-medium text-gray-700 rounded-[8px] text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark">Why Work With Harish Dabasia?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Harish Dabasia brings over 35 years of international business experience across Africa, Europe, and multiple industries.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Having built businesses, navigated economic downturns, overcome major setbacks, and started again from the ground up, he understands the realities of entrepreneurship—not just the theory.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              His advisory approach combines practical experience with strategic thinking to help leaders make confident decisions and build businesses that endure.
            </p>
            
            <div className="bg-gray-50 p-5 md:p-8 border-l-4 border-brand-green">
              <h3 className="font-bold text-xl mb-4 text-brand-dark">My Advisory Philosophy</h3>
              <ul className="space-y-3 text-gray-700">
                <li><span className="font-semibold">I don't make decisions for you.</span> I help you make better decisions.</li>
                <li><span className="font-semibold">I don't provide quick fixes.</span> I help you build lasting solutions.</li>
              </ul>
              <p className="mt-4 text-gray-600 italic">
                "My role is to ask the right questions, challenge assumptions, and provide a trusted perspective so you can lead with greater confidence and clarity."
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Engagement Options & FAQ */}
      <section className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-dark">Engagement Options</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-[8px]">
                <h3 className="font-bold text-xl mb-2 text-brand-navy">Executive Strategy Session</h3>
                <p className="text-gray-600">A focused session to address a specific business challenge or opportunity.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-[8px]">
                <h3 className="font-bold text-xl mb-2 text-brand-navy">Monthly Advisory Partnership</h3>
                <p className="text-gray-600">Ongoing strategic support with regular meetings, accountability, and guidance.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-[8px]">
                <h3 className="font-bold text-xl mb-2 text-brand-navy">Leadership Team Facilitation</h3>
                <p className="text-gray-600">Facilitated workshops and strategy sessions for executive teams and boards.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-[8px]">
                <h3 className="font-bold text-xl mb-2 text-brand-navy">Board & Advisory Support</h3>
                <p className="text-gray-600">Independent strategic input for businesses seeking experienced external guidance.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-dark">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <details className="group border border-gray-200 bg-white p-6 cursor-pointer shadow-sm">
                <summary className="font-bold text-lg flex justify-between items-center outline-none">
                  Do you manage my business?
                  <span className="text-brand-gold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="pt-4 text-gray-600 leading-relaxed">
                  No. I act as a strategic advisor, helping you evaluate options, strengthen your thinking, and make informed decisions.
                </div>
              </details>
              <details className="group border border-gray-200 bg-white p-6 cursor-pointer shadow-sm">
                <summary className="font-bold text-lg flex justify-between items-center outline-none">
                  Is this coaching or consulting?
                  <span className="text-brand-gold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="pt-4 text-gray-600 leading-relaxed">
                  Executive Advisory combines elements of mentoring, coaching, and strategic consulting. The focus is on helping you become a stronger leader while building a stronger business.
                </div>
              </details>
              <details className="group border border-gray-200 bg-white p-6 cursor-pointer shadow-sm">
                <summary className="font-bold text-lg flex justify-between items-center outline-none">
                  Who benefits most?
                  <span className="text-brand-gold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="pt-4 text-gray-600 leading-relaxed">
                  Business owners, founders, CEOs, and executive teams committed to sustainable growth and long-term success.
                </div>
              </details>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-6 text-white">Every Great Leader Needs a Trusted Advisor</h2>
          <p className="text-xl text-gray-300 mb-12">
            The higher you climb, the more valuable an independent perspective becomes. If you're ready to strengthen your leadership, make better decisions, and build a business that creates lasting impact, let's start the conversation.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-10 hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book a Confidential Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
