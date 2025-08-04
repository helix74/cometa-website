'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface Specification {
  characteristic: string;
  detail: string;
}

interface Props {
  specifications: Specification[];
  className?: string;
}

const TechnicalSpecificationsSection = ({ specifications, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Spécifications Techniques
            </h2>
            <div className="w-24 h-1 bg-orange-securite mx-auto mb-6"></div>
            <p className="text-lg text-anthracite/70 max-w-3xl mx-auto">
              Découvrez toutes les caractéristiques techniques détaillées de notre porte sectionnelle ISO45.
            </p>
          </motion.div>

          {/* Tableau des spécifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-lg border border-acier-clair/50 overflow-hidden"
          >
            {/* Version Desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-acier-clair/50">
                    <th className="text-left px-8 py-6 text-lg font-bold text-anthracite border-b border-acier-clair">
                      Caractéristique
                    </th>
                    <th className="text-left px-8 py-6 text-lg font-bold text-anthracite border-b border-acier-clair">
                      Détail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                      className="hover:bg-acier-clair/20 transition-colors duration-200"
                    >
                      <td className="px-8 py-6 font-semibold text-anthracite border-b border-acier-clair/30">
                        {spec.characteristic}
                      </td>
                      <td className="px-8 py-6 text-anthracite/80 border-b border-acier-clair/30">
                        {spec.detail}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Version Mobile */}
            <div className="md:hidden space-y-4 p-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  className="bg-acier-clair/20 rounded-lg p-4"
                >
                  <div className="font-semibold text-anthracite mb-2 text-sm">
                    {spec.characteristic}
                  </div>
                  <div className="text-anthracite/80 text-sm">
                    {spec.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Note complémentaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <div className="bg-bleu-technique/10 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-bleu-technique font-medium mb-2">
                💡 Besoin de dimensions spécifiques ?
              </p>
              <p className="text-anthracite/70">
                Toutes nos portes sectionnelles ISO45 sont fabriquées sur mesure selon vos dimensions exactes.
                <br />
                Contactez-nous pour un devis personnalisé gratuit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecificationsSection; 