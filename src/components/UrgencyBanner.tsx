import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function UrgencyBanner() {
  // Flag clearly as "connect to real inventory/CRM data"
  const spotsLeft = 15; 
  
  return (
    <div className="bg-brand-red text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center text-sm sm:text-base font-bold gap-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 fill-current" />
          <span>{spotsLeft} Spots Left — Kigali Weekend Bootcamp</span>
        </div>
        <Link 
          to="/bootcamp" 
          className="bg-white text-brand-red px-4 py-1.5 hover:bg-gray-100 transition-colors uppercase tracking-wide text-xs sm:text-sm"
        >
          Secure Spot
        </Link>
      </div>
    </div>
  );
}
