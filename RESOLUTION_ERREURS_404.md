# 🔧 Résolution : Erreurs 404 Elementor API

## Problème identifié

Les erreurs 404 dans la console indiquent que l'API REST d'Elementor n'est pas correctement enregistrée.

```
404 Not Found: /wp-json/elementor/v1/checklist/user-progress
404 Not Found: /wp-json/elementor/v1/kit-elements-defaults
404 Not Found: /wp-json/elementor/v1/globals
```

## ✅ Solutions (dans l'ordre)

### Solution 1 : Régénérer les permaliens (Le plus probable)

1. Allez dans **Réglages > Permaliens**
2. Cliquez simplement sur **"Enregistrer les modifications"** (pas besoin de changer quoi que ce soit)
3. Cela va régénérer les règles de réécriture et enregistrer les routes API
4. Rechargez la page Elementor

**Pourquoi ?** WordPress doit être averti des nouvelles routes API. La régénération des permaliens force WordPress à reconstruire toutes les routes.

### Solution 2 : Vérifier l'installation d'Elementor

1. Allez dans **Extensions > Extensions installées**
2. Vérifiez qu'**Elementor** est bien activé (case cochée)
3. Si ce n'est pas le cas, cliquez sur **Activer**
4. Version minimum recommandée : Elementor 3.16 ou supérieur

### Solution 3 : Désactiver et réactiver Elementor

1. Allez dans **Extensions > Extensions installées**
2. Trouvez **Elementor**
3. Cliquez sur **Désactiver**
4. Attendez 2 secondes
5. Cliquez sur **Activer**
6. Les routes API seront réenregistrées

### Solution 4 : Vider les caches

1. **Cache WordPress** :
   - Si vous utilisez un plugin de cache (WP Super Cache, W3 Total Cache, etc.)
   - Allez dans les réglages du plugin
   - Cliquez sur "Vider le cache" ou "Purge Cache"

2. **Cache Elementor** :
   - Allez dans **Elementor > Outils**
   - Onglet **"Régénérer les fichiers CSS & Données"**
   - Cliquez sur **"Régénérer les fichiers CSS"**
   - Cliquez sur **"Synchroniser la bibliothèque"**

3. **Cache navigateur** :
   - Appuyez sur **Ctrl + Shift + Delete** (ou Cmd + Shift + Delete sur Mac)
   - Cochez "Images et fichiers en cache"
   - Cliquez sur "Effacer les données"
   - Ou simplement **Ctrl + F5** pour recharger sans cache

### Solution 5 : Vérifier les fichiers .htaccess (serveur Apache)

Si vous êtes sur Apache, vérifiez que le fichier `.htaccess` existe à la racine de WordPress :

**Localisation** : `/var/www/html/wordpress/.htaccess` (ou votre chemin WordPress)

**Contenu minimum** :
```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /wordpress/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /wordpress/index.php [L]
</IfModule>
# END WordPress
```

**Note** : Remplacez `/wordpress/` par votre chemin si WordPress est à un autre emplacement.

Si le fichier n'existe pas :
1. Créez-le manuellement avec le contenu ci-dessus
2. Ou allez dans **Réglages > Permaliens > Enregistrer** pour le régénérer

### Solution 6 : Vérifier l'API REST WordPress

Testez si l'API REST fonctionne :

1. Ouvrez un nouvel onglet
2. Allez sur : `http://localhost:8888/wordpress/wp-json/`
3. Vous devriez voir du JSON (données API)

**Si vous voyez une erreur 404** :
- Les permaliens ne sont pas activés
- Le fichier .htaccess manque ou est mal configuré
- Suivez la Solution 1 et 5

**Si vous voyez du JSON** :
- L'API REST fonctionne
- Le problème est spécifique à Elementor
- Suivez les Solutions 3 et 4

### Solution 7 : Réinstaller Elementor (en dernier recours)

1. Allez dans **Extensions > Extensions installées**
2. Trouvez **Elementor**
3. Cliquez sur **Désactiver** puis **Supprimer**
4. Allez dans **Extensions > Ajouter**
5. Recherchez **"Elementor"**
6. Cliquez sur **Installer** puis **Activer**

**Important** : Cela ne supprimera PAS vos pages ou contenus Elementor. Les données sont stockées dans la base de données.

### Solution 8 : Vérifier les permissions fichiers (serveur Linux)

Si vous êtes sur un serveur Linux local (MAMP, XAMPP, etc.) :

```bash
# Donner les bonnes permissions au dossier WordPress
sudo chown -R www-data:www-data /var/www/html/wordpress
sudo find /var/www/html/wordpress -type d -exec chmod 755 {} \;
sudo find /var/www/html/wordpress -type f -exec chmod 644 {} \;
```

Remplacez `/var/www/html/wordpress` par votre chemin.

## 🎯 Procédure recommandée (ordre à suivre)

**Essayez dans cet ordre (arrêtez dès que ça fonctionne) :**

1. ✅ **Régénérer les permaliens** (Solution 1) ← Commencez par ici (90% de chances que ça règle le problème)
2. ✅ Vider tous les caches (Solution 4)
3. ✅ Désactiver/réactiver Elementor (Solution 3)
4. ✅ Vérifier l'API REST (Solution 6)
5. ✅ Vérifier le .htaccess (Solution 5)
6. ✅ Réinstaller Elementor (Solution 7)

## 🔍 Diagnostic rapide

Pour savoir quelle solution appliquer, testez ceci :

**Test 1** : Ouvrez `http://localhost:8888/wordpress/wp-json/`
- ✅ **Si ça affiche du JSON** → Problème Elementor → Solutions 3, 4, 7
- ❌ **Si erreur 404** → Problème permaliens → Solutions 1, 5

**Test 2** : Allez dans **Extensions > Extensions installées**
- ✅ **Elementor activé** → OK, passez au test 1
- ❌ **Elementor désactivé** → Solution 2
- ❌ **Elementor absent** → Solution 7

## ⚠️ Note importante

Ces erreurs **ne sont PAS causées par le thème** que j'ai créé. Le thème fonctionne correctement. C'est une question de configuration WordPress/Elementor qui doit être résolue dans l'administration WordPress.

Une fois ces erreurs résolues, vous pourrez éditer toutes vos pages avec Elementor normalement.

## 📞 Si rien ne fonctionne

Si après toutes ces étapes vous avez toujours le problème :

1. **Vérifiez votre version de WordPress** : Minimum 5.9 requis
2. **Vérifiez votre version de PHP** : Minimum 7.4 requis (8.0+ recommandé)
3. **Vérifiez les logs d'erreur PHP** :
   - Dans WordPress : Activez `define('WP_DEBUG', true);` dans `wp-config.php`
   - Regardez le fichier `wp-content/debug.log`
4. **Désactivez tous les autres plugins** temporairement pour voir si un conflit existe

## ✅ Une fois résolu

Après avoir résolu le problème :

1. Allez sur **Pages > Accueil**
2. Cliquez sur **"Modifier avec Elementor"**
3. Vous devriez voir l'éditeur sans erreurs
4. Glissez-déposez les widgets **YesMoreBet** depuis la gauche
5. Commencez à créer votre page !

---

**99% du temps, la Solution 1 (régénérer les permaliens) règle le problème !**
