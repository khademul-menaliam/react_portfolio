import React from 'react';

interface FooterProps {
  visitorCount: number;
  onNavigate: (view: 'home' | 'projects' | 'project-detail', projectId?: string) => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ visitorCount, onNavigate, onOpenTerminal }) => {
  return (
    <footer className="bg-surface-container-lowest w-full py-8 border-t border-outline-variant/10 mt-auto z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto gap-4">
        <div className="font-code-sm text-code-sm text-on-surface-variant">
          © 2026 khademul_dev
        </div>
        
        <div className="flex gap-6 text-on-surface-variant">
          <span 
            onClick={() => onNavigate('projects')} 
            className="material-symbols-outlined hover:text-secondary-fixed-dim transition-all cursor-pointer"
          >
            save_as
          </span>
          <span 
            onClick={() => onNavigate('projects')} 
            className="material-symbols-outlined hover:text-secondary-fixed-dim transition-all cursor-pointer"
          >
            code
          </span>
          <span 
            onClick={onOpenTerminal} 
            className="material-symbols-outlined hover:text-secondary-fixed-dim transition-all cursor-pointer"
          >
            terminal
          </span>
          <span 
            onClick={() => onNavigate('home')} 
            className="material-symbols-outlined hover:text-secondary-fixed-dim transition-all cursor-pointer"
          >
            public
          </span>
        </div>

        <div className="font-code-sm text-code-sm text-secondary-fixed-dim flex items-center gap-2 bg-surface-container/50 px-3 py-1 rounded border border-outline-variant/30">
          <span className="text-outline-variant">$</span> visitor_count: <span className="text-primary-fixed-dim">{visitorCount}</span>
        </div>
      </div>
    </footer>
  );
};
