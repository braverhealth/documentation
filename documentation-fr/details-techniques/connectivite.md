---
icon: plug-circle-check
---

# Connectivité

### Production

```url
https://*.braver.net
```

{% hint style="info" %}
L'accessibilité des protocols HTTP n'est activée que pour rediriger tout traffic vers HTTPS.

Les URLs principales accédées par les utilisateurs seront pour l'[application web](https://app.braver.net) et la [console administrative](https://admin.braver.net).
{% endhint %}

| Type            | IP            | Ports   | Protocoles  |
| --------------- | ------------- | ------- | ----------- |
| Principale      | 35.215.49.85  | 80, 443 | HTTP, HTTPS |
| Intégrations    | 35.215.39.234 | 443     | HTTPS       |
| Fichiers        | 35.215.42.121 | 80, 443 | HTTP, HTTPS |
| Appels vidéos 1 | 35.203.11.90  | 3478    | UDP STUN    |
| Appels vidéos 2 | 35.203.48.63  | 3478    | UDP STUN    |
| Appels vidéos 3 | 34.118.155.6  | 443     | HTTPS       |

### Pré-production

```url
https://*.pre-prod.braver.dev
```

{% hint style="info" %}
L'accessibilité des protocols HTTP n'est activée que pour rediriger tout traffic vers HTTPS.

Les URLs principales accédées par les utilisateurs seront pour l'[application web](https://app.pre-prod.braver.dev) et la [console administrative](https://admin.pre-prod.braver.dev).
{% endhint %}

| Type            | IP            | Ports   | Protocoles  |
| --------------- | ------------- | ------- | ----------- |
| Principale      | 35.215.13.158 | 80, 443 | HTTP, HTTPS |
| Intégrations    | 35.215.23.211 | 443     | HTTPS       |
| Fichiers        | 35.215.48.170 | 80, 443 | HTTP, HTTPS |
| Appels vidéos 1 | 34.47.16.38   | 3478    | UDP STUN    |
| Appels vidéos 2 | 34.47.1.96    | 3478    | UDP STUN    |
| Appels vidéos 3 | 34.47.26.100  | 443     | HTTPS       |
