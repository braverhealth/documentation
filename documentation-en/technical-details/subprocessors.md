---
icon: building-shield
---

# Subprocessors

Braver relies on a small number of service providers (subprocessors) to operate its platform. This page lists those that may have access to personal information of our customers' users or of patients, the service they provide and the region where they process that information.

| Subprocessor | Service provided | Information involved | Processing region |
| ------------ | ---------------- | -------------------- | ----------------- |
| Google Cloud | Hosting of the Braver platform | Platform data; patient records, discussions, files and completed forms are end-to-end encrypted with keys that neither Braver nor Google holds | Montréal (Canada); backup copies in Toronto (Canada) |
| Gemini on Vertex AI (Google Cloud) | Artificial intelligence features: summaries, clinical notes, message drafts | Only the content submitted when a professional triggers a feature, for example a discussion thread to summarize; no retention by Google, no model training | Montréal (Canada) |
| Postmark | Transactional emails (invitations, sign-in links, security codes, notices) | Recipient email address and email content, with no clinical content; for an invitation of an external professional to collaborate about a patient, that patient's initials and date of birth | United States |
| Twilio | Authentication text messages | Phone number and security code, with no clinical content | United States |
| Alohi (Fax.plus) | Faxing of clinical documents selected by a professional | Transmitted document and limited routing data | Montréal and Toronto (Canada); transit of less than one hour in Switzerland |

### Additional details

* Call transcription is performed by a model that Braver runs itself in its infrastructure in Montréal, with no third party.
* Gemini has no access to the platform or its data: it only receives the content a professional chooses to submit to an artificial intelligence feature, and the result is reviewed by that professional before any use.
* Each subprocessor is bound to Braver by a written agreement covering confidentiality, security and deletion of information. Any transfer of information outside Québec is assessed beforehand, as required by law.
* Braver's other providers, such as our staff's work tools, receive no personal information of our customers' users or of patients.

This list is updated whenever a subprocessor is added or changed. For any question, [contact us](mailto:support@braver.health).
