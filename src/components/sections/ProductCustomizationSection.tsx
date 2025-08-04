'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface CustomizationOption {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  title: string;
  options: CustomizationOption[];
  className?: string;
}

const ProductCustomizationSection = ({ title, options, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
      className={cn("py-16 lg:py-24 bg-acier-clair/30", className)}
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
              Adaptez votre porte sectionnelle ISO45 à vos besoins spécifiques et à l'esthétique de votre bâtiment.
            </p>
          </motion.div>

          {/* Grille des options */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {options.map((option, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-acier-clair/50 overflow-hidden group"
              >
                {/* Header avec icône */}
                <div className="bg-gradient-to-r from-bleu-technique to-bleu-technique/90 p-6 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {option.title}
                  </h3>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <p className="text-anthracite/80 leading-relaxed">
                    {option.description}
                  </p>
                  
                  {/* Indicateur "En savoir plus" */}
                  <div className="mt-6 flex items-center text-bleu-technique group-hover:text-orange-securite transition-colors duration-300">
                    <span className="text-sm font-medium">En savoir plus</span>
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
              </motion.div>
            ))}
          </motion.div>

          {/* Section informative supplémentaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-acier-clair/50"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-anthracite mb-4">
                  Conseil Personnalisé Gratuit
                </h3>
                <p className="text-anthracite/70 leading-relaxed mb-6">
                  Nos experts vous accompagnent dans le choix des options et finitions les plus adaptées 
                  à votre projet. Bénéficiez d'un conseil personnalisé et d'un devis détaillé gratuit.
                </p>
                <div className="flex items-center text-sm text-anthracite/60 space-x-6">
                  <span>✓ Conseils d'experts</span>
                  <span>✓ Devis gratuit</span>
                  <span>✓ Visite technique</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-securite/10 rounded-full p-8 inline-flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-orange-securite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-bleu-technique font-medium">
                  Une question sur les options ?
                  <br />
                  <a href="/contact" className="text-orange-securite hover:underline">
                    Contactez nos experts
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCustomizationSection; 