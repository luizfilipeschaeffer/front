'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Shield, 
  Clock, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  const guaranteeFeatures = [
    {
      icon: Clock,
      title: '7 dias de garantia',
      description: 'Teste completo sem compromisso',
      color: 'from-green-primary to-green-secondary'
    },
    {
      icon: DollarSign,
      title: 'Risco Zero',
      description: 'Devolução integral do valor pago',
      color: 'from-green-secondary to-green-dark'
    },
    {
      icon: Shield,
      title: 'Sem burocracia',
      description: 'Cancelamento simples e direto',
      color: 'from-green-accent to-green-primary'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'TechCorp',
      rating: 5,
      text: 'A garantia me deu confiança para testar. Resultado: transformou nosso atendimento!'
    },
    {
      name: 'João Santos',
      company: 'E-commerce Plus',
      rating: 5,
      text: 'Sem medo de arriscar. A plataforma superou todas as expectativas.'
    },
    {
      name: 'Ana Costa',
      company: 'ServicePro',
      rating: 5,
      text: 'A garantia de 7 dias foi fundamental para nossa decisão. Valeu cada centavo!'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-light to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Garantia de Satisfação
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Garantia "Risco Zero"
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Se em até 7 dias você não estiver satisfeito, devolvemos seu dinheiro sem burocracia.
          </p>
        </motion.div>

        {/* Guarantee Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guaranteeFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Main Guarantee Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-2xl border-2 border-green-secondary">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-secondary to-green-dark rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Garantia de 7 Dias
                </h3>
                
                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Se em até 7 dias você não estiver satisfeito, devolvemos seu dinheiro sem burocracia.</strong>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      O que está incluído:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-secondary mr-3 flex-shrink-0" />
                        Acesso completo à plataforma
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-secondary mr-3 flex-shrink-0" />
                        Suporte técnico dedicado
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-secondary mr-3 flex-shrink-0" />
                        Treinamento da equipe
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-secondary mr-3 flex-shrink-0" />
                        Migração de dados
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Como funciona:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 bg-green-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                        Teste a plataforma por 7 dias
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 bg-green-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                        Se não gostar, solicite reembolso
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-6 h-6 bg-green-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                        Receba seu dinheiro de volta
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            O que nossos clientes dizem sobre a garantia
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-secondary to-green-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar sem riscos?
            </h3>
            <p className="text-green-light mb-6 max-w-2xl mx-auto">
              Teste nossa plataforma por 7 dias com garantia total de satisfação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-secondary hover:bg-gray-100">
                Comece agora!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-secondary">
                Testar gratuitamente
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default GuaranteeSection;
