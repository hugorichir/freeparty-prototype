# FREE//WEEKEND — Prototype PlayCanvas

Jeu de stratégie par événements (V0.1), jouable avec souris ou tactile sur ordinateur et smartphone.

## Jouer

Ouvrez le dossier dans VS Code et lancez un serveur web local (extension Live Server ou `python -m http.server 8000`), puis ouvrez `http://localhost:8000`.

Le moteur PlayCanvas est chargé depuis un CDN : une connexion Internet est nécessaire au décor 3D. Le jeu (interface et logique) fonctionne même si le CDN est indisponible. Pour le partager, hébergez ces trois fichiers statiques sur GitHub Pages, Netlify ou un autre hébergement HTTPS.

## Contenu

- `index.html` : page du jeu.
- `style.css` : interface responsive PC / mobile et animations.
- `game.js` : règles, création de crew, montage du son, infoline, line up, événements, tirage animé, sauvegarde locale.
- `scene.js` : décor PlayCanvas.

## Nouveautés V0.2

- Création du crew (nom, avatar) avec un cash de départ pour les premières enceintes.
- Choix du line up (Trance, Hardcore, Tribe, Acidcore) avant chaque fête, avec ses bonus et malus.
- Infoline lançable pendant le montage ou la fête, et 3 heures de montage du son avec événements dépendant de la réputation.
- Textes animés (machine à écrire) et tirage de catégorie façon machine à sous avant chaque manche.

## Équilibrage

Modifiez `SPOTS`, `ITEMS`, `LINEUPS`, `EVENTS` et `MONTAGE_EVENTS` en début de `game.js`, puis `probabilities()` pour la roue. Chaque événement dispose de deux décisions et d'effets (`money`, `rep`, `vig`, `people`, `donation`, `sound`).

Les probabilités sont dynamiques et l'arrivée du public, les dons et la vigilance évoluent à chaque heure. La sauvegarde utilise `localStorage` sur le navigateur de l'appareil.

Ceci est un prototype de gameplay, pas une simulation du cadre légal ou médical réel.
