import React, { useState, useEffect } from "react";
import Terminal from "./components/Terminal";
import IDCard from "./components/IDCard";
import Resume from "./components/Resume";


export default function App() {
  const [showResume, setShowResume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-green-400 flex items-center justify-center">
        <div className="text-center font-mono">
          <div className="text-2xl mb-4">
            <span className="animate-pulse">●</span> SYSTEM INITIALIZING
          </div>
          <div className="text-sm mb-8">
            <div className="mb-2">Loading portfolio modules...</div>
            <div className="w-64 bg-gray-800 rounded-full h-2 mx-auto">
              <div className="bg-green-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <div className="animate-pulse">► Initializing terminal.exe</div>
            <div className="animate-pulse" style={{animationDelay: '0.5s'}}>► Loading ID system</div>
            <div className="animate-pulse" style={{animationDelay: '1s'}}>► Connecting to portfolio database</div>
            <div className="animate-pulse" style={{animationDelay: '1.5s'}}>► Ready to display</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-r from-black via-gray-900 to-black text-green-400 flex items-center justify-center p-4 md:p-6">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid-bg w-full h-full"></div>
      </div>

      {/* Main Container */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 w-full max-w-7xl h-full max-h-[900px] items-stretch rounded-xl overflow-hidden shadow-2xl border border-green-700/30">
        
        {/* Terminal Section */}
        <div className="bg-black/90 border-r border-green-700/50 p-4 md:p-6 relative">
          {/* Terminal Header */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 border-b border-green-700/30 flex items-center px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
            </div>
            <div className="flex-1 text-center text-xs text-green-400 font-mono">
              portfolio.terminal
            </div>
            <div className="text-xs text-gray-500 font-mono">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
          
          <div className="pt-8 h-full">
            <Terminal
              showResume={showResume}
              setShowResume={setShowResume}
            />
          </div>
        </div>
        
        {/* Display Section */}
        <div className="bg-gray-950/90 p-4 md:p-6 flex items-center justify-center relative">
          {/* Display Header */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 border-b border-green-700/30 flex items-center px-4">
            <div className="text-xs text-green-400 font-mono">
              {showResume ? "resume_viewer.pdf" : "id_card.display"}
            </div>
            <div className="flex-1"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-gray-500 font-mono">ACTIVE</div>
            </div>
          </div>
          
          <div className="pt-8 w-full h-full flex items-center justify-center transition-all duration-500">
            {showResume ? (
              <div className="animate-slideIn">
                <Resume />
              </div>
            ) : (
              <div className="animate-slideIn">
                <IDCard />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowResume(!showResume)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
        title={showResume ? "Show ID Card" : "Show Resume"}
      >
        <div className="transform group-hover:scale-110 transition-transform">
          {showResume ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-2 4h2v2h-2v-2z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )}
        </div>
      </button>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-black/80 border-t border-green-700/30 flex items-center justify-between px-4 text-xs text-green-400 font-mono">
        <div className="flex items-center gap-4">
          <span>STATUS: ONLINE</span>
          <span>MODE: {showResume ? "RESUME" : "ID_CARD"}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>PORTFOLIO v2.0</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>GRACE_PATEL</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        @media (max-width: 1024px) {
          .grid {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}