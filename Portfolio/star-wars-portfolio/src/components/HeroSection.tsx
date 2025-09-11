import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Instagram, Github } from 'lucide-react';

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
    window.open('https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.', '_blank');
  };

  const handleInstagramContact = () => {
    window.open('https://instagram.com/danieltomazdev', '_blank');
  };

  const handleGithubContact = () => {
    window.open('https://github.com/DanielTomazDev', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sw-dark via-black to-sw-dark">
      {/* Galaxy Background Effect */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at ${30 + mousePosition.x * 0.5}% ${40 + mousePosition.y * 0.3}%, #FFD700 0%, transparent 70%),
            radial-gradient(circle at ${70 + mousePosition.x * 0.3}% ${60 + mousePosition.y * 0.5}%, #00BFFF 0%, transparent 60%),
            radial-gradient(circle at ${50 + mousePosition.x * 0.2}% ${30 + mousePosition.y * 0.4}%, #FF6B6B 0%, transparent 50%)
          `,
        }}
        animate={{
          x: mousePosition.x * 1.5,
          y: mousePosition.y * 1.5,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
      />
      
      {/* Animated Nebula Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(ellipse at center, #FFD700 0%, transparent 70%)",
            "radial-gradient(ellipse at center, #00BFFF 0%, transparent 70%)",
            "radial-gradient(ellipse at center, #FFD700 0%, transparent 70%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-4xl mx-auto"
        >
          <motion.button
            onClick={handleDownloadCV}
            className="group relative px-6 py-3 bg-gradient-to-r from-sw-gold to-yellow-600 text-black font-bold rounded-lg text-base hover:from-yellow-600 hover:to-sw-gold transition-all duration-300 transform hover:scale-105 lightsaber-glow"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FFD700" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="inline-block mr-2" size={18} />
            Baixar CV
          </motion.button>

          <motion.button
            onClick={handleWhatsAppContact}
            className="group relative px-6 py-3 border-2 border-green-500 text-green-500 font-bold rounded-lg text-base hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #10B981" }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="inline-block mr-2" size={18} />
            WhatsApp
          </motion.button>

          <motion.button
            onClick={handleInstagramContact}
            className="group relative px-6 py-3 border-2 border-pink-500 text-pink-500 font-bold rounded-lg text-base hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #EC4899" }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="inline-block mr-2" size={18} />
            Instagram
          </motion.button>

          <motion.button
            onClick={handleGithubContact}
            className="group relative px-6 py-3 border-2 border-sw-blue text-sw-blue font-bold rounded-lg text-base hover:bg-sw-blue hover:text-white transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00BFFF" }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="inline-block mr-2" size={18} />
            GitHub
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

