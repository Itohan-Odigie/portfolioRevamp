import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';
import InteractiveText from './InteractiveText';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm border-2 border-pink-100 rounded-3xl p-6 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-100">
      <div className="absolute -top-4 -right-4 bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm border border-white group-hover:scale-110 transition-transform">
        {project.emoji}
      </div>
      
      <div className="mb-4">
        <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
          <InteractiveText text={project.title} />
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed font-sans">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-pink-50 text-pink-500 text-xs font-bold rounded-full border border-pink-100 group-hover:bg-pink-100 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-pink-500 transition-colors"
          >
            <Github size={14} /> Code
          </a>
        )}
        <button className="flex items-center gap-1 text-xs font-bold text-pink-400 hover:text-pink-600 transition-colors ml-auto">
          View Demo <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;