'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Play, ArrowRight } from 'lucide-react';

const DemoSection: React.FC = () => {
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
            Veja nossa plataforma em ação
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode transformar seu atendimento em apenas alguns minutos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Card className="shadow-2xl">
            <CardContent className="p-0">
              {/* Video Placeholder */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-xl overflow-hidden">
                <div className="aspect-video flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-green-secondary rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Demonstração da Plataforma
                    </h3>
                    <p className="text-gray-300">
                      Clique para assistir ao vídeo demonstrativo
                    </p>
                  </motion.div>
                </div>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <Play className="w-6 h-6 text-green-secondary ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Veja como funciona na prática
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Neste vídeo você verá como nossa plataforma funciona na prática, 
                      desde o login até o atendimento completo de um cliente.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-secondary rounded-full mr-3"></div>
                        Interface intuitiva e fácil de usar
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-secondary rounded-full mr-3"></div>
                        Gestão centralizada de conversas
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-secondary rounded-full mr-3"></div>
                        Relatórios em tempo real
                      </li>
                      <li className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-secondary rounded-full mr-3"></div>
                        Automação inteligente
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-light to-green-accent rounded-2xl p-8 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Tempo de demonstração
                      </h4>
                      <p className="text-3xl font-bold text-green-secondary">3 min</p>
                    </div>
                    
                    <Button size="lg" className="w-full group">
                      Comece agora grátis
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default DemoSection;
