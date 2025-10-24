'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MessageCircle, ArrowRight, Play } from 'lucide-react';
import ClientOnly from './ClientOnly';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Toda sua equipe em um único WhatsApp.",
    "Centralize e melhore o desempenho do seu atendimento.",
    "Transforme conversas em relacionamentos duradouros."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-light to-white py-8 sm:py-12 lg:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-accent rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <ClientOnly fallback={
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-normal break-words hyphens-auto mb-6">
                {heroTexts[0]}
              </h1>
            }>
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-normal break-words hyphens-auto">
                  {heroTexts[currentText]}
                </h1>
              </motion.div>
            </ClientOnly>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Centralize e melhore o desempenho do seu atendimento com nossa plataforma completa de gestão multicanal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group">
                Começar agora!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Testar gratuitamente
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-secondary">+2M</div>
                <div className="text-xs sm:text-sm text-gray-600">conversas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-secondary">+15</div>
                <div className="text-xs sm:text-sm text-gray-600">anos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-secondary">+220</div>
                <div className="text-xs sm:text-sm text-gray-600">clientes</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Chat Interface Mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-sm sm:max-w-md mx-auto">
              {/* Chat Header */}
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-gradient-green rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">LetsZap</div>
                  <div className="text-sm text-green-secondary">Online</div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="bg-green-accent rounded-lg p-3 max-w-xs"
                >
                  <p className="text-sm text-gray-800">Boa tarde, Ana!</p>
                  <p className="text-sm text-gray-800">Gostaria de alguma ajuda com a LetsZap?</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto"
                >
                  <p className="text-sm text-gray-800">Quero contratar o serviço LetsZap</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="bg-green-accent rounded-lg p-3 max-w-xs"
                >
                  <p className="text-sm text-gray-800">Perfeito! Vou te ajudar com isso.</p>
                  <p className="text-sm text-gray-800">Qual é o tamanho da sua empresa?</p>
                </motion.div>
              </div>

              {/* Typing Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="mt-4 flex items-center space-x-2"
              >
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-secondary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-green-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-gray-500">Digitando...</span>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-green-primary rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-secondary rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
