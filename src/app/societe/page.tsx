'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Wrench } from 'lucide-react';

// Types pour les chiffres clés
interface KeyFigure {
  id: string;
  number: number;
  suffix: string;
  label: string;
}

// Types pour la timeline
interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

// Types pour les engagements
interface Commitment {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Données des chiffres clés
const keyFigures: KeyFigure[] = [
  { id: '1', number: 25, suffix: '+', label: 'Années d\'Expérience' },
  { id: '2', number: 1000, suffix: '+', label: 'Projets Réalisés' },
  { id: '3', number: 500, suffix: '+', label: 'Clients Satisfaits' },
  { id: '4', number: 5000, suffix: 'm²', label: 'Surface de Production' }
];

// Données de la timeline
const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '1998',
    title: 'Fondation de Cometa',
    description: 'Création de l\'entreprise avec une vision claire : devenir le leader des solutions de fermetures en Tunisie.'
  },
  {
    id: '2',
    year: '2005',
    title: 'Intégration du Bureau d\'Étude',
    description: 'Développement de notre capacité à concevoir des solutions sur-mesure pour les projets les plus complexes.'
  },
  {
    id: '3',
    year: '2015',
    title: 'Diversification Stratégique',
    description: 'Élargissement de notre gamme de produits pour inclure la construction métallique et les aménagements extérieurs.'
  },
  {
    id: '4',
    year: 'Aujourd\'hui',
    title: 'Leader du Marché',
    description: 'Cometa est reconnue pour son innovation, sa qualité et son service client exceptionnel.'
  }
];

// Données des engagements
const commitments: Commitment[] = [
  {
    id: '1',
    icon: <Award className="w-12 h-12 text-bleu-technique" />,
    title: 'Qualité Européenne',
    description: 'Des produits conformes aux normes internationales les plus strictes.'
  },
  {
    id: '2',
    icon: <Users className="w-12 h-12 text-bleu-technique" />,
    title: 'Conseil Expert',
    description: 'Une équipe dédiée pour vous accompagner à chaque étape de votre projet.'
  },
  {
    id: '3',
    icon: <Wrench className="w-12 h-12 text-bleu-technique" />,
    title: 'Service Après-Vente',
    description: 'Un support réactif et efficace pour une tranquillité d\'esprit durable.'
  }
];

// Hook pour l'animation des compteurs
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, startAnimation: () => setHasStarted(true) };
};

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function SocietePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* BLOC 1 : Titre & Mission */}
      <section className="bg-gradient-to-b from-acier-clair/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contenu textuel */}
              <div className="text-center lg:text-left">
                {/* Titre principal avec animation fade-in et slide-down */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-anthracite mb-6 leading-tight">
                    Cometa : 25 Ans d'Innovation au Service de vos Projets.
                  </h1>
                </motion.div>

                {/* Description avec animation fade-in et slide-down (délai) */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <p className="text-lg lg:text-xl text-anthracite/80 leading-relaxed">
                    Depuis 1998, Cometa s'est imposée comme le partenaire de référence en Tunisie 
                    pour toutes les solutions d'automatisme, de fermetures et de construction métallique. 
                    Notre mission : vous offrir des produits de haute qualité et un service irréprochable.
                  </p>
                </motion.div>
              </div>

              {/* Image avec animation fade-in et scale-up */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <Image
                    src="/images/hero-bg.svg"
                    alt="Équipe Cometa - Experts en automatisme et fermetures"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite/20 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 : Chiffres Clés */}
      <section className="py-16 lg:py-24 bg-acier-clair/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Titre de la section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-anthracite mb-4">
                Cometa en Chiffres : Notre Engagement, Votre Confiance.
              </h2>
            </motion.div>

            {/* Grille des chiffres */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFigures.map((figure, index) => (
                <KeyFigureCard key={figure.id} figure={figure} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 3 : Histoire Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Titre de la section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-anthracite mb-4">
                Notre Histoire : Une Évolution Constante.
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-bleu-technique/30 hidden sm:block" />
              
              {timelineEvents.map((event, index) => (
                <TimelineEvent key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 4 : Engagement Qualité */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-acier-clair/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Titre de la section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-anthracite mb-4">
                Notre Engagement : Qualité, Expertise et Proximité.
              </h2>
            </motion.div>

            {/* Grille des engagements */}
            <div className="grid md:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => (
                <CommitmentCard key={commitment.id} commitment={commitment} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Composant pour les chiffres clés avec compteur animé
const KeyFigureCard = ({ figure, index }: { figure: KeyFigure; index: number }) => {
  const { count, startAnimation } = useCounter(figure.number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onViewportEnter={startAnimation}
      className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl lg:text-5xl font-bold text-bleu-technique mb-2">
        {count}{figure.suffix}
      </div>
      <div className="text-anthracite/80 font-medium">
        {figure.label}
      </div>
    </motion.div>
  );
};

// Composant pour les événements de la timeline
const TimelineEvent = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="relative flex items-center mb-12 last:mb-0"
    >
      {/* Marqueur */}
      <div className="absolute left-6 w-4 h-4 bg-bleu-technique rounded-full border-4 border-white shadow-lg hidden sm:block" />
      
      {/* Contenu */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ml-0 sm:ml-16 w-full">
        <div className="flex items-center mb-3">
          <span className="bg-bleu-technique text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
            {event.id}
          </span>
          <span className="text-bleu-technique font-bold text-lg">
            {event.year}
          </span>
        </div>
        <h3 className="text-xl font-bold text-anthracite mb-2">
          {event.title}
        </h3>
        <p className="text-anthracite/80 leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};

// Composant pour les engagements
const CommitmentCard = ({ commitment, index }: { commitment: Commitment; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="flex justify-center mb-4">
        {commitment.icon}
      </div>
      <h3 className="text-xl font-bold text-anthracite mb-3">
        {commitment.title}
      </h3>
      <p className="text-anthracite/80 leading-relaxed">
        {commitment.description}
      </p>
    </motion.div>
  );
}; 