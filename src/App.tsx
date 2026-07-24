import { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Skills } from './components/home/Skills';
import { EducationTimeline } from './components/home/EducationTimeline';
import { FeaturedProjects } from './components/home/FeaturedProjects';
import { ContactSection } from './components/contact/ContactSection';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { ProjectDetail } from './components/projects/ProjectDetail';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'projects' | 'project-detail'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('nexus-core-ui');
  const [projectsPage, setProjectsPage] = useState<number>(1);
  const [visitorCount, setVisitorCount] = useState<number>(1337);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState<'gui' | 'cli'>('gui');

  // Sync state with URL hash (Hash Router)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '');
        setSelectedProjectId(id);
        setCurrentView('project-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/projects') {
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
        if (hash && hash !== '#/' && hash !== '#home') {
          const targetId = hash.replace('#', '');
          // Small timeout to allow home view to render before scrolling
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Increment visitor count slightly for realism
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearTimeout(timer);
  }, [visitorCount]);

  const navigateToView = (view: 'home' | 'projects' | 'project-detail', projectId?: string) => {
    if (view === 'project-detail' && projectId) {
      window.location.hash = `#/project/${projectId}`;
    } else if (view === 'projects') {
      window.location.hash = '#/projects';
    } else {
      window.location.hash = '#/';
    }
  };

  const openTerminal = () => {
    window.location.hash = '#contact';
    setContactMethod('cli');
  };

  return (
    <>
      <Header 
        currentView={currentView} 
        onNavigate={navigateToView} 
        onOpenTerminal={openTerminal} 
      />

      <main className="flex-grow">
        {currentView === 'home' && (
          <div className="py-12 md:py-24 space-y-24 md:space-y-36">
            <Hero onNavigate={navigateToView} />
            <About />
            <Skills />
            <EducationTimeline />
            <FeaturedProjects onNavigate={navigateToView} />
            <ContactSection 
              contactMethod={contactMethod} 
              setContactMethod={setContactMethod} 
              visitorCount={visitorCount} 
              onNavigate={navigateToView} 
            />
          </div>
        )}

        {currentView === 'projects' && (
          <ProjectGrid 
            projectsPage={projectsPage} 
            setProjectsPage={setProjectsPage} 
            onNavigate={navigateToView} 
          />
        )}

        {currentView === 'project-detail' && (
          <ProjectDetail 
            projectId={selectedProjectId} 
            onNavigate={navigateToView} 
            onOpenLightbox={setLightboxImg} 
          />
        )}
      </main>

      <Footer 
        visitorCount={visitorCount} 
        onNavigate={navigateToView} 
        onOpenTerminal={openTerminal} 
      />

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8" 
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-on-surface hover:text-primary transition-colors" 
            onClick={() => setLightboxImg(null)}
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
          <img 
            alt="Expanded view" 
            className="max-w-full max-h-full rounded-lg border border-outline-variant/30 shadow-2xl" 
            src={lightboxImg} 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default App;
