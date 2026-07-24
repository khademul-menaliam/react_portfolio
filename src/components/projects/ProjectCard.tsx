import React from 'react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case 'public': return 'public';
      case 'lock': return 'lock';
      case 'smartphone': return 'smartphone';
      case 'terminal': return 'terminal';
      case 'api': return 'api';
      case 'shopping_cart': return 'shopping_cart';
      default: return 'public';
    }
  };

  return (
    <article 
      onClick={onClick}
      className="glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col transition-all duration-300 group cursor-pointer text-left"
    >
      {/* File Mock Tab Header */}
      <div className="p-3 border-b border-white/5 flex items-center bg-[#0e0e13]">
        <div className="terminal-dots"></div>
        <span className="font-code-sm text-code-sm text-on-surface-variant/50 ml-auto mr-2">bash</span>
      </div>
      
      {/* Project image banner */}
      <div className="relative h-40 w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary-fixed-dim/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 pointer-events-none"></div>
        <img 
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
          src={project.imageSrc} 
          alt={project.title} 
        />
      </div>
      
      {/* Card Content body */}
      <div className="p-5 flex-grow flex flex-col text-left">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-headline-lg text-[20px] font-semibold text-primary">{project.title}</h2>
          <span className="material-symbols-outlined text-primary-fixed-dim text-lg">
            {getVisibilityIcon(project.visibility)}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4 flex-grow line-clamp-2">
          {project.description}
        </p>

        {/* Direct links row */}
        {(project.liveLink || project.githubLink) && (
          <div className="flex gap-4 mb-4 text-xs font-code-sm" onClick={(e) => e.stopPropagation()}>
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

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-pill font-label-caps text-label-caps px-2 py-1 rounded">
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
