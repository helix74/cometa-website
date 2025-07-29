'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const Header = ({ className }: Props = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Produits', href: '/produits' },
    { name: 'Nos Réalisations', href: '/realisations' },
    { name: 'La Société', href: '/societe' },
    { name: 'Support & SAV', href: '/support' },
    { name: 'Contact & Devis', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 header-sticky',
        isScrolled ? 'header-scrolled' : 'py-4 bg-white',
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus-visible"
            aria-label="Cometa - Accueil"
          >
            <Image
              src="/images/logo.svg"
              alt="Logo Cometa"
              width={120}
              height={60}
              className="h-12 w-auto transition-all duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-anthracite hover:text-bleu-technique transition-all duration-300 font-medium focus-visible relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bleu-technique transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Bouton CTA Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-orange-securite text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 focus-visible hover:scale-105 shadow-lg"
            >
              Demander un Devis
            </Link>
          </div>

          {/* Menu Burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus-visible"
            aria-label="Menu de navigation"
            aria-expanded={isMenuOpen}
          >
            <span className={cn(
              'block w-6 h-0.5 bg-anthracite transition-all duration-300',
              isMenuOpen && 'rotate-45 translate-y-1.5'
            )}></span>
            <span className={cn(
              'block w-6 h-0.5 bg-anthracite transition-all duration-300 my-1',
              isMenuOpen && 'opacity-0'
            )}></span>
            <span className={cn(
              'block w-6 h-0.5 bg-anthracite transition-all duration-300',
              isMenuOpen && '-rotate-45 -translate-y-1.5'
            )}></span>
          </button>
        </nav>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-acier-clair mt-4"
            >
              <nav className="py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-anthracite hover:text-bleu-technique transition-all duration-300 font-medium py-2 focus-visible"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-orange-securite text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 focus-visible"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Demander un Devis
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 