import React from 'react';
import { Github, Linkedin, BookOpen, Mail, Rabbit } from 'lucide-react';
import Typewriter from './components/Typewriter';
import CodeEditor from './components/CodeEditor';
import { Project } from './types';

const App: React.FC = () => {
  const experience = [
    { 
      company: "Scotiabank", 
      role: "Software Engineer [Incoming]", 
      date: "Jan 2026 - Apr 2026", 
      icon: "https://logos-world.net/wp-content/uploads/2021/03/Scotiabank-Emblem.png", 
      tags: ["Java", "Spring Boot", "CI/CD", "AI/ML"] 
    },
    { 
      company: "Google", 
      role: "Software Engineer Mentee", 
      date: "Aug 2025 - Dec 2025", 
      icon: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png", 
      tags: ["C++", "Python", "SQL"] 
    },
    { 
      company: "Microsoft", 
      role: "Software Engineer Fellow", 
      date: "June 2025 - Oct 2025", 
      icon: "https://static.vecteezy.com/system/resources/thumbnails/027/127/493/small/microsoft-logo-microsoft-icon-transparent-free-png.png", 
      tags: ["Data Structures & Algorithms", "Networking"] 
    },
    { 
      company: "Tangerine", 
      role: "SWE Intern", 
      date: "May 2025 - Aug 2025", 
      icon: "https://logotyp.us/file/tangerine.svg",
      tags: ["Java", "TypeScript", "Python", "Kubernetes", "Docker"] 
    },
    { 
      company: "Wilfrid Laurier University", 
      role: "Undergraduate TA", 
      date: "Sept 2024 - Present", 
      icon: "https://static.wixstatic.com/media/5775f7_62695e1edd344abab9aba435b3d21549~mv2.png/v1/fill/w_1080,h_1080,al_c/Wilfrid%20Laurier%201080x1080.png", 
      tags: ["DS/A", "Calculus", "OOP", "Proctor"] 
    },
    { 
      company: "RBC", 
      role: "Cansbridge Fellow", 
      date: "June 2024 - Sept 2024", 
      icon: "https://download.logo.wine/logo/Royal_Bank_of_Canada/Royal_Bank_of_Canada-Logo.wine.png", 
      tags: ["Innovation", "Product Strategy", "Networking"] 
    },
    { 
      company: "CiviConnect", 
      role: "Software Engineer Intern", 
      date: "May 2024 - Aug 2024", 
      icon: "https://media.licdn.com/dms/image/v2/D4E0BAQF30lc07ZB_Yw/company-logo_200_200/B4EZgTu8otHoAI-/0/1752677731352/civiconnect_logo?e=1767830400&v=beta&t=fgu6wuDwoDJq1JXWKs0UVFXA3Nh41YFI56Q1yFg9Ke4", 
      tags: ["Javascript", "Node.js", "AWS", "Django"] 
    },
    { 
      company: "Laurier Computing Society", 
      role: "Software Engineer Intern", 
      date: "Sept 2023 - Dec 2023", 
      icon: "https://lauriercs.ca/icon.png", 
      tags: ["React", "Aws", "Figma", "API"] 
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Auntie",
      description: "An AI-powered postpartum support tool you can call or text - provides warm, helpful advice using Gemini 2.5 Flash.",
      tags: ["AI/ML", "Next.js", "OpenAI API", "Gemini API", "Snowflake API", "MongoDB"],
      emoji: "👩🏾‍🍼",
      link: "https://github.com/Itohan-Odigie/my-auntie"
    },
    {
      id: 2,
      title: "CancerNLP",
      description: "NLP system for early cancer symptom detection, combining fine-tuned BioBERT/LLaMA with RAG over oncology literature and synthetic clinical notes",
      tags: ["Health", "Python", "PyTorch", "RAG", "AWS", "BioBERT", "LLaMA"],
      emoji: "🧬",
      link: "https://github.com/Itohan-Odigie"
    },
    {
      id: 3,
      title: "PulsePilot",
      description: "Interactive fitness ecosystem that uses real-time bio-data to track and rank health progression.",
      tags: ["Fitness", "Python", "Pandas", "Scikit learn", "Statsmodels"],
      emoji: "⌚", 
      link: "https://github.com/Itohan-Odigie"
    },
    {
      id: 4,
      title: "Mentorly",
      description: "An application designed to connect women and underrepresented genders with qualified mentors in the tech space seamlessly.",
      tags: ["Diversity", "JavaScript", "Firebase", "API", "FIGMA"],
      emoji: "👩🏾‍💻", 
      link: "https://github.com/Itohan-Odigie/Mentorly"
    },
    {
      id: 5,
      title: "Foods4u",
      description: "Hyper-personalized meal planning platform for dietary restrictions and preferences.",
      tags: ["App", "Next.js", "API", "AWS", "Django"],
      emoji: "🍽️",
      link: "https://www.foods4u.ca/auth/sign-in"
    },
    {
      id: 6,
      title: "WluGo",
      description: "Social course recommendation and ranking platform for Laurier students to find the best classes.",
      tags: ["Ranking", "Web", "React", "SQL", "Javascript", "Python"],
      emoji: "🏫",
      link: "https://github.com/Itohan-Odigie/wlugo"
    },
    {
      id: 7,
      title: "AnimeRecommender",
      description: "Collaborative filtering system to help you find your next binge-watch.",
      tags: ["FastAPI", "TypeScript", "Web"],
      emoji: "🎌",
      link: "https://github.com/Itohan-Odigie/Anime-Recommender"
    },
    {
      id: 8,
      title: "DishFinder",
      description: "Find recipes based on the ingredients currently sitting in your fridge.",
      tags: ["CoreML", "React", "App"],
      emoji: "🍳",
      link: "https://github.com/Itohan-Odigie/Dish-Find"
    },
    {
      id: 9,
      title: "LWICS Website",
      description: "The official hub for Laurier Women in Computer Science resources and events.",
      tags: ["Tailwind", "React", "Web"],
      emoji: "💜",
      link: "https://github.com/Itohan-Odigie"
    },
    {
      id: 10,
      title: "TapTalk",
      description: "Accessible communication tool for individuals with speech impairments.",
      tags: ["iOS", "SwiftUI", "App"],
      emoji: "🗣️",
      link: "https://github.com/Itohan-Odigie"
    }
  ];

  const avatarUrl = "https://i.pinimg.com/736x/a3/5b/6d/a35b6d0fdf8af90a0c59b9a227c7bdf2.jpg";

  return (
    <div className="min-h-screen font-sans text-gray-700 overflow-x-hidden bg-[#fffafc]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-[#fffdfd]/95 backdrop-blur-md border-b border-pink-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex gap-6 items-center">
            <a href="https://www.linkedin.com/in/itohan-odigie" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-500 hover:scale-110 transition-all" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Itohan-Odigie" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-500 hover:scale-110 transition-all" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://medium.com/@itohan" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-500 hover:scale-110 transition-all" title="Medium Blog">
              <BookOpen size={20} />
            </a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="font-display font-bold text-3xl tracking-widest text-pink-400 hover:scale-105 transition-transform cursor-default lowercase">
              itohan
            </h1>
          </div>
          
          <div className="flex items-center">
            <a href="mailto:itohan.odigie023@gmail.com" className="group flex items-center gap-2 font-mono text-sm text-pink-300 hover:text-pink-500 transition-colors">
              <span className="hidden md:inline group-hover:underline decoration-wavy decoration-pink-300 lowercase">say hi</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-12 max-w-6xl mx-auto">
          <div className="relative group shrink-0 mt-8 md:mt-0">
             <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <img 
                  src={avatarUrl} 
                  alt="Itohan Avatar" 
                  className="w-full h-full object-cover" 
                />
             </div>
          </div>

          <div className="text-center md:text-left max-w-xl">
            <h1 className="font-display text-7xl md:text-8xl text-gray-800 mb-8 lowercase tracking-tight leading-[0.9]">
              i'm <span className="text-pink-400"><Typewriter strings={['itohan']} loop={true} typeSpeed={300} pauseTime={1000} className="font-display" /></span>
            </h1>
            
            <div className="relative font-mono text-sm md:text-base text-gray-600 leading-loose lowercase bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-pink-100/50 shadow-sm hover:shadow-md transition-shadow mt-16">
               <div className="absolute -top-7 left-8 animate-hop-across text-[#8d5524] transform -rotate-6">
                  <div className="relative">
                    <Rabbit size={32} fill="currentColor" strokeWidth={1.5} className="text-[#8d5524]" />
                    <div className="absolute top-[8px] right-[8px] w-[2.5px] h-[2.5px] bg-black rounded-full shadow-sm"></div>
                  </div>
               </div>

               <p>
                 a third year <span className="bg-pink-100 px-1 rounded text-pink-500 font-bold">computer science + math</span> student @ wilfrid laurier university & university of waterloo.
               </p>
               <p className="mt-4 text-gray-500">
                little miss loves building cool software & has an unhealthy obsession with the color pink :) 
                 </p>
                

                 
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center gap-4 mb-12 opacity-30">
          <div className="h-px bg-pink-300 w-24"></div>
          <span className="text-pink-300 text-xl">🌸</span>
          <div className="h-px bg-pink-300 w-24"></div>
        </div>

        <section className="mb-24">
           <div className="text-center mb-10">
             <h3 className="font-display text-2xl text-gray-400 lowercase mb-2">my digital workspace</h3>
             <p className="font-mono text-xs text-gray-400">explore the files below to learn more</p>
           </div>
           
           <CodeEditor experience={experience} projects={projects} />
        </section>
      </main>

      <footer className="w-full bg-white/50 backdrop-blur border-t border-pink-50 py-6 text-center mt-20">
        <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest lowercase">
          © {new Date().getFullYear()} itohan • coded with 💖 at 3 am 
        </p>
      </footer>
    </div>
  );
};

export default App;