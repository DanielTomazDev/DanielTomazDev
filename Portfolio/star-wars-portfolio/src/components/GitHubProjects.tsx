import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
}

const GitHubProjects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DanielTomazDev/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Erro ao carregar repositórios');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#F7DF1E',
      TypeScript: '#3178C6',
      Python: '#3776AB',
      Java: '#ED8B00',
      PHP: '#777BB4',
      HTML: '#E34F26',
      CSS: '#1572B6',
      React: '#61DAFB',
    };
    return colors[language || ''] || '#FFD700';
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-black via-sw-dark to-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Github className="w-12 h-12 text-sw-gold" />
            </motion.div>
            <p className="text-white mt-4">Carregando projetos da galáxia...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-black via-sw-dark to-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-500">Erro: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black via-sw-dark to-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            PROJETOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma coleção dos meus projetos mais recentes, direto do GitHub
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-sw-gold to-sw-blue mx-auto mt-8" />
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-sw-gray to-black border border-sw-gold/20 rounded-xl p-6 hover:border-sw-gold/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sw-gold/5 to-sw-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-sw-gold transition-colors">
                    {repo.name}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-sw-blue transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sw-gold transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-300 mb-4 min-h-[3rem]">
                  {repo.description || 'Projeto em desenvolvimento...'}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Star size={16} />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <GitFork size={16} />
                    {repo.forks_count}
                  </div>
                  {repo.language && (
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      <span className="text-gray-400">{repo.language}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-sw-gold/20 text-sw-gold text-xs rounded-full border border-sw-gold/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link para GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/DanielTomazDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sw-blue to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-sw-blue transition-all duration-300 transform hover:scale-105 lightsaber-glow"
          >
            <Github size={20} />
            Ver todos os projetos no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubProjects;
