---
description: >-
  Cette version est en préparation. Les dates de disponibilité sur iOS,
  Android et le web restent à confirmer.
icon: sparkles
---

# Version 1.11.0

#### 1. Nouvelles fonctionnalités

1. Nouvel éditeur de photos et de vidéos, avec des outils de dessin, de texte, de recadrage, de rotation et de découpage vidéo, ainsi que les commandes Annuler et Rétablir
2. Formulaires enrichis avec des cases à cocher, une option « Autre » avec un champ de texte, et des champs pour joindre des fichiers, des photos ou des vidéos
3. Formulaires liés à un PDF, avec correspondance entre les champs du formulaire et ceux du document, brouillons, reprise du remplissage et historique des versions
4. Possibilité de retirer un formulaire publié dans une discussion, comme un message ou une pièce jointe
5. Les exports PDF des discussions incluent maintenant les réponses aux formulaires dans une annexe accessible depuis le formulaire affiché dans la discussion
6. Archivage et restauration des formulaires, trajectoires, modèles de documents, répertoires et jeux de valeurs dans l'application d'administration, sans perdre l'accès aux contenus existants
7. Les administrateurs autorisés peuvent valider les professions des membres de leur organisation directement dans l'application d'administration

#### 2. Améliorations

1. Les modifications des formulaires, trajectoires et autres ressources des modules sont reçues sans avoir à redémarrer l'application, y compris après une reconnexion
2. Conservation chiffrée des fichiers en attente et reprise plus fiable des téléversements interrompus après un redémarrage de l'application
3. Meilleur support des lecteurs d'écran dans les commandes vidéo, les fenêtres de dialogue, les étapes de configuration du compte, le clavier du code PIN et la recherche de participants
4. Nouveau menu de soutien dans l'application d'administration, pour accéder aux tutoriels et au site d'aide
5. Configuration administrative plus claire : distinction entre les rôles propres au groupe et les rôles hérités, et entre le nom d'un modèle de discussion et le titre des discussions qu'il crée
6. Possibilité pour les administrateurs de débloquer le code de récupération d'un membre sans passer par le soutien
7. Meilleur accompagnement à la création d'un compte lié à Microsoft, Gustav ou LeoMed, avec des indications sur le fournisseur à utiliser pour se connecter
8. Les acteurs réservés à la gestion ne peuvent plus être choisis pour une demande de formulaire. Les demandes destinées aux cliniciens sont temporairement retirées; celles destinées aux proches aidants restent disponibles

#### 3. Corrections

1. Dossiers patients : sauvegarde plus fiable à la création et à la modification, et correction des identifiants qui pouvaient empêcher l'attribution d'un numéro CardioComm
2. Discussions : correction des discussions fermées qui redevenaient ouvertes ou restaient ouvertes sur un autre appareil, et des activités qui pouvaient empêcher l'ouverture d'une discussion
3. Disponibilité : les heures choisies sur iOS sont conservées lorsque le sélecteur est fermé en touchant à l'extérieur, et l'avertissement sur les participants indisponibles se met à jour sans rafraîchir la page
4. Notifications : les participants invités qui n'ont pas encore accepté une discussion ne reçoivent plus les notifications de chaque nouveau message
5. Réseau et profils : les restrictions de joignabilité par profession sont respectées, les lieux de travail sont affichés dans les profils, et les comptes de service ne sont plus proposés comme personnes à appeler
6. Courriels : l'action de retrait vise la bonne adresse lorsque la liste change d'ordre, et les anciennes adresses contenant des accents peuvent être retirées
7. Formulaires : les nombres saisis avec une virgule sont correctement enregistrés et les décimales respectent la précision configurée
8. Création de compte et connexion : conservation des sessions existantes pendant l'inscription, correction des envois multiples de codes de récupération et de la connexion bloquée après une invitation à une adresse de travail partagée
9. Application d'administration : correction de la sélection d'un module qui ne restait pas en place, de l'ordre des champs dans l'éditeur de formulaires et des entrées manquantes entre deux pages du journal d'audit
