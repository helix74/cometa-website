import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cometa.tn'),
  title: "Cometa : Automatisme, Fermetures & Construction Métallique en Tunisie",
  description: "Cometa est votre partenaire unique en Tunisie pour toutes vos solutions de portes, portails, automatismes et constructions métalliques. Qualité, expertise et service après-vente réactif.",
  keywords: "Cometa, automatisme, fermetures, portes, portails, construction métallique, Tunisie, industriel, résidentiel, SAV, devis",
  authors: [{ name: "Cometa" }],
  creator: "Cometa",
  publisher: "Cometa",
  robots: "index, follow",
  
  // Open Graph pour le partage social
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://cometa.tn",
    siteName: "Cometa",
    title: "Cometa : Automatisme, Fermetures & Construction Métallique en Tunisie",
    description: "Cometa est votre partenaire unique en Tunisie pour toutes vos solutions de portes, portails, automatismes et constructions métalliques. Qualité, expertise et service après-vente réactif.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cometa - Automatisme et Construction Métallique en Tunisie",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@cometa_tn",
    creator: "@cometa_tn",
    title: "Cometa : Automatisme, Fermetures & Construction Métallique en Tunisie",
    description: "Cometa est votre partenaire unique en Tunisie pour toutes vos solutions de portes, portails, automatismes et constructions métalliques.",
    images: ["/images/twitter-image.jpg"],
  },
  
  // Autres métadonnées
  alternates: {
    canonical: "https://cometa.tn",
  },
  
  // Icônes
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Métadonnées supplémentaires pour le SEO local */}
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunisie" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />
        
        {/* Preconnect aux domaines externes pour de meilleures performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data - Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cometa",
              description: "Spécialiste en automatismes, fermetures et construction métallique en Tunisie",
              url: "https://cometa.tn",
              telephone: "+216 71 123 456",
              email: "contact@cometa.tn",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Avenue Habib Bourguiba",
                addressLocality: "Le Bardo",
                postalCode: "2000",
                addressCountry: "TN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "36.8065",
                longitude: "10.1815"
              },
              openingHours: "Mo-Fr 08:00-17:00, Sa 08:00-12:00",
              serviceArea: {
                "@type": "Country",
                name: "Tunisie"
              },
              priceRange: "$$"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
