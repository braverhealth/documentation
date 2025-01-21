---
icon: shield-check
---

# Security

Security is a central aspect of Braver's DNA. No clinical communication solution on the market goes as far as Braver to protect exchanged information.

<details>

<summary>Our security model in a few lines</summary>

* Discussion threads are end-to-end encrypted with AES encryption keys that only the participants can know.
* Exchanged files (photos, documents, videos) are also encrypted with unique AES keys, which are themselves encrypted so that only the people with whom the files have been shared can know them.
* The content of each patient file is separately encrypted with an AES key that can only be decrypted by a private key held by the owner of this patient file (a user or an organizational unit).
* Each message shared in a discussion thread is signed with the author's key and frozen in the thread's history, allowing us to guarantee that a discussion thread has not been artificially shaped or modified in an unauthorized manner.
* Data preserved on the mobile device used by a user is all encrypted at rest with an AES key stored in the hardware security module provided by iOS and Android devices. No data is preserved in a web session.
* Mobile and web sessions auto-lock after a certain period of inactivity and require the user to unlock with a PIN or biometric recognition.
* Every interaction with Braver's cloud infrastructure is systematically verified against the user's permissions and recorded in an audit log.

</details>

{% hint style="info" %}
If you want to know more about our security model, we can provide you with very detailed documentation, as well as the results of independent security audits and penetration tests conducted annually.

[Contact us if needed!](mailto:security@braver.health)
{% endhint %}

**Feel free to consult** [**our dedicated guides**](https://support-en.braver.net/guides/for-professionals/securite) **to quickly see how to configure security elements of your account.**

### Two-Factor Authentication

Any user login on the platform requires two-factor authentication. By default, the one-time code is sent to the account's primary email address, but it is possible to configure Braver so that these codes are sent by SMS.

### Recovery Code

When creating an account, a recovery code is created. This code is sent by email and must be kept in a safe place in case the password is forgotten or lost.

A new recovery code can be created and sent again if this code is also lost.

### Personal Identification Number (PIN)

A PIN allows unlocking a previously activated session on a device (private or shared). This PIN is created during account creation and can be recreated at any time.

If the PIN is entered incorrectly 5 times, the session is immediately erased from the used device.

{% hint style="warning" %}
If the PIN is forgotten, you can delete your session and log in again with your email address and password, then with the one-time code received by email or SMS. Once the session is open, you can immediately change your PIN before your session locks.
{% endhint %}