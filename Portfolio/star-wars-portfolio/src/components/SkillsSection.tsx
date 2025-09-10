import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Zap, 
  Users, 
  Target, 
  Lightbulb, 
  Clock,
  Shield,
  Heart
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactElement;
  description: string;
  jediBadge: string;
  color: string;
  level: number;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Comunicação',
      icon: <MessageSquare size={32} />,
      description: 'Habilidade essencial para transmitir ideias e colaborar efetivamente',
      jediBadge: 'Mestre da Diplomacia',
      color: '#00BFFF',
      level: 95
    },
    {
      name: 'Proatividade',
      icon: <Zap size={32} />,
      description: 'Antecipação de problemas e busca constante por soluções inovadoras',
      jediBadge: 'Guardião da Iniciativa',
      color: '#FFD700',
      level: 92
    },
    {
      name: 'Trabalho em Equipe',
      icon: <Users size={32} />,
      description: 'Colaboração harmoniosa para alcançar objetivos comuns',
      jediBadge: 'Líder da Aliança Rebelde',
      color: '#32CD32',
      level: 88
    },
    {
      name: 'Resolução de Problemas',
      icon: <Target size={32} />,
      description: 'Análise estratégica e implementação de soluções eficazes',
      jediBadge: 'Estrategista Jedi',
      color: '#FF4500',
      level: 96
    },
    {
      name: 'Criatividade',
      icon: <Lightbulb size={32} />,
      description: 'Pensamento inovador para criar soluções únicas e impactantes',
      jediBadge: 'Visionário da Força',
      color: '#9932CC',
      level: 90
    },
    {
      name: 'Gestão de Tempo',
      icon: <Clock size={32} />,
      description: 'Organização eficiente para entregar projetos dentro do prazo',
      jediBadge: 'Mestre do Tempo',
      color: '#DC143C',
      level: 87
    },
    {
      name: 'Adaptabilidade',
      icon: <Shield size={32} />,
      description: 'Flexibilidade para se ajustar rapidamente a mudanças e desafios',
      jediBadge: 'Sobrevivente Galáctico',
      color: '#4169E1',
      level: 93
    },
    {
      name: 'Empatia',
      icon: <Heart size={32} />,
      description: 'Compreensão das necessidades do cliente para soluções personalizadas',
      jediBadge: 'Guardião da Harmonia',
      color: '#FF69B4',
      level: 89
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-sw-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-spin-slow" />
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
            HABILIDADES JEDI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As soft skills que me guiam através da galáxia do desenvolvimento
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-sw-gray to-black p-6 rounded-xl border border-gray-700 hover:border-opacity-100 transition-all duration-300 h-full"
                   style={{ borderColor: skill.color + '50' }}>
                
                {/* Skill Icon */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: skill.color + '20',
                      color: skill.color,
                      boxShadow: `0 0 20px ${skill.color}30`
                    }}
                  >
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-sw-gold transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Jedi Badge */}
                <div className="text-center mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold border"
                    style={{ 
                      backgroundColor: skill.color + '20',
                      color: skill.color,
                      borderColor: skill.color + '50'
                    }}
                  >
                    {skill.jediBadge}
                  </span>
                </div>

                {/* Skill Level Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Nível de Maestria</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`
                  }}
                />

                {/* Force Lightning Effect */}
                <motion.div
                  className="absolute -top-1 -right-1 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full"
                    style={{ 
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Jedi Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-sw-gray to-black p-8 rounded-xl border border-sw-gold/30">
            <h3 className="text-2xl font-bold text-sw-gold mb-6">O Código do Desenvolvedor</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="italic mb-2">"Não há ignorância, há conhecimento."</p>
                <p className="text-sm text-gray-400">Busco sempre aprender e me atualizar</p>
              </div>
              <div>
                <p className="italic mb-2">"Não há paixão, há serenidade."</p>
                <p className="text-sm text-gray-400">Mantenho a calma mesmo sob pressão</p>
              </div>
              <div>
                <p className="italic mb-2">"Não há caos, há harmonia."</p>
                <p className="text-sm text-gray-400">Organizo código e processos com clareza</p>
              </div>
              <div>
                <p className="italic mb-2">"Não há morte, há a Força."</p>
                <p className="text-sm text-gray-400">Cada projeto deixa um legado duradouro</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
