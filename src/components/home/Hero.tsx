import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'projects' | 'project-detail') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full flex flex-col justify-center min-h-[450px] relative z-10">
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="font-code-sm text-code-sm text-primary-fixed-dim flex items-center">
          <span className="text-outline-variant mr-2">$</span> ./greeting.sh <span className="caret-blink"></span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary font-bold drop-shadow-[0_0_10px_rgba(56,222,187,0.2)]">
          Khademul
        </h1>
        <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant max-w-2xl">
          Building robust, scalable backend systems.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <button 
            onClick={() => onNavigate('projects')} 
            className="btn-primary font-code-sm text-code-sm px-6 py-3 rounded uppercase tracking-widest font-semibold flex items-center gap-2"
          >
            View My Work <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); alert("CV download started!"); }}
            className="btn-secondary font-code-sm text-code-sm px-6 py-3 rounded uppercase tracking-widest font-semibold flex items-center gap-2"
          >
            Download CV <span className="material-symbols-outlined text-[18px]">download</span>
          </a>
        </div>
      </div>
    </section>
  );
};
