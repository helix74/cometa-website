'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface Props {
  title: string;
  images: GalleryImage[];
  className?: string;
}

const ProductGallerySection = ({ title, images, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
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
      className={cn("py-16 lg:py-24 bg-white", className)}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-orange-securite mx-auto mb-6"></div>
            <p className="text-lg text-anthracite/70 max-w-3xl mx-auto">
              Explorez notre porte sectionnelle ISO45 sous tous les angles pour mieux visualiser 
              son intégration dans votre projet.
            </p>
          </motion.div>

          {/* Grille d'images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-anthracite/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Titre sur l'image */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      Cliquer pour agrandir
                    </p>
                  </div>

                  {/* Icône d'agrandissement */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-5 h-5 text-anthracite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section vidéo (placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16"
          >
            <div className="bg-acier-clair/30 rounded-xl p-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-anthracite mb-4">
                  Découvrez Notre Porte ISO45 en Vidéo
                </h3>
                <p className="text-anthracite/70 mb-8">
                  Regardez notre vidéo de présentation pour comprendre tous les avantages 
                  et le processus d'installation de la porte sectionnelle ISO45.
                </p>
                
                {/* Placeholder vidéo */}
                <div className="relative aspect-video bg-gradient-to-br from-bleu-technique to-bleu-technique/80 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-bleu-technique ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">Durée : 3 minutes</p>
                  </div>
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-anthracite/20 group-hover:bg-anthracite/10 transition-colors duration-300" />
                </div>
                
                <p className="text-sm text-anthracite/60 mt-4">
                  Cliquez pour lancer la vidéo de présentation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call-to-action pour plus d'images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-orange-securite/10 to-bleu-technique/10 rounded-lg p-6">
              <p className="text-anthracite font-medium mb-4">
                Vous souhaitez voir plus d'exemples d'installations ?
              </p>
              <a 
                href="/realisations" 
                className="inline-flex items-center text-orange-securite hover:text-bleu-technique font-semibold transition-colors duration-300"
              >
                Découvrir nos réalisations
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection; 