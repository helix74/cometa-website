import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Devis | Cometa - Demandez votre Devis Personnalisé',
  description: 'Contactez Cometa pour votre projet d\'automatisme et fermetures. Formulaire intelligent, devis personnalisé, support technique. Réponse rapide garantie.',
  keywords: [
    'contact Cometa',
    'devis automatisme Tunisie',
    'demande devis portes garage',
    'contact fermetures industrielles',
    'devis portail automatique',
    'formulaire contact Cometa',
    'adresse Cometa Tunis',
    'telephone Cometa',
    'email contact automatisme',
    'devis gratuit fermetures'
  ],
  openGraph: {
    title: 'Contact & Devis | Cometa - Demandez votre Devis Personnalisé',
    description: 'Contactez Cometa pour votre projet d\'automatisme et fermetures. Formulaire intelligent et devis personnalisé disponible.',
    type: 'website',
    locale: 'fr_TN',
    siteName: 'Cometa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Devis | Cometa - Demandez votre Devis',
    description: 'Contactez Cometa pour votre projet d\'automatisme. Formulaire intelligent et devis personnalisé.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 