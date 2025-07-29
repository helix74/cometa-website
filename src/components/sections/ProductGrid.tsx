'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  filteredProducts?: Product[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  application: string;
  marque: string;
  price?: string;
  reference: string;
  href: string;
}

const ProductGrid = ({ className, filteredProducts }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Produits d'exemple (en attendant les données réelles)
  const defaultProducts: Product[] = [
    {
      id: 'porte-iso45',
      name: 'Porte Sectionnelle ISO45',
      description: 'Isolation thermique et acoustique optimale pour usage résidentiel et industriel.',
      image: '/images/products/porte-iso45.jpg',
      category: 'Portes de Garage',
      application: 'Résidentiel',
      marque: 'Hörmann',
      reference: 'ISO45-001',
      href: '/produits/portes-fermetures/porte-sectionnelle-iso45'
    },
    {
      id: 'porte-enroulement',
      name: 'Porte à Enroulement Compact',
      description: 'Gain de place maximal, idéale pour petits espaces et applications industrielles.',
      image: '/images/products/porte-enroulement.jpg',
      category: 'Portes de Garage',
      application: 'Industriel',
      marque: 'Cometa',
      reference: 'COMP-002',
      href: '/produits/portes-fermetures/porte-enroulement-compact'
    },
    {
      id: 'barriere-came',
      name: 'Barrière Automatique CAME',
      description: 'Contrôle d\'accès robuste pour parkings et zones sécurisées.',
      image: '/images/products/barriere-came.jpg',
      category: 'Barrières',
      application: 'Industriel',
      marque: 'Came',
      reference: 'CAME-BAR01',
      href: '/produits/automatismes/barriere-automatique-came'
    },
    {
      id: 'motorisation-nice',
      name: 'Motorisation NICE RoadBarrier',
      description: 'Système de motorisation haute performance pour portails lourds.',
      image: '/images/products/motorisation-nice.jpg',
      category: 'Motorisations',
      application: 'Résidentiel',
      marque: 'Nice',
      reference: 'NICE-RB200',
      href: '/produits/automatismes/motorisation-nice-roadbarrier'
    },
    {
      id: 'rideau-metallique',
      name: 'Rideau Métallique Sécurisé',
      description: 'Protection maximale pour commerces et entrepôts.',
      image: '/images/products/rideau-metallique.jpg',
      category: 'Rideaux Métalliques',
      application: 'Industriel',
      marque: 'Cometa',
      reference: 'RM-SEC300',
      href: '/produits/portes-fermetures/rideau-metallique-securise'
    },
    {
      id: 'store-banne',
      name: 'Store Banne Motorisé',
      description: 'Protection solaire élégante avec motorisation intégrée.',
      image: '/images/products/store-banne.jpg',
      category: 'Stores',
      application: 'Résidentiel',
      marque: 'Cometa',
      reference: 'SB-MOT250',
      href: '/produits/amenagements-exterieurs/store-banne-motorise'
    }
  ];

  const products = filteredProducts || defaultProducts;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
            Nos Modèles de Produits
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {products.length} produit{products.length > 1 ? 's' : ''} trouvé{products.length > 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Grille des produits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
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
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-bleu-technique text-white text-xs font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {/* Badge application */}
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      "px-3 py-1 text-xs font-semibold rounded-full",
                      product.application === 'Résidentiel' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    )}>
                      {product.application}
                    </span>
                  </div>
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenu de la carte */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-anthracite group-hover:text-bleu-technique transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                      {product.marque}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Réf: {product.reference}
                    </div>
                    
                    {/* Indicateur de lien */}
                    <div className="flex items-center text-bleu-technique group-hover:text-orange-securite transition-colors duration-300">
                      <span className="text-sm font-medium">Voir détails</span>
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
        {products.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
                Essayez de modifier vos critères de recherche ou de supprimer certains filtres.
              </p>
              <button className="text-bleu-technique hover:text-orange-securite font-medium transition-colors duration-300">
                Réinitialiser les filtres
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid; 