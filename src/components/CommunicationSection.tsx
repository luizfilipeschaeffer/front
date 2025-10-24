'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Mic, Image, Video, Users, Target, BarChart3 } from 'lucide-react';

const CommunicationSection: React.FC = () => {
  const communicationTypes = [
    {
      icon: Mic,
      title: 'Áudios',
      description: 'Envie e receba áudios dos seus clientes para facilitar a comunicação'
    },
    {
      icon: Image,
      title: 'Imagens',
      description: 'Compartilhe imagens e documentos em tempo real'
    },
    {
      icon: Video,
      title: 'Vídeos',
      description: 'Comunicação visual para melhor experiência'
    }
  ];

  const pillars = [
    {
      icon: Users,
      title: 'Conquiste seus clientes',
      description: 'Personalize respostas com base no histórico de interação do cliente e responda mais rápido.',
      color: 'from-green-primary to-green-secondary'
    },
    {
      icon: Target,
      title: 'Conquiste seu time',
      description: 'Automatize comunicações com ajuda de IA e libere seu time das tarefas manuais e repetitivas.',
      color: 'from-green-secondary to-green-dark'
    },
    {
      icon: BarChart3,
      title: 'Conquiste o poder da decisão',
      description: 'Tenha dados do início ao fim do atendimento e saiba onde alocar esforço e recursos.',
      color: 'from-green-accent to-green-primary'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Communication Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Como vamos conversar hoje?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Envie e receba áudios, imagens e vídeos dos seus clientes para facilitar a comunicação.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {communicationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover className="h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {type.title}
                      </h3>
                      <p className="text-gray-600">
                        {type.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Atendimento melhor e mais rápido
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CommunicationSection;
