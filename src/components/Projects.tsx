import React from 'react';
import { Github, ExternalLink, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  borderColor: string;
  glowColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Flask Docker Application",
    description: "Containerized Flask web application with Docker deployment and automation",
    tags: ["Python", "Flask", "Docker", "Web Development"],
    github: "https://github.com/Rohitpawar4545/summer_internship/tree/main/flask-docker-app",
    borderColor: "border-cyan-400",
    glowColor: "shadow-cyan-400/50"
  },
  {
    id: 2,
    title: "Apache Setup & Configuration",
    description: "Apache web server setup and configuration for production deployment",
    tags: ["Apache", "Server Setup", "DevOps", "Configuration"],
    github: "https://github.com/Rohitpawar4545/summer_internship/tree/main/apache%20setup",
    borderColor: "border-pink-400",
    glowColor: "shadow-pink-400/50"
  },
  {
    id: 3,
    title: "Image Size Analysis",
    description: "Jupyter notebook for analyzing and processing image sizes with Python",
    tags: ["Python", "Jupyter", "Image Processing", "Data Analysis"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/Image_size.ipynb",
    borderColor: "border-orange-400",
    glowColor: "shadow-orange-400/50"
  },
  {
    id: 4,
    title: "RAM Monitoring System",
    description: "System monitoring tool to read and analyze RAM usage patterns",
    tags: ["Python", "System Monitoring", "Jupyter", "Data Analysis"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/read_RAM.ipynb",
    borderColor: "border-purple-400",
    glowColor: "shadow-purple-400/50"
  },
  {
    id: 5,
    title: "Tuple List Operations",
    description: "Python notebook demonstrating advanced tuple and list operations",
    tags: ["Python", "Data Structures", "Jupyter", "Programming"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/tupal_list.ipynb",
    borderColor: "border-green-400",
    glowColor: "shadow-green-400/50"
  },
  {
    id: 6,
    title: "Camera Integration",
    description: "Python application for camera integration and image capture",
    tags: ["Python", "Camera", "Image Capture", "Hardware Integration"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/camera.py",
    borderColor: "border-blue-400",
    glowColor: "shadow-blue-400/50"
  },
  {
    id: 7,
    title: "Emergency Alert System",
    description: "Automated emergency alert system with notification capabilities",
    tags: ["Python", "Automation", "Alerts", "System Integration"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/emergency_alert.py",
    borderColor: "border-yellow-400",
    glowColor: "shadow-yellow-400/50"
  },
  {
    id: 8,
    title: "Social Media Automation",
    description: "Automated social media posting and management tools",
    tags: ["Python", "Automation", "Social Media", "API Integration"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/insta.py",
    borderColor: "border-indigo-400",
    glowColor: "shadow-indigo-400/50"
  },
  {
    id: 9,
    title: "LinkedIn Automation",
    description: "LinkedIn profile management and automation scripts",
    tags: ["Python", "LinkedIn", "Automation", "Web Scraping"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/linkdin.py",
    borderColor: "border-red-400",
    glowColor: "shadow-red-400/50"
  },
  {
    id: 10,
    title: "Email Automation",
    description: "Automated email sending and management system",
    tags: ["Python", "Email", "Automation", "SMTP"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/mail.py",
    borderColor: "border-teal-400",
    glowColor: "shadow-teal-400/50"
  },
  {
    id: 11,
    title: "Menu-Based Applications",
    description: "Interactive menu-based Python applications with user interface",
    tags: ["Python", "CLI", "User Interface", "Menu System"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/menu_base.py",
    borderColor: "border-emerald-400",
    glowColor: "shadow-emerald-400/50"
  },
  {
    id: 12,
    title: "SMS Automation",
    description: "SMS sending and automation system for notifications",
    tags: ["Python", "SMS", "Automation", "Communication"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/sms.py",
    borderColor: "border-violet-400",
    glowColor: "shadow-violet-400/50"
  },
  {
    id: 13,
    title: "Twitter Automation",
    description: "Twitter posting and automation tools for social media management",
    tags: ["Python", "Twitter", "Automation", "API"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/twitter.py",
    borderColor: "border-sky-400",
    glowColor: "shadow-sky-400/50"
  },
  {
    id: 14,
    title: "Website Monitoring",
    description: "Website uptime monitoring and status checking system",
    tags: ["Python", "Web Monitoring", "Automation", "Status Check"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/website_down.py",
    borderColor: "border-rose-400",
    glowColor: "shadow-rose-400/50"
  },
  {
    id: 15,
    title: "WhatsApp Automation",
    description: "WhatsApp messaging automation and bulk sending tools",
    tags: ["Python", "WhatsApp", "Automation", "Messaging"],
    github: "https://github.com/Rohitpawar4545/summer_internship/blob/main/wp1.py",
    borderColor: "border-lime-400",
    glowColor: "shadow-lime-400/50"
  }
];

const tagColors: Record<string, string> = {
  "Python": "bg-blue-500 text-white",
  "Flask": "bg-gray-500 text-white",
  "Docker": "bg-blue-400 text-white",
  "Web Development": "bg-green-500 text-white",
  "Apache": "bg-red-500 text-white",
  "Server Setup": "bg-orange-500 text-white",
  "DevOps": "bg-purple-500 text-white",
  "Configuration": "bg-gray-600 text-white",
  "Jupyter": "bg-orange-600 text-white",
  "Image Processing": "bg-pink-500 text-white",
  "Data Analysis": "bg-cyan-500 text-white",
  "System Monitoring": "bg-indigo-500 text-white",
  "Data Structures": "bg-green-600 text-white",
  "Programming": "bg-blue-600 text-white",
  "Camera": "bg-purple-600 text-white",
  "Image Capture": "bg-yellow-500 text-white",
  "Hardware Integration": "bg-gray-700 text-white",
  "Automation": "bg-teal-500 text-white",
  "Alerts": "bg-red-600 text-white",
  "System Integration": "bg-indigo-600 text-white",
  "Social Media": "bg-pink-600 text-white",
  "API Integration": "bg-cyan-600 text-white",
  "LinkedIn": "bg-blue-700 text-white",
  "Web Scraping": "bg-orange-700 text-white",
  "Email": "bg-green-700 text-white",
  "SMTP": "bg-gray-800 text-white",
  "CLI": "bg-gray-600 text-white",
  "User Interface": "bg-purple-700 text-white",
  "Menu System": "bg-teal-600 text-white",
  "SMS": "bg-blue-800 text-white",
  "Communication": "bg-indigo-700 text-white",
  "Twitter": "bg-sky-500 text-white",
  "API": "bg-cyan-700 text-white",
  "Web Monitoring": "bg-rose-500 text-white",
  "Status Check": "bg-red-700 text-white",
  "WhatsApp": "bg-green-800 text-white",
  "Messaging": "bg-lime-500 text-white"
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const getGlowClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'border-cyan-400': 'glow-cyan',
      'border-pink-400': 'glow-pink',
      'border-orange-400': 'glow-orange',
      'border-purple-400': 'glow-purple',
      'border-green-400': 'glow-green',
      'border-blue-400': 'glow-blue',
      'border-yellow-400': 'glow-yellow',
      'border-indigo-400': 'glow-indigo',
      'border-red-400': 'glow-red',
      'border-teal-400': 'glow-teal',
      'border-emerald-400': 'glow-emerald',
      'border-violet-400': 'glow-violet',
      'border-sky-400': 'glow-sky',
      'border-rose-400': 'glow-rose',
      'border-lime-400': 'glow-lime'
    };
    return colorMap[color] || 'glow-cyan';
  };

  return (
    <motion.div
      className={`relative group cursor-pointer rounded-2xl border-2 ${project.borderColor} bg-gray-900/80 backdrop-blur-sm p-6 project-card-glow transition-all duration-300 hover:scale-105 hover:${getGlowClass(project.borderColor)} hover:shadow-2xl`}
      whileHover={{ 
        scale: 1.02,
        y: -8
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-2xl ${project.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[tag] || 'bg-gray-600 text-white'} transition-all duration-200 hover:scale-105`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 hover:scale-105 group hover:shadow-lg"
          >
            <Github className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
            <span className="text-sm font-medium">Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="relative min-h-screen py-20">
      {/* Animated space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 star-field opacity-30" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            What I've Built
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Projects that showcase my skills and passion
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://github.com/Rohitpawar4545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;