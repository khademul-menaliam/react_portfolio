import React from 'react';
import { EDUCATION_DATA } from '../../data/educationData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full scroll-mt-24">
      <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 shadow-lg max-w-max-width mx-auto space-y-8">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-[28px]">school</span> /* Education */
        </h2>

        <div className="relative border-l-2 border-primary-fixed-dim/30 ml-4 md:ml-6 space-y-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              {/* Bullet node */}
              <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-primary-fixed-dim shadow-[0_0_8px_#38debb]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-fixed-dim"></span>
              </span>

              <div className="space-y-2">
                <span className="font-code-sm text-code-sm text-primary-fixed-dim bg-surface-container px-3 py-1 rounded border border-outline-variant/30">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold text-primary pt-1">{edu.degree}</h3>
                <p className="text-sm font-semibold text-on-surface-variant">{edu.institution}</p>
                <p className="text-on-surface-variant text-sm max-w-2xl">{edu.description}</p>
                
                <ul className="space-y-1 pt-2 font-code-sm text-code-sm text-secondary">
                  {edu.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-primary-fixed-dim select-none">&gt;</span>
                      <span className="text-on-surface-variant/80">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
