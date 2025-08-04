'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  LogIn, 
  Eye, 
  EyeOff, 
  Clock, 
  Euro, 
  Truck, 
  Headphones,
  Download,
  FileText,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

// Types pour le formulaire de connexion
interface LoginData {
  email: string;
  password: string;
}

interface LoginErrors {
  [key: string]: string;
}

// Types pour les services B2B
interface B2BService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Types pour les ressources techniques
interface TechnicalResource {
  id: string;
  title: string;
  format: string;
  size: string;
  downloadUrl: string;
}

// Données des services B2B
const b2bServices: B2BService[] = [
  {
    id: '1',
    icon: <Clock className="w-8 h-8 text-bleu-technique" />,
    title: 'Devis Express',
    description: 'Obtenez vos devis en un temps record grâce à notre plateforme dédiée.'
  },
  {
    id: '2',
    icon: <Euro className="w-8 h-8 text-bleu-technique" />,
    title: 'Tarifs Préférentiels',
    description: 'Bénéficiez de conditions tarifaires avantageuses sur l\'ensemble de notre catalogue.'
  },
  {
    id: '3',
    icon: <Truck className="w-8 h-8 text-bleu-technique" />,
    title: 'Livraison sur Chantier',
    description: 'Un service logistique optimisé pour vos chantiers partout en Tunisie.'
  },
  {
    id: '4',
    icon: <Headphones className="w-8 h-8 text-bleu-technique" />,
    title: 'Support Technique Dédié',
    description: 'Une équipe d\'experts à votre écoute pour un accompagnement personnalisé.'
  }
];

// Données des ressources techniques
const technicalResources: TechnicalResource[] = [
  {
    id: '1',
    title: 'Catalogue Général Professionnel 2025',
    format: 'PDF',
    size: '15 MB',
    downloadUrl: '/docs/catalogue-pro-2025.pdf'
  },
  {
    id: '2',
    title: 'Fiche Technique Motorisation Industrielle',
    format: 'PDF',
    size: '1.2 MB',
    downloadUrl: '/docs/fiche-technique-motorisation.pdf'
  },
  {
    id: '3',
    title: 'Guide d\'Installation Portes Coupe-Feu',
    format: 'PDF',
    size: '3.8 MB',
    downloadUrl: '/docs/guide-installation-coupe-feu.pdf'
  },
  {
    id: '4',
    title: 'Certification ISO 9001 Cometa',
    format: 'PDF',
    size: '0.5 MB',
    downloadUrl: '/docs/certification-iso-9001.pdf'
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

export default function EspaceProPage() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gestion des changements du formulaire de connexion
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    // Supprimer l'erreur si le champ est maintenant rempli
    if (errors[name] && value.trim()) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation du formulaire de connexion
  const validateLogin = (): boolean => {
    const newErrors: LoginErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!loginData.password.trim()) {
      newErrors.password = 'Le mot de passe est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire de connexion
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateLogin()) return;

    setIsSubmitting(true);

    try {
      // Simulation de connexion (remplacer par votre logique backend)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirection vers tableau de bord pro (à implémenter)
      console.log('Connexion réussie', loginData);
      
    } catch (error) {
      console.error('Erreur de connexion', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* BLOC 1 : Accès Professionnel */}
      <section className="bg-gradient-to-b from-bleu-technique/10 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                    Espace Pro Cometa : Votre Partenaire au Quotidien.
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
                    Accédez à des services exclusifs, des ressources techniques et un support dédié 
                    pour tous vos projets professionnels.
                  </p>
                </motion.div>
              </div>

              {/* Formulaire de connexion avec animation fade-in et slide-up */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="bg-white p-8 rounded-xl shadow-xl border border-acier-clair/50"
              >
                <h2 className="text-2xl font-bold text-anthracite mb-6 text-center">
                  Connexion Espace Client
                </h2>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-anthracite mb-2">
                      Email Professionnel
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 text-anthracite placeholder-anthracite placeholder-opacity-60 ${
                        errors.email ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                      }`}
                      placeholder="Votre email professionnel"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Mot de passe */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-anthracite mb-2">
                      Mot de Passe
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 pr-12 text-anthracite placeholder-anthracite placeholder-opacity-60 ${
                          errors.password ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                        }`}
                        placeholder="Votre mot de passe"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-anthracite/60 hover:text-anthracite transition-colors duration-200"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                  </div>

                  {/* Bouton de connexion */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-bleu-technique text-white py-3 rounded-lg font-bold hover:bg-bleu-technique/90 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Connexion...
                      </>
                    ) : (
                      <>
                        <LogIn className="w-5 h-5 mr-2" />
                        Se Connecter
                      </>
                    )}
                  </button>

                  {/* Liens utiles */}
                  <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-anthracite/70 space-y-2 sm:space-y-0">
                    <Link 
                      href="/mot-de-passe-oublie" 
                      className="hover:text-bleu-technique transition-colors duration-200"
                    >
                      Mot de passe oublié ?
                    </Link>
                    <span className="hidden sm:inline">|</span>
                    <Link 
                      href="/creer-compte-pro" 
                      className="hover:text-bleu-technique transition-colors duration-200"
                    >
                      Créer un compte pro
                    </Link>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 2 : Services B2B */}
      <section className="py-16 lg:py-24">
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
                Des Services Pensés pour les Professionnels.
              </h2>
            </motion.div>

            {/* Grille des services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {b2bServices.map((service, index) => (
                <B2BServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOC 3 : Ressources Techniques */}
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
                Vos Ressources Techniques à Portée de Main.
              </h2>
            </motion.div>

            {/* Grille des ressources */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {technicalResources.map((resource, index) => (
                <TechnicalResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOC 4 : Contact Commercial */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-bleu-technique to-bleu-technique/90">
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
                Une Question Spécifique ? Contactez notre Équipe Commerciale Pro.
              </h2>
            </motion.div>

            {/* Description avec animation fade-in et slide-up (délai) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed">
                Nos experts sont à votre disposition pour vous accompagner dans vos projets les plus complexes.
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
                href="/contact?target=pro"
                className="inline-flex items-center bg-orange-securite text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-securite/90 focus:outline-none focus:ring-2 focus:ring-orange-securite/50 focus:ring-offset-2 focus:ring-offset-bleu-technique transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
              >
                <span>Contacter un Commercial</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Informations de contact supplémentaires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80"
            >
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+216 71 XXX XXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>pro@cometa.tn</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Composant pour les cartes de services B2B
const B2BServiceCard = ({ service, index }: { service: B2BService; index: number }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-acier-clair/50 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-bleu-technique/10 p-4 rounded-full">
          {service.icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-bleu-technique mb-3">
        {service.title}
      </h3>
      <p className="text-anthracite/80 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

// Composant pour les cartes de ressources techniques
const TechnicalResourceCard = ({ resource, index }: { resource: TechnicalResource; index: number }) => {
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
            {resource.title}
          </h3>
          <div className="flex items-center text-anthracite/60 text-sm mb-4">
            <span className="bg-acier-clair px-2 py-1 rounded text-xs mr-2">
              {resource.format}
            </span>
            <span>{resource.size}</span>
          </div>
        </div>
      </div>
      
      <a
        href={resource.downloadUrl}
        download
        className="flex items-center justify-center w-full bg-bleu-technique text-white py-3 rounded-lg font-medium hover:bg-bleu-technique/90 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 transition-all duration-200 transform hover:scale-105 group"
        aria-label={`Télécharger ${resource.title}`}
      >
        <Download className="w-4 h-4 mr-2 transform group-hover:translate-y-0.5 transition-transform duration-200" />
        <span>Télécharger</span>
      </a>
    </motion.div>
  );
}; 