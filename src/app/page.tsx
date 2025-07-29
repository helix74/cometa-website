import HeroSection from '@/components/sections/HeroSection';
import ProductCategoriesSection from '@/components/sections/ProductCategoriesSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import DifferentiationSection from '@/components/sections/DifferentiationSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <HeroSection />

      {/* Section Catégories de Produits */}
      <ProductCategoriesSection />

      {/* Section Preuve Sociale */}
      <SocialProofSection />

      {/* Section Différenciation */}
      <DifferentiationSection />

      {/* Section CTA */}
      <section className="py-20 bg-bleu-technique text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <a 
            href="/contact" 
            className="btn-primary bg-orange-securite hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 group"
          >
            <span>Obtenir un Devis Gratuit</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
