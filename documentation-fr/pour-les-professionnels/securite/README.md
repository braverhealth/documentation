---
icon: shield-check
---

# Sécurité

La sécurité est un aspect central de l'ADN de Braver. Aucune solution de communication clinique sur le marché ne va aussi loin que Braver pour protéger les informations échangées.

<details>

<summary>Notre modèle de sécurité en quelques lignes</summary>

* Les fils de discussions sont chiffrés de bout en bout avec des clés de chiffrement AES que seul les participants sont en mesure de connaître
* Les fichiers échangés (photos, documents, vidéos) sont également chiffrés avec des clés AES uniques, elles-mêmes chiffrées de sorte que seules les gens avec qui les fichiers ont été partagés sont en mesure de connaître
* Le contenu de chaque fiche patient est séparément chiffré avec une clé AES seulement déchiffrable par une clé privée détenue par le propriétaire de cette fiche patient (un utilisateur ou une unité organisationnelle).
* Chaque message partagés dans un fil de discussion est signé avec la clé de l'auteur et figé dans l'historique du fil de discussion, nous permettant de garantir qu'un fil de discussion n'a pas été façonné artificiellement ou modifié de manière non autorisé
* Les données préservées sur l'appareil mobile utilisé par un usager sont toutes chiffrées au repos avec une clé AES conservés dans le module de sécurité matériel fournit par les apparail iOS et Android. Aucune donnée n'est préservée dans une session Web.
* Les sessions mobiles et Web s'auto-verrouille après un certain temps d'inactivité et requiert que l'usager déverrouille avec un NIP ou une reconnaissance biométrique.
* Chaque interaction avec l'infrastructure infonuagique de Braver est systématiquement vérifiée vis-à-vis les autorisation de l'usager et enregistrée dans un journal d'audit.

</details>

{% hint style="info" %}
Si vous désirez en savoir plus sur notre modèle de sécurité, nous pouvons vous fournir une documentation très détaillée, ainsi que les résultats d'audits indépendants de sécurité et de tests d'intrusion effectués annuellement.&#x20;

[Contactez-nous au besoin!](mailto:security@braver.health)
{% endhint %}

**N'hésitez-pas à consulter** [**nos guides dédiés**](https://braver-1.gitbook.io/braver/training/pour-les-professionnels/securite) **pour voir rapidement comment configurer des éléments de sécurité de votre compte.**
