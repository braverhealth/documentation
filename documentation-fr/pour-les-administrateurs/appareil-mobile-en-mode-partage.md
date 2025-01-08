# Appareil mobile en mode partagé

### Appareils fournis par l'organisation aux patients ou proches aidants

Afin de rendre l’utilisation la plus simple possible et minimiser les interventions d’assistance, sans compromettre la sécurité des renseignements du patient, nous recommandons de distribuer les appareils fournis par l’établissement aux patients de sorte qu’ils soient gérés à distance à l’aide de solutions telles que [Microsoft Intune](https://www.microsoft.com/fr-ca/security/business/endpoint-management/microsoft-intune#tabxca0fe0ae14c64954af5f4cc9a6efc825) ou [Kandji](https://www.kandji.io/). Ce genre d’outil permet de renforcer le respect de certaines politiques de sécurité sur la tablette et l’installation automatique de la version la plus à jour de l’application Braver.

Lorsque déployée de cette manière sur un appareil iOS correctement configuré, l’application Braver peut être activée de sorte à stocker les informations de connexion de l’utilisateur (le patient) afin à ne nécessiter que le déverrouillage natif de l’appareil (par reconnaissance faciale, d’empreintes digitales ou par le NIP). C’est-à-dire que l’utilisateur n’a qu’à déverrouiller l’appareil et ouvrir Braver, et l’application lui est présentée d’emblée comme déverrouillée également. Ceci lui simplifie grandement la tâche car il n’a pas à se souvenir de plusieurs codes de sécurité.&#x20;

Les tablettes recommandées pour ce mode simplifié d’activation sont toutes tablettes de type iPad ou iPhone fabriquées depuis l’automne 2020 (à partir du iPad de 8ème génération).

{% content-ref url="../details-techniques/compatibilite.md" %}
[compatibilite.md](../details-techniques/compatibilite.md)
{% endcontent-ref %}

Lorsque ce mode d’activation est utilisé, la préparation d’une tablette pour un patient admis se résume aux trois étapes suivantes:

1. Remise à zéro de la tablette afin d’effacer tout réglage ou historique provenant du patient précédent
2. Installation de l’application Braver et du raccourci d’assistance sur la page d’accueil
3. Activation du compte patient ou proche aidant (p.ex par [scan du code QR dans Leomed](https://braver-1.gitbook.io/braver/training/integrations/leomed/activer-un-compte-patient-ou-proche-aidant)).

#### SIM ou eSIM?

Pour minimiser les risques liés à un réseau WIFI potentiellement non sécurisé ou instable à la résidence du patient, il est recommandé d’utiliser le réseau cellulaire (LTE, 4G ou 5G).&#x20;

Aussi, pour éviter la rupture accidentelle de service cellulaire lors de la réinitialisation de la tablette entre deux patients, nous recommandons l’utilisation de carte SIM plutôt que eSIM (nous avons vu des clients avoir des problèmes telles que la pertes de leur activation eSIM lors de la réinitialisation de la tablette, occasionnant une panne d’utilisation de la tablette en question et des frais de réactivation auprès du fournisseur de service).

Ainsi, le plus simple et fiable pour l’instant est l’utilisation du carte SIM “multi-fournisseur” qui basculera automatiquement vers une antenne offrant la meilleure couverture et le meilleur signal en fonction de la localisation de la résidence du patient.

\
