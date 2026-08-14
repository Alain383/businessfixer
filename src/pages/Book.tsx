import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Check, ShoppingCart } from 'lucide-react';
import img2 from '../assets/images/Free_Book_Mockup_2.png';

const chapters = [
  "The Grind Trap — Why Hard Work Alone Never Creates Wealth",
  "The Three Clarities — The Root Cause of Every Business Problem",
  "Stop Selling, Start Solving — Lead With the Problem",
  "The Discount Trap — Every Discount Kills Your Business Slowly",
  "Charge What You Are Worth — Premium Pricing Is a Strategy",
  "Close Without Chasing — The Six-Step System to Win Clients",
  "Stories Sell, Features Don't — The Content Secret",
  "Build a Business, Not a Job — Income That Works Without You",
  "Find a Mentor Before the Mistakes Find You",
  "Africa Is the Opportunity — Why Now, Why Here, Why You"
];

const laws = [
  "Stop grinding. Start building.",
  "Get the Three Clarities first.",
  "Lead with the problem.",
  "Transformation sells. Features don't.",
  "Fix your prices and hold them.",
  "Build a pipeline. Market always.",
  "Use the Six-Step Close.",
  "Build a business, not a job.",
  "Find a mentor before mistakes do.",
  "Monetise from Day One.",
  "Tell your own story.",
  "Africa is the opportunity. Now."
];

export function Book() {
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [quantity, setQuantity] = useState(1);
  const [heroImg, setHeroImg] = useState(img2);
  
  useEffect(() => {
    const saved = localStorage.getItem('image_book_hero');
    if (saved) {
      setHeroImg(saved);
    }
  }, []);


  


  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="From Grind to Million — The Book" 
        description="The No-Grind Blueprint for African Entrepreneurs. Get your signed hardcopy — 15,000 RWF."
      />
      {/* Hero Section */}
      <section 
        className="bg-brand-dark text-white py-16 md:py-24 px-4 text-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.9)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 pt-16">
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6">
            From Grind to Million
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-gold mb-8">
            The No-Grind Blueprint for African Entrepreneurs
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Most businesses don't fail because of bad markets. They fail because of bad clarity. Stop the grind and learn the exact framework used to scale multi-million-pound portfolios.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-16 md:py-24 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl mb-16 text-center">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-8 mb-16">
            <div className="bg-gray-50 p-5 md:p-8 border border-gray-100 shadow-sm relative rounded-[8px]">
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>
              <p className="text-gray-700 italic mb-6">"Price is not what you charge. Price is a communication."</p>
              <p className="font-bold">Kim Marie Claire Umutesi</p>
              <p className="text-sm text-gray-500">Founder, Shema Travel</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-8 border border-gray-100 shadow-sm relative rounded-[8px]">
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>
              <p className="text-gray-700 italic mb-6">"The Jerro pitch formula is immediately practical, and the discount margin breakdown is the kind of mathematics most people avoid doing but really need to see."</p>
              <p className="font-bold">Author Prabhu</p>
              <p className="text-sm text-gray-500">Business Author</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-8 border border-gray-100 shadow-sm relative rounded-[8px]">
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>
              <p className="text-gray-700 italic mb-6">"Because of this book, I now know what to correct, how to close deals, and how to solve business problems."</p>
              <p className="font-bold">Alain</p>
              <p className="text-sm text-gray-500">Entrepreneur, Visibility Engineer</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-8 border border-gray-100 shadow-sm relative rounded-[8px]">
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>
              <p className="text-gray-700 italic mb-6">"I like the comparative example of a Nairobi bicycle rider and the Safaricom CEO. Super catch and illustrative."</p>
              <p className="font-bold">Clever</p>
              <p className="text-sm text-gray-500">250Brand</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-8 border border-gray-100 shadow-sm relative rounded-[8px]">
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>
              <p className="text-gray-700 italic mb-6">"Africa-focused... You made it simple and easy to digest. One hundred per cent."</p>
              <p className="font-bold">Chris</p>
              <p className="text-sm text-gray-500">Weather Bikes</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-8 border border-gray-100 shadow-sm relative rounded-[8px]">
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>
              <p className="text-gray-700 italic mb-6">"It raises the hard questions we avoid asking ourselves and brings you out of comfortable thinking patterns."</p>
              <p className="font-bold">Fiston</p>
              <p className="text-sm text-gray-500">Book Publisher</p>
            </div>
          </div>

          <h2 className="font-display font-bold text-4xl mb-12 text-center mt-24">Advance Praise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-8">
            <div className="bg-brand-navy text-white p-5 md:p-8 border-l-4 border-brand-gold">
              <h3 className="font-bold text-xl mb-2 text-brand-gold">BBC Africa Business</h3>
              <p className="italic text-gray-300">"Harish Dabasia brings thirty-five years of London boardroom experience to the streets of Kigali and makes it land. This is the entrepreneurship book Africa has been waiting for."</p>
            </div>
            <div className="bg-brand-navy text-white p-5 md:p-8 border-l-4 border-brand-gold">
              <h3 className="font-bold text-xl mb-2 text-brand-gold">Forbes Africa</h3>
              <p className="italic text-gray-300">"The Jerro Formula alone is worth the price of admission. A masterclass in positioning for emerging-market founders."</p>
            </div>
            <div className="bg-brand-navy text-white p-5 md:p-8 border-l-4 border-brand-gold">
              <h3 className="font-bold text-xl mb-2 text-brand-gold">Financial Times</h3>
              <p className="italic text-gray-300">"Compact and purposeful. From Grind to Million does not waste a sentence. The discount margin breakdown is the kind of mathematics every founder needs to confront."</p>
            </div>
            <div className="bg-brand-navy text-white p-5 md:p-8 border-l-4 border-brand-gold">
              <h3 className="font-bold text-xl mb-2 text-brand-gold">Entrepreneur Magazine Africa</h3>
              <p className="italic text-gray-300">"The Six-Step Close is the best sales framework I have seen in a book this size."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Content / Preview */}
      <section className="py-16 md:py-24 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl mb-6">Look Inside the Book</h2>
          <p className="text-xl text-gray-600">The core frameworks that are changing how African businesses scale.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:p-8">
           <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-[8px]">
             <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">The Grind Trap</h3>
             <p className="text-gray-600 mb-6 italic">"The bicycle courier in Nairobi burns more calories than the CEO of Safaricom. The CEO earns one thousand times more. The difference is not effort. It is leverage."</p>
           </div>
           <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-[8px]">
             <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">The 3-Act StoryBridge</h3>
             <p className="text-gray-600 mb-6 italic">"Features don't sell. Transformations do. Every pitch needs a story: Before, Turning Point, After. Views without a story produce applause. Views with a transformation produce revenue."</p>
           </div>
           <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm rounded-[8px]">
             <h3 className="font-display font-bold text-2xl mb-4 text-brand-navy">The Discount Trap</h3>
             <p className="text-gray-600 mb-6 italic">"Every time you say yes to a discount, you are saying no to your own survival. The client wins five thousand francs. You lose half your profit. And you have trained them to do it again."</p>
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row gap-16">
        
        {/* Main Content Area */}
        <div className="lg:w-2/3">
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mb-6">
            From Grind to Million
          </h1>
          <p className="text-2xl text-gray-700 font-semibold mb-12 leading-relaxed">
            The No-Grind Blueprint for African Entrepreneurs to Build Profitable, Scalable, Million-Dollar Businesses
          </p>

          <blockquote className="bg-white border-l-4 border-brand-red p-5 md:p-8 mb-16 shadow-sm">
            <p className="font-display font-bold text-xl md:text-2xl text-brand-dark leading-relaxed mb-4">
              "Are you working harder than anyone you know but still not getting ahead? You are not failing. You are grinding. And grinding is not a strategy."
            </p>
            <p className="text-gray-600 text-lg">
              This book distils 35 years of building multi-million-pound businesses in London, tested on real entrepreneurs in Kigali — every principle, every story, every result documented.
            </p>
          </blockquote>

          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl mb-8">10 Chapters. Real Results.</h2>
            <ul className="space-y-4">
              {chapters.map((chapter, idx) => (
                <li key={idx} className="flex gap-4 items-baseline">
                  <span className="font-display font-bold text-brand-gold text-xl w-6 shrink-0">{idx + 1}.</span>
                  <span className="text-lg font-semibold text-gray-800">{chapter}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16 bg-brand-dark text-white p-6 md:p-10">
            <h2 className="font-display font-bold text-3xl mb-8 text-brand-gold">The 12 Laws — Your Daily Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {laws.map((law, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <span className="text-gray-300">{law}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-5 md:p-8 text-center border border-gray-200 rounded-[8px]">
            <p className="text-lg font-semibold mb-4">Want to go deeper than the book?</p>
            <Link to="/bootcamp" className="text-brand-green font-bold hover:underline text-xl">
              Join the 2-day Kigali Bootcamp &rarr;
            </Link>
          </div>
        </div>

        {/* Sticky Purchase Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-28 bg-white border border-gray-200 shadow-xl p-5 md:p-8 rounded-[8px]">
            <h3 className="font-display font-bold text-3xl mb-2">Hardcopy Book</h3>
            <p className="text-brand-red font-extrabold text-2xl mb-6">15,000 RWF</p>
            <p className="text-gray-600 text-sm mb-8">
              Delivered to you, or collect at our Kigali office. Physical copy signed by Harish.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input type="text" required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" placeholder="Your Name" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input type="tel" required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" placeholder="Phone" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">Delivery Method</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="pickup" 
                      checked={deliveryMethod === 'pickup'}
                      onChange={() => setDeliveryMethod('pickup')}
                      className="accent-brand-green w-4 h-4" 
                    />
                    <span>Pickup (Kigali Office)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="delivery" 
                      value="delivery" 
                      checked={deliveryMethod === 'delivery'}
                      onChange={() => setDeliveryMethod('delivery')}
                      className="accent-brand-green w-4 h-4" 
                    />
                    <span>Delivery</span>
                  </label>
                </div>
              </div>

              {deliveryMethod === 'delivery' && (
                <div>
                  <label className="block text-sm font-semibold mb-2">Delivery Address</label>
                  <textarea required className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none h-24 rounded-[8px]" placeholder="Your full address in Rwanda..."></textarea>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2">Quantity</label>
                <select 
                  className="w-full border border-gray-300 p-3 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 10].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-brand-gold text-white font-bold text-xl py-4 hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2 rounded-[8px]">
                  <ShoppingCart className="w-5 h-5" /> Get Hardcopy — {(15000 * quantity).toLocaleString()} RWF
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Payment via Mobile Money / Card — connect to your preferred Rwandan payment gateway (e.g. MTN MoMo, Flutterwave, or Paystack) at integration time.
                </p>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
