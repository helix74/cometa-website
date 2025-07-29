'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

interface AdvantageCard {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const DifferentiationSection = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages: AdvantageCard[] = [
    {
      id: 'expertise',
      title: '25 Ans d\'Expertise',
      description: 'Une expérience inégalée dans le domaine de l\'automatisme et des fermetures en Tunisie.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'bureau-etude',
      title: 'Bureau d\'Étude Intégré',
      description: 'Conception de solutions sur-mesure pour répondre à vos besoins les plus spécifiques.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'sav',
      title: 'Service Après-Vente Réactif',
      description: 'Un support technique et un SAV disponibles pour une tranquillité d\'esprit durable.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
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
            L'Avantage Cometa : Notre Engagement, Votre Sérénité
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto"></div>
        </motion.div>

        {/* Grille des avantages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16"
        >
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.id}
              variants={cardVariants}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2"
            >
              {/* Icône */}
              <div className="text-bleu-technique mb-6 group-hover:text-orange-securite transition-colors duration-300">
                {advantage.icon}
              </div>

              {/* Titre */}
              <h3 className="text-xl font-bold text-anthracite mb-4 group-hover:text-orange-securite transition-colors duration-300">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
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
            href="/a-propos"
            className="btn-primary bg-orange-securite hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 group"
          >
            <span>En savoir plus sur Cometa</span>
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

export default DifferentiationSection; 