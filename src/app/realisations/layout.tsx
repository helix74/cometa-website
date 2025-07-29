import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Réalisations | Cometa - Projets d\'Automatisme et Fermetures en Tunisie',
  description: 'Découvrez nos projets de référence en automatisme, fermetures industrielles et résidentielles, et construction métallique. Excellence et expertise Cometa depuis plus de 20 ans.',
  keywords: [
    'réalisations Cometa',
    'projets automatisme Tunisie',
    'fermetures industrielles projets',
    'portes automatiques réalisations',
    'construction métallique projets',
    'automatisme résidentiel Tunisie',
    'contrôle accès projets',
    'portails automatiques réalisations'
  ],
  openGraph: {
    title: 'Nos Réalisations | Cometa - Projets d\'Automatisme et Fermetures',
    description: 'Découvrez nos projets de référence en automatisme, fermetures industrielles et résidentielles, et construction métallique.',
    type: 'website',
    locale: 'fr_TN',
    siteName: 'Cometa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Réalisations | Cometa - Projets d\'Automatisme et Fermetures',
    description: 'Découvrez nos projets de référence en automatisme, fermetures industrielles et résidentielles.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/realisations',
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 