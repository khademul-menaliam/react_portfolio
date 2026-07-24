import React, { useState } from 'react';

interface TerminalProps {
  visitorCount: number;
  onNavigate: (view: 'home' | 'projects' | 'project-detail') => void;
}

export const Terminal: React.FC<TerminalProps> = ({ visitorCount, onNavigate }) => {
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Initializing terminal session...',
    'Welcome! Type "help" to see available commands.'
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    if (cmd === 'help') {
      response = 'Available commands: help | about | skills | projects | clear | neofetch';
    } else if (cmd === 'about') {
      response = 'Md. Khademul Islam - Laravel Backend Developer. Building robust, scalable backend systems, secure REST APIs, and databases with 1+ years experience.';
    } else if (cmd === 'skills') {
      response = 'Languages & Frameworks: PHP, Laravel, C/C++, JavaScript, HTML/CSS, Tailwind CSS, Alpine.js | Database & Systems: MySQL, Database Design, Query Optimization, cPanel | QA & Networks: Manual Testing, SDLC/STLC, TCP/IP, VLAN, Cisco Packet Tracer, VS Code, Postman, Git';
    } else if (cmd === 'projects') {
      response = 'Displaying projects... Navigating to project directory.';
      setTimeout(() => {
        onNavigate('projects');
      }, 800);
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'neofetch') {
      response = `OS: Obsidian-Linux v3.5\nSHELL: React-Term v19\nHOST: khademul.dev\nPROJECTS: 10 active\nVISITOR: ${visitorCount}`;
    } else {
      response = `Command not found: "${cmd}". Type "help" for a list of commands.`;
    }

    setTerminalOutput(prev => [...prev, `guest@khademul-dev:~$ ${terminalInput}`, response]);
    setTerminalInput('');
  };

  return (
    <div className="glass-panel rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl">
      {/* Terminal Header */}
      <div className="p-3 border-b border-white/5 flex items-center bg-[#0e0e13] px-5">
        <div className="terminal-dots"></div>
        <span className="font-code-sm text-code-sm text-on-surface-variant/50 ml-auto">guest@khademul-dev:~</span>
      </div>
      
      {/* Terminal Display */}
      <div className="p-6 h-64 overflow-y-auto font-code-sm text-code-sm text-[#38debb] bg-[#050508] space-y-2 text-left">
        {terminalOutput.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleTerminalSubmit} className="flex border-t border-white/5 bg-[#050508]">
        <span className="p-4 pr-0 font-code-sm text-code-sm text-outline-variant">$</span>
        <input
          type="text"
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          placeholder='Type a command (e.g. "help", "about", "skills")'
          className="w-full p-4 pl-2 font-code-sm text-code-sm bg-transparent text-[#38debb] outline-none border-none focus:ring-0 focus:outline-none"
        />
        <button type="submit" className="px-6 bg-surface-container-low text-primary border-l border-white/5 hover:bg-surface-container-high transition-colors font-code-sm text-code-sm">
          RUN
        </button>
      </form>
    </div>
  );
};
