'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      role: 'Diretora de Atendimento',
      company: 'TechCorp',
      content: 'A LetsZap transformou completamente nosso atendimento. Aumentamos nossa satisfação do cliente em 40% e reduzimos o tempo de resposta em 60%. Recomendo para qualquer empresa que queira se destacar no atendimento.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Roberto Mendes',
      role: 'CEO',
      company: 'E-commerce Plus',
      content: 'A integração foi muito simples e nossa equipe se adaptou rapidamente. O suporte é excepcional e a plataforma é muito intuitiva. Nossos clientes notaram a diferença imediatamente.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'Marina Oliveira',
      role: 'Gerente de Vendas',
      company: 'Fashion Store',
      content: 'Conseguimos centralizar todos os nossos canais de atendimento em uma única plataforma. Isso nos permitiu ser muito mais eficientes e oferecer uma experiência consistente para nossos clientes.',
      rating: 5,
      avatar: 'MO'
    },
    {
      name: 'Carlos Eduardo',
      role: 'Diretor Comercial',
      company: 'ServicePro',
      content: 'A IA da LetsZap nos ajuda a responder mais rápido e com mais precisão. Nossa equipe pode focar em casos mais complexos enquanto a plataforma resolve as dúvidas mais comuns automaticamente.',
      rating: 5,
      avatar: 'CE'
    },
    {
      name: 'Juliana Santos',
      role: 'Coordenadora de SAC',
      company: 'RetailMax',
      content: 'Os relatórios e métricas são fantásticos. Conseguimos identificar exatamente onde melhorar nosso atendimento e medir o impacto das mudanças. A plataforma nos deu visibilidade total da operação.',
      rating: 5,
      avatar: 'JS'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Depoimentos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre a LetsZap
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="p-8 md:p-12">
              <CardContent className="text-center">
                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-green rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-green-secondary hover:text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial
                      ? 'bg-green-secondary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-green-secondary hover:text-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auto-play indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            Depoimentos mudam automaticamente a cada 5 segundos
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
