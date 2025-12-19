import React from 'react';

interface MacWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const MacWindow: React.FC<MacWindowProps> = ({ children, title = "terminal", className = "" }) => {
  return (
    <div className={`bg-white rounded-xl border border-blue-100 shadow-xl shadow-blue-100/50 overflow-hidden ${className}`}>
      {/* Window Header */}
      <div className="bg-blue-50/50 px-4 py-3 flex items-center gap-2 border-b border-blue-100">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
        </div>
        <div className="flex-1 text-center pr-12">
           <span className="font-mono text-xs text-gray-400 flex items-center justify-center gap-1">
             <span className="w-3 h-3">📁</span> {title}
           </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default MacWindow;