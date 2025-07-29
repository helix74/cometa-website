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
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const ProductCategoriesGrid = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: ProductCategory[] = [
    {
      id: 'portes-fermetures',
      title: 'Portes & Fermetures',
      description: 'Portes de garage, rideaux métalliques, grilles de sécurité. Sécurité, esthétique et confort pour tous types d\'architecture.',
      image: '/images/cat-portes-large.jpg',
      href: '/produits/portes-fermetures'
    },
    {
      id: 'automatismes',
      title: 'Automatismes & Contrôle d\'Accès',
      description: 'Motorisations pour portails, barrières automatiques, systèmes de contrôle d\'accès. Solutions intelligentes et sécurisées.',
      image: '/images/cat-automatismes-large.jpg',
      href: '/produits/automatismes'
    },
    {
      id: 'amenagements-exterieurs',
      title: 'Aménagements Extérieurs & Protections Solaires',
      description: 'Stores, pergolas, auvents, abris de voiture. Confort et protection pour vos espaces extérieurs.',
      image: '/images/cat-amenagements-large.jpg',
      href: '/produits/amenagements-exterieurs'
    },
    {
      id: 'construction-metallique',
      title: 'Construction Métallique & Matériaux',
      description: 'Structures métalliques, charpentes, fer forgé, tôles et profilés. Solutions sur-mesure pour vos projets.',
      image: '/images/cat-construction-large.jpg',
      href: '/produits/construction-metallique'
    }
  ];

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
            Nos Familles de Produits
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto"></div>
        </motion.div>

        {/* Grille des catégories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
            >
              <Link
                href={category.href}
                className="group block bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
              >
                {/* Image de la catégorie */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenu de la carte */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-bleu-technique mb-3 group-hover:text-orange-securite transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Indicateur de lien */}
                  <div className="flex items-center mt-4 text-bleu-technique group-hover:text-orange-securite transition-colors duration-300">
                    <span className="text-sm font-medium">Découvrir</span>
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategoriesGrid; 