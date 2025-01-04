---
icon: network-wired
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Unités organisationnelles

## Qu'est-ce qu'une unité organisationnelle?

Une unité organisationnelle vous aide à séparer les sections de votre organisation afin que les membres qui y sont affectés ne se voient octroyés l'accès qu'aux ressources des sections pertinentes.

L'accès aux ressources suivantes peuvent être ainsi segmentés en utilisant des unités organisationnelles:

* Les informations nominatives des patients
* Les détails des utilisateurs membres d'une unité organisationnelle
* Les [bottins](../bottins.md)
* Les [journaux d'audits](../journaux-daudit.md)
* Les [lieux de travails](../lieux-de-travail/) (seulement la permission de **gestion des lieux de travail**, car leurs détails sont publiques sur le Réseau Braver)
* Les [équipes](../equipes/)
* Les fils de discussions et canaux de soins (voir section en jaune ci-bas pour une précision à cet égard)

{% hint style="warning" %}
L'accès aux fils de discussion et aux canaux de soins est additionnellement contrôlé à l'aide [des équipes](../equipes/).&#x20;

Deux membres d'une même unité organisationnelle ne verront les mêmes fils de discussions ou canaux de soins associé à un patient donné que s'ils ont **également accès à la même équipe** (avec les bonnes permissions).
{% endhint %}

### Unité organisationnelle "mère" et sa descendance

Les unités organisationnelles sont organisées hiérarchiquement de sorte qu'une unité est "sous" une autre unité organisationnelle, son unité "mère".&#x20;

Une unité peut avoir plusieurs unités "enfants" (toutes celles dont elle est l'unité "mère"), et plusieurs unités "descendantes" (toutes celles dont elle est l'unité "mère", "grand-mère", etc.).

{% hint style="info" %}
Seule l'unité organisationnelle "racine" n'a pas de mère. Celle-ci est créée en même temps que l'organisation et **ne peut être supprimée**.

Selon la définition ci-haut, l'unité racine a comme descendance l'ensemble des unités organisationnelles de l'organisation.
{% endhint %}

Lorsqu'un utilisateur se voit octroyé des rôles et permissions dans une unité organisationnelle `A`, il a également les mêmes rôles et permissions dans toutes les unités organisationnelles descendantes de l'unité `A`.

{% hint style="info" %}
Par exemple, une organisation de santé qui aurait deux centres d'hébergement dans des villes distinctes, pourrait créer une unité par centre d'hébergement, car les résidents de chacun ne circulent pas entre elles et les intervenants de santé oeuvrant dans l'un des centre n'ont pas besoin de référer aux patients de l'autre centre.
{% endhint %}

## Est-ce que j'ai besoin de créer des unités organisationnelles pour mon organisation?

Dans bien des cas, non. Une organisation comprend d'emblée une unité "racine" (qui ne peut pas d'ailleurs pas être supprimée) et pour la plupart des petites organisations, cette unité est suffisante.

Or, si votre organisation comprend plusieurs sites, où des employés distincts travaillent, où des administrateurs différents ont des responsabilités propres à différents sites et où des patients distincts sont suivis ou traités, les unités organisationnelles peuvent vous permettre de mettre en place des contrôles d'accès adéquats pour chacun.
