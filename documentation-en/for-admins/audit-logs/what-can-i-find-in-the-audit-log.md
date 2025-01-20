# What can i find in the audit log?

## Summary

Each audit entry captures the essential information to answer the fundamental audit questions:

* Who? (actor_id)
* What? (action)
* On What? (target + scopes)
* Where? (group_id)
* When? (timestamp)

This structure allows complete traceability of actions performed in the system, with sufficient context to precisely understand what happened.

## Main Components of an Audit Entry

### `id`

* Unique identifier of the audit entry
* Allows unique tracing of each audited action

### `group_id`

* Identifier of the organizational unit in which the action was performed
* Allows contextualizing the action within its organizational scope

### `actor_id`

* Identifier of the user who performed the action
* Answers the question "Who did the action?"

### `target`

* Type of resource concerned by the action
* Indicates on what type of object the action was performed (patient, discussion, file, etc.)
* Answers the question "On What?"

### `scopes`

* Detailed context of the action with specific identifiers
* Contains precise references of the objects involved (patient_id, discussion_id, etc.)
* Allows exactly identifying the scope of the action

### `action`

* Type of action performed (creation, reading, modification, etc.)
* Answers the question "What action?"

### `timestamp`

* Precise date and time of the action
* Answers the question "When?"

## Audited Actions by Resource Type

### Patient

* CREATE: "Patient file creation"
* READ: "Patient file consultation"
* UPDATE: "Patient information modification"
* DELETE: "Patient file deletion"
* LIST: "Patient list consultation"
* EXPORT: "Patient data export"

### Discussion

* CREATE: "Discussion creation"
* READ: "Discussion consultation"
* UPDATE: "Discussion modification"
* DELETE: "Discussion deletion"
* LIST: "Discussion list consultation"
* EXPORT: "Discussion export"

### Care Channel

* CREATE: "Care channel creation"
* READ: "Care channel consultation"
* UPDATE: "Care channel modification"
* DELETE: "Care channel deletion"
* LIST: "Care channel list consultation"

### File

* CREATE: "File addition"
* READ: "File consultation"
* UPDATE: "File modification"
* DELETE: "File deletion"
* LIST: "File list consultation"

### Form Definition

* CREATE: "Form creation"
* READ: "Form consultation"
* UPDATE: "Form modification"
* DELETE: "Form deletion"
* LIST: "Form list consultation"

### Form Instance

* CREATE: "Form instance creation"
* READ: "Form instance consultation"
* UPDATE: "Form instance modification"
* DELETE: "Form instance deletion"
* LIST: "Form instance list consultation"

### Caregiver

* CREATE: "Caregiver account creation"
* READ: "Caregiver profile consultation"
* UPDATE: "Caregiver profile modification"
* DELETE: "Caregiver account deletion"
* LIST: "Caregiver list consultation"
* INVITE: "Invitation of a new caregiver for a patient"

### Work Team

* CREATE: "Work team creation"
* READ: "Work team consultation"
* UPDATE: "Work team modification"
* DELETE: "Work team deletion"
* LIST: "Work team list consultation"

### Invitation

* CREATE: "Invitation creation"
* READ: "Invitation consultation"
* UPDATE: "Invitation modification"
* DELETE: "Invitation deletion"
* LIST: "Invitation list consultation"

### Organizational Unit

* CREATE: "Organizational unit creation"
* READ: "Organizational unit consultation"
* UPDATE: "Organizational unit modification"
* DELETE: "Organizational unit deletion"
* LIST: "Organizational unit list consultation"

### Establishment

* CREATE: "Establishment creation"
* READ: "Establishment consultation"
* UPDATE: "Establishment modification"
* DELETE: "Establishment deletion"
* LIST: "Establishment list consultation"

### User Roles

* CREATE: "User role creation"
* READ: "User role consultation"
* UPDATE: "User role modification"
* DELETE: "User role deletion"
* LIST: "User role list consultation"

### Group Members

* CREATE: "Member addition to group"
* READ: "Group member consultation"
* UPDATE: "Group member modification"
* DELETE: "Member removal from group"
* LIST: "Group member list consultation"
* INVITE: "Invitation of a new member in an organizational unit"

### Audit

* CREATE: "Audit entry creation"
* READ: "Audit entry consultation"
* LIST: "Audit entry list consultation"
* EXPORT: "Audit data export"
