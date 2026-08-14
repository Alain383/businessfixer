import { useState, useEffect } from 'react';
import { Mic, Newspaper, Quote, BookOpen, Presentation, ArrowRight, Calendar, MessageSquare, Send } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import img5 from '../assets/images/dabasia.jpg';

export function GenericPage({ title, type }: { title: string, type: string }) {
  const [heroImg, setHeroImg] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem('image_generic_hero');
    if (saved) {
      setHeroImg(saved);
    }
  }, []);

  
  if (type === 'services') {
    return (
      <div className="bg-brand-light min-h-screen py-16 md:py-24 px-4 text-center" style={heroImg ? { backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.9)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <SEO title="Services | Harish Dabasia" description="Strategic Business Mentoring, Real Estate Guidance, and Service Excellence Consulting." />
        <h1 className="font-display font-extrabold text-5xl mb-6">Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
          Strategic Business Mentoring, Real Estate Guidance, and Service Excellence Consulting framed through the No-Grind System.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:p-8">
           <div className="bg-white p-6 md:p-10 border border-gray-200 rounded-[8px]">
             <h3 className="font-display font-bold text-2xl mb-4">Mentoring</h3>
             <p className="text-gray-600 mb-8">Deep, one-on-one implementation of the Six Pillars.</p>
             <Link to="/services/mentoring" className="block text-center w-full bg-brand-dark text-white font-bold py-3 hover:bg-gray-800 flex justify-center items-center gap-2">Learn More <ArrowRight className="w-5 h-5"/></Link>
           </div>
           <div className="bg-white p-6 md:p-10 border border-gray-200 rounded-[8px]">
             <h3 className="font-display font-bold text-2xl mb-4">Real Estate</h3>
             <p className="text-gray-600 mb-8">Guidance on building generational wealth through property.</p>
             <Link to="/services/real-estate" className="block text-center w-full bg-brand-dark text-white font-bold py-3 hover:bg-gray-800 flex justify-center items-center gap-2">Learn More <ArrowRight className="w-5 h-5"/></Link>
           </div>
           <div className="bg-white p-6 md:p-10 border border-gray-200 rounded-[8px]">
             <h3 className="font-display font-bold text-2xl mb-4">Service Excellence</h3>
             <p className="text-gray-600 mb-8">Consulting to turn service into a national competitive advantage.</p>
             <Link to="/services/service-excellence" className="block text-center w-full bg-brand-dark text-white font-bold py-3 hover:bg-gray-800 flex justify-center items-center gap-2">Learn More <ArrowRight className="w-5 h-5"/></Link>
           </div>
        </div>
      </div>
    )
  }

  if (type === 'speaking') {
    return (
      <div className="bg-brand-light min-h-screen py-16 md:py-24 px-4" style={heroImg ? { backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.9)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <SEO title="Speaking | Harish Dabasia" description="Invite Harish Dabasia to speak on building businesses that last, generational wealth, and resilience." />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Presentation className="w-16 h-16 mx-auto mb-6 text-brand-green" />
          <h1 className="font-display font-extrabold text-5xl mb-6">Speaking</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Book Harish to speak at your next event in Kigali, London, or internationally.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:p-8 mb-16">
          {[
            { title: "Building Businesses That Last: The Three Clarities", desc: "Why most businesses fail and how to fix it by locking down purpose, message, and pricing." },
            { title: "Generational Wealth: Rethinking Real Estate in Africa", desc: "Lessons from building property portfolios in the UK and applying them to high-growth African markets." },
            { title: "Service Excellence as a National Competitive Advantage", desc: "How customer experience out-scales product features in developing economies." },
            { title: "From Setback to Rebuild: Lessons on Resilience", desc: "Raw, practical insights on surviving business failure and coming back stronger." }
          ].map((topic, i) => (
            <div key={i} className="bg-white p-5 md:p-8 border border-gray-200 rounded-[8px]">
              <h3 className="font-display font-bold text-2xl mb-3">{topic.title}</h3>
              <p className="text-gray-600">{topic.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-gold text-white font-bold text-lg px-8 py-4 hover:bg-[#E65C00] transition-colors">
            <Calendar className="w-5 h-5" /> Invite Harish to Speak
          </Link>
        </div>
      </div>
    );
  }

  if (type === 'media') {
    return (
      <div className="bg-brand-light min-h-screen py-16 md:py-24 px-4" style={heroImg ? { backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.9)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <SEO title="Media & Press | Harish Dabasia" description="Press mentions, interviews, and podcast features for Harish Dabasia." />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Newspaper className="w-16 h-16 mx-auto mb-6 text-brand-blue" />
          <h1 className="font-display font-extrabold text-5xl mb-6">Media & Press</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Interviews, features, and appearances.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:p-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-[8px]">
              <div className="w-full aspect-video bg-gray-100 mb-4 flex items-center justify-center text-gray-400 text-sm font-semibold overflow-hidden">
                <img src={img5} alt="Media mention" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Interview / Article Title</h3>
              <p className="text-gray-500 text-sm mb-4">Publication Name • Date</p>
              <a href="#" className="text-brand-green font-bold text-sm hover:underline">Read / Watch &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'testimonials') {
    return (
      <div className="bg-brand-light min-h-screen py-16 md:py-24 px-4" style={heroImg ? { backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.9)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <SEO title="Testimonials | Harish Dabasia" description="Hear from clients and entrepreneurs who have implemented the No-Grind System." />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Quote className="w-16 h-16 mx-auto mb-6 text-brand-gold" />
          <h1 className="font-display font-extrabold text-5xl mb-6">Client Results</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            The No-Grind System in action. Real businesses, real transformations.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:p-8 mb-20">
          {[1, 2, 3, 4].map(i => (
             <div key={i} className="bg-white p-6 md:p-10 border border-gray-200 shadow-sm relative rounded-[8px]">
               <Quote className="w-8 h-8 text-gray-200 absolute top-5 md:p-8 right-8" />
               <p className="text-lg text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                 "[Placeholder quote: Harish helped us completely reframe our pricing and lock down our message. We stopped competing on price and doubled our margins in 3 months.]"
               </p>
               <p className="font-bold text-brand-dark">[Client Name]</p>
               <p className="text-gray-500 text-sm">[Client Business / Role]</p>
             </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-brand-dark text-white p-6 md:p-10 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">Have a success story?</h2>
          <p className="text-gray-300 mb-8">We'd love to hear how the book or bootcamp has impacted your business.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-8 hover:bg-green-700 transition-colors">
            <MessageSquare className="w-5 h-5" /> Share Your Story
          </Link>
        </div>
      </div>
    );
  }

  if (type === 'blog') {
    return (
      <div className="bg-brand-light min-h-screen py-16 md:py-24 px-4" style={heroImg ? { backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.9)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <SEO title="Blog & Insights | Harish Dabasia" description="Articles and insights on building a business, pricing, clarity, and the African opportunity." />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-brand-dark" />
          <h1 className="font-display font-extrabold text-5xl mb-6">Insights & Articles</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Deep dives into the No-Grind System and the business landscape in Africa.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10">
           {[
             { title: "The Grind Trap explained", desc: "Why hard work alone isn't enough, and why the courier out-works the CEO but earns a fraction." },
             { title: "The Three Clarities in practice", desc: "How fixing your Message, Price, and Purpose can solve 90% of your operational problems." },
             { title: "Why discounts kill margins", desc: "The math behind discounting: A 20% discount on a 30% margin means working at one-third of your potential." },
             { title: "Stories Sell — how to use your phone as a content tool", desc: "Why raw, authentic stories convert better than highly polished, corporate feature lists." },
             { title: "Africa's fastest-growing economies, explained", desc: "Why the next 25 years in Africa represent the greatest entrepreneurial opportunity on earth." }
           ].map((post, i) => (
             <article key={i} className="bg-white border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
               <div className="w-full aspect-video bg-gray-100 mb-4 overflow-hidden">
                 <img src={img5} alt={post.title} className="w-full h-full object-cover" />
               </div>
               <div className="p-5 md:p-8 flex-grow">
                 <h2 className="font-display font-bold text-2xl mb-3">{post.title}</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">{post.desc}</p>
                 <a href="#" className="text-brand-green font-bold hover:underline mt-auto inline-block">Read Article &rarr;</a>
               </div>
             </article>
           ))}
        </div>
      </div>
    );
  }

  if (type === 'contact') {
    return (
      <div className="bg-brand-light min-h-screen py-16 md:py-24 px-4" style={heroImg ? { backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.9), rgba(248, 250, 252, 0.9)), url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
        <SEO title="Contact | Harish Dabasia" description="Get in touch to book a strategy call, request a speaking engagement, or enquire about the bootcamp." />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="font-display font-extrabold text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Ready to stop grinding and start building? Reach out to book a strategy call, request a speaking engagement, or enquire about the bootcamp.
            </p>
            <div className="space-y-6">
              <div>
                <strong className="block text-brand-dark mb-1">Locations</strong>
                <p className="text-gray-600">Kigali, Rwanda<br/>London, UK</p>
              </div>
              <div>
                <strong className="block text-brand-dark mb-1">Email</strong>
                <p className="text-gray-600">[hello@businessfixer.example.com]</p>
              </div>
              <div>
                <strong className="block text-brand-dark mb-1">Phone</strong>
                <p className="text-gray-600">[+250 xxx xxx xxx]</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 border border-gray-200 shadow-xl rounded-[8px]">
             <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" required className="w-full border border-gray-300 p-4 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" required className="w-full border border-gray-300 p-4 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none rounded-[8px]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">How can we help?</label>
                  <select className="w-full border border-gray-300 p-4 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none">
                    <option>Bootcamp</option>
                    <option>Book</option>
                    <option>Mentoring</option>
                    <option>Real Estate</option>
                    <option>Service Excellence</option>
                    <option>Speaking</option>
                    <option>Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea required className="w-full border border-gray-300 p-4 bg-gray-50 focus:ring-2 focus:ring-brand-gold outline-none h-32 rounded-[8px]"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-green text-white font-bold text-lg py-4 hover:bg-green-700 transition-colors flex items-center justify-center gap-2 rounded-[8px]">
                  <Send className="w-5 h-5" /> Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-brand-light min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <SEO title={`${title} | Harish Dabasia`} description={title} />
      <h1 className="font-display font-extrabold text-5xl mb-4">{title}</h1>
      <p className="text-gray-600 text-xl max-w-lg mb-8">This page is under construction or provides generic information based on your request.</p>
      <Link to="/" className="text-brand-green font-bold hover:underline">
        &larr; Return to Home
      </Link>
    </div>
  );
}
