import React, { useState, useEffect, useRef } from "react";

const commands = {
  help: `Available commands:
  • help                 - Show this help message
  • ls                   - List directory contents  
  • cat <file>           - Display file contents
  • pwd                  - Show current directory
  • whoami               - Display current user
  • projects             - Show my projects
  • experience           - Show work experience
  • skills               - Show technical skills
  • contact              - Show contact information
  • open resume          - Open resume viewer
  • download resume      - Download resume PDF
  • neofetch             - Show system information
  • history              - Show command history
  • clear                - Clear terminal
  • exit                 - Close terminal`,
  
  ls: `total 8
drwxr-xr-x  2 grace grace 4096 Jul 24 10:30 projects/
drwxr-xr-x  2 grace grace 4096 Jul 24 10:30 experience/
-rw-r--r--  1 grace grace 2048 Jul 24 10:30 resume.pdf
-rw-r--r--  1 grace grace 1024 Jul 24 10:30 skills.txt
-rw-r--r--  1 grace grace  512 Jul 24 10:30 contact.txt`,

  pwd: `/home/grace/portfolio`,
  
  whoami: `grace`,
  
projects: `📁 My Projects:

🚀 CheckBeforeGo (Final Year Project)
   ├── Description: Doctor search and travel safety web app with appointment booking, real-time availability, and route planning.
   ├── Tech Stack: React, Node.js, Express, MongoDB, JWT, Google Maps API
   ├── GitHub: https://github.com/grasyPatel/CheckBeforeGo
   └── Live Demo: https://service-desk-frontend.onrender.com

🚀 Service Desk App (Full Stack)
   ├──A doctor and user-centric platform for searching, booking appointments, and receiving real-time availability. Includes travel safety alerts and emergency routing.
   ├── Tech Stack: React, Node.js, Express, MongoDB, JWT, Google Maps API
   ├── GitHub: https://github.com/grasyPatel/Celebal_Summer_Internship_Task_Submission
   └── Live Demo: https://checkbeforego.vercel.app

🎵 Spotify Clone
   ├── Description: Full-featured music streaming platform clone with user auth, playlists, and track playback.
   ├── Tech Stack: React, Node.js, Express, MongoDB
   └── GitHub: https://github.com/grasyPatel/Celebal_Summer_Internship_Task_Submission

🛒 E-Commerce Platform
   ├── Description: Complete e-commerce platform with product management, cart, checkout, and payment integration.
   ├── Tech Stack: MERN Stack, Payment Gateway
   └── GitHub: https://github.com/grasyPatel/Celebal_Summer_Internship_Task_Submission

✈️ Travel Story App
   ├── Description: Mobile app to share travel stories with photos, tags, and location tracking.
   ├── Tech Stack: React Native, Firebase, Google Maps API
   └── GitHub: https://github.com/grasyPatel/Travel-Story`,

experience: `💼 Professional Experience:

🏢 Celebal Technologies
   ├── Position: Software Development Intern
   ├── Duration: May 2025 - July 2025
   ├── Projects: Service Desk MERN Stack Application
   ├── Technologies: React.js, Node.js, Express.js, MongoDB, Firebase
   ├── Achievements:
   │   ├── Built full-stack ticketing app with JWT-based authentication
   │   ├── Developed responsive dashboards with Tailwind & real-time updates
   │   ├── Created RESTful APIs with middleware access control
   │   ├── Integrated Firebase, PayPal, and Cloudinary in MERN apps
   └── Impact: Reduced ticket resolution time by 40% with workflow automation

🏢 Thynkfy
   ├── Position: Web Development Intern
   ├── Duration: Dec 2023 - Mar 2024
   ├── Projects: Responsive websites for clients across industries
   ├── Achievements:
   │   ├── Collaborated with design/dev teams to launch new site features
   │   └── Optimized UI/UX and performance for better client satisfaction
   └── Contact: Raj Dashore (CEO) - rajdashore@thynkfy.com`,

skills: `🛠️ Technical Skills:

Programming Languages:
├── JavaScript (ES6+)     ████████████████████ 90%
├── Python                ████████████████░░░░ 80%
├── Java                  ██████████████░░░░░░ 70%
├── TypeScript            ████████████░░░░░░░░ 60%
└── C++                   ██████████░░░░░░░░░░ 50%

Frontend:
├── React.js              ████████████████████ 95%
├── HTML5/CSS3            ████████████████████ 90%
├── Tailwind CSS          ██████████████████░░ 85%
├── Next.js               ████████████████░░░░ 75%


Backend:
├── Node.js               ████████████████████ 90%
├── Express.js            ██████████████████░░ 85%
├── MongoDB               ████████████████░░░░ 80%
├── MySQL                 ██████████████░░░░░░ 70%
└── Firebase              ████████████████░░░░ 75%

Tools & Others:
├── Git/GitHub            ████████████████████ 95%
├── Docker                ████████████░░░░░░░░ 60%
├── AWS                   ██████████░░░░░░░░░░ 45%
└── Linux                 ████████████████░░░░ 75%`,

contact: `📧 Get In Touch:

Email:    gracepatel91@gmail.com
GitHub:   https://github.com/grasyPatel
LinkedIn: https://www.linkedin.com/in/grace-patel-977216253/
Portfolio: https://graceintro.netlify.app/
Location: Indore, India (Available ,Remote/Onsite)
Status:   Open to internships & full-time opportunities

Feel free to reach out for collaboration, freelance projects, or exciting opportunities!`,


  neofetch: `
        .-.
       /   \\
      | o_o |     grace@portfolio
       \\_-_/      ─────────────────
    .-'     '-.   OS: Ubuntu 22.04 LTS
   /  .------.  \\  Host: Portfolio Terminal v2.0
  |  (  hello  )  | Kernel: React 18.2.0
   \\  '------'  /  Uptime: ${Math.floor(Math.random() * 24)} hours, ${Math.floor(Math.random() * 60)} mins
    '-.       .-'   Packages: npm, yarn, git
       '-----'     Shell: bash 5.1.16
                   Resolution: Responsive
                   Theme: VS Code Dark+
                   Terminal: Enhanced Portfolio Terminal`,
};

const fileContents = {
  "resume.pdf": "Error: Cannot display binary file. Use 'download resume' instead.",
  "skills.txt": commands.skills,
  "contact.txt": commands.contact,
  "projects/": commands.projects,
  "experience/": commands.experience,
};

const Terminal = ({ showResume, setShowResume }) => {
  const [lines, setLines] = useState([
    "Welcome to Grace's Portfolio Terminal v2.0",
    "Type 'help' for available commands or 'neofetch' for system info",
    ""
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [pendingClosePrompt, setPendingClosePrompt] = useState(false);
  const [currentDir, setCurrentDir] = useState("~");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addLine = (text, delay = 0) => {
    if (delay > 0) {
      setIsTyping(true);
      setTimeout(() => {
        setLines(prev => [...prev, text]);
        setIsTyping(false);
      }, delay);
    } else {
      setLines(prev => [...prev, text]);
    }
  };

  const downloadResume = () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/assets/resume.pdf'; // Path to your resume
      link.download = 'Grace_Patel_Resume.pdf'; // Filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show download progress animation
      addLine("📄 Downloading resume...", 100);
      addLine("", 200);
      
      // Simulate progress bar
      const progressSteps = [
        "████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 10%",
        "████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 25%",
        "████████████████░░░░░░░░░░░░░░░░░░░░░░░░ 50%",
        "████████████████████████░░░░░░░░░░░░░░░░ 75%",
        "████████████████████████████████████████ 100%"
      ];

      progressSteps.forEach((step, index) => {
        setTimeout(() => {
          setLines(prev => {
            const newLines = [...prev];
            newLines[newLines.length - 1] = step;
            return newLines;
          });
        }, 500 + (index * 200));
      });

      // Show completion message
      setTimeout(() => {
        addLine("");
        addLine("✅ Download complete!");
        addLine("📍 Saved to: ~/Downloads/Grace_Patel_Resume.pdf");
        addLine("");
        addLine("If download didn't start automatically:");
        addLine("🔗 Check your browser's download folder");
      }, 1700);

    } catch (error) {
      addLine("❌ Error downloading resume. Please try again.", 300);
      console.error('Download error:', error);
    }
  };

  const handleCommand = () => {
    const command = input.trim();
    const lowerCommand = command.toLowerCase();
    
    if (!command) {
      setInput("");
      return;
    }

    // Add to history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    if (pendingClosePrompt) {
      if (lowerCommand === "yes" || lowerCommand === "y") {
        setShowResume(false);
        addLine(`grace@portfolio:${currentDir}$ ${command}`);
        addLine("Resume closed.", 300);
        setPendingClosePrompt(false);
      } else if (lowerCommand === "no" || lowerCommand === "n") {
        addLine(`grace@portfolio:${currentDir}$ ${command}`);
        addLine("Resume will remain open.", 300);
        setPendingClosePrompt(false);
      } else {
        addLine(`grace@portfolio:${currentDir}$ ${command}`);
        addLine("Please type 'yes/y' or 'no/n'.", 300);
      }
      setInput("");
      return;
    }

    addLine(`grace@portfolio:${currentDir}$ ${command}`);

    if (lowerCommand === "clear" || lowerCommand === "cls") {
      setTimeout(() => setLines([]), 100);
    } else if (lowerCommand === "exit") {
      addLine("Connection closed.", 300);
      setTimeout(() => {
        setLines(["Terminal session ended. Refresh to restart."]);
      }, 1000);
    } else if (lowerCommand === "open resume") {
      setShowResume(true);
      addLine("Resume opened in viewer.", 300);
      addLine("Do you want to close the resume? (yes/no)", 600);
      setPendingClosePrompt(true);
    } else if (lowerCommand === "close resume") {
      setShowResume(false);
      addLine("Resume closed.", 300);
    } else if (lowerCommand === "download resume") {
      downloadResume();
    } else if (lowerCommand === "history") {
      addLine("Command history:", 200);
      commandHistory.forEach((cmd, index) => {
        setTimeout(() => {
          addLine(`  ${index + 1}  ${cmd}`);
        }, 300 + index * 50);
      });
    } else if (lowerCommand.startsWith("cat ")) {
      const filename = command.slice(4).trim();
      const content = fileContents[filename];
      if (content) {
        setTimeout(() => addLine(content), 300);
      } else {
        setTimeout(() => addLine(`cat: ${filename}: No such file or directory`), 300);
      }
    } else if (lowerCommand.startsWith("echo ")) {
      const text = command.slice(5);
      setTimeout(() => addLine(text), 200);
    } else if (lowerCommand === "date") {
      const now = new Date();
      setTimeout(() => addLine(now.toString()), 200);
    } else if (lowerCommand === "uptime") {
      const uptime = `up ${Math.floor(Math.random() * 24)} hours, ${Math.floor(Math.random() * 60)} minutes`;
      setTimeout(() => addLine(uptime), 300);
    } else {
      const output = commands[lowerCommand];
      if (output) {
        setTimeout(() => addLine(output), 300);
      } else {
        setTimeout(() => addLine(`bash: ${command}: command not found`), 300);
      }
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      addLine(`grace@portfolio:${currentDir}$ ${input}^C`);
      setInput("");
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setLines([]);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="mt-20 bg-[#0d1117] text-[#c9d1d9] rounded-xl shadow-2xl w-full h-screen max-h-[650px] overflow-hidden border border-[#30363d] font-mono">
      {/* Terminal Top Bar */}
      <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-[#30363d]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff6b6b] cursor-pointer transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffd93d] cursor-pointer transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#32d74b] cursor-pointer transition-colors"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-[#8b949e] font-medium">grace@portfolio: ~</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#8b949e]">
          <div className="w-2 h-2 rounded-full bg-[#28ca42] animate-pulse"></div>
          <span>Online</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        className="p-4 overflow-y-auto h-[calc(100%-60px)] text-sm leading-relaxed cursor-text"
        onClick={handleTerminalClick}
      >
        {lines.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap mb-1 select-text">
            {line}
          </pre>
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-2 text-[#8b949e]">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#8b949e] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#8b949e] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-[#8b949e] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <span className="text-xs">Processing...</span>
          </div>
        )}
        
        <div className="flex items-center">
          <span className="text-[#7c3aed] mr-1">grace@portfolio</span>
          <span className="text-[#8b949e] mr-1">:</span>
          <span className="text-[#58a6ff] mr-1">{currentDir}</span>
          <span className="text-[#8b949e] mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent outline-none w-full text-[#c9d1d9] caret-[#58a6ff]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{caretColor: '#58a6ff'}}
          />
          <span className="animate-pulse text-[#58a6ff]">_</span>
        </div>
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
};

export default Terminal;