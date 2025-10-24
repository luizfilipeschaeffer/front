'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  DollarSign, 
  TrendingUp, 
  Smartphone, 
  Headphones, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: 'Redução de custos operacionais',
      description: 'Elimine a necessidade de múltiplas ferramentas e licenças caras',
      color: 'from-green-primary to-green-secondary'
    },
    {
      icon: TrendingUp,
      title: 'Aumento de produtividade',
      description: 'Sua equipe será mais eficiente com ferramentas centralizadas',
      color: 'from-green-secondary to-green-dark'
    },
    {
      icon: Smartphone,
      title: 'Centralização de múltiplos canais',
      description: 'WhatsApp, Telegram, Instagram - tudo em um só lugar',
      color: 'from-green-accent to-green-primary'
    },
    {
      icon: Headphones,
      title: 'Suporte técnico dedicado',
      description: 'Nossa equipe está sempre pronta para ajudar você',
      color: 'from-green-dark to-green-secondary'
    },
    {
      icon: Shield,
      title: 'Garantia de satisfação',
      description: 'Se não ficar satisfeito, devolvemos seu dinheiro',
      color: 'from-green-primary to-green-accent'
    }
  ];

  const stats = [
    { number: '40%', label: 'Redução de custos' },
    { number: '60%', label: 'Aumento de produtividade' },
    { number: '85%', label: 'Satisfação dos clientes' },
    { number: '24/7', label: 'Suporte disponível' }
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
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra os motivos que fazem milhares de empresas confiarem em nossa solução
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Resultados comprovados
            </h3>
            <p className="text-gray-600">
              Veja os números que nossos clientes alcançaram
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
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
              Pronto para fazer parte desses resultados?
            </h3>
            <p className="text-green-light mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já transformaram seu atendimento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-secondary hover:bg-gray-100">
                Começar agora!
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

export default WhyChooseSection;
