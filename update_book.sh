sed -i '/{[/]* Main Content Area [*]/}/i \
        {/* Reviews Section */}\
        <div className="lg:w-full max-w-7xl mx-auto px-4 py-16">\
          <h2 className="font-display font-bold text-4xl mb-12 text-center">What Readers Are Saying</h2>\
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">\
            <div className="bg-white p-8 border border-gray-100 shadow-sm relative">\
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>\
              <p className="text-gray-700 italic mb-6">"Price is not what you charge. Price is a communication."</p>\
              <p className="font-bold">Kim Marie Claire Umutesi</p>\
              <p className="text-sm text-gray-500">Founder, Shema Travel</p>\
            </div>\
            <div className="bg-white p-8 border border-gray-100 shadow-sm relative">\
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>\
              <p className="text-gray-700 italic mb-6">"The Jerro pitch formula is immediately practical, and the discount margin breakdown is the kind of mathematics most people avoid doing but really need to see."</p>\
              <p className="font-bold">Author Prabhu</p>\
              <p className="text-sm text-gray-500">Business Author</p>\
            </div>\
            <div className="bg-white p-8 border border-gray-100 shadow-sm relative">\
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>\
              <p className="text-gray-700 italic mb-6">"Because of this book, I now know what to correct, how to close deals, and how to solve business problems."</p>\
              <p className="font-bold">Alain</p>\
              <p className="text-sm text-gray-500">Entrepreneur, Visibility Engineer</p>\
            </div>\
            <div className="bg-white p-8 border border-gray-100 shadow-sm relative">\
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>\
              <p className="text-gray-700 italic mb-6">"I like the comparative example of a Nairobi bicycle rider and the Safaricom CEO. Super catch and illustrative."</p>\
              <p className="font-bold">Clever</p>\
              <p className="text-sm text-gray-500">250Brand</p>\
            </div>\
            <div className="bg-white p-8 border border-gray-100 shadow-sm relative">\
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>\
              <p className="text-gray-700 italic mb-6">"Africa-focused... You made it simple and easy to digest. One hundred per cent."</p>\
              <p className="font-bold">Chris</p>\
              <p className="text-sm text-gray-500">Weather Bikes</p>\
            </div>\
            <div className="bg-white p-8 border border-gray-100 shadow-sm relative">\
              <div className="text-brand-gold mb-4 text-2xl">★★★★★</div>\
              <p className="text-gray-700 italic mb-6">"It raises the hard questions we avoid asking ourselves and brings you out of comfortable thinking patterns."</p>\
              <p className="font-bold">Fiston</p>\
              <p className="text-sm text-gray-500">Book Publisher</p>\
            </div>\
          </div>\
\
          <h2 className="font-display font-bold text-4xl mb-12 text-center mt-24">Advance Praise</h2>\
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">\
            <div className="bg-brand-navy text-white p-8">\
              <h3 className="font-bold text-xl mb-2 text-brand-gold">BBC Africa Business</h3>\
              <p className="italic text-gray-300">"Harish Dabasia brings thirty-five years of London boardroom experience to the streets of Kigali and makes it land. This is the entrepreneurship book Africa has been waiting for."</p>\
            </div>\
            <div className="bg-brand-navy text-white p-8">\
              <h3 className="font-bold text-xl mb-2 text-brand-gold">Forbes Africa</h3>\
              <p className="italic text-gray-300">"The Jerro Formula alone is worth the price of admission. A masterclass in positioning for emerging-market founders."</p>\
            </div>\
            <div className="bg-brand-navy text-white p-8">\
              <h3 className="font-bold text-xl mb-2 text-brand-gold">Financial Times</h3>\
              <p className="italic text-gray-300">"Compact and purposeful. From Grind to Million does not waste a sentence. The discount margin breakdown is the kind of mathematics every founder needs to confront."</p>\
            </div>\
            <div className="bg-brand-navy text-white p-8">\
              <h3 className="font-bold text-xl mb-2 text-brand-gold">Entrepreneur Magazine Africa</h3>\
              <p className="italic text-gray-300">"The Six-Step Close is the best sales framework I have seen in a book this size."</p>\
            </div>\
          </div>\
        </div>\
' src/pages/Book.tsx
