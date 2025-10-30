# YesMoreBet - Design System

## Typographie

### Titres
- **h1** : Hero titles - Pas de classes Tailwind (utiliser les styles par défaut de globals.css)
- **h2** : Section titles - Pas de classes Tailwind
- **h3** : Subsection titles - Pas de classes Tailwind
- **h4** : Card titles - Pas de classes Tailwind
- **p** : Body text - Pas de classes Tailwind sauf si besoin spécifique

### Tailles spécifiques (uniquement si nécessaire)
- Hero gradient text: utiliser directement sans classe text-*
- Small text: text-sm (14px) uniquement quand nécessaire
- Tiny text: text-xs (12px) rarement utilisé

### Police
- Famille: 'Quicksand', sans-serif
- Poids: 300, 400, 500, 600, 700

## Couleurs

### Primaires
- Or primaire: `#fdc700`
- Or secondaire: `#d08700`
- Noir: `#000000`
- Blanc: `#ffffff`

### Secondaires
- Gris texte clair: `#d1d5dc`
- Gris texte moyen: `#99a1af`
- Gris foncé: `#1e2939`

### Transparences
- Bordure dorée: `rgba(208,135,0,0.3)`
- Background doré subtil: `rgba(208,135,0,0.1)` ou `rgba(208,135,0,0.2)`
- Background noir overlay: `rgba(0,0,0,0.5)`
- Background blanc subtil: `rgba(255,255,255,0.05)`

### Gradients
- Or principal: `from-[#fdc700] to-[#d08700]`
- Bouton CTA: `from-[#facc15] to-[#ca8a04]`
- Hero background: `from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)]`

## Espacements

### Padding Sections
- Mobile: `py-16 px-4`
- Desktop: `py-16 px-4 lg:px-12`
- Container max-width: `max-w-[1199px]` ou `max-w-[1436px]`

### Padding Cartes/Blocs
- Standard: `p-8 lg:p-12`
- Compact: `p-6 lg:p-8`
- Dense: `p-4 lg:p-6`

### Gaps
- Entre sections majeures: `space-y-12` ou `gap-12`
- Entre cartes: `gap-8`
- Entre éléments: `gap-6`
- Entre petits éléments: `gap-4` ou `gap-3`

### Margins
- Hero padding top: `pt-32` (pour compenser le header fixe)
- Section spacing: utiliser `space-y-*` plutôt que margins individuels

## Border Radius

### Standards
- Cartes et sections: `rounded-[10px]`
- Boutons: `rounded-[10px]` ou `rounded-[8px]`
- Pills/badges: `rounded-full` ou `rounded-[3.35544e+07px]` (arrondi complet)
- Petits éléments: `rounded-[4px]`

## Bordures

### Épaisseurs
- Standard: `border`
- Fine: `border` (1px par défaut)

### Couleurs
- Dorée: `border-[rgba(208,135,0,0.3)]`
- Blanche subtile: `border-[rgba(255,255,255,0.1)]`
- Grise: `border-[#1e2939]`

## Ombres

### Box Shadows
- Subtile dorée: `shadow-[0px_4px_6px_-1px_rgba(208,135,0,0.1),0px_2px_4px_-2px_rgba(208,135,0,0.1)]`
- Moyenne dorée: `shadow-[0px_10px_15px_-3px_rgba(208,135,0,0.1),0px_4px_6px_-4px_rgba(208,135,0,0.1)]`
- Forte dorée (featured): `shadow-[0px_0px_0px_2px_#d08700,0px_25px_50px_-12px_rgba(208,135,0,0.3)]`
- Bouton CTA: `shadow-[0px_10px_15px_-3px_rgba(250,204,21,0.3)]`
- Hover bouton: `shadow-[0px_10px_20px_-3px_rgba(250,204,21,0.5)]`

## Transitions & Effets

### Transitions
- Standard: `transition-colors`
- Complète: `transition-all`
- Custom: `transition-[color,box-shadow]`

### Hover States
- Texte: `hover:text-[#fdc700]`
- Background subtil: `hover:bg-[rgba(255,255,255,0.1)]`
- Shadow: `hover:shadow-lg` ou custom hover shadow

## Structure des Pages

### Layout Standard
```tsx
<div className="min-h-screen bg-black">
  <Header onNavigate={onNavigate} />
  
  {/* Hero Section */}
  <section className="relative bg-gradient-to-b from-[rgba(115,62,10,0.1)] to-[rgba(0,0,0,0)] pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-[896px] text-center">
      <h1>{/* Titre avec gradient si applicable */}</h1>
      <p className="text-white">{/* Sous-titre */}</p>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-16 px-4 lg:px-12">
    <div className="container mx-auto max-w-[1199px] space-y-8">
      {/* Cartes/Sections */}
    </div>
  </section>

  <Footer onNavigate={onNavigate} />
</div>
```

### Structure Carte Standard
```tsx
<div className="border border-[rgba(208,135,0,0.3)] rounded-[10px] p-8 lg:p-12">
  {/* Titre avec icône */}
  <div className="flex items-center gap-3 mb-6">
    <div className="w-6 h-6">
      {/* SVG Icon */}
    </div>
    <h2 className="text-white font-['Quicksand'] font-semibold">Titre</h2>
  </div>
  
  {/* Contenu */}
  <div className="space-y-4">
    <p className="text-[#d1d5dc]">Contenu...</p>
  </div>
</div>
```

## Composants Réutilisables

### Bouton CTA
```tsx
<a 
  href="/path" 
  className="bg-gradient-to-r from-[#facc15] to-[#ca8a04] rounded-[8px] px-6 py-3 text-black font-['Quicksand'] font-medium hover:shadow-lg transition-all"
>
  Texte du bouton
</a>
```

### Encadré Information
```tsx
<div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(208,135,0,0.2)] rounded-[10px] p-4">
  {/* Contenu */}
</div>
```

### Alerte/Warning
```tsx
<div className="bg-[rgba(253,199,0,0.1)] border border-[rgba(208,135,0,0.3)] rounded-[10px] p-4">
  <p className="text-[#fdc700] font-['Quicksand'] font-bold">
    ⚠️ Message important
  </p>
</div>
```

### Social Icon
```tsx
<a
  href="https://..."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[10px] size-[40px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-all"
  aria-label="Platform"
>
  {/* SVG Icon */}
</a>
```

## Responsive Design

### Breakpoints Tailwind
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile First
- Toujours commencer par les styles mobile
- Utiliser `lg:*` pour desktop
- Tester sur mobile d'abord

### Common Patterns
- Padding: `px-4 lg:px-12`
- Text size: Utiliser les styles par défaut sauf nécessité
- Grid: `grid grid-cols-1 lg:grid-cols-2`
- Flex direction: `flex-col lg:flex-row`
- Gaps: `gap-4 lg:gap-8`
