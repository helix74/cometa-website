'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

const ProductCategoriesSection = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: CategoryCard[] = [
    {
      id: 'portes-fermetures',
      title: 'Portes & Fermetures',
      subtitle: 'Portes & Fermetures',
      description: 'Solutions résidentielles et industrielles.',
      image: '/images/cat-portes.jpg',
      href: '/produits/portes-fermetures'
    },
    {
      id: 'automatismes',
      title: 'Automatismes',
      subtitle: 'Automatismes & Contrôle d\'Accès',
      description: 'Motorisations, barrières et télécommandes.',
      image: '/images/cat-automatismes.jpg',
      href: '/produits/automatismes'
    },
    {
      id: 'amenagements-exterieurs',
      title: 'Aménagements Extérieurs',
      subtitle: 'Aménagements Extérieurs',
      description: 'Stores, auvents et abris de voiture.',
      image: '/images/cat-amenagements.jpg',
      href: '/produits/amenagements-exterieurs'
    },
    {
      id: 'construction-metallique',
      title: 'Construction Métallique',
      subtitle: 'Construction Métallique',
      description: 'Fer forgé, tôles et profilés.',
      image: '/images/cat-construction.jpg',
      href: '/produits/construction-metallique'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut" as const
      }
    }
  };

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
            Nos Solutions pour Chaque Besoin
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto"></div>
        </motion.div>

        {/* Grille des catégories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image de la catégorie */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-anthracite mb-2 group-hover:text-orange-securite transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  {category.subtitle}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                {/* Lien vers la catégorie */}
                <Link 
                  href={category.href}
                  className="inline-flex items-center mt-4 text-bleu-technique hover:text-orange-securite font-semibold text-sm transition-colors duration-300 group/link"
                >
                  Découvrir
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton CTA */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <Link
            href="/produits"
            className="btn-primary bg-orange-securite hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 group"
          >
            <span>Voir tous nos produits</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection; 