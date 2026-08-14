import React, { useState } from 'react';
import { X } from 'lucide-react';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('Business Growth Mentoring');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const services = [
    'Business Growth Mentoring',
    'Executive Advisory',
    'Speaking & Workshops',
    'Property Investment',
    'Kigali Weekend Bootcamp',
    'General Enquiry'
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Harish, I am ${name}. I am interested in ${service}.\n\nMessage: ${message}\n\nMy WhatsApp number is ${phoneNumber}.`);
    window.open(`https://wa.me/447956883334?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-[8px] shadow-2xl z-50 overflow-hidden border border-gray-200 flex flex-col">
          <div className="bg-[#128C7E] text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Chat with Harish</h3>
              <p className="text-xs text-white/90 font-medium mt-0.5">Typically replies in a few hours</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors bg-white/10 p-1.5 rounded-[8px]">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSend} className="p-5 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-[8px] p-2 text-sm focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your WhatsApp Number</label>
              <input 
                type="tel" 
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+250 788 123 456"
                className="w-full border border-gray-300 rounded-[8px] p-2 text-sm focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">What service do you need?</label>
              <select 
                value={service} 
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded-[8px] p-2 text-sm focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              >
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
              <textarea 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can I help you?"
                rows={3}
                className="w-full border border-gray-300 rounded-[8px] p-2 text-sm focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#25D366] text-white font-bold py-3 rounded-[8px] hover:bg-[#128C7E] transition-colors mt-2 shadow-sm"
            >
              Start Chat
            </button>
          </form>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-[8px] shadow-2xl hover:bg-[#128C7E] transition-all z-50 flex items-center justify-center hover:scale-110 duration-200"
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        )}
      </button>
    </>
  );
}
