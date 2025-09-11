import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Github, 
  Instagram,
  Send,
  User,
  Phone
} from 'lucide-react';

interface ContactMethod {
  name: string;
  icon: React.ReactElement;
  url: string;
  color: string;
  description: string;
}

const ContactSection: React.FC = () => {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const contactMethods: ContactMethod[] = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={32} />,
      url: 'https://linkedin.com/in/daniel-tomaz',
      color: '#0077B5',
      description: 'Conecte-se profissionalmente'
    },
    {
      name: 'GitHub',
      icon: <Github size={32} />,
      url: 'https://github.com/DanielTomazDev',
      color: '#333333',
      description: 'Explore meus repositórios'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={32} />,
      url: 'https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.',
      color: '#25D366',
      description: 'Conversa rápida e direta'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={32} />,
      url: 'https://instagram.com/danieltomaz.dev',
      color: '#E4405F',
      description: 'Acompanhe minha jornada'
    },
    {
      name: 'Email',
      icon: <Mail size={32} />,
      url: 'mailto:daniel@danieltomaz.dev',
      color: '#FFD700',
      description: 'Contato formal e detalhado'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const lightsaberVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sw-gray to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6" style={{ fontFamily: "'Orbitron', monospace" }}>
            CONTATO
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sw-gold to-sw-blue mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para iniciar uma nova missão juntos? A Força nos conectará!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.name}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredContact(method.name)}
                onHoverEnd={() => setHoveredContact(null)}
                className="group relative block"
              >
                <div className="relative bg-gradient-to-br from-sw-gray to-black p-8 rounded-xl border-2 transition-all duration-300 hover:border-opacity-100 transform"
                     style={{ 
                       borderColor: hoveredContact === method.name ? method.color : 'rgba(255, 255, 255, 0.1)',
                       boxShadow: hoveredContact === method.name ? `0 0 30px ${method.color}40` : 'none'
                     }}>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div 
                      className="p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: method.color + '20',
                        color: hoveredContact === method.name ? method.color : '#ffffff'
                      }}
                    >
                      {method.icon}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-center mb-3 transition-colors duration-300"
                      style={{ color: hoveredContact === method.name ? method.color : '#ffffff' }}>
                    {method.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-center text-sm">
                    {method.description}
                  </p>

                  {/* Lightsaber Effect */}
                  {hoveredContact === method.name && (
                    <motion.div
                      variants={lightsaberVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                      style={{ backgroundColor: method.color }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${method.color} 0%, transparent 70%)`
                    }}
                  />

                  {/* Floating Particles */}
                  {hoveredContact === method.name && (
                    <div className="absolute -top-2 -right-2">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-4 h-4 rounded-full"
                        style={{ 
                          backgroundColor: method.color,
                          boxShadow: `0 0 10px ${method.color}`
                        }}
                      />
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-sw-gray to-black p-8 rounded-xl border border-sw-gold/30">
              <h3 className="text-2xl font-bold text-sw-gold text-center mb-8">
                Envie uma Mensagem Direta
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-sw-gold focus:outline-none focus:ring-2 focus:ring-sw-gold/20 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      placeholder="Seu Email"
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-sw-gold focus:outline-none focus:ring-2 focus:ring-sw-gold/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-4 text-gray-400" size={20} />
                  <input
                    type="tel"
                    placeholder="Seu Telefone (opcional)"
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-sw-gold focus:outline-none focus:ring-2 focus:ring-sw-gold/20 transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-gray-400" size={20} />
                  <textarea
                    rows={5}
                    placeholder="Conte-me sobre seu projeto..."
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-sw-gold focus:outline-none focus:ring-2 focus:ring-sw-gold/20 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-sw-gold to-yellow-600 text-black font-bold rounded-lg text-lg hover:from-yellow-600 hover:to-sw-gold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar Mensagem</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300 text-lg mb-4">
                "Que a <span className="text-sw-blue font-bold">Força</span> esteja com nossos projetos!"
              </p>
              <p className="text-sw-gold text-sm">
                Respondo todas as mensagens em até 24 horas ⚡
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
