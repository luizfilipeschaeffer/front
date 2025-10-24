'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startCount = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startCount + (end - startCount) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-green-secondary">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: 2000000,
      suffix: '+',
      label: 'conversas geradas por nossos clientes',
      duration: 2000
    },
    {
      number: 15,
      suffix: '+',
      label: 'anos de mercado',
      duration: 1500
    },
    {
      number: 220,
      suffix: '+',
      label: 'clientes atendidos',
      duration: 1000
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-secondary to-green-dark text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conte com a experiência de quem sabe o que faz!
          </h2>
          <p className="text-xl text-green-light max-w-3xl mx-auto">
            Atendemos todos os principais setores da economia do Brasil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4">
                <Counter
                  end={stat.number}
                  duration={stat.duration}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-lg text-green-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">JUNTE-SE AOS MELHORES</h3>
              <p className="text-green-light">
                Mais de 220 marcas já confiam na LetsZap para seu atendimento
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">EXPERIÊNCIA COMPROVADA</h3>
              <p className="text-green-light">
                15 anos de mercado com foco em inovação e qualidade
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default StatsSection;
