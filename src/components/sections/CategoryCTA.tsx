'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  category: string;
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundColor?: string;
}

const CategoryCTA = ({ 
  className, 
  category,
  title, 
  description, 
  primaryCTA, 
  secondaryCTA,
  backgroundColor = "bg-bleu-technique"
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={cn("py-20 text-white overflow-hidden relative", backgroundColor, className)}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Bouton principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center justify-center space-x-3 bg-orange-securite hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <span>{primaryCTA.text}</span>
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

            {/* Bouton secondaire (optionnel) */}
            {secondaryCTA && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 group"
                >
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{secondaryCTA.text}</span>
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Points de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: "⚡", text: "Devis sous 24h" },
              { icon: "🛡️", text: "Garantie 5 ans" },
              { icon: "👨‍🔧", text: "Installation pro" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1), ease: "easeOut" }}
                className="flex items-center justify-center space-x-3 text-blue-100"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-securite/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        
        {/* Motif géométrique */}
        <div className="absolute top-1/4 right-8 opacity-10">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M60 10L70 40L100 40L78 58L88 88L60 70L32 88L42 58L20 40L50 40L60 10Z" fill="white"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-8 opacity-10">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" stroke="white" strokeWidth="2"/>
            <circle cx="40" cy="40" r="20" stroke="white" strokeWidth="2"/>
            <circle cx="40" cy="40" r="10" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CategoryCTA; 