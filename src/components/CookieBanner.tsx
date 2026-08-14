import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given (placeholder logic)
    if (!localStorage.getItem('cookie-consent')) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-dark text-white p-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-800">
      <div className="max-w-4xl">
        <p className="text-sm text-gray-300 leading-relaxed">
          We use cookies to improve your experience, measure site performance, and serve relevant content. This site serves audiences in both the UK and Rwanda. By continuing to use this site, you consent to our use of cookies.
        </p>
      </div>
      <div className="flex gap-3 shrink-0 w-full md:w-auto">
        <button 
          onClick={() => {
            localStorage.setItem('cookie-consent', 'true');
            setIsVisible(false);
          }}
          className="flex-1 md:flex-none bg-brand-green text-white px-6 py-2.5 text-sm font-bold hover:bg-green-700 transition-colors"
        >
          Accept
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 md:flex-none bg-transparent border border-gray-600 text-white px-6 py-2.5 text-sm font-bold hover:bg-gray-800 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
