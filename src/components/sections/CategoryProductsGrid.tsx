'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  categorySlug: string;
  categoryTitle: string;
  products: ProductType[];
  filters: FilterConfig[];
}

interface ProductType {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  href: string;
  type: string;
  motorisation?: boolean;
  isolation?: boolean;
  application?: string;
}

interface FilterConfig {
  id: string;
  name: string;
  options: { value: string; label: string }[];
}

interface FilterState {
  [key: string]: string;
}

const CategoryProductsGrid = ({ 
  className, 
  categorySlug, 
  categoryTitle, 
  products, 
  filters 
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeFilters, setActiveFilters] = useState<FilterState>({});
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Gestion des filtres
  const handleFilterChange = (filterId: string, value: string) => {
    const newFilters = { ...activeFilters };
    
    if (value === 'all' || value === '') {
      delete newFilters[filterId];
    } else {
      newFilters[filterId] = value;
    }
    
    setActiveFilters(newFilters);
    
    // Appliquer les filtres
    let filtered = products;
    
    Object.entries(newFilters).forEach(([key, filterValue]) => {
      filtered = filtered.filter(product => {
        switch (key) {
          case 'type':
            return product.type === filterValue;
          case 'motorisation':
            return filterValue === 'oui' ? product.motorisation : !product.motorisation;
          case 'isolation':
            return filterValue === 'oui' ? product.isolation : !product.isolation;
          case 'application':
            return product.application === filterValue;
          default:
            return true;
        }
      });
    });
    
    setFilteredProducts(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section 
      ref={ref}
      className={cn("py-20 bg-acier-clair", className)}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
            Choisissez le Type de Porte Adapté à Votre Garage
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos 4 types de portes de garage, chacune conçue pour répondre 
            à des besoins spécifiques en termes d'espace, de sécurité et de budget.
          </p>
        </motion.div>

        <div className="lg:flex lg:gap-12">
          {/* Sidebar Filtres */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-80 mb-12 lg:mb-0"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-anthracite mb-6">
                Affiner votre Recherche
              </h3>
              
              {filters.map((filter) => (
                <div key={filter.id} className="mb-6">
                  <h4 className="text-sm font-semibold text-anthracite mb-3">
                    {filter.name}
                  </h4>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name={filter.id}
                          value={option.value}
                          checked={activeFilters[filter.id] === option.value}
                          onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                          className="w-4 h-4 text-bleu-technique focus:ring-bleu-technique border-gray-300"
                        />
                        <span className="text-gray-700 group-hover:text-anthracite transition-colors duration-200">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Bouton Reset */}
              {Object.keys(activeFilters).length > 0 && (
                <button
                  onClick={() => {
                    setActiveFilters({});
                    setFilteredProducts(products);
                  }}
                  className="w-full mt-4 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </motion.div>

          {/* Grille des Produits */}
          <div className="lg:flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                >
                  <Link
                    href={product.href}
                    className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full hover:-translate-y-1"
                  >
                    {/* Image du produit */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay au hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        {product.motorisation && (
                          <span className="px-2 py-1 bg-bleu-technique text-white text-xs font-semibold rounded-full">
                            Motorisable
                          </span>
                        )}
                        {product.isolation && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            Isolée
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-anthracite group-hover:text-bleu-technique transition-colors duration-300 mb-3">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {product.shortDescription}
                      </p>

                      {/* Caractéristiques */}
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-securite rounded-full"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Indicateur de lien */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">
                          {product.application || 'Résidentiel & Industriel'}
                        </span>
                        <div className="flex items-center text-bleu-technique group-hover:text-orange-securite transition-colors duration-300">
                          <span className="text-sm font-medium">En savoir plus</span>
                          <svg 
                            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Message si aucun produit */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-center py-16"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-anthracite mb-3">
                    Aucun produit trouvé
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Aucun produit ne correspond à vos critères de recherche.
                  </p>
                  <button
                    onClick={() => {
                      setActiveFilters({});
                      setFilteredProducts(products);
                    }}
                    className="text-bleu-technique hover:text-orange-securite font-medium transition-colors duration-300"
                  >
                    Voir tous les produits
                  </button>
                </div>
              </motion.div>
            )}

            {/* Compteur de résultats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} 
                {Object.keys(activeFilters).length > 0 ? ' correspondant à vos critères' : ' disponible' + (filteredProducts.length > 1 ? 's' : '')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProductsGrid; 