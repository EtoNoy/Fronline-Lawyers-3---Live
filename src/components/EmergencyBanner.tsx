import { AlertTriangle, Phone } from 'lucide-react';

export function EmergencyBanner() {
  return (
    <div className="bg-gold-500 text-white py-3 border-b border-white/15 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <AlertTriangle className="w-5 h-5 text-amber-300 animate-pulse" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Arrested or Facing Court?</h2>
        </div>
        <a 
          href="tel:0421066608" 
          className="flex items-center gap-2 bg-charcoal-950/80 hover:bg-charcoal-950 px-4 py-1.5 rounded-full border border-white/20 text-white font-sans font-bold hover:text-gold-300 transition-colors text-base sm:text-lg tracking-normal shadow-sm"
        >
          <Phone className="w-4 h-4 text-gold-300" />
          <span>0421 066 608</span>
        </a>
      </div>
    </div>
  );
}
