import React from 'react';
import { motion } from 'framer-motion';

interface SoftSkill {
  id: string;
  name: string;
  icon: string;
  description: string;
  level: number;
  color: string;
}

const SoftSkillsSection: React.FC = () => {
  const softSkills: SoftSkill[] = [
    {
      id: 'communication',
      name: 'Comunicação',
      icon: '💬',
      description: 'Clareza na expressão de ideias técnicas',
      level: 95,
      color: '#00BFFF'
    },
    {
      id: 'proactivity',
      name: 'Proatividade',
      icon: '⚡',
      description: 'Iniciativa para resolver problemas',
      level: 90,
      color: '#FFD700'
    },
    {
      id: 'teamwork',
      name: 'Trabalho em Equipe',
      icon: '🤝',
      description: 'Colaboração eficiente em projetos',
      level: 88,
      color: '#10B981'
    },
    {
      id: 'problem-solving',
      name: 'Resolução de Problemas',
      icon: '🧩',
      description: 'Pensamento analítico e criativo',
      level: 92,
      color: '#F59E0B'
    },
    {
      id: 'creativity',
      name: 'Criatividade',
      icon: '🎨',
      description: 'Soluções inovadoras e originais',
      level: 85,
      color: '#8B5CF6'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sw-gray to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6" style={{ fontFamily: "'Orbitron', monospace" }}>
            SOFT SKILLS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sw-gold to-sw-blue mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As habilidades que me tornam um desenvolvedor completo
          </p>
        </motion.div>

        {/* Grid de Soft Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Principal */}
              <div className="relative bg-gradient-to-br from-sw-gray to-black border border-sw-gold/20 rounded-xl p-6 hover:border-sw-gold/50 transition-all duration-300 h-full">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`
                  }}
                />

                <div className="relative z-10">
                  {/* Icon e Nome */}
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl mb-4"
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {skill.description}
                    </p>
                  </div>

                  {/* Level Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Nível</span>
                      <span className="text-sm font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>

                  {/* Badge Star Wars Style */}
                  <div className="text-center">
                    <div 
                      className="inline-block px-4 py-2 rounded-full border-2 text-sm font-bold"
                      style={{ 
                        borderColor: skill.color,
                        color: skill.color,
                        backgroundColor: `${skill.color}10`
                      }}
                    >
                      {skill.level >= 90 ? 'MESTRE' : skill.level >= 80 ? 'EXPERT' : 'AVANÇADO'}
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div 
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-sw-gold to-yellow-600 p-1 rounded-xl">
            <div className="bg-gradient-to-br from-sw-gray to-black p-6 rounded-xl">
              <p className="text-lg text-gray-300 mb-4">
                Essas habilidades me ajudam a entregar projetos excepcionais
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-sw-gold to-yellow-600 text-black font-bold rounded-lg text-lg hover:from-yellow-600 hover:to-sw-gold transition-all duration-300"
              >
                Vamos Trabalhar Juntos!
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
