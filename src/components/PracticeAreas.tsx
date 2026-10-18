import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Phone, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { practiceAreasData } from '../data/practiceAreas';

export function PracticeAreas() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  return (
    <section id="practice-areas" className="py-24 bg-charcoal-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
            <ShieldAlert className="w-4 h-4 text-gold-300" />
            <span className="text-gold-300 font-bold tracking-widest uppercase text-xs">Areas of Expertise</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Fierce & Uncompromising Criminal Defence</h3>
          <p className="text-neutral-100 max-w-3xl mx-auto text-base sm:text-lg font-normal leading-relaxed mb-4">
            We focus exclusively on criminal defence across Northern Rivers NSW and South East Queensland courts. Our priority is safeguarding your rights from the very first police contact and fighting for complete case resolution.
          </p>
        </div>

        {/* 16 Practice Areas (4x4 on desktop, compact rows on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {practiceAreasData.map((practice, index) => {
            const Icon = practice.icon;

            return (
              <Link 
                to={`/practice-areas/${practice.slug}`} 
                key={practice.slug} 
                className={`group block h-full ${!isMobileExpanded && index >= 5 ? 'hidden sm:block' : 'block'}`}
              >
                <div className="p-3 sm:p-6 bg-charcoal-800/90 border border-white/15 hover:border-gold-400 hover:bg-charcoal-800 transition-all duration-300 h-full shadow-lg rounded-sm cursor-pointer relative flex flex-col justify-between">
                  
                  {/* Mobile View: Compact Row (icon on left, title in middle, arrow on right) */}
                  <div className="flex sm:hidden items-center justify-between gap-3.5">
                    <div className="w-12 h-12 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-gold-300" />
                    </div>
                    <h4 className="text-white font-serif text-sm font-semibold flex-1 min-w-0 leading-snug">
                      {practice.title}
                    </h4>
                    <div className="shrink-0 text-gold-300 group-hover:text-white transition-colors pl-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Desktop View: Card Grid (icon on top, title directly under icon, description, arrow in bottom right) */}
                  <div className="hidden sm:flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0 mb-3.5 lg:group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-300" />
                    </div>
                    
                    <h4 className="text-white lg:group-hover:text-gold-300 font-serif text-base lg:text-lg font-semibold transition-colors mb-2 leading-snug">
                      {practice.title}
                    </h4>

                    <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed flex-grow mb-4">
                      {practice.desc}
                    </p>

                    <div className="flex justify-end pt-2 mt-auto">
                      <div className="text-gold-300 group-hover:text-white group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile-only Expand / Collapse Button */}
        <div className="sm:hidden mt-6">
          {!isMobileExpanded ? (
            <button
              type="button"
              onClick={() => setIsMobileExpanded(true)}
              className="w-full py-3.5 px-6 bg-charcoal-800 hover:bg-charcoal-700 text-gold-300 hover:text-white border border-gold-400/30 hover:border-gold-400 rounded-sm font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>View all 16 areas</span>
              <ChevronDown className="w-4 h-4 text-gold-300" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setIsMobileExpanded(false);
                document.getElementById('practice-areas')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 px-6 bg-charcoal-800 hover:bg-charcoal-700 text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded-sm font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Show less</span>
              <ChevronUp className="w-4 h-4 text-gold-300" />
            </button>
          )}
        </div>

        {/* Direct urgent helpline banner */}
        <div className="mt-16 p-8 bg-charcoal-950 border border-gold-400/40 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-gold-300 block mb-1">
              Need Legal Representation?
            </span>
            <h4 className="text-2xl font-serif text-white">
              Under Arrest, Being Questioned, or Given a Court Date?
            </h4>
            <p className="text-neutral-200 text-sm mt-1 max-w-2xl">
              You are not required to answer police questions. You should contact a lawyer before attending any police station or entering a plea in court.
            </p>
          </div>
          <a 
            href="tel:0421066608" 
            className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors shrink-0 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call 0421 066 608 Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
