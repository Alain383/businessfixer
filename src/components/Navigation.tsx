import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  {
    label: 'About',
    path: '/about',
    dropdown: [
      { label: 'My Story', path: '/about' },
      { label: 'Mission', path: '/about#mission' },
      { label: 'Vision', path: '/about#vision' },
      { label: 'Timeline', path: '/about#timeline' },
    ]
  },
  {
    label: 'Mentoring',
    path: '/services/mentoring',
    dropdown: [
      { label: 'Business Growth Mentoring', path: '/services/mentoring' },
      { label: 'Speaking', path: '/speaking' },
      { label: 'Workshops', path: '/services/workshops' },
      { label: 'Executive Advisory', path: '/services/advisory' },
    ]
  },
  {
    label: 'System',
    path: '/system',
    dropdown: [
      { label: 'Overview', path: '/system' },
      { label: 'The 3 Clarities', path: '/system#clarities' },
      { label: 'Framework', path: '/system#framework' },
    ]
  },
  {
    label: 'Book',
    path: '/book',
    dropdown: [
      { label: 'From Grind to Million', path: '/book' },
      { label: 'Preview', path: '/book#preview' },
      { label: 'Reviews', path: '/book#reviews' },
    ]
  },
  {
    label: 'Property',
    path: '/services/real-estate',
    dropdown: [
      { label: 'Property Investment', path: '/services/real-estate' },
      { label: 'Global Investor Network', path: '/services/real-estate#marketing' },
      { label: 'Developers & Investors', path: '/services/real-estate#developers-investors' },
    ]
  },
  {
    label: 'Course',
    path: '/bootcamp',
    dropdown: [
      { label: 'Kigali Weekend Bootcamp', path: '/bootcamp' },
    ]
  },
  {
    label: 'Media',
    path: '/podcast',
    dropdown: [
      { label: 'Videos', path: '/media' },
      { label: 'Podcasts', path: '/podcast' },
      { label: 'Gallery', path: '/media/gallery' },
      { label: 'Blogs & News', path: '/blog' },
    ]
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/60 before:to-transparent before:-z-10'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <Link to="/" className="flex items-center gap-3 z-50 shrink-0" aria-label="HARISH DABASIA">
          <img src="/logo.png" alt="HARISH DABASIA" className="h-8 object-contain bg-transparent" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          <span className="sr-only">HARISH DABASIA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-end gap-2 xl:gap-3 2xl:gap-5 ml-auto min-w-0">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.path}
                className={`flex items-center gap-1 font-semibold text-[10px] md:text-[11px] xl:text-xs 2xl:text-sm whitespace-nowrap transition-colors ${scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5 xl:w-4 xl:h-4 opacity-70" />}
              </Link>

              {item.dropdown && (
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                >
                  <div className="bg-white shadow-xl border border-gray-100 rounded-[8px] p-6 min-w-[280px]">
                    <div className="space-y-4">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.label} 
                          to={subItem.path}
                          className="block text-gray-600 hover:text-brand-gold transition-colors text-sm font-medium"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 xl:gap-3 ml-3 xl:ml-5 shrink-0">
          <Link to="/assessment" className={`font-semibold text-[10px] md:text-[11px] xl:text-xs 2xl:text-sm whitespace-nowrap ${scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white hover:text-brand-gold'}`}>
            Assessment
          </Link>
          <Link 
            to="/bootcamp" 
            className="bg-brand-gold text-white font-bold px-2.5 py-2 xl:px-3 rounded-[8px] hover:bg-[#E65C00] transition-colors shadow-lg text-[9px] md:text-[10px] xl:text-[11px] 2xl:text-xs uppercase tracking-wide whitespace-nowrap"
          >
            Early Bird Enrol Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden z-50 p-2 rounded-[8px] ${scrolled || isOpen ? 'text-brand-navy' : 'text-white'}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 pt-24 pb-12 flex flex-col gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 pb-4">
              <div 
                className="flex items-center justify-between font-display font-bold text-xl text-brand-navy mb-4 cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
              >
                {item.label}
                {item.dropdown && <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>
              {item.dropdown && activeDropdown === item.label && (
                <div className="flex flex-col gap-3 pl-4">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.label} 
                      to={subItem.path}
                      className="text-gray-600 font-medium"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/assessment" className="font-display font-bold text-xl text-brand-navy pb-4 border-b border-gray-100">
            Assessment
          </Link>
          <Link 
            to="/bootcamp" 
            className="mt-6 bg-brand-gold text-white font-bold px-4 py-3 rounded-[8px] text-center hover:bg-[#E65C00] transition-colors text-sm uppercase tracking-wide"
          >
            Early Bird Enrol Now
          </Link>
        </div>
      </div>
    </header>
  );
}
