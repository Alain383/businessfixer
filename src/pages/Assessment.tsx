import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'result';

export function Assessment() {
  const [step, setStep] = useState<Step>('intro');
  const [score, setScore] = useState(0);

  const handleAnswer = (points: number, nextStep: Step) => {
    setScore(prev => prev + points);
    setStep(nextStep);
  };

  return (
    <div className="bg-brand-light min-h-screen flex items-center py-16 md:py-24 px-4">
      <SEO 
        title="Business Clarity Assessment | Harish Dabasia" 
        description="How clear is your business? Take this 3-minute assessment to discover your score against The Three Clarities."
      />
      <div className="max-w-3xl mx-auto w-full">
        
        <div className="bg-white border border-gray-200 shadow-xl p-5 md:p-8 md:p-16 rounded-[8px]">
          
          {step === 'intro' && (
            <div className="text-center">
              <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 text-brand-dark">
                How clear is your business?
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Most businesses fail because of bad clarity. Take this 3-minute assessment to discover your score against The Three Clarities: Message, Price, and Purpose.
              </p>
              <button 
                onClick={() => setStep('q1')}
                className="bg-brand-green text-white font-bold text-lg px-10 py-4 hover:bg-green-700 transition-colors"
              >
                Start Assessment
              </button>
            </div>
          )}

          {step === 'q1' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Question 1 of 3</span>
              <h2 className="font-display font-bold text-3xl mb-8">1. The Message</h2>
              <p className="text-lg text-gray-700 mb-6">If you asked 5 of your past clients what exact problem you solve for them, what would they say?</p>
              <div className="space-y-4">
                <button onClick={() => handleAnswer(3, 'q2')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  A. They would all give the exact same, specific answer.
                </button>
                <button onClick={() => handleAnswer(1, 'q2')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  B. They would give varying answers, mostly focusing on the features of what I do.
                </button>
                <button onClick={() => handleAnswer(0, 'q2')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  C. I honestly have no idea.
                </button>
              </div>
            </div>
          )}

          {step === 'q2' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Question 2 of 3</span>
              <h2 className="font-display font-bold text-3xl mb-8">2. The Price</h2>
              <p className="text-lg text-gray-700 mb-6">How often do you discount your services to win a client?</p>
              <div className="space-y-4">
                <button onClick={() => handleAnswer(3, 'q3')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  A. Never. I set my premium price and hold it.
                </button>
                <button onClick={() => handleAnswer(1, 'q3')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  B. Sometimes, if the client pushes back or if I really need the cashflow.
                </button>
                <button onClick={() => handleAnswer(0, 'q3')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  C. Often. It's the only way I can stay competitive.
                </button>
              </div>
            </div>
          )}

          {step === 'q3' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Question 3 of 3</span>
              <h2 className="font-display font-bold text-3xl mb-8">3. The Purpose (Systems)</h2>
              <p className="text-lg text-gray-700 mb-6">If you stepped away from your business for 30 days with no phone or email, what would happen?</p>
              <div className="space-y-4">
                <button onClick={() => handleAnswer(3, 'result')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  A. It would continue to generate revenue and operate smoothly.
                </button>
                <button onClick={() => handleAnswer(1, 'result')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  B. Things would slow down drastically, but it might survive.
                </button>
                <button onClick={() => handleAnswer(0, 'result')} className="w-full text-left p-6 border border-gray-200 hover:border-brand-green hover:bg-green-50 transition-colors font-semibold text-gray-800 text-lg">
                  C. The business would completely stop. I am the business.
                </button>
              </div>
            </div>
          )}

          {step === 'result' && (
            <div className="text-center animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-brand-gold rounded-[8px] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-brand-dark" />
              </div>
              <h2 className="font-display font-bold text-4xl mb-4 text-brand-dark">Assessment Complete</h2>
              
              <div className="bg-gray-50 p-5 md:p-8 border border-gray-100 mb-8 rounded-[8px]">
                <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">Your Clarity Score</p>
                <p className="text-5xl font-display font-extrabold text-brand-green mb-4">{score} / 9</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {score >= 7 
                    ? "You have strong foundations. Now it's time to pour gasoline on the fire and scale with aggressive leverage." 
                    : score >= 4 
                    ? "You are trapped in the Grind. You are making money, but sacrificing your time, margins, and sanity to do it." 
                    : "Your clarity is critically low. Every day you operate like this, you are leaving money on the table and burning yourself out."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-brand-dark text-white font-bold py-4 px-8 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" /> Book a Strategy Call
                </Link>
                <Link to="/bootcamp" className="bg-brand-gold text-white font-bold py-4 px-8 hover:bg-[#E65C00] transition-colors flex items-center justify-center gap-2">
                  Fix It at the Bootcamp <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
