import { useState, useEffect } from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
// @ts-ignore
import frontlineBackground from '../assets/images/hero-background.webp';

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = frontlineBackground;
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => setImageLoaded(true);
    }
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-start sm:items-center justify-start pt-32 sm:pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #c8dbee 45%, #537391)' }}
    >
      {/* Background image - natural exposure with light horizon positioning, zero darkening gradients, smoothly fades in */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-[center_28%] bg-no-repeat filter brightness-[1.12] contrast-[0.98] transition-opacity duration-700 ease-out ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url("${frontlineBackground}")` }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-1 sm:pt-0">
        <div className="max-w-3xl text-left flex flex-col items-start mt-0">
          <div className="flex items-center gap-2 mb-2 sm:mb-8 justify-start">
            <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-gold-600 drop-shadow-sm shrink-0" />
            <span className="text-gold-600 font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow-sm">Northern Rivers NSW & South East Queensland Criminal Defence</span>
          </div>

          <h1 className="flex flex-col items-start mb-2.5 sm:mb-8 select-none text-left">
            <span className="font-serif text-5xl md:text-7xl tracking-[0.12em] uppercase text-charcoal-950 font-bold leading-none block">Frontline</span>
            <span className="text-xs md:text-sm tracking-[0.38em] uppercase text-gold-600 font-sans font-bold mt-2 sm:mt-4 leading-none block drop-shadow-sm">Lawyers</span>
          </h1>

          <p className="text-xs sm:text-base md:text-xl text-charcoal-950 mb-4 sm:mb-8 md:mb-10 max-w-2xl font-semibold leading-relaxed text-left hero-black-text">
            Straightforward legal representation to protect your rights, livelihood, and future. From our base in Murwillumbah, we represent clients throughout the Northern Rivers NSW and South East Queensland, appearing in local and magistrates courts across Murwillumbah, Tweed Heads, Ballina, Byron Bay, Mullumbimby, Lismore, Maclean, Southport, Coolangatta, and Brisbane.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start w-auto">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2.5 bg-black border border-black text-white px-5 py-2.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-bold tracking-widest uppercase hover:bg-charcoal-900 transition-colors duration-300 shadow-xl rounded-sm w-auto self-start"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:0421066608" 
              className="hidden sm:flex items-center justify-center gap-3 bg-gold-500 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold-600 transition-colors duration-300 rounded-sm shadow-md"
            >
              Call: 0421 066 608
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
