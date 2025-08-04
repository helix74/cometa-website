'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

// Données produits pour la recherche
const products = [
  { name: 'Porte de garage sectionnelle', category: 'Portes & Fermetures', href: '/produits/portes-de-garage' },
  { name: 'Automatisme NICE', category: 'Automatismes', href: '/produits/automatismes' },
  { name: 'Barrière levante CAME', category: 'Automatismes', href: '/produits/automatismes' },
  { name: 'Portail coulissant', category: 'Portes & Fermetures', href: '/produits/portails' },
  { name: 'Rideau métallique', category: 'Portes & Fermetures', href: '/produits/rideaux' },
  { name: 'Store banne', category: 'Aménagements Extérieurs', href: '/produits/stores' },
  { name: 'Construction hangar', category: 'Construction Métallique', href: '/produits/construction' },
  { name: 'Pergola aluminium', category: 'Aménagements Extérieurs', href: '/produits/pergolas' },
];

const Header = ({ className }: Props = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logique de recherche
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      // Rediriger vers le premier résultat ou vers la page de recherche
      window.location.href = searchResults[0].href;
    }
  };

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
              src="/images/logo.png"
              alt="Logo Cometa"
              width={120}
              height={60}
              className="h-12 w-auto transition-all duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
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

          {/* Barre de recherche Desktop */}
          <div className="hidden lg:flex items-center space-x-4 relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anthracite w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-securite focus:border-orange-securite outline-none transition-all duration-300 text-sm text-anthracite placeholder-anthracite placeholder-opacity-60"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-anthracite hover:text-bleu-technique"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Résultats de recherche */}
              <AnimatePresence>
                {isSearchOpen && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto"
                  >
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        href={result.href}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        <Package className="w-4 h-4 text-orange-securite mr-3" />
                        <div>
                          <div className="font-medium text-anthracite">{result.name}</div>
                          <div className="text-sm text-bleu-technique">{result.category}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Bouton CTA Desktop */}
            <Link
              href="/contact"
              className="bg-orange-securite text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 focus-visible hover:scale-105 shadow-lg"
            >
              Demander un devis
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus-visible"
            aria-label="Menu de navigation"
          >
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-anthracite transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-anthracite transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-anthracite transition-all duration-300"
            />
          </button>
        </nav>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-100 mt-4">
                {/* Recherche Mobile */}
                <div className="mb-4">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anthracite w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-securite focus:border-orange-securite outline-none transition-all duration-300 text-anthracite placeholder-anthracite placeholder-opacity-60"
                      />
                    </div>
                  </form>
                </div>

                {/* Navigation Mobile */}
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-anthracite hover:text-bleu-technique transition-all duration-300 font-medium py-2 focus-visible"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-block bg-orange-securite text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 focus-visible"
                  >
                    Demander un devis
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay pour fermer la recherche */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsSearchOpen(false)}
        />
      )}
    </motion.header>
  );
};

export default Header; 