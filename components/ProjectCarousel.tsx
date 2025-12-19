import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';
import InteractiveText from './InteractiveText';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-12">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-10 text-pink-200 animate-pulse delay-75">
         <Code2 size={48} />
      </div>
      <div className="absolute bottom-0 left-10 text-blue-200 animate-pulse delay-150">
         <Terminal size={48} />
      </div>

      {/* Main Card Container */}
      <div 
        className="relative bg-white rounded-[2rem] shadow-2xl shadow-blue-100/50 border-4 border-white overflow-hidden min-h-[450px] flex flex-col md:flex-row transition-all duration-500 hover:shadow-pink-100/50"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        
        {/* Left Side: Visual Art Area */}
        <div className="md:w-5/12 bg-gradient-to-br from-blue-50 via-white to-pink-50 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden group">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-pink-300"></div>
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[length:20px_20px]"></div>
            
            {/* Floating Emojis */}
            <div className="absolute top-4 left-4 text-2xl animate-bounce delay-100 opacity-50">✨</div>
            <div className="absolute bottom-4 right-4 text-2xl animate-bounce delay-300 opacity-50">🌸</div>

            {/* Main Visual */}
            <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                <div className="text-[8rem] md:text-[10rem] filter drop-shadow-lg animate-float">
                    {currentProject.emoji}
                </div>
            </div>

            {/* Project ID Badge */}
            <div className="mt-8 font-mono text-xs text-gray-400 bg-white/50 backdrop-blur px-3 py-1 rounded-full border border-gray-200">
                PID: 0x00{currentProject.id}
            </div>
        </div>

        {/* Right Side: Info Area */}
        <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-white/80 backdrop-blur relative">
             <div>
                 <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping"></span>
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Featured Project</span>
                 </div>
                 
                 <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    <InteractiveText text={currentProject.title} />
                 </h3>
                 
                 <p className="text-gray-500 font-sans leading-relaxed text-lg mb-8">
                    {currentProject.description}
                 </p>

                 {/* Tech Stack Pills */}
                 <div className="mb-6">
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Cpu size={14} />
                        Tech Stack
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {currentProject.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-mono font-bold rounded-lg border-b-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-500 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                     </div>
                 </div>
             </div>

             {/* Action Buttons */}
             <div className="flex gap-4 pt-6 border-t border-gray-50">
                {currentProject.link && (
                    <a 
                      href={currentProject.link} 
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg transition-all text-sm font-bold group"
                    >
                        <Github size={18} />
                        <span className="group-hover:underline decoration-wavy decoration-pink-400">View Code</span>
                    </a>
                )}
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 hover:bg-blue-100 hover:-translate-y-1 hover:shadow-lg transition-all text-sm font-bold">
                    <ExternalLink size={18} /> Live Demo
                </button>
             </div>
        </div>
      </div>

      {/* Navigation Buttons (Floating) */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-0 md:left-2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border-2 border-pink-100 rounded-full text-pink-400 hover:bg-pink-50 hover:scale-110 shadow-lg transition-all z-20 group"
        aria-label="Previous Project"
      >
         <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-0 md:right-2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border-2 border-pink-100 rounded-full text-pink-400 hover:bg-pink-50 hover:scale-110 shadow-lg transition-all z-20 group"
        aria-label="Next Project"
      >
         <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, idx) => (
            <button
                key={idx}
                onClick={() => { setCurrentIndex(idx); setIsAutoPlaying(false); }}
                className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                    ? 'w-8 h-2 bg-gradient-to-r from-blue-400 to-pink-400' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-pink-300'
                }`}
            />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;