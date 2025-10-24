'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      label: 'Início',
      href: '#home'
    },
    {
      label: 'Funcionalidades',
      href: '#features',
      dropdown: [
        { label: 'Multiatendimento', href: '#multiatendimento' },
        { label: 'Envio em Massa', href: '#envio-massa' },
        { label: 'Chatbot', href: '#chatbot' },
        { label: 'Agendamento', href: '#agendamento' },
        { label: 'Integração API', href: '#integracao-api' },
        { label: 'Etiquetas', href: '#etiquetas' },
        { label: 'CRM Integrado', href: '#crm' },
        { label: 'Relatórios', href: '#relatorios' }
      ]
    },
    {
      label: 'Planos',
      href: '#pricing'
    },
    {
      label: 'Ajuda',
      href: '#help',
      dropdown: [
        { label: 'Central de Ajuda', href: '#help' },
        { label: 'Tutorial Completo', href: '#tutorial' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contato', href: '#contact' }
      ]
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-green-secondary">LetsZap</span>
              <span className="text-lg">❤️</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-secondary transition-colors duration-200"
                  onClick={() => item.dropdown && toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.dropdown && (
                  <div
                    className={cn(
                      'absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200',
                      activeDropdown === item.label && 'opacity-100 visible'
                    )}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-accent hover:text-green-dark transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Contato
            </Button>
            <Button variant="primary" size="sm">
              Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-green-secondary transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 transition-all duration-300',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-green-secondary transition-colors duration-200"
                  onClick={() => item.dropdown && toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.dropdown && (
                  <div
                    className={cn(
                      'mt-2 ml-4 space-y-2 transition-all duration-200',
                      activeDropdown === item.label ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                    )}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block text-sm text-gray-600 hover:text-green-secondary transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                Login
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Testar gratuitamente
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
