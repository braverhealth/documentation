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
4. Réduction des sondages sur les connexions déjà actives
5. Les lecteurs d'écran annoncent maintenant les champs de texte qui contiennent déjà du texte
6. Une valeur de choix est maintenant obligatoire lors de la définition d'un champ de formulaire
7. Mise à jour du niveau d'API cible sur Android pour répondre aux exigences de Google Play

#### 3. Corrections

1. Correction du sélecteur de date affiché comme un écran gris dans les formulaires Braver Connect
2. Correction de la soumission de formulaire désactivée dans Braver Connect malgré tous les champs remplis
3. Correction des formulaires de sollicitation qui ne pouvaient pas être créés dans une trajectoire
4. Correction d'un plantage dans les canaux de soins lorsqu'un formulaire était enregistré sans ses libellés obligatoires
5. Correction de la validation manquante des acteurs obligatoires dans les formulaires de trajectoire
6. Correction de la suppression d'un choix de champ qui retirait la dernière option au lieu de celle sélectionnée
7. Correction du champ de valeur initiale qui perdait le focus à chaque frappe, et qui offre maintenant une liste de sélection pour les champs à choix
8. Correction des champs de formulaire dépréciés qui apparaissaient dans les nouvelles instances de formulaire
9. Correction de l'ordre de tabulation dans la vue de configuration des champs
10. Correction de l'application des proches aidants qui pouvait publier de nouvelles versions de formulaire
11. Correction du titre et de la description personnalisés qui n'apparaissaient pas immédiatement après la soumission d'un formulaire
12. Correction des libellés en anglais affichés dans les menus de champs de formulaire en français dans la console d'administration
13. Correction du statut de traduction d'un identifiant de ressource affiché comme incomplet lorsque la description optionnelle était vide
14. Correction d'un premier message exigé à tort lors de la création d'un canal de soins pour les équipes de proches aidants internes
15. Correction des participants d'équipe qui ne pouvaient pas être ajoutés lors de la création d'un canal de soins
16. Correction des participants qui ne pouvaient pas être retirés d'une trajectoire
17. Correction d'un écran blanc à l'ouverture des détails d'un canal de soins en mode autonome
18. Correction des avatars d'équipe de proches aidants affichés en double dans les canaux de soins
19. Correction des canaux de soins archivés qui n'étaient pas distingués visuellement des canaux actifs
20. Correction des participants d'équipe qui pouvaient gérer les restrictions de leur propre équipe
21. Correction des restrictions de boîte de réception qui n'étaient pas appliquées aux patients sur Braver Connect
22. Correction des restrictions qui n'étaient pas reflétées dans l'interface des fils de discussion
23. Correction de l'ajout d'un proche aidant à une deuxième équipe de proches aidants depuis un dossier patient
24. Correction des titres incorrects sur les fils de discussion créés à partir d'une image jointe
25. Correction des utilisateurs retirés qui restaient assignables dans les discussions existantes
26. Correction des actions d'acceptation et de refus manquantes pour les cliniciens invités
27. Correction du statut d'assignation qui ne se mettait pas à jour lorsqu'un membre était retiré de toutes ses équipes
28. Correction d'une vue de fil partagé vide, et du chargement infini des fils ouverts depuis les notifications par courriel, dans Braver Connect
29. Correction d'un statut d'invitation incorrect lors du partage d'un fil avec un nouveau contact, qui bloquait les invitations formelles
30. Correction des patients nouvellement créés qui n'étaient pas liés au fil de discussion dont ils provenaient
31. Correction des exigences de consentement du patient incohérentes
32. Correction du message d'accueil présenté aux proches aidants lorsqu'ils reçoivent une discussion
33. Correction des brouillons qui n'étaient pas enregistrés ou retirés de façon réactive, et de l'horodatage d'enregistrement qui se mettait à jour au rafraîchissement plutôt qu'à l'enregistrement
34. Correction du défilement qui s'arrêtait lorsque le pointeur passait au-dessus d'un message
35. Correction des exports PDF pour les patients qui affichaient le contenu original des messages plutôt que les dernières révisions
36. Correction de l'entrée d'export PDF absente du menu contextuel
37. Correction de l'impossibilité de mettre fin à une rencontre pour tous les participants, et du statut d'appelant manquant, sur les appels LeoMed
38. Correction des effets d'arrière-plan vidéo qui ne s'appliquaient pas lorsqu'ils étaient activés avant la caméra, sur le web
39. Correction de l'éditeur vidéo qui ne s'ouvrait pas pour les vidéos jointes téléversées
40. Correction d'un plantage sur iOS à l'ouverture de l'éditeur de médias pour un fichier récemment téléversé
41. Correction de l'éditeur de photos qui perdait son état après la mise en arrière-plan de l'application
42. Correction de la création de compte par SSO Microsoft qui échouait à la première tentative, et des utilisateurs ainsi provisionnés qui ne pouvaient pas rejoindre un fil depuis un lien d'invitation
43. Correction des sessions actives qui étaient fermées lors de la création d'un compte à partir d'une invitation
44. Correction des notifications et des erreurs génériques présentées aux utilisateurs dont l'invitation était expirée
45. Correction de la connexion par code QR qui demandait le code PIN deux fois sur mobile
46. Correction d'un code PIN désuet exigé pour déverrouiller un appareil secondaire après un changement
47. Correction d'un message de code d'accès erroné affiché après une saisie réussie sur iOS
48. Correction de l'impossibilité d'effacer des caractères après une tentative de mot de passe échouée
49. Correction d'une page blanche à l'arrivée dans la console d'administration depuis l'application clinicienne sans session active
50. Correction des contrôles de provisionnement d'utilisateurs non visibles au premier chargement, et du provisionnement qui échouait après un changement de profession
51. Correction d'une fenêtre de création d'identifiant de ressource qui ne répondait pas
52. Correction d'une dernière page vide dans le journal d'audit lorsque le nombre d'entrées était un multiple exact de la taille de page
53. Correction de l'ordre incohérent des onglets de langue dans les formulaires de localisation
54. Correction du filtre « Où je participe » qui retournait des résultats incomplets dans les dossiers patients
55. Correction des avatars de lieu de travail incohérents entre le réseau et le profil
56. Correction du statut d'une période d'indisponibilité qui ne se mettait pas à jour immédiatement après l'enregistrement
57. Correction du bouton de mise à jour qui ne répondait pas au premier clic sur le web
58. Correction de l'icône du répertoire qui repassait de « Retirer » à « Ajouter » après l'ajout d'un utilisateur sur mobile
59. Correction des échecs de téléversement d'avatar dans le profil
60. Correction du contenu affiché sous les barres système
61. Correction du texte mal aligné verticalement dans les champs de recherche sur Android
62. Correction de l'alignement du compteur de caractères sur le champ de code de validation par courriel
63. Correction du canal de livraison qui ne revenait pas à Braver Connect après le retrait d'un appareil
64. Correction de la recherche de lieu de travail qui ignorait la localisation de la requête initiale
65. Correction d'une notification massive qui pouvait être déclenchée lors du retrait d'une boîte de réception inutilisée des discussions
