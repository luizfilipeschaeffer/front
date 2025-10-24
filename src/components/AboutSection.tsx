'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Heart, 
  Target, 
  Users, 
  Award,
  ArrowRight,
  MessageCircle,
  Shield,
  Zap
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Missão',
      description: 'Simplificar o atendimento digital e transformar conversas em relacionamentos duradouros',
      color: 'from-green-primary to-green-secondary'
    },
    {
      icon: Target,
      title: 'Visão',
      description: 'Ser a plataforma de atendimento mais confiável e inovadora do Brasil',
      color: 'from-green-secondary to-green-dark'
    },
    {
      icon: Users,
      title: 'Valores',
      description: 'Transparência, inovação e foco no sucesso dos nossos clientes',
      color: 'from-green-accent to-green-primary'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Anos de experiência' },
    { number: '220+', label: 'Clientes atendidos' },
    { number: '2M+', label: 'Conversas gerenciadas' },
    { number: '99%', label: 'Satisfação dos clientes' }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre a LetsZap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A LetsZap nasceu para simplificar o atendimento digital. Nosso foco é ajudar empresas a transformar conversas em relacionamentos duradouros.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-secondary to-green-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nossa História
                </h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  A LetsZap nasceu da necessidade de simplificar o atendimento digital. 
                  Com mais de 15 anos de experiência no mercado, desenvolvemos uma plataforma 
                  que centraliza todos os canais de comunicação em um só lugar, permitindo que 
                  empresas de todos os tamanhos ofereçam um atendimento excepcional aos seus clientes.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossos Números
            </h3>
            <p className="text-gray-600">
              Resultados que comprovam nossa excelência
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-secondary mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-secondary to-green-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para fazer parte da nossa história?
            </h3>
            <p className="text-green-light mb-6 max-w-2xl mx-auto">
              Junte-se a mais de 220 empresas que já confiam na LetsZap para seu atendimento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-secondary hover:bg-gray-100">
                Fale com um consultor
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

export default AboutSection;
