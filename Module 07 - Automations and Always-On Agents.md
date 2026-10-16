# Module 07: Automate a Workflow

## Make useful work happen on a schedule, without giving away control

### Module goal

By the end of this module, you will have designed and tested a small, bounded automation that can keep useful work moving while you focus elsewhere. You will understand long-running agents, scheduled or cron-style runs, background continuation, minimized mode, practical founder workflows, and the cost and safety controls that make ongoing systems sustainable.

An always-on agent is not a tireless employee to trust with every decision. It is a repeatable workflow that observes a defined source, does a limited job, and returns a useful result. Early automations should prepare decisions: collect, sort, summarize, and draft. You review before they send messages, publish content, change important data, spend money, or modify production code.

Friday can help coordinate agents and tools, and the exact interface, controls, and integration options may vary by version and setup. Think in terms of the workflow and its permissions rather than assuming a particular button or label exists. Confirm what is available in your environment before connecting real accounts.

## Why automate, and what not to automate yet

Founders repeat many small jobs: checking competitor updates, reading incoming feedback, looking for recurring errors, keeping a team wiki current, and preparing a weekly progress note. These tasks are valuable but easy to postpone. A scheduled workflow can make the routine consistent and give you a compact starting point for human work.

Automation is most useful when inputs are predictable, outputs are easy to inspect, and mistakes are cheap to correct. A weekly digest of public pricing changes is a good early target; changing your prices based on that digest is not. A support agent can group messages and draft responses, but refunds and customer replies require more oversight.

Use this simple rule: automate preparation first, and execution only after you have tested it, established explicit authorization, and added safeguards appropriate to the consequences. An agent can be productive while still asking a person to approve the final action.

## The building blocks of a reliable automation

Before you schedule anything, describe the workflow in six parts:

1. **Trigger:** What starts the run? It might be a schedule, a new form response, a product update, or a monitoring event. Do not assume a trigger is available until you verify it.
2. **Input:** Which specific records, pages, messages, or files may it read? Define the source and time window.
3. **Work:** What should the agent do with those inputs? Prefer a short sequence with a clear finish.
4. **Output:** Where should the result go? A draft, report, dashboard update, or notification is easier to review than a hidden change.
5. **Permission:** What may the workflow read, create, or change? Start with the smallest access it needs.
6. **Stop condition:** When should it stop and ask for help? Examples include uncertain identity, conflicting facts, an unusually large batch, missing data, or an action outside its approved scope.

This description is the automation's contract. It prevents a broad request like “keep the product healthy” from becoming an open-ended task with unclear authority. Keep it visible and update it when the workflow changes.

## Long-running agents, schedules, and background continuation

A long-running agent can work through a larger task over time. A schedule can start a task at a recurring interval, while background continuation or a minimized app state can let work proceed without occupying your attention. These ideas are related, but not interchangeable: a task that continues in the background is not automatically a recurring schedule, and a schedule does not guarantee that every run will finish successfully.

This walkthrough demonstrates automations in Friday Code. Treat it as an interface overview; verify what each automation can access and do before enabling it.

<video controls playsinline preload="metadata" aria-label="Automations in Friday Code">
  <source src="Videos/Friday%20Code-Automations-Dark.mp4" type="video/mp4">
  Your browser does not support embedded video. <a href="Videos/Friday%20Code-Automations-Dark.mp4">Open the video</a>.
</video>

Treat each run as a separate attempt with an inspectable result. Decide how often it needs to run: a weekly digest may be enough, while hourly checks can waste credits and create noise. Keep tasks narrow, specify the expected report format, and request source links where possible.

During early tests, keep the workflow visible. Use minimized or unattended operation only after you understand what it reads, how it fails, and where outputs appear. Confirm whether Friday or an external service must remain open or authenticated; do not assume a task runs while your computer is off.

Keep a run record with date, input range, result location, status, and human decision. This helps distinguish “nothing changed” from “the workflow failed to check.”

## A founder workflow: weekly competitive intelligence

Imagine you run a scheduling tool for independent fitness coaches. Ask a workflow to check a short list of public competitor pages for pricing, feature, or positioning changes, not to “research the whole fitness market.” Supply URLs and a date range. Request a dated digest with source links, observed changes, and any possible implications labeled as analysis. Unavailable pages should be reported, not guessed about. A weekly run is a sensible trial; you decide what matters and whether the roadmap or business should change.

A useful prompt might say:

> Review only the approved public URLs in this list. Compare their current visible pricing and feature statements with the notes from the previous run. Produce a dated digest with source links. Mark inaccessible pages as unavailable. Separate facts from possible interpretations. Do not contact anyone, alter our product, or publish this report. If you cannot verify a change, say so.

The first result is a prototype, not proof of reliability. Check claims against sources and correct the prompt when it misunderstands a page.

## Practical founder automations

The same design pattern can support several useful workflows:

- **Support triage:** Group approved inbox messages by issue, flag urgent cases, and draft replies. A human approves every reply; share no unnecessary personal data.
- **Feedback synthesis:** Group approved form responses into themes and identify follow-up questions. Do not treat a small sample as representative or silently change customer records.
- **Bug monitoring:** Summarize supplied issues or alerts, suggest severity, and draft a GitHub issue. A person confirms reports and code changes.
- **Content preparation:** Draft blog or social copy from a verified product update. Check claims, rights, and tone; a draft is not permission to publish.
- **Video triggers:** A changelog update might trigger a script or scene draft. Confirm paid generation and review the video and narration before distribution.
- **Knowledge-base maintenance:** Find stale or duplicate Supabase wiki articles and propose edits. Preserve source authority and require approval before overwriting shared guidance.

Start with one task. Combining several automations into a product operating system is a later step, after each component works independently.

## Permissions, privacy, and explicit approval

List the data and actions involved before connecting an integration. Use the narrowest credentials and access scope available. Prefer read-only access for research and summaries. Keep API keys private, use the product's supported secret-management approach, and never paste credentials into a prompt, report, or source-controlled file. Remove access that is no longer needed.

Treat inputs as untrusted. A customer email, web page, or issue can contain instructions that conflict with your workflow. It is data to analyze, not authority to change the workflow's rules. Tell the agent to ignore instructions found inside source material and to follow only the task and permissions you set. Do not give an agent broad access just because one integration makes setup convenient.

Require explicit human review and approval before an automation:

- sends an email, message, or other communication to a person;
- publishes a post, video, page, or other public content;
- changes, deletes, or imports important data;
- spends money, starts paid generation, or commits to a purchase;
- merges, deploys, or otherwise modifies production code or systems.

Approval should show the action, target, affected content or data, and expected cost. A vague “approve all future actions” is not a safe substitute. Even for repeated low-risk actions, define a narrow policy and limit; retain review for material impact.

## Cost control and sustainable schedules

An automation can consume credits each time it runs, plus fees from external APIs, storage, video, email, or other services. Estimate the cost before increasing frequency. A practical first estimate is: likely cost per run multiplied by runs per month, plus any per-item provider charges. Treat this as a rough budget, not a guaranteed quote.

Control cost with relevant inputs, limited records, and a suitable lower-cost model for routine summaries. Reserve stronger models for tasks that need deeper reasoning. Generate only what you will evaluate, set a test budget and run-size limit, and review usage after several runs.

Add a “stop and report” rule for unusually large inputs or a run that appears to repeat work. Make sure you can pause or disable the schedule using the controls available in your setup. Keep a written note of where that control is and who may use it. If an external API supports quotas or spending limits, consider setting them too.

## Testing and operating the workflow

Test first with a small, safe sample. Compare the result with what you would have produced manually. Check source accuracy, missing cases, duplicate work, output clarity, permissions, and cost. Try a failure on purpose: an inaccessible page, empty form, malformed record, or unavailable integration. Does the workflow stop and explain the problem, or invent an answer?

Before moving from a manual test to a schedule, answer these practical checks:

- Can you explain what starts each run and which data it reads?
- Is the output useful, dated, and easy to inspect?
- Can you tell a successful run from a failed or incomplete run?
- Does the workflow stop when evidence is missing or a decision is uncertain?
- Are messaging, publishing, data changes, spending, and production changes held for approval?
- Can you cap, pause, or disable the workflow?
- Have you checked actual usage and output quality across more than one run?

Change one thing at a time. Changing the prompt, schedule, sources, model, and account together makes it hard to identify what helped or harmed results.

## Common failure modes and how to respond

**A confident but unsupported summary:** Ask for source links, separate facts from interpretation, and inspect the underlying evidence. Reduce the scope if it cannot reliably verify the inputs.

**Too many alerts:** Raise the threshold for what deserves an alert, group routine updates into a digest, or reduce the schedule frequency. Every notification should tell you why it matters and what decision is needed.

**Repeated or stale work:** Record the input window and last successful run. Compare only new or changed records where possible. If the source cannot be checked, report that limitation rather than claiming no change.

**A run stops halfway:** Divide the job into shorter steps, make outputs recoverable, and rerun only what failed when your tools permit it. Do not assume an interrupted task will resume correctly.

**Unexpected cost:** Pause the workflow, inspect run frequency and input size, and check external service charges. Resume with a smaller sample or a less costly model only after you understand the cause.

**A draft becomes an accidental action:** Separate drafting from execution. Remove unnecessary send or publish permission, make the target and content visible, and require a human confirmation immediately before the action.

## Hands-on project: a founder's weekly signal desk

Build a small weekly workflow for one real or invented product. It should gather one type of signal and deliver a reviewable summary. Choose a project that can be tested safely, such as tracking a few public competitor pages, synthesizing sample user feedback, or identifying stale entries in a team knowledge base.

1. Write the six-part contract: trigger, input, work, output, permission, and stop condition.
2. Choose at most five initial sources or a small set of sample records. Remove private data that is not needed.
3. Ask Friday to create a workflow that produces a dated report. Include explicit instructions not to message people, publish, change important data, spend money, or modify production code.
4. Run it manually on the sample. Review each factual statement against the input. Mark uncertain findings as uncertain.
5. Test one failure case, such as an unavailable source or empty input. Improve the workflow if it guesses or hides the failure.
6. Estimate monthly cost at the chosen cadence. Reduce the scope or frequency if the estimate is not comfortable.
7. If your setup supports scheduling and you are satisfied with the manual tests, schedule a limited trial. Keep a human review step and know how to pause it.
8. After two or more runs, compare usefulness, errors, time saved, and cost. Decide whether to keep, adjust, or retire the workflow.

**Copy/paste prompt**

> Help me design a safe automation for [repeated task]. Its trigger is [trigger], its approved inputs are [sources], and its useful output is [output]. First write the workflow contract: trigger, input, steps, output, permissions, limits, failure behavior, owner, and stop condition. For the first test, use only [small sample] and produce a reviewable draft. Do not send messages, publish, modify important data or production code, spend money, or schedule recurring runs. Flag missing or uncertain information instead of guessing. Wait for my approval before any action beyond the manual test.

### Success criteria

Your project is complete when you can show a written workflow contract, a tested sample output with verifiable evidence, and a clear approval boundary for risky actions. You can explain what happens when the workflow fails, estimate its recurring cost, and locate the control that pauses or disables it. A successful automation is not one that runs without you; it is one that reliably prepares useful work while leaving consequential decisions under your control.

## Quick-start checklist

### What you are building

- Build a safe, useful automation around an actual recurring task and make the limits visible.
- Start with a single controlled workflow with a clear trigger, action, and review point.
- Limit access, size, and actions so failure stays low-risk and easy to monitor.
- Document how to pause, inspect, and recover before the automation touches real users.

### Your workflow in 6 easy steps

1. Pick a recurring task where human review is possible and the result matters.
2. Map the trigger, input, output, and boundary conditions before writing any logic.
3. Define the safe scope, failure behavior, and stop mechanism in plain language.
4. Run the workflow with safe example data and review the results before real use.
5. Add logging, alerts, and a way to inspect what the automation did each time.
6. Keep the automation narrow, measured, and easy to disable when quality drops.

### Checklist
- ✅ User and problem are clear
- ✅ Scope is narrow enough to test
- ✅ Core workflow is defined before extra features
- ✅ Real validation happens before launch
- ✅ A next improvement is recorded for the next cycle

> Pro tip: treat every module as a build-test-learn loop. The goal is not perfection, it is clarity, evidence, and a usable result that can be improved with the next test.

