import { Metadata } from 'next';
import ProductPresentationSection from '@/components/sections/ProductPresentationSection';
import TechnicalSpecificationsSection from '@/components/sections/TechnicalSpecificationsSection';
import ProductCustomizationSection from '@/components/sections/ProductCustomizationSection';
import ProductGallerySection from '@/components/sections/ProductGallerySection';
import ProductFinalCTASection from '@/components/sections/ProductFinalCTASection';

export const metadata: Metadata = {
  title: 'Porte Sectionnelle ISO45 Cometa | Isolation 45mm - Résidentiel & Industriel',
  description: 'Découvrez la porte sectionnelle ISO45 : isolation thermique 45mm, design personnalisable, motorisation silencieuse. Devis gratuit en Tunisie.',
  keywords: [
    'porte sectionnelle ISO45',
    'porte garage isolée 45mm',
    'porte sectionnelle résidentielle',
    'porte garage motorisée',
    'isolation thermique garage',
    'porte sectionnelle personnalisable',
    'Cometa Tunisie',
    'devis porte garage',
    'installation porte sectionnelle'
  ],
  openGraph: {
    title: 'Porte Sectionnelle ISO45 - Isolation et Design | Cometa',
    description: 'Isolation thermique exceptionnelle de 45mm, design moderne personnalisable, motorisation silencieuse optionnelle.',
    type: 'website',
    images: [
      {
        url: '/images/produit-detail-porte-sectionnelle-iso45.jpg',
        width: 1200,
        height: 630,
        alt: 'Porte Sectionnelle ISO45 Cometa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Porte Sectionnelle ISO45 - Cometa',
    description: 'Isolation 45mm, design personnalisable, motorisation silencieuse',
    images: ['/images/produit-detail-porte-sectionnelle-iso45.jpg']
  }
};

// Données structurées JSON-LD pour le produit
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Porte Sectionnelle ISO45',
  description: 'Porte de garage sectionnelle avec isolation thermique et acoustique de 45mm, design moderne et personnalisable',
  brand: {
    '@type': 'Brand',
    name: 'Cometa'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Cometa',
    url: 'https://cometa.tn'
  },
  category: 'Portes de Garage Sectionnelles',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'TND',
    seller: {
      '@type': 'Organization',
      name: 'Cometa'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127'
  }
};

// Données du produit
const productData = {
  name: 'Porte Sectionnelle ISO45',
  subtitle: 'Isolation et Design',
  description: 'La porte de garage sectionnelle ISO45 de Cometa combine une isolation thermique et acoustique exceptionnelle avec un design moderne et personnalisable, idéale pour les résidences et les bâtiments industriels.',
  keyFeatures: [
    'Panneaux isolés de 45 mm d\'épaisseur',
    'Excellente performance thermique et acoustique',
    'Large choix de finitions et de couleurs',
    'Motorisation silencieuse et sécurisée (optionnel)',
    'Conforme aux normes de sécurité européennes'
  ],
  mainImage: '/images/produit-detail-porte-sectionnelle-iso45.jpg',
  ctaButtons: [
    {
      text: 'Demander un Devis',
      href: '/contact?type=devis&produit=iso45',
      variant: 'primary' as const
    },
    {
      text: 'Télécharger la Fiche Technique',
      href: '/docs/fiche-technique-iso45.pdf',
      variant: 'secondary' as const
    }
  ]
};

// Spécifications techniques
const technicalSpecs = [
  { characteristic: 'Épaisseur des panneaux', detail: '45 mm' },
  { characteristic: 'Matériau', detail: 'Acier galvanisé prélaqué' },
  { characteristic: 'Isolation thermique (valeur U)', detail: '0.51 W/(m².K)' },
  { characteristic: 'Isolation acoustique', detail: 'Jusqu\'à 25 dB' },
  { characteristic: 'Motorisation', detail: 'Optionnelle, moteur tubulaire silencieux' },
  { characteristic: 'Sécurité', detail: 'Système anti-pincement, parachute en cas de rupture de câble' },
  { characteristic: 'Dimensions disponibles', detail: 'Sur mesure (largeur jusqu\'à 6m, hauteur jusqu\'à 3m)' },
  { characteristic: 'Finitions', detail: 'Lisse, Woodgrain, Stucco, Micro-nervurée' }
];

// Options de personnalisation
const customizationOptions = [
  {
    title: 'Couleurs et Finitions',
    description: 'Choisissez parmi une large palette de couleurs RAL et des finitions variées (lisse, bois, stucco) pour une intégration parfaite à votre façade.',
    icon: '🎨'
  },
  {
    title: 'Motorisation et Accessoires',
    description: 'Optez pour une motorisation connectée, des télécommandes multi-canaux, des claviers à code ou des systèmes de détection d\'obstacles.',
    icon: '⚙️'
  },
  {
    title: 'Hublots et Portillons',
    description: 'Ajoutez des hublots design pour plus de luminosité ou un portillon intégré pour un accès piéton facile.',
    icon: '🚪'
  }
];

// Images de la galerie
const galleryImages = [
  {
    src: '/images/products/iso45-vue-exterieure.jpg',
    alt: 'ISO45 vue extérieure',
    title: 'Vue extérieure'
  },
  {
    src: '/images/products/iso45-vue-interieure.jpg',
    alt: 'ISO45 vue intérieure',
    title: 'Vue intérieure'
  },
  {
    src: '/images/products/iso45-detail-finition.jpg',
    alt: 'ISO45 détail finition',
    title: 'Détail finition'
  }
];

export default function PorteSectionnelleISO45Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BLOC 1 : Présentation du Produit */}
      <ProductPresentationSection 
        productData={productData}
      />

      {/* BLOC 2 : Caractéristiques Techniques Détaillées */}
      <TechnicalSpecificationsSection 
        specifications={technicalSpecs}
      />

      {/* BLOC 3 : Options et Personnalisation */}
      <ProductCustomizationSection 
        title="Personnalisez Votre Porte ISO45"
        options={customizationOptions}
      />

      {/* BLOC 4 : Galerie Photos / Vidéos */}
      <ProductGallerySection 
        title="Découvrez la Porte ISO45 en Images"
        images={galleryImages}
      />

      {/* BLOC 5 : Appel à l'Action Final */}
      <ProductFinalCTASection 
        title="Prêt à Installer Votre Porte Sectionnelle ISO45 ?"
        description="Contactez nos experts pour un conseil personnalisé et un devis gratuit, adapté à vos dimensions et vos préférences."
        ctaText="Obtenir un Devis Personnalisé"
        ctaHref="/contact?type=devis&produit=iso45"
      />
    </main>
  );
} 