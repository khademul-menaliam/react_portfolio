import React from 'react';
import { PROJECTS_DATA } from '../../data/projectsData';

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (view: 'home' | 'projects' | 'project-detail') => void;
  onOpenLightbox: (imgSrc: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectId,
  onNavigate,
  onOpenLightbox
}) => {
  const project = PROJECTS_DATA.find(p => p.id === projectId) || PROJECTS_DATA[0];

  return (
    <div className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row gap-gutter">
      
      {/* Left/Main Column */}
      <div className="w-full md:w-8/12 flex flex-col gap-8 text-left">
        
        {/* Header Section */}
        <section className="space-y-4">
          <button 
            onClick={() => onNavigate('projects')} 
            className="font-code-sm text-code-sm text-primary-fixed-dim hover:text-primary transition-colors flex items-center gap-2 group mb-4"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">keyboard_return</span>
            <span>cd ../projects</span>
          </button>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary font-bold tracking-tighter">
            {project.title}
          </h1>
          <p className="font-code-sm text-code-sm text-on-surface-variant max-w-2xl">
            {project.description}
          </p>
        </section>

        {/* Main Showcase Image */}
        <div className="w-full aspect-video rounded-xl overflow-hidden glass-panel border border-outline-variant/20 relative group">
          <div className="absolute top-4 left-4 z-10 window-controls"></div>
          <img 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 cursor-zoom-in" 
            onClick={() => onOpenLightbox(project.imageSrc)}
            src={project.imageSrc} 
          />
        </div>

        {/* Project Overview */}
        <div className="glass-panel p-6 rounded-xl border border-outline-variant/20 shadow-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-secondary font-semibold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">description</span> Overview
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed">
            <p>{project.overview}</p>
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="glass-panel p-6 rounded-xl border border-outline-variant/20 shadow-md space-y-6">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-secondary font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined">collections</span> Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  onClick={() => onOpenLightbox(imgUrl)}
                  className="rounded-lg overflow-hidden shadow-md cursor-zoom-in relative group border border-outline-variant/10 aspect-video bg-[#050508]"
                >
                  <img 
                    src={imgUrl} 
                    alt={`Project screenshot ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-primary-fixed-dim/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl drop-shadow">zoom_in</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Right/Sidebar Column */}
      <div className="w-full md:w-4/12 flex flex-col gap-6 text-left">
        
        {/* Details Card */}
        <div className="glass-panel p-6 rounded-xl space-y-6 border border-outline-variant/20 shadow-md">
          <div className="space-y-2 border-b border-outline-variant/10 pb-4">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Client</h3>
            <p className="font-code-sm text-code-sm text-primary">{project.client}</p>
          </div>
          <div className="space-y-2 border-b border-outline-variant/10 pb-4">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Timeline</h3>
            <p className="font-code-sm text-code-sm text-primary">{project.timeline}</p>
          </div>
          <div className="space-y-2 border-b border-outline-variant/10 pb-4">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Role</h3>
            <p className="font-code-sm text-code-sm text-primary">{project.role}</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-pill font-code-sm text-code-sm px-3 py-1 rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4">
          {project.liveLink ? (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-code-sm text-code-sm px-6 py-3 rounded flex items-center justify-center gap-2 w-full uppercase tracking-wider font-semibold text-center hover:no-underline"
            >
              <span className="material-symbols-outlined">rocket_launch</span> Live Demo
            </a>
          ) : (
            <button 
              disabled
              className="btn-primary font-code-sm text-code-sm px-6 py-3 rounded flex items-center justify-center gap-2 w-full uppercase tracking-wider font-semibold opacity-40 cursor-not-allowed text-center"
            >
              <span className="material-symbols-outlined">rocket_launch</span> Live Demo Offline
            </button>
          )}

          {project.githubLink ? (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary font-code-sm text-code-sm px-6 py-3 rounded flex items-center justify-center gap-2 w-full uppercase tracking-wider font-semibold text-center hover:no-underline"
            >
              <span className="material-symbols-outlined">code</span> View Source
            </a>
          ) : (
            <button 
              disabled
              className="btn-secondary font-code-sm text-code-sm px-6 py-3 rounded flex items-center justify-center gap-2 w-full uppercase tracking-wider font-semibold opacity-40 cursor-not-allowed text-center"
            >
              <span className="material-symbols-outlined">code</span> Source Private
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
