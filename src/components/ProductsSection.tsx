'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  MessageCircle, 
  Smartphone, 
  Workflow, 
  BarChart3, 
  Bot, 
  ShoppingCart, 
  Mic, 
  Brain,
  ArrowRight
} from 'lucide-react';

const ProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 'assist',
      name: 'Assist',
      icon: MessageCircle,
      description: 'Empodere sua equipe e mantenha o controle da operação para conquistar o sucesso do cliente.',
      features: [
        'Gestão centralizada de conversas',
        'IA para respostas automáticas',
        'Métricas em tempo real',
        'Integração com CRM'
      ],
      color: 'from-green-primary to-green-secondary'
    },
    {
      id: 'channels',
      name: 'Canais',
      icon: Smartphone,
      description: 'Otimize a experiência do cliente e simplifique a gestão de conversas em uma única tela.',
      features: [
        'WhatsApp Business',
        'Facebook Messenger',
        'Instagram Direct',
        'Telegram e SMS'
      ],
      color: 'from-green-secondary to-green-dark'
    },
    {
      id: 'workflow',
      name: 'Workflow',
      icon: Workflow,
      description: 'Ganhe agilidade no atendimento conectando setores e parceiros externos.',
      features: [
        'Automação de processos',
        'Encaminhamento inteligente',
        'Escalação automática',
        'Integração com sistemas'
      ],
      color: 'from-green-accent to-green-primary'
    },
    {
      id: 'insights',
      name: 'Data & Insights',
      icon: BarChart3,
      description: 'Avalie o desempenho da sua equipe com precisão, crie relatórios personalizados e tome decisões estratégicas fundamentadas em dados.',
      features: [
        'Dashboard em tempo real',
        'Relatórios personalizados',
        'Análise de sentimentos',
        'KPIs automatizados'
      ],
      color: 'from-green-dark to-green-secondary'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-green-light to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ofereça um atendimento extraordinário
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Personalize conversas e conquiste seus clientes com nossa plataforma completa de atendimento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Tabs */}
          <div className="space-y-4">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setActiveProduct(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeProduct === index
                        ? 'bg-white shadow-lg border-2 border-green-secondary'
                        : 'bg-white/50 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${product.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {product.description}
                        </p>
                      </div>
                      <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${
                        activeProduct === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Product Details */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${products[activeProduct].color}`}>
                        {React.createElement(products[activeProduct].icon, { 
                          className: "w-8 h-8 text-white" 
                        })}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {products[activeProduct].name}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-8 text-lg">
                      {products[activeProduct].description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-gray-900">Principais funcionalidades:</h4>
                      <ul className="space-y-2">
                        {products[activeProduct].features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-secondary rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1">
                        Saiba mais sobre {products[activeProduct].name}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
