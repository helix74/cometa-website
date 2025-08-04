'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Download, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductData {
  name: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  mainImage: string;
  ctaButtons: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  }[];
}

interface Props {
  productData: ProductData;
  className?: string;
}

const ProductPresentationSection = ({ productData, className }: Props) => {
  return (
    <section className={cn("py-16 lg:py-24 bg-gradient-to-b from-acier-clair/30 to-white", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image du produit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={productData.mainImage}
                  alt={`${productData.name} - ${productData.subtitle}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Overlay subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/20 via-transparent to-transparent" />
              </div>
              
              {/* Badge de qualité */}
              <div className="absolute top-4 right-4 bg-orange-securite text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Produit Premium
              </div>
            </motion.div>

            {/* Contenu textuel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Titre principal */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-anthracite mb-4 leading-tight">
                  {productData.name} : {productData.subtitle}
                </h1>
                <div className="w-24 h-1 bg-orange-securite mb-6"></div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-anthracite/80 leading-relaxed">
                {productData.description}
              </p>

              {/* Caractéristiques clés */}
              <div className="space-y-3">
                {productData.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-orange-securite rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-anthracite font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Boutons CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                {productData.ctaButtons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={cn(
                      "inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
                      button.variant === 'primary'
                        ? "bg-orange-securite text-white hover:bg-orange-600"
                        : "bg-white text-anthracite border-2 border-orange-securite hover:bg-orange-securite hover:text-white"
                    )}
                  >
                    {button.variant === 'primary' ? (
                      <MessageSquare className="w-5 h-5 mr-2" />
                    ) : (
                      <Download className="w-5 h-5 mr-2" />
                    )}
                    {button.text}
                  </Link>
                ))}
              </motion.div>

              {/* Informations supplémentaires */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="flex items-center space-x-6 pt-6 border-t border-acier-clair text-sm text-anthracite/60"
              >
                <span>✓ Garantie 10 ans</span>
                <span>✓ Installation professionnelle</span>
                <span>✓ Service après-vente</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentationSection; 