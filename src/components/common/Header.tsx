import React from 'react';

interface HeaderProps {
  currentView: 'home' | 'projects' | 'project-detail';
  onNavigate: (view: 'home' | 'projects' | 'project-detail', projectId?: string) => void;
  onOpenTerminal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenTerminal }) => {
  const triggerHomeScroll = (elementId: string) => {
    window.location.hash = `#${elementId}`;
  };

  return (
    <header className="sticky top-0 w-full bg-surface/85 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_15px_rgba(56,222,187,0.1)] z-50">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto">
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-4 cursor-pointer active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-primary">menu</span>
          <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tighter hover:text-primary transition-colors duration-300">
            &lt;Khademul/&gt;
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8 font-code-sm text-code-sm">
          <button 
            onClick={() => triggerHomeScroll('about')} 
            className={`hover:text-primary transition-colors duration-300 ${currentView === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            /* About */
          </button>
          <button 
            onClick={() => triggerHomeScroll('skills')}
            className={`hover:text-primary transition-colors duration-300 ${currentView === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            /* Skills */
          </button>
          <button 
            onClick={() => triggerHomeScroll('education')}
            className={`hover:text-primary transition-colors duration-300 ${currentView === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            /* Education */
          </button>
          <button 
            onClick={() => onNavigate('projects')} 
            className={`hover:text-primary transition-colors duration-300 ${currentView === 'projects' || currentView === 'project-detail' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant'}`}
          >
            /* Projects */
          </button>
          <button 
            onClick={() => triggerHomeScroll('contact')}
            className={`hover:text-primary transition-colors duration-300 ${currentView === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            /* Contact */
          </button>
        </nav>
        
        <div 
          onClick={onOpenTerminal}
          className="flex items-center cursor-pointer active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-primary">terminal</span>
        </div>
      </div>
    </header>
  );
};
