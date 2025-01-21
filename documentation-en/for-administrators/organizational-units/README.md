---
icon: network-wired
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Organizational Units

## What is an organizational unit?

An organizational unit helps you separate sections of your organization so that members assigned to them are only granted access to the resources of the relevant sections.

Access to the following resources can be segmented using organizational units:

* Patient identifiable information
* Details of users who are members of an organizational unit
* [Directories](../directories.md)
* [Audit logs](../audit-logs/)
* [Workplaces](../workplaces/) (only the permission to **manage workplaces**, as their details are public on the Braver Network)
* [Teams](../teams/)
* Discussion threads and care channels (see the yellow section below for a clarification in this regard)

{% hint style="warning" %}
Access to discussion threads and care channels is additionally controlled using [teams](../teams/).

Two members of the same organizational unit will only see the same discussion threads or care channels associated with a given patient if they **also have access to the same team** (with the correct permissions).
{% endhint %}

### "Parent" organizational unit and its descendants

Organizational units are organized hierarchically so that one unit is "under" another organizational unit, its "parent" unit.

A unit can have multiple "child" units (all those for which it is the "parent" unit), and multiple "descendant" units (all those for which it is the "parent", "grandparent", etc.).

{% hint style="info" %}
Only the "root" organizational unit has no parent. It is created at the same time as the organization and **cannot be deleted**.

According to the definition above, the root unit has as descendants all the organizational units of the organization.
{% endhint %}

When a user is granted roles and permissions in an organizational unit `A`, they also have the same roles and permissions in all the descendant organizational units of unit `A`.

{% hint style="info" %}
For example, a healthcare organization with two care centers in different cities could create a unit for each care center, as the residents of each do not move between them and the healthcare workers in one center do not need to refer to the patients of the other center.
{% endhint %}

## Do I need to create organizational units for my organization?

In many cases, no. An organization initially includes a "root" unit (which cannot be deleted) and for most small organizations, this unit is sufficient.

However, if your organization includes multiple sites where distinct employees work, where different administrators have responsibilities specific to different sites, and where distinct patients are followed or treated, organizational units can help you implement appropriate access controls for each.