---
icon: volume-slash
description: >-
  Que faire si aucun son ne se rend durant un appel audio ou vidéo dans
  Braver, alors que la connexion et la vidéo fonctionnent normalement.
---

# Aucun son durant un appel

## Le problème

Durant un appel audio ou vidéo dans Braver, un participant ne réussit pas à entendre l'appel: aucun son ne sort de ses haut-parleurs ou de son casque, même si la vidéo et le micro fonctionnent correctement.

{% hint style="info" %}
Ce type de problème n'est pas spécifique à Braver. Il est généralement causé par la configuration audio de l'ordinateur ou du navigateur, et peut donc survenir avec n'importe quelle application d'appel (Braver, Teams, Zoom, etc.).
{% endhint %}

## Causes possibles

Avant de contacter le soutien technique, voici les éléments les plus fréquents à vérifier:

* Le son n'est pas coupé dans l'appel Braver (voir les [actions possibles dans un appel](../pour-les-professionnels/appels-audios-et-videos/README.md)).
* Le volume général de l'ordinateur ou de l'appareil mobile n'est pas fermé ou en mode silencieux.
* Le microphone et le son ne sont pas bloqués dans les permissions du navigateur.
* **Le bon périphérique de sortie audio (haut-parleurs, casque, etc.) est sélectionné sur l'ordinateur.** C'est la cause la plus fréquente, particulièrement sur les ordinateurs reliés à plus d'un périphérique audio (ex.: haut-parleurs intégrés, casque filaire ou Bluetooth, écran externe avec haut-parleurs).

## La solution: vérifier le périphérique de sortie audio dans Windows

Ce cas a été observé sur **Windows**, avec le navigateur **Google Chrome**: le son de l'appel Braver ne sortait pas par le bon périphérique, puisque Windows dirigeait l'audio de Chrome vers un périphérique différent de celui réellement utilisé par la personne (par exemple les haut-parleurs de l'écran plutôt que son casque).

{% hint style="warning" %}
Windows permet de choisir un périphérique de sortie par défaut pour l'ensemble du système, **mais aussi un périphérique de sortie propre à chaque application** (dont les navigateurs comme Chrome). Le bon périphérique peut donc être sélectionné pour le système sans l'être pour Chrome spécifiquement.
{% endhint %}

### 1. Vérifier le périphérique de sortie par défaut de Windows

1. Cliquez avec le bouton droit sur l'icône du haut-parleur dans la barre des tâches, en bas à droite de l'écran, près de l'horloge.
2. Sélectionnez **Ouvrir les paramètres de son** (_Open sound settings_).
3. Sous la section **Sortie** (_Output_), assurez-vous que le périphérique réellement utilisé (casque, haut-parleurs, etc.) est bien sélectionné.

### 2. Vérifier le périphérique de sortie assigné spécifiquement à Chrome

1. Dans les mêmes **paramètres de son**, faites défiler jusqu'à **Mixeur de volume** (_Volume mixer_) et cliquez dessus.
2. Repérez **Google Chrome** dans la liste des applications.
3. Assurez-vous que le périphérique de sortie sélectionné pour Chrome correspond bien à celui utilisé réellement par la personne.
4. Si ce n'est pas le cas, changez-le pour le bon périphérique.

{% hint style="success" %}
Après avoir changé le périphérique de sortie, **quittez et relancez l'appel** dans Braver pour que le changement soit bien pris en compte.
{% endhint %}

{% hint style="info" %}
**Note:** Nous n'avons pas pu inclure de captures d'écran officielles de Windows dans cette page pour des raisons de droits d'auteur. Consultez [l'article officiel de Microsoft sur la résolution des problèmes de son dans Windows](https://support.microsoft.com/en-us/windows/fix-sound-or-audio-problems-in-windows-73025246-b61c-40fb-671a-2535c7cd56c8) pour des captures d'écran à jour selon votre version de Windows.
{% endhint %}

## Cette solution n'a pas fonctionné?

Cette solution corrige la cause la plus fréquente de ce problème, mais elle ne garantit pas de résoudre toutes les situations. Si le problème persiste après avoir vérifié le périphérique de sortie, contactez notre [équipe de soutien](../besoin-daide.md) en précisant l'appareil, le système d'exploitation et le navigateur utilisés.
