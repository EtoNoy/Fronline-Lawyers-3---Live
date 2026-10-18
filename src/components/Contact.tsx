import React, { useState } from 'react';
import { MapPin, Phone, Mail, ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';
import { practiceAreasData } from '../data/practiceAreas';

export function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [charge, setCharge] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!firstName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg('Please enter your name, phone number, and required email address.');
      return;
    }

    setIsSubmitting(true);
    const refCode = `FL-${Math.floor(10000 + Math.random() * 90000)}`;

    try {
      const payload: Record<string, string> = {
        'form-name': 'contact',
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        charge: charge || 'Direct Criminal Defence Inquiry',
        details: details.trim() || 'Direct website contact form inquiry',
        referenceId: refCode,
      };

      const body = new URLSearchParams(payload).toString();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!res.ok && res.status !== 0) {
        throw new Error('Failed to submit');
      }

      setSubmittedRef(refCode);
    } catch (err) {
      setErrorMsg('Failed to dispatch inquiry. Please call 0421 066 608 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-900 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
              <ShieldAlert className="w-4 h-4 text-gold-300" />
              <span className="text-gold-300 font-bold tracking-widest uppercase text-xs">Direct Solicitor Access</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-wider">
              Contact Defence Team
            </h3>
            
            <div className="space-y-4 mb-8 text-neutral-100 text-lg font-normal leading-relaxed">
              <p>
                To speak with one of the partners at Frontline Lawyers, we invite you to contact us via our Contact form.
              </p>
              <p>
                Once we have reviewed your enquiry, we will contact you to arrange an initial conference, which can be conducted either in person or by video.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 sm:p-5 bg-charcoal-800/80 border border-white/10 hover:border-gold-400 hover:bg-charcoal-800 transition-all duration-300 rounded-sm shadow-md">
                <div className="w-12 h-12 bg-charcoal-900 border border-white/10 flex items-center justify-center shrink-0 rounded-sm">
                  <Phone className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Direct Defence Helpline</h4>
                  <p className="text-neutral-200 text-sm">
                    Call / SMS: <a href="tel:0421066608" className="text-white font-bold hover:text-gold-300 transition-colors">0421 066 608</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 bg-charcoal-800/80 border border-white/10 hover:border-gold-400 hover:bg-charcoal-800 transition-all duration-300 rounded-sm shadow-md">
                <div className="w-12 h-12 bg-charcoal-900 border border-white/10 flex items-center justify-center shrink-0 rounded-sm">
                  <MapPin className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Jurisdiction & Court Coverage</h4>
                  <p className="text-neutral-200 text-sm leading-relaxed">
                    Priority court appearances and station attendances across <strong className="text-white">Tweed Heads, Murwillumbah, Kingscliff, Byron Bay, Ballina, Lismore, Maclean, Mullumbimby, Ocean Shores, Pottsville, Casino</strong>, through to <strong className="text-white">Coolangatta, Southport, Surfers Paradise, Burleigh Heads, Robina, Broadbeach, Beenleigh, and Brisbane</strong>.
                  </p>
                  <p className="text-neutral-300 text-xs mt-2 border-t border-white/10 pt-2">
                    Mailing Address: P.O Box 104 Murwillumbah, 2484, NSW
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 bg-charcoal-800/80 border border-white/10 hover:border-gold-400 hover:bg-charcoal-800 transition-all duration-300 rounded-sm shadow-md">
                <div className="w-12 h-12 bg-charcoal-900 border border-white/10 flex items-center justify-center shrink-0 rounded-sm">
                  <Mail className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Confidential Email</h4>
                  <p className="text-neutral-200 text-sm">
                    <a href="mailto:adam@frontlinelaw.com.au" className="hover:text-gold-300 transition-colors">
                      adam@frontlinelaw.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glow-card bg-charcoal-950 border border-white/15 p-6 sm:p-10 shadow-2xl relative rounded-sm">
            {submittedRef ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-white mb-2">Enquiry Received</h4>
                <p className="text-gold-300 font-mono text-sm mb-4">Reference #{submittedRef}</p>
                <p className="text-neutral-200 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Your enquiry has been securely received by Frontline Lawyers. Our partners will review your matter and contact you promptly to arrange your initial conference.
                </p>
                <div className="p-4 bg-charcoal-900 border border-white/10 rounded-sm text-xs text-neutral-300 mb-6 text-left space-y-1">
                  <p><strong className="text-white">Next Step:</strong> Our team will contact you directly via phone or email.</p>
                  <p><strong className="text-white">Confidentiality:</strong> Communications remain strictly protected under legal professional confidentiality.</p>
                </div>
                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    setFirstName('');
                    setLastName('');
                    setPhone('');
                    setEmail('');
                    setCharge('');
                    setDetails('');
                  }}
                  className="bg-gold-400 hover:bg-gold-500 text-charcoal-950 font-bold px-6 py-3 text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  Submit Another Matter
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-2xl font-serif text-white mb-2">Direct Case Enquiry</h4>
                <p className="text-xs text-neutral-200 mb-6 leading-relaxed">
                  Provide your details below to have our partners review your matter and arrange your initial conference.
                </p>

                {errorMsg && (
                  <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 rounded-sm text-xs text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field" 
                  className="space-y-5" 
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold tracking-wider uppercase text-neutral-100 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        className="w-full bg-charcoal-900 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors rounded-sm" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold tracking-wider uppercase text-neutral-100 mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        className="w-full bg-charcoal-900 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors rounded-sm" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold tracking-wider uppercase text-neutral-100 mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="w-full bg-charcoal-900 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors rounded-sm" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-neutral-100 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full bg-charcoal-900 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors rounded-sm" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="charge" className="block text-xs font-bold tracking-wider uppercase text-neutral-100 mb-2">
                      Primary Charge or Allegation
                    </label>
                    <select 
                      id="charge" 
                      value={charge} 
                      onChange={(e) => setCharge(e.target.value)} 
                      className="w-full bg-charcoal-900 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors rounded-sm"
                    >
                      <option value="">Select Primary Offence</option>
                      {practiceAreasData.map((area) => (
                        <option key={area.slug} value={area.title}>{area.title}</option>
                      ))}
                      <option value="Other Criminal Matter">Other Criminal Matter</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-xs font-bold tracking-wider uppercase text-neutral-100 mb-2">
                      Brief Matter Details (Station, court date, charges)
                    </label>
                    <textarea 
                      id="details" 
                      rows={3} 
                      value={details} 
                      onChange={(e) => setDetails(e.target.value)} 
                      className="w-full bg-charcoal-900 border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors resize-none rounded-sm" 
                      placeholder="e.g. Attending Tweed Heads Police Station, court date next Tuesday..." 
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-gold-400 hover:bg-gold-500 text-charcoal-950 font-bold uppercase tracking-widest text-xs py-4 px-6 transition-colors shadow-lg disabled:opacity-50 rounded-sm cursor-pointer"
                    >
                      {isSubmitting ? 'Transmitting Details...' : 'Dispatch Details to Frontline Lawyers'}
                    </button>
                  </div>
                  <p className="text-[11px] text-neutral-300 text-center mt-3 leading-relaxed">
                    All communications are protected under strict legal professional confidentiality. Not formal legal advice until retainer confirmed.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
