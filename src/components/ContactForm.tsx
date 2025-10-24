'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().min(2, 'Empresa deve ter pelo menos 2 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio para API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui você integraria com sua API real
      console.log('Dados do formulário:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: 'name' as const,
      label: 'Nome completo',
      type: 'text',
      icon: User,
      placeholder: 'Seu nome completo'
    },
    {
      name: 'email' as const,
      label: 'Email',
      type: 'email',
      icon: Mail,
      placeholder: 'seu@email.com'
    },
    {
      name: 'phone' as const,
      label: 'Telefone',
      type: 'tel',
      icon: Phone,
      placeholder: '(11) 99999-9999'
    },
    {
      name: 'company' as const,
      label: 'Empresa',
      type: 'text',
      icon: Building,
      placeholder: 'Nome da sua empresa'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-light to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar seu atendimento? Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  {formFields.map((field) => {
                    const Icon = field.icon;
                    return (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            {...register(field.name)}
                            type={field.type}
                            placeholder={field.placeholder}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-secondary focus:border-green-secondary transition-colors duration-200 ${
                              errors[field.name] 
                                ? 'border-red-500' 
                                : 'border-gray-300'
                            }`}
                          />
                        </div>
                        {errors[field.name] && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-sm text-red-600 flex items-center"
                          >
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors[field.name]?.message}
                          </motion.p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Conte-nos sobre suas necessidades de atendimento..."
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-secondary focus:border-green-secondary transition-colors duration-200 resize-none ${
                        errors.message 
                          ? 'border-red-500' 
                          : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message?.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="group min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="flex items-center justify-center text-green-700">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex items-center justify-center text-red-700">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Erro ao enviar mensagem. Tente novamente.
                    </div>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
