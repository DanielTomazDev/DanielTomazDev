import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const loadingTexts = [
    'Inicializando sistemas da nave...',
    'Conectando com a Força...',
    'Carregando arsenal de tecnologias...',
    'Preparando projetos para exibição...',
    'Estabelecendo comunicação intergaláctica...',
    'Portfólio pronto para decolar!'
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          setLoading(false);
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-8 border-4 border-sw-gold border-t-transparent rounded-full"
        />

        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-sw-blue via-sw-gold to-sw-blue rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.div
          key={progress}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-sw-gold text-2xl font-bold mb-4"
        >
          {progress}%
        </motion.div>

        {/* Loading Text */}
        <motion.p
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-gray-300 text-lg"
        >
          {loadingTexts[currentText]}
        </motion.p>

        {/* Star Wars Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <p className="text-sw-blue italic text-sm">
            "Que a Força esteja com você!"
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
