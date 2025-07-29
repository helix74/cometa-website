import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support & SAV | Cometa - Assistance Technique et Service Après-Vente',
  description: 'Besoin d\'aide ? Notre équipe support Cometa vous accompagne : dépannage, FAQ, documentations techniques. Support téléphonique et email, réponse sous 24h.',
  keywords: [
    'support Cometa',
    'service après-vente Cometa',
    'assistance technique automatisme',
    'dépannage porte garage Tunisie',
    'FAQ Cometa',
    'documentation technique Cometa',
    'support client fermetures',
    'aide installation automatisme',
    'manuel utilisation Cometa',
    'contact support Tunisie'
  ],
  openGraph: {
    title: 'Support & SAV | Cometa - Assistance Technique et Service Après-Vente',
    description: 'Notre équipe support vous accompagne : dépannage, FAQ, documentations techniques. Support téléphonique et email disponible.',
    type: 'website',
    locale: 'fr_TN',
    siteName: 'Cometa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support & SAV | Cometa - Assistance Technique',
    description: 'Notre équipe support vous accompagne : dépannage, FAQ, documentations techniques disponibles.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/support',
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 