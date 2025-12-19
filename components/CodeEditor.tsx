import React, { useState } from 'react';
import { Project } from '../types';
import { 
  FileText, User, Mail, Heart, Search, GitGraph, Settings, 
  LayoutGrid, FileJson, FileCode, ChevronRight, Laptop, 
  Database, Cloud, Cpu, Layout, Server, Folder, Github, 
  Plus, GitBranch, Eye, Box, Sparkles, Send, X, FolderOpen, Code2, ArrowUpRight, Camera,
  Terminal, Lock
} from 'lucide-react';
import lwicsImg from "../src/lwics.jpg";

interface Experience {
  company: string;
  role: string;
  date: string;
  icon: string;
  tags: string[];
}

interface CodeEditorProps {
  experience: Experience[];
  projects: Project[];
}

type FileType = 'about' | 'experience' | 'skills' | 'projects' | 'activities' | 'blog' | 'contact' | 'exp_item' | 'resume';

const RESUME_LINK = "https://docs.google.com/document/d/1Bb8rT1AULpHhYINPjtYGW6AUtjETm-lZhn9TW43vurU/edit?usp=sharing";

const CodeEditor: React.FC<CodeEditorProps> = ({ experience, projects }) => {
  const [activeFile, setActiveFile] = useState<FileType | null>('about');
  const [openTabs, setOpenTabs] = useState<FileType[]>(['about']);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isExpExpanded, setIsExpExpanded] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const files = [
    { id: 'about', name: 'aboutme.md', icon: <FileText size={14} className="text-pink-400" />, type: 'markdown' },
    { id: 'experience', name: 'experience', icon: <Folder size={14} className="text-blue-400" />, type: 'folder' },
    { id: 'projects', name: 'projects', icon: <LayoutGrid size={14} className="text-purple-400" />, type: 'grid' },
    { id: 'skills', name: 'skills.json', icon: <FileJson size={14} className="text-cyan-400" />, type: 'json' },
    { id: 'resume', name: 'request_resume.sh', icon: <Lock size={14} className="text-pink-500" />, type: 'shell' },
    { id: 'activities', name: 'life.yml', icon: <Heart size={14} className="text-red-400" />, type: 'yaml' },
    { id: 'contact', name: 'contact.css', icon: <FileCode size={14} className="text-purple-400" />, type: 'css' },
  ];

  const activeFileData = files.find(f => f.id === activeFile);

  const handleFileClick = (fileId: FileType) => {
    if (!openTabs.includes(fileId)) setOpenTabs([...openTabs, fileId]);
    setActiveFile(fileId);
    if (fileId !== 'exp_item') {
      setSelectedExperience(null);
    }
  };

  const handleExpFileClick = (job: Experience) => {
    setSelectedExperience(job);
    if (!openTabs.includes('exp_item')) {
      setOpenTabs([...openTabs, 'exp_item']);
    }
    setActiveFile('exp_item');
  };

  const handleCloseTab = (e: React.MouseEvent, fileId: FileType) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(id => id !== fileId);
    setOpenTabs(newTabs);
    if (activeFile === fileId) {
      if (newTabs.length > 0) setActiveFile(newTabs[newTabs.length - 1]);
      else setActiveFile(null);
    }
  };

  const handleSendEmail = (e: React.MouseEvent) => {
    setContactSent(true);
  };

  const renderContent = () => {
    if (!activeFile) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-gray-300 select-none bg-gray-50/30">
                <div className="mb-4 opacity-20 text-6xl">💻</div>
                <p className="text-xs font-medium opacity-50">Select a file from the explorer</p>
            </div>
        );
    }

    switch (activeFile) {
      case 'about':
        return (
          <div className="p-6 md:p-10 font-mono text-sm leading-8 overflow-auto h-full bg-white relative flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1 min-w-[300px]">
                <Comment># Welcome to my digital workspace! 🖥️</Comment>
                <Line num={1} content={<><span className="text-pink-400">class</span> <span className="text-yellow-500">Itohan</span> <span className="text-pink-400">extends</span> <span className="text-pink-400">Developer</span> {'{'}</>} />
                <Line num={2} content={<><span className="ml-4 text-purple-400">constructor</span>() {'{'}</>} />
                <Line num={3} content={<><span className="ml-8 text-pink-400">super</span>();</>} />
                <Line num={4} content={<><span className="ml-8 text-pink-400">this</span>.<span className="text-pink-400">name</span> = <span className="text-green-500">"Itohan Odigie"</span>;</>} />
                <Line num={5} content={<><span className="ml-8 text-pink-400">this</span>.<span className="text-pink-400">education</span> = <span className="text-green-500">"CS + Stats @ UWaterloo & WLU"</span>;</>} />
                <Line num={4} content={<><span className="ml-8 text-pink-400">this</span>.<span className="text-pink-400">currently</span> = <span className="text-green-500">"VP of Laurier Women In CS"</span>;</>} />
                <Line
                  num={6}
                  content={
                    <span className="ml-8 block">
                      <span className="text-pink-400">this</span>.<span className="text-pink-400">interests</span> ={" "}
                      <span className="text-green-500">
                        "backend systems 🛠️, devops ⚙️, AI infra/tools 🤖, automation 🧩 + cloud ☁️"
                      </span>
                      ;
                    </span>
                  }
                />

                <Line num={8} content={<><span className="ml-8 text-pink-400">this</span>.<span className="text-pink-400">mood</span> = <span className="text-green-500">"Always learning ✨"</span>;</>} />

                <Line num={9} content={<><span className="ml-4">{'}'}</span></>} />
                <EmptyLine num={10} />
                <Comment># Why I code:</Comment>
                <Line num={11} content={<span className="text-gray-500">I love building software that makes an impact. </span>} />
                <Line num={12} content={<span className="text-gray-500">and I want tech to remove barriers, not create them :) </span>} />
                <EmptyLine num={11} />
                <Line num={1} content={<span className="text-pink-300 italic">// plus coding is super cool!</span>} />
            </div>
            
            <div className="lg:w-1/3 shrink-0 flex items-center justify-center relative self-center lg:self-start mt-6 lg:mt-0">
               <div className="relative group animate-float">
                  {/* Soft atmospheric glow */}
                  <div className="absolute -inset-10 bg-pink-100/20 rounded-full blur-3xl group-hover:bg-pink-100/30 transition-colors duration-1000"></div>
                  
                  {/* Character Illustration (Transparent PNG) */}
                  <img
                  src="/itohan.png" 
                  alt="Itohan illustration"
                  className="relative z-10 w-full max-w-[280px] h-auto drop-shadow-[0_25px_20px_rgba(244,114,182,0.15)] transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-2"               
                  />
                  
                  {/* Aesthetic Accent Icons */}
                  <div className="absolute top-0 right-0 p-2 bg-white/40 backdrop-blur rounded-xl border border-white/50 shadow-sm animate-bounce-slow">
                    <Sparkles size={20} className="text-pink-300" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-2 bg-white/40 backdrop-blur rounded-xl border border-white/50 shadow-sm animate-pulse">
                    <Heart size={18} className="text-pink-400 fill-pink-400/10" />
                  </div>
               </div>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="h-full bg-gray-50/30 p-8 overflow-y-auto relative">
             <div className="max-w-6xl mx-auto">
                 <div className="mb-6 text-gray-500 font-mono text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2"><Folder size={14} className="text-blue-400" /> / users / itohan / work_history /</div>
                    <a 
                      href={RESUME_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-500 font-bold hover:underline underline-offset-4 decoration-wavy flex items-center gap-1"
                    >
                      request full resume <ArrowUpRight size={12} />
                    </a>
                 </div>
                 
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {experience.map((job, i) => (
                        <div 
                           key={i}
                           onClick={() => {
                             setIsExpExpanded(true);
                             handleExpFileClick(job);
                           }}
                           className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-50/50 cursor-pointer transition-all hover:scale-105"
                        >
                           <Folder size={72} className="text-blue-200 fill-blue-50/80 group-hover:text-blue-300 transition-colors" />
                           <span className="text-[11px] font-bold text-gray-500 text-center truncate w-full px-2">
                               {job.company.toLowerCase().replace(/\s/g, '_')}
                           </span>
                        </div>
                    ))}
                    <a 
                       href={RESUME_LINK}
                       target="_blank"
                       rel="noreferrer"
                       className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-pink-50/50 cursor-pointer transition-all hover:scale-105"
                    >
                       <Folder size={72} className="text-pink-200 fill-pink-50/80 group-hover:text-pink-300 transition-colors" />
                       <span className="text-[11px] font-bold text-pink-500 text-center truncate w-full px-2">
                           request_access.pdf
                       </span>
                    </a>
                 </div>
             </div>
          </div>
        );

      case 'exp_item':
        if (!selectedExperience) return (
          <div className="h-full flex items-center justify-center text-gray-400 font-mono text-xs italic">
            Select a specific experience file from the sidebar...
          </div>
        );
        
        const needsCoverLogo = ["CiviConnect", "Laurier Computing Society"].includes(
          selectedExperience?.company ?? ""
        );

        return (
          <div className="h-full bg-white p-8 md:p-12 overflow-y-auto relative animate-in fade-in duration-300">
             <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-gray-400 font-mono text-xs flex items-center gap-2 border-b border-gray-100 pb-4">
                    <Folder size={14} className="text-blue-400" /> / experience / <span className="text-blue-500">{selectedExperience.company.toLowerCase().replace(/\s/g, '_')}</span> / README.md
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    
                <div
  className={[
    "w-32 h-32 md:w-48 md:h-48 bg-gray-50 rounded-[2rem] border-4 border-white shadow-xl shrink-0",
    "relative overflow-hidden",
    needsCoverLogo ? "p-0" : "p-6 flex items-center justify-center",
  ].join(" ")}
>
  <img
    src={selectedExperience.icon}
    alt={`${selectedExperience.company} logo`}
    className={[
      "w-full h-full",
      needsCoverLogo ? "object-cover scale-[1]" : "object-contain opacity-90",
    ].join(" ")}
  />
</div>



                    <div className="flex-1">
                        <div className="mb-8">
                        <h2 className="text-3xl font-sans font-bold text-gray-800 uppercase tracking-wider mb-2">{selectedExperience.role}</h2>
                            <p className="text-sm text-gray-400 font-mono font-bold uppercase tracking-widest">{selectedExperience.date}</p>
                        </div>

                        <div className="space-y-6">
                            
                            <div>
                                <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-[0.2em] mb-3">tech stack</h4>
                                
                                <div className="flex flex-wrap gap-2">
                                    {selectedExperience.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-blue-50 text-blue-500 text-[10px] font-bold rounded-full border border-blue-100 uppercase tracking-tight">{tag}</span>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
             </div>
          </div>
        );

      case 'projects':
        return (
          <div className="h-full bg-[#fdf2f8]/10 p-6 md:p-10 overflow-y-auto relative">
             <div className="max-w-5xl mx-auto">
                 <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-purple-100 p-1.5 rounded-lg shadow-sm">
                          <LayoutGrid size={20} className="text-purple-500" />
                        </div>
                        <h2 className="font-sans text-xl text-gray-800 font-bold tracking-widest uppercase">project gallery
</h2>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest bg-gray-50 self-start px-3 py-1 rounded-md border border-gray-100">
                        <GitBranch size={12} /> main / projects
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project, i) => (
                        <div 
                            key={i}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-lg"
                        >
                            <div className="aspect-[4/3] flex items-center justify-center bg-[#fdf2f8]/30 relative rounded-t-xl overflow-hidden">
                                <div className="text-[4rem] transition-transform duration-500 group-hover:scale-110">
                                    {project.emoji}
                                </div>
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/80 backdrop-blur-sm p-1 rounded-md border border-purple-50">
                                        <Eye size={14} className="text-purple-400" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-4 flex flex-col gap-3">
                                <h3 className="text-sm font-bold text-gray-800 truncate tracking-tight lowercase">
                                    {project.title}
                                </h3>
                                
                                <div className="flex items-center justify-between mt-1">
                                    <div className="px-2.5 py-1 bg-purple-50 text-purple-600 text-[9px] font-bold rounded-md border border-purple-100 uppercase tracking-tight">
                                        {project.tags[0]}
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-mono group-hover:text-purple-500 transition-colors font-bold">
                                        click open
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <a 
                        href="https://github.com/Itohan-Odigie" target="_blank" rel="noreferrer"
                        className="bg-white border border-purple-100 border-dashed rounded-xl flex flex-col items-center justify-center p-6 gap-3 text-gray-400 hover:text-purple-500 hover:border-purple-300 hover:bg-purple-50/10 hover:scale-[1.02] transition-all group shadow-sm"
                    >
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:bg-purple-50 transition-colors">
                            <Plus size={24} className="text-gray-300 group-hover:text-purple-400" />
                        </div>
                        <div className="text-center">
                           <h3 className="text-sm font-display text-gray-400 lowercase group-hover:text-purple-500">more repos</h3>
                           <p className="text-[9px] font-sans opacity-60">view on github</p>
                        </div>
                    </a>
                 </div>
             </div>

             {selectedProject && (
                 <div className="absolute inset-0 z-50 flex items-center justify-center bg-purple-900/10 backdrop-blur-[4px]" onClick={() => setSelectedProject(null)}>
                     <div className="bg-white w-[580px] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
                        <div className="bg-purple-50 px-8 py-4 flex items-center justify-between border-b border-purple-100">
                            <div className="flex gap-2">
                                <button onClick={() => setSelectedProject(null)} className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></button>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <span className="font-mono text-[10px] text-purple-300 font-bold uppercase tracking-[0.3em]">inspecting_source.sh</span>
                            <div className="w-12"></div>
                        </div>
                        
                        <div className="p-12">
                            <div className="flex items-center gap-10 mb-10">
                                <div className="text-[7rem] drop-shadow-sm flex items-center justify-center">
                                    {selectedProject.emoji}
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-widest text-gray-800 mb-2 md:mb-4 leading-none">{selectedProject.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-purple-50 text-purple-500 text-[10px] font-bold rounded-lg uppercase tracking-tight">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-[#f9fafb] p-8 rounded-[1.5rem] border border-[#f3f4f6] mb-12 relative overflow-hidden">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-purple-200 rounded-r-full"></div>
                                <p className="text-gray-500 font-sans text-lg leading-relaxed italic px-4">
                                    "{selectedProject.description}"
                                </p>
                            </div>

                            <div className="flex gap-4">
                                {selectedProject.link && (
                                    <a 
                                        href={selectedProject.link} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="flex-[1.2] flex items-center justify-center gap-2 py-5 bg-[#111827] text-white text-sm font-bold rounded-2xl hover:opacity-90 transition-all shadow-md"
                                    >
                                        <Github size={20} /> explore files
                                    </a>
                                )}
                                <button 
                                    onClick={() => setSelectedProject(null)} 
                                    className="flex-1 py-5 bg-[#f5f3ff] text-purple-500 text-sm font-bold rounded-2xl hover:bg-[#ede9fe] transition-all"
                                >
                                    exit entry
                                </button>
                            </div>
                        </div>
                     </div>
                 </div>
             )}
          </div>
        );

      case 'skills':
         const skills = {
          "🤖 ai_ml": ["Python", "PyTorch", "NumPy", "Pandas", "LLMs", "RAG Pipelines"],

  "🎨 frontend": ["React", "TypeScript", "JavaScript", "Next.js", "Angular"],

  "🛠️ backend": ["C/C++", "Java", "Swift", "Go", "Spring Boot"],

  "🗄️ databases_data": ["PostgreSQL (SQL)", "MongoDB", "Snowflake"],

  "☁️ cloud": ["AWS"],

  "⚙️ devops_cicd": ["Git", "Linux", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],

  "✨ other": ["MATLAB", "Maple", "Figma"]
          
         };
         return (
            <div className="h-full bg-white font-mono text-sm overflow-auto select-text">
               <div className="flex h-full min-h-full">
                   <div className="w-12 bg-white border-r border-gray-100 pt-8 flex flex-col items-center shrink-0 select-none">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div key={i} className="text-[11px] text-gray-200 h-6 flex items-center font-mono">{i + 1}</div>
                      ))}
                   </div>
                   
                   <div className="flex-1 pt-8 px-10 pb-20">
                       <div className="mb-4">
                          <span className="text-pink-400">const</span> <span className="text-blue-500">mySkills</span> <span className="text-gray-400">=</span> <span className="text-purple-400">{'{'}</span>
                       </div>
                       
                       <div className="space-y-6 ml-6">
                          {Object.entries(skills).map(([category, items], idx, arr) => (
                             <div key={category} className="group">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[#0451a5] font-bold">"{category}"</span><span className="text-gray-400">:</span> <span className="text-gray-400">[</span>
                                </div>
                                <div className="ml-8 grid grid-cols-1 gap-y-1">
                                   {items.map((item, i) => (
                                      <div key={item} className="flex items-center h-6">
                                         <span className="text-[#0d904f]">"{item}"</span>
                                         {i < items.length - 1 && <span className="text-gray-400">,</span>}
                                      </div>
                                   ))}
                                </div>
                                <div className="text-gray-400 mt-2">]{idx < arr.length - 1 ? ',' : ''}</div>
                             </div>
                          ))}
                       </div>
                       
                       <div className="mt-4 text-purple-400">{'}'};</div>

                       <div className="mt-16 text-[11px] text-gray-300 font-mono italic">
                          // Always looking to add more tools to my toolkit :)
                       </div>
                   </div>
               </div>
            </div>
         );

      case 'resume':
        return (
          <div className="h-full bg-white flex flex-col items-center justify-center p-12 overflow-y-auto relative">
             <div className="absolute top-10 right-10 flex gap-4">
                <div className="flex flex-col items-end">
                   <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">status</span>
                   <span className="text-amber-500 font-mono text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> REQUEST_REQUIRED</span>
                </div>
             </div>

             <div className="max-w-xl w-full bg-white rounded-[3rem] p-12 flex flex-col items-center text-center relative">
                <div className="relative mb-12">
                   <div className="w-40 h-40 bg-pink-50 rounded-full flex items-center justify-center shadow-inner relative z-10">
                      <Lock size={80} className="text-pink-300" />
                   </div>
                   <div className="absolute -inset-6 bg-pink-100/30 rounded-full blur-2xl -z-0"></div>
                   <div className="absolute top-0 -right-4 bg-white p-3 rounded-2xl shadow-lg rotate-12 z-20 border border-pink-50">
                      <FileText size={24} className="text-pink-400" />
                   </div>
                </div>

                <h2 className="text-3xl font-sans font-bold uppercase tracking-widest text-gray-800 mb-4 tracking-tight">
  request resume
</h2>                <p className="text-gray-500 font-sans text-lg mb-10 max-w-sm leading-relaxed">
                   my detailed technical resume is hosted on google docs. please click below to request access or view it! 
                </p>

                <div className="flex flex-col w-full gap-4">
                    <a 
                      href={RESUME_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-6 bg-pink-500 text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-pink-100 hover:bg-pink-600 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group active:scale-95"
                    >
                        <ArrowUpRight size={22} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        open request page
                    </a>
                    <button 
                      onClick={() => handleFileClick('experience')}
                      className="w-full py-5 text-gray-400 font-mono text-sm hover:text-pink-400 transition-colors"
                    >
                      return to folders.sh
                    </button>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-50 w-full flex justify-between items-center px-4">
                   <div className="flex flex-col items-start">
                      <span className="text-[10px] text-gray-300 uppercase font-mono tracking-tight">security</span>
                      <span className="text-xs font-mono font-bold text-gray-400">G-DOCS_AUTH</span>
                   </div>
                   <div className="flex flex-col items-end">
                      <span className="text-[10px] text-gray-300 uppercase font-mono tracking-tight">updated</span>
                      <span className="text-xs font-mono font-bold text-gray-400">SPRING 2025</span>
                   </div>
                </div>
             </div>
          </div>
        );

      case 'activities':
        const activities = [
          { title: "Laurier Women in CS", image: lwicsImg, id: "01" },
          { title: "Studying", image: "https://i.pinimg.com/736x/18/2d/bc/182dbce82b6d260c2f4a41e869efbd5e.jpg", id: "02" },
          { title: "Fashion", image: "https://i.pinimg.com/736x/59/c7/2a/59c72ac298066809fa86df4bc656969c.jpg", id: "04" },
          { title: "Travelling", image: "https://i.pinimg.com/736x/48/88/ed/4888ed69339b0057710a692350fa3afb.jpg", id: "05" },
          { title: "Photography", image: "https://i.pinimg.com/736x/94/f5/ad/94f5ad04ebdfbe49c086b48f30325dbf.jpg", id: "06" },
          { title: "Blog Writing", image: "https://i.pinimg.com/736x/8a/96/35/8a9635dfce12945f16d29ae9b51aa0d6.jpg", id: "07" },
          { title: "Bubble Tea", image: "https://i.pinimg.com/736x/ab/5b/99/ab5b99621d6e1350b9136d26d4464bdc.jpg", id: "08" },
          { title: "Pilates", image: "https://i.pinimg.com/736x/6f/7f/9d/6f7f9d3811071b54e15bdc447f369c4a.jpg", id: "09" },
        ];

        return (
           <div className="p-6 md:p-12 bg-[#fffcfd] h-full overflow-y-auto">
             <div className="max-w-5xl mx-auto">
                <div className="mb-12 border-b-2 border-dashed border-pink-100 pb-6 flex items-center justify-between">
                    <div>
                      <h2 className="font-sans text-2xl text-gray-800 font-bold tracking-widest uppercase flex items-center gap-4">
                          <span className="bg-pink-100 p-2.5 rounded-2xl text-pink-500 shadow-sm"><Camera size={28} /></span> Scrapbook
                      </h2>
                      <p className="font-mono text-xs text-pink-300 mt-2 uppercase tracking-widest">life outside the terminal</p>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white px-4 py-2 rounded-xl border-2 border-pink-50 shadow-sm text-[10px] font-mono text-pink-300 uppercase rotate-2 tracking-tight">
                        Instant Memories 2025
                      </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 pb-12">
                    {activities.map((act, i) => (
                        <PhotoStrip key={i} activity={act} index={i} />
                    ))}
                </div>
             </div>
           </div>
        );
      
      case 'contact':
        return (
          <div className="h-full bg-gray-50 flex flex-col font-sans relative">
             <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center px-8 shadow-sm z-10 shrink-0">
                <div className="flex items-center gap-3">
                   <div className="bg-purple-100 p-2 rounded-lg text-purple-500"><Mail size={20} /></div>
                   <span className="font-bold text-gray-700 text-lg">New Message</span>
                </div>
             </div>

             <div className="flex-1 p-4 md:p-12 flex flex-col items-center overflow-y-auto">
                {contactSent ? (
                  <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl border-2 border-pink-100 p-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                      <div className="mb-6 relative">
                         <div className="text-8xl animate-bounce">🐰</div>
                         <Sparkles size={32} className="absolute -top-4 -right-4 text-yellow-400 animate-pulse" />
                         <Heart size={24} className="absolute -bottom-2 -left-4 text-pink-400 fill-pink-400 animate-ping" />
                      </div>
                      <h2 className="font-display text-5xl text-pink-500 font-bold mb-4 lowercase tracking-tight">thank you!</h2>
                      <p className="text-gray-500 text-xl font-medium mb-8 max-w-md">
                        your message has been sent to my inbox! i'll hop back to you as soon as i can, bestie! ✨
                      </p>
                      <button 
                        onClick={() => setContactSent(false)}
                        className="bg-pink-50 text-pink-500 px-8 py-3 rounded-2xl text-sm font-bold border-2 border-pink-100 hover:bg-pink-100 transition-all flex items-center gap-2"
                      >
                         <ArrowUpRight size={18} /> Send another?
                      </button>
                  </div>
                ) : (
                  <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
                      <div className="border-b border-gray-50 p-4 flex gap-4 items-center">
                          <span className="text-gray-400 text-sm font-bold w-16 text-right">To:</span>
                          <div className="bg-purple-50 text-purple-600 px-3 py-1 rounded-md text-sm font-bold border border-purple-100">itohan.odigie023@gmail.com</div>
                      </div>
                      <div className="p-8"><textarea className="w-full h-64 resize-none outline-none text-gray-600 leading-8 bg-transparent font-mono" placeholder="Hi Itohan..."></textarea></div>
                      <div className="bg-gray-50 p-4 flex justify-end border-t border-gray-100">
                           <a 
                             href="mailto:itohan.odigie023@gmail.com" 
                             onClick={handleSendEmail}
                             className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95"
                           >
                             Send <Send size={16} />
                           </a>
                      </div>
                  </div>
                )}
             </div>
          </div>
        )

      default: return null;
    }
  }

  return (
    <div className="w-full h-[750px] md:h-[850px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden font-sans group border border-pink-50">
      <div className="bg-[#fce7f3] px-4 py-3 border-b border-pink-100 flex items-center justify-between shrink-0 select-none">
          <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
             <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
             <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
          </div>
          <div className="text-xs text-gray-500 font-medium font-mono lowercase truncate max-w-[400px]">
            ~/portfolio/{activeFile === 'exp_item' ? `experience/${selectedExperience?.company.toLowerCase().replace(/\s/g, '_')}` : activeFileData?.name || ''}
          </div>
          <div className="w-14"></div> 
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile section rail (shows only < md) */}
<div className="md:hidden w-14 bg-white border-r border-gray-200 flex flex-col items-center py-3 gap-3 shrink-0">
  {files.map((file) => {
    const isActive =
      activeFile === file.id || (file.id === "experience" && activeFile === "exp_item");

    return (
      <button
        key={file.id}
        type="button"
        onClick={() => handleFileClick(file.id as FileType)}
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition
          ${isActive ? "bg-pink-100 text-pink-600" : "text-gray-400 hover:bg-gray-100"}`}
        title={file.name}
        aria-label={`Open ${file.name}`}
      >
        {file.icon}
      </button>
    );
  })}
</div>

        <div className="hidden md:flex w-12 bg-gray-50 border-r border-gray-200 flex-col items-center py-4 gap-6 shrink-0 z-10">
            <FilesIcon active={true} />
            <Search size={24} className="text-blue-200 hover:text-blue-400 cursor-pointer p-1" />
            <GitGraph size={24} className="text-blue-200 hover:text-blue-400 cursor-pointer p-1" />
            <LayoutGrid size={24} className="text-blue-200 hover:text-blue-400 cursor-pointer p-1" />
            <div className="mt-auto flex flex-col gap-6">
                <User size={24} className="text-blue-200 hover:text-blue-400 cursor-pointer p-1" />
                <Settings size={24} className="text-blue-200 hover:text-blue-400 cursor-pointer p-1" />
            </div>
        </div>

        <div className="w-60 bg-[#fdf2f8] border-r border-gray-200 flex flex-col hidden md:flex shrink-0">
            <div className="h-10 px-4 flex items-center justify-between text-xs font-medium text-pink-300 uppercase tracking-wide">
                <span>Explorer</span>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="px-2 py-1">
                    <div className="flex items-center gap-1 text-pink-400 font-bold text-xs mb-1 px-1 py-1 cursor-pointer uppercase tracking-wider">Itohan-Workspace</div>
                    <div className="ml-3 border-l border-pink-100 pl-1 space-y-[1px]">
                        {files.map(file => {
                            const isExp = file.id === 'experience';
                            return (
                                <React.Fragment key={file.id}>
                                    <div 
                                        onClick={() => {
                                            if (isExp) setIsExpExpanded(!isExpExpanded);
                                            handleFileClick(file.id as FileType);
                                        }} 
                                        className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-sm transition-colors ${activeFile === file.id ? 'bg-pink-100 text-pink-600 font-bold' : 'text-gray-500 hover:bg-gray-200'}`}
                                    >
                                        <span className="shrink-0">{file.icon}</span>
                                        <span className="truncate">{file.name}</span>
                                    </div>
                                    {isExp && isExpExpanded && (
                                        <div className="ml-4 border-l border-blue-100 pl-3 mt-1 space-y-1 animate-in slide-in-from-left-2 duration-200">
                                            {experience.map((job) => (
                                                <div 
                                                    key={job.company}
                                                    onClick={() => handleExpFileClick(job)}
                                                    className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-[11px] transition-colors ${selectedExperience?.company === job.company ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-400 hover:bg-gray-100'}`}
                                                >
                                                    <FileText size={12} className={selectedExperience?.company === job.company ? 'text-blue-500' : 'text-blue-300'} />
                                                    <span className="truncate lowercase">{job.company.replace(/\s/g, '_')}.md</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
            <div className="flex bg-[#fdf2f8] overflow-x-auto scrollbar-hide shrink-0 border-b border-gray-200 h-9">
                {openTabs.map(tabId => {
                    let name = '';
                    let icon = null;
                    if (tabId === 'exp_item') {
                      name = `${selectedExperience?.company.toLowerCase().replace(/\s/g, '_')}.md`;
                      icon = <FileText size={14} className="text-blue-400" />;
                    } else {
                      const file = files.find(f => f.id === tabId);
                      name = file?.name || '';
                      icon = file?.icon;
                    }
                    if (!name) return null;
                    const isActive = activeFile === tabId;
                    return (
                        <div key={tabId} onClick={() => setActiveFile(tabId as FileType)} className={`group relative px-3 min-w-[120px] text-xs cursor-pointer flex items-center gap-2 border-r border-gray-200 h-full ${isActive ? 'bg-white text-pink-500 font-medium' : 'bg-[#fce7f3] text-pink-300'}`}>
                            <span className="shrink-0">{icon}</span>
                            <span className="truncate max-w-[100px]">{name}</span>
                            <span onClick={(e) => handleCloseTab(e, tabId as FileType)} className={`ml-auto rounded-md p-0.5 ${isActive ? 'text-gray-500 hover:bg-gray-200' : 'opacity-0 group-hover:opacity-100'}`}><X size={12} /></span>
                            {isActive && <div className="absolute top-0 left-0 w-full h-[2px] bg-pink-400"></div>}
                        </div>
                    )
                })}
            </div>
            <div className="flex-1 overflow-hidden h-full">{renderContent()}</div>
        </div>
      </div>

      <div className="h-6 bg-pink-400 text-white text-[9px] flex items-center justify-between px-3 font-bold lowercase shrink-0">
          <div className="flex items-center gap-3"><GitGraph size={10} /><span>main*</span></div>
          <div className="flex items-center gap-3"><span>ln 12, col 45</span><span>utf-8</span><span>typescript react</span></div>
      </div>
    </div>
  );
}

interface PhotoStripProps {
  activity: { title: string; id: string; image?: string; emoji?: string };
  index: number;
}

const PhotoStrip: React.FC<PhotoStripProps> = ({ activity, index }) => {
  const rotations = [
    "rotate-[1.5deg]",
    "rotate-[-1deg]",
    "rotate-[0.8deg]",
    "rotate-[-1.5deg]",
    "rotate-[1.2deg]",
  ];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className={`group relative transition-all duration-700 hover:scale-105 hover:rotate-0 hover:z-20 cursor-default p-4 bg-[#fdfdfd] shadow-lg border border-gray-100 ${rotation} flex flex-col gap-4 rounded-[0.5rem] w-full animate-in fade-in slide-in-from-bottom-2`}
      style={{
        backgroundImage: "radial-gradient(#00000005 1px, transparent 0)",
        backgroundSize: "15px 15px",
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-pink-200/40 backdrop-blur-[1.5px] -rotate-3 z-10 border border-pink-300/20 shadow-sm pointer-events-none group-hover:rotate-0 transition-transform duration-500" />

      <div className="flex flex-col gap-3">
        {/* the square photo area */}
        <div className="aspect-[1/1] bg-[#f8f5f6] border-4 border-white shadow-inner overflow-hidden relative group-hover:brightness-105 transition-all">
          <div className="w-full h-full relative group-hover:scale-125 transition-transform duration-700 ease-out">
            {activity.image ? (
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="w-full h-full flex items-center justify-center text-7xl drop-shadow-md filter grayscale-[0.3] group-hover:grayscale-0">
                {activity.emoji}
              </span>
            )}

            <div className="absolute -inset-2 bg-pink-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-40 transition-opacity duration-75" />
        </div>
      </div>

      <div className="pt-2 pb-2 px-1 flex flex-col gap-1.5 bg-white/40 rounded-lg">
        <h4 className="text-[11px] font-bold text-pink-500 leading-tight tracking-[0.2em] uppercase text-center group-hover:scale-105 transition-transform">
          {activity.title}
        </h4>
        <div className="flex items-center justify-between mt-2 border-t border-pink-50 pt-2 opacity-60">
          <span className="text-[7px] font-mono text-gray-400 uppercase tracking-tighter">
            ID_{activity.id}
          </span>
          <span className="text-[7px] font-mono text-gray-400 uppercase">
            SPRING_2025
          </span>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] rounded-[0.5rem]" />

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles size={12} className="text-pink-300 animate-pulse" />
      </div>
    </div>
  );
};


const FilesIcon = ({active}: {active: boolean}) => (
    <div className={`cursor-pointer p-2 border-l-2 ${active ? 'border-pink-400' : 'border-transparent'}`}>
        <div className={active ? 'text-pink-500' : 'text-blue-300'}><FolderOpen size={24} /></div>
    </div>
)

const GUTTER_W = "w-10"; // width for line numbers

const Line = ({ num, content }: { num: number; content: React.ReactNode }) => (
  <div className="flex hover:bg-pink-50/30 px-4 items-start">
    <span className="text-gray-300 w-8 shrink-0 select-none font-mono text-xs">
      {num}
    </span>

    <span className="text-gray-700 font-medium font-mono flex-1 min-w-0 break-words whitespace-pre-wrap">
      {content}
    </span>
  </div>
);


const EmptyLine = ({ num }: { num: number }) => (
  <div className="flex items-center h-8 px-4 hover:bg-pink-50/30">
    <span className={`text-gray-300 ${GUTTER_W} shrink-0 select-none font-mono text-xs text-right pr-3`}>
      {num}
    </span>
    <span className="block w-full" />
  </div>
);

const Comment = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex items-center h-8 px-4 hover:bg-pink-50/30">
    <span className={`text-gray-300 ${GUTTER_W} shrink-0 select-none font-mono text-xs text-right pr-3`} />
    <span className="text-pink-200 italic font-mono whitespace-nowrap overflow-x-auto block w-full">
      {children}
    </span>
  </div>
);


export default CodeEditor;