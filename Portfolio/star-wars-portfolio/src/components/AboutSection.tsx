import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-sw-dark to-black relative overflow-hidden min-h-screen flex items-center">
      {/* Galaxy Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Star Wars Style Poster Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center relative"
          >
            {/* Main Title - Star Wars Style */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold gradient-text mb-8"
              style={{ fontFamily: "'Orbitron', monospace" }}
            >
              DANIEL TOMAZ
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-2xl md:text-3xl text-sw-gold mb-12 tracking-wider"
            >
              FULL STACK DEVELOPER
            </motion.h2>

            {/* Central Image/Icon Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative mb-12"
            >
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-sw-gold via-sw-blue to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
              </div>
            </div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-sw-gold rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-sw-blue rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </motion.div>
              </motion.div>

            {/* Story Text - Star Wars Crawl Style */}
              <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-left text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
                <p>
                  <span className="text-sw-gold font-bold">Há muito tempo,</span> em uma galáxia não tão distante, 
                  um jovem descobriu o poder do código...
                </p>
                
                <p>
                  <span className="text-sw-blue font-bold">DANIEL TOMAZ</span> iniciou sua jornada como desenvolvedor 
                  movido pela curiosidade e pelo desejo de criar soluções que realmente importam. 
                  Especializado em <span className="text-sw-gold">Java</span>, <span className="text-sw-gold">JavaScript</span>, 
                  <span className="text-sw-gold"> PHP</span> e <span className="text-sw-gold">Python</span>, 
                  ele domina as artes ancestrais do desenvolvimento Full Stack.
                </p>

                <p>
                  Durante <span className="text-sw-blue font-bold">2 anos</span> de experiência, 
                  enfrentou os desafios mais complexos: desde a criação de <span className="text-sw-gold">bots inteligentes</span> 
                  que automatizam processos, até <span className="text-sw-gold">sistemas corporativos</span> que 
                  transformam a forma como empresas operam.
                </p>

                <p>
                  Hoje, como um verdadeiro <span className="text-sw-blue font-bold">Mestre Jedi</span> do código, 
                  Daniel usa sua experiência para ajudar outros a realizarem seus sonhos digitais, 
                  transformando ideias em <span className="text-sw-gold">soluções poderosas</span> 
                  que trabalham incansavelmente para seus usuários.
                </p>

                <div className="text-center mt-12">
                  <p className="text-2xl text-sw-gold font-bold italic">
                    "O código é a minha Força, e com ela, construo o futuro."
                  </p>
                </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
