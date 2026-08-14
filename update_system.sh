sed -i '/<div className="flex flex-col sm:flex-row justify-center gap-6">/i \
      <section className="py-24 px-4 bg-brand-navy text-white text-center">\
        <div className="max-w-4xl mx-auto">\
          <h2 className="font-display font-extrabold text-4xl mb-6 text-brand-gold">The Pipeline Principle</h2>\
          <p className="text-2xl font-light italic mb-8">"Always be filling — never chasing."</p>\
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">\
            Build a self-filling pipeline that works while you sleep. Build a pipeline of ten to fifteen waiting jobs. When you have more work than you can handle, your entire energy changes. You stop apologising for your prices.\
          </p>\
        </div>\
      </section>\
' src/pages/System.tsx
