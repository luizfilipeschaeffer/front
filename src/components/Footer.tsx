'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  const solutions = [
    { name: 'Assist', href: '#assist' },
    { name: 'Canais', href: '#channels' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Autosserviço', href: '#self-service' },
    { name: 'Data & Insights', href: '#insights' },
    { name: 'Commerce', href: '#commerce' },
    { name: 'Voz do Cliente', href: '#voice' },
    { name: 'Nub.IA', href: '#ai' }
  ];

  const content = [
    { name: 'Blog', href: '#blog' },
    { name: 'Materiais de estudo', href: '#materials' },
    { name: 'Videos', href: '#videos' },
    { name: 'Cases', href: '#cases' }
  ];

  const about = [
    { name: 'Parcerias', href: '#partnerships' },
    { name: 'Contato', href: '#contact' },
    { name: 'A LetsZap', href: '#about' },
    { name: 'Trabalhe Conosco', href: '#careers' },
    { name: 'Central de Ajuda', href: '#help' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xl font-bold">LetsZap</span>
                <span className="text-lg">❤️</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                A plataforma de atendimento que conecta sua marca aos seus clientes de forma humana e eficiente.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>contato@letszap.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Soluções</h3>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.name}>
                    <a
                      href={solution.href}
                      className="text-gray-400 hover:text-green-primary transition-colors duration-200"
                    >
                      {solution.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Conteúdo</h3>
              <ul className="space-y-3">
                {content.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-green-primary transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Sobre</h3>
              <ul className="space-y-3">
                {about.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-green-primary transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <div className="bg-gradient-to-r from-green-secondary to-green-dark rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para transformar seu atendimento?
              </h3>
              <p className="text-green-light mb-6 max-w-2xl mx-auto">
                Junte-se a mais de 220 empresas que já confiam na LetsZap para seu atendimento ao cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-secondary hover:bg-gray-100">
                  Fale com especialista
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-secondary">
                  Peça uma demonstração
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2025 LetsZap - Todos os direitos reservados.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#privacy" className="text-gray-400 hover:text-green-primary transition-colors duration-200">
                Políticas e Privacidade
              </a>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-green-dark transition-colors duration-200 group"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
