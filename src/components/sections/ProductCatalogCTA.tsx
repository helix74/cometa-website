'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const ProductCatalogCTA = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={cn("bg-orange-securite text-white py-16 overflow-hidden", className)}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Besoin d'un Conseil Personnalisé pour votre Porte de Garage ?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-orange-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            Nos experts sont à votre disposition pour vous aider à choisir la solution 
            la plus adaptée à vos besoins et à votre budget.
          </p>

          {/* Bouton CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-3 bg-white text-orange-securite hover:bg-gray-100 py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <span>Demander un Devis Gratuit</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Éléments décoratifs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <div className="w-24 h-24 rounded-full border-8 border-orange-400 opacity-20"></div>
            </div>
            <div className="absolute -right-8 top-1/4">
              <div className="w-32 h-32 rounded-full border-8 border-orange-400 opacity-20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalogCTA; 