import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Société | Cometa - 25 Ans d\'Expertise en Automatisme et Fermetures',
  description: 'Découvrez l\'histoire de Cometa, leader tunisien en automatisme et fermetures depuis 1998. 25 ans d\'innovation, 1000+ projets réalisés, expertise européenne et service de qualité.',
  keywords: [
    'société Cometa',
    'histoire Cometa Tunisie',
    'entreprise automatisme Tunisie',
    'leader fermetures industrielles',
    '25 ans expérience automatisme',
    'bureau d\'étude Cometa',
    'construction métallique Tunisie',
    'qualité européenne automatisme',
    'service après-vente Cometa'
  ],
  openGraph: {
    title: 'La Société | Cometa - 25 Ans d\'Expertise en Automatisme',
    description: 'Découvrez l\'histoire de Cometa, leader tunisien en automatisme et fermetures depuis 1998. 25 ans d\'innovation et d\'expertise.',
    type: 'website',
    locale: 'fr_TN',
    siteName: 'Cometa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Société | Cometa - 25 Ans d\'Expertise en Automatisme',
    description: 'Découvrez l\'histoire de Cometa, leader tunisien en automatisme et fermetures depuis 1998.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/societe',
  },
};

export default function SocieteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 