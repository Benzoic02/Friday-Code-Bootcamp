# Module 06: Make a Product Video

## The goal: make useful video with less manual work

Video can show a product workflow, explain a confusing idea, or give a short update a human voice. It can also consume a surprising amount of time and money. In this module, you will design a repeatable pipeline that turns a verified product fact into a script, scene plan, generated visuals, voiceover, and a reviewed export. Friday can help orchestrate and draft these steps, while Kling and ElevenLabs may provide video and voice capabilities through available integrations or APIs. Exact access, settings, labels, limits, and output formats can vary by provider and change over time. Check current provider documentation and your actual setup before building around a feature.

The aim is not to press one button and trust the result. Video generation is probabilistic. A model may depict the wrong object, distort text, alter a face, or create an inconsistent scene. Voice generation can sound unnatural or use a voice without valid permission. A good workflow makes review, consent, factual checks, and cost limits part of production rather than optional cleanup.

By the end, you should have a small video brief, a tested script-to-assets workflow, and one short product video that you can use or revise. Start with one platform and a small number of scenes. A reliable 20-second clip is a better first milestone than a complex “automated studio” that produces unreviewed output.

## Choose the job before choosing a model

Decide what the video should accomplish. A short-form social clip might earn attention and invite a useful next step. A product demo might show a workflow clearly. An onboarding explainer might help a new user complete one task. These are different jobs, and they need different pacing, detail, and calls to action.

Write a one-sentence brief:

- **Audience:** Who should understand this?
- **Goal:** What should they know or do after watching?
- **Single message:** What is the one idea the video must communicate?
- **Evidence:** Which product behavior or claim can you demonstrate?
- **Destination:** Where will it appear, and what is the next step?

Keep claims proportional to proof. If your app is a prototype, call it a prototype. If you do not have measured results, do not claim a percentage improvement. A video is still marketing, so it should not promise capabilities the product does not provide.

### Short-form versus longer explainers

Short-form video needs a fast opening and one idea, often problem, demonstration, benefit, and next step. A longer explainer can add context and a step-by-step example without losing focus.

Check the destination's current guidance for aspect ratio, length, captions, safe areas, file size, and audio. Providers differ in duration, aspect ratio, frame rate, and quality options, so use only settings available in your account and test a draft first.

## Build a script that can be checked

Start with a short, spoken script. Read it aloud and time it. A rough planning estimate is 120 to 160 spoken words per minute, but actual delivery varies with pauses, names, and tone. A 20-second clip should usually have far fewer words than a paragraph. Write for the ear: short sentences, ordinary vocabulary, and one thought at a time.

Example for a fictional approval tool:

> Still chasing feedback across email threads? In SampleBoard, open a campaign, share one review link, and see comments beside the work they refer to. This is an early preview for small creative teams. Want to test the workflow? Join the pilot.

The script describes a workflow without promising unsupported savings or pretending the preview is a mature product. If the interface shown in the video does not yet work that way, revise the script or build a truthful mockup clearly labeled as a concept.

Ask Friday to create a script from supplied product notes with constraints: use only stated capabilities, preserve disclaimers, do not invent customer outcomes, use a natural speaking voice, and mark uncertain claims for review. Then check each sentence against a live product or approved documentation. AI-generated phrasing is not evidence.

## Plan scenes, not just prompts

A scene plan translates the script into visual information: what viewers see, what changes, and how the shot supports the narration. A table can include scene number, duration, spoken line, visual goal, generation method, continuity notes, and review status.

For a product demo, actual screen recordings are often clearer and more truthful than generated video. Use generated scenes for atmosphere, metaphor, or transitions, and use a clean capture of the real interface when the viewer needs to understand a button, chart, or result. If the app is not finished, label a mockup as a concept and avoid implying that it is live functionality.

### A scene-planning example

For the sample approval tool, open with anonymous feedback notes, then show a clean capture or labeled mockup of a review link and comment. End with the real workflow and pilot invitation, not fabricated analytics. Add the correct link during editing.

The text in generated video can be unreliable. Add important captions, labels, URLs, and interface text during editing with a conventional editor or a workflow you have tested. Keep enough empty space for platform overlays and subtitles.

### Example: short-form product reel

Use this 14.5-second reel as a reference when planning the pace and shape of a short product video:

<video controls playsinline preload="metadata" aria-label="Example 14.5-second product reel">
  <source src="Videos/R11-build-for-exploring-reel-14.5s.mp4" type="video/mp4">
  Your browser does not support embedded video. <a href="Videos/R11-build-for-exploring-reel-14.5s.mp4">Open the example reel</a>.
</video>

As you watch, note how quickly the video introduces its idea, how much information it asks the viewer to follow, and where a product or call to action could fit. Treat it as a pacing reference, not as a claim that generated footage will achieve the same result.

## Prompting Kling responsibly

Kling may offer text-to-video and image-to-video workflows through an API, depending on the current product and account. A text-to-video prompt describes a scene from scratch. An image-to-video prompt starts from an image and asks for motion. Before using either mode, review the provider's current API documentation, rights terms, available controls, safety rules, and billing. Do not assume that a given setting name or duration is supported in every version.

A useful prompt describes:

- Main subject and action
- Setting, time, and relevant background
- Camera framing or movement, if supported
- Motion and pace
- Lighting, color, and visual style
- What should remain consistent
- What must not appear
- Intended aspect ratio and duration, chosen from available options

For example: “A steady close view of a fictional designer arranging blank color cards on a studio table, soft window light, calm movement, muted teal and cream, no logos or legible text.” This keeps motion simple and avoids fake interface text or an unapproved likeness.

Keep prompts focused. Multiple camera changes, complex interactions, and exact text make failure more likely. Generate one scene at a time and revise only a few prompt elements. For image-to-video, obtain rights to the source and ensure motion will not distort a person or misrepresent an event.

Log prompt versions, selected settings, output references, and review notes to compare quality and cost. Never include secrets, private screens, or confidential plans.

## Create a voiceover with ElevenLabs

ElevenLabs can provide generated speech and may offer voice selection, voice design or cloning, and multilingual options depending on the current service. Read current terms and documentation before choosing a workflow. A generated voice should not be treated as a real person's endorsement or authentic recording.

Choose a licensed voice and describe delivery plainly, such as “warm, clear, conversational, moderate pace.” Avoid manipulative emotional directions. Check pronunciation and listen to the full output on headphones and a phone speaker.

Voice cloning needs explicit, informed authorization covering the intended use and distribution. A voice sample is personal data. Never clone a public figure, colleague, customer, or family member without valid permission, or use generated audio to impersonate, fabricate an endorsement, deceive, or bypass a refusal. Disclose synthetic audio when listeners could mistake it for a human recording.

For multilingual audio, have a fluent speaker review meaning, tone, and pronunciation. Literal translation can change a promise. Review subtitles separately and check commercial-use terms.

## Orchestrate a safe pipeline with Friday

Describe the outcome and boundaries, not an imaginary interface. For example: “From this approved update, prepare a short script, scene descriptions, video prompts, voiceover text, captions, and claims to verify. Do not call paid services until I approve the script and prompts. Use only supplied facts and flag unknowns.” This is useful even if an integration is not configured.

If APIs are connected, provide authorized source material with confidential details removed. Approve script and scenes before paid generation. Generate one low-cost visual test and inspect framing, motion, artifacts, and factual alignment. Create voiceover with an authorized voice and review pronunciation and pacing. Assemble visuals, voice, captions, and transitions in a tested editor or workflow; do not assume Friday supports a particular export action. Watch the final piece, confirm destination requirements and rights, and retain source assets and version notes.

A prompt should include explicit approval gates before paid calls or public publishing. Test with a harmless example and a small budget before connecting real product data or a recurring trigger. Verify what information is transmitted to each provider and what each service retains.

## Basic assembly and accessibility

Assemble scenes in narrative order, align voiceover, trim pauses, use simple transitions, and add captions. Keep music below speech and check licenses for music, effects, fonts, and stock imagery.

Captions support viewers who are deaf or hard of hearing and people watching without sound. Review them because speech recognition can mishear names, numbers, and negation. Use readable high-contrast text, enough display time, and avoid relying on color alone or flashing content.

Keep one main visual and spoken idea at a time. Ask an unfamiliar viewer what they think the video explains; revise if their interpretation differs from your intent.

## Cost, limits, and quality control

Video and voice may be charged by duration, quality, credits, or other measures. Pricing and rate limits change, so check current provider information and account usage. Set a budget and generation limit. Use lower-cost drafts only when available and useful, and record changes between attempts.

Protect API keys with secure configuration, never hard-code or expose them in prompts, logs, captions, or public repositories. Use narrow permissions and rotate exposed keys. Do not send confidential roadmaps, customer data, security details, or private recordings externally without authority and a review of provider data practices.

Quality review should cover more than aesthetics:

- **Factuality:** Does every spoken and written claim match the product?
- **Visual fidelity:** Does the video show the real workflow or clearly identify a mockup?
- **Continuity:** Are colors, objects, characters, and motion consistent enough?
- **Audio:** Is the voice intelligible, correctly pronounced, and balanced?
- **Accessibility:** Are captions accurate, readable, and synchronized?
- **Rights and consent:** Are images, voices, music, and marks authorized?
- **Deliverability:** Does the file play and meet the destination's current format guidance?
- **Privacy:** Are there real names, accounts, notifications, or private data on screen?

## Practical exercise: product update to social clip

Build one short clip for a product you own or a fictional product. The purpose is to learn the workflow without risking customer data or a public misrepresentation.

1. Select an implemented feature or clearly label a mockup. Define audience, goal, message, source facts, and claims to avoid.
2. Draft a 30 to 60 word script, read it aloud, and divide it into three or four scenes.
3. Choose real screen capture or generation for each scene. Write simple prompts, avoiding legible generated text.
4. Generate one test scene, then review before producing more. Create voiceover with an authorized voice and check pronunciation.
5. Assemble scenes, narration, captions, and truthful next step in a confirmed workflow.
6. Ask an unfamiliar viewer to explain the video. Check budget, rights, privacy, playback, and destination guidance; save prompts and review notes.

**Copy/paste prompt**

> Create a production plan for a short video about [product] for [audience]. Use only these verified product facts: [facts]. The goal is [goal], the destination is [platform], and the desired length is [length]. First draft a 30- to 60-word script and a three- or four-scene plan with a visual approach, narration, captions, and claims to verify. Label mockups clearly and do not invent results, customers, or capabilities. Do not call paid services, generate a voice or likeness, or publish anything until I approve the script, scene prompts, rights, and budget.

For a real launch, begin with a private or limited test and ask for feedback. Do not publish personalized video to a prospect unless they expect it and the underlying data and likeness use are appropriate. An unsolicited “personal” clip can feel invasive even if it was generated accurately.

## Useful invented systems

### Product Update to Social Clip

Use an approved public changelog to draft a script and scene plan, then wait for approval before paid generation. Exclude unreleased work, security-sensitive fixes, and customer details. Do not auto-publish without a proven review and rollback path.

### Research brief to video series

Turn verified research into clips that distinguish observations from interpretations. Keep sources in production notes and do not turn a competitor's claim into a product fact. Verify quotations, permissions, and dates.

### Micro-SaaS demo factory

Create audience-specific versions from an accurate core demo, changing narration only when capabilities remain the same. Maintain an approved claim list; do not imply unsupported bespoke features.

### Founder explainers

Create explainers from real product lessons or questions, using the founder's own or an authorized voice. Review each script and publish only when there is something useful to say.

## Common mistakes and final checks

Common mistakes include writing for the page instead of for speech, generating long multi-action clips before testing a simple prompt, asking a video model to render small interface text, changing too many settings between attempts, and choosing visuals that distract from the actual product. Another frequent mistake is trusting fluent voiceover without listening to it. A natural-sounding voice can still mispronounce a name or make an untrue claim sound more credible.

Before considering a video finished, ask: Would a viewer understand the one main point? Can I prove every promise? Does the footage match the product's actual state? Do I have permission for every person's image or voice? Are the captions accurate? Is private information removed? Is the use of synthetic media appropriate and transparent? Did I check current provider costs, limits, rights, and platform delivery requirements?

Keep human review for scripts, likeness or voice use, paid generation, and publication. Friday can coordinate work, but the founder owns truth, permissions, and final quality. A careful pipeline is easier to improve than unchecked automatic output.

## Quick-start checklist

### What you are building

- Turn a fact or product promise into a short, accurate video asset without wasting time on endless revisions.
- Start from a true claim, not a vague idea about what the video should “feel” like.
- Plan scenes, script, visuals, and voiceover before generating expensive media.
- Review and edit with a checklist so the video stays honest and useful.

### Your workflow in 6 easy steps

1. Write the core claim, target audience, and the single action the video should drive.
2. Draft a short script and list the scenes, messages, and visual beats in order.
3. Generate a first pass using the right visual and voice style, but keep it easy to adjust.
4. Review the video for clarity, accuracy, pacing, and strong visual flow.
5. Trim filler, fix mismatches, and confirm that the final message matches the product.
6. Publish or reuse the asset with a clear understanding of what it does and does not prove.

### Visual checklist

- ✅ User and problem are clear
- ✅ Scope is narrow enough to test
- ✅ Core workflow is defined before extra features
- ✅ Real validation happens before launch
- ✅ A next improvement is recorded for the next cycle

> Pro tip: treat every module as a build-test-learn loop. The goal is not perfection, it is clarity, evidence, and a usable result that can be improved with the next test.

