# Uniformisation du Design System - Checklist

## Modifications appliquées systématiquement

### ✅ Border Radius
- [x] `rounded-lg` → `rounded-[10px]`
- [x] `rounded-[8px]` → reste `rounded-[8px]` (boutons CTA)
- [x] Garder `rounded-full` pour les pills

### ✅ Padding Sections
- [x] `py-16 px-4` → `py-16 px-4 lg:px-12`
- [x] Containers: `max-w-7xl` → `max-w-[1199px]`
- [x] Hero containers: `max-w-4xl` → `max-w-[896px]`

### ✅ Padding Cartes
- [x] `p-8` → `p-8 lg:p-12`
- [x] `p-6` → `p-6 lg:p-8` (pour éléments plus petits)
- [x] `p-3` → `p-4` (icônes, petits éléments)

### ✅ Inputs & Forms
- [x] `px-3 py-2` → `px-4 py-3`
- [x] Ajouter `transition-colors` sur tous les inputs
- [x] Border radius: `rounded-[10px]`

### ✅ Boutons
- [x] Primary CTA: `rounded-[8px]` + `px-6 py-3`
- [x] Ajouter `transition-all` si manquant

### ✅ Transitions
- [x] Ajouter `transition-colors` sur tous les hover states
- [x] Garder `transition-all` pour les éléments avec plusieurs propriétés qui changent

### ✅ Espacement entre éléments
- [x] `space-y-6` → `space-y-8` (sections majeures)
- [x] `gap-6` → `gap-8` (grids de cartes)
- [x] `gap-4` pour éléments plus petits

## Fichiers modifiés

### Pages principales
- [ ] /pages/Home.tsx
- [ ] /pages/Prestations.tsx
- [ ] /pages/Galerie.tsx
- [x] /pages/Contact.tsx (en cours)
- [ ] /pages/FAQ.tsx

### Pages légales
- [ ] /pages/MentionsLegales.tsx
- [ ] /pages/PolitiqueConfidentialite.tsx
- [ ] /pages/CGV.tsx

### Composants
- [ ] /components/Header.tsx
- [ ] /components/Footer.tsx
- [ ] /components/HeroSection.tsx
- [ ] /components/FeaturesSection.tsx
- [ ] /components/ConceptSection.tsx
- [ ] /components/FAQSection.tsx
- [ ] /components/DisclaimerBanner.tsx

## Notes importantes

- Ne PAS modifier les tailles de texte (text-*) sauf si absolument nécessaire
- Ne PAS modifier les font-weight sauf si absolument nécessaire
- Garder les valeurs précises de tracking et leading quand elles existent
- Préserver tous les SVG paths et imports Figma
