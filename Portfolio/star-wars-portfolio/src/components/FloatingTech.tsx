import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TechIcon {
  id: number;
  name: string;
  icon: string;
  x: number;
  y: number;
  speed: number;
  direction: number;
  color: string;
  description: string;
}

const FloatingTech: React.FC = () => {
  const [techs, setTechs] = useState<TechIcon[]>([]);

  const techData = [
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', description: 'Linguagem versátil para web' },
    { name: 'React', icon: '⚛️', color: '#61DAFB', description: 'Biblioteca para interfaces' },
    { name: 'TypeScript', icon: '🔷', color: '#3178C6', description: 'JavaScript com tipos' },
    { name: 'Python', icon: '🐍', color: '#3776AB', description: 'Automação e IA' },
    { name: 'Java', icon: '☕', color: '#ED8B00', description: 'Sistemas robustos' },
    { name: 'PHP', icon: '🐘', color: '#777BB4', description: 'Desenvolvimento web' },
    { name: 'CSS', icon: '🎨', color: '#1572B6', description: 'Estilização visual' },
    { name: 'HTML', icon: '📄', color: '#E34F26', description: 'Estrutura web' },
    { name: 'Git', icon: '🌿', color: '#F05032', description: 'Controle de versão' },
    { name: 'SQL', icon: '🗄️', color: '#336791', description: 'Banco de dados' },
    { name: 'Tailwind', icon: '💨', color: '#06B6D4', description: 'CSS utilitário' },
    { name: 'Node.js', icon: '🟢', color: '#339933', description: 'JavaScript no servidor' },
  ];

  useEffect(() => {
    const generateTechs = () => {
      const newTechs: TechIcon[] = techData.map((tech, index) => ({
        id: index,
        ...tech,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * Math.PI * 2,
      }));
      setTechs(newTechs);
    };

    generateTechs();
    window.addEventListener('resize', generateTechs);
    return () => window.removeEventListener('resize', generateTechs);
  }, []);

  useEffect(() => {
    const animateTechs = () => {
      setTechs(prevTechs =>
        prevTechs.map(tech => {
          let newX = tech.x + Math.cos(tech.direction) * tech.speed;
          let newY = tech.y + Math.sin(tech.direction) * tech.speed;
          let newDirection = tech.direction;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - 60) {
            newDirection = Math.PI - tech.direction;
            newX = Math.max(0, Math.min(window.innerWidth - 60, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight - 60) {
            newDirection = -tech.direction;
            newY = Math.max(0, Math.min(window.innerHeight - 60, newY));
          }

          return {
            ...tech,
            x: newX,
            y: newY,
            direction: newDirection,
          };
        })
      );
    };

    const interval = setInterval(animateTechs, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-tech-container">
      {techs.map(tech => (
        <motion.div
          key={tech.id}
          className="floating-tech-icon group"
          style={{
            left: `${tech.x}px`,
            top: `${tech.y}px`,
          }}
          whileHover={{ 
            scale: 1.3,
            boxShadow: `0 0 20px ${tech.color}`,
            transition: { duration: 0.2 }
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <div 
            className="tech-icon-inner"
            style={{
              borderColor: tech.color,
              boxShadow: `0 0 10px ${tech.color}40`,
            }}
          >
            <span className="text-2xl">{tech.icon}</span>
          </div>
          
          {/* Tooltip */}
          <div className="tech-tooltip">
            <div className="font-bold text-white">{tech.name}</div>
            <div className="text-xs text-gray-300">{tech.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTech;
