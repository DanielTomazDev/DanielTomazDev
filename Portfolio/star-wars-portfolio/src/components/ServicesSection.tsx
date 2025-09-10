import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Globe, 
  Building, 
  Zap, 
  MessageCircle, 
  ShoppingCart, 
  Database, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'bots',
      title: 'Bots Inteligentes',
      icon: <Bot size={48} />,
      description: 'Automatização inteligente para Discord, WhatsApp e IA',
      features: [
        'Discord → automação de comunidades, moderação, música',
        'WhatsApp → atendentes virtuais, integrações com CRM',
        'IA → suporte e vendas inteligentes',
        'Integração com APIs externas',
        'Respostas automatizadas personalizadas'
      ],
      color: '#00BFFF',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'ecommerce',
      title: 'Sites e E-commerces',
      icon: <Globe size={48} />,
      description: 'Presença digital profissional que funciona 24/7',
      features: [
        'Landing Pages profissionais',
        'Lojas virtuais completas (24/7)',
        'Design responsivo e otimizado',
        'SEO e otimização para conversão',
        'Integração com meios de pagamento'
      ],
      color: '#FFD700',
      gradient: 'from-yellow-600 to-amber-600'
    },
    {
      id: 'systems',
      title: 'Sistemas Corporativos',
      icon: <Building size={48} />,
      description: 'CRMs e ERPs sob medida para sua empresa',
      features: [
        'CRM → gestão de contatos, leads e clientes',
        'ERP → estoque, vendas, finanças',
        'Soluções sob medida para empresas',
        'Relatórios e dashboards inteligentes',
        'Controle de acesso e permissões'
      ],
      color: '#FF4500',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'integrations',
      title: 'Integrações de APIs',
      icon: <Zap size={48} />,
      description: 'Conectando sistemas e automatizando processos',
      features: [
        'Conectar diferentes plataformas e sistemas',
        'Automatizar processos entre serviços',
        'Centralização de dados em um só lugar',
        'Sincronização em tempo real',
        'Webhooks e notificações automáticas'
      ],
      color: '#9932CC',
      gradient: 'from-purple-600 to-indigo-600'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-sw-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-sw-blue rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-sw-gold rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30" />
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
            SERVIÇOS CONTRATÁVEIS
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Soluções elaboradas e acessíveis para freelancers, empreendedores e empresas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setSelectedService(service.id)}
              onHoverEnd={() => setSelectedService(null)}
              className="relative group cursor-pointer"
            >
              <div className={`relative bg-gradient-to-br ${service.gradient} p-1 rounded-xl`}>
                <div className="bg-gradient-to-br from-sw-gray to-black p-8 rounded-xl h-full">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div 
                      className="p-3 rounded-lg mr-4 transition-all duration-300"
                      style={{ 
                        backgroundColor: selectedService === service.id ? service.color + '20' : 'transparent',
                        color: service.color 
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle 
                          size={16} 
                          className="mt-1 flex-shrink-0"
                          style={{ color: service.color }}
                        />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center space-x-2 group"
                    style={{ 
                      backgroundColor: service.color + '20',
                      border: `2px solid ${service.color}`,
                      color: service.color
                    }}
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`
                    }}
                  />

                  {/* Lightsaber Effect */}
                  {selectedService === service.id && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                      style={{ backgroundColor: service.color }}
                    />
                  )}
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={selectedService === service.id ? { 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {service.id === 'bots' && <MessageCircle size={24} style={{ color: service.color }} />}
                {service.id === 'ecommerce' && <ShoppingCart size={24} style={{ color: service.color }} />}
                {service.id === 'systems' && <Database size={24} style={{ color: service.color }} />}
                {service.id === 'integrations' && <Settings size={24} style={{ color: service.color }} />}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
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
                Pronto para transformar sua ideia em realidade?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-sw-gold to-yellow-600 text-black font-bold rounded-lg text-lg hover:from-yellow-600 hover:to-sw-gold transition-all duration-300"
              >
                Vamos Conversar!
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
