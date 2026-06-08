# Guide d'édition du site — Mégane Bertaud

Ce guide explique **comment modifier les textes du site toi-même**, sans aide extérieure.
Tout le contenu est rangé dans quelques fichiers texte. Tu n'as **jamais besoin de toucher au code**.

---

## 1. Où se trouve quel texte ?

### 📄 `src/content/homepage/-index.md` → la page d'**Accueil**
| Dans le fichier | Sur le site |
|---|---|
| `banner: title` / `content` | Le grand titre et l'accroche en haut |
| `banner: button` (`label`, `link`) | Le bouton « Me contacter » |
| `key_features: title` / `description` | Le titre « Mes domaines d'expertise » |
| `feature_list:` (chaque `title` + `content`) | Les 6 blocs d'expertise |
| `service: photos` | La galerie de photos personnelles sous les domaines d'expertise |

### 📄 `src/content/about/-index.md` → la page **À propos**
| Dans le fichier | Sur le site |
|---|---|
| `page_title` | Le titre de la page |
| `journey_highlights:` (chaque `title` + `content`) | Les cartes « Parcours en quelques repères » |
| `gallery: title` | Le titre au-dessus des photos |
| `features: features_list` | Les blocs « Les valeurs qui guident ma pratique » |
| **Le texte tout en bas, après la ligne `---`** | **Ta biographie** (modifiable librement) |

### 📄 `src/content/contact/-index.md` → la page **Contact**
| `page_title` | Le titre de la page Contact |

### ⚙️ `src/config/config.json` → infos générales
| Clé | Sur le site |
|---|---|
| `logo_text` | Le nom affiché à côté du logo |
| `call_to_action` | Le bandeau coloré en bas des pages |
| `params: email` / `phone` | Tes coordonnées (pied de page + contact) |
| `params: footer_description` | Le petit texte du pied de page |
| `metadata: meta_description` | La description pour Google |

### ⚙️ Autres réglages
- `src/config/menu.json` → les onglets du menu (Accueil / À propos / Contact)
- `src/config/social.json` → tes liens (LinkedIn, email)
- `src/config/theme.json` → les couleurs et les polices

---

## 2. Comment modifier (le plus simple : directement sur GitHub)

Une fois le site en ligne sur GitHub, **aucune installation n'est nécessaire** :

1. Va sur le dépôt GitHub du site.
2. Ouvre le fichier à modifier (par ex. `src/content/about/-index.md`).
3. Clique sur l'icône **crayon ✏️** (« Edit this file ») en haut à droite.
4. Modifie le texte.
5. En bas, clique sur **« Commit changes »** (vert).
6. ⏱️ Le site se met à jour automatiquement en **1 à 2 minutes**.

> Tu peux aussi modifier les fichiers sur ton ordinateur avec un éditeur comme **VS Code**,
> puis lancer `npm run dev` pour prévisualiser en direct sur `http://localhost:4321`.

---

## 3. ⚠️ Les 5 règles d'or (pour ne rien casser)

1. **Ne change que le texte**, jamais les mots à gauche des deux-points.
   ✅ `title: Mon nouveau titre`  ❌ ne pas renommer `title`
2. **Si ta phrase contient un deux-points `:`**, mets-la entre guillemets :
   `content: "Mon quotidien : aménagements et conseils."`
3. **Garde les espaces d'alignement** en début de ligne (n'utilise pas la touche Tab).
4. **Les accents** (é, è, à, ç…) sont autorisés, aucun souci.
5. Pour **la biographie** (bas de `about/-index.md`), tu peux écrire librement :
   une ligne vide sépare deux paragraphes.

---

## 4. Changer les photos

Toutes les images du site sont rangées dans le dossier **`public/images/`**.
Dans les fichiers de texte, une photo est toujours désignée par un chemin qui commence
par `/images/...` (par exemple `image: /images/experience-togo.jpg`).

### Quelles photos, et où elles sont réglées ?
| Photo sur le site | Fichier à modifier | Nom de l'image |
|---|---|---|
| **Photo principale** (accueil, à côté du titre) | `src/content/homepage/-index.md` → `banner: image:` | `megane-bertaud.png` |
| La **galerie de photos personnelles** sous les domaines d'expertise | `src/content/homepage/-index.md` → `service: photos:` | `experience-togo.jpg`, `experience-togo-2.jpg`, `experience-togo-3.jpg`, `experience-yoga.jpg`, `experience-yoga-2.jpg` |
| Les **3 photos de la galerie** (page À propos) | `src/content/about/-index.md` → `gallery: images:` | `occupational-therapy.jpg`, `caring-hands.jpg`, `yoga-beach.jpg` |
| Les **2 photos des expériences** (Togo & yoga) | `src/content/about/-index.md` → `experiences:` | `experience-togo.jpg`, `experience-yoga.jpg` |
| Le **logo** (et le favicon) | `src/config/config.json` → `logo` / `favicon` | `logo-megane.png` |

### Méthode A — remplacer une photo (la plus simple, aucun texte à modifier)
Idéal pour mettre **ta vraie photo** à la place d'une image actuelle.
1. Sur GitHub, va dans le dossier `public/images/`.
2. Clique sur **« Add file » → « Upload files »**.
3. **Donne à ta nouvelle image exactement le même nom** que celle à remplacer
   (par ex. renomme ta photo en `megane-bertaud.png` avant de l'envoyer).
4. Confirme avec **« Commit changes »**. Le site se met à jour en 1–2 min.

> ⚠️ Le nom doit être **identique**, y compris l'extension (`.png` reste `.png`, `.jpg` reste `.jpg`).

### Méthode B — ajouter une nouvelle photo (nouveau nom)
1. Envoie ta photo dans `public/images/` (« Add file » → « Upload files »).
   Choisis un nom simple, **sans espace ni accent** (ex. `cabinet-2026.jpg`).
2. Ouvre le fichier de texte concerné (voir le tableau ci-dessus).
3. Remplace l'ancien nom par le tien dans le chemin, par exemple :
   `image: /images/cabinet-2026.jpg`
4. **« Commit changes »**.

### 📐 Conseils pour de belles photos qui chargent vite
- Formats acceptés : **`.jpg`** (photos) ou **`.png`** (logos, images avec transparence).
- Avant d'envoyer, **réduis la taille** : une largeur d'environ **1400 pixels** suffit
  (une photo de téléphone fait souvent 4000+ px et alourdit inutilement le site).
- Évite les espaces et les accents dans les noms de fichiers.

---

## 5. En cas de doute

- Tu peux toujours **annuler** une modification dans l'historique GitHub (onglet « History »).
- Si une page s'affiche mal après une modification, c'est presque toujours
  la **règle n°2** (un `:` sans guillemets) ou la **règle n°3** (alignement).

Bonne édition ! 🌿
