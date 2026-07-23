import React from 'react';
import { ContactForm } from './ContactForm';
import { Terminal } from './Terminal';

interface ContactSectionProps {
  contactMethod: 'gui' | 'cli';
  setContactMethod: (method: 'gui' | 'cli') => void;
  visitorCount: number;
  onNavigate: (view: 'home' | 'projects' | 'project-detail') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactMethod,
  setContactMethod,
  visitorCount,
  onNavigate
}) => {
  return (
    <section id="contact" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full scroll-mt-24">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary font-bold flex items-center gap-2 text-left">
            <span className="material-symbols-outlined text-[28px]">contact_mail</span> /* Contact & Connect */
          </h2>
          
          {/* Toggle buttons */}
          <div className="flex rounded-md bg-surface-container-low/50 p-1 border border-outline-variant/30 font-code-sm text-code-sm">
            <button 
              onClick={() => setContactMethod('gui')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${contactMethod === 'gui' ? 'bg-primary-fixed-dim text-on-primary-fixed font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            >
              <span className="material-symbols-outlined text-[16px]">web</span> GUI Form
            </button>
            <button 
              onClick={() => setContactMethod('cli')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${contactMethod === 'cli' ? 'bg-primary-fixed-dim text-on-primary-fixed font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span> SSH Terminal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Direct Info cards */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <div className="glass-panel p-5 rounded-xl border border-outline-variant/20 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">mail</span>
              <div>
                <h4 className="font-code-sm text-code-sm text-on-surface-variant uppercase">Email</h4>
                <p className="text-sm font-semibold text-primary">khademul@dev.local</p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-outline-variant/20 flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl">pin_drop</span>
              <div>
                <h4 className="font-code-sm text-code-sm text-on-surface-variant uppercase">Location</h4>
                <p className="text-sm font-semibold text-primary">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-outline-variant/20 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              <div>
                <h4 className="font-code-sm text-code-sm text-on-surface-variant uppercase">Networks</h4>
                <div className="flex gap-3 text-xs text-primary-fixed-dim font-code-sm pt-1">
                  <a href="#" className="hover:underline">GitHub</a>
                  <span>|</span>
                  <a href="#" className="hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed View panels */}
          <div className="md:col-span-8">
            {contactMethod === 'gui' ? (
              <div className="glass-panel p-6 rounded-xl border border-outline-variant/20 shadow-xl text-left">
                <ContactForm />
              </div>
            ) : (
              <Terminal visitorCount={visitorCount} onNavigate={onNavigate} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
