'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const plans = [
    {
      name: 'Individual',
      price: { monthly: 38.80, annual: 388.00 },
      description: 'Perfeito para profissionais autônomos',
      features: [
        '1 usuário',
        '1 número WhatsApp',
        'Funcionalidades básicas',
        'Suporte por email',
        'Relatórios básicos'
      ],
      popular: false,
      color: 'from-gray-100 to-gray-200'
    },
    {
      name: 'Básico',
      price: { monthly: 77.80, annual: 778.00 },
      description: 'Ideal para pequenas empresas',
      features: [
        '3 usuários',
        '2 números WhatsApp',
        'Acesso a relatórios',
        'Chatbot básico',
        'Suporte prioritário',
        'Integração com CRM'
      ],
      popular: false,
      color: 'from-green-100 to-green-200'
    },
    {
      name: 'Avançado',
      price: { monthly: 129.80, annual: 1298.00 },
      description: 'Para empresas em crescimento',
      features: [
        '5 usuários',
        'Automação completa',
        'Integrações avançadas',
        'API personalizada',
        'Suporte 24/7',
        'Relatórios avançados',
        'Chatbot inteligente'
      ],
      popular: true,
      color: 'from-green-secondary to-green-dark'
    },
    {
      name: 'Empresarial',
      price: { monthly: 233.80, annual: 2338.00 },
      description: 'Solução completa para grandes empresas',
      features: [
        '10+ usuários',
        'Suporte prioritário',
        'API customizada',
        'Treinamento dedicado',
        'Consultoria estratégica',
        'SLA garantido',
        'Integração personalizada'
      ],
      popular: false,
      color: 'from-green-dark to-green-secondary'
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
            Planos e Preços
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para sua empresa e comece a transformar seu atendimento hoje
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-green-secondary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Economize 20%
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-green-secondary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'ring-2 ring-green-secondary shadow-xl' : ''}`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        R$ {isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600">
                        /{isAnnual ? 'ano' : 'mês'}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 font-medium">
                        Economize R$ {(plan.price.monthly * 12) - plan.price.annual}/ano
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-green-secondary hover:bg-green-dark' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      {plan.name === 'Empresarial' ? 'Falar com consultor' : 'Assinar agora'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      Testar gratuitamente
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
              Ainda tem dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-green-light mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a encontrar a solução ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-secondary hover:bg-gray-100">
                Falar com consultor
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

export default PricingSection;
