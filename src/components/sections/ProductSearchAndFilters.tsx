'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  onFiltersChange?: (filters: FilterState) => void;
}

interface FilterState {
  searchTerm: string;
  application: string;
  marque: string;
  typeProduct: string;
}

const ProductSearchAndFilters = ({ className, onFiltersChange }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    application: 'Toutes',
    marque: 'Toutes',
    typeProduct: 'Tous'
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
  };

  const handleApplyFilters = () => {
    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  };

  const applications = ['Toutes', 'Résidentiel', 'Industriel'];
  const marques = ['Toutes', 'Came', 'Nice', 'Hörmann', 'Cometa'];
  const typesProduits = ['Tous', 'Portes de Garage', 'Barrières', 'Motorisations', 'Rideaux Métalliques', 'Stores'];

  return (
    <section 
      ref={ref}
      className={cn("py-20 bg-white", className)}
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
            Recherchez et Filtrez nos Produits
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto"></div>
        </motion.div>

        {/* Container des filtres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            {/* Barre de recherche */}
            <div className="mb-8">
              <label htmlFor="search" className="block text-sm font-medium text-anthracite mb-3">
                Recherche par mot-clé
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  value={filters.searchTerm}
                  onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                  placeholder="Rechercher par nom de produit, référence..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bleu-technique focus:border-bleu-technique outline-none transition-all duration-300 text-anthracite placeholder-anthracite placeholder-opacity-60"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg 
                    className="w-5 h-5 text-anthracite" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Grille des filtres */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Filtre Application */}
              <div>
                <label htmlFor="application" className="block text-sm font-medium text-anthracite mb-3">
                  Application
                </label>
                <select
                  id="application"
                  value={filters.application}
                  onChange={(e) => handleFilterChange('application', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bleu-technique focus:border-bleu-technique outline-none transition-all duration-300 text-anthracite bg-white"
                >
                  {applications.map((app) => (
                    <option key={app} value={app}>{app}</option>
                  ))}
                </select>
              </div>

              {/* Filtre Marque */}
              <div>
                <label htmlFor="marque" className="block text-sm font-medium text-anthracite mb-3">
                  Marque
                </label>
                <select
                  id="marque"
                  value={filters.marque}
                  onChange={(e) => handleFilterChange('marque', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bleu-technique focus:border-bleu-technique outline-none transition-all duration-300 text-anthracite bg-white"
                >
                  {marques.map((marque) => (
                    <option key={marque} value={marque}>{marque}</option>
                  ))}
                </select>
              </div>

              {/* Filtre Type de Produit */}
              <div>
                <label htmlFor="typeProduct" className="block text-sm font-medium text-anthracite mb-3">
                  Type de Produit
                </label>
                <select
                  id="typeProduct"
                  value={filters.typeProduct}
                  onChange={(e) => handleFilterChange('typeProduct', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bleu-technique focus:border-bleu-technique outline-none transition-all duration-300 text-anthracite bg-white"
                >
                  {typesProduits.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bouton Appliquer les Filtres */}
            <div className="flex justify-center">
              <button
                onClick={handleApplyFilters}
                className="w-full md:w-auto px-8 py-3 bg-bleu-technique hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bleu-technique focus:ring-offset-2 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 group"
              >
                <span>Appliquer les Filtres</span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
              </button>
            </div>

            {/* Indicateur de filtres actifs */}
            {(filters.searchTerm || filters.application !== 'Toutes' || filters.marque !== 'Toutes' || filters.typeProduct !== 'Tous') && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-bleu-technique" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-bleu-technique">
                      Filtres actifs appliqués
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const resetFilters = { searchTerm: '', application: 'Toutes', marque: 'Toutes', typeProduct: 'Tous' };
                      setFilters(resetFilters);
                      if (onFiltersChange) onFiltersChange(resetFilters);
                    }}
                    className="text-sm text-gray-500 hover:text-anthracite transition-colors duration-300"
                  >
                    Réinitialiser
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSearchAndFilters; 