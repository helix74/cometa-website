import { Metadata } from 'next';
import CategoryHeroSection from '@/components/sections/CategoryHeroSection';
import CategoryProductsGrid from '@/components/sections/CategoryProductsGrid';
import ProductGuideSelector from '@/components/sections/ProductGuideSelector';
import CategoryCTA from '@/components/sections/CategoryCTA';

export const metadata: Metadata = {
  title: 'Portes de Garage Cometa | Sectionnelles, Enroulement & Basculantes',
  description: 'Découvrez notre gamme complète de portes de garage : sectionnelles, à enroulement, basculantes et battantes. Installation professionnelle en Tunisie.',
  keywords: [
    'portes de garage',
    'porte sectionnelle',
    'porte enroulement',
    'porte basculante',
    'porte battante',
    'garage résidentiel',
    'garage industriel',
    'Cometa Tunisie',
    'installation porte garage',
    'motorisation porte garage'
  ],
  openGraph: {
    title: 'Portes de Garage Cometa - Sécurité et Confort',
    description: 'Solutions complètes de portes de garage adaptées à tous les besoins résidentiels et professionnels.',
    type: 'website',
    images: [
      {
        url: '/images/og-portes-garage.jpg',
        width: 1200,
        height: 630,
        alt: 'Portes de Garage Cometa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portes de Garage Cometa',
    description: 'Sécurité et confort au quotidien',
    images: ['/images/og-portes-garage.jpg']
  }
};

// Données structurées JSON-LD pour la catégorie
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Portes de Garage Cometa',
  description: 'Gamme complète de portes de garage : sectionnelles, à enroulement, basculantes et battantes',
  brand: {
    '@type': 'Brand',
    name: 'Cometa'
  },
  category: 'Portes & Fermetures',
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'TND',
    seller: {
      '@type': 'Organization',
      name: 'Cometa',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'TN'
      }
    }
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Isolation Thermique',
      value: 'Disponible'
    },
    {
      '@type': 'PropertyValue',
      name: 'Motorisation',
      value: 'Disponible'
    },
    {
      '@type': 'PropertyValue',
      name: 'Installation',
      value: 'Professionnelle'
    }
  ]
};

// Données des produits pour les portes de garage
const portesGarageProducts = [
  {
    id: 'porte-sectionnelle',
    name: 'Porte Sectionnelle',
    shortDescription: 'Isolation optimale, gain de place, motorisation facile. Idéale pour les garages résidentiels.',
    fullDescription: 'La porte sectionnelle offre une isolation thermique exceptionnelle et s\'ouvre verticalement pour un gain de place optimal.',
    features: [
      'Isolation thermique renforcée',
      'Ouverture verticale',
      'Compatible motorisation'
    ],
    image: '/images/products/porte-sectionnelle-detail.jpg',
    href: '/produits/portes-de-garage/sectionnelle',
    type: 'sectionnelle',
    motorisation: true,
    isolation: true,
    application: 'Résidentiel'
  },
  {
    id: 'porte-enroulement',
    name: 'Porte à Enroulement',
    shortDescription: 'Gain de place maximal, robustesse, sécurité renforcée. Parfaite pour les espaces restreints.',
    fullDescription: 'La porte à enroulement s\'enroule dans un caisson compact, libérant totalement l\'espace sous plafond.',
    features: [
      'Encombrement minimal',
      'Sécurité anti-effraction',
      'Manœuvre silencieuse'
    ],
    image: '/images/products/porte-enroulement-detail.jpg',
    href: '/produits/portes-de-garage/enroulement',
    type: 'enroulement',
    motorisation: true,
    isolation: false,
    application: 'Industriel'
  },
  {
    id: 'porte-basculante',
    name: 'Porte Basculante',
    shortDescription: 'Solution économique, fiable et éprouvée. Idéale pour les garages standards.',
    fullDescription: 'La porte basculante offre un excellent rapport qualité-prix avec une fiabilité éprouvée depuis des décennies.',
    features: [
      'Rapport qualité/prix optimal',
      'Installation simple',
      'Maintenance réduite'
    ],
    image: '/images/products/porte-basculante-detail.jpg',
    href: '/produits/portes-de-garage/basculante',
    type: 'basculante',
    motorisation: true,
    isolation: false,
    application: 'Résidentiel'
  },
  {
    id: 'porte-battante',
    name: 'Porte Battante',
    shortDescription: 'Style traditionnel, personnalisation maximale. Pour les garages avec caractère.',
    fullDescription: 'La porte battante permet une personnalisation complète du design avec des matériaux variés.',
    features: [
      'Design personnalisable',
      'Matériaux variés',
      'Ouverture traditionnelle'
    ],
    image: '/images/products/porte-battante-detail.jpg',
    href: '/produits/portes-de-garage/battante',
    type: 'battante',
    motorisation: false,
    isolation: false,
    application: 'Résidentiel'
  }
];

// Configuration des filtres
const filtresPortesGarage = [
  {
    id: 'type',
    name: 'Type de Porte',
    options: [
      { value: '', label: 'Tous les types' },
      { value: 'sectionnelle', label: 'Sectionnelle' },
      { value: 'enroulement', label: 'À enroulement' },
      { value: 'basculante', label: 'Basculante' },
      { value: 'battante', label: 'Battante' }
    ]
  },
  {
    id: 'motorisation',
    name: 'Motorisation',
    options: [
      { value: '', label: 'Toutes' },
      { value: 'oui', label: 'Motorisée' },
      { value: 'non', label: 'Manuelle' }
    ]
  },
  {
    id: 'application',
    name: 'Application',
    options: [
      { value: '', label: 'Toutes' },
      { value: 'Résidentiel', label: 'Résidentiel' },
      { value: 'Industriel', label: 'Industriel' }
    ]
  }
];

export default function PortesDeGaragePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Section En-tête de Catégorie */}
        <CategoryHeroSection 
          category="Portes de Garage"
          title="Portes de Garage Cometa : Sécurité et Confort au Quotidien"
          description="Découvrez notre gamme complète de portes de garage : sectionnelles, à enroulement, basculantes et battantes. Des solutions adaptées à tous les besoins résidentiels et professionnels."
          features={[
            "Isolation Thermique",
            "Motorisation Disponible", 
            "Installation Professionnelle"
          ]}
          backgroundImage="/images/categories/portes-garage-hero.jpg"
        />

        {/* Section Guide de Choix Interactif */}
        <ProductGuideSelector />

        {/* Section Filtres et Grille de Produits */}
        <CategoryProductsGrid
          categorySlug="portes-de-garage"
          categoryTitle="Portes de Garage"
          products={portesGarageProducts}
          filters={filtresPortesGarage}
        />

        {/* Section Appel à l'Action */}
        <CategoryCTA
          category="Portes de Garage"
          title="Besoin d'un Conseil pour Votre Porte de Garage ?"
          description="Nos experts vous accompagnent dans le choix, l'installation et la maintenance de votre porte de garage. Devis gratuit sous 24h."
          primaryCTA={{
            text: "Demander un Devis Gratuit",
            href: "/contact?type=devis&categorie=portes-de-garage"
          }}
          secondaryCTA={{
            text: "Appeler un Expert",
            href: "tel:+21670123456"
          }}
        />
      </div>
    </>
  );
} 