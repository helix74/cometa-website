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

interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

const SocialProofSection = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients: ClientLogo[] = [
    {
      id: 'client-1',
      name: 'Client 1',
      logo: '/images/logo-client-1.png',
      alt: 'Logo Client 1'
    },
    {
      id: 'client-2',
      name: 'Client 2',
      logo: '/images/logo-client-2.png',
      alt: 'Logo Client 2'
    },
    {
      id: 'client-3',
      name: 'Client 3',
      logo: '/images/logo-client-3.png',
      alt: 'Logo Client 3'
    },
    {
      id: 'client-4',
      name: 'Client 4',
      logo: '/images/logo-client-4.png',
      alt: 'Logo Client 4'
    },
    {
      id: 'client-5',
      name: 'Client 5',
      logo: '/images/logo-client-5.png',
      alt: 'Logo Client 5'
    },
    {
      id: 'client-6',
      name: 'Client 6',
      logo: '/images/logo-client-6.png',
      alt: 'Logo Client 6'
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      className={cn("py-20 bg-acier-clair", className)}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Titre de section */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
            Ils nous font Confiance
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto mb-8"></div>
        </motion.div>

        {/* Grille des logos clients */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={logoVariants}
              className="group flex items-center justify-center"
            >
              <div className="relative w-32 h-20 lg:w-40 lg:h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Découvrez comment Cometa a transformé les projets de nos clients avec des solutions sur-mesure et une qualité irréprochable.
          </p>
        </motion.div>

        {/* Bouton CTA */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <Link
            href="/realisations"
            className="btn-primary bg-orange-securite hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 group"
          >
            <span>Voir nos Réalisations</span>
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

export default SocialProofSection; 