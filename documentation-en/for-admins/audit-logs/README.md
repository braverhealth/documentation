---
icon: rectangle-history
---

# Audit Logs

## What are audit logs?

As healthcare organizations, you may be required to keep a record of all important activities of your organization's members regarding their access to patient health data.

Braver automatically collects read accesses performed by members of the organization to all information for which your organization is the custodian. Braver also automatically collects actions of creation and modification of information, as well as any communication actions performed on the platform.

{% hint style="success" %}
For a complete list of items captured in the audit logs, refer to the page [What can I find in the audit log](what-can-i-find-in-the-audit-log.md).
{% endhint %}

### What constitutes an audit log entry?

Audit logs do not store the _content_ of the action performed (e.g., the specific details of a patient consulted). They only store metadata about the action, dates, and references:

* The type of action: _Creation, modification, deletion, etc._
* The type of entity: _Patient, Discussion thread, Care channel, etc._
* The identifier of the actor (the user or service account in the case of automations)
* The identifier of the entity subject to the action (e.g., the patient consulted, the discussion thread created, etc.)
* The date and time when the action was performed

### How long are these logs retained?

Currently, logs are retained indefinitely and can never be deleted. In the future, you will be able to specify a retention period for these logs.