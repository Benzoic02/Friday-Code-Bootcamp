# Module 04: Find a Problem Worth Solving

## The goal: build the right thing

An idea can sound exciting and still be wrong for the people you hope to serve. Research reduces the cost of being wrong. In this module, you will use Friday as a research analyst: gather evidence from public sources and conversations, organize it, compare alternatives, and turn what you learn into a decision you can test. The point is not to produce a giant report. The point is to replace guesses with specific, traceable evidence before you spend weeks building.

Friday can help search, extract, compare, and structure information. Firecrawl may support web workflows when connected; access and controls vary. Treat agent findings as leads to verify. You remain responsible for interpreting the evidence.

You will create a research brief, compare competitors or substitutes, and design a validation experiment.

## Start with a research question

“Research project management” is too broad. A useful question names a group, problem, and decision. For example: “How do independent wedding photographers collect client selections, and what evidence would justify a review tool?”

Write down what you believe before researching:

1. **Audience:** Who experiences the problem? Be precise enough to find them.
2. **Problem:** What task is frustrating, expensive, risky, or repeated?
3. **Current workaround:** What do they do instead, including spreadsheets, email, or nothing?
4. **Value hypothesis:** What improvement might they pay for or adopt?
5. **Decision:** What would you do differently depending on the evidence?

Mark each belief as a hypothesis, not a conclusion. Add a confidence level and the evidence that would change your mind. This simple habit makes it harder to cherry-pick sources that support your favorite idea.

## Find useful evidence, not just pages

Web research is most valuable when sources answer a particular question. Potential sources include competitor product and pricing pages, help centers, changelogs, public documentation, customer reviews, community discussions, job listings, and public case studies. Each source has a different bias. A pricing page describes an offer, not necessarily the number of customers who buy it. A review captures one person's experience, not the experience of every customer.

Start with a source plan. Ask Friday to propose search terms, source categories, and a collection table for your research question. Review that plan. Then gather a manageable sample, perhaps five direct competitors, three adjacent substitutes, and a dozen recent reviews across multiple products. The right sample depends on the market. A small, transparent sample with links is more useful than hundreds of untraceable summaries.

Firecrawl may help retrieve and structure content from public websites if your setup supports it. Respect each site's access rules, terms, robots guidance, and rate limits. Avoid aggressive crawling, bypassing access controls, collecting personal information without a clear need, or treating restricted material as public. Some pages are dynamic, blocked, changed, or only partially captured. Record the URL, access date, and any retrieval limitations. For important claims, open the source yourself.

Useful extraction columns might include source URL, company, page type, date checked, target customer, stated job, feature, price and billing unit, plan restrictions, exact supporting quotation, and your interpretation. Separate the quotation from your interpretation. This keeps a plausible inference from quietly turning into a supposed fact.

## A practical web research workflow

1. **Define boundaries.** Choose a geographic market, customer size, use case, and time window. State exclusions too. “Tools for freelancers in the United States, checked this month” is more interpretable than “all tools.”
2. **Create a source list.** Ask Friday to suggest search queries and public source types. Add sources you already know. Do not ask it to fabricate links or assume that a search result is current.
3. **Collect evidence in batches.** Retrieve a few pages at a time. Ask for a structured table and a short quotation or source passage for each claim. Keep source references attached to rows.
4. **Check representative claims.** Open the original pricing page, review, or changelog. Confirm wording, dates, plan conditions, and context. If the page is unavailable, mark the row as unverified rather than filling the gap with a guess.
5. **Look for contrary evidence.** Search for complaints, missing features, confusing pricing, failed migrations, and reasons people choose an alternative. Ask what would disprove your idea.
6. **Summarize only after collection.** Separate observations, interpretations, unknowns, and decisions. A summary without evidence should not drive a roadmap.

When asking Friday to research, give it boundaries and an output format. For example: “For these eight public URLs, extract claims about onboarding and pricing. Return one row per claim with URL, date shown if available, a short quotation, and a confidence note. Do not infer a feature from marketing language. Mark missing information as unknown.” Clear constraints make results easier to review.

## Competitive analysis that helps you choose

Competition is broader than companies with the same product name. A customer may use a spreadsheet, a shared folder, a human service, a generic platform, or simply tolerate the problem. These substitutes matter because your product competes for attention, money, and behavior change.

Build a comparison table with a few dimensions relevant to the customer's job:

| Dimension | Questions to answer |
| --- | --- |
| Audience and job | Who is it for, and what task does it promise to improve? |
| Onboarding | How quickly can a new user reach the first useful result? |
| Core workflow | What steps does the product appear to support? |
| Pricing | What is the price, billing unit, trial, and stated plan boundary? |
| Differentiation | What claim or capability is emphasized? |
| Evidence and gaps | What is documented, complained about, or not yet known? |

Do not treat “feature gap” as synonymous with “opportunity.” A competitor may omit a feature because users do not want it, because it is expensive to support, or because a substitute already solves the need. A gap becomes interesting when it connects to a repeated, important job and there is evidence a reachable group would switch, pay, or adopt a new workflow.

For pricing, record date, currency, billing interval, usage basis, trial, and plan limits. Normalize comparisons and save the source. A cheaper plan may have a lower cap or omit a key workflow. Reviews reveal customer language and frustrations, but a few complaints do not prove a universal problem. Note sample size and source, and avoid exposing reviewer identities. Changelogs show what a company chooses to announce, not everything it builds. Silence does not prove a feature is absent, so check current documentation before drawing conclusions.

## Turn interviews into insight

Public research cannot tell you exactly how a particular person works. Short interviews can. Ask about recent behavior rather than hypothetical enthusiasm. “Tell me about the last time you gathered client approvals. What happened from start to finish?” is more useful than “Would you use my app?” Follow-up questions should uncover frequency, consequences, tools used, decision makers, and workarounds.

With permission, take notes or record a conversation. Tell participants what you are collecting, why, who will see it, and whether you will quote them. Do not upload confidential transcripts, customer records, or sensitive personal information to an AI service unless you have the necessary consent, authority, and appropriate data protections. When in doubt, remove names and identifying details or analyze your own notes locally.

An interview synthesis can use these fields:

- Participant type, with an anonymized label
- Situation and task described
- Specific recent example
- Existing tools and workaround
- Cost of the problem, in time, money, risk, or frustration
- Exact phrases that describe the need
- Evidence against your initial assumption
- Follow-up question or experiment

Ask Friday to group notes by recurring problem while preserving which participant supports each theme. Instruct it not to invent quotes, combine different people's stories into a fake single story, or interpret politeness as purchase intent. Review the source notes before acting on a generated theme.

## Build a research brief

A useful brief is a decision aid. Include:

1. **Decision and scope:** The question, audience, geography, and research dates.
2. **Evidence collected:** Source types, sample sizes, and limitations.
3. **What appears consistent:** Findings linked to sources or anonymized interviews.
4. **What remains uncertain:** Missing data, conflicting claims, or weak samples.
5. **Implications:** Product choices that follow if the findings are true.
6. **Next test:** The smallest experiment that could change your decision.

Structured storage helps when research will be reused. A spreadsheet or Google Doc is enough for a one-off project. For a recurring tracker, a Supabase table might include source URL, competitor, source type, observation, checked_at, evidence text, confidence, and reviewer status. Avoid building an elaborate schema before you know what decisions it supports. Store only what you need, secure credentials, restrict access, and establish how stale records are updated or deleted.

## Parallel agents without parallel confusion

Parallel work helps when tasks are separable. One agent can identify competitors, another review pricing, and a third inspect changelogs. Require source-linked observations in a shared format, then reconcile duplicates and contradictions. If researchers disagree, inspect their evidence rather than averaging their answers. A builder can prepare a disposable prototype from the current hypothesis, but must not present it as validated. Use Friday's available capabilities as they exist in your setup; do not assume a particular screen or control.

## Four practical use cases

### Four useful research systems

A **Market Gap Scanner** can review a limited set of permitted public sources in a niche and surface changes or repeated complaints. Start manually, include links and capture dates, and mark findings for human review. It finds leads, not validated markets.

A **competitor feature tracker** follows documented capabilities over time. Keep “not found in reviewed documentation” distinct from “does not exist,” and label explanations of roadmap impact as interpretation.

A **user interview synthesizer** groups approved notes into themes and follow-up questions. Preserve participant references, do not invent quotations, and require human approval before sharing or changing a product commitment.

An **Autonomous Competitive Intelligence OS** might combine weekly Firecrawl crawls of permitted public pages, multi-model synthesis, Supabase storage, and Slack alerts. Build gradually: test a source manually, validate extraction, store reviewed records, then add a digest. Define access, retention, error handling, an owner, and a pause switch. Multiple models repeating an unsupported claim do not make it true.

## From evidence to a product decision

Turn research into decisions using a simple evidence ladder:

- **Observed:** A dated source or direct account supports the statement.
- **Repeated:** More than one independent source describes a similar situation.
- **Important:** The problem causes a meaningful consequence for the target group.
- **Reachable:** You can identify and contact enough of this group to test a solution.
- **Actionable:** A small experiment can distinguish between alternatives.

Prioritize problems using frequency, intensity, existing workaround, willingness to change, and your ability to serve the group. Do not pretend these are objective scores. A rough 1-to-3 score can help compare options, but include a sentence explaining the score and its evidence. Add a “confidence” field so a high-impact but poorly evidenced problem becomes a research priority rather than an automatic build.

Possible next tests include a landing page with a clear promise, a manual concierge service, a clickable mockup, a workflow observation, a paid pilot, or a prototype used by a few target users. Define success and failure before you start. For example: “Interview six independent photographers this week. Continue only if at least four describe a recent selection handoff that took over an hour or caused a client delay, and at least two agree to test a manual workflow.” This is a learning threshold, not a guarantee of a business.

## Practical exercise: validate a niche workflow

Choose a narrow audience and one repetitive job, such as collecting client approvals or scheduling volunteer shifts. Avoid high-stakes areas involving medical, legal, financial, or sensitive data.

1. Write one research question and three assumptions you need to test.
2. List five direct or adjacent competitors and at least two substitutes.
3. Inspect public pages and collect dated, source-linked evidence about audience, workflow, price, and limitations.
4. Read a small sample of reviews or public discussions. Tag problems and counterexamples.
5. Speak with three to five target users, with consent, about recent behavior and workarounds.
6. Prepare a one-page brief separating evidence, interpretation, and unknowns. Choose a low-cost experiment with a success threshold and stop condition.
7. Record what changed, or why evidence strengthened the original hypothesis.

**Copy/paste prompt**

> Help me investigate this question: [research question]. Limit the work to [audience, geography, and date range] and use only these approved public sources or source types: [sources]. First propose search queries and an evidence table. For every finding, include its source URL, the exact supporting passage or a short quotation, and the date checked when available. Separate evidence from interpretation, label unknowns, and include evidence that could disprove my assumption. Do not invent links, quotes, or facts, and do not contact people or make a product decision for me.

Do not contact people deceptively, scrape personal contact details, or imply you have a finished product when you do not. A small number of thoughtful conversations can teach more than a large, intrusive list.

## Practical checks and common mistakes

Before you act on a finding, ask:

- Can I open the source, and does it say what the summary claims?
- Is the information current enough for this decision?
- Have I separated a fact from an inference?
- Did I look for evidence that challenges my preferred answer?
- Is the sample representative enough for the claim I am making?
- Am I collecting more personal information than necessary?
- Does this research change a decision, or am I researching to avoid shipping?

Common mistakes include treating search rank as market size, assuming a review represents every buyer, comparing prices with different billing units, confusing a missing page with a missing feature, and asking interviewees to predict whether they would use a hypothetical product. Another trap is over-automating before confirming that your sources and extraction format work. Automation can repeat errors faster and make them look systematic.

Give Friday a clear question, source boundaries, desired structure, and rules for uncertainty. Verify claims, protect private information, respect site policies, and make the decision yourself. Research helps you choose a better next thing to ship.
