import React, { useState, useEffect } from 'react';
import { Mail, Download, Linkedin, Github, Instagram } from 'lucide-react';
import rohitImg from "../assets/rohit.jpg";

const Header = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = "Hi, I'm Rohit Pawar — DevOps & Cloud Enthusiast | Future-ready Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center z-10 relative flex items-center justify-between max-w-7xl mx-auto px-4">
      <div className="flex-1">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 animate-glow bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent animate-slideInLeft">
            Rohit Pawar
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-cyan-300 font-light animate-slideInRight">
              {typingText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
        
        <div className="space-y-4 animate-slideInUp">
          <p className="text-xl text-gray-300">
            B.Sc (Hons) Computer Science | MGM University, Aurangabad, Maharashtra
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-scale">
              <Mail className="w-5 h-5 text-cyan-400 animate-pulse3d" />
              <span className="text-gray-300">rohitpawar92006@gmail.com</span>
            </div>
            
            <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-3 hover-scale neon-border">
              <Download className="w-5 h-5" />
              <span className="font-semibold">Download Resume</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Photo Section */}
      <div className="flex justify-center items-center mx-auto my-8 lg:my-0 lg:ml-12 animate-slideInRight">
        <div className="relative group perspective-1000 w-32 h-32 sm:w-44 sm:h-44 lg:w-80 lg:h-80">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 p-1 hover-scale">
            <div className="w-full h-full rounded-full bg-gray-900 glass-effect flex items-center justify-center relative overflow-hidden">
              {/* Rohit's Photo */}
              <img 
                src={rohitImg} 
                alt="Rohit Pawar" 
                className="w-full h-full object-cover rounded-full border-4 border-transparent"
              />
              {/* Floating Social Bubbles */}
              <a
                href="https://www.linkedin.com/in/rohit-pawar-118124317"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 bottom-2 -translate-x-1/2 z-20 bubble-float bubble-delay-0"
                title="LinkedIn"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-2 hover:ring-blue-400">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </a>
              <a
                href="https://github.com/Rohitpawar4545"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/3 bottom-4 -translate-x-1/2 z-20 bubble-float bubble-delay-1"
                title="GitHub"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-2 hover:ring-gray-400">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/rohit_pawar_45rp?igsh=MTJnZWtxZW96eWZhcA=="
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-2/3 bottom-4 -translate-x-1/2 z-20 bubble-float bubble-delay-2"
                title="Instagram"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg transition-transform duration-300 hover:scale-110 hover:ring-2 hover:ring-pink-400">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-end justify-center pb-6">
                <div className="text-center">
                  <span className="text-white font-bold text-xl block">Rohit Pawar</span>
                  <span className="text-cyan-300 text-sm">DevOps Engineer</span>
                </div>
              </div>
              {/* Professional badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-3 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;