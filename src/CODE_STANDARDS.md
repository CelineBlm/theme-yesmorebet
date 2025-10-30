# Standards de Code - YesMoreBet

## 🎯 Objectif
Ce document établit les conventions et bonnes pratiques à suivre pour maintenir un code propre, maintenable et cohérent dans le projet YesMoreBet.

---

## 📁 Structure des fichiers

### Organisation
```
├── components/          # Composants réutilisables
│   ├── ui/             # Composants ShadCN
│   └── figma/          # Composants spécifiques Figma
├── pages/              # Pages principales de l'application
├── imports/            # Assets et SVG importés de Figma
└── styles/             # Styles globaux
```

### Nomenclature des fichiers
- **Composants** : PascalCase (`Header.tsx`, `NavLink.tsx`)
- **Pages** : PascalCase (`Home.tsx`, `Contact.tsx`)
- **Utilitaires** : camelCase (`utils.ts`, `helpers.ts`)
- **SVG/Assets** : kebab-case (`svg-xxxxx.ts`)

---

## ⚛️ Composants React

### Structure d'un composant

```tsx
// 1. Imports
import { Header } from "../components/Header";
import svgPaths from "../imports/svg-xxxxx";

// 2. Types/Interfaces
interface ComponentProps {
  onNavigate: (page: string) => void;
  title?: string;
}

// 3. Sous-composants (si nécessaire)
function SubComponent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

// 4. Composant principal
export function Component({ onNavigate, title }: ComponentProps) {
  // 4.1 Hooks
  const [state, setState] = useState<string>("");
  
  // 4.2 Fonctions
  const handleClick = () => {
    // logique
  };
  
  // 4.3 Render
  return (
    <div>
      {/* contenu */}
    </div>
  );
}
```

### Règles de création de composants

#### ✅ À FAIRE
- **Créer des composants réutilisables** pour éviter la duplication
- **Utiliser TypeScript** pour toutes les props
- **Nommer clairement** les composants (description de leur fonction)
- **Séparer la logique** du rendu
- **Extraire les sous-composants** quand pertinent

#### ❌ À ÉVITER
- Code dupliqué entre composants
- Props sans types
- Composants de plus de 300 lignes
- Logique métier mélangée avec le rendu
- Composants avec trop de responsabilités

### Exemple : Composant réutilisable

```tsx
// ✅ BON - Composant réutilisable
interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function Section({ title, icon, children }: SectionProps) {
  return (
    <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// ❌ MAUVAIS - Code dupliqué
function PageA() {
  return (
    <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8">
      <h2>Titre A</h2>
      {/* contenu */}
    </div>
  );
}

function PageB() {
  return (
    <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8">
      <h2>Titre B</h2>
      {/* contenu */}
    </div>
  );
}
```

---

## 🎨 Tailwind CSS

### Conventions de classes

#### Classes de base
```tsx
// ✅ Utiliser les classes Tailwind standard quand possible
<p className="text-sm text-gray-400">Texte</p>

// ❌ Éviter les valeurs arbitraires si une classe standard existe
<p className="text-[14px] text-[#99a1af]">Texte</p>
```

#### Valeurs personnalisées (palette YesMoreBet)
```tsx
// Couleurs principales
text-[#fdc700]         // Or principal
text-[#d08700]         // Or foncé
bg-[rgba(208,135,0,0.3)]  // Or avec transparence

// Couleurs texte
text-white             // Blanc pur
text-[#d1d5dc]        // Gris clair (texte secondaire)
text-[#99a1af]        // Gris moyen (labels)

// Backgrounds
bg-black              // Fond principal
bg-[rgba(0,0,0,0.5)] // Noir transparent
```

#### Organisation des classes
```tsx
// Ordre recommandé :
// 1. Layout (flex, grid, position)
// 2. Spacing (margin, padding)
// 3. Sizing (width, height)
// 4. Typography (text, font)
// 5. Visuals (bg, border, shadow)
// 6. Interactive (hover, focus, transition)

<div className="
  flex items-center gap-4
  px-8 py-4
  w-full max-w-6xl
  text-white font-['Quicksand']
  bg-gradient-to-r from-[#fdc700] to-[#d08700] rounded-lg border border-[rgba(208,135,0,0.3)]
  hover:shadow-lg transition-all
">
```

### Responsive Design
```tsx
// Mobile-first approach
<div className="
  text-sm                    // Mobile (défaut)
  md:text-base              // Tablet
  lg:text-lg                // Desktop
  px-4 md:px-8 lg:px-12    // Espacements adaptatifs
">
```

### Animations Hover
```tsx
// ✅ Boutons CTA principaux (gradient jaune/or)
<button className="
  bg-gradient-to-r from-[#fdc700] to-[#d08700]
  hover:shadow-lg 
  hover:scale-105 
  transition-all
">
  Appeler à l'action
</button>

// ✅ Boutons secondaires (transparent avec bordure)
<button className="
  bg-[rgba(255,255,255,0.1)] 
  border border-[rgba(208,135,0,0.3)]
  hover:bg-[rgba(255,255,255,0.15)]
  hover:scale-105 
  transition-all
">
  Action secondaire
</button>

// ❌ Éviter les animations trop agressives
<button className="hover:scale-150"> {/* Trop grand */}
```

**Règles pour les animations :**
- Toujours inclure `transition-all` pour des animations fluides
- Utiliser `hover:scale-105` (5% d'agrandissement) pour les boutons
- Ajouter `hover:shadow-lg` sur les boutons CTA principaux
- Les animations doivent être cohérentes sur tout le site

---

## 🔤 Typographie

### Ne PAS utiliser ces classes (sauf demande explicite)
- ❌ `text-2xl`, `text-3xl`, etc. (tailles de police)
- ❌ `font-bold`, `font-semibold`, etc. (poids de police)
- ❌ `leading-tight`, `leading-relaxed`, etc. (line-height)

**Raison** : La typographie est définie globalement dans `styles/globals.css`

### Exception : Police Quicksand
```tsx
// ✅ Utiliser font-['Quicksand'] pour cette police spécifique
<h2 className="font-['Quicksand']">Titre</h2>
```

---

## 🖼️ Images et SVG

### Images
```tsx
// ✅ Avec ImageWithFallback pour les nouvelles images
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
<ImageWithFallback src="..." alt="Description" />

// ✅ Imports Figma
import imgPhoto from "figma:asset/xxxxx.png";
<img src={imgPhoto} alt="Description" />
```

### SVG
```tsx
// ✅ Imports depuis fichiers
import svgPaths from "../imports/svg-xxxxx";

// ✅ Utilisation
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
  <path d={svgPaths.pathName} stroke="#FDC700" ... />
</svg>
```

### Attributs obligatoires
- **Images** : Toujours inclure `alt` descriptif
- **SVG décoratifs** : `aria-hidden="true"`
- **SVG interactifs** : `aria-label` approprié

---

## 🎭 État et Props

### Props Interface
```tsx
// ✅ Définir une interface pour chaque composant avec props
interface HeaderProps {
  onNavigate?: (page: string) => void;  // ? pour optionnel
  title: string;                         // obligatoire
}

export function Header({ onNavigate, title }: HeaderProps) {
  // ...
}
```

### État local
```tsx
// ✅ Typer les états
const [isOpen, setIsOpen] = useState<boolean>(false);
const [currentPage, setCurrentPage] = useState<Page>("home");

// ❌ Éviter les any
const [data, setData] = useState<any>(); // MAUVAIS
const [data, setData] = useState<DataType>(); // BON
```

---

## 🔗 Navigation

### Pattern de navigation
```tsx
// ✅ Utiliser onNavigate pour la navigation interne
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
  if (onNavigate) {
    e.preventDefault();
    onNavigate(page);
  }
};

<a href="/page" onClick={(e) => handleNavClick(e, 'page')}>
  Lien
</a>
```

### Liens externes
```tsx
// ✅ Toujours inclure target et rel pour liens externes
<a 
  href="https://external.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Lien externe
</a>
```

---

## 🧩 Patterns à suivre

### 1. Composant Section réutilisable
```tsx
interface SectionProps {
  iconPaths?: string[];
  title: string;
  children: React.ReactNode;
}

function Section({ iconPaths, title, children }: SectionProps) {
  return (
    <div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-16">
      <div className="flex items-center gap-3 mb-6">
        {iconPaths && (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            {iconPaths.map((path, idx) => (
              <path key={idx} d={path} stroke="#FDC700" strokeWidth="2" />
            ))}
          </svg>
        )}
        <h2 className="text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}
```

### 2. Mapping de données
```tsx
// ✅ Utiliser map avec key unique
{items.map((item, index) => (
  <div key={item.id || index}>
    {item.content}
  </div>
))}

// ❌ Ne pas utiliser index comme key si l'ordre peut changer
{items.map((item, index) => (
  <div key={index}> {/* Éviter si possible */}
```

### 3. Conditional Rendering
```tsx
// ✅ Court-circuit pour conditions simples
{isVisible && <Component />}

// ✅ Ternaire pour alternatives
{isLoading ? <Spinner /> : <Content />}

// ✅ Early return pour conditions complexes
if (!data) return <Loading />;
return <Content data={data} />;
```

---

## 🚀 Performance

### Optimisations
- ✅ Utiliser `React.memo()` pour composants lourds et stables
- ✅ Éviter les fonctions anonymes dans les props si possible
- ✅ Lazy loading pour images hors viewport
- ❌ Éviter les re-renders inutiles

### Images
```tsx
// ✅ Optimisation des images
<img 
  src={image} 
  alt="Description"
  loading="lazy"           // Lazy loading
  className="object-cover" // Optimisation affichage
/>
```

---

## ✅ Checklist avant commit

- [ ] Pas de console.log() en production
- [ ] Tous les imports utilisés
- [ ] Pas de code commenté inutile
- [ ] Types TypeScript corrects
- [ ] Alt text sur toutes les images
- [ ] Pas de duplication de code
- [ ] Composants < 300 lignes
- [ ] Navigation fonctionne correctement
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Accessibilité vérifiée (aria-labels, focus states)

---

## 📚 Ressources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [ShadCN UI Components](https://ui.shadcn.com/)

---

**Version** : 1.0  
**Dernière mise à jour** : 29 octobre 2025
