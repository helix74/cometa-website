import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espace Pro | Cometa - Services Exclusifs pour Professionnels B2B',
  description: 'Accédez à l\'espace professionnel Cometa : devis express, tarifs préférentiels, ressources techniques et support dédié. Connexion sécurisée pour partenaires B2B.',
  keywords: [
    'espace pro Cometa',
    'services B2B automatisme',
    'connexion professionnelle Cometa',
    'tarifs préférentiels professionnels',
    'devis express B2B',
    'ressources techniques pro',
    'support dédié professionnels',
    'catalogue professionnel 2025',
    'partenaire automatisme Tunisie',
    'compte professionnel Cometa'
  ],
  openGraph: {
    title: 'Espace Pro | Cometa - Services Exclusifs pour Professionnels',
    description: 'Accédez à des services exclusifs : devis express, tarifs préférentiels, ressources techniques et support dédié pour professionnels.',
    type: 'website',
    locale: 'fr_TN',
    siteName: 'Cometa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espace Pro | Cometa - Services B2B Exclusifs',
    description: 'Services professionnels exclusifs : devis express, tarifs préférentiels et support dédié.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/espace-pro',
  },
};

export default function EspaceProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 