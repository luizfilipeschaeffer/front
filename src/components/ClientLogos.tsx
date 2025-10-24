'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const ClientLogos: React.FC = () => {
  const clients = [
    'Angeloni', 'Bluefit', 'Carrefour', 'wi.co', 'Ikesaki', 'Le creuset',
    'Lindt', 'Karsten', 'Malwee', 'Natura', 'Magazine Luiza', 'Americanas',
    'Submarino', 'Mercado Livre', 'Amazon', 'Shopee'
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Equipes de atendimento de mais de 220 marcas já confiam na LetsZap
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            animate={{ x: [0, -100 * clients.length] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex space-x-16 items-center"
            style={{ width: `${clients.length * 200}px` }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16"
              >
                <div className="text-gray-400 font-semibold text-lg hover:text-green-secondary transition-colors duration-300">
                  {client}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ClientLogos;
