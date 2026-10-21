# Refonte Entreprise Dick — 19 octobre 2026

## Périmètre et état initial

Maquette locale, accueil et mentions légales. HTML, CSS et JavaScript natifs ; aucune dépendance applicative. Pas de backend, d’envoi, de compte ni de stockage. Les deux services sont débarras et déblaiements. Téléphone 06 38 51 47 80 / +33 6 38 51 47 80, adresse 268 chemin Bois, 74100 Annemasse, France. Aucun horaire fourni : aucun inventé.

Sauvegarde complète des six fichiers initiaux dans `output/before/`. L’URL initiale répond HTTP 200. Les textes sont UTF-8 ; aucun défaut d’encodage source constaté. Défauts initiaux : tailles secondaires de 8–11 px, nombreuses surcharges successives du CSS, présentation peu immersive, carte Google chargée automatiquement, absence de favicon.

## Direction artistique

Une maquette architecturale de pièce à débarrasser devient la signature. Composition asymétrique, titres sans sérif à fort impact, surfaces claires et volumes de carton. Palette : papier #f4f4ed, texte #202b25, texte secondaire #5d655e, orange #e95c30, surface #e8ecdf, séparateurs #d7dbd0. Segoe UI pour le texte et Arial pour le titre et le logo ; aucune requête de police. Corps 16 px, titres fluides, contrôles 44 px minimum sauf liens dans le texte.

Desktop : [texte / pièce 3D] → [titre / deux prestations] → [illustration / espace retrouvé] → [contact / carte]. Mobile : mêmes contenus et actions empilés. Le logo typographique, tous les textes métier, les coordonnées et l’illustration originale sont conservés. La numérotation décorative des prestations est supprimée : il ne s’agit pas d’étapes.

L’orange évoque les matériaux et l’activité ; la pièce vide donne un sens concret au mouvement. Aucun avis, chiffre commercial, zone d’intervention supplémentaire ou promesse de délai inventé. L’illustration est explicitement identifiée comme telle. Le rendu privilégie le volume de la pièce ; les éléments autour restent sobres.

## Skills appliquées

- frontend-design : direction, hiérarchie et critique visuelle.
- apple-design : principes web de lisibilité, adaptation, boutons, mouvement et dialogue ; aucune revendication de conformité native iOS.
- lightweight-3d-effects : scène unique, mouvement sur interaction, absence de boucle permanente, repli mobile et reduced-motion. Implémentation CSS native sans les bibliothèques optionnelles.
- seo-audit : titres et descriptions distincts, structure HTML, liens internes, informations locales et état de maquette explicitement non indexable.
- security-best-practices : textContent, aucune saisie interpolée en HTML, absence de transmission/stockage et chargement Maps volontaire.
- playwright : inspection, captures et tests navigateur via CLI officielle.
- zrtdev-webinspector : référentiel 78 critères, preuves, statuts et rapport généré. Les vérifications indisponibles restent UNVERIFIED.
- sites : parcours de site de présentation et prévisualisation locale, sans publication.
- brainstorming : direction cadrée par le brief ; l’instruction explicite de réalisation autonome remplace les confirmations intermédiaires.

Non retenus : frameworks React/ASP.NET, génération d’images, GSAP/Three.js, CRM, documents et déploiement : aucun besoin justifiant leur ajout. Playwright Interactive a été inspecté, mais la CLI est utilisée.

## Références Apple appliquées

`accessibility.md › Mobility` : « Offer sufficiently sized controls. » Contrôles visés à 44 px.
`layout.md › Adaptability` : « Keep functionality the same as size classes change » : toutes les actions essentielles subsistent sur mobile.
`motion.md › Best practices` : « Make motion optional. » Reduced-motion et absence de parallaxe sur écran tactile.
`modality.md › Best practices` : « Always give people an obvious way to dismiss a modal view. » Bouton de fermeture, Échap et restitution du focus.

## Inventaire de vérification

Accueil et mentions légales ; liens et ancres ; trois ouvertures du formulaire ; champs vides, e-mail et téléphone incorrects, budget absent/négatif/zéro, saisie Unicode ; focus, Tab et Échap ; reset des saisies ; cycle cartons/clair/cartons ; reduced-motion ; Google Maps avant activation/après activation/masquage ; URL identique ; 320/375/390/520/768/1024/1440 px et paysage ; absence de débordement ; captures desktop/mobile ; absence d’erreur JavaScript ; poids local et politique sans dépendances. Le zoom réel, lecteur d’écran, Safari et métriques terrain sont des vérifications séparées, non déduites d’un simple contrôle de largeur.
