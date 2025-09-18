---
icon: plug-circle-check
---

# Connectivité

### Production

```url
https://*.braver.net
```

{% hint style="info" %}
L'accessibilité des protocoles HTTP n'est activée que pour rediriger tout trafic vers HTTPS.

Les URLs principales accédées par les utilisateurs seront pour l'[application web](https://app.braver.net) et la [console administrative](https://admin.braver.net).
{% endhint %}

| Type                          | DNS           | IP(s)                                                                 | Ports   | Protocoles      |
| ----------------------------- | ------------- | --------------------------------------------------------------------- | ------- | --------------- |
| Plateforme                    | \*.braver.net | <p>35.215.49.85<br>35.215.39.234<br>35.215.42.121<br>34.118.155.6</p> | 80, 443 | HTTP, HTTPS     |
| Appels vidéos (basse latence) |               | <p>35.203.11.90<br>35.203.48.63</p>                                   | 3478    | UDP, TCP (STUN) |

### Pré-production

```url
https://*.pre-prod.braver.dev
https://embedder.braver.dev
```

{% hint style="info" %}
L'accessibilité des protocoles HTTP n'est activée que pour rediriger tout trafic vers HTTPS.

Les URLs principales accédées par les utilisateurs seront pour l'[application web](https://app.pre-prod.braver.dev) et la [console administrative](https://admin.pre-prod.braver.dev).
{% endhint %}

| Type                          | DNS           | IP                                                                      | Ports   | Protocoles      |
| ----------------------------- | ------------- | ----------------------------------------------------------------------- | ------- | --------------- |
| Plateforme                    | \*.braver.dev | <p>35.215.13.158<br>35.215.23.211<br>35.215.48.170,<br>34.47.26.100</p> | 80, 443 | HTTP, HTTPS     |
| Appels vidéos (basse latence) |               | <p>34.47.16.38,<br>34.47.1.96</p>                                       | 3478    | UDP, TCP (STUN) |
