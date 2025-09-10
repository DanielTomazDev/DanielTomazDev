import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiPhp, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiGit, 
  SiTailwindcss,
  SiMysql,
  SiOpenjdk
} from 'react-icons/si';

interface Technology {
  name: string;
  icon: React.ReactElement;
  color: string;
  description: string;
}

const TechSection: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies: Technology[] = [
    {
      name: 'Java',
      icon: <SiOpenjdk size={48} />,
      color: '#f89820',
      description: 'Linguagem robusta para sistemas empresariais e aplicações de grande escala'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript size={48} />,
      color: '#f7df1e',
      description: 'A linguagem da web moderna, tanto frontend quanto backend'
    },
    {
      name: 'PHP',
      icon: <SiPhp size={48} />,
      color: '#777bb4',
      description: 'Desenvolvimento web server-side poderoso e versátil'
    },
    {
      name: 'Python',
      icon: <SiPython size={48} />,
      color: '#3776ab',
      description: 'Automação, IA e desenvolvimento backend elegante'
    },
    {
      name: 'HTML5',
      icon: <SiHtml5 size={48} />,
      color: '#e34f26',
      description: 'Estrutura semântica moderna para aplicações web'
    },
    {
      name: 'CSS3',
      icon: <SiCss3 size={48} />,
      color: '#1572b6',
      description: 'Estilização avançada e animações para interfaces incríveis'
    },
    {
      name: 'React',
      icon: <SiReact size={48} />,
      color: '#61dafb',
      description: 'Biblioteca para interfaces de usuário reativas e componentizadas'
    },
    {
      name: 'Git',
      icon: <SiGit size={48} />,
      color: '#f05032',
      description: 'Controle de versão distribuído para projetos colaborativos'
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss size={48} />,
      color: '#06b6d4',
      description: 'Framework CSS utilitário para desenvolvimento rápido e consistente'
    },
    {
      name: 'SQL',
      icon: <SiMysql size={48} />,
      color: '#4479a1',
      description: 'Gerenciamento e consulta de bancos de dados relacionais'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const shipVariants = {
    hidden: { 
      opacity: 0, 
      x: -200,
      rotate: -45 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-sw-gray to-black relative overflow-hidden">
      {/* Background Space Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sw-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sw-gold/10 rounded-full blur-3xl animate-pulse-slow" />
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
            FROTA TECNOLÓGICA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada tecnologia é uma nave em minha frota, pronta para navegar pelos desafios do desenvolvimento
          </p>
        </motion.div>

        {/* Tech Grid - Naves Espaciais */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={shipVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative group cursor-pointer"
            >
              {/* Nave Container */}
              <div 
                className="relative bg-gradient-to-br from-sw-gray to-black p-6 rounded-xl border-2 transition-all duration-300 hover:border-opacity-100 transform"
                style={{ 
                  borderColor: hoveredTech === tech.name ? tech.color : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: hoveredTech === tech.name ? `0 0 30px ${tech.color}40` : 'none'
                }}
              >
                {/* Engine Glow Effect */}
                <motion.div
                  className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color, filter: 'blur(4px)' }}
                  animate={hoveredTech === tech.name ? { 
                    scale: [1, 1.2, 1], 
                    opacity: [0.5, 1, 0.5] 
                  } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                />

                {/* Tech Icon */}
                <div 
                  className="flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ color: hoveredTech === tech.name ? tech.color : '#ffffff' }}
                >
                  {tech.icon}
                </div>

                {/* Tech Name */}
                <h3 className="text-center font-bold text-lg text-white group-hover:text-sw-gold transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Hyperspace Trail Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${tech.color} 50%, transparent 100%)`,
                  }}
                  animate={hoveredTech === tech.name ? { x: [-100, 100] } : {}}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>

              {/* Tooltip */}
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-20"
                >
                  <div 
                    className="bg-black border rounded-lg p-4 text-sm text-white max-w-xs shadow-2xl"
                    style={{ borderColor: tech.color }}
                  >
                    <div className="text-center">
                      <h4 className="font-bold mb-2" style={{ color: tech.color }}>
                        {tech.name}
                      </h4>
                      <p className="text-gray-300 text-xs">
                        {tech.description}
                      </p>
                    </div>
                    {/* Arrow */}
                    <div 
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-black border-l border-t"
                      style={{ borderColor: tech.color }}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Fleet Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-sw-gray to-black p-6 rounded-xl border border-sw-gold/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sw-gold font-bold text-lg">
              FROTA OPERACIONAL - {technologies.length} NAVES ATIVAS
            </span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
