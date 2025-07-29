import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations pour Vercel
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Optimisation des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance et sécurité
  poweredByHeader: false,
  compress: true,
  
  // Temporairement désactiver ESLint pour le déploiement
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
