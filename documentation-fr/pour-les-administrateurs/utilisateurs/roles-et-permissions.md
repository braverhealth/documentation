# Rôles et permissions

## Les concepts de base

* Une permission est une unité rassemblant une <mark style="color:purple;">**action**</mark> et une <mark style="color:green;">**cible**</mark>
  * Par exemple "<mark style="color:purple;">**Créer**</mark> un <mark style="color:green;">**lieu de travail**</mark>"
* Un rôle regroupe une série de permissions
* Un utilisateur peut se faire octroyer un rôle pour une [unité organisationnelle donnée](../unites-organisationnelles/)

Braver comprend d'emblée quelques rôles de base pour minimiser les besoins en pilotage, mais il est possible de configurer des combinaisons des permissions en rôles afin de répondre à des besoins particuliers de votre organisation.

## Rôles de bases

<table><thead><tr><th width="233">Rôle</th><th width="257">Action</th><th>Cible</th></tr></thead><tbody><tr><td><strong>Admin</strong></td><td><em><code>*</code></em></td><td><code>organization.*</code></td></tr><tr><td></td><td><em><code>*</code></em></td><td><code>workplace.*</code></td></tr><tr><td></td><td><em><code>*</code></em></td><td><code>group.*</code></td></tr><tr><td></td><td><em><code>*</code></em></td><td><code>user.*</code></td></tr><tr><td></td><td><code>Manage, View, ViewAll</code></td><td><code>inbox</code></td></tr><tr><td></td><td><code>Edit</code></td><td><code>inbox.settings</code></td></tr><tr><td></td><td><code>Manage</code></td><td><code>role</code></td></tr><tr><td></td><td><code>*</code></td><td><code>automation.*</code></td></tr><tr><td></td><td><code>*</code></td><td><code>registry.*</code></td></tr><tr><td><strong>Membre</strong></td><td><code>View</code></td><td><code>group.member</code></td></tr><tr><td></td><td><code>View</code></td><td><code>group.details</code></td></tr><tr><td><strong>Gestionnaire d'équipe</strong></td><td><code>*</code></td><td><code>inbox.discussion</code></td></tr><tr><td></td><td><code>*</code></td><td><code>patient.*</code></td></tr><tr><td><strong>Participant d'équipe</strong></td><td><code>View, UnassignSelf</code></td><td><code>inbox.discussion</code></td></tr><tr><td></td><td><code>*</code></td><td><code>patient.profile</code></td></tr><tr><td><strong>Gestionnaire de patients et proches aidants</strong></td><td><code>Search</code></td><td><code>patient.profile</code></td></tr><tr><td></td><td><code>*</code></td><td><code>patient.circle.*</code></td></tr><tr><td></td><td><code>Manage</code></td><td><code>group.patient.member</code></td></tr></tbody></table>

## Liste exhaustive de permissions

| Action         | Cible                                |
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
