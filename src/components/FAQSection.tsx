'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ChevronDown, BookOpen, ArrowRight } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona o plano gratuito?',
      answer: 'Nosso plano gratuito oferece 7 dias de teste completo com acesso a todas as funcionalidades. Não é necessário cartão de crédito e você pode cancelar a qualquer momento.'
    },
    {
      question: 'Posso usar mais de um número?',
      answer: 'Sim! Nossos planos permitem múltiplos números WhatsApp. O plano Individual inclui 1 número, o Básico 2 números, e os planos superiores incluem mais números conforme sua necessidade.'
    },
    {
      question: 'É possível integrar com CRM?',
      answer: 'Sim! Nossa plataforma oferece integração nativa com os principais CRMs do mercado, além de API personalizada para sistemas específicos da sua empresa.'
    },
    {
      question: 'Existe suporte técnico?',
      answer: 'Sim! Oferecemos suporte técnico completo. O plano Individual inclui suporte por email, enquanto os planos superiores incluem suporte prioritário e até 24/7 no plano Empresarial.'
    },
    {
      question: 'Como cancelar a assinatura?',
      answer: 'Você pode cancelar sua assinatura a qualquer momento através do painel administrativo ou entrando em contato com nosso suporte. Não há taxas de cancelamento ou fidelidade.'
    },
    {
      question: 'Os dados são seguros?',
      answer: 'Sim! Utilizamos criptografia de ponta a ponta e seguimos todas as normas de segurança e privacidade. Seus dados ficam protegidos em servidores seguros no Brasil.'
    },
    {
      question: 'Posso migrar de outro sistema?',
      answer: 'Sim! Nossa equipe oferece suporte completo para migração de dados de outras plataformas, garantindo que você não perca nenhuma informação importante.'
    },
    {
      question: 'Há limite de mensagens?',
      answer: 'Não! Todos os nossos planos incluem mensagens ilimitadas. Você pode enviar quantas mensagens precisar sem se preocupar com limites ou taxas extras.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossa plataforma
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ainda tem dúvidas?
            </h3>
            <p className="text-green-light mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer qualquer questão que você tenha
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-secondary hover:bg-gray-100">
                Falar com consultor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-secondary">
                Acesse o Tutorial Completo
                <BookOpen className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQSection;
