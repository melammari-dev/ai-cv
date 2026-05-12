================================================================================
  CV — données des expériences (fichiers texte / JSON)
================================================================================

1) LISTE DES FICHIERS
   - data/experiences/manifest.json
        Contient la liste des fichiers d’expérience, dans l’ordre de chargement.
        L’affichage final est trié par le champ "order" de chaque expérience.

   - data/experiences/*.json
        Un fichier par mission (ex. ville-marseille.json). Modifiez le texte
        ou les logos ici sans toucher au HTML.

2) AJOUTER UNE NOUVELLE EXPÉRIENCE
   a) Copiez un fichier existant (ex. monext.json) vers un nouveau nom.
   b) Éditez les champs (order, company, meta, role, bullets, logo…).
   c) Ajoutez le chemin du nouveau fichier dans "experienceFiles" dans
      manifest.json.

   Le champ "order" (nombre) définit l’ordre d’affichage : plus petit = plus haut.

3) LOGO ("logo")
   - URL complète autorisée, ex. favicon ou CDN.
   - Ou fichier local sous le site, ex. assets/logos/mon-client.png
     (placez l’image dans assets/logos/ et mettez le chemin relatif à la racine
      du site, en commençant par "assets/...").

4) TEXTE BILINGUE
   Chaque texte visible a deux clés "en" et "fr" :
   - meta, role, logoAlt
   - chaque élément de "bullets" : { "en": "...", "fr": "..." }

   Pour une puce avec HTML (gras, liens), ajoutez "html": true sur cette puce.

5) APERÇU LOCAL
   fetch() nécessite souvent un petit serveur HTTP (pas file://).
   Exemple : npx --yes serve .   puis ouvrir l’URL indiquée.

================================================================================
