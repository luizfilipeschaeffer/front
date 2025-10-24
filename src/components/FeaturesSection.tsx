'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { 
  Users, 
  Send, 
  Bot, 
  Calendar, 
  Code, 
  Tag, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  History, 
  UserCheck, 
  Workflow
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Multiatendimento',
      description: 'Gerencie múltiplas conversas simultaneamente com eficiência',
      color: 'from-green-primary to-green-secondary'
    },
    {
      icon: Send,
      title: 'Envio em Massa',
      description: 'Envie mensagens para milhares de contatos de uma vez',
      color: 'from-green-secondary to-green-dark'
    },
    {
      icon: Bot,
      title: 'Chatbot',
      description: 'Automatize respostas com inteligência artificial',
      color: 'from-green-accent to-green-primary'
    },
    {
      icon: Calendar,
      title: 'Agendamento',
      description: 'Agende mensagens e lembretes automaticamente',
      color: 'from-green-dark to-green-secondary'
    },
    {
      icon: Code,
      title: 'Integração com API',
      description: 'Conecte com seus sistemas existentes via API',
      color: 'from-green-primary to-green-accent'
    },
    {
      icon: Tag,
      title: 'Etiquetas e Transcrições',
      description: 'Organize conversas com tags e transcrições automáticas',
      color: 'from-green-secondary to-green-primary'
    },
    {
      icon: Users,
      title: 'CRM integrado',
      description: 'Gerencie seu relacionamento com clientes em um só lugar',
      color: 'from-green-accent to-green-dark'
    },
    {
      icon: BarChart3,
      title: 'Relatórios e Métricas',
      description: 'Acompanhe performance com relatórios detalhados',
      color: 'from-green-dark to-green-accent'
    },
    {
      icon: MessageSquare,
      title: 'Auto Resposta',
      description: 'Configure respostas automáticas para situações específicas',
      color: 'from-green-primary to-green-secondary'
    },
    {
      icon: History,
      title: 'Histórico Completo',
      description: 'Mantenha registro de todas as conversas e interações',
      color: 'from-green-secondary to-green-dark'
    },
    {
      icon: UserCheck,
      title: 'Atribuição de Conversas',
      description: 'Distribua conversas entre agentes de forma inteligente',
      color: 'from-green-accent to-green-primary'
    },
    {
      icon: Workflow,
      title: 'Automação via Fluxos',
      description: 'Crie fluxos personalizados para automatizar processos',
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
            Funcionalidades Principais
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para transformar seu atendimento em uma máquina de vendas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
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
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
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
              Pronto para começar?
            </h3>
            <p className="text-green-light mb-6 max-w-2xl mx-auto">
              Experimente todas essas funcionalidades gratuitamente por 7 dias
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

export default FeaturesSection;
