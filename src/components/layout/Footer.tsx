'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const Footer = ({ className }: Props = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerSections = [
    {
      title: "Contact",
      items: [
        { text: "123 Avenue Habib Bourguiba", type: "address" },
        { text: "2000 Le Bardo, Tunisie", type: "address" },
        { text: "+216 71 123 456", type: "phone", href: "tel:+21671123456" },
        { text: "contact@cometa.tn", type: "email", href: "mailto:contact@cometa.tn" },
      ]
    },
    {
      title: "Services",
      items: [
        { text: "Automatismes", href: "/produits/automatismes" },
        { text: "Portes & Portails", href: "/produits/portes-portails" },
        { text: "Construction Métallique", href: "/produits/construction-metallique" },
        { text: "Maintenance & SAV", href: "/support" },
      ]
    },
    {
      title: "Entreprise",
      items: [
        { text: "Espace Pro", href: "/espace-pro" },
        { text: "Blog", href: "/blog" },
        { text: "Recrutement", href: "/recrutement" },
        { text: "Nos Certifications", href: "/certifications" },
      ]
    },
    {
      title: "Légal",
      items: [
        { text: "Mentions Légales", href: "/mentions-legales" },
        { text: "Politique de Confidentialité", href: "/politique-confidentialite" },
        { text: "CGU", href: "/cgu" },
        { text: "CGV", href: "/cgv" },
      ]
    }
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "https://facebook.com/cometa.tn", 
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/company/cometa-tn", 
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    }
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn("bg-anthracite text-white", className)}
    >
      <div className="container mx-auto px-4 lg:px-6 py-12">
        {/* Logo et description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 lg:mb-12"
        >
          <div className="flex items-center mb-4">
            <Link href="/" className="focus-visible">
              <Image
                src="/images/logo.png"
                alt="Logo Cometa"
                width={160}
                height={80}
                className="h-16 w-auto filter brightness-0 invert transition-all duration-300 hover:scale-105"
              />
            </Link>
          </div>
          <p className="text-acier-clair max-w-2xl text-lg">
            Spécialiste en automatismes, fermetures et construction métallique en Tunisie. 
            Votre partenaire de confiance pour des solutions durables et innovantes.
          </p>
        </motion.div>

        {/* Sections principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-orange-securite">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-acier-clair hover:text-white transition-colors duration-300 focus-visible"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <span className="text-acier-clair">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-gray-700 pt-8 mb-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-orange-securite">
            Suivez-nous
          </h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-bleu-technique transition-all duration-300 focus-visible hover:scale-110"
                aria-label={`Suivez-nous sur ${social.name}`}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-700 pt-6 text-center"
        >
          <p className="text-acier-clair">
            © {new Date().getFullYear()} Cometa. Tous droits réservés. 
            Conçu avec ❤️ en Tunisie.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 