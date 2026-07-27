---
icon: volume-slash
description: >-
  What to do if no sound comes through during an audio or video call in
  Braver, even though the connection and video are working normally.
---

# No Sound During a Call

## The problem

During an audio or video call in Braver, a participant cannot hear the call: no sound comes out of their speakers or headset, even though the video and microphone are working correctly.

{% hint style="info" %}
This type of issue is not specific to Braver. It is generally caused by the audio configuration of the computer or browser, and can therefore happen with any calling application (Braver, Teams, Zoom, etc.).
{% endhint %}

## Possible causes

Before contacting technical support, here are the most common things to check:

* Sound is not muted in the Braver call (see the [actions available in a call](../for-professionals/audio-and-video-calls/README.md)).
* The computer's or mobile device's overall volume is not turned down or on silent mode.
* Microphone and sound are not blocked in the browser permissions.
* **The correct audio output device (speakers, headset, etc.) is selected on the computer.** This is the most common cause, especially on computers connected to more than one audio device (e.g., built-in speakers, wired or Bluetooth headset, external monitor with speakers).

## The solution: check the audio output device in Windows

This case was observed on **Windows**, with the **Google Chrome** browser: the sound from the Braver call was not coming through the right device, because Windows was routing Chrome's audio to a different device than the one actually being used by the person (for example, the monitor's speakers instead of their headset).

{% hint style="warning" %}
Windows lets you choose a default output device for the whole system, **but also an output device specific to each application** (including browsers like Chrome). The correct device can therefore be selected for the system without being selected for Chrome specifically.
{% endhint %}

### 1. Check Windows' default output device

1. Right-click the speaker icon in the taskbar, at the bottom right of the screen, near the clock.
2. Select **Open sound settings**.
3. Under the **Output** section, make sure the device actually being used (headset, speakers, etc.) is selected.

### 2. Check the output device assigned specifically to Chrome

1. In the same **sound settings**, scroll down to **Volume mixer** and click on it.
2. Find **Google Chrome** in the list of applications.
3. Make sure the output device selected for Chrome matches the one actually used by the person.
4. If it doesn't, change it to the correct device.

{% hint style="success" %}
After changing the output device, **leave and rejoin the call** in Braver so the change is properly taken into account.
{% endhint %}

{% hint style="info" %}
**Note:** We were not able to include official Windows screenshots on this page for copyright reasons. See [Microsoft's official article on fixing sound or audio problems in Windows](https://support.microsoft.com/en-us/windows/fix-sound-or-audio-problems-in-windows-73025246-b61c-40fb-671a-2535c7cd56c8) for up-to-date screenshots based on your Windows version.
{% endhint %}

## This solution didn't work?

This solution fixes the most common cause of this problem, but it is not guaranteed to resolve every situation. If the problem persists after checking the output device, contact our [support team](../need-help.md), specifying the device, operating system, and browser used.
