# Module 01: Ship Your First Product

## What you will accomplish

This module takes you from a product idea to a small, public website that can collect interest. You will install Friday Code, get comfortable with its working style, make informed choices about models and cost, and deploy a landing page or waitlist site. The point is not to master every setting before starting. It is to learn a repeatable loop: explain a useful outcome, review a plan, build a small version, test it, and put it in front of people.

The course treats Friday as an autonomous product operating system, not a magic button and not a replacement for your judgment. It can research, write, design, code, connect services, and help deploy, while you decide what to build, which claims are true, and whether the result is safe to publish. The code and project files remain yours and can be continued outside Friday.

By the end, you should have a working local project, a deployed page, a clear next step for visitors, and a short list of real people to ask for feedback. A simple, honest page that works is a better first result than a complicated product no one has seen.

## 1. Get ready before installing

Start by deciding what this first project must do. For the module exercise, it needs to explain one idea, make the intended audience recognizable, and offer a way to register interest. It does not need a customer dashboard, billing, elaborate animation, or a complete brand system.

Set aside a project folder that is easy to find, such as `Projects/validate-this-idea`, and keep project files together. Download Friday Code from [tryfriday.ai](https://www.tryfriday.ai/code), then install the desktop app using its current instructions. Open or create a local project in that folder. Exact labels and setup options may vary by version, so use current product guidance rather than guessing.

[![Screenshot of the Friday Code download page. Open the image to view the original full-resolution screenshot.](Images/Screenshot%202026-10-13%20122304.png)](Images/Screenshot%202026-10-13%20122304.png)

Before giving an agent a large request, confirm that Friday can open the intended folder and that you understand where project files will live. This avoids a surprisingly common first-day error: asking for a build, then discovering that it was made in a different directory from the one you expected.

## 2. Treat keys and accounts as valuable

An API key is a credential that lets software act on an account. Some models and connected services may require keys, and the outline supports both available model choices and bring-your-own-key options. The exact providers, controls, and account steps can change. Follow the product's current instructions for entering a key; never paste a secret into a public prompt, a screenshot, a shared document, or source code that will be published.

Use separate development accounts when practical and give services only the permissions required. If a key may have been exposed, revoke or rotate it and review usage. Avoid committing secrets to GitHub. Before publishing, ask Friday to check generated files for credentials. Share only necessary data with external services, and collect only what the experiment needs.

## 3. Learn Friday's working loop

The useful mental model is a small product team whose work you direct. Friday has specialized agents described in the course outline: Friday Go is intended for speed, Friday Coder for more complex applications, and Friday Writer for content. Friday also supports model switching and parallel work. Different models may be available, including Claude Opus series, GPT, Gemini, Grok, and OpenRouter or bring-your-own-key choices. Availability and exact routing controls can change, so do not assume every model is always available in every setup.

Here is a short overview of the models available in Friday Code:

<video controls playsinline preload="metadata" aria-label="Overview of models in Friday Code">
  <source src="Videos/Friday%20Code-Models-Dark.mp4" type="video/mp4">
  Your browser does not support embedded video. <a href="Videos/Friday%20Code-Models-Dark.mp4">Open the video</a>.
</video>

Choose a model based on task, quality, speed, and cost. A quick copy edit may not need the most capable option; a difficult architecture question may justify a stronger model. Give parallel agents separate deliverables, since duplicated work or simultaneous edits can waste credits and create conflicts.

A strong request includes the audience, problem, desired outcome, limits, and how you will judge success. Instead of “make me a startup site,” try:

> Create a one-page waitlist site for independent fitness coaches who lose track of client follow-ups. The page should explain a simple reminder tool, use a calm and practical tone, and ask for an email address. Do not invent customer quotes, integrations, or pricing. Keep the page mobile-friendly and make the next action obvious. Before changing files, tell me the proposed sections and how the signup will be stored.

The last sentence creates a review point. Read the plan. Correct wrong assumptions. Ask what decisions are still unclear. Once the work starts, request small milestones and inspect each one. You remain responsible for facts, permissions, and launch readiness.

## 4. Describe the smallest useful product

Before asking for design or code, write a short brief:

1. **Audience:** Who has the problem? Be more specific than “everyone.”
2. **Problem:** What frustrating or costly task do they face now?
3. **Promise:** What will your first version help them do?
4. **Action:** What should a visitor do next?
5. **Evidence:** What do you know, and what are you still testing?
6. **Boundaries:** What should this version deliberately leave out?

For example, “independent designers forget project status updates when client jobs overlap” is more actionable than “freelancers need better project management.” A page can test interest before you build an application. Do not claim customers, integrations, or results you have not verified.

## 5. Build the page in reviewable steps

Use the founder workflow from the outline: describe the product, let Friday plan and build, refine the result, then deploy to Vercel. A sensible sequence is:

**Step one: ask for a plan.** Share the brief and ask for page structure, assumptions, external services, and unresolved questions. Avoid a backend unless you need to store signups.

**Step two: approve the content outline.** Include a headline, short explanation, concrete benefits, audience, and signup action. Keep the first screen useful on a phone.

**Step three: build.** Request readable code, responsive layout, accessible contrast, and labeled form fields. Ask which files changed and how to preview the site.

**Step four: review as a visitor.** Check claims, links, and the main action. Test on a phone and submit a test address. If there is no backend, the form must not claim it saved a signup.

**Step five: refine specifically.** For example: “The headline explains the feature but not the audience. Rewrite it for independent designers in under twelve words.” Change a small number of things at once.

## 6. Make email capture real

An email form is a promise to the visitor. Decide where addresses go, who can see them, and how you will follow up. The invented use case in this module, “Validate This Idea in 48 Hours,” combines a landing page, generated copy, ad creative, and a simple Supabase waitlist so a founder can start collecting real emails immediately. Supabase is one of the integrations named in the course outline. The exact setup flow, field names, and interface labels can vary.

Ask Friday to propose a minimal signup design before connecting anything. A typical waitlist record might contain an email address, signup timestamp, and an optional source field. Avoid collecting names, phone numbers, or sensitive details unless you have a clear reason. Ask how duplicate addresses, invalid input, errors, and successful submission will be handled.

If the project uses Supabase, configure the database and access rules deliberately. A visitor should be able to submit a signup without gaining permission to read the entire waitlist. Ask Friday to explain how the public form writes data and what stops anonymous visitors from listing or changing other people's records. Test permissions with a non-admin context when possible. Never put a privileged service key in browser code. If you cannot verify the protection, do not publish the form with real personal data yet.

Explain in a short privacy notice what you collect and why, and how people can contact you or request removal. Limit access to the list and follow applicable privacy requirements.

## 7. Prepare the Vercel deployment

Deployment makes the page public. The outline names Vercel as the destination. Follow current supported steps and confirm which repository and branch will be published.

Here is a walkthrough of Friday Code's one-click deployment flow. Available options may differ in your project, so confirm the target and settings before publishing.

<video controls playsinline preload="metadata" aria-label="One-click deployment in Friday Code">
  <source src="Videos/Friday%20Code-OneClickDeployment.mp4" type="video/mp4">
  Your browser does not support embedded video. <a href="Videos/Friday%20Code-OneClickDeployment.mp4">Open the video</a>.
</video>

Check the build output and resolve errors rather than clicking through warnings blindly. Confirm required environment variables are configured in the deployment environment and are not exposed in public source. Preview the deployed address before sharing it widely. Test the page on desktop and mobile, submit a test signup, and verify the data arrives in the intended place. A successful deployment is not proof that the whole product works.

Use a small launch checklist:

- The published link loads without requiring your account.
- The headline, offer, and call to action are accurate.
- The page is readable at a narrow phone width.
- The form reports success only after a successful save.
- Failure states give a helpful next step and do not lose a visitor's data silently.
- Secrets are not visible in the repository or browser.
- The waitlist is not publicly readable.
- Contact and privacy information are present where appropriate.

Share the link with a few people who fit the audience. Ask what they think the product does, what feels unclear, and whether they would use it. Do not lead them to the answer. Record their exact words and the questions they ask. A signup count by itself cannot tell you why people did or did not respond.

## 8. Continue an existing project

You may already have a sketch or prototype from Lovable, Replit, GitHub, or Claude Code. The course supports importing these projects. Start from a copy or clean branch, then ask Friday to summarize structure, behavior, and missing pieces before editing. Set a boundary such as: “Do not replace the app. Explain it and propose the smallest change for a waitlist.” Remove exposed credentials and keep a recoverable baseline.

## 9. Watch credits and time

Cost control starts with a defined outcome. Break a vague request into focused tasks, ask for a plan before a large build, and use a suitable model for each job. Repeatedly asking an agent to regenerate an entire site can cost more and introduce regressions. Reuse good copy, keep a brief of decisions, and request a narrow change when only one section needs work.

Review available usage or credit information before long or parallel work. Pricing and limits change, so check the relevant account and set a spending boundary. Stop repeated or unapproved work. A low-cost experiment must still produce reliable evidence.

## Common first-project mistakes

- **Starting with a feature list.** Begin with a person and a problem, then select the smallest test.
- **Accepting the first plan without review.** Agents may assume audiences, prices, or integrations that you never specified.
- **Confusing a nice mockup with a working form.** Test the actual save and confirmation path.
- **Collecting too much data.** A waitlist rarely needs more than an email at first.
- **Publishing secrets.** Check source, repository visibility, and browser-facing configuration.
- **Overbuilding before feedback.** A small page can teach you more than an elaborate application built in isolation.
- **Treating visits as validation.** Talk to relevant visitors and learn what they understood and need.

## Project exercise: Validate This Idea in 48 Hours

Choose one real problem you can describe in two sentences. Create a one-page site that introduces a possible solution and collects email addresses in a simple Supabase waitlist. Use Friday to generate the initial copy and a small set of ad creative ideas. Keep all claims truthful. Do not buy ads or contact people without considering platform rules, consent, and your budget. The purpose of creative is to test a message, not to disguise an unproven product as established.

**Workflow**

1. Write the audience, problem, promise, and one question you want the experiment to answer.
2. Ask Friday for a page plan and a list of assumptions. Correct the assumptions before it builds.
3. Draft two headline variations and two short ad concepts. Compare which audience and promise each makes clear.
4. Build the page and configure the smallest appropriate waitlist schema and access permissions.
5. Test invalid email, duplicate email, successful signup, and a failed save. Remove test data or mark it clearly.
6. Deploy to Vercel, inspect the live page, and verify the signup reaches the intended private table.
7. Send the link to at least five relevant people. Ask them to describe the offer in their own words and note objections.
8. Review results after 48 hours. Write what you learned, what remains uncertain, and the single next experiment.

**Copy/paste prompt**

> Help me plan a small waitlist experiment. My audience is [audience], their problem is [problem], and the idea I want to test is [idea]. First propose the page sections, signup data, privacy/access rules, and a test checklist. Do not edit files or connect services until I approve the plan. Do not invent claims, testimonials, pricing, or integrations. After approval, build one step at a time and tell me what changed and how to verify it.

**Success criteria**

- A stranger can open the deployed page and understand who it is for.
- The primary action works from a phone-sized screen.
- A real test signup is stored, and the list is not readable by anonymous visitors.
- Failure and duplicate cases have understandable outcomes.
- No fake testimonials, invented metrics, or exposed credentials appear.
- You have feedback from relevant people and a written decision based on evidence, even if that decision is to change the idea.

The most important result is a completed learning loop. A small product put in front of real people is now something you can improve with evidence rather than guesswork.
