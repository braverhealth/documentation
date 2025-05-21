---
icon: plug-circle-check
---

# Connectivity

### Production

```url
https://*.braver.net
```

{% hint style="info" %}
HTTP protocol accessibility is only enabled to redirect all traffic to HTTPS.

The main URLs accessed by users will be for the [web application](https://app.braver.net) and the [administrative console](https://admin.braver.net).
{% endhint %}

| Type          | IP            | Ports   | Protocoles  |
| ------------- | ------------- | ------- | ----------- |
| Main          | 35.215.49.85  | 80, 443 | HTTP, HTTPS |
| Integrations  | 35.215.39.234 | 443     | HTTPS       |
| Files         | 35.215.42.121 | 80, 443 | HTTP, HTTPS |
| Video calls 1 | 35.203.11.90  | 3478    | UDP STUN    |
| Video calls 2 | 35.203.48.63  | 3478    | UDP STUN    |
| Video calls 3 | 34.118.155.6  | 443     | HTTPS       |

### Pre-production

```url
https://*.pre-prod.braver.dev
https://embedder.braver.dev
```

{% hint style="info" %}
HTTP protocol accessibility is only enabled to redirect all traffic to HTTPS.

The main URLs accessed by users will be for the [web application](https://app.pre-prod.braver.dev) and the [administrative console](https://admin.pre-prod.braver.dev).
{% endhint %}

| Type          | IP            | Ports   | Protocoles  |
| ------------- | ------------- | ------- | ----------- |
| Main          | 35.215.13.158 | 80, 443 | HTTP, HTTPS |
| Integrations  | 35.215.23.211 | 443     | HTTPS       |
| Files         | 35.215.48.170 | 80, 443 | HTTP, HTTPS |
| Video calls 1 | 34.47.16.38   | 3478    | UDP STUN    |
| Video calls 2 | 34.47.1.96    | 3478    | UDP STUN    |
| Video calls 3 | 334.47.26.100 | 443     | HTTPS       |
