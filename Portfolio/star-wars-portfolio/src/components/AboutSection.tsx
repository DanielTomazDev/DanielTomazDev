import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-sw-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sw-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-sw-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Título da Seção */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              A JORNADA DE UM DESENVOLVEDOR
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Como todo herói, minha jornada começou com um chamado para a aventura...
            </p>
          </motion.div>

          {/* Resumo Inicial */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-sw-gray to-black p-8 rounded-xl mb-12 border border-sw-gold/20"
          >
            <div className="flex items-center mb-4">
              <Code className="text-sw-gold mr-3" size={24} />
              <h3 className="text-2xl font-bold text-sw-gold">O Despertar da Força</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Desenvolvedor Full Stack com expertise em <span className="text-sw-blue">Java</span>, 
              <span className="text-sw-blue"> JavaScript</span>, <span className="text-sw-blue">PHP</span> e 
              <span className="text-sw-blue"> Python</span>. Especializado em criar soluções digitais 
              que transformam ideias em realidade, desde bots inteligentes até sistemas corporativos complexos.
            </p>
          </motion.div>

          {/* Jornada do Herói */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Lado Esquerdo - A Jornada */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-sw-gold to-sw-blue"></div>
                
                {/* Passo 1 */}
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-8 h-8 bg-sw-gold rounded-full flex items-center justify-center text-black font-bold z-10 relative">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-sw-gold mb-2">O Chamado para a Aventura</h4>
                    <p className="text-gray-300">
                      Tudo começou com a curiosidade sobre como as coisas funcionam por trás das telas. 
                      O primeiro "Hello World" foi como descobrir a Força pela primeira vez.
                    </p>
                  </div>
                </div>

                {/* Passo 2 */}
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-8 h-8 bg-sw-blue rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-sw-blue mb-2">O Treinamento Jedi</h4>
                    <p className="text-gray-300">
                      Anos de estudo intensivo, dominando linguagens como Java, JavaScript, PHP e Python. 
                      Cada bug resolvido era uma lição, cada projeto concluído, uma vitória.
                    </p>
                  </div>
                </div>

                {/* Passo 3 */}
                <div className="flex items-start space-x-6">
                  <div className="w-8 h-8 bg-sw-red rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-red-400 mb-2">O Mestre Jedi</h4>
                    <p className="text-gray-300">
                      Hoje, uso minha experiência para ajudar outros a realizarem seus sonhos digitais. 
                      Cada cliente é uma nova missão, cada solução é um passo em direção a um futuro melhor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Missão e Valores */}
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-sw-blue/20 to-transparent p-6 rounded-xl border border-sw-blue/30"
              >
                <div className="flex items-center mb-4">
                  <Target className="text-sw-blue mr-3" size={24} />
                  <h3 className="text-xl font-bold text-sw-blue">Minha Missão</h3>
                </div>
                <p className="text-gray-300">
                  Transformar ideias em soluções digitais poderosas, usando tecnologia para 
                  resolver problemas reais e criar valor para pessoas e empresas.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-sw-gold/20 to-transparent p-6 rounded-xl border border-sw-gold/30"
              >
                <div className="flex items-center mb-4">
                  <Zap className="text-sw-gold mr-3" size={24} />
                  <h3 className="text-xl font-bold text-sw-gold">Minha Força</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong>Versatilidade:</strong> Domínio de múltiplas linguagens e frameworks</li>
                  <li>• <strong>Inovação:</strong> Sempre buscando soluções criativas e eficientes</li>
                  <li>• <strong>Compromisso:</strong> Dedicação total a cada projeto</li>
                  <li>• <strong>Evolução:</strong> Aprendizado contínuo e adaptação às novas tecnologias</li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-600/20 to-transparent p-6 rounded-xl border border-purple-600/30"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">O Código Jedi</h3>
                <blockquote className="text-gray-300 italic">
                  "Um desenvolvedor usa a Força para conhecimento e defesa, nunca para atacar. 
                  O código deve servir a outros, não ao ego. A paciência você deve ter, 
                  pois os bugs são o caminho para o lado sombrio."
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
