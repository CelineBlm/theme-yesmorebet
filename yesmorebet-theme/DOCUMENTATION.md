# Documentation YesMoreBet - Guide Complet

## Table des matières

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration initiale](#configuration-initiale)
4. [Utilisation d'Elementor](#utilisation-delementor)
5. [Widgets personnalisés](#widgets-personnalisés)
6. [Personnalisation](#personnalisation)
7. [FAQ technique](#faq-technique)

## Introduction

Ce thème WordPress reprend exactement le design du projet React YesMoreBet, avec :
- Mêmes couleurs (or #FDC700, noir, etc.)
- Même typographie (Quicksand)
- Mêmes animations et transitions
- Même structure de pages

### Différence avec le projet React

Le thème WordPress permet :
- ✅ Édition visuelle avec Elementor (pas besoin de coder)
- ✅ Déplacement des sections par glisser-déposer
- ✅ Modification des textes et images directement
- ✅ Gestion facile du contenu

## Installation

### Prérequis

- WordPress 5.0 ou supérieur
- PHP 7.4 ou supérieur
- MySQL 5.7 ou supérieur
- Plugin Elementor (gratuit)

### Étapes d'installation

1. **Copier le thème dans WordPress**
   ```bash
   cp -r yesmorebet-theme /var/www/html/wp-content/themes/
   ```

2. **Activer le thème**
   - Tableau de bord WordPress > Apparence > Thèmes
   - Cliquer sur "Activer" sous YesMoreBet

3. **Installer Elementor**
   - Extensions > Ajouter
   - Rechercher "Elementor"
   - Installer et activer

4. **Vérifier les pages créées**
   - Pages > Toutes les pages
   - 8 pages doivent être créées automatiquement

## Configuration initiale

### 1. Configurer la page d'accueil

Réglages > Lecture :
- Cocher "Une page statique"
- Page d'accueil : Sélectionner "Accueil"
- Enregistrer

### 2. Configurer le menu

Apparence > Menus :
- Créer ou modifier le menu "Primary Menu"
- Ajouter les pages : Le concept, FAQ, Galerie, Contact
- Enregistrer

### 3. Ajouter le logo

Apparence > Personnaliser > Identité du site :
- Cliquer sur "Sélectionner le logo"
- Uploader le logo YesMoreBet (format SVG ou PNG recommandé)
- Dimensions recommandées : 174 x 114 px

## Utilisation d'Elementor

### Modifier une page

1. **Ouvrir l'éditeur Elementor**
   - Aller sur la page à modifier
   - Cliquer sur "Modifier avec Elementor"

2. **Ajouter un widget**
   - Cliquer sur le bouton "+" dans la colonne de gauche
   - Rechercher le widget YesMoreBet souhaité
   - Glisser-déposer dans la page

3. **Modifier un widget**
   - Cliquer sur le widget dans la page
   - Modifier les paramètres dans le panneau de gauche
   - Les changements sont visibles en temps réel

4. **Déplacer une section**
   - Survoler la section
   - Cliquer sur l'icône de déplacement (6 points)
   - Glisser-déposer à l'emplacement souhaité

5. **Publier**
   - Cliquer sur "Mettre à jour" ou "Publier" en bas à gauche

### Structure de page recommandée

#### Page d'accueil
1. Widget Hero Section
2. Widget Features Section
3. Widget Concept Section
4. Widget FAQ Section (optionnel)

#### Page FAQ
1. Titre de page
2. Widget FAQ Section (avec toutes les questions)

#### Page Contact
1. Titre de page
2. Widget Contact Form

#### Page Prestations
1. Widget Pricing Table (avec 3 formules)

#### Page Galerie
1. Widget Gallery Grid

## Widgets personnalisés

### 1. Hero Section

**Utilisation** : Section d'accueil avec image de fond

**Paramètres** :
- Titre principal (ex: "YesMoreBet")
- Sous-titre (description)
- Localisation
- Image de fond
- Texte CTA principal
- Lien CTA principal
- Texte CTA secondaire
- Lien CTA secondaire

**Exemple de contenu** :
```
Titre: YesMoreBet
Sous-titre: L'expérience casino fictif pour vos soirées privées...
Localisation: Grasse • Cannes • Antibes • Nice • Région PACA
CTA 1: Découvrir les formules → #prestations
CTA 2: Me contacter → #contact
```

### 2. Features Section

**Utilisation** : Présenter les 3 services principaux

**Paramètres** :
- Badge (ex: "Nos Services")
- Titre de section
- Description
- Liste de fonctionnalités :
  - Titre
  - Description
  - Image

**Exemple de contenu** :
```
Feature 1:
  Titre: Table de Blackjack professionnelle
  Description: Une vraie table de casino animée...

Feature 2:
  Titre: Roue de la Chance et tombola à lots
  Description: Gagnez des tickets de tombola...

Feature 3:
  Titre: Lunettes connectées
  Description: Immortalisez les meilleurs moments...
```

### 3. Concept Section

**Utilisation** : Expliquer le concept YesMoreBet

**Paramètres** :
- Badge
- Titre
- Description 1
- Description 2
- Image
- Texte CTA
- Lien CTA

### 4. FAQ Section

**Utilisation** : Questions fréquentes

**Paramètres** :
- Liste de questions/réponses
  - Question
  - Réponse (peut contenir plusieurs paragraphes)

**Nombre de questions recommandé** : 10-20

### 5. Contact Form

**Utilisation** : Formulaire de contact

**Paramètres** :
- Titre du formulaire
- Description

**Champs** :
- Nom (requis)
- Email (requis)
- Téléphone (optionnel)
- Message (requis)

**Configuration email** :
Les messages sont envoyés à l'email admin WordPress.

### 6. Pricing Table

**Utilisation** : Afficher les formules et tarifs

**Paramètres par formule** :
- Nom de la formule
- Prix (ex: "590€")
- Durée (ex: "2/3h d'animation")
- Capacité (ex: "20 à 40 personnes")
- Liste de fonctionnalités (une par ligne)
- Image
- Badge "Recommandée" (oui/non)

**Exemple de formules** :
```
Formule 1: Découverte - 590€
Formule 2: Premium - 890€ (Recommandée)
Formule 3: Prestige - 1190€
```

### 7. Gallery Grid

**Utilisation** : Galerie d'images

**Paramètres** :
- Images (sélection multiple)
- Nombre de colonnes (2, 3 ou 4)

**Images recommandées** :
- Format : JPG ou PNG
- Résolution : 1200 x 1200 px minimum
- Poids : < 500 Ko par image

## Personnalisation

### Modifier les couleurs

Fichier : `style.css` (ligne 15-35)

```css
:root {
  --ymb-gold-start: #fdc700;    /* Or principal */
  --ymb-gold-end: #d08700;      /* Or foncé */
  --ymb-black: #000000;          /* Noir */
  --ymb-white: #ffffff;          /* Blanc */
  --ymb-gray-light: #d1d5dc;    /* Gris clair */
  --ymb-gray-medium: #99a1af;   /* Gris moyen */
}
```

### Modifier les fonts

Fichier : `style.css` (ligne 8)

Pour changer la police :
1. Importer la nouvelle police depuis Google Fonts
2. Remplacer `'Quicksand'` par le nom de la nouvelle police

### Ajouter du CSS personnalisé

Apparence > Personnaliser > CSS additionnel :
```css
/* Votre CSS ici */
.mon-element {
  color: red;
}
```

### Modifier le header/footer

Option 1 : Modifier les fichiers PHP
- `header.php` pour le header
- `footer.php` pour le footer

Option 2 : Utiliser Elementor Pro
- Theme Builder > Header/Footer
- Créer un template personnalisé

## FAQ technique

### Comment ajouter une nouvelle page ?

1. Pages > Ajouter
2. Choisir un template (à droite)
3. Modifier avec Elementor
4. Publier

### Comment changer l'ordre des sections ?

1. Modifier avec Elementor
2. Survoler la section
3. Cliquer sur l'icône de déplacement
4. Glisser-déposer

### Comment dupliquer une section ?

1. Clic droit sur la section
2. "Dupliquer"

### Le formulaire de contact ne fonctionne pas

Vérifier :
1. PHP mail() est configuré sur le serveur
2. L'email admin est correct (Réglages > Général)
3. Les emails ne sont pas dans les spams

### Comment optimiser les images ?

1. Utiliser un plugin comme "Smush" ou "Imagify"
2. Compresser les images avant upload
3. Format WebP recommandé

### Comment sauvegarder le site ?

Plugin recommandé : "UpdraftPlus"
1. Installer UpdraftPlus
2. Réglages > Sauvegardes UpdraftPlus
3. "Sauvegarder maintenant"

### Comment créer une page personnalisée ?

1. Créer un nouveau template dans `templates/`
2. Copier un template existant
3. Modifier selon vos besoins
4. Sélectionner le template dans l'éditeur de page

### Performance et optimisation

Plugins recommandés :
- **WP Rocket** : Cache et optimisation
- **Autoptimize** : Minification CSS/JS
- **Imagify** : Optimisation images
- **WP Super Cache** : Cache (alternative gratuite)

## Support

Pour toute question :
- Email : contact@yesmorebet.fr
- Téléphone : +33 6 26 51 22 17

## Changelog

### Version 1.0.0 (2025)
- Première version du thème
- 7 widgets Elementor personnalisés
- 8 templates de pages
- Support complet Elementor
- Design identique au projet React
