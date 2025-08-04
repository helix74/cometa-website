'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Types pour les choix de demande
type RequestType = 'devis' | 'question' | 'sav' | 'autre' | null;

interface RequestOption {
  value: RequestType;
  label: string;
  description: string;
}

// Types pour le formulaire
interface FormData {
  nom: string;
  email: string;
  telephone: string;
  societe: string;
  typeProduit: string;
  detailsProjet: string;
  referenceProduit: string;
  descriptionProbleme: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// Options de demande
const requestOptions: RequestOption[] = [
  {
    value: 'devis',
    label: 'Demande de Devis',
    description: 'Pour obtenir un devis personnalisé'
  },
  {
    value: 'question',
    label: 'Question Générale',
    description: 'Pour toute question sur nos produits'
  },
  {
    value: 'sav',
    label: 'Support & SAV',
    description: 'Pour un problème technique ou SAV'
  },
  {
    value: 'autre',
    label: 'Autre Demande',
    description: 'Pour toute autre demande'
  }
];

// Options de produits
const productOptions = [
  'Portes de Garage Sectionnelles',
  'Portes Industrielles',
  'Portails Automatiques',
  'Contrôle d\'Accès',
  'Barrières Automatiques',
  'Construction Métallique',
  'Aménagements Extérieurs',
  'Autre'
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

export default function ContactPage() {
  const [selectedRequest, setSelectedRequest] = useState<RequestType>(null);
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    societe: '',
    typeProduit: '',
    detailsProjet: '',
    referenceProduit: '',
    descriptionProbleme: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Vérifier les paramètres URL pour pré-sélectionner le type
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const type = urlParams.get('type');
      if (type === 'devis') {
        setSelectedRequest('devis');
      }
    }
  }, []);

  // Gestion des changements de formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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

  // Validation du formulaire
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Champs obligatoires communs
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est requis';

    // Champs spécifiques selon le type de demande
    if (selectedRequest === 'devis') {
      if (!formData.typeProduit) newErrors.typeProduit = 'Le type de produit est requis';
      if (!formData.detailsProjet.trim()) newErrors.detailsProjet = 'Les détails du projet sont requis';
    } else if (selectedRequest === 'sav') {
      if (!formData.descriptionProbleme.trim()) newErrors.descriptionProbleme = 'La description du problème est requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulation d'envoi (remplacer par votre logique backend)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Succès
      setSubmitStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        societe: '',
        typeProduit: '',
        detailsProjet: '',
        referenceProduit: '',
        descriptionProbleme: '',
        message: ''
      });
      setSelectedRequest(null);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* BLOC 1 : Choix de l'Objet */}
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
                Contactez Cometa : Votre Projet Commence Ici.
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
                Afin de mieux vous servir, veuillez nous indiquer la nature de votre demande :
              </p>
            </motion.div>

            {/* Boutons de choix avec animation fade-in et slide-up */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              transition={{ delay: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {requestOptions.map((option, index) => (
                <motion.button
                  key={option.value || 'autre'}
                  variants={fadeInVariants}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  onClick={() => setSelectedRequest(option.value)}
                  className={`
                    p-6 rounded-xl border-2 transition-all duration-200 text-center
                    focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:ring-offset-2
                    ${
                      selectedRequest === option.value
                        ? 'bg-bleu-technique text-white border-bleu-technique transform scale-105 shadow-lg'
                        : 'bg-white text-anthracite border-acier-clair hover:border-bleu-technique hover:shadow-md'
                    }
                  `}
                  aria-pressed={selectedRequest === option.value}
                >
                  <h3 className="font-bold text-lg mb-2">{option.label}</h3>
                  <p className={`text-sm ${
                    selectedRequest === option.value ? 'text-white/90' : 'text-anthracite/70'
                  }`}>
                    {option.description}
                  </p>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOC 2 : Formulaire de Contact Intelligent */}
      <AnimatePresence>
        {selectedRequest && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="py-16 lg:py-24 overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-xl shadow-lg border border-acier-clair/50"
                >
                  {/* Message de statut */}
                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mb-6 p-4 rounded-lg flex items-center ${
                          submitStatus === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle className="w-5 h-5 mr-2" />
                        ) : (
                          <AlertCircle className="w-5 h-5 mr-2" />
                        )}
                        <span>
                          {submitStatus === 'success' 
                            ? 'Votre demande a été envoyée avec succès !' 
                            : 'Une erreur s\'est produite. Veuillez réessayer.'}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Champs communs */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-anthracite mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 text-anthracite placeholder-anthracite placeholder-opacity-60 ${
                          errors.nom ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                        }`}
                        placeholder="Votre nom complet"
                      />
                      {errors.nom && <p className="text-red-600 text-sm mt-1">{errors.nom}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-anthracite mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 text-anthracite placeholder-anthracite placeholder-opacity-60 ${
                          errors.email ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                        }`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-anthracite mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 text-anthracite placeholder-anthracite placeholder-opacity-60 ${
                          errors.telephone ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                        }`}
                        placeholder="+216 XX XXX XXX"
                      />
                      {errors.telephone && <p className="text-red-600 text-sm mt-1">{errors.telephone}</p>}
                    </div>

                    <div>
                      <label htmlFor="societe" className="block text-sm font-medium text-anthracite mb-2">
                        Société (si applicable)
                      </label>
                      <input
                        type="text"
                        id="societe"
                        name="societe"
                        value={formData.societe}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-acier-clair focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:border-bleu-technique transition-colors duration-200 text-anthracite placeholder-anthracite placeholder-opacity-60"
                        placeholder="Nom de votre société"
                      />
                    </div>
                  </div>

                  {/* Champs spécifiques pour Devis */}
                  <AnimatePresence>
                    {selectedRequest === 'devis' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mb-6">
                          <label htmlFor="typeProduit" className="block text-sm font-medium text-anthracite mb-2">
                            Type de Produit Intéressé *
                          </label>
                          <select
                            id="typeProduit"
                            name="typeProduit"
                            value={formData.typeProduit}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 ${
                              errors.typeProduit ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                            }`}
                          >
                            <option value="">Sélectionnez un type</option>
                            {productOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                          {errors.typeProduit && <p className="text-red-600 text-sm mt-1">{errors.typeProduit}</p>}
                        </div>

                        <div className="mb-6">
                          <label htmlFor="detailsProjet" className="block text-sm font-medium text-anthracite mb-2">
                            Détails de votre projet *
                          </label>
                          <textarea
                            id="detailsProjet"
                            name="detailsProjet"
                            value={formData.detailsProjet}
                            onChange={handleInputChange}
                            rows={4}
                            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 resize-none ${
                              errors.detailsProjet ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                            }`}
                            placeholder="Décrivez votre projet en détail..."
                          />
                          {errors.detailsProjet && <p className="text-red-600 text-sm mt-1">{errors.detailsProjet}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Champs spécifiques pour SAV */}
                  <AnimatePresence>
                    {selectedRequest === 'sav' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mb-6">
                          <label htmlFor="referenceProduit" className="block text-sm font-medium text-anthracite mb-2">
                            Référence Produit / Numéro de Série
                          </label>
                          <input
                            type="text"
                            id="referenceProduit"
                            name="referenceProduit"
                            value={formData.referenceProduit}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-acier-clair focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:border-bleu-technique transition-colors duration-200 text-anthracite placeholder-anthracite placeholder-opacity-60"
                            placeholder="Ex: ISO45-2021-001"
                          />
                        </div>

                        <div className="mb-6">
                          <label htmlFor="descriptionProbleme" className="block text-sm font-medium text-anthracite mb-2">
                            Description du Problème *
                          </label>
                          <textarea
                            id="descriptionProbleme"
                            name="descriptionProbleme"
                            value={formData.descriptionProbleme}
                            onChange={handleInputChange}
                            rows={4}
                            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 resize-none ${
                              errors.descriptionProbleme ? 'border-red-400' : 'border-acier-clair focus:border-bleu-technique'
                            }`}
                            placeholder="Décrivez le problème rencontré..."
                          />
                          {errors.descriptionProbleme && <p className="text-red-600 text-sm mt-1">{errors.descriptionProbleme}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Message libre */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-anthracite mb-2">
                      Votre Message {selectedRequest === 'autre' && '*'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-acier-clair focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:border-bleu-technique transition-colors duration-200 resize-none text-anthracite placeholder-anthracite placeholder-opacity-60"
                      placeholder={selectedRequest === 'autre' 
                        ? "Décrivez votre demande..." 
                        : "Informations complémentaires (optionnel)..."
                      }
                    />
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-bleu-technique text-white py-4 rounded-lg font-bold text-lg hover:bg-bleu-technique/90 focus:outline-none focus:ring-2 focus:ring-bleu-technique/50 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer ma Demande
                      </>
                    )}
                  </button>
                </motion.form>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* BLOC 3 : Informations & Localisation */}
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
                Où nous trouver ?
              </h2>
              <p className="text-lg text-anthracite/80">
                N'hésitez pas à nous rendre visite dans nos locaux ou à nous contacter directement :
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Informations de contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-white p-8 rounded-xl shadow-lg border border-acier-clair/50"
              >
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-bleu-technique/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-bleu-technique" />
                    </div>
                    <div>
                      <h3 className="font-bold text-anthracite mb-1">Adresse</h3>
                      <p className="text-anthracite/80">
                        Rue de l'Industrie, Z.I. Charguia I<br />
                        2035 Tunis, Tunisie
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-bleu-technique/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-bleu-technique" />
                    </div>
                    <div>
                      <h3 className="font-bold text-anthracite mb-1">Téléphone</h3>
                      <a
                        href="tel:+21671XXXXXX"
                        className="text-bleu-technique hover:text-orange-securite transition-colors duration-200 font-medium"
                      >
                        +216 71 XXX XXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-securite/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-securite" />
                    </div>
                    <div>
                      <h3 className="font-bold text-anthracite mb-1">Email</h3>
                      <a
                        href="mailto:contact@cometa.tn"
                        className="text-orange-securite hover:text-bleu-technique transition-colors duration-200 font-medium"
                      >
                        contact@cometa.tn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-bleu-technique/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-bleu-technique" />
                    </div>
                    <div>
                      <h3 className="font-bold text-anthracite mb-1">Horaires</h3>
                      <p className="text-anthracite/80">
                        Lun-Ven : 8h00 - 17h00
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Carte Google Maps */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-acier-clair/50"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3461453179383!2d10.187437315468!3d36.86468537993596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd352a7efa1d31%3A0x8d8e1a95ed0b6db!2sCharguia%20I%2C%20Tunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Cometa - Zone Industrielle Charguia I, Tunis"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 