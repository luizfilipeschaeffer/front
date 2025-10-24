'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  UserCheck, 
  Calendar, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const SupportSection: React.FC = () => {
  const supportFeatures = [
    {
      icon: UserCheck,
      title: 'Customer Success Manager dedicado',
      description: 'Te ajuda a traçar suas metas e objetivos de crescimento'
    },
    {
      icon: Calendar,
      title: 'Visitas rotineiras',
      description: 'Acompanhamento de resultados e otimização contínua'
    },
    {
      icon: Settings,
      title: 'Equipe de tecnologia dedicada',
      description: 'Suporte técnico especializado para sua operação'
    }
  ];

  const benefits = [
    'Implementação completa em até 30 dias',
    'Treinamento da equipe incluído',
    'Suporte 24/7 nos primeiros 90 dias',
    'Relatórios de performance mensais',
    'Atualizações automáticas da plataforma',
    'Integração com seus sistemas existentes'
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
            Só aqui você tem suporte em todas as etapas!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tenha todo o apoio que precisa antes, durante e após a implementação do nosso sistema.
          </p>
        </motion.div>

        {/* Support Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportFeatures.map((feature, index) => {
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
                    <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
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

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                O que você pode conquistar com a LetsZap?
              </h3>
              <p className="text-gray-600 mb-8">
                Você quer melhorar sua interação com o cliente e gerar mais valor para sua marca? 
                Deixe seus dados. Um dos nossos especialistas entrará em contato em breve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Fale com especialista
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Peça uma demonstração
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Benefícios incluídos:
              </h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-secondary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "A LetsZap transformou completamente nosso atendimento. Aumentamos nossa satisfação 
                do cliente em 40% e reduzimos o tempo de resposta em 60%. Recomendo para qualquer empresa 
                que queira se destacar no atendimento."
              </blockquote>
              <div className="text-sm text-gray-500">
                <strong>Maria Silva</strong> - Diretora de Atendimento, TechCorp
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportSection;
