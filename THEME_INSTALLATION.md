# Installation du Thème WordPress YesMoreBet

## 📋 Résumé

Le thème WordPress **YesMoreBet** a été créé avec succès ! Il reprend exactement le design du projet React original avec :

✅ **Même design** : Couleurs, fonts, animations, padding, margins identiques
✅ **8 pages** : Accueil, FAQ, Contact, Prestations, Galerie, CGV, Mentions Légales, Politique de Confidentialité
✅ **7 widgets Elementor** : Toutes les sections sont éditables et déplaçables
✅ **100% compatible Elementor** : Textes et images modifiables facilement

## 📁 Emplacement du thème

Le thème se trouve dans : `/home/user/theme-yesmorebet/yesmorebet-theme/`

## 🚀 Installation rapide

### Étape 1 : Copier le thème sur votre serveur WordPress

```bash
# Si vous avez un accès SSH à votre serveur
scp -r yesmorebet-theme/ utilisateur@votre-serveur.com:/var/www/html/wp-content/themes/

# Ou via FTP : Uploadez le dossier yesmorebet-theme/ dans wp-content/themes/
```

### Étape 2 : Activer le thème

1. Connectez-vous à votre tableau de bord WordPress
2. Allez dans **Apparence > Thèmes**
3. Vous verrez le thème "YesMoreBet"
4. Cliquez sur **Activer**

### Étape 3 : Installer Elementor

1. Allez dans **Extensions > Ajouter**
2. Recherchez "Elementor"
3. Cliquez sur **Installer** puis **Activer**

### Étape 4 : Vérifier les pages créées

Les 8 pages sont créées automatiquement à l'activation du thème :
- ✅ Accueil (définie comme page d'accueil par défaut)
- ✅ FAQ
- ✅ Contact
- ✅ Prestations
- ✅ Galerie
- ✅ CGV
- ✅ Mentions Légales
- ✅ Politique de Confidentialité

## 🎨 Personnalisation avec Elementor

### Modifier la page d'accueil

1. Allez sur **Pages > Accueil**
2. Cliquez sur **Modifier avec Elementor**
3. Ajoutez les widgets YesMoreBet :
   - **YMB Hero Section** (en haut)
   - **YMB Features Section** (services)
   - **YMB Concept Section** (le concept)
   - **YMB FAQ Section** (optionnel)

### Modifier la page FAQ

1. Allez sur **Pages > FAQ**
2. Cliquez sur **Modifier avec Elementor**
3. Ajoutez le widget **YMB FAQ Section**
4. Cliquez sur le widget pour ajouter vos questions/réponses

### Modifier la page Contact

1. Allez sur **Pages > Contact**
2. Cliquez sur **Modifier avec Elementor**
3. Ajoutez le widget **YMB Contact Form**

### Modifier la page Prestations

1. Allez sur **Pages > Prestations**
2. Cliquez sur **Modifier avec Elementor**
3. Ajoutez le widget **YMB Pricing Table**
4. Configurez vos 3 formules (Découverte, Premium, Prestige)

### Modifier la page Galerie

1. Allez sur **Pages > Galerie**
2. Cliquez sur **Modifier avec Elementor**
3. Ajoutez le widget **YMB Gallery Grid**
4. Uploadez vos images

## 🎯 Widgets Elementor disponibles

Tous les widgets se trouvent dans la catégorie **"YesMoreBet"** dans Elementor :

1. **YMB Hero Section** - Section d'accueil avec image de fond
2. **YMB Features Section** - Grille de 3 fonctionnalités
3. **YMB Concept Section** - Section concept avec image
4. **YMB FAQ Section** - Questions/réponses avec accordéon
5. **YMB Contact Form** - Formulaire de contact fonctionnel
6. **YMB Pricing Table** - Tableau de 3 formules
7. **YMB Gallery Grid** - Galerie d'images responsive

## 🎨 Design

### Couleurs utilisées (exactement comme le projet React)

- **Or principal** : `#FDC700`
- **Or foncé** : `#D08700`
- **Noir** : `#000000`
- **Blanc** : `#FFFFFF`
- **Gris clair** : `#D1D5DC`
- **Gris moyen** : `#99A1AF`

### Police

- **Quicksand** (importée depuis Google Fonts)
- Poids : 300, 400, 500, 600, 700

### Effets et animations

Tous les effets du projet React sont reproduits :
- Hover sur les liens de navigation (gradient or)
- Hover sur les cartes (scale + shadow)
- Transitions douces (0.3s ease)
- Bounce animation sur l'indicateur de scroll
- Backdrop blur sur le header

## 📱 Responsive

Le thème est entièrement responsive :
- **Mobile** : < 768px
- **Tablette** : 768px - 1023px
- **Desktop** : ≥ 1024px

## 📞 Informations de contact

Les informations suivantes sont pré-configurées dans le thème :
- **Email** : contact@yesmorebet.fr
- **Téléphone** : +33 6 26 51 22 17
- **Zone** : Grasse, Cannes, Antibes, Nice et région Sud

Pour les modifier :
1. Ouvrir `header.php` et `footer.php`
2. Rechercher et remplacer les valeurs

## 📚 Documentation

Deux fichiers de documentation sont inclus :
- **README.md** : Documentation générale du thème
- **DOCUMENTATION.md** : Guide complet d'utilisation

## 🔧 Prérequis techniques

- **WordPress** : 5.0 ou supérieur
- **PHP** : 7.4 ou supérieur
- **MySQL** : 5.7 ou supérieur
- **Elementor** : Plugin gratuit (requis)

## ✅ Checklist après installation

- [ ] Thème activé
- [ ] Elementor installé et activé
- [ ] Page d'accueil définie dans Réglages > Lecture
- [ ] Logo uploadé dans Apparence > Personnaliser
- [ ] Menu configuré dans Apparence > Menus
- [ ] Email de contact vérifié dans Réglages > Général
- [ ] Pages personnalisées avec Elementor
- [ ] Images uploadées
- [ ] Formulaire de contact testé

## 🐛 Résolution de problèmes

### Le formulaire de contact ne fonctionne pas
- Vérifier que PHP mail() est configuré sur le serveur
- Vérifier l'email admin dans Réglages > Général

### Les widgets Elementor n'apparaissent pas
- Vérifier qu'Elementor est bien installé et activé
- Vider le cache d'Elementor (Elementor > Outils > Régénérer CSS)

### Les images ne s'affichent pas
- Vérifier les permissions du dossier uploads/
- Vérifier que les images sont bien uploadées dans la bibliothèque de médias

## 📦 Fichiers inclus

```
yesmorebet-theme/
├── 404.php                     # Page 404
├── DOCUMENTATION.md            # Documentation complète
├── README.md                   # Readme du thème
├── footer.php                  # Pied de page
├── functions.php               # Fonctions du thème
├── header.php                  # En-tête
├── index.php                   # Template par défaut
├── page.php                    # Template de page
├── searchform.php              # Formulaire de recherche
├── single.php                  # Template d'article
├── style.css                   # Stylesheet principal
├── assets/
│   ├── css/
│   │   └── custom.css          # Styles personnalisés
│   ├── js/
│   │   └── main.js             # JavaScript principal
│   └── images/                 # Images du thème
├── elementor-widgets/           # 7 widgets Elementor
│   ├── concept-section.php
│   ├── contact-form.php
│   ├── faq-section.php
│   ├── features-section.php
│   ├── gallery-grid.php
│   ├── hero-section.php
│   └── pricing-table.php
└── templates/                   # 8 templates de pages
    ├── template-cgv.php
    ├── template-contact.php
    ├── template-faq.php
    ├── template-galerie.php
    ├── template-home.php
    ├── template-mentions-legales.php
    ├── template-politique-confidentialite.php
    └── template-prestations.php
```

## 🎉 Prêt à l'emploi !

Le thème est maintenant prêt à être installé et utilisé. Toutes les sections sont éditables avec Elementor, et le design reprend exactement celui du projet React.

Pour toute question : contact@yesmorebet.fr
