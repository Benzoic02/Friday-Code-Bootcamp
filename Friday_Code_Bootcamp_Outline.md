# Friday Code Bootcamp: Ship Real Products as a Solo Founder or Indie Builder

**A long-form, project-based course for students, indie hackers, builders, and founders.**

The goal is not to become a professional software engineer. The goal is to go from idea to live product, validated users, and automated growth systems using Friday Code as your technical co-founder.

Friday Code is treated as an autonomous product operating system: it can research markets, design interfaces, write full-stack code, connect real backends, deploy, generate marketing assets (including video), build mobile apps, and run ongoing automations — all while you stay in control of the code and the business decisions.

---

## Who This Course Is For

- Indie hackers who want to ship MVPs without hiring developers
- Founders validating ideas and building first versions of SaaS or tools
- Students and career switchers who want practical product-building skills
- Builders who already have ideas but get stuck on technical execution
- Anyone who wants to move faster than traditional no-code or pure coding workflows

---

## Core Outcomes

By the end of the bootcamp you will have:

- Multiple live, deployed products (web and/or mobile)
- A working understanding of how to use Friday’s agents, integrations, multi-modal capabilities, and automations to replace or augment engineering, design, and early growth work
- At least one system that continues running (research, content, video, outreach, or product maintenance) with minimal daily input
- A portfolio of projects you can show to users, investors, or future collaborators
- The ability to invent and execute new product ideas that combine coding, research, mobile, video, and growth in ways most builders don’t yet do

**Prerequisites:** Basic familiarity with web concepts is helpful but not required. Comfortable installing desktop software and managing API keys. A Mac or Windows machine.

**Estimated duration:** 20–24 hours depending on depth and number of projects completed.

---

## Course Philosophy

Friday Code combines the coding muscle of Claude Code / autonomous agents with the approachability of Lovable-style builders, while keeping everything local, exportable, and deeply integrated (GitHub, Supabase, Vercel, Figma, Slack, Gmail, Firecrawl, custom MCPs, Kling, ElevenLabs, and more). You own the code. Projects live on your machine. Agents can run for minutes or hours, in parallel, on schedules, and across your real tools.

Every module emphasizes shipping something real, getting feedback, and building leverage rather than perfect code.

---

## Module 1: Ship Your First Product

**Goal:** Install Friday, understand the core loop, and get something live on the internet.

### Topics
- Installing Friday Code (desktop app, local projects, API keys, security basics)
- How Friday thinks: specialized agents (Friday Go for speed, Friday Coder for complex apps, Friday Writer for content), model switching, and parallel work
- Models overview and routing (Claude Opus series, GPT, Gemini, Grok, OpenRouter/BYOK)
- The founder workflow: describe the product → Friday plans and builds → you refine → deploy to Vercel
- Importing existing ideas or prototypes from other tools (Lovable, Replit, GitHub, Claude Code)
- Credit awareness and basic cost control

### Project
Build and deploy a simple landing page or waitlist site with email capture.

### Invented Use Case
A “Validate This Idea in 48 Hours” kit — Friday builds the landing page, generates the copy, creates ad creative, and sets up a simple Supabase waitlist so you can start collecting real emails immediately.

---

## Module 2: Build a Web App

**Goal:** Move beyond static pages to products people can actually use.

### Topics
- Prompting for full-stack apps (Next.js/React/Vite + TypeScript + Tailwind + Supabase auth, database, and edge functions)
- Visual Design Editor (Design Mode) for fast UI iteration without constant re-prompting
- Screen sharing and website cloning for competitive inspiration or redesigns
- Connecting GitHub and deploying cleanly
- Handling basic payments (Stripe) and user accounts
- Version history and iteration patterns

### Project
Build a focused micro-SaaS or tool (example: a simple AI-powered calculator, directory, or internal dashboard for a niche).

### Invented Use Cases
- Niche marketplace or directory with user submissions and admin approval
- Personal CRM or deal tracker that founders can actually use themselves
- Client portal for freelancers or agencies that can be productized later
- Living Style Guide Generator that analyzes a brand’s website + Figma and produces an interactive component library

---

## Module 3: Build a Mobile App

**Goal:** Ship native-feeling mobile apps that you can preview on real devices and eventually submit to the stores.

Friday Code supports mobile app generation (primarily React Native + Expo), with device preview, clean code export, and the same agent-driven workflow used for web apps. This module shows how founders can move from web MVP to mobile without becoming mobile specialists.

### Topics
- Prompting Friday for mobile apps (React Native + Expo structure, navigation, screens, state)
- Device preview and iteration inside Friday
- Common founder mobile patterns: auth, lists, forms, offline-friendly flows, notifications (via Expo)
- Connecting the mobile frontend to the same Supabase backend used for web
- Exporting the project and continuing in Expo / EAS for builds and store submission
- iOS vs Android considerations and what Friday handles automatically
- When a mobile app is worth building versus a strong mobile web experience

### Project
Convert one of your earlier web ideas into a focused mobile app (or build a new mobile-first micro-tool). Preview it on a real device.

### Invented Use Cases
- Offline-first field tool (sales notes, inventory checker, or client visit logger) that syncs when online
- Mobile companion app for a web product (quick actions, notifications, on-the-go dashboard)
- Simple consumer habit or utility app for early testing
- Internal mobile tool for a small team that replaces a messy spreadsheet + messaging workflow

---

## Module 4: Find a Problem Worth Solving

**Goal:** Use Friday as a research analyst so you build the right thing.

### Topics
- Firecrawl and web research workflows
- Competitive analysis: pricing pages, feature gaps, G2 reviews, changelogs
- Synthesizing research into structured briefs, Supabase tables, or Google Docs
- Parallel agents: one researches while another starts building based on findings
- Turning research into product decisions quickly

### Invented Use Cases
- Automated “Market Gap Scanner” that monitors a niche weekly and surfaces opportunities
- Competitor feature tracker that feeds directly into your product roadmap
- User interview synthesizer that turns notes or transcripts into prioritized feature ideas
- Autonomous Competitive Intelligence OS with weekly Firecrawl crawls, multi-model synthesis, Supabase storage, and Slack alerts

---

## Module 5: Find Your First Users

**Goal:** Build systems that help you find and talk to users.

### Topics
- Personalized outreach pipelines (research leads → write emails → send via Gmail)
- Content generation: blog posts, social threads, product descriptions
- Multi-modal assets: product images and short-form creative
- Scheduled agents for recurring content or follow-up sequences
- Slack and notification integrations for monitoring growth activity

### Invented Use Cases
- “Founder Outreach Engine” that finds relevant people in a niche, researches their company, and drafts highly personalized emails
- Automated content machine that turns product updates or research into blog posts + social assets on a schedule
- Waitlist nurture system that segments signups and sends relevant follow-ups

---

## Module 6: Make a Product Video

**Goal:** Build systems that generate product demos, social clips, explainers, and marketing videos with minimal manual work.

Friday supports multi-modal generation and voice (including ElevenLabs). This module teaches how to connect external video APIs (Kling) and high-quality voice so agents can research a topic or product update, write a script, generate visuals, produce voiceover, and assemble usable video assets.

### Topics
- Overview of Kling’s text-to-video and image-to-video capabilities via API (prompt structure, duration, aspect ratio, quality modes)
- Using ElevenLabs for natural voiceovers, character voices, and multilingual audio
- Prompting Friday to orchestrate the full pipeline: script → scene descriptions → Kling video generation → ElevenLabs voiceover → basic assembly or export
- Handling API keys, rate limits, and cost control inside agent workflows
- Generating short-form content (TikTok/Reels/Shorts) versus longer explainers or product demos
- Scheduled agents that turn product updates, research, or user stories into video content automatically
- Practical quality tips: strong visual prompts, consistent style, and when to manually refine

### Project
Create an automated video pipeline for one of your products (e.g., weekly feature highlight, competitor reaction clip, or onboarding explainer).

### Invented Use Cases
- “Product Update to Social Clip” agent that watches GitHub or a changelog and produces short demo videos
- Personalized video outreach system (short custom clips for high-value prospects)
- Content engine that turns research briefs or blog posts into multi-clip video series
- Automated demo factory for a micro-SaaS (generate variations of the same core product video for different audiences or platforms)
- Founder personal brand system that produces consistent explainers on a schedule

---

## Module 7: Automate a Workflow

**Goal:** Make Friday work while you sleep or focus on other things.

### Topics
- Long-running agents and scheduled (cron) automations
- Background task continuation and minimized mode
- Practical founder automations: support triage, weekly research digests, content publishing, bug monitoring, video generation triggers
- Credit and cost management so automations stay sustainable
- Combining multiple automations into a small operating system for your product

### Invented Use Cases
- Self-updating competitive intelligence dashboard that emails you a weekly brief
- Automated user feedback synthesizer that monitors Slack, email, or form responses and surfaces patterns
- Product maintenance agent that watches for common bugs or feature requests and drafts fixes or GitHub issues
- Self-Maintaining Personal/Team Knowledge Base with scheduled agents that maintain a living Supabase-backed wiki

---

## Module 8: Build an Agent

**Goal:** Handle bigger ideas by splitting work across agents.

### Topics
- Parallel agents and sub-agents for research + coding + writing simultaneously
- Skill tagging (`@designer`, `@copywriter`, `@developer`)
- Custom agents and extending with MCPs
- Agentic Kanban-style management and longer project coordination
- Review and iteration patterns that keep quality high
- Model routing strategies (Opus for architecture, faster models for iteration, Gemini for vision)

### Invented Use Cases
- Multi-agent product factory: research agent finds opportunity → design agent creates flows → coding agent builds MVP → marketing/video agent prepares launch assets
- Automated onboarding and support system that researches user issues and drafts responses or documentation updates

---

## Module 9: Launch and Monetize

**Goal:** Turn prototypes into things people pay for or rely on.

### Topics
- Adding Stripe and real payment flows (web and mobile considerations)
- Improving reliability, edge cases, and user experience
- Analytics and instrumentation
- Exporting code and continuing in your own editor when needed
- Packaging products for sale (templates, tools, or micro-SaaS)
- Basic considerations for scaling early usage
- Hybrid workflows (Friday + VS Code/Cursor) and local LLMs for cost/privacy

### Project
Take one of your earlier builds and add payments, polish the core flow, and prepare a simple launch.

---

## Module 10: Build Your Product System

Students design and ship a complete system tailored to their goals. The capstone must include a live product, at least one automation, clear documentation of the agent strategy, and a short reflection on leverage and speed.

### Possible Directions
1. **Micro-SaaS with Built-in Growth Loop** — Product (web and/or mobile) + automated outreach + content/video engine + competitive monitoring.
2. **Founder Operating System** — Personal knowledge base + research agents + outreach system + project tracker + scheduled video updates that runs on schedules.
3. **Niche Tool Factory** — A system that helps you rapidly spin up and validate small tools (web or mobile) for different audiences.
4. **Content + Product Hybrid** — A media property (newsletter, directory, or community tool) with automated research, publishing, and video that feeds a paid product.
5. **Agency or Freelance Accelerator** — Client portal (web + mobile) + proposal generator + research agent + automated follow-ups + video proposals.
6. **Self-Improving Product** — An app that uses agents to collect feedback, propose improvements, and implement overnight changes.

---

## Supporting Elements Across the Course

- Weekly “Ship Something” challenges focused on real user feedback rather than perfect code
- Prompt libraries and agent workflow templates optimized for founder and indie use cases
- Cost and credit optimization guidance so students can build sustainably
- Emphasis on ownership: every project can be exported and continued independently
- Continuous “invent” challenges: after each module, students propose and prototype one use case not shown in official materials
- Community sharing of invented use cases and results

---

## What This Course Fully Covers

- Autonomous coding with specialized and parallel agents (Friday Go, Coder, Writer, Long-Running)
- Multi-model support and routing (Claude Opus, GPT, Gemini, Grok, OpenRouter/BYOK)
- Full-stack web apps with Supabase + Vercel + GitHub
- Mobile apps (React Native / Expo for iOS and Android)
- MCP integrations (GitHub, Supabase, Vercel, Figma, Slack, Gmail, Firecrawl, custom)
- Visual Design Editor, screen sharing, and website cloning
- Multi-modal generation (images, video via Kling, voice via ElevenLabs)
- Automations, scheduling, and always-on agents
- Research, competitive intelligence, outreach, and content systems
- Productionizing, monetization, and code ownership

This bootcamp treats prompting as only the starting point. Orchestration, integration, mobile, video, and invention are the real skills that turn Friday Code into leverage for students, indie hackers, builders, and founders.
