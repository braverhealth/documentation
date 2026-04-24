---
description: >-
  Cette version est disponible dans les magasins d'application sur iOS, Android et le web.
icon: star
---

# Version 1.8.1

#### 1. Nouvelles fonctionnalités

1. **Modèles de fils dans les trajectoires** — Il est maintenant possible de définir des modèles de fils directement dans une trajectoire, incluant un titre, une liste d'acteurs à inclure et un message de démarrage.
2. **Suggestion de trajectoire configurable** — Les administrateurs peuvent désormais configurer les règles déterminant si une trajectoire doit être auto-suggérée dans un dossier patient (ex. : uniquement si le patient est actif, ou dans une fenêtre de dates précise).
3. **Sélection intelligente des membres d'équipe dans les fils de soins** — Lors de la création d'un fil, si une équipe compte plusieurs membres, aucun n'est présélectionné par défaut (le fil atterrit en triage) ; si l'équipe n'a qu'un seul membre, celui-ci est sélectionné automatiquement.
4. **Mode d'assignation configurable pour les acteurs de trajectoire** — Les acteurs d'une trajectoire peuvent maintenant être configurés avec trois modes : une seule personne désignée (Single), aucun membre par défaut (None), ou tous les membres participants (All).
5. **Assignation optionnelle lors du démarrage d'un fil** — Il est maintenant possible de choisir de ne pas assigner de membre lors du démarrage d'un fil dans un canal de soins, en plus de pouvoir annuler.
6. **Le créateur d'une discussion peut toujours la fermer** — Désormais, le créateur d'une discussion a toujours la possibilité de la fermer, peu importe son rôle.

#### 2. Améliorations

1. **Indicateur de chargement lors de l'export PDF** — Un indicateur de chargement est maintenant affiché lors de la génération d'un export PDF.

#### 3. Corrections

1. **Fil parfois non créé lors du clic sur le bouton + dans un canal de soins** — Un problème intermittent empêchant la création d'un fil via le bouton + a été corrigé.
2. **Patient avec compte actif non inclus par défaut (Braver Connect)** — Un patient ayant un compte actif n'était pas inclus par défaut dans la vue d'un clinicien dans Braver Connect. Ce problème est corrigé.
3. **Retirer un contact du réseau ne le supprimait pas de la liste** — Modifier l'état `is_listed` d'un contact à `false` ne le retirait pas correctement de la liste des contacts listés. Ce problème est corrigé.
4. **Étape de notification non affichée sur le web** — L'étape de demande de permission de notification dans l'assistant de configuration n'est plus affichée inutilement sur le web.
