---
description: >-
  Cette version est en cours de déploiement dans les magasins d'application sur
  iOS, Android et le web.
icon: sparkles
---

# Version 1.10.0

#### 1. Nouvelles fonctionnalités

1. Remplissage et signature des formulaires de soins directement dans l'application, sur mobile comme sur le web
2. Nouveau rôle de gestion de trajectoire, permettant de créer des canaux de soins et d'y assigner des personnes sans donner accès au contenu privé qui y est échangé
3. Panneau de configuration des restrictions, avec une entrée « Gérer les restrictions » dans le menu contextuel de la boîte de réception
4. Les restrictions couvrent maintenant des actions autres que l'envoi de messages
5. Affichage des activités dans l'export PDF
6. Affichage du statut actuel des participants dans l'export PDF
7. Distinction entre les proches aidants et les cliniciens dans l'export PDF
8. Ajout des réactions dans l'export PDF destiné aux proches aidants
9. Des libellés propres à chaque état remplacent l'avis générique « La boîte de réception a été mise à jour »

#### 2. Améliorations

1. Export PDF pour les proches aidants plus léger
2. Sélection des participants plus rapide : les discussions des contacts ne sont plus chargées lors de l'ajout d'un participant
3. Réduction des sondages pour le statut des appels
4. Les lecteurs d'écran annoncent maintenant les champs de texte qui contiennent déjà du texte
5. Une valeur de choix est maintenant obligatoire lors de la définition d'un champ de formulaire

#### 3. Corrections

1. Correction du sélecteur de date affiché comme un écran gris, et de la soumission qui restait désactivée malgré tous les champs remplis, dans les formulaires Braver Connect
2. Correction d'un plantage dans les canaux de soins lorsqu'un formulaire était enregistré sans ses libellés obligatoires
3. Correction des champs de formulaire dépréciés qui apparaissaient dans les nouvelles instances de formulaire
4. Correction des participants d'équipe qui ne pouvaient pas être ajoutés lors de la création d'un canal de soins
5. Correction d'un écran blanc à l'ouverture des détails d'un canal de soins en mode autonome
6. Correction des restrictions de boîte de réception qui n'étaient pas appliquées aux patients sur Braver Connect
7. Correction des utilisateurs retirés qui restaient assignables dans les discussions existantes
8. Correction des actions d'acceptation et de refus manquantes pour les cliniciens invités
9. Correction des brouillons qui n'étaient pas enregistrés ou retirés de façon réactive
10. Correction des exports PDF pour les patients qui affichaient le contenu original des messages plutôt que les dernières révisions
11. Correction de l'impossibilité de mettre fin à une rencontre pour tous les participants, et du statut d'appelant manquant, sur les appels LeoMed
12. Correction d'un plantage sur iOS à l'ouverture de l'éditeur de médias pour un fichier récemment téléversé
13. Correction de la création de compte par SSO Microsoft qui échouait à la première tentative
14. Correction de la connexion par code QR qui demandait le code PIN deux fois sur mobile
15. Correction du filtre « Où je participe » qui retournait des résultats incomplets dans les dossiers patients
