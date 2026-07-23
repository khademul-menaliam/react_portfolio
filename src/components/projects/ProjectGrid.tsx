import React from 'react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projectsPage: number;
  setProjectsPage: React.Dispatch<React.SetStateAction<number>>;
  onNavigate: (view: 'home' | 'projects' | 'project-detail', projectId?: string) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projectsPage,
  setProjectsPage,
  onNavigate
}) => {
  const projectsPerPage = 3;
  const totalPages = Math.ceil(PROJECTS_DATA.length / projectsPerPage);
  
  const currentProjects = PROJECTS_DATA.slice(
    (projectsPage - 1) * projectsPerPage,
    projectsPage * projectsPerPage
  );

  return (
    <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* View Header */}
      <div className="mb-12 text-left">
        <div className="font-code-sm text-code-sm text-on-surface-variant mb-2">
          <span className="text-primary-fixed-dim">~</span>/khademul/workspace $ cd ../projects
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary font-bold mb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-4xl text-primary-fixed-dim">folder_open</span>
          All Projects
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          A comprehensive archive of my technical undertakings, featuring full-stack applications, distributed systems, and open-source contributions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {currentProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onClick={() => onNavigate('project-detail', project.id)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 font-code-sm text-code-sm">
        <button 
          onClick={() => setProjectsPage(prev => Math.max(prev - 1, 1))}
          disabled={projectsPage === 1}
          className={`neon-border text-on-surface-variant px-4 py-2 rounded-md hover:text-primary transition-colors flex items-center gap-1 bg-surface-container-low/50 ${projectsPage === 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span> Prev
        </button>
        
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setProjectsPage(idx + 1)}
            className={`neon-border px-4 py-2 rounded-md ${projectsPage === idx + 1 ? 'active font-bold' : 'text-on-surface-variant bg-surface-container-low/50'}`}
          >
            {idx + 1}
          </button>
        ))}
        
        <button 
          onClick={() => setProjectsPage(prev => Math.min(prev + 1, totalPages))}
          disabled={projectsPage === totalPages}
          className={`neon-border text-on-surface-variant px-4 py-2 rounded-md hover:text-primary transition-colors flex items-center gap-1 bg-surface-container-low/50 ${projectsPage === totalPages ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          Next <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};
