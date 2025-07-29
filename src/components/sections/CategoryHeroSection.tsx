'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  category: string;
  title: string;
  description: string;
  features: string[];
  backgroundImage?: string;
  className?: string;
}

const CategoryHeroSection = ({ 
  category, 
  title, 
  description, 
  features, 
  backgroundImage = '/images/hero-bg.svg',
  className 
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className={cn("relative py-20 lg:py-32 overflow-hidden", className)}
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${category} - Cometa`}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-anthracite/80 via-anthracite/70 to-anthracite/60" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Badge catégorie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-orange-securite text-white text-sm font-semibold rounded-full">
              {category}
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {/* Points forts en grille */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-securite rounded-full"></div>
                  <span className="text-white font-medium text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicateur de défilement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2 text-white/70">
              <span className="text-xs font-medium">Découvrez nos modèles</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-orange-securite/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-bleu-technique/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CategoryHeroSection; 