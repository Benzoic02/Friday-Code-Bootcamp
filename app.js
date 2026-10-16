(() => {
  "use strict";

  const lessons = [
    { id: "introduction", number: "00", label: "Introduction", file: "Introduction.md" },
    { id: "module-01", number: "01", label: "Ship your first product", file: "Module 01 - Setup and Your First Shipped Product.md" },
    { id: "module-02", number: "02", label: "Build a web app", file: "Module 02 - Building Real Full-Stack Web MVPs.md" },
    { id: "module-03", number: "03", label: "Build a mobile app", file: "Module 03 - Building iOS and Android Apps.md" },
    { id: "module-04", number: "04", label: "Find a problem", file: "Module 04 - Research, Competitive Intelligence and Idea Validation.md" },
    { id: "module-05", number: "05", label: "Find your first users", file: "Module 05 - Growth Systems, Outreach, Content and Distribution.md" },
    { id: "module-06", number: "06", label: "Make a product video", file: "Module 06 - Automating Video Production with Kling and ElevenLabs.md" },
    { id: "module-07", number: "07", label: "Automate a workflow", file: "Module 07 - Automations and Always-On Agents.md" },
    { id: "module-08", number: "08", label: "Build an agent", file: "Module 08 - Multi-Agent Orchestration for Complex Products.md" },
    { id: "module-09", number: "09", label: "Launch and monetize", file: "Module 09 - Productionizing and Monetizing What You Build.md" },
    { id: "module-10", number: "10", label: "Build your product system", file: "Module 10 - Capstone, Build Your Own Product System.md" }
  ];

  const moduleVisuals = {
    "module-01": {
      title: "Idea to live waitlist",
      output: "A public page that collects real interest",
      steps: [["01", "Choose", "Audience + problem"], ["02", "Brief", "Set scope + boundaries"], ["03", "Build", "Page + protected signup"], ["04", "Learn", "Deploy + gather feedback"]]
    },
    "module-02": {
      title: "Problem to usable web product",
      output: "A tested full-stack MVP",
      steps: [["01", "Scope", "One complete user task"], ["02", "Model", "Screens + saved data"], ["03", "Connect", "Auth + payments if needed"], ["04", "Verify", "Test + deploy"]]
    },
    "module-03": {
      title: "Web workflow to mobile app",
      output: "A useful app previewed on-device",
      steps: [["01", "Choose", "A real mobile moment"], ["02", "Design", "Screens + navigation"], ["03", "Connect", "State + shared backend"], ["04", "Preview", "Test + prepare export"]]
    },
    "module-04": {
      title: "Question to evidence",
      output: "A clear decision about what to build",
      steps: [["01", "Frame", "State the risky assumption"], ["02", "Research", "Collect comparable sources"], ["03", "Synthesize", "Separate facts from signals"], ["04", "Decide", "Pick the next test"]]
    },
    "module-05": {
      title: "Product to real conversations",
      output: "Reviewed outreach and useful feedback",
      steps: [["01", "Find", "Choose a relevant audience"], ["02", "Understand", "Research their context"], ["03", "Draft", "Write a specific message"], ["04", "Review", "Approve + learn"]]
    },
    "module-06": {
      title: "Brief to reviewed video",
      output: "A short, accurate video asset",
      steps: [["01", "Verify", "Start from a true claim"], ["02", "Plan", "Script + scene list"], ["03", "Generate", "Visuals + voiceover"], ["04", "Review", "Edit + approve"]]
    },
    "module-07": {
      title: "Routine to safe automation",
      output: "A monitored agent with clear limits",
      steps: [["01", "Trigger", "Choose a recurring event"], ["02", "Constrain", "Limit access + actions"], ["03", "Run", "Test with safe examples"], ["04", "Monitor", "Review logs + stop rules"]]
    },
    "module-08": {
      title: "Brief to agent workflow",
      output: "Reviewed work that fits together",
      steps: [["01", "Define", "Set the goal + boundaries"], ["02", "Assign", "Give each role one task"], ["03", "Integrate", "Resolve shared decisions"], ["04", "Review", "Test the whole product"]]
    },
    "module-09": {
      title: "Prototype to dependable product",
      output: "A polished product ready for launch",
      steps: [["01", "Stabilize", "Fix the core workflow"], ["02", "Protect", "Check data + payments"], ["03", "Measure", "Track useful behavior"], ["04", "Launch", "Support + improve"]]
    },
    "module-10": {
      title: "Idea to product system",
      output: "A live product + automation + handoff",
      steps: [["01", "Choose", "Set scope + success checks"], ["02", "Build", "Ship the core product"], ["03", "Extend", "Add one useful automation"], ["04", "Present", "Document + reflect"]]
    }
  };

  const lessonChecklists = {
    introduction: [
      "Define the user problem in plain language.",
      "Choose a tiny first version that can be tested quickly.",
      "Ask Friday for a plan and risk review before building.",
      "Build one end-to-end flow and test it as a user would.",
      "Capture what worked, what failed, and the next change.",
      "Ship a small honest result and repeat the learning loop."
    ],
    "module-01": [
      "Define the audience, promise, and one primary action.",
      "Set up a clean project folder and confirm the correct files.",
      "Ask for a plan before building the page.",
      "Build the page in reviewable stages.",
      "Test mobile and desktop behavior, including failure states.",
      "Deploy and gather real user feedback."
    ],
    "module-02": [
      "Scope one clear user task and measurable outcome.",
      "Write the roles, permissions, and out-of-scope features.",
      "Ask for a rough screen and data model before coding.",
      "Build browse, submit, and review milestones.",
      "Confirm what visitors, contributors, and admins can do.",
      "Deploy a working MVP and review user feedback."
    ],
    "module-03": [
      "Decide why the mobile experience matters.",
      "Map the key screens and shortest path to success.",
      "Separate saved state from temporary screen state.",
      "Build the core mobile flow before extra features.",
      "Preview on a real device and test the mobile journey.",
      "Document what remains for release and export."
    ],
    "module-04": [
      "State the core assumption and what could go wrong.",
      "Collect a few relevant examples and notes.",
      "Separate facts, signals, and unknowns clearly.",
      "Synthesize a recommendation and next test.",
      "Use evidence to rank the biggest product risks.",
      "Choose the next action before building more."
    ],
    "module-05": [
      "Choose a specific audience and a realistic offer.",
      "Build a small justified list of relevant contacts.",
      "Research public context and draft a short outreach note.",
      "Review the message for clarity and respect before sending.",
      "Track replies, rejections, and useful learnings.",
      "Publish one useful piece of content or update."
    ],
    "module-06": [
      "Write the claim, audience, and action the video should drive.",
      "Draft the script and scene list before generating media.",
      "Create an early visual pass and keep it easy to revise.",
      "Review pacing, accuracy, and clarity with a checklist.",
      "Fix mismatches and trim filler before publishing.",
      "Use the final asset to support a clear product message."
    ],
    "module-07": [
      "Pick a recurring workflow with a clear review point.",
      "Map the trigger, input, output, and limits.",
      "Define the safety scope and stop mechanism.",
      "Run the automation on safe example data.",
      "Add logs and a way to inspect failures.",
      "Keep the automation narrow, measured, and easy to disable."
    ],
    "module-08": [
      "Define the end goal and task boundaries.",
      "Split the work into clear roles and handoffs.",
      "Give each role a single job and output.",
      "Connect roles without hidden assumptions.",
      "Test the whole workflow with realistic examples.",
      "Improve the interfaces between agents and tasks."
    ],
    "module-09": [
      "Fix the highest-risk breakage in the core workflow.",
      "Review permissions, data, and payment safety.",
      "Decide what needs measuring to know the product works.",
      "Set up a launch plan with support and rollback.",
      "Run a small pilot and collect real user feedback.",
      "Use evidence to choose the next business improvement."
    ],
    "module-10": [
      "Write the capstone brief and success metric.",
      "Map the product, automation, and workflow handoffs.",
      "Build the smallest end-to-end version first.",
      "Add one bounded automation with logs and guardrails.",
      "Deploy a safe version and collect pilot feedback.",
      "Reflect on what improved and what still needs human judgment."
    ]
  };

  const root = document.documentElement;
  const shell = document.querySelector(".app-shell");
  const nav = document.getElementById("lesson-nav");
  const content = document.getElementById("lesson-content");
  const loading = document.getElementById("loading-state");
  const footer = document.getElementById("lesson-footer");
  const progressBar = document.getElementById("reading-progress-bar");
  const themeButton = document.getElementById("theme-toggle");
  const menuButton = document.getElementById("menu-toggle");
  const sidebarButton = document.getElementById("sidebar-toggle");
  const scrim = document.getElementById("sidebar-scrim");
  const logo = document.getElementById("brand-logo");
  const contentWrap = document.getElementById("content-wrap");
  let currentIndex = 0;
  let activeHeadings = [];
  let scrollFrame = 0;
  const desktopSidebarOpen = !window.matchMedia("(max-width: 900px)").matches;
  sidebarButton.setAttribute("aria-expanded", String(desktopSidebarOpen));
  sidebarButton.setAttribute("aria-label", desktopSidebarOpen ? "Hide course navigation" : "Show course navigation");
  sidebarButton.querySelector(".sidebar-toggle-label").textContent = desktopSidebarOpen ? "Hide sidebar" : "Show sidebar";

  function applyTheme(theme) {
    const isLight = theme === "light";
    root.dataset.theme = isLight ? "light" : "dark";
    root.style.colorScheme = isLight ? "light" : "dark";
    logo.src = isLight
      ? "./Friday%20Code%20-%20Icon%20-%20Dark.svg"
      : "./Friday%20Code%20-%20Icon%20-%20Light.svg";
    themeButton.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
    themeButton.querySelector(".theme-label").textContent = `${isLight ? "Dark" : "Light"} mode`;
    document.querySelector('meta[name="theme-color"]').content = isLight ? "#F4F1EA" : "#151515";
  }

  let savedTheme = "dark";
  try {
    const storedTheme = localStorage.getItem("friday-course-theme");
    if (storedTheme === "light" || storedTheme === "dark") savedTheme = storedTheme;
  } catch (error) {
    console.warn("Theme preference could not be read from local storage.", error);
  }
  applyTheme(savedTheme);

  themeButton.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("friday-course-theme", nextTheme);
    } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  });

  function setSidebarOpen(open) {
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    shell.classList.toggle("sidebar-open", open && mobile);
    shell.classList.toggle("sidebar-collapsed", !open && !mobile);
    menuButton.setAttribute("aria-expanded", String(open && mobile));
    menuButton.setAttribute("aria-label", open ? "Close course navigation" : "Open course navigation");
    sidebarButton.setAttribute("aria-expanded", String(open));
    sidebarButton.setAttribute("aria-label", open ? "Hide course navigation" : "Show course navigation");
    sidebarButton.querySelector(".sidebar-toggle-label").textContent = open ? "Hide sidebar" : "Show sidebar";
  }

  menuButton.addEventListener("click", () => {
    const isOpen = window.matchMedia("(max-width: 900px)").matches
      ? shell.classList.contains("sidebar-open")
      : !shell.classList.contains("sidebar-collapsed");
    setSidebarOpen(!isOpen);
  });
  sidebarButton.addEventListener("click", () => {
    const isOpen = window.matchMedia("(max-width: 900px)").matches
      ? shell.classList.contains("sidebar-open")
      : !shell.classList.contains("sidebar-collapsed");
    setSidebarOpen(!isOpen);
  });
  scrim.addEventListener("click", () => setSidebarOpen(false));
  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      shell.classList.remove("sidebar-open");
      const open = !shell.classList.contains("sidebar-collapsed");
      menuButton.setAttribute("aria-expanded", "false");
      sidebarButton.setAttribute("aria-expanded", String(open));
      sidebarButton.setAttribute("aria-label", open ? "Hide course navigation" : "Show course navigation");
      sidebarButton.querySelector(".sidebar-toggle-label").textContent = open ? "Hide sidebar" : "Show sidebar";
    } else {
      shell.classList.remove("sidebar-collapsed");
      menuButton.setAttribute("aria-expanded", String(shell.classList.contains("sidebar-open")));
      sidebarButton.setAttribute("aria-expanded", String(shell.classList.contains("sidebar-open")));
      sidebarButton.setAttribute("aria-label", shell.classList.contains("sidebar-open") ? "Hide course navigation" : "Show course navigation");
      sidebarButton.querySelector(".sidebar-toggle-label").textContent = shell.classList.contains("sidebar-open") ? "Hide sidebar" : "Show sidebar";
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && shell.classList.contains("sidebar-open")) {
      setSidebarOpen(false);
      menuButton.focus();
    }
  });

  function buildNavigation() {
    const lessonsMarkup = lessons.map((lesson, index) => {
      const isModule = index > 0;
      const link = `<a class="lesson-link" href="#${lesson.id}" data-index="${index}" ${index === currentIndex ? 'aria-current="page"' : ""}>
        <span class="lesson-number">${lesson.number}</span><span class="lesson-title">${lesson.label}</span>
      </a>`;
      return `${isModule && index === 1 ? '<div class="lesson-nav-heading">THE MODULES</div>' : ""}${link}`;
    }).join("");
    nav.innerHTML = `<div class="lesson-nav-heading">START HERE</div>${lessonsMarkup}`;
    nav.querySelectorAll(".lesson-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const index = Number(link.dataset.index);
        if (index === currentIndex && content.children.length) {
          setSidebarOpen(false);
          return;
        }
        navigateTo(index);
        if (window.matchMedia("(max-width: 900px)").matches) setSidebarOpen(false);
      });
    });
  }

  function slugify(text) {
    return text.toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "section";
  }

  function prepareHeadings(container) {
    const seen = new Map();
    activeHeadings = [];
    container.querySelectorAll("h2, h3").forEach((heading) => {
      const base = slugify(heading.textContent);
      const count = seen.get(base) || 0;
      seen.set(base, count + 1);
      heading.id = count ? `${base}-${count + 1}` : base;
      activeHeadings.push(heading);
    });
    const sectionLinks = activeHeadings.map((heading) => `
      <a class="section-link${heading.tagName === "H3" ? " section-link-nested" : ""}" href="#${heading.id}">
        <span>${escapeHtml(heading.textContent.trim())}</span>
      </a>`).join("");
    const toc = document.createElement("div");
    toc.className = "section-nav";
    toc.innerHTML = `<div class="lesson-nav-heading">ON THIS PAGE</div>${sectionLinks}`;
    nav.querySelector(".section-nav")?.remove();
    if (activeHeadings.length) {
      nav.appendChild(toc);
      toc.querySelectorAll(".section-link").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.matchMedia("(max-width: 900px)").matches) setSidebarOpen(false);
        });
      });
    }
  }

  function renderDocument(markdown, lesson) {
    if (!window.marked || !window.DOMPurify) {
      throw new Error("The Markdown renderer did not load. Check your connection and reload the course.");
    }

    const rawHtml = window.marked.parse(markdown, { gfm: true, breaks: false });
    const safeHtml = window.DOMPurify.sanitize(rawHtml, {
      USE_PROFILES: { html: true },
      ADD_TAGS: ["video", "source"],
      ADD_ATTR: ["controls", "playsinline", "preload", "type", "src"],
      FORBID_TAGS: ["style", "iframe", "form", "input", "button", "textarea", "select"],
      FORBID_ATTR: ["style"]
    });
    const temporary = document.createElement("div");
    temporary.innerHTML = safeHtml;
    temporary.querySelectorAll("p").forEach((marker) => {
      if (marker.textContent.trim() !== "Copy/paste prompt" || !marker.querySelector("strong")) return;
      const quote = marker.nextElementSibling;
      if (!quote || quote.tagName !== "BLOCKQUOTE") return;

      const card = document.createElement("section");
      card.className = "copy-prompt";
      const header = document.createElement("div");
      header.className = "copy-prompt-header";
      const button = document.createElement("button");
      button.className = "copy-prompt-button";
      button.type = "button";
      button.textContent = "Copy";
      button.setAttribute("aria-label", "Copy prompt to clipboard");
      header.append(button);
      card.append(header, quote);
      marker.replaceWith(card);
    });
    const sourceTitle = temporary.querySelector("h1");
    const title = sourceTitle ? sourceTitle.textContent.trim() : lesson.label;
    if (sourceTitle) sourceTitle.remove();
    const deck = lesson.id === "introduction" ? temporary.querySelector("h2") : null;
    const description = deck ? deck.textContent.trim() : "";
    if (deck) deck.remove();
    let introImage = "";
    if (lesson.id === "introduction") {
      const image = temporary.querySelector("img");
      if (image) {
        const imageParagraph = image.closest("p");
        introImage = `<div class="lesson-hero-image">${image.outerHTML}</div>`;
        imageParagraph?.remove();
      }
    }
    const introSnapshot = lesson.id === "introduction" ? `
      <ul class="course-snapshot" aria-label="Course at a glance">
        <li><strong>10</strong><span>practical modules</span></li>
        <li><strong>20–24</strong><span>hours, at your pace</span></li>
        <li><strong>1 capstone</strong><span>live product + automation</span></li>
      </ul>` : "";
    const moduleVisual = moduleVisuals[lesson.id];
    const moduleMap = moduleVisual ? `
      <section class="module-map" aria-label="${escapeHtml(moduleVisual.title)} workflow">
        <div class="module-map-heading">
          <span class="module-map-label">THE WORKFLOW</span>
          <span class="module-map-title">${escapeHtml(moduleVisual.title)}</span>
        </div>
        <ol class="module-map-steps">
          ${moduleVisual.steps.map(([number, title, detail]) => `
            <li class="module-map-step">
              <span class="module-map-number">${number}</span>
              <span class="module-map-step-title">${escapeHtml(title)}</span>
              <span class="module-map-detail">${escapeHtml(detail)}</span>
            </li>`).join("")}
        </ol>
        <div class="module-map-output"><span class="output-mark" aria-hidden="true">↳</span><span><strong>YOU LEAVE WITH</strong>${escapeHtml(moduleVisual.output)}</span></div>
      </section>` : "";

    content.innerHTML = `<header class="lesson-hero">
      ${lesson.id === "introduction" ? "" : `<p class="lesson-kicker">MODULE ${lesson.number} <span aria-hidden="true">·</span> 10</p>`}
      <h1>${escapeHtml(title)}</h1>
      ${moduleMap}
      ${introImage}
      ${description ? `<p class="lesson-deck">${escapeHtml(description)}</p>` : ""}
      ${introSnapshot}
      ${lesson.id === "introduction" ? '<div class="hero-divider"><span>THE COURSE</span></div>' : ""}
    </header>`;

    const lessonBody = document.createElement("div");
    lessonBody.className = "lesson-body";
    lessonBody.innerHTML = temporary.innerHTML;

    const layout = document.createElement("div");
    layout.className = "lesson-layout";
    layout.appendChild(lessonBody);

    const checklist = renderLessonChecklist(lesson.id, lesson.label);
    if (checklist) layout.appendChild(checklist);

    content.appendChild(layout);
    content.querySelectorAll(".copy-prompt-button").forEach((button) => {
      button.addEventListener("click", async () => {
        const prompt = button.closest(".copy-prompt").querySelector("blockquote").textContent.trim();
        try {
          await navigator.clipboard.writeText(prompt);
        } catch (error) {
          const field = document.createElement("textarea");
          field.value = prompt;
          field.setAttribute("readonly", "");
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.appendChild(field);
          field.select();
          const copied = document.execCommand("copy");
          field.remove();
          if (!copied) {
            console.warn("Prompt could not be copied to the clipboard.", error);
            button.textContent = "Copy failed";
            window.setTimeout(() => { button.textContent = "Copy"; }, 1800);
            return;
          }
        }
        button.textContent = "Copied!";
        window.setTimeout(() => { button.textContent = "Copy"; }, 1800);
      });
    });
    document.title = `${title} | Friday Code Bootcamp`;
    renderFooter();
    buildNavigation();
    prepareHeadings(content);
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function renderFooter() {
    const previous = lessons[currentIndex - 1];
    const next = lessons[currentIndex + 1];
    const stepMarkup = (lesson, label, direction) => {
      if (!lesson) return `<div class="lesson-step ${direction} step-placeholder" aria-hidden="true"></div>`;
      return `<a class="lesson-step ${direction}" href="#${lesson.id}" data-step-index="${lessons.indexOf(lesson)}">
        <span class="step-label">${direction === "previous" ? `<span class="step-arrow" aria-hidden="true">←</span> ` : ""}${label}${direction === "next" ? ` <span class="step-arrow" aria-hidden="true">→</span>` : ""}</span>
        <span class="step-title">${escapeHtml(lesson.label)}</span>
      </a>`;
    };
    footer.innerHTML = `${stepMarkup(previous, "Previous lesson", "previous")}${stepMarkup(next, "Up next", "next")}`;
    footer.querySelectorAll("[data-step-index]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        navigateTo(Number(link.dataset.stepIndex));
      });
    });
  }

  function renderError(error, lesson) {
    console.error(`Unable to load course lesson "${lesson.file}".`, error);
    content.innerHTML = `<div class="error-state" role="alert">
      <strong>We couldn't open this lesson.</strong>
      <p>${escapeHtml(error.message || "An unexpected error occurred.")}</p>
      <p>Open the course through a local web server so the lesson files can be loaded.</p>
      <code>${escapeHtml(lesson.file)}</code>
    </div>`;
    footer.innerHTML = "";
  }

  function getChecklistState(lessonId) {
    try {
      const stored = localStorage.getItem(`friday-course-checklist-${lessonId}`);
      if (!stored) return {};
      const parsed = JSON.parse(stored);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
      console.warn(`Checklist state could not be read for ${lessonId}.`, error);
      return {};
    }
  }

  function setChecklistState(lessonId, state) {
    try {
      localStorage.setItem(`friday-course-checklist-${lessonId}`, JSON.stringify(state));
    } catch (error) {
      console.warn(`Checklist state could not be saved for ${lessonId}.`, error);
    }
  }

  function getChecklistVisibility(lessonId) {
    try {
      const stored = localStorage.getItem(`friday-course-checklist-visible-${lessonId}`);
      return stored === null ? true : stored === "true";
    } catch (error) {
      console.warn(`Checklist visibility could not be read for ${lessonId}.`, error);
      return true;
    }
  }

  function setChecklistVisibility(lessonId, visible) {
    try {
      localStorage.setItem(`friday-course-checklist-visible-${lessonId}`, String(visible));
    } catch (error) {
      console.warn(`Checklist visibility could not be saved for ${lessonId}.`, error);
    }
  }

  function renderLessonChecklist(lessonId, lessonTitle) {
    const tasks = lessonChecklists[lessonId] || [];
    if (!tasks.length) return null;

    const savedState = getChecklistState(lessonId);
    const total = tasks.length;
    const complete = tasks.reduce((count, _, index) => count + (savedState[index] ? 1 : 0), 0);
    const percent = Math.round((complete / total) * 100);
    const isVisible = getChecklistVisibility(lessonId);

    const checklist = document.createElement("aside");
    checklist.className = `lesson-checklist ${isVisible ? "" : "checklist-collapsed"}`;
    checklist.setAttribute("aria-label", `${lessonTitle} checklist`);
    checklist.innerHTML = `
      <div class="checklist-header">
        <span class="checklist-label">CHECKLIST</span>
        <button class="checklist-toggle" type="button" aria-expanded="${String(isVisible)}" aria-label="${isVisible ? "Hide checklist" : "Show checklist"}">
          ${isVisible ? "Hide" : "Show"}
        </button>
      </div>
      <div class="checklist-body">
        <div class="checklist-progress-wrap">
          <div class="checklist-progress" aria-hidden="true"><span style="width:${percent}%"></span></div>
          <span class="checklist-progress-text">${complete}/${total} complete</span>
        </div>
        <ul class="checklist-list">
          ${tasks.map((task, index) => `
            <li class="checklist-item">
              <label>
                <input type="checkbox" data-checklist-index="${index}" ${savedState[index] ? "checked" : ""}>
                <span>${escapeHtml(task)}</span>
              </label>
            </li>`).join("")}
        </ul>
      </div>
      <div class="checklist-finish">
        <span class="checklist-finish-label">MODULE STATUS</span>
        <strong>${percent === 100 ? "Completed" : percent >= 75 ? "Almost there" : "In progress"}</strong>
      </div>`;

    checklist.querySelector(".checklist-toggle").addEventListener("click", () => {
      const collapsed = checklist.classList.toggle("checklist-collapsed");
      const button = checklist.querySelector(".checklist-toggle");
      button.setAttribute("aria-expanded", String(!collapsed));
      button.setAttribute("aria-label", collapsed ? "Show checklist" : "Hide checklist");
      button.textContent = collapsed ? "Show" : "Hide";
      setChecklistVisibility(lessonId, !collapsed);
    });

    checklist.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const nextState = getChecklistState(lessonId);
        nextState[checkbox.dataset.checklistIndex] = checkbox.checked;
        setChecklistState(lessonId, nextState);

        const updatedCount = tasks.reduce((count, _, index) => count + (nextState[index] ? 1 : 0), 0);
        const newPercent = Math.round((updatedCount / total) * 100);
        const progress = checklist.querySelector(".checklist-progress span");
        const progressText = checklist.querySelector(".checklist-progress-text");
        const finish = checklist.querySelector(".checklist-finish strong");
        progress.style.width = `${newPercent}%`;
        progressText.textContent = `${updatedCount}/${total} complete`;
        finish.textContent = newPercent === 100 ? "Completed" : newPercent >= 75 ? "Almost there" : "In progress";
      });
    });

    return checklist;
  }

  async function navigateTo(index, options = {}) {
    if (index < 0 || index >= lessons.length) return;
    currentIndex = index;
    const lesson = lessons[index];
    if (options.updateHash !== false) history.replaceState(null, "", `#${lesson.id}`);
    buildNavigation();
    loading.hidden = false;
    content.hidden = true;
    footer.hidden = true;
    progressBar.style.width = "0%";
    contentWrap.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "auto" });

    try {
      const response = await fetch(encodeURI(`./${lesson.file}`), { cache: "no-store" });
      if (!response.ok) throw new Error(`The lesson file could not be found (HTTP ${response.status}).`);
      const markdown = await response.text();
      renderDocument(markdown, lesson);
      content.hidden = false;
      footer.hidden = false;
      loading.hidden = true;
      updateProgress();
      if (options.focus) content.focus({ preventScroll: true });
    } catch (error) {
      loading.hidden = true;
      content.hidden = false;
      renderError(error, lesson);
    }
  }

  function updateProgress() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 100;
      progressBar.style.width = `${percent}%`;
      if (activeHeadings.length) {
        let currentHeading = null;
        for (const heading of activeHeadings) {
          if (heading.getBoundingClientRect().top <= 125) currentHeading = heading;
          else break;
        }
        nav.querySelectorAll(".section-link").forEach((link) => {
          link.classList.toggle("section-active", Boolean(currentHeading && link.hash === `#${currentHeading.id}`));
        });
      }
    });
  }
  window.addEventListener("scroll", updateProgress, { passive: true });

  window.addEventListener("hashchange", () => {
    const index = lessons.findIndex((lesson) => lesson.id === location.hash.slice(1));
    if (index !== -1 && index !== currentIndex) navigateTo(index, { updateHash: false, focus: true });
  });

  const requestedIndex = lessons.findIndex((lesson) => lesson.id === location.hash.slice(1));
  navigateTo(requestedIndex === -1 ? 0 : requestedIndex, { updateHash: requestedIndex !== -1 });
})();
