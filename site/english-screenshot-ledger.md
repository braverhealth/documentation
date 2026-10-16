# English pages with French screenshots

Snapshot of PR #43 at `094f38e` (2026-10-16). This is a page-level work queue for the [screenshot localization skill](../.agents/skills/localize-doc-screenshots/SKILL.md). Update it as each page is reviewed or localized.

**63 pages to review or localize.** The scan covered 209 English MDX pages and 616 imported image references. Twenty-six pages localized in this PR are listed under Completed.

The columns record why a page is on the queue:

- **FR folder:** image imports from `guides-fr` or `documentation-fr`. Each of these pages also had French text detected in at least one image.
- **EN OCR:** English-folder images with French text detected by English or French OCR. These are candidates until the UI text is checked visually; French names or user-entered content alone do not require localization.
- **Visual:** a French UI screenshot confirmed by inspection after OCR missed it.
- **Raw `<img>`:** legacy screenshot tags pointing at relative `.gitbook/assets` paths. These may be broken and are additional to the import counts.

Counts are image references on that page, not estimates of editing effort. Inspect **all** images on a page before moving it to Completed. OCR can miss small text and accents.

## To review or localize

### Healthcare professional guides (35)

| English page | FR folder | EN OCR | Visual | Raw `<img>` |
| --- | ---: | ---: | ---: | ---: |
| [guides/for-healthcare-professionals/discussion-threads/duplicate-discussion-thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/duplicate-discussion-thread.mdx) | — | 4 | — | — |
| [guides/for-healthcare-professionals/discussion-threads/find-closed-discussion-thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/find-closed-discussion-thread.mdx) | — | 8 | — | — |
| [guides/for-healthcare-professionals/discussion-threads/indicate-discussion-thread-is-high-priority](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/indicate-discussion-thread-is-high-priority.mdx) | — | 3 | — | — |
| [guides/for-healthcare-professionals/discussion-threads/join-discussion-about-new-patient](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/join-discussion-about-new-patient.mdx) | — | 6 | — | — |
| [guides/for-healthcare-professionals/discussion-threads/leave-discussion-thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/leave-discussion-thread.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/discussion-threads/manage-discussion-thread-participants](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/manage-discussion-thread-participants.mdx) | — | 12 | — | — |
| [guides/for-healthcare-professionals/discussion-threads/save-discussion-thread-draft](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/save-discussion-thread-draft.mdx) | — | 4 | — | — |
| [guides/for-healthcare-professionals/discussion-threads/view-discussion-thread-attachments](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/view-discussion-thread-attachments.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/network/invite-healthcare-professional-to-join-braver-network](./src/content/docs/en/guides/for-healthcare-professionals/network/invite-healthcare-professional-to-join-braver-network.mdx) | — | 1 | — | — |
| [guides/for-healthcare-professionals/network/send-friend-request](./src/content/docs/en/guides/for-healthcare-professionals/network/send-friend-request.mdx) | — | 1 | — | — |
| [guides/for-healthcare-professionals/notification-management/activate-notifications-on-mobile-devices](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/activate-notifications-on-mobile-devices.mdx) | — | 5 | — | — |
| [guides/for-healthcare-professionals/notification-management/add-or-modify-email](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/add-or-modify-email.mdx) | 12 | — | — | 1 |
| [guides/for-healthcare-professionals/notification-management/enable-notifications-in-web-browser](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/enable-notifications-in-web-browser.mdx) | 6 | — | — | — |
| [guides/for-healthcare-professionals/notification-management/set-availability-schedule](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/set-availability-schedule.mdx) | — | 6 | — | — |
| [guides/for-healthcare-professionals/notification-management/set-unavailability-period](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/set-unavailability-period.mdx) | — | 6 | — | — |
| [guides/for-healthcare-professionals/patient-caregiver-communication/add-patient-or-caregiver-to-new-care-channel](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/add-patient-or-caregiver-to-new-care-channel.mdx) | — | 9 | — | — |
| [guides/for-healthcare-professionals/patient-caregiver-communication/chat-with-patient-or-caregiver](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/chat-with-patient-or-caregiver.mdx) | — | 7 | — | — |
| [guides/for-healthcare-professionals/patient-caregiver-communication/invite-patient-or-caregiver-to-join-braver](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/invite-patient-or-caregiver-to-join-braver.mdx) | — | 7 | — | — |
| [guides/for-healthcare-professionals/patient-caregiver-communication/prefill-patient-or-caregiver-information](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/prefill-patient-or-caregiver-information.mdx) | 4 | — | — | 1 |
| [guides/for-healthcare-professionals/profile-management/add-profession](./src/content/docs/en/guides/for-healthcare-professionals/profile-management/add-profession.mdx) | — | 3 | — | — |
| [guides/for-healthcare-professionals/profile-management/add-workplace-to-profile](./src/content/docs/en/guides/for-healthcare-professionals/profile-management/add-workplace-to-profile.mdx) | 14 | — | — | — |
| [guides/for-healthcare-professionals/profile-management/modify-profile-photo-and-presentation-text](./src/content/docs/en/guides/for-healthcare-professionals/profile-management/modify-profile-photo-and-presentation-text.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/security/delete-braver-account](./src/content/docs/en/guides/for-healthcare-professionals/security/delete-braver-account.mdx) | — | 4 | — | — |
| [guides/for-healthcare-professionals/security/generate-new-recovery-code](./src/content/docs/en/guides/for-healthcare-professionals/security/generate-new-recovery-code.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/security/modify-password](./src/content/docs/en/guides/for-healthcare-professionals/security/modify-password.mdx) | — | 4 | — | — |
| [guides/for-healthcare-professionals/security/modify-pin](./src/content/docs/en/guides/for-healthcare-professionals/security/modify-pin.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/security/receive-two-factor-authentication-by-sms](./src/content/docs/en/guides/for-healthcare-professionals/security/receive-two-factor-authentication-by-sms.mdx) | — | 6 | — | — |
| [guides/for-healthcare-professionals/security/reset-password](./src/content/docs/en/guides/for-healthcare-professionals/security/reset-password.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/security/switch-session-on-shared-device](./src/content/docs/en/guides/for-healthcare-professionals/security/switch-session-on-shared-device.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/teams/assign-myself-to-discussion-thread-in-triage](./src/content/docs/en/guides/for-healthcare-professionals/teams/assign-myself-to-discussion-thread-in-triage.mdx) | — | 4 | — | — |
| [guides/for-healthcare-professionals/teams/assign-unassign-participant-as-thread-responsible](./src/content/docs/en/guides/for-healthcare-professionals/teams/assign-unassign-participant-as-thread-responsible.mdx) | — | 6 | — | — |
| [guides/for-healthcare-professionals/teams/return-discussion-to-triage-box](./src/content/docs/en/guides/for-healthcare-professionals/teams/return-discussion-to-triage-box.mdx) | — | 4 | — | — |
| [guides/for-healthcare-professionals/teams/view-team-discussion-threads](./src/content/docs/en/guides/for-healthcare-professionals/teams/view-team-discussion-threads.mdx) | — | 1 | — | — |
| [guides/for-healthcare-professionals/teams/view-teams](./src/content/docs/en/guides/for-healthcare-professionals/teams/view-teams.mdx) | — | 2 | — | — |
| [guides/for-healthcare-professionals/teams/write-to-a-team](./src/content/docs/en/guides/for-healthcare-professionals/teams/write-to-a-team.mdx) | — | 4 | — | — |

### Patient and caregiver guides (20)

| English page | FR folder | EN OCR | Visual | Raw `<img>` |
| --- | ---: | ---: | ---: | ---: |
| [guides/for-patients-and-caregivers/accept-invitation](./src/content/docs/en/guides/for-patients-and-caregivers/accept-invitation.mdx) | — | 11 | — | — |
| [guides/for-patients-and-caregivers/audio-video-calls/join-and-leave-call](./src/content/docs/en/guides/for-patients-and-caregivers/audio-video-calls/join-and-leave-call.mdx) | — | 1 | — | — |
| [guides/for-patients-and-caregivers/braver-connect/add-file-photo-or-video-to-discussion-thread](./src/content/docs/en/guides/for-patients-and-caregivers/braver-connect/add-file-photo-or-video-to-discussion-thread.mdx) | 17 | — | — | — |
| [guides/for-patients-and-caregivers/care-teams/find-pinned-attachment-in-care-team-space](./src/content/docs/en/guides/for-patients-and-caregivers/care-teams/find-pinned-attachment-in-care-team-space.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/care-teams/view-all-participants-in-care-team](./src/content/docs/en/guides/for-patients-and-caregivers/care-teams/view-all-participants-in-care-team.mdx) | — | 2 | — | — |
| [guides/for-patients-and-caregivers/discussion-threads/access-attachments-in-discussion-thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/access-attachments-in-discussion-thread.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/discussion-threads/add-file-photo-or-video-to-discussion-thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/add-file-photo-or-video-to-discussion-thread.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/discussion-threads/find-closed-discussion-thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/find-closed-discussion-thread.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/discussion-threads/mark-message-as-unread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/mark-message-as-unread.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/discussion-threads/reply-to-new-message](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/reply-to-new-message.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/discussion-threads/view-all-participants-in-discussion-thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/view-all-participants-in-discussion-thread.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/notification-management/activate-notifications-on-mobile-devices](./src/content/docs/en/guides/for-patients-and-caregivers/notification-management/activate-notifications-on-mobile-devices.mdx) | — | 5 | — | — |
| [guides/for-patients-and-caregivers/notification-management/set-availability-schedule](./src/content/docs/en/guides/for-patients-and-caregivers/notification-management/set-availability-schedule.mdx) | — | 6 | — | — |
| [guides/for-patients-and-caregivers/notification-management/set-unavailability-period](./src/content/docs/en/guides/for-patients-and-caregivers/notification-management/set-unavailability-period.mdx) | — | 6 | — | — |
| [guides/for-patients-and-caregivers/profile-management/modify-profile-photo](./src/content/docs/en/guides/for-patients-and-caregivers/profile-management/modify-profile-photo.mdx) | — | 1 | — | — |
| [guides/for-patients-and-caregivers/security/generate-new-recovery-code](./src/content/docs/en/guides/for-patients-and-caregivers/security/generate-new-recovery-code.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/security/modify-password](./src/content/docs/en/guides/for-patients-and-caregivers/security/modify-password.mdx) | — | 5 | — | — |
| [guides/for-patients-and-caregivers/security/modify-pin](./src/content/docs/en/guides/for-patients-and-caregivers/security/modify-pin.mdx) | — | 3 | — | — |
| [guides/for-patients-and-caregivers/security/receive-two-factor-authentication-by-sms](./src/content/docs/en/guides/for-patients-and-caregivers/security/receive-two-factor-authentication-by-sms.mdx) | — | 7 | — | — |
| [guides/for-patients-and-caregivers/security/reset-password](./src/content/docs/en/guides/for-patients-and-caregivers/security/reset-password.mdx) | — | 2 | — | — |

### Integration guides (3)

| English page | FR folder | EN OCR | Visual | Raw `<img>` |
| --- | ---: | ---: | ---: | ---: |
| [guides/integrations/gustav/activate-account-via-integrated-bubble](./src/content/docs/en/guides/integrations/gustav/activate-account-via-integrated-bubble.mdx) | 7 | — | — | — |
| [guides/integrations/gustav/use-contextual-navigation](./src/content/docs/en/guides/integrations/gustav/use-contextual-navigation.mdx) | 2 | — | — | — |
| [guides/integrations/leomed/activate-patient-or-caregiver-account](./src/content/docs/en/guides/integrations/leomed/activate-patient-or-caregiver-account.mdx) | — | 2 | — | — |

### Technical details (5)

| English page | FR folder | EN OCR | Visual | Raw `<img>` |
| --- | ---: | ---: | ---: | ---: |
| [technical-details/compatibility/android-specific-settings/adaptive-battery](./src/content/docs/en/technical-details/compatibility/android-specific-settings/adaptive-battery.mdx) | 3 | — | — | — |
| [technical-details/compatibility/android-specific-settings/background-app-standby](./src/content/docs/en/technical-details/compatibility/android-specific-settings/background-app-standby.mdx) | 3 | — | — | — |
| [technical-details/compatibility/android-specific-settings/global-power-and-data-saving-mode](./src/content/docs/en/technical-details/compatibility/android-specific-settings/global-power-and-data-saving-mode.mdx) | 1 | — | — | — |
| [technical-details/compatibility/android-specific-settings/individual-battery-and-data-restrictions](./src/content/docs/en/technical-details/compatibility/android-specific-settings/individual-battery-and-data-restrictions.mdx) | 5 | — | — | — |
| [technical-details/compatibility/android-specific-settings/smart-wifi-usage-reduction](./src/content/docs/en/technical-details/compatibility/android-specific-settings/smart-wifi-usage-reduction.mdx) | 5 | — | — | — |

## Completed in PR #43

| English page | English screenshots | Commit |
| --- | ---: | --- |
| [Copy a Message from a Discussion Thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/copy-message-from-discussion-thread.mdx) | 2 | `3fbafb1` |
| [Preallocate a Patient and/or Caregiver](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/preallocate-patient-or-caregiver.mdx) | 2 | `0a752ba` |
| [Patient Files](./src/content/docs/en/for-healthcare-professionals/patient-files.mdx) | 1 | `a6ba508` |
| [How to Search in Audit Logs?](./src/content/docs/en/guides/for-administrators/audit-logs/how-to-search-in-audit-logs.mdx) | 5 | `a6ba508` |
| [Create a Module](./src/content/docs/en/guides/for-administrators/modules/create-module.mdx) | 6 | `a6ba508` |
| [Configure a Trajectory's Actors](./src/content/docs/en/guides/for-administrators/modules/create-trajectory/configure-actors.mdx) | 6 | `a4ec2e0` |
| [Configure Auto-suggestion](./src/content/docs/en/guides/for-administrators/modules/create-trajectory/configure-automatic-suggestion.mdx) | 2 | `a4ec2e0` |
| [Create Thread Templates](./src/content/docs/en/guides/for-administrators/modules/create-trajectory/create-thread-templates.mdx) | 6 | `a4ec2e0` |
| [Create a Trajectory](./src/content/docs/en/guides/for-administrators/modules/create-trajectory/index.mdx) | 3 | `d3437ae` |
| [How to Create an Organizational Unit?](./src/content/docs/en/guides/for-administrators/organizational-units/how-to-create-organizational-unit.mdx) | 3 | `d3437ae` |
| [How to Create a Team?](./src/content/docs/en/guides/for-administrators/teams/how-to-create-team.mdx) | 3 | `d3437ae` |
| [Bulk Provision Users](./src/content/docs/en/guides/for-administrators/users/bulk-provision-users.mdx) | 12 | `91af9fa` |
| [How to Cancel or Resend an Invitation?](./src/content/docs/en/guides/for-administrators/users/how-to-cancel-or-resend-invitation.mdx) | 2 | `91af9fa` |
| [How to Grant a Role to an Existing User?](./src/content/docs/en/guides/for-administrators/users/how-to-grant-role-to-existing-user.mdx) | 3 | `91af9fa` |
| [How to Invite Users?](./src/content/docs/en/guides/for-administrators/users/how-to-invite-users.mdx) | 4 | `71bd3a2` |
| [How to Create a Workplace?](./src/content/docs/en/guides/for-administrators/workplaces/how-to-create-workplace.mdx) | 5 | `71bd3a2` |
| [Accept Invitation](./src/content/docs/en/guides/for-healthcare-professionals/account-creation/accept-invitation.mdx) | 5 | `71bd3a2` |
| [Join and Leave Conference Call](./src/content/docs/en/guides/for-healthcare-professionals/audio-video-calls/join-and-leave-call.mdx) | 4 | `36d67ca` |
| [Contact a Professional Who Doesn't Have a Braver Account](./src/content/docs/en/guides/for-healthcare-professionals/braver-connect/contact-professional-without-braver-account.mdx) | 26 | `36d67ca` |
| [Add Participant to Existing Care Channel](./src/content/docs/en/guides/for-healthcare-professionals/care-channels/add-participant-to-existing-care-channel.mdx) | 5 | `36d67ca` |
| [Create a Clinical Discussion Thread in an Existing Care Channel](./src/content/docs/en/guides/for-healthcare-professionals/care-channels/associate-clinical-discussion-thread-with-existing-care-channel.mdx) | 5 | `6785596` |
| [Create a New Care Channel](./src/content/docs/en/guides/for-healthcare-professionals/care-channels/create-new-care-channel.mdx) | 7 | `6785596` |
| [Pin a Document and View Version History](./src/content/docs/en/guides/for-healthcare-professionals/care-channels/pin-document-and-view-version-history.mdx) | 9 | `6785596` |
| [Add File, Photo, or Video to Discussion Thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/add-file-photo-or-video-to-discussion-thread.mdx) | 2 | `094f38e` |
| [Add Voice Message to Discussion](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/add-voice-message-to-discussion.mdx) | 5 | `094f38e` |
| [Close and Export Discussion Thread as PDF](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/close-and-export-discussion-thread-as-pdf.mdx) | 4 | `094f38e` |

## Audit notes

- English assets can still contain French UI. The OCR pass found them outside the French asset folders; do not use the directory name as a completion signal.
- The completed Patient Files page was found by visual inspection of `documentation-en/Creer une nouvelle fiche patient - Step4.jpeg`: its tabs, list heading, and gender labels were French even though OCR scored only one French word.
- The completed Audit Logs page still embeds a French Loom video and preview thumbnail. Its five imported screenshots are localized; translating the video is a separate task.
- The completed organizational-unit and team guides each retain one text-free add-button crop; their other two screenshots were localized. Both pages also embed Loom videos, which were outside this screenshot review.
- The completed invitation and grant-role guides each had one more French UI screenshot than the initial OCR count. All screenshots on those pages were visually checked and localized; their embedded Loom videos were outside this review.
- The invite-users and workplace guides reuse an already localized Users screenshot and retain two text-free add-button crops. Eleven new images were generated across these three pages; the invite-users and workplace pages had more French UI than their OCR counts showed.
- The three completed care-channel guides had 21 French UI screenshots; OCR flagged only 19. Their English recreations were checked for every visible label, callout, menu option, and the plain-A `About patient` heading.
- The attachment, voice-message, and close/export guides had 11 French UI screenshots; OCR flagged only 8. Their replacements include translated conversation text, the voice-message language selector and keyboard, and the PDF export callouts.
- Two raw screenshot `<img>` references remain on two queued pages: add or modify email (1) and prefill patient or caregiver information (1). Three broken raw references on the completed Braver Connect page were removed because their two source assets are absent from the repository. Two additional raw SVG diagrams in configuration guides are excluded because they are not screenshots.
- The French invitation-kit PDF is excluded; its English page explicitly says the kit is French-only.
- The other English-folder screenshots with isolated French names, team names, addresses, or thread titles were not counted on that evidence alone. Pages without a flag still need a visual check if screenshot accuracy matters.
