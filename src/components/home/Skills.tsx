import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full scroll-mt-24">
      <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 shadow-lg max-w-3xl mx-auto space-y-8">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-[28px]">settings_suggest</span> /* Tech Stack & Skills */
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category 1 */}
          <div className="space-y-3">
            <h3 className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Go</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Rust</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Python</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">TypeScript</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">SQL</span>
            </div>
          </div>
          {/* Category 2 */}
          <div className="space-y-3">
            <h3 className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">Backend & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Node.js</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Kafka</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Redis</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Docker</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Kubernetes</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">AWS</span>
            </div>
          </div>
          {/* Category 3 */}
          <div className="space-y-3">
            <h3 className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">React</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Flutter</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Tailwind</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
