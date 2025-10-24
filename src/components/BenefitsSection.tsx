'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { 
  Users, 
  BarChart3, 
  MessageSquare, 
  Zap, 
  Shield,
  CheckCircle
} from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Atendimento humanizado',
      description: 'Mantenha o toque humano em cada conversa com seus clientes',
      color: 'from-green-primary to-green-secondary'
    },
    {
      icon: BarChart3,
      title: 'Controle total de mensagens e filas',
      description: 'Gerencie todas as conversas em um painel centralizado',
      color: 'from-green-secondary to-green-dark'
    },
    {
      icon: MessageSquare,
      title: 'Relatórios e métricas em tempo real',
      description: 'Acompanhe o desempenho da sua equipe com dados precisos',
      color: 'from-green-accent to-green-primary'
    },
    {
      icon: Users,
      title: 'Conexão multiagente',
      description: 'Distribua conversas entre sua equipe de forma inteligente',
      color: 'from-green-dark to-green-secondary'
    },
    {
      icon: Zap,
      title: 'Automação de respostas',
      description: 'Responda automaticamente às perguntas mais comuns',
      color: 'from-green-primary to-green-accent'
    },
    {
      icon: Shield,
      title: 'Segurança e confiabilidade',
      description: 'Proteja os dados dos seus clientes com criptografia avançada',
      color: 'from-green-secondary to-green-primary'
    }
  ];

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
            Pronto para transformar o seu atendimento?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode revolucionar a forma como você atende seus clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-secondary to-green-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Comece a transformar seu atendimento hoje!
            </h3>
            <p className="text-green-light mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já confiam em nossa plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Começar agora!
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-secondary transition-colors">
                Testar gratuitamente
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
