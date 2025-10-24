'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Calendar, 
  User, 
  ArrowRight,
  BookOpen,
  Play,
  FileText
} from 'lucide-react';

const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Por que sua estratégia de CX não sai do papel — e como mudar isso agora',
      category: 'Atendimento ao cliente omnichannel',
      date: '21 out',
      author: 'LetsZap Team',
      image: '/api/placeholder/400/250',
      type: 'blog',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Novidades na plataforma: mais agilidade e controle no seu atendimento',
      category: 'news',
      date: '22 set',
      author: 'LetsZap Team',
      image: '/api/placeholder/400/250',
      type: 'news',
      icon: FileText
    },
    {
      id: 3,
      title: 'LetsZap Updates #7: mais controle, agilidade e inteligência para sua operação',
      category: 'news',
      date: '3 set',
      author: 'LetsZap Team',
      image: '/api/placeholder/400/250',
      type: 'news',
      icon: FileText
    },
    {
      id: 4,
      title: 'Plataforma de atendimento estrangeira vale a pena para empresas brasileiras?',
      category: 'Tecnologia e Inovação',
      date: '8 jul',
      author: 'LetsZap Team',
      image: '/api/placeholder/400/250',
      type: 'blog',
      icon: BookOpen
    },
    {
      id: 5,
      title: 'CRM omnichannel ou plataforma de atendimento omnichannel? Entenda a diferença!',
      category: 'Atendimento ao cliente omnichannel',
      date: '26 jun',
      author: 'LetsZap Team',
      image: '/api/placeholder/400/250',
      type: 'blog',
      icon: BookOpen
    },
    {
      id: 6,
      title: 'Como escolher a melhor plataforma de atendimento omnichannel: guia técnico',
      category: 'Atendimento ao cliente omnichannel',
      date: '9 jun',
      author: 'LetsZap Team',
      image: '/api/placeholder/400/250',
      type: 'blog',
      icon: BookOpen
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news':
        return 'bg-green-primary text-white';
      case 'Atendimento ao cliente omnichannel':
        return 'bg-green-secondary text-white';
      case 'Tecnologia e Inovação':
        return 'bg-green-accent text-green-dark';
      default:
        return 'bg-gray-100 text-gray-700';
    }
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
            Acesse nossos conteúdos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas tendências em atendimento ao cliente e tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <div className="relative">
                    {/* Placeholder Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-green-light to-green-accent rounded-t-xl flex items-center justify-center">
                      <Icon className="w-16 h-16 text-green-secondary" />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <Button variant="ghost" size="sm" className="group p-0 h-auto text-green-secondary hover:text-green-dark">
                      Ler mais
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Ver todos os conteúdos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogPreview;
