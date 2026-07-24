import React from 'react';
import aboutImg from '../../assets/about_old.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full scroll-mt-24">
      <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 shadow-lg max-w-max-width mx-auto space-y-6">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary font-bold flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-[28px]">person</span> /* About Me */
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Avatar side */}
          <div className="md:col-span-4 flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-secondary-fixed-dim/30 shadow-lg bg-surface-container-lowest">
              <img 
                src={aboutImg} 
                alt="Md. Khademul Islam" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
            {/* Quick status pill */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#00e676] bg-[#00e676]/10 border border-[#00e676]/30 rounded-full">
              <span className="h-2 w-2 rounded-full bg-[#00e676] animate-ping"></span>
              Open for Full-Time
            </span>
          </div>

          {/* Biography side */}
          <div className="md:col-span-8 space-y-4 text-left text-on-surface-variant font-body-md">
            <p>
              I’m <strong>Md. Khademul Islam</strong>, a dedicated <strong>Laravel Backend Developer</strong> with 1+ years of hands-on experience building REST APIs, designing robust database systems, and managing deployments for international clients.
            </p>
            <p>
              My expertise spans the full backend lifecycle—from requirement gathering to production—with a strong foundation in PHP, MySQL, database design, query optimization, manual/QA testing methodologies, and real-world project delivery.
            </p>
            
            {/* Key stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-code-sm text-code-sm">
              <div className="flex items-center gap-2 text-primary-fixed-dim">
                <span className="material-symbols-outlined text-sm">public</span>
                <span>International Clients</span>
              </div>
              <div className="flex items-center gap-2 text-primary-fixed-dim">
                <span className="material-symbols-outlined text-sm">construction</span>
                <span>1+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-primary-fixed-dim">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                <span>Live Production Projects</span>
              </div>
              <div className="flex items-center gap-2 text-primary-fixed-dim">
                <span className="material-symbols-outlined text-sm">database</span>
                <span>Database Design & QA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
