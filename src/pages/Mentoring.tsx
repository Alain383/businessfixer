import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mentoringImg from '../assets/images/hero.jpg';
import { Calendar, ArrowRight } from 'lucide-react';

export function Mentoring() {
  const [heroImg, setHeroImg] = useState(mentoringImg);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Strategic Business Mentoring | Harish Dabasia" 
        description="Stop Working Harder. Start Building a Business That Works Without You."
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-dark pt-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(15, 23, 42, 0.3) 100%), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Stop Working Harder. Start Building a Business That Works Without You.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-light">
              Most businesses don't fail because they lack passion—they fail because they lack clarity, systems, and strategic direction. I help ambitious business owners transform confusion into clarity, build profitable systems, and create businesses that grow consistently without constant firefighting.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-8 text-center hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </Link>
              <Link to="/assessment" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-8 text-center hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
                Take the Business Assessment <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl mb-6 text-brand-dark">The Challenge: Why Most Businesses Stay Stuck</h2>
          <p className="text-xl text-gray-600 mb-12">Most business owners work incredibly hard. Yet they experience:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-4">
              <div className="bg-brand-green text-white rounded-[8px] p-2 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span className="text-lg font-semibold text-gray-800">Inconsistent sales</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-green text-white rounded-[8px] p-2 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span className="text-lg font-semibold text-gray-800">Confusing marketing</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-green text-white rounded-[8px] p-2 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span className="text-lg font-semibold text-gray-800">Pricing that doesn't reflect value</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-green text-white rounded-[8px] p-2 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span className="text-lg font-semibold text-gray-800">Constant operational problems</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-green text-white rounded-[8px] p-2 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span className="text-lg font-semibold text-gray-800">Long hours & slow growth</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-green text-white rounded-[8px] p-2 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
              <span className="text-lg font-semibold text-gray-800">No clear strategy</span>
            </div>
          </div>
          
          <div className="bg-brand-light p-5 md:p-8 border-l-4 border-brand-gold italic text-2xl text-gray-700">
            "Working harder rarely fixes these problems. Working smarter—with the right systems—does."
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-16 md:py-24 px-4 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-brand-gold">My Approach: Strategic Business Mentoring</h2>
            <p className="text-xl text-gray-300">
              I don't provide generic advice. I work alongside business owners to identify the biggest obstacles preventing growth and help implement practical solutions. Every mentoring engagement focuses on three core areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:p-8">
            <div className="bg-brand-dark p-6 md:p-10 border border-gray-700 rounded-[8px]">
              <div className="text-brand-gold text-5xl font-bold mb-6 opacity-30">01</div>
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Clarity of Purpose</h3>
              <p className="text-gray-400 mb-6">Build a business with direction. Know exactly:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Why your business exists</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Who you serve</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Where you're heading</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> How success is measured</li>
              </ul>
            </div>
            
            <div className="bg-brand-dark p-6 md:p-10 border border-gray-700 rounded-[8px]">
              <div className="text-brand-gold text-5xl font-bold mb-6 opacity-30">02</div>
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Clarity of Message</h3>
              <p className="text-gray-400 mb-6">If customers don't understand your value… they won't buy. Together we'll create marketing that communicates:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> What you do</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Why it matters</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Why you're different</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Why customers should trust you</li>
              </ul>
            </div>
            
            <div className="bg-brand-dark p-6 md:p-10 border border-gray-700 rounded-[8px]">
              <div className="text-brand-gold text-5xl font-bold mb-6 opacity-30">03</div>
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Clarity of Pricing</h3>
              <p className="text-gray-400 mb-6">Many businesses undercharge. Others overcomplicate pricing. We'll develop pricing strategies that:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Increase profitability</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Improve customer confidence</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Reflect your real value</li>
                <li className="flex items-start gap-3"><span className="text-brand-green">✓</span> Support sustainable growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Work & Who it's for */}
      <section className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-dark">What We Work On Together</h2>
            <div className="flex flex-wrap gap-3">
              {['Business Strategy', 'Marketing', 'Sales Systems', 'Business Model', 'Leadership', 'Customer Experience', 'Scaling', 'Operational Systems', 'Profit Improvement', 'Growth Planning', 'Decision Making', 'Accountability'].map(item => (
                <span key={item} className="bg-white border border-gray-200 px-6 py-3 font-semibold text-gray-700 rounded-[8px] shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-dark">Who This Is For</h2>
            <p className="text-gray-600 mb-6">This mentoring is ideal for:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Business owners', 'Entrepreneurs', 'SMEs', 'Family businesses', 'Startups ready to scale', 'Professional service firms', 'Companies preparing for growth'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-brand-dark text-brand-gold w-6 h-6 rounded-[8px] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Results & Philosophy */}
      <section className="py-16 md:py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-brand-light p-6 md:p-12 border border-gray-200 rounded-[8px]">
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-dark">Results You Can Expect</h2>
            <ul className="space-y-4">
              {[
                'Greater business clarity', 'Higher confidence', 'Improved profitability', 'Better decision making',
                'Stronger leadership', 'More efficient systems', 'Consistent growth', 'Less stress',
                'Better customer experience', 'Long-term sustainability'
              ].map(result => (
                <li key={result} className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <span className="text-brand-gold font-bold text-xl">•</span>
                  <span className="font-bold text-gray-700 text-lg">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-dark">My Mentoring Philosophy</h2>
            <div className="prose prose-lg text-gray-600">
              <p>I don't believe in shortcuts.</p>
              <p>I don't believe in overnight success.</p>
              <p>Real business growth comes from:</p>
              <ul className="font-bold text-gray-800 my-6 space-y-2">
                <li>Better thinking</li>
                <li>Better systems</li>
                <li>Better execution</li>
                <li>Consistent improvement</li>
              </ul>
              <p className="text-2xl font-bold text-brand-green italic mt-8 border-l-4 border-brand-green pl-6">
                "Success is built one decision at a time."
              </p>
            </div>
            
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark mt-16">Why Work With Harish Dabasia?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Over three decades of business experience across Africa, Europe, and international markets.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Having built businesses, faced setbacks, rebuilt from scratch, and mentored entrepreneurs, I understand both the opportunities and challenges business owners face.
            </p>
            <p className="text-lg font-bold text-brand-dark bg-brand-light p-6 border-l-4 border-brand-gold">
              My role isn't to run your business. My role is to help you think differently, make better decisions, and build a stronger business.
            </p>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-6 text-white">Ready to Build a Better Business?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Whether you're launching your first company or scaling an established business, strategic mentoring can help you move forward with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-10 hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Your Strategy Session
            </Link>
            <Link to="/assessment" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-10 hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
              Take the Free Business Assessment <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
