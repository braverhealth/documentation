# Rôles et permissions

## Les concepts de base

* Une permission est une unité rassemblant un <mark style="color:purple;">**action**</mark> et une <mark style="color:green;">**cible**</mark>
  * Par exemple "<mark style="color:purple;">**Créer**</mark> un <mark style="color:green;">**lieu de travail**</mark>"
* Un rôle regroupe une série de permissions
* Un utilisateur peut se faire octroyer un rôle pour une [unité organisationnelle donnée](../unites-organisationelles/)

Braver comprend d'emblée quelques rôles de base pour minimiser les besoins en pilotage, mais il est possible de configurer des combinaisons des permissions en rôles afin de répondre à des besoins particuliers de votre organisation.

## Rôles de bases

| Rôle  | Action | Cible |
| ----- | ------ | ----- |
| Admin | _Tous_ |       |
|       |        |       |
|       |        |       |



## Liste exhaustive de permissions

| Action         | Cible                                  |
| -------------- | -------------------------------------- |
| `Edit`         | `user.profile`                         |
| `Unblock`      | `user.credential`                      |
| `Rescue`       | `user.credential`                      |
| `Rescued`      | `user.credential`                      |
| `Edit`         | `user.employment`                      |
| `Edit`         | `user.profession`                      |
| `Validate`     | `user.profession`                      |
| `Add`          | `user.emails`                          |
| `Manage`       | `user.emails`                          |
| `View`         | `user.emails`                          |
| `Add`          | `group.member`                         |
| `Manage`       | `group.member`                         |
| `View`         | `group.member`                         |
| `Manage`       | `group.patient.member`                 |
| `Edit`         | `group.details`                        |
| `View`         | `group.details`                        |
| `Create`       | `organization`                         |
| `Edit`         | `organization.settings`                |
| `Edit`         | `organization.details`                 |
| `View`         | `organization.auditLog`                |
| `Edit`         | `workplace.details`                    |
| `View`         | `patient.profile`                      |
| `Edit`         | `patient.profile`                      |
| `Search`       | `patient.profile`                      |
| `View`         | `patient.attachment`                   |
| `Export`       | `patient.attachment`                   |
| `Manage`       | `patient.attachment`                   |
| `Manage`       | `patient.circle.group`                 |
| `Manage`       | `patient.circle.inbox`                 |
| `View`         | `inbox.discussion`                     |
| `Assign`       | `inbox.discussion`                     |
| `Assignee`     | `inbox.discussion`                     |
| `Send`         | `inbox.discussion`                     |
| `Unassign`     | `inbox.discussion`                     |
| `AssignSelf`   | `inbox.discussion`                     |
| `UnassignSelf` | `inbox.discussion`                     |
| `Edit`         | `inbox.settings`                       |
| `View`         | `inbox`                                |
| `ViewAll`      | `inbox`                                |
| `Role`         | `role`                                 |
| `Create`       | `schedule`                             |
| `Update`       | `schedule`                             |
| `View`         | `schedule`                             |
| `Delete`       | `schedule`                             |
| `View`         | `automation.installation`              |
| `Manage`       | `automation.installation`              |
| `View`         | `automation.task`                      |
| `Trigger`      | `automation.task`                      |
| `Use`          | `registry.domain`                      |
| `Manage`       | `registry.domain`                      |
| `Manage`       | `registry.domain.automation`           |
| `Manage`       | `registry.domain.directory`            |
| `Manage`       | `registry.domain.form`                 |
| `Manage`       | `registry.domain.resourceIdentifier`   |
| `Manage`       | `registry.domain.segment`              |
| `Manage`       | `registry.domain.trajectory`           |
| `Manage`       | `registry.domain.valueSet`             |
| `Manage`       | `registry.domain.workload`             |

