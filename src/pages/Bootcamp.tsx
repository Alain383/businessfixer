import { UrgencyBanner } from '../components/UrgencyBanner';
import { SEO } from '../components/SEO';
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import img4 from '../assets/images/meet.jpg';

export function Bootcamp() {
  const [heroImg, setHeroImg] = useState(img4);

  useEffect(() => {
    const saved = localStorage.getItem('image_bootcamp_hero');
    if (saved) {
      setHeroImg(saved);
    }
  }, []);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Grind to Millions Intensive — Enrol Now" 
        description="1 day. Real strategies. Zero fluff. Limited spots — early-bird pricing available now."
      />
      <UrgencyBanner />
      
      {/* Hero Section */}
      <section 
        className="bg-brand-dark text-white pt-24 pb-24 px-4 text-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.9)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 pt-16">
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6 text-brand-gold">
            Grind to Millions
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
            The Blueprint for African Entrepreneurs to Build Wealth
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            1 Full Day Intensive. Real strategies. Zero fluff. Build a business that grows even when you're present with your family — not just when you're at your desk.
          </p>
          <div className="bg-gray-800 p-6 inline-block mb-8 border-t-4 border-brand-gold">
            <span className="text-gray-400 line-through text-xl mr-4">$497</span>
            <span className="text-brand-gold font-bold text-4xl">$97</span>
            <span className="text-xl ml-4 font-semibold text-gray-300">Value</span>
          </div>
          <p className="text-brand-gold font-semibold">
            * Join 500+ African Entrepreneurs Already Transforming Their Business.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-navy border-b-4 border-brand-gold">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-5 md:p-8 text-center divide-x divide-gray-700">
          <div>
            <div className="text-brand-gold font-bold text-4xl mb-2">12</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider font-semibold">Modules</div>
          </div>
          <div>
            <div className="text-brand-gold font-bold text-4xl mb-2">1</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider font-semibold">Days</div>
          </div>
          <div>
            <div className="text-brand-gold font-bold text-4xl mb-2">500+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider font-semibold">Students</div>
          </div>
          <div className="flex flex-col items-center justify-center">
             <div className="text-brand-green font-bold text-2xl">9:00 AM - 6:00 PM</div>
             <div className="text-gray-300 text-sm uppercase tracking-wider mt-1">Kigali, Rwanda</div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Details */}
          <div>
            <h3 className="font-display font-bold text-3xl mb-8">What You Get</h3>
            <ul className="space-y-6 mb-12">
              <li className="flex gap-4">
                <span className="bg-brand-green text-white w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 font-bold">✓</span>
                <div>
                  <strong className="block text-xl mb-1 text-brand-dark">Free Book Included</strong>
                  <p className="text-gray-600">Get a physical copy of "From Grind to Million" when you attend.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-brand-green text-white w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 font-bold">✓</span>
                <div>
                  <strong className="block text-xl mb-1 text-brand-dark">Business Growth Frameworks</strong>
                  <p className="text-gray-600">The 3 Clarities, The Jerro Formula, and strategies to build leverage.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-brand-green text-white w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 font-bold">✓</span>
                <div>
                  <strong className="block text-xl mb-1 text-brand-dark">Sales & Marketing Systems</strong>
                  <p className="text-gray-600">The 6-Step Close and the 3-Act StoryBridge to capture your market.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-brand-green text-white w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 font-bold">✓</span>
                <div>
                  <strong className="block text-xl mb-1 text-brand-dark">Scale to Millions Strategy</strong>
                  <p className="text-gray-600">Build a business, not a job. Learn how to delegate and systemize.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-brand-green text-white w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 font-bold">✓</span>
                <div>
                  <strong className="block text-xl mb-1 text-brand-dark">Exit Strategy Blueprint & 90-Day Plan</strong>
                  <p className="text-gray-600">Create a 90-Day transformation plan you can start acting on tomorrow.</p>
                </div>
              </li>
            </ul>

            <div className="bg-gray-100 p-5 md:p-8 mb-12 border border-gray-200 rounded-[8px]">
              <h4 className="font-bold text-xl mb-6">Programme Highlights</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-[8px]">
                    <span className="font-semibold text-gray-700">Live Training</span>
                    <span className="text-brand-dark font-bold">In-person & online</span>
                 </div>
                 <div className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-[8px]">
                    <span className="font-semibold text-gray-700">Full Workbook</span>
                    <span className="text-brand-dark font-bold">38-page workbook</span>
                 </div>
                 <div className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-[8px]">
                    <span className="font-semibold text-gray-700">Mastermind</span>
                    <span className="text-brand-dark font-bold">Group coaching</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div>
            <div className="bg-white border border-gray-200 p-5 md:p-8 shadow-xl sticky top-28 rounded-[8px]">
              <h3 className="font-display font-bold text-3xl mb-6">Enrol Now</h3>
              <p className="text-gray-600 mb-8">Secure your spot for the next Kigali intake. Spaces are strictly limited to ensure personal attention.</p>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input type="text" required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input type="email" required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input type="tel" required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Current Business Status</label>
                  <select required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none">
                    <option value="">Select...</option>
                    <option value="startup">Starting Out (0-1 Years)</option>
                    <option value="growth">Growing (1-3 Years)</option>
                    <option value="scale">Scaling (3+ Years)</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-brand-gold text-white font-bold text-xl py-4 hover:bg-[#E65C00] transition-colors mt-4 flex items-center justify-center gap-2 rounded-[8px]">
                  <Check className="w-5 h-5" /> Secure My Spot — $97
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-brand-navy text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="group border border-gray-700 bg-gray-900 p-6 cursor-pointer">
              <summary className="font-bold text-xl flex justify-between items-center outline-none">
                Is this just another motivational seminar?
                <span className="text-brand-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="pt-4 text-gray-300 leading-relaxed">
                No. Motivation wears off by Tuesday. This is an implementation intensive. You will leave with a fixed pricing strategy, a written sales pitch, and a documented system to follow.
              </div>
            </details>
            <details className="group border border-gray-700 bg-gray-900 p-6 cursor-pointer">
              <summary className="font-bold text-xl flex justify-between items-center outline-none">
                Do I need an existing business to attend?
                <span className="text-brand-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="pt-4 text-gray-300 leading-relaxed">
                You need a skill or a service you want to monetise. We will teach you how to package it, price it, and sell it without begging for clients.
              </div>
            </details>
            <details className="group border border-gray-700 bg-gray-900 p-6 cursor-pointer">
              <summary className="font-bold text-xl flex justify-between items-center outline-none">
                What happens after the intensive?
                <span className="text-brand-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="pt-4 text-gray-300 leading-relaxed">
                You get the 90-Day Action Plan, the full workbook, and access to the B2A Mastermind group for continued accountability and support.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
