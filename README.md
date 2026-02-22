# CryptoCode - Application de Cryptographie

Application web éducative de cryptographie développée avec React, permettant de crypter et décrypter des messages en utilisant différents algorithmes classiques.

## 📋 Description

CryptoCode est une application interactive qui permet d'apprendre et d'utiliser trois algorithmes de cryptographie classiques :

- **Chiffrement de César** : Décalage de lettres avec une clé numérique
- **Chiffrement Affine** : Chiffrement utilisant deux paramètres (a et b)
- **Chiffrement de Vigenère** : Chiffrement polyalphabétique avec une clé alphabétique

## 🚀 Fonctionnalités

- ✅ Interface utilisateur intuitive en français
- ✅ Cryptage de messages avec trois algorithmes différents
- ✅ Décryptage de messages chiffrés
- ✅ Validation des clés de cryptage selon l'algorithme choisi
- ✅ Alertes interactives avec SweetAlert2
- ✅ Design responsive et moderne

## 🛠️ Technologies Utilisées

- **React** (v19.2.4) - Framework JavaScript
- **React Router DOM** (v6.0.0) - Navigation entre les pages
- **SweetAlert2** (v11.0.0) - Alertes et notifications
- **Create React App** - Configuration du projet

## 📦 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/kawthermtiri/CryptoCode.git
cd CryptoCode
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez l'application en mode développement :
```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📖 Utilisation

### Cryptage de messages

1. Accédez à la page "Crypter"
2. Entrez votre message en clair
3. Entrez la clé appropriée selon l'algorithme choisi :
   - **César** : un nombre entier (ex: 3)
   - **Affine** : deux nombres entiers séparés par un espace (ex: 5 8)
   - **Vigenère** : un mot composé uniquement de lettres (ex: SECRET)
4. Cliquez sur le bouton de l'algorithme souhaité
5. Le message crypté s'affichera à l'écran

### Décryptage de messages

1. Accédez à la page "Décrypter"
2. Entrez le message crypté
3. Entrez la même clé utilisée pour le cryptage
4. Sélectionnez l'algorithme correspondant
5. Le message décrypté s'affichera

## 📂 Structure du Projet

```
CryptoCode/
├── public/              # Fichiers publics (index.html, images, etc.)
├── src/
│   ├── components/      # Composants React
│   │   ├── Home.js      # Page d'accueil
│   │   ├── crypter.js   # Page de cryptage
│   │   └── decrypter.js # Page de décryptage
│   ├── utils/           # Fonctions utilitaires
│   │   ├── caesarCipher.js
│   │   ├── affineCipher.js
│   │   └── vigenereCipher.js
│   ├── image/           # Images de l'application
│   ├── App.js           # Composant principal
│   └── index.js         # Point d'entrée
├── package.json
└── README.md
```

## 🧪 Scripts Disponibles

### `npm start`
Lance l'application en mode développement.

### `npm test`
Lance les tests en mode interactif.

### `npm run build`
Compile l'application pour la production dans le dossier `build`.

### `npm run eject`
⚠️ **Opération irréversible** - Permet de personnaliser la configuration webpack.

## 🔐 Algorithmes de Cryptographie

### Chiffrement de César
Algorithme de substitution simple où chaque lettre est remplacée par une lettre située à une position fixe dans l'alphabet.

### Chiffrement Affine
Algorithme utilisant une fonction mathématique affine : E(x) = (ax + b) mod 26

### Chiffrement de Vigenère
Chiffrement polyalphabétique utilisant une clé alphabétique pour déterminer le décalage de chaque lettre.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commiter vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

Ce projet est open source et à des fins éducatives.

## 👤 Auteur

**Kawther Mtiri**
- GitHub: [@kawthermtiri](https://github.com/kawthermtiri)

## 🙏 Remerciements

- Create React App pour la configuration initiale
- SweetAlert2 pour les alertes élégantes
- La communauté React pour les ressources et la documentation

---

Créé avec ❤️ pour l'apprentissage de la cryptographie
