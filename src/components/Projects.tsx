import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-slideInLeft">
          What I Build
        </h2>
        <p className="text-lg text-gray-300 animate-slideInRight">
          Projects from my GitHub internship repository
        </p>
      </div>
      {loading ? (
        <div className="text-center text-gray-400">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.filter(item => item.type === 'file' || item.type === 'dir').map((item) => (
            <div key={item.path} className="rounded-xl bg-gray-900 glass-effect p-4 flex flex-col justify-between shadow-lg border border-gray-800 hover:scale-105 transition-transform">
              <div>
                <h3 className="text-lg font-semibold text-white truncate mb-2">{item.name}</h3>
                <p className="text-xs text-gray-400 mb-4 truncate">{item.type === 'dir' ? 'Project Folder' : 'File'}</p>
              </div>
              <div className="flex space-x-2 mt-auto">
                <a
                  href={`https://github.com/Rohitpawar4545/summer_internship/tree/main/${item.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded text-white text-xs font-medium hover:from-cyan-600 hover:to-purple-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                {item.download_url && (
                  <a
                    href={item.download_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1 bg-gray-800 rounded text-cyan-300 text-xs font-medium hover:bg-gray-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Raw</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 text-center">
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