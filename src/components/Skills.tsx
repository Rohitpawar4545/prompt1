import React, { useState } from 'react';
import { Cloud, Settings, Code, Database, Container, Cpu } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: 'Cloud Computing',
      icon: Cloud,
      description: 'AWS & Azure Basics',
      color: 'from-blue-500 to-cyan-500',
      level: 85
    },
    {
      name: 'DevOps',
      icon: Settings,
      description: 'CI/CD Pipelines, Docker, Jenkins',
      color: 'from-green-500 to-teal-500',
      level: 90
    },
    {
      name: 'C++',
      icon: Code,
      description: 'Object-Oriented Programming',
      color: 'from-purple-500 to-pink-500',
      level: 88
    },
    {
      name: 'C#',
      icon: Database,
      description: '.NET Framework Development',
      color: 'from-indigo-500 to-purple-500',
      level: 82
    },
    {
      name: 'Python',
      icon: Cpu,
      description: 'Automation & Scripting',
      color: 'from-yellow-500 to-orange-500',
      level: 87
    },
    {
      name: 'Docker',
      icon: Container,
      description: 'Containerization & Orchestration',
      color: 'from-cyan-500 to-blue-500',
      level: 85
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft">
          My Tech Stack
        </h2>
        <p className="text-xl text-gray-300 animate-slideInRight">
          Technologies I love working with
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="perspective-1000"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={`skill-cube w-full h-48 rounded-2xl bg-gradient-to-r ${skill.color} p-1 animate-slideInUp`}
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-full h-full rounded-2xl bg-gray-900 flex flex-col items-center justify-center space-y-4 glass-effect relative overflow-hidden">
                <skill.icon className="w-12 h-12 text-white animate-pulse3d" />
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-3 rounded-2xl transition-all duration-300">
                    <p className="text-sm text-gray-300 text-center px-4">{skill.description}</p>
                    <div className="w-3/4 bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">{skill.level}% Proficiency</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-scale">
          <span className="text-gray-300">Hover over cards to see proficiency levels</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;