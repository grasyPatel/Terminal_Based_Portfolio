import React, { useState } from 'react';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('about');

  const personalInfo = {
    name: "Grace Patel",
    title: "Full Stack Developer",
    location: "Hybrid",
    email: "grace91@gmail.com.com",
    phone: "+91 7389628164",
    github: "github.com/grasyPatel",
    linkedin: "linkedin.com/in/grace-patel-977216253"
  };

 const experience = [
  {
    company: "Celebal Technologies",
    position: "Software Development Intern",
    duration: "May 2025 - July 2025",
    location: "Remote",
    achievements: [
      "Built 8+ production-ready React.js apps with modern UIs using Tailwind, MUI, Redux",
      "Developed a full-stack Service Desk App with Google Auth and role-based access",
      "Integrated Firebase, JWT, PayPal, Cloudinary in MERN stack apps",
      "Enabled real-time updates and notifications for ticket management system",
      "Improved ticket resolution time by 40% through automation"
    ]
  },
  {
    company: "Thynkfy",
    position: "Web Development Intern",
    duration: "Dec 2023 - Mar 2024",
    location: "Indore, India",
    achievements: [
      "Developed and maintained responsive websites for various clients",
      "Collaborated with design and development teams to implement new features",
      "Worked directly with CEO and Co-Founder Raj Dashore for project execution",
      "Built client-specific UIs and improved site performance across devices"
    ]
  }
];

const projects = [
  {
    name: "CheckBeforeGo",
    type: "Final Year Project",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Google Maps API"],
    description: "A doctor and user-centric platform for searching, booking appointments, and receiving real-time availability. Includes travel safety alerts and emergency routing.",
    github: "https://github.com/grasyPatel/CheckBeforeGo",
    live: "https://checkbeforego.vercel.app",
    features: [
      "Doctor search with filters (specialty, hospital, location)",
      "Appointment booking with real-time availability",
      "JWT-based authentication",
      "Route planning with Google Maps",
      "Safety alerts and emergency contacts"
    ]
  },
  {
    name: "Service Desk App",
    type: "Full Stack Application",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Google Maps API"],
    description: "A doctor and user-centric platform for searching, booking appointments, and receiving real-time availability. Includes travel safety alerts and emergency routing.",
    github: "https://github.com/grasyPatel/Celebal_Summer_Internship_Task_Submission",
    live: "https://service-desk-frontend.onrender.com",
    features: [
      "Doctor search with filters (specialty, hospital, location)",
      "Appointment booking with real-time availability",
      "JWT-based authentication",
      "Route planning with Google Maps",
      "Safety alerts and emergency contacts"
    ]
  },
  {
    name: "Spotify Clone",
    type: "Music Platform",
    tech: ["React", "Node.js", "Express", "MongoDB","Clerk"],
    description: "A music streaming platform with a Spotify-like experience, featuring music player, playlists, authentication and track search.",
    github: "https://github.com/grasyPatel/Celebal_Summer_Internship_Task_Submission",
    live: null,
    features: [
      "Music streaming functionality",
      "Playlist creation and management",
      "Search by track/artist",
      "User registration and login"
    ]
  },
  {
    name: "E-Commerce Platform",
    type: "Shopping Platform",
    tech: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
    description: "An end-to-end e-commerce platform with product management, cart functionality, user auth, and payment processing.",
    github:"https://github.com/grasyPatel/Celebal_Summer_Internship_Task_Submission",
    live: null,
    features: [
      "Product catalog with admin dashboard",
      "Secure checkout and payment gateway",
      "Order history and tracking",
      "User authentication and role-based access"
    ]
  },
  {
    name: "Travel Story App",
    type: "Blog Application",
    tech: ["React Native", "Firebase", "Google Maps API"],
    description: "A social mobile app where users can share travel experiences, tag locations, and interact with other travelers.",
    github: "https://github.com/grasyPatel/Travel-Story",
    live: null,
    features: [
      "Travel story sharing with image upload",
      "Location-based tagging",
      "Offline support",
      "Like/comment and social interaction"
    ]
  },
  {
    name: "Fun Projects Collection",
    type: "Mini Projects",
    tech: ["JavaScript", "HTML", "CSS"],
    description: "A set of interactive games and utilities built using JavaScript and DOM manipulation.",
    github: "https://github.com/grasyPatel",
    live: null,
    features: [
      "Tic Tac Toe",
      "Guess the Number",
      "Simon Says",
      "Stone Paper Scissors"
    ]
  },
  {
    name: "Java OOP Projects",
    type: "Console Applications",
    tech: ["Java"],
    description: "Console-based applications demonstrating object-oriented programming concepts.",
    github:"https://github.com/grasyPatel",
    live: null,
    features: [
      "Vehicle Rental System",
      "E-commerce CLI App",
      "Payroll Management System"
    ]
  }
];

const skills = {
  Frontend: [
    "React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Next.js", "React Native"
  ],
  Backend: [
    "Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "RESTful APIs", "GraphQL", "Spring Boot"
  ],
  Programming: [
    "JavaScript", "Python", "Java", "C++", "SQL"
  ],
  Tools: [
    "Git/GitHub", "Docker", "AWS", "Postman", "VS Code", "Linux", "Figma"
  ]
};

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Institute of Engineering & Science, IPS Academy, Indore",
    duration: "Dec 2022 - May 2026",
    grade: "CGPA: 9.4",
    coursework: [
      "Data Structures", "Algorithms", "Database Management", "Web Development",
      "Operating Systems", "Computer Networks", "Software Engineering", "Machine Learning"
    ]
  }
];

const achievements = [
  "GSSoC’24 Contributor – Worked on open-source GitHub projects",
  "Portfolio Website: https://graceintro.netlify.app/",
  "Leetcode Profile: https://leetcode.com/u/gracepatel91/",
  "Coding Ninjas Profile: https://www.naukri.com/code360/profile/GracePatel",
  "WordPress Blog: https://explorewonders.in/",
  "Certificates from Coding Ninjas, Physics Wallah, and more"
];


  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mt-20 w-full h-[650px] bg-white rounded-lg shadow-xl overflow-hidden flex">
      {/* Sidebar Navigation */}
      <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">Grace Patel</h3>
          <p className="text-sm text-gray-600">Full Stack Developer</p>
        </div>
        
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-12">
          
          {/* About Section */}
          <section id="about" className="scroll-mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Personal Information</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium text-gray-600">Name:</span> {personalInfo.name}</div>
                  <div><span className="font-medium text-gray-600">Title:</span> {personalInfo.title}</div>
                  <div><span className="font-medium text-gray-600">Location:</span> {personalInfo.location}</div>
                  <div><span className="font-medium text-gray-600">Email:</span> {personalInfo.email}</div>
                  <div><span className="font-medium text-gray-600">Phone:</span> {personalInfo.phone}</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Professional Summary</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Passionate Full Stack Developer with hands-on experience in building scalable web applications using modern technologies. 
                  Proven track record of delivering high-quality software solutions and improving system efficiency. 
                  Strong problem-solving skills and ability to work effectively in team environments.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.position}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Projects
            </h2>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">{project.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors">
                        GitHub
                      </a>
                      {project.live && (
                        <a href={project.live} className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <span key={i} className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-sm text-blue-600 font-medium">{edu.field}</p>
                      <p className="text-xs text-gray-600">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full">
                        {edu.duration}
                      </span>
                      <p className="text-sm text-green-600 font-medium mt-1">{edu.grade}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Achievements Section */}
<section id="achievements" className="scroll-mt-4">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
    Achievements
  </h2>
  <div className="space-y-4">
    {achievements.map((item, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
      </div>
    ))}
  </div>
</section>


        </div>
      </div>
    </div>
  );
};

export default Resume;