# Cometa - Site Web d'Entreprise

Site web officiel de **Cometa**, spécialiste en automatismes, fermetures industrielles et résidentielles, et construction métallique en Tunisie.

## 🚀 Technologies Utilisées

- **Next.js 15** avec App Router
- **TypeScript** strict
- **Tailwind CSS** avec palette personnalisée
- **Framer Motion** pour les animations
- **React 19** avec hooks modernes

## 🎨 Palette de Couleurs

- **anthracite**: `#1A202C` (Couleur principale)
- **acier-clair**: `#E2E8F0` (Couleur secondaire)
- **bleu-technique**: `#3182CE` (Accent)
- **orange-securite**: `#F6AD55` (CTA/Boutons)

## 📁 Structure du Projet

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout principal avec SEO
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/
│   ├── layout/            # Composants de layout
│   │   ├── Header.tsx     # Navigation principale
│   │   └── Footer.tsx     # Footer complet
│   ├── ui/                # Composants UI réutilisables
│   └── sections/          # Sections de pages
├── lib/
│   └── utils.ts           # Utilitaires (cn, formatters...)
public/
└── images/
    └── logo.svg           # Logo de l'entreprise
```

## 🛠️ Installation et Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn
- VS Code (recommandé)

### Installation
```bash
# Cloner le projet
git clone [repository-url]
cd cometa

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts Disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
```

## 🎯 Fonctionnalités Implémentées

### ✅ SEO & Performance
- Métadonnées complètes (title, description, keywords)
- Open Graph et Twitter Cards
- Données structurées Schema.org
- Optimisation Core Web Vitals
- Images optimisées avec `next/image`

### ✅ Design & UX
- Design responsive mobile-first
- Animations fluides avec Framer Motion
- Navigation sticky avec effet scroll
- Menu burger animé pour mobile
- Palette de couleurs cohérente

### ✅ Accessibilité (A11y)
- Navigation clavier complète
- Attributs ARIA appropriés
- Contrastes conformes WCAG
- Focus visible optimisé

### ✅ Développement
- TypeScript strict avec interfaces
- Fonction `cn()` pour classes conditionnelles
- Structure modulaire et réutilisable
- Utilitaires pour formatage tunisien

## 🔧 Configuration VSCode

Les extensions recommandées sont automatiquement suggérées :
- **Tailwind CSS IntelliSense** : Autocomplétion Tailwind
- **Prettier** : Formatage de code
- **TypeScript** : Support TypeScript avancé
- **Auto Rename Tag** : Renommage HTML automatique

### Résolution des Erreurs CSS

Si vous voyez des erreurs `Unknown at rule @tailwind` :
1. Installez l'extension **Tailwind CSS IntelliSense**
2. Redémarrez VS Code
3. Les configurations dans `.vscode/settings.json` devraient résoudre le problème

## 📋 Règles de Développement

### Code Quality
- ✅ TypeScript strict obligatoire
- ✅ Composants fonctionnels avec arrow functions
- ✅ Interface `Props` pour chaque composant
- ✅ Code sémantique et accessible
- ❌ Pas de `any` TypeScript
- ❌ Pas de styles inline
- ❌ Pas de `console.log` en production

### Structure
- Composants UI → `src/components/ui/`
- Sections → `src/components/sections/`
- Layout → `src/components/layout/`
- Utilitaires → `src/lib/`
- Images → `public/images/`

### Naming Conventions
- **Composants** : PascalCase (`Header.tsx`)
- **Pages Next.js** : kebab-case (`contact-devis.tsx`)
- **Variables** : camelCase (`isMenuOpen`)
- **Constantes** : UPPER_SNAKE_CASE (`API_ENDPOINTS`)

## 🎨 Utilisation de Tailwind

### Classes Personnalisées Disponibles
```css
text-anthracite, bg-anthracite
text-acier-clair, bg-acier-clair  
text-bleu-technique, bg-bleu-technique
text-orange-securite, bg-orange-securite
```

### Animations
```css
animate-slide-down    /* Header au chargement */
animate-fade-in       /* Éléments au scroll */
animate-fade-in-up    /* Footer et sections */
```

### Fonction Utilitaire
```typescript
import { cn } from '@/lib/utils'

// Combiner des classes conditionnelles
className={cn(
  'base-classes',
  condition && 'conditional-classes',
  props.className
)}
```

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Build Local
```bash
npm run build
npm run start
```

## 📞 Contact & Support

- **Site Web** : [cometa.tn](https://cometa.tn)
- **Email** : contact@cometa.tn
- **Téléphone** : +216 71 123 456
- **Adresse** : 123 Avenue Habib Bourguiba, 2000 Le Bardo, Tunisie

---

© 2025 Cometa. Tous droits réservés. Conçu avec ❤️ en Tunisie.
