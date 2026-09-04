---
description: >-
  This version is rolling out to app stores on iOS, Android and the web.
icon: sparkles
---

# Version 1.10.0

#### 1. New Features

1. Fill out and sign care forms directly in the app, on mobile and on the web
2. New trajectory management role, allowing care channels to be created and staffed without granting access to the private content exchanged inside them
3. Restriction settings panel, with a "Manage restrictions" entry in the inbox contextual menu
4. Restrictions now cover actions beyond messaging
5. Activities are now shown in the PDF export
6. Current participant status is now shown in the PDF export
7. Caregivers and clinicians are now distinguished in the PDF export
8. Reactions are now included in the caregivers PDF export
9. State-specific captions replace the generic "Activity inbox updated" notice

#### 2. Improvements

1. Lighter caregivers PDF export
2. Faster participant selection: contact discussions are no longer loaded when adding a participant
3. Reduced polling for call status
4. Screen readers now announce text inputs that already contain text
5. A choice value is now required when defining a form field

#### 3. Fixes

1. Fixed the date picker showing a grey screen, and submission staying disabled with every field filled, in Braver Connect forms
2. Fixed a crash in care channels when a form was saved without its required labels
3. Fixed deprecated form fields appearing in new form instances
4. Fixed team participants that could not be added while creating a care channel
5. Fixed a blank screen when opening care channel details in standalone mode
6. Fixed inbox restrictions not being enforced for patients on Braver Connect
7. Fixed removed users remaining assignable in existing discussions
8. Fixed missing accept and decline actions for invited clinicians
9. Fixed drafts that were not saved or removed reactively
10. Fixed patient PDF exports showing the original message content instead of the latest revisions
11. Fixed being unable to end a meeting for all participants, and the missing caller status, on LeoMed calls
12. Fixed a crash on iOS when opening the media editor for a recently uploaded file
13. Fixed Microsoft SSO account creation failing on the first attempt
14. Fixed the QR code login asking for a PIN twice on mobile
15. Fixed the "Where I'm involved" filter returning incomplete results in patient records
