import React from 'react';
import heroImg from '../../assets/hero_old.jpg';

interface HeroProps {
  onNavigate: (view: 'home' | 'projects' | 'project-detail') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full flex flex-col justify-center min-h-[500px] relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
        {/* Left Side: Intro */}
        <div className="md:col-span-7 flex flex-col gap-6 text-left">
          <div className="font-code-sm text-code-sm text-primary-fixed-dim flex items-center">
            <span className="text-outline-variant mr-2">$</span> ./greeting.sh <span className="caret-blink"></span>
          </div>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold drop-shadow-[0_0_10px_rgba(56,222,187,0.2)]">
            Hi, I'm <span className="text-secondary-fixed-dim">Khademul Islam</span>
          </h1>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant max-w-2xl font-semibold">
            Laravel Backend Developer
          </h2>
          <p className="text-on-surface-variant/80 font-body-md max-w-xl">
            I build robust, scalable backend systems, design complex database architectures, and deliver secure RESTful APIs with a strong focus on production-ready quality.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
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

        {/* Right Side: Profile Image */}
        <div className="md:col-span-5 flex justify-center w-full">
          <div className="relative w-64 h-64 md:w-80 md:h-80 aspect-square">
            {/* Glowing blur background */}
            <div className="absolute inset-0 bg-primary-fixed-dim/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
            {/* Image frame */}
            <div className="w-full h-full rounded-full border-4 border-primary-fixed-dim/30 overflow-hidden shadow-[0_0_30px_rgba(56,222,187,0.2)] bg-surface-container-lowest">
              <img 
                src={heroImg} 
                alt="Khademul Islam" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
