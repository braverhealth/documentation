---
icon: rectangle-history
---

# Journaux d'audit

## Qu'est-ce que les journaux d'audit?

En tant qu'organisation de santé, il est possible que vous soyez dans l'obligation de garder une trace de toutes les activités importantes des membres de votre organisation en ce qui a trait à leur accès aux données de santé des patients pris en charge.

Braver collecte automatiquement les accès en lecture effectués par les membres de l'organisation à toutes les informations dont votre organisation est la gardienne. Braver collecte aussi automatiquement les actions de création et modification des renseignements, ainsi que toute action de communication effectuée sur la plateforme.

{% hint style="success" %}
Pour une liste complète des éléments capturés dans les journaux d'audit, référez-vous à la page [Que puis-je retrouver dans le journal d'audit](que-puis-je-retrouver-dans-le-journal-daudits.md).
{% endhint %}

### Que constitue un élément historique du journal d'audit?

Les journaux d'audit ne stockent pas le _contenu_ de l'action effectuée (p.ex. les détails nominatifs d'un patient consulté). Ils ne stockent que des métadonnées sur l'action, des dates et des référentiels:

* Le type d'action: _Création, modification, suppression, etc._
* Le type d'entité: _Patient, Fil de discussion, Canal de soins, etc._
* L'identifiant de l'acteur (l'utilisateur ou le compte de service dans le cas d'automatisations)
* L'identifiant de l'entité sujet de l'action (p.ex. du patient ayant été consulté, du fil de discussion créé, etc.)
* La date et l'heure où l'action a été effectuée

### Combien de temps ces journaux sont conservés?

Actuellement, les journaux sont conservés indéfiniment et ne peuvent jamais être supprimés. Dans le futur, il vous sera possible de spécifier une durée de conservation de ces journaux.