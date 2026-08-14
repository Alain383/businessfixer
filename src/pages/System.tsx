import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useState, useEffect } from 'react';
import img2 from '../assets/images/rad.jpg';
import { ArrowRight, BookOpen } from 'lucide-react';

const pillars = [
  {
    num: "01",
    title: "Foundation — Ignite: The Three Clarities",
    desc: "Most businesses don't fail because of bad markets. They fail because of bad clarity. Purpose, Message, and Pricing — fixed. Everything else becomes manageable."
  },
  {
    num: "02",
    title: "Opportunity — Instruct: Africa Is the Prize",
    desc: "1.4 billion people. The youngest population on earth. Six of the ten fastest-growing economies. Rwanda licensed commercial drone taxis before most of Europe. This is your moment."
  },
  {
    num: "03",
    title: "Money — Impact: Charge Your Worth",
    desc: "Every discount comes from profit, not revenue. A 20% discount on a 30% margin means you're working at one-third of your potential. Fix your prices. Hold them. Attract the right clients."
  },
  {
    num: "04",
    title: "Systems — Invite: Business, Not a Job",
    desc: "A business that stops when you stop is not a business — it's a job with extra paperwork. Document. Delegate. Disappear. Build income that works without your presence."
  },
  {
    num: "05",
    title: "Stories — Influence: Stories Sell™",
    desc: "Features don't sell. Transformations do. The 3-Act StoryBridge: where the client was, what changed, where they are now. Raw beats polished. Your phone is your most powerful content tool."
  },
  {
    num: "06",
    title: "Mindset — Impart: Million-Dollar Identity",
    desc: "Closing is confidence, not pressure. The 6-Step Close: Discover → Let them sell themselves → Real urgency → Disarm discounts → Handle objections → Assumptive close."
  }
];

export function System() {
  const [heroImg, setHeroImg] = useState(img2);

  useEffect(() => {
    const saved = localStorage.getItem('image_system_hero');
    if (saved) {
      setHeroImg(saved);
    }
  }, []);

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="The No-Grind System™" 
        description="Six pillars, one result: Clarity + System + Leverage = Scalable Income."
      />
      <section 
        className="bg-brand-dark text-white py-16 md:py-24 px-4 text-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.9)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 pt-16">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6">
            The No-Grind System™
          </h1>
          <h2 className="text-2xl font-bold text-brand-gold mb-6">Six Pillars. One Result.</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            The same framework Harish uses in every coaching session. Clarity + System + Leverage = Scalable Income.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-6 text-brand-dark">The 3 Clarities</h2>
            <p className="text-xl text-gray-600">The root cause of every business problem. Fix the clarity and almost everything else fixes itself.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:p-8">
            <div className="bg-brand-light p-6 md:p-10 border border-gray-200 rounded-[8px]">
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-gold">1. Purpose</h3>
              <p className="text-gray-700">Why does your business exist? What specific problem does it solve? For which specific type of person? A purpose is external — it describes a problem in the world that your business exists to solve.</p>
            </div>
            <div className="bg-brand-light p-6 md:p-10 border border-gray-200 rounded-[8px]">
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-gold">2. Message</h3>
              <p className="text-gray-700">Can you explain what you do in one sentence that a stranger would understand and remember? Your message must name the client's problem before it names your solution.</p>
            </div>
            <div className="bg-brand-light p-6 md:p-10 border border-gray-200 rounded-[8px]">
              <h3 className="font-display font-bold text-2xl mb-4 text-brand-gold">3. Pricing</h3>
              <p className="text-gray-700">Are your prices fixed, communicated upfront, and consistent regardless of who is asking? Variable pricing signals uncertainty about your own value. Fixed pricing signals confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl mb-6">The No-Grind Framework</h2>
          <p className="text-xl text-gray-600">Clarity + System + Leverage = Scalable Income.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:p-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-brand-navy text-brand-gold w-12 h-12 rounded-[8px] flex items-center justify-center font-bold text-xl shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Ignite & Instruct</h4>
                  <p className="text-gray-600">Build the foundation with the Three Clarities and recognise that Africa is the Prize.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-brand-navy text-brand-gold w-12 h-12 rounded-[8px] flex items-center justify-center font-bold text-xl shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Impact & Invite</h4>
                  <p className="text-gray-600">Charge your worth and build a business, not a job, with robust systems.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-brand-navy text-brand-gold w-12 h-12 rounded-[8px] flex items-center justify-center font-bold text-xl shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Influence & Impart</h4>
                  <p className="text-gray-600">Understand that stories sell and build a million-dollar identity mindset.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-12 border border-gray-200 shadow-xl text-center relative rounded-[8px]">
            <h3 className="font-display font-bold text-3xl mb-6 text-brand-navy">The Jerro Formula™</h3>
            <p className="text-2xl italic text-gray-700 mb-8 font-light">"I help [WHO] to [RESULT] without [PAIN]"</p>
            <p className="text-left text-gray-600 mb-4 border-l-4 border-brand-green pl-4">Example: "I help African entrepreneurs to build scalable income without grinding 16 hours a day."</p>
            <p className="text-left text-gray-600 border-l-4 border-brand-gold pl-4">Example: "I help business owners clear their containers from the port in 2 days... allowing them to go to market 18 days earlier."</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="bg-white p-5 md:p-8 md:p-6 md:p-12 shadow-sm border-l-4 border-brand-green flex gap-6 md:gap-6 md:p-10 rounded-[8px]">
                <div className="font-display font-bold text-4xl md:text-6xl text-gray-200 shrink-0 mt-1">
                  {pillar.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-brand-dark">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-brand-light border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-4xl mb-6 text-brand-dark">S.T.A.Y. & PAY Positioning</h2>
            <p className="text-xl text-gray-600">The 4-part framework to command premium prices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:p-8">
            <div className="bg-white p-5 md:p-8 border border-gray-200 shadow-sm text-center rounded-[8px]">
              <div className="text-brand-gold font-bold text-5xl mb-4">S</div>
              <h3 className="font-bold text-xl mb-2 text-brand-dark">Subject</h3>
              <p className="text-gray-600">What is the exact topic or problem?</p>
            </div>
            <div className="bg-white p-5 md:p-8 border border-gray-200 shadow-sm text-center rounded-[8px]">
              <div className="text-brand-gold font-bold text-5xl mb-4">T</div>
              <h3 className="font-bold text-xl mb-2 text-brand-dark">Timely</h3>
              <p className="text-gray-600">Why must they act right now?</p>
            </div>
            <div className="bg-white p-5 md:p-8 border border-gray-200 shadow-sm text-center rounded-[8px]">
              <div className="text-brand-gold font-bold text-5xl mb-4">A</div>
              <h3 className="font-bold text-xl mb-2 text-brand-dark">Announce</h3>
              <p className="text-gray-600">State your value and the transformation.</p>
            </div>
            <div className="bg-white p-5 md:p-8 border border-gray-200 shadow-sm text-center rounded-[8px]">
              <div className="text-brand-gold font-bold text-5xl mb-4">Y</div>
              <h3 className="font-bold text-xl mb-2 text-brand-dark">Why You</h3>
              <p className="text-gray-600">Why are you the only logical choice?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl mb-6 text-brand-gold">The Pipeline Principle</h2>
          <p className="text-2xl font-light italic mb-8">"Always be filling — never chasing."</p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Build a self-filling pipeline that works while you sleep. Build a pipeline of ten to fifteen waiting jobs. When you have more work than you can handle, your entire energy changes. You stop apologising for your prices.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white border-t border-gray-100 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-gold p-5 md:p-8 md:p-6 md:p-12 mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark">
              Clarity + System + Leverage = Scalable Income
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/bootcamp" className="bg-brand-dark text-white font-bold py-4 px-8 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              Learn This System in Person — Book the Bootcamp <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/book" className="bg-brand-green text-white font-bold py-4 px-8 hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" /> Get the Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
