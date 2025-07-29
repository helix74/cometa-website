'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const HeroSection = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Effet parallax sur l'image de fond
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={ref}
      className={cn("relative h-screen flex items-center justify-center overflow-hidden", className)}
    >
      {/* Image de fond avec effet parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-bg.svg"
          alt="Cometa - Automatisme et Construction Métallique"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-anthracite/80 via-anthracite/70 to-anthracite/90" />
      </motion.div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal avec animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
          >
            Cometa : L'Excellence en{' '}
            <span className="text-orange-securite">Automatisme</span>{' '}
            et Fermetures
          </motion.h1>

          {/* Description avec animation décalée */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-acier-clair font-light leading-relaxed"
          >
            Votre partenaire unique pour toutes vos solutions de portes, portails, 
            automatismes et constructions métalliques en Tunisie.
          </motion.p>

          {/* Boutons CTA avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Bouton principal - Découvrir nos Produits */}
            <motion.a
              href="/produits"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-orange-securite hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Découvrir nos Produits</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            {/* Bouton secondaire - Demander un Devis */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-anthracite px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Demander un Devis</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll - repositionné pour éviter le chevauchement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-acier-clair"
        >
          <span className="text-sm mb-2">Découvrez nos services</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-2 border-orange-securite rounded-full"
        />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-2 border-bleu-technique rounded-full"
        />
      </div>
    </section>
  );
};

export default HeroSection; 