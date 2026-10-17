# English pages with French screenshots

Snapshot of PR #43 at `fc960d8` (2026-10-16). This is a page-level work queue for the [screenshot localization skill](../.agents/skills/localize-doc-screenshots/SKILL.md). Update it as each page is reviewed or localized.

**9 pages to review or localize.** The scan covered 209 English MDX pages and 616 imported image references. Eighty pages localized or visually cleared in this PR are listed under Completed.

The columns record why a page is on the queue:

- **FR folder:** image imports from `guides-fr` or `documentation-fr`. Each of these pages also had French text detected in at least one image.
- **EN OCR:** English-folder images with French text detected by English or French OCR. These are candidates until the UI text is checked visually; French names or user-entered content alone do not require localization.
- **Visual:** a French UI screenshot confirmed by inspection after OCR missed it.
- **Raw `<img>`:** legacy screenshot tags pointing at relative `.gitbook/assets` paths. These may be broken and are additional to the import counts.

Counts are image references on that page, not estimates of editing effort. Inspect **all** images on a page before moving it to Completed. OCR can miss small text and accents.

## To review or localize

### Patient and caregiver guides (1)

| English page | FR folder | EN OCR | Visual | Raw `<img>` |
| --- | ---: | ---: | ---: | ---: |
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
| [Duplicate Discussion Thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/duplicate-discussion-thread.mdx) | 4 | `253d59f` |
| [Find Closed Discussion Thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/find-closed-discussion-thread.mdx) | 8 | `253d59f` |
| [Indicate a Discussion Thread is High Priority](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/indicate-discussion-thread-is-high-priority.mdx) | 3 | `253d59f` |
| [Join Discussion About New Patient](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/join-discussion-about-new-patient.mdx) | 7 | `a2fa9cd` |
| [Leave Discussion Thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/leave-discussion-thread.mdx) | 2 | `a2fa9cd` |
| [Manage Discussion Thread Participants](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/manage-discussion-thread-participants.mdx) | 12 | `a2fa9cd` |
| [Save Discussion Thread Draft](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/save-discussion-thread-draft.mdx) | 4 | `fc59709` |
| [View Attachments in Discussion Thread](./src/content/docs/en/guides/for-healthcare-professionals/discussion-threads/view-discussion-thread-attachments.mdx) | 3 | `fc59709` |
| [Invite a Healthcare Professional to Join Braver Network](./src/content/docs/en/guides/for-healthcare-professionals/network/invite-healthcare-professional-to-join-braver-network.mdx) | 11 already English | — (reviewed) |
| [Send a Friend Request](./src/content/docs/en/guides/for-healthcare-professionals/network/send-friend-request.mdx) | 7 already English | — (reviewed) |
| [Activate Notifications on Mobile Device](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/activate-notifications-on-mobile-devices.mdx) | 9 | `9904afc` |
| [Add or Change Your Email](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/add-or-modify-email.mdx) | 12 | `9904afc` |
| [Enable Notifications in a Web Browser](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/enable-notifications-in-web-browser.mdx) | 6 | `29b785c` |
| [Set Your Availability Schedule](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/set-availability-schedule.mdx) | 7 | `29b785c` |
| [Set Unavailability Period](./src/content/docs/en/guides/for-healthcare-professionals/notification-management/set-unavailability-period.mdx) | 6 | `29b785c` |
| [Create Care Channel with Patient and Caregivers](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/add-patient-or-caregiver-to-new-care-channel.mdx) | 9 | `1202510` |
| [Initiate a New Discussion Thread with Patient or Caregiver](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/chat-with-patient-or-caregiver.mdx) | 7 | `1202510` |
| [Invite Patient or Caregiver to Join Braver](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/invite-patient-or-caregiver-to-join-braver.mdx) | 7 | `1202510` |

| [Prefill Patient or Caregiver Information](./src/content/docs/en/guides/for-healthcare-professionals/patient-caregiver-communication/prefill-patient-or-caregiver-information.mdx) | 4 | `97a7999` |
| [Add Profession](./src/content/docs/en/guides/for-healthcare-professionals/profile-management/add-profession.mdx) | 5 | `97a7999` |
| [Add a Workplace to My Profile](./src/content/docs/en/guides/for-healthcare-professionals/profile-management/add-workplace-to-profile.mdx) | 14 | `97a7999` |

| [Modify Profile Photo and Presentation Text](./src/content/docs/en/guides/for-healthcare-professionals/profile-management/modify-profile-photo-and-presentation-text.mdx) | 3 | `d3ec94b` |
| [Delete Your Braver Account](./src/content/docs/en/guides/for-healthcare-professionals/security/delete-braver-account.mdx) | 5 | `d3ec94b` |
| [Generate a New Recovery Code](./src/content/docs/en/guides/for-healthcare-professionals/security/generate-new-recovery-code.mdx) | 3 | `d3ec94b` |

| [Modify Password](./src/content/docs/en/guides/for-healthcare-professionals/security/modify-password.mdx) | 5 | `1828b1a` |
| [Modify PIN](./src/content/docs/en/guides/for-healthcare-professionals/security/modify-pin.mdx) | 5 | `1828b1a` |
| [Receive Two-Factor Authentication by SMS](./src/content/docs/en/guides/for-healthcare-professionals/security/receive-two-factor-authentication-by-sms.mdx) | 7 | `1828b1a` |

| [Reset Password](./src/content/docs/en/guides/for-healthcare-professionals/security/reset-password.mdx) | 2 | `983a768` |
| [Lock or Close Your Session](./src/content/docs/en/guides/for-healthcare-professionals/security/switch-session-on-shared-device.mdx) | 3 | `983a768` |
| [Assign Myself to a Discussion Thread in Triage](./src/content/docs/en/guides/for-healthcare-professionals/teams/assign-myself-to-discussion-thread-in-triage.mdx) | 5 | `983a768` |

| [Assign or Unassign a Participant as Thread Responsible](./src/content/docs/en/guides/for-healthcare-professionals/teams/assign-unassign-participant-as-thread-responsible.mdx) | 6 | `c219de6` |
| [Return a Discussion to Triage Box](./src/content/docs/en/guides/for-healthcare-professionals/teams/return-discussion-to-triage-box.mdx) | 5 | `c219de6` |
| [View Team Threads](./src/content/docs/en/guides/for-healthcare-professionals/teams/view-team-discussion-threads.mdx) | 2 | `c219de6` |

| [View Which Teams You Belong To](./src/content/docs/en/guides/for-healthcare-professionals/teams/view-teams.mdx) | 2 | `2c4c55b` |
| [Write to a Team](./src/content/docs/en/guides/for-healthcare-professionals/teams/write-to-a-team.mdx) | 6 | `2c4c55b` |
| [Accept Invitation to Join Care Team on Braver](./src/content/docs/en/guides/for-patients-and-caregivers/accept-invitation.mdx) | 16 | `2c4c55b` |

| [Join and Leave a Conference Call](./src/content/docs/en/guides/for-patients-and-caregivers/audio-video-calls/join-and-leave-call.mdx) | 4 | `0096673` |
| [Add a File, Photo or Video to a Discussion Thread](./src/content/docs/en/guides/for-patients-and-caregivers/braver-connect/add-file-photo-or-video-to-discussion-thread.mdx) | 17 | `0096673` |
| [Find a Pinned Attachment in a Care Team Space](./src/content/docs/en/guides/for-patients-and-caregivers/care-teams/find-pinned-attachment-in-care-team-space.mdx) | 4 | `0096673` |

| [View All Participants of a Care Team](./src/content/docs/en/guides/for-patients-and-caregivers/care-teams/view-all-participants-in-care-team.mdx) | 3 | `4bc973a` |
| [Accessing Attachments in a Discussion Thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/access-attachments-in-discussion-thread.mdx) | 4 | `4bc973a` |
| [Adding a File, Photo, or Video to a Discussion Thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/add-file-photo-or-video-to-discussion-thread.mdx) | 4 | `4bc973a` |

| [Finding a Closed Discussion Thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/find-closed-discussion-thread.mdx) | 3 | `c8a968d` |
| [Mark a Discussion as Unread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/mark-message-as-unread.mdx) | 3 | `c8a968d` |
| [Responding to a New Message](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/reply-to-new-message.mdx) | 3 | `c8a968d` |

## Audit notes

- The patient closed-thread, mark-unread, and reply guides had nine French UI screenshots. Their English replacements preserve user placeholder snippets such as `vvfb`, the named care teams, unread markers, closed-thread checkmarks, and typed reply state.

- The care-team participants and two discussion-attachment guides had nine French UI screenshots. The care-team opener reuses the localized pinned-content image, while the send-button crop has no text and remains unchanged. Named teams and the `exercice-de-respiration-mpoc` filename were preserved.

- The patient call, Braver Connect attachment, and pinned-content guides had 25 French UI screenshots, although OCR initially flagged only four outside the French asset folder. Their English images preserve blurred file-picker details, names, filenames, call times, the pre-prod ribbon, and a plain-A `About patient` heading. The call guide also embeds Loom videos, which are outside this screenshot review.

- The last two healthcare team guides and the patient invitation guide now use English screenshots. The team-writing guide reuses its team-picker screenshot for a legacy step whose source image is absent. The patient guide reuses the existing English Terms of Service screenshot rather than recreating legal text; its other 15 screenshots were localized, retaining blurred data and the example security code.

- The assignment, return-to-triage, and view-team-thread guides had 12 French UI screenshots. One additional participant-icon crop in the return guide has no text and was retained. Proper team names `Médecins`, `IPS`, and `Soins infirmiers`, patient names, and Latin placeholders were preserved.

- The reset, shared-session, and self-assignment guides had ten French UI screenshots; OCR flagged eight. The self-assignment images retain the proper team name `Médecins` and `MÉ` avatar while translating Team, triage messages, and actions.

- The password, PIN, and SMS two-factor guides had 17 French UI screenshot references although OCR flagged 12. Their two shared first-step sources were reused across all three pages after localization; the distinct screens preserve the PIN keypad, masked password state, email address, SMS phone suffix, and form arrows.

- The profile-photo, account-deletion, and recovery-code guides contained 11 French UI screenshots although OCR flagged eight; all were localized, including the required `braver` deletion token and the recovery-code settings labels.

- English assets can still contain French UI. The OCR pass found them outside the French asset folders; do not use the directory name as a completion signal.
- The completed Patient Files page was found by visual inspection of `documentation-en/Creer une nouvelle fiche patient - Step4.jpeg`: its tabs, list heading, and gender labels were French even though OCR scored only one French word.
- The completed Audit Logs page still embeds a French Loom video and preview thumbnail. Its five imported screenshots are localized; translating the video is a separate task.
- The completed organizational-unit and team guides each retain one text-free add-button crop; their other two screenshots were localized. Both pages also embed Loom videos, which were outside this screenshot review.
- The completed invitation and grant-role guides each had one more French UI screenshot than the initial OCR count. All screenshots on those pages were visually checked and localized; their embedded Loom videos were outside this review.
- The invite-users and workplace guides reuse an already localized Users screenshot and retain two text-free add-button crops. Eleven new images were generated across these three pages; the invite-users and workplace pages had more French UI than their OCR counts showed.
- The three completed care-channel guides had 21 French UI screenshots; OCR flagged only 19. Their English recreations were checked for every visible label, callout, menu option, and the plain-A `About patient` heading.
- The attachment, voice-message, and close/export guides had 11 French UI screenshots; OCR flagged only 8. Their replacements include translated conversation text, the voice-message language selector and keyboard, and the PDF export callouts.
- The duplicate, closed-thread, and high-priority guides had 15 French UI screenshots. Two closed-thread candidates initially changed Latin placeholder messages; they were corrected to preserve the original content before the pages were updated.
- The join-new-patient guide had seven French UI screenshots although OCR flagged six. The leave and participant-management guides share one text-free participant-circle crop, which was retained after visual inspection; their remaining 14 screenshots were localized.
- The draft guide's four screenshots and the attachment guide's three French UI screenshots were localized. The attachment viewer itself shows only a Latin handwriting sample and was retained. All 11 network-invitation screenshots already show English UI; the OCR flag was the directory's `Pharmaciens` team name, so no image was regenerated on that page.
- The friend-request page's seven screenshots already show English UI; its OCR flag was a name or team label in a reused Network screenshot. The mobile guide's nine iOS/Android screenshots were localized. Its source repeats the iOS app-list screenshot for the final toggle step because no separate toggle screenshot exists in the repo. The email guide's twelve screenshots were localized, and its broken raw image was replaced with text because the referenced source asset is absent.
- The browser guide's Chrome, Edge, and Firefox permission-popover captures were already English despite being stored in `guides-fr`; they were copied to `guides-en`. Firefox's main panel and both Safari screenshots were recreated in English. The two schedule guides reuse their first two localized profile screenshots; their other nine screenshots were recreated in English.
- The three patient-and-caregiver communication guides now use 23 English screenshots. One create-channel screenshot was reused from an earlier completed guide; the other 22 were recreated, including the pending and activated invitation states.
- The prefill patient or caregiver guide had four French screenshots; its broken raw image reference was removed because the source asset is absent from the repository. The profession guide had five French UI screenshots despite an English asset directory, and the workplace guide had 14. Three broken raw references on the completed Braver Connect page were also removed because their source assets are absent. Two additional raw SVG diagrams in configuration guides are excluded because they are not screenshots.
- The French invitation-kit PDF is excluded; its English page explicitly says the kit is French-only.
- The other English-folder screenshots with isolated French names, team names, addresses, or thread titles were not counted on that evidence alone. Pages without a flag still need a visual check if screenshot accuracy matters.
| [View All Participants in a Discussion Thread](./src/content/docs/en/guides/for-patients-and-caregivers/discussion-threads/view-all-participants-in-discussion-thread.mdx) | 4 | `b99f7e0` |
| [Activate Notifications on Mobile Device](./src/content/docs/en/guides/for-patients-and-caregivers/notification-management/activate-notifications-on-mobile-devices.mdx) | 9 reused | `b99f7e0` |
| [Set Your Availability Schedule](./src/content/docs/en/guides/for-patients-and-caregivers/notification-management/set-availability-schedule.mdx) | 7 (6 reused) | `b99f7e0` |
| [Set Unavailability Period](./src/content/docs/en/guides/for-patients-and-caregivers/notification-management/set-unavailability-period.mdx) | 6 reused | `85c96cf` |
| [Modify Profile Photo](./src/content/docs/en/guides/for-patients-and-caregivers/profile-management/modify-profile-photo.mdx) | 2 (1 reused) | `85c96cf` |
| [Generate New Recovery Code](./src/content/docs/en/guides/for-patients-and-caregivers/security/generate-new-recovery-code.mdx) | 3 reused | `85c96cf` |
| [Modify Password](./src/content/docs/en/guides/for-patients-and-caregivers/security/modify-password.mdx) | 5 reused | `fc960d8` |
| [Modify PIN](./src/content/docs/en/guides/for-patients-and-caregivers/security/modify-pin.mdx) | 5 reused | `fc960d8` |
| [Receive Two-Factor Authentication by SMS](./src/content/docs/en/guides/for-patients-and-caregivers/security/receive-two-factor-authentication-by-sms.mdx) | 7 reused | `fc960d8` |
