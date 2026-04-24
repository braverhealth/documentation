---
description: >-
  This version is available in app stores on iOS, Android and the web.
icon: star
---

# Version 1.8.1

#### 1. New Features

1. **Thread templates in trajectories** — It is now possible to define thread templates directly within a trajectory, including a title, a list of actors to include, and a starting message.
2. **Configurable trajectory auto-suggest rules** — Administrators can now configure rules to determine when a trajectory should be auto-suggested in a patient file (e.g., only when the patient is active, or within a specific date range).
3. **Smarter team member selection in care threads** — When creating a thread, if a team has multiple members, none are pre-selected by default (the thread lands in triage); if the team has only one member, that member is automatically selected.
4. **Configurable assignment mode for trajectory actors** — Trajectory actors can now be configured with three assignment modes: a single designated person (Single), no members by default (None), or all participating members (All).
5. **Optional assignment when starting a thread** — It is now possible to choose not to assign any member when starting a thread in a care channel, in addition to being able to cancel.
6. **Discussion creator can always close a discussion** — The creator of a discussion can now always close it, regardless of their role.

#### 2. Improvements

1. **Loading indicator during PDF export** — A loading indicator is now displayed while a PDF export is being generated.

#### 3. Fixes

1. **Thread sometimes not created when clicking the + button in a care channel** — An intermittent issue preventing thread creation via the + button has been fixed.
2. **Active patient account not included by default (Braver Connect)** — A patient with an active account was not included by default in a clinician's view in Braver Connect. This has been fixed.
3. **Removing a contact from the network did not remove them from the list** — Toggling a contact's `is_listed` flag to `false` did not correctly remove them from the network's listed contacts. This has been fixed.
4. **Notification step no longer shown on web** — The notification permission step in the setup wizard is no longer unnecessarily displayed on web.
