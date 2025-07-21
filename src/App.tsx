import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import './animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <Header />
      </section>
      
      <section id="social" className="relative py-20">
        <SocialMedia />
      </section>
      
      <section id="skills" className="relative py-20">
        <Skills />
      </section>
      
      <section id="projects" className="relative py-20">
        <Projects />
      </section>
      
      <section id="contact" className="relative py-20">
        <Contact />
      </section>
    </div>
  );
}

export default App;