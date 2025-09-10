import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    // Implementar download do CV
    console.log('Download CV');
  };

  const handleWhatsAppContact = () => {
    // Implementar contato via WhatsApp
    window.open('https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sw-dark to-black">
      {/* Parallax Background Effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #FFD700 0%, transparent 50%)`,
        }}
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <div className="container mx-auto px-6 text-center z-10 relative">
        {/* Nome e Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            DANIEL TOMAZ
          </h1>
          <h2 className="text-xl md:text-2xl text-sw-gold mb-6 font-light tracking-wider">
            FULL STACK DEVELOPER
          </h2>
        </motion.div>

        {/* Frase de Impacto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-white mb-4 max-w-4xl mx-auto leading-relaxed">
            "O código é a minha <span className="text-sw-blue font-bold">Força</span>. 
            Eu transformo tecnologia em soluções que trabalham por você."
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor Full Stack especializado em <span className="text-sw-gold">Bots</span>, 
            <span className="text-sw-gold"> Sistemas Corporativos</span> e 
            <span className="text-sw-gold"> Soluções Digitais</span> sob medida.
          </p>
        </motion.div>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={handleDownloadCV}
            className="group relative px-8 py-4 bg-gradient-to-r from-sw-gold to-yellow-600 text-black font-bold rounded-lg text-lg hover:from-yellow-600 hover:to-sw-gold transition-all duration-300 transform hover:scale-105 hover-lightsaber"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="inline-block mr-2" size={20} />
            Baixar CV
            <div className="absolute inset-0 rounded-lg bg-sw-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            onClick={handleWhatsAppContact}
            className="group relative px-8 py-4 border-2 border-sw-blue text-sw-blue font-bold rounded-lg text-lg hover:bg-sw-blue hover:text-white transition-all duration-300 transform hover:scale-105 lightsaber-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="inline-block mr-2" size={20} />
            Contato WhatsApp
            <div className="absolute inset-0 rounded-lg bg-sw-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-sw-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-sw-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Lightsaber Effect on Mouse Move */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          left: mousePosition.x * 3 + window.innerWidth / 2,
          top: mousePosition.y * 3 + window.innerHeight / 2,
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-1 h-32 bg-gradient-to-t from-transparent via-sw-blue to-transparent opacity-60 blur-sm" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
