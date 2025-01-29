---
description: Configurer votre organisation en seulement 3 étapes !
---

# Déployer Braver via Leomed

{% hint style="info" %}
Le processus comprend la plupart du temps la création d'un environnement en pré-production puis la création d'un second en production. La première étape est requise une seule fois, car nous utiliserons les mêmes informations.

**Les deux autres étapes devront par contre être répétées pour les deux environnements.**
{% endhint %}

### Voici les étapes à suivre pour configurer votre organisation dans Braver :

{% stepper %}
{% step %}
**Partager les informations de votre organisation à l'équipe Braver**

Compléter le formulaire ci-dessous :

{% embed url="https://braverhealth.typeform.com/to/xuw0zj3i" %}
{% endstep %}

{% step %}
**Accéder à l'application administrative**

{% hint style="warning" %}
Avant de procéder à cette étape, vous devez attendre qu'un membre de l'équipe Leomed ou Braver vous confirme que l'intégration est fonctionnelle.

Par la suite, si vous n'avez pas encore créé votre compte, vous devriez avoir reçu une invitation par courriel. Voici [le tutoriel](../../pour-les-professionnels/creation-de-compte/creation-de-compte-autonome.md) pour vous aider à créer votre compte.
{% endhint %}

Vous pouvez accéder à l'application administrative via [https://admin.braver.net](https://admin.braver.net/#/login). Utilisez les mêmes informations que vous utilisez pour vous connecter à votre compte Braver (email + mot de passe)
{% endstep %}

{% step %}
**Octroyer le rôle "Admin" aux bonnes personnes**

Voici [comment octroyer un rôle à un utilisateur.](../../pour-les-administrateurs/utilisateurs/comment-octroyer-un-role-a-un-utilisateur-existant.md)

{% hint style="info" %}
Lors de l'activation du compte Braver des utilisateurs, la plateforme Leomed fournit à Braver l'ensemble des rôles et permissions à l'exception du rôle "Admin". Ce rôle doit donc être octroyé manuellement dans l'application administrative de Braver.

Le rôle Admin donne la permission à un utilisateur de se connecter à l'application administrative et d'ainsi créer des lieux de travail, des équipes et d'inviter des utilisateurs. Toutefois, comme vous utilisez Braver via une intégration avec Leomed, toutes ces actions sont facilitées pour vous par l'intégration entre les deux plateformes.
{% endhint %}

La fonctionnalité qui vous sera la plus utile dans l'application administrative de Braver est **le journal d'audit**. Voici [comment faire une recherche dans le journal d'audit](../../pour-les-administrateurs/journaux-daudit/comment-faire-une-recherche-dans-le-journal-daudits.md).
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Pour l'invitation des patients et proches aidants, celle-ci se fait au travers Leomed. Voici [le tutoriel](activer-un-compte-patient-ou-proche-aidant.md) pour vous guider.
{% endhint %}

{% hint style="success" %}
**Félicitations, votre organisation fait maintenant partie du réseau Braver !** 🎉

Il ne reste que deux sections à parcourir :

* [Module patient et proche aidant](../../pour-les-administrateurs/guide-de-configuration/)
* [Autres détails techniques](../../pour-les-administrateurs/guide-de-configuration/)
{% endhint %}
