import { Target, Users, MessageSquare, Scale, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: Users,
    title: 'Dedicated Principal Lawyer',
    line: 'Adam handles your case personally, start to finish.'
  },
  {
    icon: MessageSquare,
    title: 'Word of Mouth & Trust',
    line: 'Most clients come to us by referral.'
  },
  {
    icon: Scale,
    title: 'Elite Barrister Network',
    line: 'Top NSW and QLD barristers when you need them.'
  },
  {
    icon: Target,
    title: 'Proactive Defence',
    line: 'We challenge the evidence early, not on the day.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-charcoal-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-gold-300" />
              <span className="text-gold-300 font-bold tracking-widest uppercase text-xs">WHY CHOOSE US</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Defence Across Northern Rivers & South East Queensland
            </h3>
            <p className="text-neutral-100 text-lg font-normal leading-relaxed mb-6">
              From our primary practice base in Murwillumbah, we provide dedicated criminal defence across:
            </p>
            
            {/* Towns pill cluster */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Southport', 'Coolangatta', 'Tweed Heads', 'Kingscliff', 'Murwillumbah', 
                'Byron Bay', 'Ballina', 'Lismore', 'Mullumbimby', 'Ocean Shores', 
                'Pottsville', 'Casino', 'Maclean', 'Surfers Paradise', 'Burleigh Heads', 'Robina', 
                'Beenleigh', 'Brisbane'
              ].map((town, idx) => (
                <span key={idx} className="bg-charcoal-800 text-neutral-100 border border-white/15 text-xs px-3 py-1 font-medium rounded-sm">
                  {town}
                </span>
              ))}
            </div>

            <p className="text-neutral-100 text-base leading-relaxed mb-6">
              We employ relentless preparation, technical evidence audits, and senior courtroom advocacy. Whatever the charge, we work to get you the best possible outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Link to="/why-choose-us" key={i} className="group block h-full">
                  <div className="bg-charcoal-800/90 border border-white/15 p-3.5 sm:p-6 hover:border-gold-400 hover:bg-charcoal-800 transition-all duration-300 h-full shadow-lg rounded-sm cursor-pointer relative flex flex-col justify-between">
                    
                    {/* Mobile View: Compact Row (icon on left, title & line in middle, arrow on right) */}
                    <div className="flex sm:hidden items-center gap-3.5">
                      <div className="w-12 h-12 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-gold-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-serif text-sm font-semibold uppercase tracking-wider leading-snug">
                          {r.title}
                        </h4>
                        <p className="text-neutral-300 text-xs font-normal leading-snug mt-0.5">
                          {r.line}
                        </p>
                      </div>
                      <div className="shrink-0 text-gold-300 group-hover:text-white transition-colors pl-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Desktop View: Card Grid (icon on top, title, line, arrow in bottom right) */}
                    <div className="hidden sm:flex flex-col h-full">
                      <div className="w-12 h-12 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0 mb-4 lg:group-hover:scale-105 lg:transition-transform">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-300" />
                      </div>
                      
                      <h4 className="text-white lg:group-hover:text-gold-300 font-serif text-base font-semibold uppercase tracking-wider mb-2 lg:transition-colors">
                        {r.title}
                      </h4>
                      
                      <p className="text-neutral-300 text-sm font-normal leading-relaxed flex-grow mb-4">
                        {r.line}
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

        </div>
      </div>
    </section>
  );
}
