import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Rocket } from 'lucide-react';

const ExperienceCounter: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Data de início da carreira (2 anos atrás)
  const startDate = new Date('2022-01-01');
  const currentDate = new Date();

  useEffect(() => {
    const calculateTime = () => {
      const diff = currentDate.getTime() - startDate.getTime();
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ years, months, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      value: '2+',
      label: 'Anos de Experiência',
      color: '#FFD700'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      value: '50+',
      label: 'Projetos Entregues',
      color: '#00BFFF'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      value: '24/7',
      label: 'Disponibilidade',
      color: '#10B981'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: '100%',
      label: 'Clientes Satisfeitos',
      color: '#F59E0B'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sw-gray to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
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
            EXPERIÊNCIA
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sw-gold to-sw-blue mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tempo dedicado ao desenvolvimento de soluções digitais
          </p>
        </motion.div>

        {/* Main Counter Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-br from-sw-gray to-black border border-sw-gold/20 rounded-2xl p-8 max-w-4xl mx-auto hover:border-sw-gold/50 transition-all duration-300">
            {/* Live Counter */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-sw-gold mb-2">
                  {timeLeft.years.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Anos</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-sw-blue mb-2">
                  {timeLeft.months.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Meses</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Dias</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Horas</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Min</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Seg</div>
              </motion.div>
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                Tempo dedicado ao desenvolvimento Full Stack
              </p>
              <div className="inline-block bg-gradient-to-r from-sw-gold to-yellow-600 text-black px-6 py-2 rounded-full font-bold">
                EXPERIÊNCIA EM TEMPO REAL
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-sw-gray to-black border border-sw-gold/20 rounded-xl p-6 text-center hover:border-sw-gold/50 transition-all duration-300 h-full">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color} 0%, transparent 70%)`
                  }}
                />

                <div className="relative z-10">
                  <div 
                    className="inline-block p-4 rounded-full mb-4"
                    style={{ 
                      backgroundColor: `${stat.color}20`,
                      color: stat.color 
                    }}
                  >
                    {stat.icon}
                  </div>
                  
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-sw-gold to-yellow-600 p-1 rounded-xl">
            <div className="bg-gradient-to-br from-sw-gray to-black p-6 rounded-xl">
              <p className="text-lg text-gray-300 mb-4">
                Pronto para trabalhar com um desenvolvedor experiente?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-sw-gold to-yellow-600 text-black font-bold rounded-lg text-lg hover:from-yellow-600 hover:to-sw-gold transition-all duration-300"
              >
                Entre em Contato
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceCounter;
