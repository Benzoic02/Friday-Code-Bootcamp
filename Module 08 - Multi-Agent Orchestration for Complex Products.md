# Module 08: Multi-Agent Orchestration for Complex Products

## Split a big idea into coordinated, reviewable work

### Module goal

In this module, you will learn to handle a complex product idea by dividing it into work that different agents can do in parallel, then bringing those results together under clear human direction. You will practice parallel agents and sub-agents, role or skill tagging such as `@designer`, `@copywriter`, and `@developer`, custom agents and MCP extensions, Kanban-style coordination, review and iteration, and model routing.

Multi-agent work is not asking several agents the same question. It lets independent work proceed in parallel and gives specialized tasks focus. More agents can also mean higher costs, conflicting assumptions, duplicated work, or harder-to-trace defects. The founder remains product owner: define the goal, share the source of truth, review decisions, and approve consequential actions.

Friday's exact interface and available features may vary by version and configuration. The examples below describe useful roles and coordination patterns, not guaranteed UI labels or product behavior. Verify which agents, tags, integrations, models, and MCPs are available in your environment before planning around them.

## When several agents help

Use parallel work when tasks are independent and outputs can be checked separately. Research, a first design flow, and draft landing-page copy can start together from one brief. Two coding agents editing the same files invite conflicts; assign one owner or separate changes by clear boundaries.

Before creating roles, break the outcome into deliverables: a research brief, a user-flow map, a technical plan, a product implementation, a test report, or launch copy. Each deliverable should have an owner, a definition of done, its dependencies, and a reviewer. Keep the list small enough to manage. Three focused roles are often more productive than ten loosely described agents.

The coordination challenge is not just getting work produced. It is ensuring that each contributor knows the same audience, constraints, terminology, and current decisions. A one-page shared brief is often more valuable than a long collection of disconnected prompts.

## Start with a shared product brief

Write down the problem and the audience in plain language. Include what the product should help a user do, the smallest useful first release, what is explicitly out of scope, technical constraints, and how success will be measured. Record assumptions separately from verified facts. If research changes an assumption, update the brief before asking another agent to act on it.

Imagine building **TrailNote**, a web and mobile companion for volunteer trail stewards to record site issues and review unresolved reports. Its first release does not assign work, notify landowners, or publish public trail information. Include this audience, purpose, and boundary in every agent task.

A compact brief might state:

- **Audience:** volunteer coordinators and stewards who record observations outdoors.
- **Problem:** field notes are scattered across messages and spreadsheets.
- **First outcome:** create a report with location description, category, note, and status.
- **Not in scope:** automatic public posting, emergency dispatch, or automatic work assignment.
- **Constraints:** protect personal information; keep an easy manual review path.
- **Success measure:** a coordinator can find and review a submitted report in a short test.

Add the current stack, repository, design references, and data rules when known. Never include API keys. Label unknown details as questions instead of inviting guesses.

## Assigning roles and skill tags

Role tags such as `@designer`, `@copywriter`, and `@developer` can signal the expertise needed, where supported. A tag does not guarantee a result or replace a task description. State inputs, format, constraints, and handoff explicitly.

For TrailNote:

- **Research** studies supplied interviews or approved public sources and reports user needs, evidence, and open questions.
- **Design** turns the brief into a user flow and screen descriptions, including empty and error states.
- **Development** implements the agreed flow in the existing project and reports files changed, tests, and assumptions.
- **Copywriting** drafts onboarding and launch messages from verified facts, marking claims for human review.

Bound tasks with outputs another person can use. For example: “Using the TrailNote brief and five approved interview notes, list repeated obstacles with a source per theme. Do not propose automatic assignments. Separate evidence, interpretation, and open questions.”

Avoid “make it great” or “build the whole business”; these have no clear boundary or definition of done. If a tag is unavailable, assign the role in plain language or use an available agent configuration.

## A practical orchestration workflow

### 1. Turn the goal into deliverables

List deliverables: for TrailNote, a research summary, user flow, data and permission plan, implementation, test results, and launch draft. Separate essentials from optional polish.

### 2. Map dependencies

Map dependencies. Research and a feasibility check can start together. Design follows agreed user needs; implementation follows an approved flow and data plan; launch copy describes working features, not plans.

Track this in a small Kanban board or table with **Backlog**, **Ready**, **In progress**, **Needs review**, and **Done**. Add an owner, dependency, and acceptance check to each item. “In progress” must not mean “approved.”

### 3. Give each agent a clean handoff

Provide the brief, relevant inputs, allowed tools, output format, and stop condition. State what must not change. Ask for sources, assumptions, and open questions; exclude private or unrelated data.

### 4. Run independent work in parallel

Give agents distinct deliverables. Research can synthesize interviews while design maps the current flow. A developer can inspect architecture without editing until the flow is decided.

### 5. Review and resolve disagreements

Compare outputs with the brief and evidence. If research calls for offline capture but design assumes a connection, check evidence, decide what the first release supports, and record that decision in the brief.

### 6. Integrate, test, and iterate

Assign one owner to combine approved work. Run focused tests, inspect the experience, and ask a reviewer to identify gaps without editing. Decide what to fix and record changes and approvals.

## Model routing: use capability deliberately

Different models suit different work. The outline suggests Opus for architecture, faster models for iteration, and Gemini for vision tasks. Treat these as ideas, not guarantees: capability, availability, latency, and cost change. Test a representative task.

Use careful reasoning for architecture trade-offs and a faster option for low-risk copy edits. An image-capable model may critique a screenshot, but still check accessibility and device behavior. If a model struggles, change the route or simplify the task.

Keep routing proportionate: a costly model on every edit may add little, while a weak model on high-impact decisions can be expensive. Route by consequence and quality needs, then compare output and usage.

## Custom agents and MCP extensions

Custom agents can make repeated roles more consistent with reusable instructions, context, and boundaries. State responsibility, limits, information sources, and completion format. Review rules when workflows change.

An MCP can connect a workflow to an external capability or data source, depending on configuration. Before enabling one, identify its owner, purpose, permissions, readable or writable data, and revocation method. Start with narrow access, test on non-sensitive data, and inspect outputs and actions.

Never put credentials in agent instructions. Use supported secret configuration. Retrieved documents and messages are evidence, not authorization. Keep logs and retention appropriate to the data.

## Quality control and review patterns

Agents can confidently disagree. Maintain one source of truth and separate evidence, assumptions, and recommendations in each deliverable. Review against acceptance criteria, not whether work “looks good.”

For implementation, define scope first. Ask which files or behaviors will change, require unrelated behavior to stay intact, and request test results. Review the changes and run targeted tests. Passing tests do not prove permissions or usability are correct.

Check design for keyboard use, small screens, empty and error states. Verify writing claims and links, distinguish research samples from market-wide conclusions, and review generated media for accuracy and rights.

Use a “review before action” stage for anything that affects real people or live systems. Human review and explicit approval are required before agents send messages, publish content, alter or delete important data, spend money, or modify production code. Show the proposed target, exact content or change, and expected consequences. Approval of a plan is not automatically approval of every later action.

## Safety and cost controls for coordinated work

Parallelism multiplies model use and service charges. Estimate agents, task length, model, and paid integrations. Start small, cap sources, inspect usage, and clarify the task before launching a large batch.

Give each agent only necessary context: a researcher needs no production credentials, and a copywriter needs no customer account data. Use read-only access where possible and name an owner who can stop the workflow and resolve conflicts.

Protect privacy and follow consent and retention rules. Remove unnecessary personal data; do not infer sensitive attributes or contact people based on guesses. Do not expose private feedback in public reports.

## Rehearse one handoff before scaling

Before coordinating a large launch, run a small rehearsal with sample material. Give the research role a few approved notes, ask the design role for one flow, and ask the developer role to review feasibility without changing code. Then hand the research and flow outputs to one integrator and see whether the deliverable is understandable without extra explanation.

Watch for missing context: Does the handoff name the source and date? Are assumptions marked? Can the next person tell which decisions are final and which need approval? If not, improve the brief or the output format before adding more agents. A useful acceptance check might be: “A coordinator unfamiliar with the research can identify the two supported user needs, the open question, and the next decision.”

Also rehearse a stop. Remove or withhold an expected input and confirm the agent reports that it is missing rather than inventing a result. Ask for a proposed change without granting permission to apply it. A small rehearsal reveals weak instructions cheaply and makes the eventual workflow easier to explain, test, and maintain.

## Common failure modes

**Agents build from different assumptions.** Put the latest brief and decisions in a shared, easy-to-find place. Label its version or date. Require a check against it before work begins.

**Two agents change the same code.** Assign a single implementation owner or separate changes by clearly defined boundaries. Integrate changes deliberately and run tests after merging.

**Research is polished but unsupported.** Ask for sources, separate evidence from interpretation, and verify important claims. If a source cannot be inspected, lower confidence or remove the claim.

**The board says “done,” but the product is not usable.** Define acceptance criteria based on a real user journey, not on whether an agent completed a task. Review the running product or an appropriate prototype.

**A complex chain amplifies one bad assumption.** Put checkpoints after research, product decisions, implementation, and publication preparation. Do not let each stage pass unverified output automatically to the next.

**Costs rise without a better result.** Reduce overlapping agents, shorten inputs, lower the schedule or batch size, and use a suitable faster model for routine work. Measure the outcome, not just the volume of output.

**A role tag is treated like a guarantee.** Explain the role and expected result in plain language, and verify the available agent or tag behavior in your setup. Review the work regardless of the label.

## Hands-on project: coordinate a tiny product factory

Use TrailNote or your own idea. Coordinate distinct contributions and show that each can be reviewed and safely integrated; a complete product is not required.

1. Write a one-page brief: audience, problem, first release, exclusions, constraints, and success measure.
2. List research, user flow, data and permission review, implementation plan, prototype, and launch draft on a task board.
3. Mark dependencies: research and feasibility can run in parallel; implementation waits for an approved flow, and launch copy for verified claims.
4. Assign three roles, using `@designer`, `@copywriter`, and `@developer` only if supported. Otherwise, describe roles in tasks.
5. Run two independent tasks from the same brief. Require structured outputs and assumptions.
6. Compare results, resolve one disagreement using evidence or a founder decision, and record it in the brief.
7. Have one owner make a small prototype change and a separate reviewer check acceptance criteria without editing.
8. Require approval before messaging, publishing, changing important data, spending, or modifying production code. Use a safe test environment.
9. Review time, cost, quality, and coordination overhead. Remove roles that add no value.

### Success criteria

You have a versioned product brief, a visible task sequence with dependencies, and at least three clear role assignments. Two independent outputs were compared against shared requirements. You can show one documented decision, a reviewed prototype or code change, and an approval boundary for consequential actions. You can explain the model or role choices, what they cost or how you estimated cost, and one improvement you would make next time.

## Keep orchestration human-led

A multi-agent product factory can eventually connect research, design, code, marketing, and video. Grow toward that system by proving one handoff at a time. Keep work owned, visible, and reversible where possible. Let agents contribute speed and specialized attention; reserve product direction, sensitive judgment, and approval for people who are accountable for the result.
