import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Pocket as Docker, Terminal } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'docker-menu',
      title: 'Docker Menu-Based App',
      description: 'CLI DevOps tool powered by Docker for container management and automation',
      longDescription: 'A comprehensive command-line interface tool that simplifies Docker operations. Features automated container deployment, monitoring, and management capabilities with an intuitive menu system.',
      technologies: ['Docker', 'Bash', 'Linux', 'CLI'],
      icons: [Docker, Terminal, Code],
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Rohitpawar4545',
      demo: '#'
    },
    {
      id: 'ai-docker',
      title: 'AI-Based Docker Project Using Gradio',
      description: 'AI model interface inside Docker container using Gradio for seamless deployment',
      longDescription: 'Advanced AI application containerized with Docker and deployed using Gradio. Provides a user-friendly web interface for AI model interaction with scalable deployment capabilities.',
      technologies: ['Python', 'Docker', 'Gradio', 'AI/ML'],
      icons: [Brain, Docker, Code],
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Rohitpawar4545',
      demo: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft">
          What I've Built
        </h2>
        <p className="text-xl text-gray-300 animate-slideInRight">
          Projects that showcase my skills and passion
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="perspective-1000"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`project-card rounded-2xl bg-gradient-to-r ${project.color} p-1 animate-slideInUp`}
                 style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-full h-full rounded-2xl bg-gray-900 glass-effect relative overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.icons.map((Icon, iconIndex) => (
                        <Icon key={iconIndex} className="w-6 h-6 text-gray-400 animate-pulse3d" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
                
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse3d">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-semibold">Click to explore</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-scale">
          <Github className="w-5 h-5 text-cyan-400" />
          <span className="text-gray-300">More projects on GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;