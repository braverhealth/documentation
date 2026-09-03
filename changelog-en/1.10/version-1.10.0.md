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
4. Reduced polling on connections that are already live
5. Screen readers now announce text inputs that already contain text
6. A choice value is now required when defining a form field
7. Android target API level updated to meet Google Play requirements

#### 3. Fixes

1. Fixed the date picker rendering as a grey screen in Braver Connect forms
2. Fixed form submission being disabled in Braver Connect despite all fields being filled
3. Fixed solicitation forms that could not be created in a trajectory
4. Fixed a crash in care channels when a form was saved without its required labels
5. Fixed missing validation for required actors in trajectory forms
6. Fixed deleting a field choice removing the last option instead of the selected one
7. Fixed the initial value input losing focus on every keystroke, now offering a selection list for choice fields
8. Fixed deprecated form fields appearing in new form instances
9. Fixed the incorrect tab order in the field settings view
10. Fixed the caregiver app being able to publish new form versions
11. Fixed the custom title and description not appearing immediately after submitting a form
12. Fixed English labels appearing in French form field menus in the admin console
13. Fixed the resource identifier translation status shown as incomplete when the optional description was empty
14. Fixed a first message being incorrectly required when creating a care channel for internal caregiver teams
15. Fixed team participants that could not be added while creating a care channel
16. Fixed participants that could not be removed from a trajectory
17. Fixed a blank screen when opening care channel details in standalone mode
18. Fixed duplicate caregiver team avatars in care channels
19. Fixed archived care channels not being visually distinguished from active ones
20. Fixed team participants being able to manage their own team's restrictions
21. Fixed inbox restrictions not being enforced for patients on Braver Connect
22. Fixed restrictions not being reflected in the discussion thread interface
23. Fixed adding a caregiver to a second caregiver team from a patient record
24. Fixed incorrect titles on discussion threads created from an image attachment
25. Fixed removed users remaining assignable in existing discussions
26. Fixed missing accept and decline actions for invited clinicians
27. Fixed the assignment status not updating when a member is removed from all their teams
28. Fixed a blank shared thread view, and infinite loading on threads opened from email notifications, in Braver Connect
29. Fixed an incorrect invitation status when sharing a thread with a new contact, which blocked formal invitations
30. Fixed newly created patients not being linked to the discussion thread they came from
31. Fixed inconsistent patient consent requirements
32. Fixed the greeting shown to caregivers when they receive a discussion
33. Fixed drafts that were not saved or removed reactively, and a save timestamp that updated on refresh instead of on save
34. Fixed scrolling that stopped when the pointer passed over a message
35. Fixed patient PDF exports showing the original message content instead of the latest revisions
36. Fixed the PDF export entry missing from the contextual menu
37. Fixed being unable to end a meeting for all participants, and the missing caller status, on LeoMed calls
38. Fixed video background effects not applying when enabled before turning the camera on, on the web
39. Fixed the video editor failing to open for uploaded video attachments
40. Fixed a crash on iOS when opening the media editor for a recently uploaded file
41. Fixed the photo editor losing its state after the app was put in the background
42. Fixed Microsoft SSO account creation failing on the first attempt, and provisioned users being unable to join a thread from an invitation link
43. Fixed active sessions being closed when creating an account from an invitation
44. Fixed notifications and generic errors shown to users with expired invitations
45. Fixed the QR code login asking for a PIN twice on mobile
46. Fixed an outdated PIN being required to unlock a secondary device after a change
47. Fixed an incorrect wrong-passcode message shown after a successful entry on iOS
48. Fixed being unable to erase characters after a failed password attempt
49. Fixed a blank page when arriving in the admin console from the clinician app without an active session
50. Fixed user provisioning controls not visible on first load, and provisioning failing after a profession change
51. Fixed an unresponsive resource identifier creation dialog
52. Fixed a blank last page in the audit log when the number of entries was an exact multiple of the page size
53. Fixed the inconsistent language tab order in localization forms
54. Fixed the "Where I'm involved" filter returning incomplete results in patient records
55. Fixed inconsistent workplace avatars between the network and the profile
56. Fixed the unavailability period status that did not update immediately after saving
57. Fixed the update button that did not respond to the first click on the web
58. Fixed the directory icon reverting from "Remove" to "Add" after adding a user on mobile
59. Fixed avatar upload failures in the profile
60. Fixed content rendered underneath the system bars
61. Fixed vertically misaligned text in search fields on Android
62. Fixed the character counter alignment on the email validation code field
63. Fixed the delivery channel that did not fall back to Braver Connect after a device was unassigned
64. Fixed workplace search that ignored the location from the initial query
65. Fixed a mass notification that could be triggered when removing an unused inbox from discussions
