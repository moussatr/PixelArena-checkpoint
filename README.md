# CP8 — Le Crash

> ⏱ 20 min — Compétences couvertes : C17

Télécharge le zip **checkpoint8** depuis Teams.

---

## Lancer (5 terminaux)

```bash
T1 : cd mfe-header  && npm install && npm start   # 3001
T2 : cd mfe-lobby   && npm install && npm start   # 3002
T3 : cd mfe-catalog && npm install && npm start   # 3003
T4 : cd mfe-cart    && npm install && npm start   # 3004
T5 : cd shell       && npm install && npm start   # 3000
```

---

## Mission

L'app est cassée. **3 bugs à trouver et corriger.**

Ouvre `localhost:3000` et observe ce qui ne s'affiche pas correctement.
Ouvre la console du navigateur (F12) et lis les erreurs.

Les 3 bugs se trouvent dans des fichiers `webpack.config.js` :
- 1 bug dans `shell/webpack.config.js`
- 1 bug dans `mfe-header/webpack.config.js`
- 1 bug dans `mfe-catalog/webpack.config.js`

---

## Bugs corrigés

1. **shell/webpack.config.js** : Le port pour `mfeLobby` était incorrect dans la configuration `remotes`. Il a été corrigé pour pointer vers `http://localhost:3002/remoteEntry.js`.

2. **mfe-header/webpack.config.js** : Le chemin exposé pour `Navbar` manquait l'extension `.jsx`. Cela a été corrigé en ajoutant l'extension.

3. **mfe-catalog/webpack.config.js** : Le chemin exposé pour `CatalogView` manquait également l'extension `.jsx`. Cela a été corrigé en ajoutant l'extension.

---

## Validation

`localhost:3000` affiche les 4 MFEs sans erreur console.

---

📤 Push ta branche
