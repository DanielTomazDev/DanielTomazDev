import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-sw-gray py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sw-gold to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">DT</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text">Daniel Tomaz</h3>
            </div>
            <p className="text-gray-300 text-lg">Full Stack Developer</p>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-300 text-lg">
              <span>Feito com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="text-red-500" size={20} />
              </motion.div>
              <span>,</span>
              <Code className="text-sw-blue" size={20} />
              <span>e muito</span>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee className="text-sw-gold" size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <blockquote className="text-gray-300 italic text-lg max-w-2xl mx-auto">
              "O código é a minha Força. Cada linha escrita é um passo em direção a um futuro mais conectado e inteligente."
            </blockquote>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-sw-gold to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 text-sm"
          >
            <p>© {currentYear} Daniel Tomaz. Todos os direitos reservados.</p>
            <p className="mt-2">
              Que a <span className="text-sw-blue">Força</span> esteja com você! ⚡
            </p>
          </motion.div>

          {/* Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5 }}
            className="mt-8 text-xs text-gray-500"
          >
            <p>
              "Este não é o desenvolvedor que você está procurando..." 
              <br />
              <span className="text-gray-600">...ou talvez seja exatamente o que você precisa! 🚀</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-4 left-4 w-2 h-2 bg-sw-blue rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-8 right-8 w-1 h-1 bg-sw-gold rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-12 left-1/3 w-1 h-1 bg-white rounded-full"
      />
    </footer>
  );
};

export default Footer;
