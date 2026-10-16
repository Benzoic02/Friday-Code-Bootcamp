# Module 03: Build a Mobile App

## From a web idea to a useful phone app

Phones are not small desktops. People use them in short bursts, sometimes with one hand or an unreliable connection. A good app makes a frequent task quicker. This module turns a web idea into a focused app or introduces a mobile-first micro-tool.

Friday supports mobile app generation, primarily using React Native and Expo, with device preview, code export, and an agent-driven workflow. The outline describes continuing in Expo or EAS for builds and store submission. Exact steps and labels may vary; Friday does not guarantee store approval.

The goal is to direct a useful first build, test it on real hardware, and understand the steps between preview and release. You remain responsible for privacy, reliability, and honest store descriptions.

## 1. Decide whether an app is the right product

Before converting a web product, ask why someone needs it on a phone. Strong reasons include repeated use while away from a desk, quick capture of information, access to a camera or other device capability, useful notifications, or an offline workflow. “A phone app looks more serious” is not enough.

A responsive mobile website may be faster to test and simpler to maintain. It can be opened from a link without an installation step and may work well for occasional tasks. A native-feeling app can be worthwhile when the task is frequent, device-centered, or needs reliable access to app navigation and local state. Compare the installation friction, maintenance cost, platform expectations, and how often the intended user will return.

Write down the core mobile moment, such as a technician recording a visit before leaving a customer. If a browser handles the task just as well, start on the web. Build an app when it makes the task substantially faster or more dependable.

## 2. Translate a web workflow into mobile screens

React Native uses React concepts for mobile interfaces, while Expo provides a development environment. The outline calls out navigation, screens, and state as key prompting areas.

Describe the phone journey rather than asking for “the web app, but mobile.” A field visit logger might need:

1. A sign-in screen, if the user needs protected team data.
2. A home screen showing recent visits and a clear “Log visit” action.
3. A short form for client, notes, next step, and optional follow-up date.
4. A detail screen to review or edit a saved visit.
5. A settings or account screen with sign-out and help.

Keep the navigation shallow. A person in the field should not need to hunt through a complicated menu to save a note. Place the most common action where it is easy to reach, use large touch targets, and avoid forcing long text entry if a shorter choice or optional field will do.

Tell Friday what data is required, what is optional, which screens need to exist, and what should happen after each action. A useful prompt might be:

> Create a mobile app for a small sales team to log client visits. Use React Native with Expo. Include a recent-visits list, a concise visit form, and a detail view. Ask for client, notes, and next action; make the follow-up date optional. Save drafts locally if the device is offline and show whether each record is waiting to sync or has synced. Use the existing Supabase backend for authenticated team records. Do not add location tracking or background monitoring. Propose navigation, data flow, and offline behavior before coding.

This request explains context, screens, data, and privacy boundaries. Review the plan before coding.

## 3. Separate screen state from saved data

“State” is information needed at a moment, such as typed text or whether a request is loading. Persisted data remains beyond the current screen. Confusing them can lose form entries or make unsaved records appear permanent.

For each screen, list its states. A visit form might be empty, editing, submitting, saved, offline with a local draft, or showing a failure. Ask Friday to make those conditions visible. A spinner that never ends is not a useful error message. If an action fails, preserve the user's input when safe and explain how to retry.

Plan back behavior: if someone edits a visit and presses Back, save a draft or ask before discarding. Decide what happens after sign-out.

Keep forms short, labeled, and forgiving. Use appropriate keyboard types, make only necessary fields required, and explain errors without relying on color alone.

## 4. Preview on an actual device

The outline includes device preview and iteration inside Friday. Follow the current workflow and, when possible, test on a real iOS or Android device. Physical devices reveal touch behavior, keyboard overlap, text size, and connection problems a desktop preview may miss.

Here is a quick look at the Friday Code mobile app experience:

<video controls playsinline preload="metadata" aria-label="Friday Code mobile app preview">
  <source src="Videos/Friday%20Code-MobileApp-Dark-.mp4" type="video/mp4">
  Your browser does not support embedded video. <a href="Videos/Friday%20Code-MobileApp-Dark-.mp4">Open the video</a>.
</video>

Test the main path one-handed. Check text size, touch targets, keyboard overlap, empty state, and a slow or absent connection.

Report problems concretely, such as “On Android, the keyboard covers Save.” Ask Friday for a focused fix and repeat the check.

Preview supports inspection; a build packages an app for testing or distribution. Store submission also requires accounts, configuration, assets, and policy checks.

Do a short device test before calling the flow ready: install or open the preview using the supported method, sign in with a test account, complete the main task, close and reopen the app, and confirm the saved state. Try a denied permission if the app requests one, and make sure the rest of the experience still works. Keep a small issue list with device, operating system, steps, expected result, and actual result. This helps Friday address reproducible problems instead of guessing from a screenshot.

## 5. Connect the app to the existing Supabase backend

The outline recommends connecting mobile to the same Supabase backend as web. Shared data keeps accounts consistent, but access rules apply to every client. Align field names, ownership, and permissions.

Test login, sessions, and sign-out on a shared device. Never put privileged Supabase credentials in the app package, which can be inspected. Use client-safe configuration and enforce access in backend policies.

Test each role against the backend. Can a member edit another person's visit, or an unauthenticated person query private data? Hiding a screen is not a permission control.

Use synthetic records first. Decide retention, access, and deletion behavior before storing confidential information.

## 6. Make offline-friendly behavior honest

Offline-friendly means explaining what works without a connection. The outline names it as a founder mobile pattern. A field logger could save a local draft, mark it “waiting to sync,” and send it when connectivity returns.

Offline sync has edge cases: duplicate submissions, edits on two devices, sign-out before syncing, or device loss. A first version can queue new visits and show status rather than support multi-device editing.

Ask where drafts are stored, how sync failures and duplicates are handled, and whether pending items can be deleted. Test airplane mode, reconnecting, and restarting with a pending draft. Do not call a local-only draft “saved to the team.”

Local storage creates risk on shared or lost devices. Collect only necessary information and avoid sensitive data without a clear need and suitable protection.

## 7. Notifications should serve the user

Expo is named in the outline as a route for notifications. Notifications can help with a time-sensitive follow-up, but they can also annoy people and expose information on a locked screen. Start by asking whether the user benefits from a reminder and whether it can be optional. Do not request notification permission at first launch before explaining the value.

Keep notification text discreet. A lock-screen alert that names a private client or reveals confidential details may be visible to other people. Let users control reminders where feasible, and provide a clear way to turn them off. Test time zones, duplicate reminders, canceled follow-ups, and what happens after a user signs out or deletes an item.

Notifications depend on platform setup and permission, and may not arrive at an exact time. Do not make them the only source of critical information; check current Expo and Friday guidance.

## 8. Understand iOS and Android differences

Agents can generate app structure and code, but platform details still matter. iOS and Android differ in navigation, permissions, device sizes, keyboards, background limits, and store requirements. Test both if supporting both.

Check legibility, safe areas, back navigation, and permission timing. Do not assume both platforms behave identically. Use accessible labels and support larger text.

Store releases require developer accounts and compliance with Apple and Google policies. Apps collecting accounts or personal information may need disclosures and data deletion. Metadata must describe the product accurately. Review current rules; you own accounts and submission.

Before release, check whether a reviewer can reach the main feature with the account or instructions you provide. Remove placeholder screens and sample credentials, confirm the support contact works, and ensure the privacy explanation matches the data the app actually collects. If access requires an invitation, explain the review path rather than leaving the reviewer at an empty sign-in screen. Store requirements change, so recheck official policies near submission.

## 9. Export and continue with Expo or EAS

The outline describes code export and continuing in Expo or EAS for builds and store submission. Export a copy, document required variables and setup, keep secrets out of the repository, and checkpoint before changing build configuration.

EAS is part of Expo's build and distribution ecosystem. Follow current instructions, protect signing credentials, and keep development and production settings distinct. Test a release-style build on a device.

In another editor, change one configuration at a time and record build steps. Ask agents to explain platform changes and keep a known-good checkpoint.

## Common mobile mistakes

- **Making an app only because the idea sounds exciting.** Validate the mobile-specific advantage first.
- **Shrinking a desktop interface onto a phone.** Redesign the flow around short sessions and touch.
- **Ignoring keyboard and back behavior.** Test actual navigation and form completion on devices.
- **Calling local data synced.** Show exactly where each draft lives and its current status.
- **Embedding privileged keys.** Assume installed app code can be inspected and secure access on the backend.
- **Requesting permissions too early.** Explain value first and make optional features truly optional.
- **Sending sensitive notification text.** Consider the lock screen and shared devices.
- **Testing only one platform.** Check iOS and Android behaviors relevant to the intended audience.
- **Treating preview as release.** Plan separately for builds, accounts, store policies, and support.

## Project exercise: Mobile client visit logger

Convert a web idea into a mobile companion app for a small freelance or sales team. The app should help a user record a visit quickly, review recent notes, and remember the next action. Use the same Supabase backend as the web version if one exists. If you prefer another outlined use case, such as an inventory checker or habit utility, preserve the focus on a small, repeatable mobile task.

**Workflow**

1. Describe who will use the app, where they will use it, and why a phone is better than the existing web page.
2. Sketch the three most important screens and write the main journey in five steps or fewer.
3. Ask Friday for an Expo and React Native plan covering navigation, state, storage, authentication, and offline behavior. Correct unsupported assumptions before building.
4. Build the smallest useful flow: view recent visits, add a visit, and inspect a saved visit. Defer advanced reports, location tracking, and notifications unless the core task requires them.
5. Connect to a test Supabase project or test dataset. Confirm ownership and access rules from the backend, not just the interface.
6. Preview the app using the current Friday workflow and test it on a real device. Check keyboard, touch targets, empty state, error state, and small-screen layout.
7. Test loss of connectivity, save a draft, restart the app, reconnect, and confirm the status changes only after a successful sync.
8. Ask two intended users to complete a task without guidance. Record the time, hesitation, and mistaken taps.
9. Export or checkpoint the code. Write down what would be needed to continue in Expo or EAS and what store work remains.

**Copy/paste prompt**

> Help me plan a mobile app for [user] who needs to [task] while [context]. The first version needs [screens/actions] and must not include [out-of-scope features]. Before coding, propose the navigation, data flow, authentication and permissions, offline behavior, and device test checklist. Do not use privileged credentials, collect location, or request device permissions unless I approve a clear need. After I approve the plan, build one screen or workflow at a time and tell me how to preview and test it on a real device.

**Success criteria**

- A user can understand the app's purpose and complete the central action on a phone.
- The form is readable, its fields are appropriately labeled, and errors explain how to recover.
- Data is protected by backend authorization, with no privileged credentials in the mobile bundle.
- Offline or failed-sync states are truthful and do not silently discard a user's work.
- The app has been tested on a real device, and platform-specific issues are documented.
- You can explain what is previewed, what is exported, and what remains before a store release.
- Feedback from intended users has led to at least one concrete improvement or a reasoned decision not to change the flow.

The right first mobile app is not the one with the most screens. It is the one that makes a valuable task easier in the place and moment where a person needs it.

## Quick-start checklist

### What you are building

- Design a phone-first experience that solves a real, repeatable mobile task.
- Only build a mobile app if the phone creates a clear advantage over the web.
- Keep the core flow short, touch-friendly, and easy to complete in one hand.
- Preview on a real device and test offline and error states before release.

### Your workflow in 6 easy steps

1. Decide whether the mobile moment is frequent, location-sensitive, or device-first.
2. Map the key screens and the shortest path to a successful action.
3. Define the data that needs to persist versus the state that exists only in memory.
4. Build the primary flow before adding notifications, advanced settings, or future features.
5. Preview on a real device and check keyboard, touch targets, and connectivity.
6. Connect the app carefully, test permissions, and document what remains for release.

### Visual checklist

- ✅ User and problem are clear
- ✅ Scope is narrow enough to test
- ✅ Core workflow is defined before extra features
- ✅ Real validation happens before launch
- ✅ A next improvement is recorded for the next cycle

> Pro tip: treat every module as a build-test-learn loop. The goal is not perfection, it is clarity, evidence, and a usable result that can be improved with the next test.

