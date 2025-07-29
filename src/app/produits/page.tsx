import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ProductCategoriesGrid from '@/components/sections/ProductCategoriesGrid';
import ProductCatalogCTA from '@/components/sections/ProductCatalogCTA';

// Import dynamique des composants lourds
const ProductSearchAndFilters = dynamic(() => import('@/components/sections/ProductSearchAndFilters'), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 h-96 rounded-lg">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-bleu-technique border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
});

const ProductGrid = dynamic(() => import('@/components/sections/ProductGrid'), {
  loading: () => (
    <div className="animate-pulse bg-acier-clair h-96 rounded-lg">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-bleu-technique border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
});

// Métadonnées enrichies pour le SEO
export const metadata: Metadata = {
  title: 'Catalogue Produits Cometa | Automatisme & Fermetures Tunisie',
  description: 'Découvrez notre gamme complète de portes, automatismes et solutions de fermetures. Devis gratuit en 24h.',
  keywords: [
    'catalogue produits',
    'portes garage',
    'automatismes',
    'fermetures industrielles',
    'construction métallique',
    'Tunisie',
    'Cometa',
    'devis gratuit',
    'portes sectionnelles',
    'rideaux métalliques'
  ],
  openGraph: {
    title: 'Catalogue Produits - Cometa',
    description: 'Découvrez notre gamme complète de produits pour tous vos besoins en automatisme et fermetures.',
    type: 'website',
    images: [
      {
        url: '/images/og-catalogue.jpg',
        width: 1200,
        height: 630,
        alt: 'Catalogue Produits Cometa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalogue Produits Cometa',
    description: 'Solutions complètes en automatisme et fermetures',
    images: ['/images/og-catalogue.jpg']
  }
};

// Données structurées JSON-LD pour le SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Catalogue Produits Cometa',
  description: 'Catalogue complet des produits d\'automatisme et fermetures Cometa',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Portes & Fermetures',
      description: 'Portes de garage, rideaux métalliques et solutions de fermeture',
      url: 'https://cometa.tn/produits/portes-fermetures'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Automatismes & Contrôle d\'Accès',
      description: 'Solutions de motorisation et contrôle d\'accès',
      url: 'https://cometa.tn/produits/automatismes'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Aménagements Extérieurs',
      description: 'Stores, pergolas et solutions d\'ombrage',
      url: 'https://cometa.tn/produits/amenagements-exterieurs'
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Construction Métallique',
      description: 'Solutions de construction métallique sur mesure',
      url: 'https://cometa.tn/produits/construction-metallique'
    }
  ]
};

export default function CataloguePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* En-tête de la Page Catalogue */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-anthracite mb-6">
                Catalogue Produits Cometa
              </h1>
              <div className="w-24 h-1 bg-orange-securite mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Découvrez l'intégralité de notre catalogue : solutions complètes pour l'automatisme, 
                les fermetures, les aménagements extérieurs et la construction métallique.
              </p>
            </div>
          </div>
        </section>

        {/* Grille des Catégories Principales */}
        <ProductCategoriesGrid />

        {/* Système de Recherche et Filtres - Chargé dynamiquement */}
        <Suspense fallback={
          <div className="animate-pulse bg-gray-100 h-96">
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-bleu-technique border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <ProductSearchAndFilters />
        </Suspense>

        {/* Grille des Produits - Chargée dynamiquement */}
        <Suspense fallback={
          <div className="animate-pulse bg-acier-clair h-96">
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-bleu-technique border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <ProductGrid />
        </Suspense>

        {/* Appel à l'Action Final */}
        <ProductCatalogCTA />
      </div>
    </>
  );
} 