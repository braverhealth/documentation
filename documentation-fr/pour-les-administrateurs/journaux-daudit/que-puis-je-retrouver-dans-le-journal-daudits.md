# Que puis-je retrouver dans le journal d'audits?

## Résumé

Chaque entrée d'audit capture les informations essentielles pour répondre aux questions fondamentales de l'audit :

* Qui ? (actor\_id)
* Quoi ? (action)
* Sur quoi ? (target + scopes)
* Où ? (group\_id)
* Quand ? (timestamp)

Cette structure permet une traçabilité complète des actions effectuées dans le système, avec suffisamment de contexte pour comprendre précisément ce qui s'est passé.

## Composantes principales d'une entrée d'audit

### `id`

* Identifiant unique de l'entrée d'audit
* Permet de tracer de manière unique chaque action auditée

### `group_id`

* Identifiant de l'unité organisationnelle dans lequel l'action a été effectuée
* Permet de contextualiser l'action dans son périmètre organisationnel

### `actor_id`

* Identifiant de l'utilisateur qui a effectué l'action
* Répond à la question "Qui a fait l'action ?"

### `target`

* Type de ressource concernée par l'action
* Indique sur quel type d'objet l'action a été effectuée (patient, discussion, fichier, etc.)
* Répond à la question "Sur quoi ?"

### `scopes`

* Contexte détaillé de l'action avec les identifiants spécifiques
* Contient les références précises des objets concernés (patient\_id, discussion\_id, etc.)
* Permet d'identifier exactement la portée de l'action

### `action`

* Type d'action effectuée (création, lecture, modification, etc.)
* Répond à la question "Quelle action ?"

### `timestamp`

* Date et heure précise de l'action
* Répond à la question "Quand ?"

## Actions auditées par type de ressource

### Patient

* CREATE: "Création d'un dossier patient"
* READ: "Consultation d'un dossier patient"
* UPDATE: "Modification des informations d'un patient"
* DELETE: "Suppression d'un dossier patient"
* LIST: "Consultation de la liste des patients"
* EXPORT: "Export des données d'un patient"

### Discussion

* CREATE: "Création d'une discussion"
* READ: "Consultation d'une discussion"
* UPDATE: "Modification d'une discussion"
* DELETE: "Suppression d'une discussion"
* LIST: "Consultation de la liste des discussions"
* EXPORT: "Export d'une discussion"

### Canal de soin

* CREATE: "Création d'un canal de soin"
* READ: "Consultation d'un canal de soin"
* UPDATE: "Modification d'un canal de soin"
* DELETE: "Suppression d'un canal de soin"
* LIST: "Consultation de la liste des canaux de soin"

### Fichier

* CREATE: "Ajout d'un fichier"
* READ: "Consultation d'un fichier"
* UPDATE: "Modification d'un fichier"
* DELETE: "Suppression d'un fichier"
* LIST: "Consultation de la liste des fichiers"

### Définition de Formulaire

* CREATE: "Création d'un formulaire"
* READ: "Consultation d'un formulaire"
* UPDATE: "Modification d'un formulaire"
* DELETE: "Suppression d'un formulaire"
* LIST: "Consultation de la liste des formulaires"

### Instance de formulaire

* CREATE: "Création d'une instance de formulaire"
* READ: "Consultation d'une instance de formulaire"
* UPDATE: "Modification d'une instance de formulaire"
* DELETE: "Suppression d'une instance de formulaire"
* LIST: "Consultation de la liste des instances de formulaire"

### Proche aidant

* CREATE: "Création d'un compte proche aidant"
* READ: "Consultation d'un profil proche aidant"
* UPDATE: "Modification d'un profil proche aidant"
* DELETE: "Suppression d'un compte proche aidant"
* LIST: "Consultation de la liste des proches aidant"
* INVITE: "Invitation d'un nouveau proche aidant pour un patient"

### Équipe de travail

* CREATE: "Création d'une équipe de travail"
* READ: "Consultation d'une équipe de travail"
* UPDATE: "Modification d'une équipe de travail"
* DELETE: "Suppression d'une équipe de travail"
* LIST: "Consultation de la liste des équipes de travail"

### Invitation

* CREATE: "Création d'une invitation"
* READ: "Consultation d'une invitation"
* UPDATE: "Modification d'une invitation"
* DELETE: "Suppression d'une invitation"
* LIST: "Consultation de la liste des invitations"

### Unité organisationnelle

* CREATE: "Création d'une unité organisationnelle"
* READ: "Consultation d'une unité organisationnelle"
* UPDATE: "Modification d'une unité organisationnelle"
* DELETE: "Suppression d'une unité organisationnelle"
* LIST: "Consultation de la liste des unités organisationnelles"

### Établissement

* CREATE: "Création d'un établissement"
* READ: "Consultation d'un établissement"
* UPDATE: "Modification d'un établissement"
* DELETE: "Suppression d'un établissement"
* LIST: "Consultation de la liste des établissements"

### Rôles utilisateur

* CREATE: "Création d'un rôle utilisateur"
* READ: "Consultation des rôles utilisateur"
* UPDATE: "Modification des rôles utilisateur"
* DELETE: "Suppression d'un rôle utilisateur"
* LIST: "Consultation de la liste des rôles utilisateur"

### Membres du groupe

* CREATE: "Ajout d'un membre au groupe"
* READ: "Consultation des membres du groupe"
* UPDATE: "Modification des membres du groupe"
* DELETE: "Retrait d'un membre du groupe"
* LIST: "Consultation de la liste des membres du groupe"
* INVITE: "Invitation d'un nouveau membre dans une unité organisationnelle"

### Audit

* CREATE: "Création d'une entrée d'audit"
* READ: "Consultation d'une entrée d'audit"
* LIST: "Consultation de la liste des entrées d'audit"
* EXPORT: "Export des données d'audit"
