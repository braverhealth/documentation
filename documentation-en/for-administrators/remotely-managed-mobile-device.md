---
icon: house-circle-check
---

# Remotely Managed Mobile Device

### Devices provided by the organization to patients or caregivers

To make usage as simple as possible and minimize support interventions without compromising patient information security, we recommend distributing devices provided by the organization to patients so that they are managed remotely using solutions such as [Microsoft Intune](https://www.microsoft.com/en-us/security/business/endpoint-management/microsoft-intune#tabxca0fe0ae14c64954af5f4cc9a6efc825) or [Kandji](https://www.kandji.io/). These tools help enforce certain security policies on the tablet and automatically install the latest version of the Braver app.

When deployed in this manner on a properly configured iOS device, the Braver app can be activated to store the user's (patient's) login information so that only the native device unlock (via facial recognition, fingerprint, or PIN) is required. This means the user only needs to unlock the device and open Braver, and the app will be presented as already unlocked. This greatly simplifies the task for the user as they do not need to remember multiple security codes.

The recommended tablets for this simplified activation mode are all iPad or iPhone models manufactured since fall 2020 (starting from the 8th generation iPad).

{% content-ref url="../technical-details/compatibility.md" %}
[compatibility.md](../technical-details/compatibility.md)
{% endcontent-ref %}

When this activation mode is used, preparing a tablet for an admitted patient involves the following three steps:

1. Reset the tablet to erase any settings or history from the previous patient
2. Install the Braver app and the support shortcut on the home page
3. Activate the patient or caregiver account (e.g., by [scanning the QR code in Leomed](https://support-en.braver.net/guides/integrations/leomed/activate-a-patient-or-caregiver-account)).

#### SIM or eSIM?

To minimize risks associated with potentially unsecured or unstable WIFI networks at the patient's residence, it is recommended to use the cellular network (LTE, 4G, or 5G).

Also, to avoid accidental disruption of cellular service when resetting the tablet between patients, we recommend using a SIM card rather than eSIM (we have seen clients experience issues such as losing their eSIM activation during tablet reset, causing tablet downtime and reactivation fees with the service provider).

Thus, the simplest and most reliable option for now is to use a "multi-provider" SIM card that will automatically switch to the antenna offering the best coverage and signal based on the patient's residence location.