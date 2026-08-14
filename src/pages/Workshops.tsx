import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import workshopsImg from '../assets/images/workshop.jpg';
import { Calendar, Users, Briefcase } from 'lucide-react';

export function Workshops() {
  const [heroImg, setHeroImg] = useState(workshopsImg);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Workshops | Harish Dabasia" 
        description="Practical workshops that help entrepreneurs build stronger businesses, create long-term wealth, and deliver world-class customer experiences."
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
              Learn. Apply. Transform.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-light">
              Practical workshops that help entrepreneurs build stronger businesses, create long-term wealth, and deliver world-class customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-8 text-center hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Workshop
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-8 text-center hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Enquire About Corporate Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl mb-6 text-brand-dark">Why Attend a Harish Dabasia Workshop?</h2>
          <p className="text-xl text-gray-600 mb-8 italic">
            "Knowledge alone doesn't grow a business—implementation does."
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My workshops are designed to give entrepreneurs, business leaders, and organizations practical strategies they can apply immediately. Every session combines real-world experience with actionable frameworks to help you achieve measurable results.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're launching a startup, scaling an SME, investing in property, or building a service-driven culture, these workshops provide the clarity and confidence to move forward.
          </p>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-brand-dark">Workshop Categories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:p-8">
            {/* Category 1 */}
            <div className="bg-white p-6 md:p-6 md:p-10 border border-gray-200 shadow-sm flex flex-col h-full rounded-[8px]">
              <div className="text-brand-gold text-4xl mb-6">🚀</div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">Business Growth Workshop</h3>
              <p className="text-gray-600 mb-6">Build a business that grows with purpose, systems, and profitability.</p>
              
              <div className="mb-6 flex-grow">
                <strong className="block text-gray-800 mb-3">Topics include:</strong>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> The No-Grind System™</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> The 3 Clarities: Purpose, Message & Pricing</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Marketing that attracts ideal customers</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Sales and growth strategies</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Leadership and decision-making</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Building scalable business systems</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 border-l-4 border-brand-gold">
                <strong className="text-gray-800">Ideal for:</strong> Entrepreneurs, SMEs, Startups, Business Owners
              </div>
            </div>

            {/* Category 2 */}
            <div className="bg-white p-6 md:p-6 md:p-10 border border-gray-200 shadow-sm flex flex-col h-full rounded-[8px]">
              <div className="text-brand-gold text-4xl mb-6">🏢</div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">Real Estate Investment Workshop</h3>
              <p className="text-gray-600 mb-6">Learn practical strategies for building long-term wealth through property investment.</p>
              
              <div className="mb-6 flex-grow">
                <strong className="block text-gray-800 mb-3">Topics include:</strong>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Property investment fundamentals</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Identifying profitable opportunities</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Risk management</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Building a property portfolio</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Creating generational wealth</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 border-l-4 border-brand-gold">
                <strong className="text-gray-800">Ideal for:</strong> First-time investors, Professionals, Entrepreneurs, Families
              </div>
            </div>

            {/* Category 3 */}
            <div className="bg-white p-6 md:p-6 md:p-10 border border-gray-200 shadow-sm flex flex-col h-full rounded-[8px]">
              <div className="text-brand-gold text-4xl mb-6">⭐</div>
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">Service Excellence Workshop</h3>
              <p className="text-gray-600 mb-6">Create a customer experience that differentiates your business.</p>
              
              <div className="mb-6 flex-grow">
                <strong className="block text-gray-800 mb-3">Topics include:</strong>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Building a service-first culture</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Customer experience strategy</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Team engagement</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Leadership through service</li>
                  <li className="flex gap-2"><span className="text-brand-green">✓</span> Delivering consistent excellence</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 border-l-4 border-brand-gold">
                <strong className="text-gray-800">Ideal for:</strong> Hotels, Tourism, Retail, Healthcare, Government, Corporate Teams
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Formats, Who Should Attend, What You'll Gain */}
      <section className="py-16 md:py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:p-6 md:p-12">
          
          <div>
            <h3 className="font-display font-bold text-2xl mb-6 text-brand-dark">Workshop Formats</h3>
            <p className="text-gray-600 mb-6">Choose the format that best suits your team or organization.</p>
            <ul className="space-y-3">
              {['Half-Day Workshops', 'Full-Day Masterclasses', 'Weekend Bootcamps', 'Corporate Training', 'Executive Leadership Sessions', 'Conference Keynotes'].map(item => (
                <li key={item} className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <span className="text-brand-gold font-bold">•</span>
                  <span className="font-semibold text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl mb-6 text-brand-dark">Who Should Attend?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Entrepreneurs', 'Business Owners', 'Corporate Leaders', 'Managers', 'Investors', 'Startups', 'SMEs', 'Government Organizations', 'Universities', 'Professional Associations'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="bg-brand-dark text-brand-gold w-5 h-5 rounded-[8px] flex items-center justify-center font-bold text-xs shrink-0">✓</div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl mb-6 text-brand-dark">What You'll Gain</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-brand-green font-bold shrink-0">→</span> Gain greater business clarity</li>
              <li className="flex items-start gap-3"><span className="text-brand-green font-bold shrink-0">→</span> Improve decision-making</li>
              <li className="flex items-start gap-3"><span className="text-brand-green font-bold shrink-0">→</span> Strengthen marketing strategies</li>
              <li className="flex items-start gap-3"><span className="text-brand-green font-bold shrink-0">→</span> Build better systems</li>
              <li className="flex items-start gap-3"><span className="text-brand-green font-bold shrink-0">→</span> Increase confidence in leadership</li>
              <li className="flex items-start gap-3"><span className="text-brand-green font-bold shrink-0">→</span> Develop long-term growth plans</li>
              <li className="flex items-start gap-3"><span className="text-brand-green font-bold shrink-0">→</span> Learn practical tools they can apply immediately</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Corporate & Upcoming */}
      <section className="py-16 md:py-24 px-4 bg-brand-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-brand-navy text-white p-6 md:p-6 md:p-12">
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-gold">Corporate Workshops</h2>
            <p className="text-xl mb-6 text-gray-300">Looking to develop your team?</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Customized workshops can be delivered for organizations, companies, universities, and government institutions across Rwanda and Africa.
            </p>
            <p className="text-gray-300 leading-relaxed mb-10">
              Each program is tailored to your objectives and industry.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white font-bold text-lg py-4 px-8 hover:bg-[#E65C00] transition-colors">
              <Briefcase className="w-5 h-5" /> Request a Corporate Workshop
            </Link>
          </div>

          <div className="bg-white p-6 md:p-6 md:p-12 border border-gray-200 shadow-sm flex flex-col justify-center rounded-[8px]">
            <h2 className="font-display font-bold text-3xl mb-6 text-brand-dark">Upcoming Events</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Upcoming public workshops and bootcamps will be announced here.
            </p>
            <div className="bg-brand-light p-6 border-l-4 border-brand-green">
              <p className="font-bold text-brand-dark flex gap-3 items-start">
                <span className="text-xl">👉</span> 
                Join the Early Access List to receive priority registration and exclusive offers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-6 text-white">Ready to Invest in Your Growth?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Whether you're an entrepreneur, a leadership team, or an organization, these workshops are designed to create lasting impact—not just inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-brand-gold text-white font-bold text-lg py-4 px-10 hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book a Workshop
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white font-bold text-lg py-4 px-10 hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Request Corporate Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
