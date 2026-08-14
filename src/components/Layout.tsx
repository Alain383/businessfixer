import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Facebook, Twitter, MessageSquare, Rss } from 'lucide-react';
import { CookieBanner } from './CookieBanner';
import { Navigation } from './Navigation';
import { WhatsAppChat } from './WhatsAppChat';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-brand-gold selection:text-brand-navy overflow-x-hidden w-full">
      <Navigation />

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-24 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Harish Dabasia */}
            <div>
                <span className="mb-6 block">
                  <Link to="/" aria-label="HARISH DABASIA">
                    <img src="/logo.png" alt="HARISH DABASIA" className="h-10 mx-auto object-contain bg-transparent" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  </Link>
                </span>
                <p className="text-white mb-8 leading-relaxed pr-4">
                  Build Better Businesses. Create Generational Wealth. Elevate Service Excellence Across Africa.
                </p>
              </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-white hover:text-[#FF6700] transition-colors">About Harish</Link></li>
                <li><Link to="/system" className="text-white hover:text-[#FF6700] transition-colors">The No-Grind System™</Link></li>
                <li><Link to="/assessment" className="text-white hover:text-[#FF6700] transition-colors">Free Business Assessment</Link></li>
                <li><Link to="/book" className="text-white hover:text-[#FF6700] transition-colors">From Grind to Million</Link></li>
                <li><Link to="/podcast" className="text-white hover:text-[#FF6700] transition-colors">Africa Talks Business</Link></li>
                <li><Link to="/contact" className="text-white hover:text-[#FF6700] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Programs */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Programs</h4>
              <ul className="space-y-4">
                <li><Link to="/bootcamp" className="text-white hover:text-[#FF6700] transition-colors">Kigali Weekend Bootcamp</Link></li>
                <li><Link to="/services/mentoring" className="text-white hover:text-[#FF6700] transition-colors">Business Growth Mentoring</Link></li>
                <li><Link to="/services/real-estate" className="text-white hover:text-[#FF6700] transition-colors">Real Estate Investment</Link></li>
                <li><Link to="/services/service-excellence" className="text-white hover:text-[#FF6700] transition-colors">Service Excellence Culture</Link></li>
                <li><Link to="/speaking" className="text-white hover:text-[#FF6700] transition-colors">Speaking & Workshops</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Newsletter Signup</h4>
              <p className="text-white mb-6 leading-relaxed">
                Join thousands of African entrepreneurs receiving weekly insights on scaling their business.
              </p>
              <form className="space-y-3" onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).querySelector('input')?.value;
                if (email) {
                  window.location.href = `mailto:dabasiah@gmail.com?subject=Newsletter Subscription&body=Please add ${email} to the newsletter.`;
                }
              }}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-[8px] px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  required
                />
                <button type="submit" className="w-full bg-brand-gold text-white font-bold rounded-[8px] py-3 hover:bg-[#E65C00] transition-colors">
                  Subscribe
                </button>
              </form>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-[8px] bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-[8px] bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-[8px] bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-[8px] bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
            <p>&copy; {new Date().getFullYear()} Harish Dabasia. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="hover:text-[#FF6700] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#FF6700] transition-colors">Terms</Link>
              <Link to="/disclaimer" className="hover:text-[#FF6700] transition-colors">Disclaimer</Link>
              <button className="hover:text-[#FF6700] transition-colors rounded-[8px]">Cookie Settings</button>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
      
      <WhatsAppChat />
    </div>
  );
}
