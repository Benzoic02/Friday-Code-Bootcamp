# Module 10: Build Your Product System

## Goal

Design and ship a system that fits your goals. It must combine a live product, at least one automation, agent strategy documentation, and a short reflection on leverage and speed. It can be web, mobile, or a business workflow. The aim is to solve a real problem, test the system, and explain how you will operate it, not to use every integration.

## What every capstone must include

1. **A live product.** A user can reach and complete a meaningful task in a deployed web or mobile experience. If the product is intentionally private, provide a safe demonstration and state how a real user would access it.
2. **At least one automation.** It runs on a schedule or a defined trigger and has an understandable purpose. It should have a safe scope, an owner, a way to inspect its output, and a way to pause it.
3. **Agent strategy documentation.** Explain which roles or agents do what, which tools or data they can access, what requires human review, how work is handed off, and what checks prevent errors. Avoid claiming a specific Friday feature or interface behavior unless you have verified it in your current version.
4. **A short leverage and speed reflection.** Describe what became faster or easier, what still required human attention, what the agent got wrong or could not know, and what you would change in the next iteration.

Add the intended user, a demonstration, known limitations, and an observable success measure. For example, success for a client-brief tool might mean four of five invited freelancers create a usable draft without help, and no brief is shared before review. “Make it great” is not measurable.

## Select a direction

Choose one of the following patterns, or combine ideas only when the combination serves a specific user. These are directions, not prescribed Friday features.

### 1. Micro-SaaS with a built-in growth loop

Build a web or mobile product around a specific task, then add one responsible growth activity: reviewed outreach drafts, content based on verified updates, or competitor summaries. Do not spam or publish unchecked claims. Measure qualified conversations or product tasks, not impressions alone.

### 2. Founder operating system

Create a workspace for research, outreach, project tracking, and updates. Define what it stores and who can see it. Avoid sensitive data without a clear need and safeguards. Agents may summarize notes, but you own decisions and external communication. Keep scheduled updates as reviewed drafts.

### 3. Niche tool factory

Build reusable templates or a research-and-prototype workflow for small tools. Track each hypothesis, audience, test, result, and decision rather than counting prototypes. Isolate test data and configuration between experiments.

### 4. Content and product hybrid

Create a newsletter, directory, or community resource that supports a paid tool or service. Verify sources, distinguish fact from opinion, review media, respect rights and source terms, and explain paid relationships. Measure signups or useful reader actions, not just page views.

### 5. Agency or freelance accelerator

Build a client portal, proposal workflow, or research and follow-up tool. Separate client workspaces and verify access boundaries. Keep proposals and messages as drafts for approval. Explain correction, deletion, and human review.

### 6. Self-improving product

Gather feedback and propose improvements, but require human approval before deploying code, changing user data or prices, or contacting users. Test in development or staging; unreviewed overnight production changes are not acceptable. Keep a rollback path and decision log.

## Step 1: Write the capstone brief

Spend time defining the system before asking an agent to build it. Use a one-page brief with these fields:

- The user and the situation in which they need help.
- The problem and the current workaround.
- The product’s smallest useful promise.
- The main journey, written as steps the user takes and outcomes they see.
- The automation’s trigger, inputs, outputs, and boundaries.
- The data involved, where it comes from, and who is allowed to access it.
- What the first version will explicitly not do.
- How you will test it and what result would justify another iteration.

For example: “Consultants turn notes into follow-up tasks. The first version accepts a manual note, proposes three editable actions, and saves them. A weekly digest summarizes overdue tasks for the owner only. It does not record calls or contact clients. I will invite five consultants; success is that three save an edited list and explain when they would reuse it.”

Specificity limits agent assumptions. Ask Friday to identify ambiguity and risks, then test the riskiest assumption first. Build in stages: core flow, persistence, error handling, deployment, then automation. Inspect and test each stage before adding dependencies.

## Step 2: Map agents and responsibilities

Assign roles to work, not impressive names. A researcher summarizes public sources; a designer proposes flows and copy; a coding agent implements approved scope; a reviewer checks code; a growth workflow drafts from approved facts. Actual agent names, models, and controls may differ.

Create a simple table in your project documentation:

| Work | Agent or tool role | Inputs allowed | Output | Human checkpoint |
| --- | --- | --- | --- | --- |
| Research | Research assistant | Public sources and a question | Brief with source links and uncertainty | Check important facts and terms |
| Product flow | Design or writing assistant | Approved brief and sample data | Screen outline and copy | Confirm user needs and tone |
| Implementation | Coding assistant | Project files and acceptance checks | Code changes and test report | Review changes and run checks |
| Scheduled summary | Automation role | Minimum data needed for the report | Draft summary | Review before sharing or acting |

Record actual access and why it is needed. Use test data, limited permissions, and dedicated accounts where practical. Avoid broad access and never put secrets in the strategy document.

Hand agents stable briefs, designs, issues, or test results and state what not to change. Ask them to report assumptions, edits, open questions, and checks. Humans approve consequential decisions. Parallelize only independent work, and assign one owner to integrate it.

## Step 3: Build the thinnest end-to-end product

Work from a complete small journey rather than a set of disconnected screens. A user should be able to arrive, understand the offer, perform the main task, see the result, and recover from a normal error. If account creation is not essential to test the idea, postpone it. If it is essential, test registration, sign-in, sign-out, and access boundaries. Use synthetic data until there is a clear reason to use real information.

Ask Friday for a plan and acceptance checks first. For example: “Build the first version described in this brief. The user enters a note, receives an editable action list, and saves it. Do not send messages, add subscriptions, or schedule production changes. Include loading, empty, and failure states. Ensure users only see their own saved records. Before editing, identify relevant files and ask about any unclear requirement.” Review its response. Make one small change, test it, then proceed.

Track decisions and limitations honestly. Check forms, navigation, persistence, access control, mobile layout, and keyboard operation. Verify data in the backend, not just a success message. Test third-party errors and observe an unfamiliar user attempting the main task without coaching.

## Step 4: Add one bounded automation

An automation should save a repeated, well-understood task. Document it with a compact specification:

- **Trigger:** What starts it, and how often can that happen?
- **Input:** Which records or approved sources does it read?
- **Action:** What does it generate, update, or send?
- **Limits:** How many items, messages, or API calls can it process?
- **Review:** Which person checks the result before an external effect?
- **Failure:** How will errors be reported, and what happens on retry?
- **Stop:** How can you pause or disable it quickly?
- **Owner:** Who notices if it stops working or becomes expensive?

Use dry-run previews before workflows that affect users, publish, or spend. Test known examples, missing data, duplicate triggers, and provider errors. Prevent duplicate records or messages, set frequency and usage limits, and verify current scheduling behavior.

A research digest can summarize public competitor updates with source links for review, not change a roadmap automatically. Support triage can suggest responses without sending them or exposing messages to an unapproved service. Content drafts from approved updates need review for accuracy, rights, tone, and links.

Log run time, outcome, and useful error details without credentials or unnecessary personal data. Pause and review if quality drops, sources change, or costs exceed estimates. An automation needs an owner, visible output, and a stop mechanism.

## Step 5: Test, deploy, and prepare recovery

Use a release checklist appropriate to your project. Confirm that secrets are stored outside public code; test and live environments are distinguishable; permissions enforce data boundaries; core flows work on the deployed version; errors are understandable; and the automation is limited and observable. If the app accepts user data, explain what you collect, why, where it is processed, and how users can ask for help or removal. Meet applicable legal and platform obligations with qualified guidance where needed.

Pilot with people who fit the user group. Explain experimental status, data use, and human review. Ask them to complete a task and record hesitation and expectations, not just whether they like the idea. A few testers do not prove broad demand.

Plan responses to deployment failures, outages, automation errors, unexpected costs, and access reports. Know how to pause work, revoke credentials, restore a version, and contact affected users. Understand backup and deletion procedures; test recovery where feasible. Minimize important stored data if recovery is uncertain.

## Step 6: Measure leverage, not activity

Pick a small number of measures. Product measures may include task completion, time to finish, repeat use, or the number of invited users who complete the workflow without coaching. Automation measures may include runs completed, drafts accepted after review, error rate, time saved, and cost per useful output. Avoid counting agent messages or generated pages as value by themselves.

Compare work before and after automation, including setup, review, monitoring, and recovery time. Many drafts that take longer to review may not create leverage. Track usage over time and label small samples preliminary.

Review a run log and one real user journey each week during the pilot. Decide whether to continue, adjust, or remove each automation. If it does not improve speed, quality, or consistency enough to justify its cost and risk, simplify it or turn it off. More automation is not always better.

## Capstone documentation and presentation

Prepare a compact handoff document in the project that includes:

1. Product name, intended user, problem, and promise.
2. A link or safe demonstration of the live product and its core journey.
3. Setup requirements and external services, with no secrets included.
4. Agent strategy: roles, inputs, access, outputs, handoffs, and human review gates.
5. Automation specification: trigger, limits, logs, failure behavior, owner, and stop procedure.
6. Test evidence, measurable success criteria, and pilot feedback.
7. Known limitations, data handling notes, estimated costs, and recovery plan.
8. The reflection described below.

For a short presentation, show the problem, the user completing the product task, the automation’s output, and one check that prevents an unsafe or incorrect action. State what is live versus a test or mock. A clear walkthrough of a small system is more convincing than a long tour of features.

## Short reflection: leverage and speed

Write a few paragraphs answering these questions:

- What became faster, cheaper, or easier, and what evidence supports that?
- Which parts still required your judgment or careful manual work?
- What did an agent misunderstand, get wrong, or leave incomplete?
- What risk did you reduce through testing, permissions, or review?
- If you had one more week, what would you improve and why?

Be candid. The goal is to show that you can distinguish useful leverage from output volume. Include one example where your original assumption changed because of research or user feedback.

## Common capstone mistakes

- Choosing too many directions or automating before proving the core task.
- Letting an automation publish, spend, or change production without review.
- Granting broad permissions or ignoring costs, limits, and emergency stops.
- Measuring generated output instead of user benefit or time saved.
- Treating summaries as verified evidence or a demo as proof of demand.
- Calling an inaccessible prototype live or hiding limitations.

## Final success criteria

The capstone is complete when another person can understand the intended user and demonstrate the live product’s main task; at least one automation can be run or observed with a documented trigger and bounded scope; the agent strategy names responsibilities, access, handoffs, and human checkpoints; and the project includes a useful test record, known limitations, and a way to pause or recover. You must also include a measurable product or automation outcome and a short honest reflection on leverage and speed.

As a practical minimum, invite at least three appropriate reviewers or potential users, observe at least one person attempting the central task without coaching, and record the feedback and what you changed or decided not to change. For a self-directed or privacy-sensitive capstone, use a safe demo and explain how you would recruit an appropriate pilot. A small sample is not proof of market demand; it is a way to discover the next question.

**Copy/paste prompt**

> Help me plan my capstone system for [user] and [problem]. My proposed product is [product], and one repeated task I may automate is [task]. First return a step-by-step plan covering the smallest live product, user journey, data and access boundaries, agent roles, automation trigger and limits, test plan, measurable success criteria, known risks, and rollback or pause path. Separate assumptions from facts and point out what needs my decision. Do not edit files, connect accounts, use real customer data, spend money, send or publish anything, or schedule an automation until I approve the plan. After approval, work in small milestones and explain how each milestone will be verified.

## Carry it forward

Your capstone is the start of a practice, not a finish line. Keep the product small enough to maintain, keep code and data under your control, and review recurring costs and permissions. Use Friday to propose and implement changes, but preserve a human owner for product decisions and consequential actions. Keep learning from real users. The most valuable product system is not the one with the most agents; it is the one that helps a particular person do something worthwhile, reliably and with less unnecessary effort.

## Quick-start checklist

### What you are building

- Create a small but complete product system with a live experience, an automation, and a clear operating model.
- Design the system around one real user promise instead of a large feature wish list.
- Keep automation narrow, reviewable, and stoppable when quality drops.
- Document decisions, owners, and safety checks so the system can keep working without guesswork.

### Your workflow in 6 easy steps

1. Write the capstone brief and define the user, task, and measurable success.
2. Map the core product, automation, and workflow handoffs before writing code.
3. Build the smallest end-to-end version first and test it with real examples.
4. Add one bounded automation with logs, failure handling, and a pause path.
5. Deploy a safe version and collect pilot feedback from the intended user group.
6. Reflect on what became faster, what still needed human judgment, and what you would improve next.

### Checklist
- ✅ User and problem are clear
- ✅ Scope is narrow enough to test
- ✅ Core workflow is defined before extra features
- ✅ Real validation happens before launch
- ✅ A next improvement is recorded for the next cycle

> Pro tip: treat every module as a build-test-learn loop. The goal is not perfection, it is clarity, evidence, and a usable result that can be improved with the next test.

