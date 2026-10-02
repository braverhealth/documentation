---
description: >-
  This release is being prepared. Availability dates for iOS, Android
  and the web are still to be confirmed.
icon: sparkles
---

# Version 1.11.0

#### 1. New Features

1. New photo and video editor, with drawing, text, crop, rotation and video trim tools, plus undo and redo
2. Richer forms with checkboxes, an Other response with free text, and fields for attaching files, photos or videos
3. PDF-backed forms, with mappings between form and document fields, saved drafts you can resume and version history
4. Ability to remove a form posted in a discussion, like a message or an attachment
5. Discussion PDF exports now include completed form answers in an appendix linked from the form shown in the discussion
6. Archive and restore forms, trajectories, document templates, directories and value sets in the admin app, while keeping existing content accessible
7. Authorized administrators can validate their organization's members' professions directly in the admin app

#### 2. Improvements

1. Changes to forms, trajectories and other module resources arrive without restarting the app, including after reconnecting
2. Encrypted storage for pending files and more reliable recovery of interrupted uploads after restarting the app
3. Better screen reader support for video controls, dialogs, account setup steps, the PIN keypad and participant search
4. New Support menu in the admin app, with access to tutorials and the help site
5. Clearer admin configuration: distinguish group-owned roles from inherited roles, and a discussion template's name from the title of the discussions it creates
6. Administrators can unblock a member's recovery code without contacting support
7. Clearer guidance when creating an account linked to Microsoft, Gustav or LeoMed, including which provider to use to sign in
8. Management-only actors can no longer be selected for a form request. Clinician-targeted requests are temporarily removed; caregiver-targeted requests remain available

#### 3. Fixes

1. Patient records: more reliable saving during creation and editing, and corrected identifiers that could prevent a CardioComm number from being assigned
2. Discussions: fixed closed discussions reverting to open or remaining open on another device, and activities that could prevent a discussion from opening
3. Availability: times selected on iOS are kept when dismissing the picker by tapping outside it, and the unavailable-participant warning updates without refreshing the page
4. Notifications: invited participants who have not yet accepted a discussion no longer receive notifications for every new message
5. Network and profiles: profession-based reachability restrictions are respected, workplaces appear on profiles, and service accounts are no longer offered as people to call
6. Email settings: Remove targets the correct address when the list changes order, and existing addresses containing accented characters can be removed
7. Forms: numbers entered with a decimal comma are saved correctly, and decimal places respect the configured precision
8. Account creation and sign-in: existing sessions are preserved during signup, with fixes for multiple recovery-code emails and blocked sign-in after an invitation to a shared workplace address
9. Admin app: fixed module selection not staying in place, field ordering in the form editor and missing entries between audit-log pages
