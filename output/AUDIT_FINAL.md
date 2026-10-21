# AUDIT FINAL — ZRTDEV WebInspector FULL

Périmètre: Entreprise Dick — maquette locale http://127.0.0.1:5502/ ; index.html et mentions-legales.html ; visiteur anonyme ; 19 octobre 2026 ; budget de complexité 300 € ; pas de publication

Score /100: 65.51724137931035; couverture %: 65.51724137931035; dénominateur: 58

Comptes: {"PASS":38,"FIXED":0,"FAIL":0,"N/A":20,"UNVERIFIED":20}

Limitations: Audit de maquette, pas certification juridique ou de sécurité.; Pas de Safari/Firefox, lecteur d’écran, zoom réel ou métriques Core Web Vitals terrain.; Google Maps d’origine affiche Kyriad Annemasse Genève : adresse exacte à confirmer.; Noindex conservé volontairement ; formulaire sans envoi ; mentions légales à compléter avant publication.

## 1. 404 — UNVERIFIED

{
  "id": 1,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Comportement 404 du futur hébergeur non défini ; aucune page 404 métier testée.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 2. CTA — PASS

{
  "id": 2,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "CTA général et deux CTA métier ouverts, validation locale et retour au déclencheur testés.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 3. Title — PASS

{
  "id": 3,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Titres distincts, explicites, non vides sur les deux pages.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 4. Meta description — PASS

{
  "id": 4,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Descriptions distinctes et factuelles dans les deux HTML.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 5. Favicon — PASS

{
  "id": 5,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "favicon.svg chargé dans le navigateur ; format SVG valide.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 6. Robots — PASS

{
  "id": 6,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Les deux pages restent en noindex en tant que maquette non publiée.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 7. Sitemap — N/A

{
  "id": 7,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucun domaine de publication ; sitemap de production volontairement différé.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 8. Alt — PASS

{
  "id": 8,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "SVG original avec texte alternatif, scène avec nom accessible, décorations aria-hidden.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 9. Responsive — PASS

{
  "id": 9,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Deux pages à 320,375,390,520,768,1024,1440 px, captures revues et absence de débordement.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 10. Loading — PASS

{
  "id": 10,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Contenu HTML immédiatement disponible ; scène CSS sans attente ; carte volontaire avec message et lien de repli.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 11. Erreurs formulaire — PASS

{
  "id": 11,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Champs vides, e-mail/téléphone invalides et budget invalide signalés. Pas de serveur : validation client de démonstration uniquement.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 12. Remerciement — PASS

{
  "id": 12,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Confirmation explicite de validation locale, sans prétendre à un envoi réel.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 13. Mentions légales — UNVERIFIED

{
  "id": 13,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Juridiction française ; informations légales manquantes identifiées dans mentions-legales.html, validation entreprise requise avant publication.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 14. Confidentialité — UNVERIFIED

{
  "id": 14,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Fonctionnement local documenté ; information complète et revue juridique du futur site non réalisées.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 15. Consentement cookies — UNVERIFIED

{
  "id": 15,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Carte bloquée avant activation et retirable, mais ce mécanisme ne constitue pas une validation juridique du consentement Google.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 16. Conditions contractuelles — N/A

{
  "id": 16,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucune vente, commande ni relation contractuelle créée par la maquette.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 17. Injection SQL — N/A

{
  "id": 17,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucun serveur ni base SQL.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 18. Injection NoSQL — N/A

{
  "id": 18,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucun serveur ni base NoSQL.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 19. Bruteforce — N/A

{
  "id": 19,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucune authentification.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 20. Antispam — N/A

{
  "id": 20,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucun envoi de formulaire ni endpoint exploitable pour du spam.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 21. Secrets applicatifs — PASS

{
  "id": 21,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Inspection des six fichiers livrables : aucune clé, jeton ou secret applicatif nécessaire ni identifié. Inspection limitée à ces sources.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 22. Mots de passe — N/A

{
  "id": 22,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucun mot de passe ni compte.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 23. E2E — PASS

{
  "id": 23,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "41 assertions navigateur finales passent ; ouverture, validation, fermeture, contexte et navigation.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 24. Formulaires — PASS

{
  "id": 24,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Formulaire sans effet réseau, erreurs et succès local testés, fermeture et remise à zéro testées.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 25. Cas limites — PASS

{
  "id": 25,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Vide, Unicode, texte HTML inerte, budget absent/négatif/zéro testés ; pas de concurrence serveur applicable.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 26. Variables environnement — N/A

{
  "id": 26,
  "status": "N/A",
  "evidence": [],
  "reason": "Pas de configuration par variables environnement dans l’application statique.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 27. Erreurs réseau — UNVERIFIED

{
  "id": 27,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Liens alternatifs et texte de repli présents ; simulation offline complète non exécutée.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 28. Hiérarchie Hn — PASS

{
  "id": 28,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Un H1 par page, H2 de sections puis H3 de prestations et localisation.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 29. Canonical — N/A

{
  "id": 29,
  "status": "N/A",
  "evidence": [],
  "reason": "Domaine inconnu, aucune canonical fictive ajoutée. À configurer lors de la publication.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 30. Indexabilité — PASS

{
  "id": 30,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "noindex volontaire sur la maquette ; ne pas réutiliser tel quel en production indexable.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 31. Open Graph — UNVERIFIED

{
  "id": 31,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Open Graph textuel présent ; image sociale et URL absolue à configurer après choix du domaine.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 32. Twitter Cards — N/A

{
  "id": 32,
  "status": "N/A",
  "evidence": [],
  "reason": "Carte Twitter non incluse dans cette maquette locale sans URL publique.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 33. URLs lisibles — PASS

{
  "id": 33,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "index.html et mentions-legales.html ; ancres descriptives et stables.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 34. Maillage interne — PASS

{
  "id": 34,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Liens réciproques entre les deux pages et aucune ancre manquante sur accueil.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 35. Sitemap avancé — N/A

{
  "id": 35,
  "status": "N/A",
  "evidence": [],
  "reason": "Pas de sitemap sans domaine publié.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 36. Robots avancé — PASS

{
  "id": 36,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Noindex assumé et documenté ; absence de robots.txt de production.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 37. Métadonnées uniques — PASS

{
  "id": 37,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Comparaison des métadonnées des deux HTML : titres et descriptions différents.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 38. Mobile — PASS

{
  "id": 38,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "320 et 375 px contrôlés sur les deux pages, capture 320 revérifiée visuellement.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 39. Tablette — PASS

{
  "id": 39,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "768 px : largeur document égale à largeur viewport sur les deux pages.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 40. Desktop — PASS

{
  "id": 40,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "1440 px : captures desktop revues et absence de débordement.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 41. Breakpoints — PASS

{
  "id": 41,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "520 et 1024 px contrôlés, en plus des largeurs demandées.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 42. Débordements — PASS

{
  "id": 42,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Aucun débordement horizontal constaté dans les 14 contrôles de largeur.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 43. Navigation tactile — PASS

{
  "id": 43,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Boutons principaux mesurés entre 44 et 56 px ; navigation mobile conservée. Test au clic navigateur, pas sur appareil physique.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 44. Typographie fluide — PASS

{
  "id": 44,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Titres fluides, corps 15–16 px suivant zone, captures petites largeurs sans troncature.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 45. Images adaptatives — PASS

{
  "id": 45,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Images SVG vectorielles et dimensions explicites ; pas de srcset nécessaire pour ces ressources.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 46. Orientation — PASS

{
  "id": 46,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Paysage 844x390 contrôlé sans débordement ; vue portrait 390x844 revue.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 47. Zoom — UNVERIFIED

{
  "id": 47,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Zoom navigateur réel 200/400 % non testé ; les contrôles de largeur ne le remplacent pas.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 48. XSS — PASS

{
  "id": 48,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Aucune injection HTML ni évaluation dynamique dans script.js ; saisie de balisage reste dans textarea. Inspection du périmètre local, pas certification.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 49. CSRF — N/A

{
  "id": 49,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucune mutation réseau ni session authentifiée.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 50. Headers — UNVERIFIED

{
  "id": 50,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Headers de production inconnus ; pas de modification de sécurité globale du serveur Live Server.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 51. Dépendances — N/A

{
  "id": 51,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucune dépendance applicative, aucun lockfile ; Playwright est un outil de test hors application.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 52. Autorisations — N/A

{
  "id": 52,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucun rôle, objet privé ni API serveur.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 53. Uploads — N/A

{
  "id": 53,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucun upload.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 54. Sessions — N/A

{
  "id": 54,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucune session applicative.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 55. Secrets dépôt et historique — UNVERIFIED

{
  "id": 55,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Pas de dépôt Git dans ce dossier ; aucun audit historique ou Gitleaks exécuté.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 56. Liens cassés — UNVERIFIED

{
  "id": 56,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Ancres et navigation locale testées, Google Maps testé ; lien confidentialité Google non parcouru, donc couverture externe partielle.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 57. SEO JavaScript — PASS

{
  "id": 57,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Contenu métier, coordonnées et liens dans le HTML initial ; JavaScript limité aux interactions.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 58. Schema — N/A

{
  "id": 58,
  "status": "N/A",
  "evidence": [],
  "reason": "Pas de JSON-LD ajouté : coordonnées et fiche entreprise à confirmer avant données structurées publiques.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 59. Hreflang — N/A

{
  "id": 59,
  "status": "N/A",
  "evidence": [],
  "reason": "Site uniquement français.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 60. Redirections — N/A

{
  "id": 60,
  "status": "N/A",
  "evidence": [],
  "reason": "Aucune redirection applicative ; redirections de publication à définir avec le domaine.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 61. Images SEO — PASS

{
  "id": 61,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "SVG original 2488 octets, dimensions explicites, lazy loading hors premier écran, favicon 223 octets.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 62. Contenu SEO — UNVERIFIED

{
  "id": 62,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Contenus fournis conservés sans fausses promesses ; adresse exacte non confirmée, Google Maps affiche un établissement voisin.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 63. Code mort — PASS

{
  "id": 63,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Inspection manuelle des trois fichiers actifs : ancienne cascade de styles remplacée ; styles communs légaux et formulaire conservés. Pas de preuve exhaustive par couverture.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 64. Duplication — UNVERIFIED

{
  "id": 64,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Organisation simplifiée et handlers mutualisés ; aucune mesure outillée de duplication.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 65. JavaScript — UNVERIFIED

{
  "id": 65,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Syntaxe et erreurs JavaScript vérifiées, 41 assertions passent ; profilage CPU approfondi non effectué.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 66. CSS — UNVERIFIED

{
  "id": 66,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "CSS réorganisé, responsive testé ; aucune mesure exhaustive des règles inutilisées.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 67. Bundle — PASS

{
  "id": 67,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "53540 octets pour les six livrables, estimation gzip 16055 octets ; mesure locale, hors Google Maps.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 68. Chargement — UNVERIFIED

{
  "id": 68,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Scène sans téléchargement, SVG lazy et Maps volontaire ; cache/transport du futur hébergeur non vérifiés.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 69. Maintenabilité — PASS

{
  "id": 69,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "HTML/CSS/JS séparés, variables CSS, modules fonctionnels isolés, guide local et scripts QA fournis.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 70. Clavier et focus — PASS

{
  "id": 70,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Focus initial, confinement Tab/Shift+Tab, fermeture Échap et restitution du focus testés. Focus visible sur captures.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 71. Noms accessibles — PASS

{
  "id": 71,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Boutons nommés, labels associés aux champs, erreurs aria-describedby et statut aria-live conservés.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 72. Contrastes — PASS

{
  "id": 72,
  "status": "PASS",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md",
    "output/playwright/results.json"
  ],
  "reason": "Paires principales calculées de 4.94:1 à 14.65:1, erreurs à 6.58:1 ; décorations exclues. Contrôle des couleurs livrées, pas des contenus Google.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 73. Sémantique et lecteur écran — UNVERIFIED

{
  "id": 73,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Landmarks et ARIA inspectés ; lecture réelle avec lecteur d’écran non réalisée.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 74. Régression visuelle — UNVERIFIED

{
  "id": 74,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Captures avant/après revues ; pas encore de référence de design approuvée par le client ni comparaison pixel automatisée.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 75. Performances — UNVERIFIED

{
  "id": 75,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Pas de Lighthouse répété ni LCP/INP/CLS terrain ; faible poids source ne constitue pas une mesure Core Web Vitals.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 76. Logs — N/A

{
  "id": 76,
  "status": "N/A",
  "evidence": [],
  "reason": "Pas de journal serveur applicatif ; absence d’erreurs JavaScript vérifiée séparément.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 77. Préproduction — UNVERIFIED

{
  "id": 77,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Sauvegarde locale conservée ; hébergement de préproduction et parité production non configurés.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}

## 78. Optimisation globale du code — UNVERIFIED

{
  "id": 78,
  "status": "UNVERIFIED",
  "evidence": [
    "output/design-and-audit.md",
    "output/verification.md"
  ],
  "reason": "Architecture et poids mesurés, mais absence de profilage comparable avant/après sur appareils physiques.",
  "scope": "Deux pages locales, visiteur anonyme, Chromium ; sources HTML/CSS/JS/SVG",
  "reviewer": "Codex",
  "date": "2026-10-19"
}
