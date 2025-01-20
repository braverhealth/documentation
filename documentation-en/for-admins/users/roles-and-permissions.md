# Roles and Permissions

## Basic Concepts

* A permission is a unit combining an <mark style="color:purple;">**action**</mark> and a <mark style="color:green;">**target**</mark>
  * For example, "<mark style="color:purple;">**Create**</mark> a <mark style="color:green;">**workplace**</mark>"
* A role groups a series of permissions
* A user can be granted a role for a given [organizational unit](../unites-organisationnelles/)

Braver inherently includes some basic roles to minimize management needs, but it is possible to configure permission combinations into roles to meet specific organizational requirements.

## Basic Roles

* **Admin**: This role allows the user to **administer** all aspects of Braver in the administrative console. However, this role is not sufficient to participate in discussion threads.
* **Member**: This role allows viewing other members of their organizational unit.
* **Team Manager**: This role allows viewing all discussion threads and care channels where their teams have been involved, as well as viewing and managing patient record identifying information.
* **Team Participant**: This role allows a member to manage their own status in discussion threads and care channels where they have been involved as a team member. This role also allows viewing and managing patient record identifying information.
* **Patient and Caregiver Manager**: This role allows managing patient and caregiver users associated with patient records in the organizational unit.

### Here is a more formal list of permissions associated with each basic role:

<table><thead><tr><th width="233">Role</th><th width="257">Action</th><th>Target</th></tr></thead><tbody><tr><td><strong>Admin</strong></td><td><em><code>*</code></em></td><td><code>organization.*</code></td></tr><tr><td></td><td><em><code>*</code></em></td><td><code>workplace.*</code></td></tr><tr><td></td><td><em><code>*</code></em></td><td><code>group.*</code></td></tr><tr><td></td><td><em><code>*</code></em></td><td><code>user.*</code></td></tr><tr><td></td><td><code>Manage, View, ViewAll</code></td><td><code>inbox</code></td></tr><tr><td></td><td><code>Edit</code></td><td><code>inbox.settings</code></td></tr><tr><td></td><td><code>Manage</code></td><td><code>role</code></td></tr><tr><td></td><td><code>*</code></td><td><code>automation.*</code></td></tr><tr><td></td><td><code>*</code></td><td><code>registry.*</code></td></tr><tr><td><strong>Member</strong></td><td><code>View</code></td><td><code>group.member</code></td></tr><tr><td></td><td><code>View</code></td><td><code>group.details</code></td></tr><tr><td><strong>Team Manager</strong></td><td><code>*</code></td><td><code>inbox.discussion</code></td></tr><tr><td></td><td><code>*</code></td><td><code>patient.*</code></td></tr><tr><td><strong>Team Participant</strong></td><td><code>View, UnassignSelf</code></td><td><code>inbox.discussion</code></td></tr><tr><td></td><td><code>*</code></td><td><code>patient.profile</code></td></tr><tr><td><strong>Patient and Caregiver Manager</strong></td><td><code>Search</code></td><td><code>patient.profile</code></td></tr><tr><td></td><td><code>*</code></td><td><code>patient.circle.*</code></td></tr><tr><td></td><td><code>Manage</code></td><td><code>group.patient.member</code></td></tr></tbody></table>

## Comprehensive Permission List

| Action         | Target                               |
| -------------- | ------------------------------------ |
| `Edit`         | `user.profile`                       |
| `Unblock`      | `user.credential`                    |
| `Edit`         | `user.employment`                    |
| `Edit`         | `user.profession`                    |
| `Validate`     | `user.profession`                    |
| `Add`          | `user.emails`                        |
| `Manage`       | `user.emails`                        |
| `View`         | `user.emails`                        |
| `Add`          | `group.member`                       |
| `Manage`       | `group.member`                       |
| `View`         | `group.member`                       |
| `Manage`       | `group.patient.member`               |
| `Edit`         | `group.details`                      |
| `View`         | `group.details`                      |
| `Create`       | `organization`                       |
| `Edit`         | `organization.settings`              |
| `Edit`         | `organization.details`               |
| `View`         | `organization.auditLog`              |
| `Manage`       | `workplace`                          |
| `Edit`         | `workplace.details`                  |
| `View`         | `patient.profile`                    |
| `Edit`         | `patient.profile`                    |
| `Search`       | `patient.profile`                    |
| `View`         | `patient.attachment`                 |
| `Export`       | `patient.attachment`                 |
| `Manage`       | `patient.attachment`                 |
| `Manage`       | `patient.circle.group`               |
| `Manage`       | `patient.circle.inbox`               |
| `View`         | `inbox.discussion`                   |
| `Assign`       | `inbox.discussion`                   |
| `Assignee`     | `inbox.discussion`                   |
| `Send`         | `inbox.discussion`                   |
| `Unassign`     | `inbox.discussion`                   |
| `AssignSelf`   | `inbox.discussion`                   |
| `UnassignSelf` | `inbox.discussion`                   |
| `Edit`         | `inbox.settings`                     |
| `Manage`       | `inbox`                              |
| `View`         | `inbox`                              |
| `ViewAll`      | `inbox`                              |
| `Manage`       | `role`                               |
| `Create`       | `schedule`                           |
| `Update`       | `schedule`                           |
| `View`         | `schedule`                           |
| `Delete`       | `schedule`                           |
| `View`         | `automation.installation`            |
| `Manage`       | `automation.installation`            |
| `View`         | `automation.task`                    |
| `Trigger`      | `automation.task`                    |
| `Use`          | `registry.domain`                    |
| `Manage`       | `registry.domain`                    |
| `Manage`       | `registry.domain.automation`         |
| `Manage`       | `registry.domain.directory`          |
| `Manage`       | `registry.domain.form`               |
| `Manage`       | `registry.domain.resourceIdentifier` |
| `Manage`       | `registry.domain.segment`            |
| `Manage`       | `registry.domain.trajectory`         |
| `Manage`       | `registry.domain.valueSet`           |
| `Manage`       | `registry.domain.workload`           |
