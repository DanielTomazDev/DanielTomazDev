import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const ProjectsSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DanielTomazDev/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError('Não foi possível carregar os projetos');
        console.error('Erro ao buscar repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#f89820',
      PHP: '#777bb4',
      HTML: '#e34f26',
      CSS: '#1572b6',
      React: '#61dafb',
      Vue: '#4fc08d',
      'C#': '#239120',
      Go: '#00add8',
      Rust: '#dea584',
    };
    return colors[language] || '#ffffff';
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-sw-gray to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block w-12 h-12 border-4 border-sw-gold border-t-transparent rounded-full"
          />
          <p className="text-sw-gold mt-4 text-lg">Carregando projetos da galáxia...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-sw-gray to-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-sw-gray to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-sw-blue rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-sw-gold rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            ARQUIVO DE PROJETOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma coleção dos meus projetos mais recentes, direto do GitHub
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-sw-gray to-black p-6 rounded-xl border border-gray-700 hover:border-sw-gold/50 transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sw-gold transition-colors duration-300">
                      {repo.name}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                      {repo.description || 'Projeto em desenvolvimento...'}
                    </p>
                  </div>
                </div>

                {/* Language and Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span className="text-gray-300">{repo.language}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-sw-blue/20 text-sw-blue text-xs rounded-full border border-sw-blue/30"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center text-xs text-gray-400 mb-6">
                  <Calendar size={12} className="mr-1" />
                  <span>Atualizado em {formatDate(repo.updated_at)}</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 mt-auto">
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </motion.a>
                  
                  {repo.homepage && (
                    <motion.a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-sw-gold to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-sw-gold transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, #FFD700 0%, transparent 70%)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/DanielTomazDev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white font-bold rounded-lg text-lg hover:from-black hover:to-gray-800 transition-all duration-300 border border-gray-600 hover:border-sw-gold"
          >
            <Github size={24} />
            <span>Ver Mais Projetos no GitHub</span>
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
