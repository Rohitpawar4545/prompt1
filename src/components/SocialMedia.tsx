import React from 'react';
import { Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/rohit_pawar_45rp?igsh=MTJnZWtxZW96eWZhcA==',
      color: 'from-pink-500 to-purple-500',
      description: 'Follow my journey'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/rohit-pawar-118124317',
      color: 'from-blue-500 to-cyan-500',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Rohitpawar4545',
      color: 'from-gray-500 to-gray-700',
      description: 'View my code'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft">
          Connect With Me
        </h2>
        <p className="text-xl text-gray-300 animate-slideInRight">
          Let's build something amazing together
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {socialLinks.map((social, index) => (
          <div key={social.name} className="group perspective-1000">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-32 h-32 rounded-2xl bg-gradient-to-r ${social.color} p-1 social-icon transform-style-3d hover-scale`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full h-full rounded-2xl bg-gray-900 flex flex-col items-center justify-center space-y-2 glass-effect">
                <social.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-white">{social.name}</span>
              </div>
            </a>
            <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm text-gray-400">{social.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-scale">
          <ExternalLink className="w-5 h-5 text-cyan-400" />
          <span className="text-gray-300">Find me on these platforms</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;