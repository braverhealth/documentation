---
icon: building-shield
---

# Sous-traitants

Braver fait appel à un nombre restreint de fournisseurs de services (sous-traitants) pour exploiter sa plateforme. Cette page présente ceux qui peuvent avoir accès à des renseignements personnels des utilisateurs de nos clients ou des patients, le service qu'ils rendent et la région où ils traitent ces renseignements.

| Sous-traitant | Service rendu | Renseignements concernés | Région de traitement |
| ------------- | ------------- | ------------------------ | -------------------- |
| Google Cloud | Hébergement de la plateforme Braver | Données de la plateforme; les dossiers des patients, les discussions, les fichiers et les formulaires remplis sont chiffrés de bout en bout avec des clés que Braver et Google ne détiennent pas | Montréal (Canada); copies de sauvegarde à Toronto (Canada) |
| Gemini sur Vertex AI (Google Cloud) | Fonctionnalités d'intelligence artificielle : résumés, notes cliniques, brouillons de messages | Uniquement le contenu soumis lorsqu'un professionnel déclenche une fonctionnalité, par exemple un fil de discussion à résumer; aucune conservation par Google, aucun entraînement de modèle | Montréal (Canada) |
| Postmark | Envoi des courriels transactionnels (invitations, liens de connexion, codes de sécurité, avis) | Adresse courriel du destinataire et contenu du courriel, sans contenu clinique | États-Unis |
| Twilio | Envoi des messages texte d'authentification | Numéro de téléphone et code de sécurité, sans contenu clinique | États-Unis |
| Alohi (Fax.plus) | Envoi par télécopieur des documents cliniques désignés par un professionnel | Document transmis et données d'acheminement limitées | Montréal et Toronto (Canada); transit de moins d'une heure en Suisse |

### Autres précisions

* La transcription des appels est effectuée par un modèle que Braver exécute elle-même dans son infrastructure à Montréal, sans aucun tiers.
* Gemini n'a pas accès à la plateforme ni à ses données : il ne reçoit que le contenu qu'un professionnel choisit de soumettre à une fonctionnalité d'intelligence artificielle, et le résultat est révisé par ce professionnel avant tout usage.
* Chaque sous-traitant est lié à Braver par une entente écrite qui encadre la confidentialité, la sécurité et la suppression des renseignements. Tout transfert de renseignements hors du Québec fait l'objet d'une évaluation préalable, conformément à la loi.
* Les autres fournisseurs de Braver, comme les outils de travail de notre personnel, ne reçoivent aucun renseignement personnel des utilisateurs de nos clients ni des patients.

Cette liste est mise à jour lors de tout ajout ou changement de sous-traitant. Pour toute question, [écrivez-nous](mailto:support@braver.health).
