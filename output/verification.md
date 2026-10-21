# Vérification de la refonte — 19 octobre 2026

## Résultats exécutés

41 assertions fonctionnelles finales passent dans Chromium via Playwright CLI. Preuve détaillée : `output/playwright/results.json` ; scénarios reproductibles : `output/playwright/qa.js` et `maps-and-polish.js`. Syntaxe JavaScript : `node --check script.js`, code de sortie 0.

- Les trois entrées ouvrent le bon contexte de formulaire.
- Champs vides, e-mail/téléphone incorrects, montant absent ou négatif rejetés ; zéro accepté.
- Saisie Unicode et texte ressemblant à du HTML conservés comme texte.
- Focus initial, Tab/Shift+Tab, Échap, retour au bouton et effacement des saisies vérifiés.
- Scène : cartons → espace libre → cartons ; reduced-motion supprime les transitions.
- Accueil et mentions légales à 320, 375, 390, 520, 768, 1024 et 1440 px : largeur du document égale à la largeur du viewport. Paysage 844×390 également vérifié.
- Un H1 et langue française sur les deux pages ; navigation aller/retour et ancres valides.
- Aucune erreur JavaScript pendant le passage final. Aucun script distant dans l’application.
- Boutons visibles mesurés à 44, 47, 48 ou 56 px de hauteur.

## Google Maps

L’URL originale de l’iframe est conservée exactement, déplacée dans `data-src` puis utilisée comme `src` sur activation. Aucun chargement Maps avant activation ; le bouton Masquer retire l’iframe chargée. Le lien externe reprend exactement la recherche d’adresse, en retirant uniquement `output=embed` : ce paramètre provoquait un message d’erreur lorsqu’il était ouvert hors iframe.

Carte réellement chargée et capture `map-loaded.png` inspectée. Le panneau Google affiche **Kyriad Annemasse Genève**. Cette ambiguïté existait déjà dans le LIRE-MOI initial ; aucune coordonnée géographique ou fiche d’établissement inventée pour la masquer. L’interface précise que l’emplacement exact reste à confirmer. Le lien externe atteint Google Maps après son écran de choix de confidentialité ; cookies facultatifs refusés dans le navigateur de test.

## Revue visuelle

Captures avant/après, accueil complet desktop/mobile, écran 320 px, scène dégagée, formulaire mobile avec erreurs, page légale et contact avec carte. La composition conserve une scène centrale lisible, le titre reste sur trois lignes, les services passent en une colonne sur petit écran. Le formulaire défile dans le viewport mobile sans être coupé par une hauteur fixe.

Apple Design : appréciation « Good » pour le périmètre examiné. Points conservés : boutons natifs, dialogue natif, titres lisibles, actions explicites. Signature : pièce architecturale que le visiteur peut libérer. Limites : pas de test VoiceOver/NVDA ni Safari, pas de validation iOS native. La palette est volontairement claire pour ce site web ; les recommandations natives Apple ne sont pas transposées comme obligations de plateforme.

## Poids et contrastes

Six fichiers publiables : **53 540 octets** au total, estimation gzip **16 055 octets** (hors Google Maps, compression du futur hébergement non présumée). Accueil et ressources sans page légale : 48 138 octets. Pas de police distante, framework, canvas ou boucle d’animation permanente. L’illustration originale reste un SVG de 2 488 octets.

Calculs sRGB dans `output/measurements.json` : texte principal/papier 13,26:1 ; texte secondaire/papier 5,45:1 ; secondaire/fond de scène 4,94:1 ; texte blanc/bouton sombre 14,65:1 ; lien orange clair/fond sombre 8,83:1 ; erreurs/papier 6,58:1. Cela ne vaut pas audit exhaustif WCAG.

## Sécurité et publication

Inspection des sources JavaScript : aucune injection HTML, évaluation dynamique, requête de formulaire ou stockage navigateur. Les données restent dans les champs puis sont effacées à fermeture. Liens externes protégés par `noopener noreferrer`. Le scan de chaînes est un complément de revue, pas une preuve d’absence de toute vulnérabilité.

Les headers CSP, nosniff, politique de framing, HTTPS et cache sont à définir sur le futur hébergeur ; leur absence sur Live Server n’est pas déclarée vulnérabilité de production. Aucun test intrusif. Les informations légales, l’adresse exacte, le domaine, la canonical et les métadonnées sociales complètes restent à valider avant publication. Les pages sont volontairement `noindex` tant qu’il s’agit d’une maquette. Le formulaire reste explicitement une démonstration.

## WebInspector

78 critères examinés : **38 PASS, 20 N/A, 20 UNVERIFIED**, aucun FAIL constaté dans le périmètre vérifié. Dénominateur : 58. Score et couverture : **65,52 %**. Les critères non vérifiés comptent zéro sans constituer des échecs constatés. Rapport intégral généré : `output/AUDIT_FINAL.md`.

Le score limité reflète notamment l’absence de déploiement, de revue juridique, de scanner historique, de lecteur d’écran, de test réel du zoom et de mesures terrain. Aucun score Lighthouse, promesse 60 FPS ou certification n’est revendiqué.

## Reproduction et récupération

Ouvrir le site sur le serveur local habituel, puis exécuter `playwright-cli -s=dick open http://127.0.0.1:5502/index.html` et `playwright-cli -s=dick run-code --filename output/playwright/qa.js`. Le script retire uniquement le script injecté de Live Server dans l’onglet QA pour éviter que l’enregistrement de captures recharge les formulaires pendant le test. Il ne modifie pas le serveur.

Les six fichiers initiaux sont sauvegardés dans `output/before/`. Aucun fichier métier initial supprimé ; l’illustration originale est inchangée. Le serveur Live Server appartenant à l’utilisateur n’a pas été arrêté.
