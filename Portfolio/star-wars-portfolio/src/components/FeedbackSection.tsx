import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Feedback {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  project: string;
}

const FeedbackSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbacks: Feedback[] = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'CEO',
      company: 'TechStart',
      avatar: '👩‍💼',
      rating: 5,
      comment: 'O Daniel transformou nossa ideia em uma solução completa. O bot do WhatsApp que ele criou aumentou nossas vendas em 40%. Profissional excepcional!',
      project: 'Bot WhatsApp + CRM'
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Diretor',
      company: 'E-commerce Plus',
      avatar: '👨‍💻',
      rating: 5,
      comment: 'Sistema de gestão sob medida que revolucionou nossa operação. Interface intuitiva e funcionalidades que realmente fazem a diferença.',
      project: 'Sistema ERP Completo'
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Fundadora',
      company: 'Digital Agency',
      avatar: '👩‍🎨',
      rating: 5,
      comment: 'Landing page que converte como nunca! Design moderno e otimização perfeita. Nossos leads triplicaram em 2 meses.',
      project: 'Landing Page + SEO'
    },
    {
      id: 4,
      name: 'Carlos Lima',
      role: 'Gerente',
      company: 'Logistics Corp',
      avatar: '👨‍🔧',
      rating: 5,
      comment: 'Integração perfeita entre nossos sistemas. Automatizou processos que antes tomavam horas. Economia de tempo e dinheiro incrível!',
      project: 'Integração de APIs'
    },
    {
      id: 5,
      name: 'Fernanda Rocha',
      role: 'Empreendedora',
      company: 'Boutique Online',
      avatar: '👩‍🛍️',
      rating: 5,
      comment: 'Loja virtual completa e funcional. Pagamentos integrados, estoque automatizado. Meus clientes adoram a experiência!',
      project: 'E-commerce Completo'
    }
  ];

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const currentFeedback = feedbacks[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-sw-gray relative overflow-hidden">
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
            FEEDBACK
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sw-gold to-sw-blue mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O que meus clientes dizem sobre o trabalho realizado
          </p>
        </motion.div>

        {/* Feedback Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Feedback Card */}
            <div className="bg-gradient-to-br from-sw-gray to-black border border-sw-gold/20 rounded-xl p-8 hover:border-sw-gold/50 transition-all duration-300">
              {/* Quote Icon */}
              <div className="text-center mb-6">
                <Quote className="w-12 h-12 text-sw-gold mx-auto" />
              </div>

              {/* Feedback Content */}
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-6">
                  "{currentFeedback.comment}"
                </p>
                
                {/* Project Badge */}
                <div className="inline-block bg-gradient-to-r from-sw-blue to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  {currentFeedback.project}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-6">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-sw-gold to-yellow-600 rounded-full flex items-center justify-center text-2xl">
                  {currentFeedback.avatar}
                </div>

                {/* Client Details */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {currentFeedback.name}
                  </h3>
                  <p className="text-sw-gold font-semibold mb-1">
                    {currentFeedback.role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {currentFeedback.company}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < currentFeedback.rating ? 'text-sw-gold fill-current' : 'text-gray-600'}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevFeedback}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-sw-gold/20 hover:bg-sw-gold/40 text-sw-gold rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextFeedback}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-sw-gold/20 hover:bg-sw-gold/40 text-sw-gold rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-sw-gold scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-sw-gold mb-2">50+</div>
            <div className="text-gray-300">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sw-blue mb-2">100%</div>
            <div className="text-gray-300">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
            <div className="text-gray-300">Suporte Disponível</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;
