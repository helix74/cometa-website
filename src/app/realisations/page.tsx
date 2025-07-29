'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';

// Types pour les filtres
type FilterType = 'tous' | 'residentiel' | 'industriel' | 'construction';

interface FilterOption {
  value: FilterType;
  label: string;
}

interface Project {
  id: string;
  title: string;
  category: FilterType;
  categoryLabel: string;
  description: string;
  image: string;
  slug: string;
}

const filterOptions: FilterOption[] = [
  { value: 'tous', label: 'Tous les Projets' },
  { value: 'residentiel', label: 'Résidentiel' },
  { value: 'industriel', label: 'Industriel' },
  { value: 'construction', label: 'Construction Métallique' }
];

// Données d'exemple des projets
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Villa Gammarth',
    category: 'residentiel',
    categoryLabel: 'Villa de Luxe à Gammarth',
    description: 'Installation de portes de garage sectionnelles motorisées et portail coulissant automatique.',
    image: '/images/cat-portes-large.jpg',
    slug: 'villa-gammarth'
  },
  {
    id: '2',
    title: 'Complexe Industriel Bizerte',
    category: 'industriel',
    categoryLabel: 'Zone Industrielle Bizerte',
    description: 'Système complet de contrôle d\'accès avec portails industriels et barrières automatiques.',
    image: '/images/cat-automatismes-large.jpg',
    slug: 'complexe-industriel-bizerte'
  },
  {
    id: '3',
    title: 'Résidence Les Jardins',
    category: 'residentiel',
    categoryLabel: 'Résidence Haut Standing',
    description: 'Automatisation complète des accès résidentiels avec interphones et portails sécurisés.',
    image: '/images/cat-portes.jpg',
    slug: 'residence-les-jardins'
  },
  {
    id: '4',
    title: 'Hangar Logistique',
    category: 'construction',
    categoryLabel: 'Construction Métallique',
    description: 'Construction d\'un hangar métallique de 2000m² avec portes sectionnelles industrielles.',
    image: '/images/cat-construction-large.jpg',
    slug: 'hangar-logistique'
  },
  {
    id: '5',
    title: 'Centre Commercial Tunis',
    category: 'industriel',
    categoryLabel: 'Complexe Commercial',
    description: 'Installation de portes automatiques et système de sécurité pour centre commercial.',
    image: '/images/cat-automatismes.jpg',
    slug: 'centre-commercial-tunis'
  },
  {
    id: '6',
    title: 'Villa Moderne Sidi Bou Said',
    category: 'residentiel',
    categoryLabel: 'Architecture Contemporaine',
    description: 'Portail design en aluminium avec motorisation et domotique intégrée.',
    image: '/images/cat-amenagements-large.jpg',
    slug: 'villa-moderne-sidi-bou-said'
  }
];

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('tous');
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Filtrer les projets selon le filtre actif
  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'tous' || project.category === activeFilter
  );

  // Projets à afficher selon la limite
  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setVisibleProjects(6); // Reset à 6 projets lors du changement de filtre
  };

  return (
    <main className="min-h-screen bg-white">
      {/* En-tête & Filtres */}
      <section className="bg-gradient-to-b from-acier-clair/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Titre principal avec animation fade-in et slide-down */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-anthracite mb-6">
                Nos Réalisations : L'Excellence Cometa en Action
              </h1>
            </motion.div>

            {/* Description avec animation fade-in et slide-down (délai) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg lg:text-xl text-anthracite/80 mb-12 leading-relaxed">
                Découvrez la diversité et la qualité de nos projets, conçus et installés 
                pour des professionnels et des particuliers exigeants.
              </p>
            </motion.div>

            {/* Filtres avec animation fade-in et slide-up */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {filterOptions.map((option) => (
                <motion.button
                  key={option.value}
                  variants={fadeInVariants}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onClick={() => handleFilterChange(option.value)}
                  className={`
                    px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base
                    transition-all duration-200 ease-out
                    focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:ring-offset-2
                    ${
                      activeFilter === option.value
                        ? 'bg-bleu-technique text-white shadow-lg transform scale-105'
                        : 'bg-white text-anthracite border-2 border-acier-clair hover:border-bleu-technique hover:text-bleu-technique hover:shadow-md'
                    }
                  `}
                  aria-pressed={activeFilter === option.value}
                  aria-label={`Filtrer par ${option.label}`}
                >
                  {option.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grille des Projets */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grille des cartes projet */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden border border-acier-clair/50"
              >
                <Link href={`/realisations/${project.slug}`} className="block">
                  {/* Image du projet */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Projet ${project.title} - ${project.categoryLabel}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Badge catégorie */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-bleu-technique text-white px-3 py-1 rounded-full text-sm font-medium">
                        {filterOptions.find(opt => opt.value === project.category)?.label}
                      </span>
                    </div>

                    {/* Icône de visualisation */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 p-2 rounded-full">
                        <Eye className="w-5 h-5 text-bleu-technique" />
                      </div>
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-anthracite mb-2 group-hover:text-bleu-technique transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-anthracite/70 font-medium mb-3 text-sm">
                      {project.categoryLabel}
                    </p>
                    <p className="text-anthracite/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-bleu-technique font-medium group-hover:text-orange-securite transition-colors duration-200">
                      <span>Voir le projet</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton Charger plus */}
          {visibleProjects < filteredProjects.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center"
            >
              <button
                onClick={handleLoadMore}
                className="bg-bleu-technique text-white px-8 py-3 rounded-lg font-medium hover:bg-bleu-technique/90 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Charger plus de projets"
              >
                Charger plus de projets
              </button>
            </motion.div>
          )}

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-anthracite/60 text-lg">
                Aucun projet trouvé pour cette catégorie.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section Appel à l'Action */}
      <section className="bg-gradient-to-r from-anthracite to-anthracite/90 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Titre avec animation fade-in et slide-up */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Votre projet mérite l'expertise Cometa.
              </h2>
            </motion.div>

            {/* Description avec animation fade-in et slide-up (délai) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                Inspirez-vous de nos réalisations et confiez-nous votre vision. 
                Nous sommes prêts à transformer vos idées en réalité.
              </p>
            </motion.div>

            {/* Bouton CTA avec animation fade-in et scale-up */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                href="/contact?type=devis"
                className="inline-flex items-center bg-orange-securite text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-securite/90 focus:outline-none focus:ring-2 focus:ring-orange-securite/50 focus:ring-offset-2 focus:ring-offset-anthracite transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
                aria-label="Demander un devis personnalisé pour votre projet"
              >
                <span>Demander un Devis Personnalisé</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 