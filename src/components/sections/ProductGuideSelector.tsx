'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

interface RecommendationResult {
  product: string;
  reason: string;
  features: string[];
  image: string;
}

const ProductGuideSelector = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [garageSize, setGarageSize] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);

  // Logique de recommandation
  const getRecommendation = (): RecommendationResult => {
    // Logique de recommandation basée sur les réponses
    if (priority === 'isolation') {
      return {
        product: 'Porte Sectionnelle',
        reason: 'Parfaite pour votre besoin d\'isolation thermique maximale',
        features: [
          'Isolation thermique renforcée',
          'Panneaux multicouches',
          'Réduction des ponts thermiques'
        ],
        image: '/images/products/porte-sectionnelle-detail.jpg'
      };
    } else if (priority === 'securite') {
      return {
        product: 'Porte à Enroulement',
        reason: 'Solution idéale pour une sécurité renforcée',
        features: [
          'Lames anti-effraction',
          'Serrures multipoints',
          'Résistance maximale'
        ],
        image: '/images/products/porte-enroulement-detail.jpg'
      };
    } else if (priority === 'prix') {
      return {
        product: 'Porte Basculante',
        reason: 'Le meilleur rapport qualité-prix du marché',
        features: [
          'Solution économique',
          'Fiabilité éprouvée',
          'Maintenance simple'
        ],
        image: '/images/products/porte-basculante-detail.jpg'
      };
    } else if (priority === 'design') {
      return {
        product: 'Porte Battante',
        reason: 'Personnalisation maximale pour un style unique',
        features: [
          'Design sur-mesure',
          'Matériaux variés',
          'Style traditionnel'
        ],
        image: '/images/products/porte-battante-detail.jpg'
      };
    } else {
      // Recommandation par défaut basée sur la taille
      if (garageSize === 'petit') {
        return {
          product: 'Porte à Enroulement',
          reason: 'Parfaite pour optimiser l\'espace disponible',
          features: [
            'Encombrement minimal',
            'Gain de place maximal',
            'Installation compacte'
          ],
          image: '/images/products/porte-enroulement-detail.jpg'
        };
      } else {
        return {
          product: 'Porte Sectionnelle',
          reason: 'Solution polyvalente pour votre garage',
          features: [
            'Polyvalence d\'usage',
            'Motorisation facile',
            'Isolation correcte'
          ],
          image: '/images/products/porte-sectionnelle-detail.jpg'
        };
      }
    }
  };

  const handleGetRecommendation = () => {
    const result = getRecommendation();
    setRecommendation(result);
    setShowResult(true);
  };

  const resetGuide = () => {
    setGarageSize('');
    setPriority('');
    setShowResult(false);
    setRecommendation(null);
  };

  const isFormComplete = garageSize && priority;

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
            Quel Type de Porte Choisir ?
          </h2>
          <div className="w-24 h-1 bg-orange-securite mx-auto mb-6"></div>
          <p className="text-lg text-anthracite max-w-3xl mx-auto">
            Répondez à ces questions pour trouver votre solution idéale :
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="questionnaire"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-acier-clair rounded-xl p-8 shadow-lg"
              >
                {/* Question 1: Taille du garage */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-anthracite mb-6">
                    Quelle est la taille de votre garage ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'petit', label: 'Petit garage', subtitle: '(moins de 15m²)' },
                      { value: 'standard', label: 'Garage standard', subtitle: '(15-25m²)' },
                      { value: 'grand', label: 'Grand garage', subtitle: '(plus de 25m²)' }
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 group",
                          garageSize === option.value
                            ? "border-bleu-technique bg-blue-50 text-bleu-technique"
                            : "border-gray-200 bg-white hover:border-orange-securite hover:bg-orange-50"
                        )}
                      >
                        <input
                          type="radio"
                          name="garageSize"
                          value={option.value}
                          checked={garageSize === option.value}
                          onChange={(e) => setGarageSize(e.target.value)}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <div className="font-semibold mb-1">{option.label}</div>
                          <div className="text-sm text-bleu-technique">{option.subtitle}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 2: Priorité */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-anthracite mb-6">
                    Quelle est votre priorité ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: 'isolation', label: 'Isolation thermique maximale' },
                      { value: 'securite', label: 'Sécurité renforcée' },
                      { value: 'prix', label: 'Meilleur rapport qualité/prix' },
                      { value: 'design', label: 'Design et personnalisation' }
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 group",
                          priority === option.value
                            ? "border-bleu-technique bg-blue-50 text-bleu-technique"
                            : "border-gray-200 bg-white hover:border-orange-securite hover:bg-orange-50"
                        )}
                      >
                        <input
                          type="radio"
                          name="priority"
                          value={option.value}
                          checked={priority === option.value}
                          onChange={(e) => setPriority(e.target.value)}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-3">
                          <div className={cn(
                            "w-4 h-4 rounded-full border-2 transition-all duration-300",
                            priority === option.value
                              ? "border-bleu-technique bg-bleu-technique"
                              : "border-gray-300 group-hover:border-orange-securite"
                          )}>
                            {priority === option.value && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                          <span className="font-medium">{option.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Bouton de recommandation */}
                <div className="text-center">
                  <button
                    onClick={handleGetRecommendation}
                    disabled={!isFormComplete}
                    className={cn(
                      "px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2",
                      isFormComplete
                        ? "bg-bleu-technique hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105"
                        : "bg-gray-300 text-anthracite cursor-not-allowed"
                    )}
                  >
                    <span>Voir ma Recommandation</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-green-50 rounded-xl p-8 shadow-lg border-2 border-green-200"
              >
                {recommendation && (
                  <>
                    {/* En-tête du résultat */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">
                        Notre Recommandation
                      </h3>
                      <p className="text-green-700">
                        {recommendation.reason}
                      </p>
                    </div>

                    {/* Produit recommandé */}
                    <div className="bg-white rounded-lg p-6 mb-6">
                      <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <img 
                            src={recommendation.image} 
                            alt={recommendation.product}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-anthracite mb-2">
                            {recommendation.product}
                          </h4>
                          <div className="space-y-1">
                            {recommendation.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                <span className="text-anthracite text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={resetGuide}
                        className="px-6 py-2 border-2 border-gray-300 text-anthracite rounded-lg hover:border-bleu-technique transition-colors duration-300"
                      >
                        Refaire le test
                      </button>
                      <button className="px-6 py-2 bg-bleu-technique hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                        Demander un devis
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductGuideSelector; 