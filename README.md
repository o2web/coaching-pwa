# Base d'assets o2web

## Installer la base d'assets

- `npm install` au root du projet o2assets pour installer les dépendances
- `npm start` au root du projet pour lancer la compilation.
- Le code compilé se retrouve dans le dossier `/dist`.  

## Dépendances 

Ce projet utilise npm et webpack pour compiler les assets et gérer les dépendances.
- [npmjs.com](https://www.npmjs.com/)
- [webpack.js.org/](https://webpack.js.org/)

## Structure SCSS

Tous les styles doivent se retrouver dans le dossier `scss/`

### mains.scss

- Contient tous les imports scss.

### utilities/

- Dossier contenant les outils sass.

### base/

- Dossier contenant les styles de base utilisés partout dans le projet.

### modules/

- Dossier contenant les styles pour tous les modules.

### layout/

- Dossier contenant les styles de base du layout du projet.

### pages/

- Dossier contenant les styles spécifiques à certaines pages.