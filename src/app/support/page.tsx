'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Plus, Minus, Search, Download, FileText } from 'lucide-react';

// Types pour les questions FAQ
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Types pour les documentations
interface Documentation {
  id: string;
  title: string;
  description: string;
  format: string;
  size: string;
  downloadUrl: string;
}

// Données des FAQ
const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Comment programmer ma télécommande ?',
    answer: 'La programmation de votre télécommande dépend du modèle de votre motorisation. Veuillez consulter le manuel d\'utilisation spécifique ou notre guide en ligne.',
    category: 'Télécommandes'
  },
  {
    id: '2',
    question: 'Quelle est la fréquence d\'entretien recommandée pour ma porte de garage ?',
    answer: 'Un entretien annuel par un professionnel est fortement recommandé pour assurer la longévité et la sécurité de votre installation.',
    category: 'Entretien'
  },
  {
    id: '3',
    question: 'Ma porte de garage ne s\'ouvre plus, que faire ?',
    answer: 'Vérifiez d\'abord l\'alimentation électrique et les piles de la télécommande. Si le problème persiste, contactez notre service technique.',
    category: 'Dépannage'
  },
  {
    id: '4',
    question: 'Comment régler la force de fermeture de ma porte ?',
    answer: 'Le réglage de la force se fait via les vis de réglage sur le moteur. Consultez le manuel ou faites appel à un technicien qualifié.',
    category: 'Réglages'
  },
  {
    id: '5',
    question: 'Puis-je ajouter une télécommande supplémentaire ?',
    answer: 'Oui, vous pouvez programmer jusqu\'à 8 télécommandes sur la plupart de nos motorisations. Suivez la procédure dans le manuel.',
    category: 'Télécommandes'
  }
];

// Données des documentations
const documentationData: Documentation[] = [
  {
    id: '1',
    title: 'Manuel d\'Installation Porte Sectionnelle ISO45',
    description: 'Guide complet d\'installation pour portes sectionnelles résidentielles',
    format: 'PDF',
    size: '2.5 MB',
    downloadUrl: '/docs/manuel-iso45.pdf'
  },
  {
    id: '2',
    title: 'Notice Technique Motorisation LIFT400',
    description: 'Instructions de montage et programmation pour motorisation LIFT400',
    format: 'PDF',
    size: '1.8 MB',
    downloadUrl: '/docs/notice-lift400.pdf'
  },
  {
    id: '3',
    title: 'Guide d\'Entretien Portes Industrielles',
    description: 'Procédures de maintenance pour portes industrielles haute fréquence',
    format: 'PDF',
    size: '3.2 MB',
    downloadUrl: '/docs/guide-entretien-industriel.pdf'
  },
  {
    id: '4',
    title: 'Schémas Électriques Commandes Centralisées',
    description: 'Diagrammes de câblage pour systèmes de contrôle d\'accès',
    format: 'PDF',
    size: '4.1 MB',
    downloadUrl: '/docs/schemas-electriques.pdf'
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

export default function SupportPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer les documentations selon le terme de recherche
  const filteredDocumentation = documentationData.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* BLOC 1 : Contact Prioritaire */}
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
                Besoin d'Aide ? Notre Équipe Support est là.
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
                Que ce soit pour une question technique, un dépannage ou une demande de service après-vente, 
                nous sommes à votre écoute.
              </p>
            </motion.div>

            {/* Cartes de contact avec animation fade-in et slide-up */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Carte Téléphone */}
              <motion.div
                variants={fadeInVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-acier-clair/50"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-bleu-technique/10 p-4 rounded-full">
                    <Phone className="w-8 h-8 text-bleu-technique" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-anthracite mb-3">
                  Appelez-nous
                </h3>
                <a
                  href="tel:+21671XXXXXX"
                  className="text-2xl font-bold text-bleu-technique hover:text-orange-securite transition-colors duration-200 block mb-3"
                >
                  +216 71 XXX XXX
                </a>
                <div className="flex items-center justify-center text-anthracite/70">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Du Lundi au Vendredi, de 8h à 17h</span>
                </div>
              </motion.div>

              {/* Carte Email */}
              <motion.div
                variants={fadeInVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-acier-clair/50"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-securite/10 p-4 rounded-full">
                    <Mail className="w-8 h-8 text-orange-securite" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-anthracite mb-3">
                  Envoyez-nous un Email
                </h3>
                <a
                  href="mailto:support@cometa.tn"
                  className="text-xl font-bold text-orange-securite hover:text-bleu-technique transition-colors duration-200 block mb-3"
                >
                  support@cometa.tn
                </a>
                <div className="flex items-center justify-center text-anthracite/70">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Réponse sous 24h ouvrées</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOC 2 : FAQ Dynamique */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Titre de la section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-anthracite mb-4">
                Questions Fréquentes (FAQ)
              </h2>
            </motion.div>

            {/* Liste des FAQ */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {faqData.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  isOpen={openFAQ === faq.id}
                  onToggle={() => toggleFAQ(faq.id)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOC 3 : Documentations */}
      <section className="py-16 lg:py-24 bg-acier-clair/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Titre de la section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-anthracite mb-4">
                Téléchargez nos Documentations Techniques.
              </h2>
            </motion.div>

            {/* Barre de recherche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-md mx-auto mb-12"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anthracite/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-acier-clair focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:border-bleu-technique transition-colors duration-200 text-anthracite placeholder-anthracite placeholder-opacity-60"
                />
              </div>
            </motion.div>

            {/* Grille des documentations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredDocumentation.map((doc, index) => (
                <DocumentationCard key={doc.id} doc={doc} index={index} />
              ))}
            </motion.div>

            {/* Message si aucune documentation trouvée */}
            {filteredDocumentation.length === 0 && searchTerm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-anthracite/60 text-lg">
                  Aucune documentation trouvée pour "{searchTerm}".
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// Composant pour les éléments FAQ
const FAQItem = ({ 
  faq, 
  index, 
  isOpen, 
  onToggle 
}: { 
  faq: FAQItem; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-acier-clair/50 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-acier-clair/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h3 className="text-lg font-bold text-anthracite pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-bleu-technique" />
          ) : (
            <Plus className="w-5 h-5 text-bleu-technique" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-anthracite/80 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Composant pour les cartes de documentation
const DocumentationCard = ({ doc, index }: { doc: Documentation; index: number }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-acier-clair/50"
    >
      <div className="flex items-start mb-4">
        <div className="bg-bleu-technique/10 p-3 rounded-lg mr-4 flex-shrink-0">
          <FileText className="w-6 h-6 text-bleu-technique" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-anthracite mb-2 leading-tight">
            {doc.title}
          </h3>
          <p className="text-anthracite/70 text-sm mb-3 leading-relaxed">
            {doc.description}
          </p>
          <div className="flex items-center text-anthracite/60 text-sm mb-4">
            <span className="bg-acier-clair px-2 py-1 rounded text-xs mr-2">
              {doc.format}
            </span>
            <span>{doc.size}</span>
          </div>
        </div>
      </div>
      
      <a
        href={doc.downloadUrl}
        download
        className="flex items-center justify-center w-full bg-bleu-technique text-white py-3 rounded-lg font-medium hover:bg-bleu-technique/90 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 transition-all duration-200 transform hover:scale-105 group"
        aria-label={`Télécharger ${doc.title}`}
      >
        <Download className="w-4 h-4 mr-2 transform group-hover:translate-y-0.5 transition-transform duration-200" />
        <span>Télécharger</span>
      </a>
    </motion.div>
  );
}; 