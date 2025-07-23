import React, { useState, useEffect } from "react";
import myPhoto from "../assets/profile.jpeg";

const IDCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.querySelector('.id-card')?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        setMousePos({ x, y });
      }
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <div className="relative flex justify-center items-start pt-16 min-h-screen bg-[#0a0a0a]">
      <div className="id-wrapper relative">
        {/* Terminal-style Lanyard */}
        <div className="mt-10 lanyard absolute left-1/2 transform -translate-x-1/2 -top-16 w-0.5 h-36 bg-[#00ff41] rounded-full shadow-lg shadow-[#00ff41]/20">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1a1a1a] border-2 border-[#00ff41] rounded-full shadow-md">
            <div className="w-1 h-1 bg-[#00ff41] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          </div>
        </div>
        
        {/* ID Card */}
        <div 
          className="id-card relative mt-20 w-80 h-[500px] bg-[#1a1a1a] rounded-lg shadow-2xl border border-[#333] overflow-hidden transform transition-all duration-300 ease-out"
          style={{
            transform: isHovered 
              ? `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(20px)` 
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePos({ x: 0, y: 0 });
          }}
        >
          {/* Terminal Header */}
          <div className="absolute top-0 left-0 w-full h-16 bg-[#111] border-b border-[#00ff41]">
            <div className="flex items-center justify-between h-full px-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
              </div>
              <div className="text-[#00ff41] font-mono text-xs">
                [SYSTEM_ID_v2.0]
              </div>
              <div className="text-[#666] font-mono text-xs">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Matrix-style background effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="matrix-bg">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-[#00ff41] font-mono text-xs opacity-30"
                  style={{
                    left: `${(i * 25) % 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animation: 'matrix-fall 4s linear infinite'
                  }}
                >
                  {Math.random().toString(2).substr(2, 8)}
                </div>
              ))}
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative mt-20 mx-6">
            <div className="relative w-28 h-28 mx-auto mb-4">
              <div className="absolute inset-0 border-2 border-[#00ff41] rounded-lg animate-pulse">
                <div className="w-full h-full bg-[#222] rounded-md p-0.5">
                  <img
                    src={myPhoto}
                    alt="Grace Patel"
                    className="w-full h-full object-cover rounded-sm filter brightness-110 contrast-110"
                  />
                </div>
              </div>
              {/* Scanning Line Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41] to-transparent opacity-30 h-1 animate-scan rounded-lg"></div>
            </div>
          </div>

          {/* Terminal Information */}
          <div className="px-6 pb-6 font-mono">
            <div className="text-center mb-4">
              <div className="text-[#00ff41] text-xs mb-1">$ whoami</div>
              <h2 className="text-xl font-bold text-[#fff] mb-1">Grace Patel</h2>
              <div className="text-[#00ff41] text-xs mb-1">$ cat /proc/role</div>
              <p className="text-sm text-[#ccc]">Full Stack Developer</p>
            </div>

           

            {/* Terminal Commands */}
            <div className="space-y-2 text-xs">
              <div className="text-[#00ff41]">$ connect --social</div>
              <a
                href="https://github.com/grasyPatel"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 bg-[#222] border border-[#444] text-[#ccc] hover:border-[#00ff41] hover:text-[#00ff41] transition-all duration-300 group"
              >
                <span className="group-hover:text-[#00ff41]"></span> github.com/grasyPatel
              </a>
              
              <a
                href="https://www.linkedin.com/in/grace-patel-977216253/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 bg-[#222] border border-[#444] text-[#ccc] hover:border-[#00ff41] hover:text-[#00ff41] transition-all duration-300 group"
              >
                <span className="group-hover:text-[#00ff41]"></span> linkedin.com/in/grace-patel
              </a>
            </div>
          </div>

          {/* Terminal Prompt at bottom */}
          <div className="absolute bottom-2 left-4 right-4 text-xs text-[#666] font-mono">
            <div className="flex items-center">
              <span className="text-[#00ff41]">root@portfolio:~$</span>
              <span className="ml-2 animate-pulse">_</span>
            </div>
          </div>

          {/* Circuit Pattern */}
          <div className="absolute  top-0 right-0 w-full h-full pointer-events-none opacity-10">
            <svg width="100%" height="100%" className="text-[#00ff41]">
              <defs>
                <pattern id="circuit" patternUnits="userSpaceOnUse" width="50" height="50">
                  <path d="M10 10 L40 10 L40 40 L10 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="10" cy="10" r="1" fill="currentColor"/>
                  <circle cx="40" cy="40" r="1" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
        </div>

        {/* Holographic glow effect */}
        <div 
          className=" mt-14 absolute inset-0 w-80 h-[500px] bg-gradient-to-tr from-[#00ff41] via-transparent to-[#00ff41] opacity-10 rounded-lg pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.2 : 0.05
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(500px); opacity: 0; }
        }
        
        @keyframes scan {
          0% { top: 0; opacity: 1; }
          50% { opacity: 0.3; }
          100% { top: 100%; opacity: 1; }
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        
        .id-card {
          transform-style: preserve-3d;
        }
        
        .id-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 40%, rgba(0, 255, 65, 0.1) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }
        
        .id-card:hover::before {
          transform: translateX(100%);
        }
      `}</style>
    </div>
  );
};

export default IDCard;