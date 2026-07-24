import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full scroll-mt-24">
      <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 shadow-lg max-w-max-width mx-auto space-y-8">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-[28px]">settings_suggest</span> /* Tech Stack & Skills */
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category 1 */}
          <div className="space-y-3">
            <h3 className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">PHP</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Laravel</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">C / C++</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">JavaScript</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">HTML / CSS</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Tailwind CSS</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Alpine.js</span>
            </div>
          </div>
          {/* Category 2 */}
          <div className="space-y-3">
            <h3 className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">Database & Systems</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">MySQL</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Database Design</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Query Optimization</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">cPanel</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Apache (XAMPP)</span>
            </div>
          </div>
          {/* Category 3 */}
          <div className="space-y-3">
            <h3 className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-wider">QA, Networks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Manual Testing</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Bug Reporting</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">SDLC / STLC</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">TCP/IP & VLAN</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Cisco Packet Tracer</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">VS Code / Postman</span>
              <span className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded">Git & GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
