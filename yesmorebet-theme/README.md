# YesMoreBet - Thème WordPress

Thème WordPress professionnel pour YesMoreBet - Animation de casino fictif sur la Côte d'Azur.

## Description

Ce thème WordPress a été créé spécifiquement pour YesMoreBet, reprenant exactement le design du projet React original. Il offre une intégration complète avec Elementor, permettant de créer et personnaliser facilement toutes les sections du site.

## Caractéristiques

### Design
- **Couleurs exactes** : Reprend toutes les couleurs du projet React (or #FDC700, noir #000000, etc.)
- **Typographie** : Police Quicksand importée depuis Google Fonts
- **Animations** : Effets de hover, transitions et animations identiques au projet original
- **Responsive** : Entièrement adaptatif sur mobile, tablette et desktop

### Fonctionnalités WordPress
- Support complet d'Elementor
- 8 pages pré-configurées
- 7 widgets Elementor personnalisés
- Header et Footer personnalisés
- Menu de navigation responsive
- Formulaire de contact fonctionnel
- Optimisé pour le SEO

### Widgets Elementor Personnalisés

1. **YMB Hero Section** : Section hero avec image de fond, titre, sous-titre et CTA
2. **YMB Features Section** : Grille de fonctionnalités avec images et descriptions
3. **YMB Concept Section** : Section concept avec texte et image côte à côte
4. **YMB FAQ Section** : Section FAQ avec accordéon
5. **YMB Contact Form** : Formulaire de contact fonctionnel
6. **YMB Pricing Table** : Tableau de tarifs avec 3 formules
7. **YMB Gallery Grid** : Galerie d'images responsive

## Installation

1. **Télécharger le thème**
   ```bash
   cd wp-content/themes/
   cp -r /chemin/vers/yesmorebet-theme ./
   ```

2. **Activer le thème**
   - Aller dans Apparence > Thèmes dans le tableau de bord WordPress
   - Activer le thème "YesMoreBet"

3. **Installer Elementor**
   - Le thème nécessite le plugin Elementor (gratuit)
   - Installer et activer Elementor depuis Extensions > Ajouter

4. **Pages créées automatiquement**
   À l'activation du thème, 8 pages sont créées automatiquement :
   - Accueil (définie comme page d'accueil)
   - FAQ
   - Contact
   - Prestations
   - Galerie
   - CGV
   - Mentions Légales
   - Politique de Confidentialité

## Utilisation

### Modifier les pages avec Elementor

1. Aller sur la page à modifier
2. Cliquer sur "Modifier avec Elementor"
3. Utiliser les widgets YesMoreBet dans la catégorie "YesMoreBet"
4. Glisser-déposer les widgets pour réorganiser les sections
5. Modifier les textes directement dans Elementor
6. Publier les modifications

### Widgets disponibles

#### Hero Section
- Titre principal
- Sous-titre
- Localisation
- Image de fond
- 2 boutons CTA

#### Features Section
- Badge
- Titre de section
- Description
- Liste de fonctionnalités (titre, description, image)

#### Concept Section
- Badge
- Titre
- 2 paragraphes de description
- Image
- Bouton CTA

#### FAQ Section
- Liste de questions/réponses
- Accordéon interactif

#### Contact Form
- Nom, Email, Téléphone, Message
- Envoi par email

#### Pricing Table
- Nom de la formule
- Prix
- Durée
- Capacité
- Liste de fonctionnalités
- Image
- Badge "Recommandée"

#### Gallery Grid
- Upload multiple d'images
- Choix du nombre de colonnes (2, 3 ou 4)

### Personnaliser les couleurs

Les couleurs sont définies dans `style.css` :
```css
:root {
  --ymb-gold-start: #fdc700;
  --ymb-gold-end: #d08700;
  --ymb-black: #000000;
  --ymb-white: #ffffff;
  /* etc. */
}
```

### Menu de navigation

Le menu principal contient :
- Le concept
- FAQ
- Galerie
- Contact
- Téléphone
- CTA "Voir les formules"

Pour modifier le menu :
1. Aller dans Apparence > Menus
2. Modifier le menu "Primary"

## Structure des fichiers

```
yesmorebet-theme/
├── assets/
│   ├── css/
│   │   └── custom.css          # Styles personnalisés
│   ├── js/
│   │   └── main.js             # JavaScript principal
│   └── images/                 # Images du thème
├── elementor-widgets/           # Widgets Elementor
│   ├── hero-section.php
│   ├── features-section.php
│   ├── concept-section.php
│   ├── faq-section.php
│   ├── contact-form.php
│   ├── pricing-table.php
│   └── gallery-grid.php
├── inc/                        # Fichiers d'inclusion
├── templates/                  # Templates de pages
│   ├── template-home.php
│   ├── template-faq.php
│   ├── template-contact.php
│   ├── template-prestations.php
│   ├── template-galerie.php
│   ├── template-cgv.php
│   ├── template-mentions-legales.php
│   └── template-politique-confidentialite.php
├── functions.php               # Fonctions du thème
├── style.css                   # Stylesheet principal
├── header.php                  # En-tête
├── footer.php                  # Pied de page
├── index.php                   # Template par défaut
└── README.md                   # Ce fichier
```

## Support Elementor

Le thème est entièrement compatible avec Elementor :
- Toutes les sections sont éditables
- Les textes sont modifiables
- Les images sont remplaçables
- Les sections sont déplaçables par glisser-déposer
- Support complet de l'éditeur visuel

## Personnalisation avancée

### Ajouter un nouveau widget

1. Créer un fichier dans `elementor-widgets/`
2. Enregistrer le widget dans `functions.php`

### Modifier le header/footer

1. Éditer `header.php` ou `footer.php`
2. Ou utiliser Elementor Pro pour créer des headers/footers personnalisés

## Informations de contact

- Email : contact@yesmorebet.fr
- Téléphone : +33 6 26 51 22 17
- Zone : Grasse, Cannes, Antibes, Nice et région Sud

## Licence

© 2025 YesMoreBet. Tous droits réservés.

## Version

Version 1.0.0

## Notes importantes

- Le thème nécessite WordPress 5.0 ou supérieur
- Compatible avec Elementor (gratuit)
- Recommandé : Elementor Pro pour plus de fonctionnalités
- Optimisé pour PHP 7.4+
- Testé sur MySQL 5.7+

## Support

Pour toute question ou assistance, contactez l'équipe YesMoreBet.
