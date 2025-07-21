import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

interface GithubItem {
  name: string;
  html_url: string;
  type: string;
  download_url: string | null;
  path: string;
}

const GITHUB_API = 'https://api.github.com/repos/Rohitpawar4545/summer_internship/contents/';
const GITHUB_REPO = 'https://github.com/Rohitpawar4545/summer_internship';

const Projects = () => {
  const [projects, setProjects] = useState<GithubItem[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GITHUB_API)
      .then(res => res.json())
      .then((data: GithubItem[]) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft">
          What I Build
        </h2>
        <p className="text-xl text-gray-300 animate-slideInRight">
          Projects from my GitHub internship repository
        </p>
      </div>
      {loading ? (
        <div className="text-center text-gray-400">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(item => item.type === 'file' || item.type === 'dir').map((item, index) => (
            <div
              key={item.path}
              className="perspective-1000"
              onMouseEnter={() => setHovered(item.path)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`skill-cube w-full h-48 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-slideInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full rounded-2xl bg-gray-900 flex flex-col items-center justify-center space-y-4 glass-effect relative overflow-hidden">
                  <h3 className="text-xl font-bold text-white text-center truncate px-2">{item.name}</h3>
                  <p className="text-sm text-gray-400 text-center px-2 truncate">{item.type === 'dir' ? 'Project Folder' : 'File'}</p>
                  <a
                    href={`https://github.com/Rohitpawar4545/summer_internship/tree/main/${item.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center mt-2"
                  >
                    <Github className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-cyan-300 mt-1">GitHub</span>
                  </a>
                  {hovered === item.path && (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-3 rounded-2xl transition-all duration-300">
                      <p className="text-sm text-gray-300 text-center px-4">Open on GitHub to view details and code.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-16 text-center">
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-scale bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold"
        >
          <Github className="w-5 h-5" />
          <span>See all on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;