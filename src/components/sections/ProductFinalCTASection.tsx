'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Phone, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

const ProductFinalCTASection = ({ title, description, ctaText, ctaHref, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={cn("py-16 lg:py-24 bg-gradient-to-br from-bleu-technique via-bleu-technique/90 to-orange-securite", className)}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg lg:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Bouton CTA principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-12"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center bg-white text-bleu-technique px-8 py-4 rounded-lg font-bold text-lg hover:bg-acier-clair focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-bleu-technique transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Informations de contact alternatives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-3 gap-6 text-white/80"
          >
            {/* Téléphone */}
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Appelez-nous</h3>
              <a 
                href="tel:+21671XXXXXX" 
                className="text-white hover:text-orange-securite transition-colors duration-200"
              >
                +216 71 XXX XXX
              </a>
            </div>

            {/* Horaires */}
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Nos Horaires</h3>
              <p className="text-sm">Lun-Ven : 8h-17h</p>
            </div>

            {/* Réponse rapide */}
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Réponse Rapide</h3>
              <p className="text-sm">Devis sous 24h</p>
            </div>
          </motion.div>

          {/* Avantages supplémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-securite" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Devis gratuit et sans engagement</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-securite" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Installation par nos équipes</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-securite" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Garantie 10 ans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductFinalCTASection; 