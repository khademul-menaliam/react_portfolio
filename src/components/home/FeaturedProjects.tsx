import React from 'react';
import { PROJECTS_DATA } from '../../data/projectsData';

interface FeaturedProjectsProps {
  onNavigate: (view: 'home' | 'projects' | 'project-detail', projectId?: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate }) => {
  const featured = PROJECTS_DATA.slice(0, 6);

  return (
    <section id="featured-projects" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full">
      <div className="max-w-max-width mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[28px]">star</span> /* Featured Projects */
          </h2>
          <button 
            onClick={() => onNavigate('projects')}
            className="font-code-sm text-code-sm text-primary-fixed-dim hover:underline flex items-center gap-1"
          >
            View All ({PROJECTS_DATA.length}) <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <article 
              key={project.id}
              onClick={() => onNavigate('project-detail', project.id)}
              className="glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col transition-all duration-300 group cursor-pointer"
            >
              <div className="p-3 border-b border-white/5 flex items-center bg-[#0e0e13] px-4">
                <div className="terminal-dots"></div>
              </div>
              
              <div className="relative h-32 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-fixed-dim/25 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 pointer-events-none"></div>
                <img 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                  src={project.imageSrc} 
                  alt={project.title} 
                />
              </div>

              <div className="p-4 flex-grow flex flex-col space-y-2 text-left">
                <h3 className="font-bold text-primary text-base group-hover:text-primary-fixed-dim transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-xs line-clamp-2 mb-2">
                  {project.description}
                </p>
                {/* Direct links row */}
                {(project.liveLink || project.githubLink) && (
                  <div className="flex gap-4 mt-auto pt-2 text-xs font-code-sm border-t border-white/5" onClick={(e) => e.stopPropagation()}>
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-fixed-dim hover:text-primary flex items-center gap-1 hover:underline"
                      >
                        <span className="material-symbols-outlined text-sm">rocket_launch</span> Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-secondary-fixed-dim hover:text-secondary flex items-center gap-1 hover:underline"
                      >
                        <span className="material-symbols-outlined text-sm">code</span> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
