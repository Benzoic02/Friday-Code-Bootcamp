const fs = require('fs');
const p = 'styles.css';
let s = fs.readFileSync(p, 'utf8');
const anchor = '.lesson-content li::marker { color: var(--accent); }';
const css = `${anchor}
.lesson-content ul.interactive-checklist, .lesson-content ol.interactive-checklist { padding-left: 0; list-style: none; }
.lesson-content .checklist-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); transition: border-color 150ms ease, background-color 150ms ease, opacity 150ms ease; }
.lesson-content .checklist-item + .checklist-item { margin-top: 8px; }
.lesson-content .checklist-toggle { width: 18px; height: 18px; flex: 0 0 18px; margin: 4px 0 0; accent-color: var(--accent); cursor: pointer; }
.lesson-content .checklist-toggle:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.lesson-content .checklist-item:has(.checklist-toggle:hover) { border-color: var(--accent); }
.lesson-content .checklist-item.is-checked { border-color: color-mix(in srgb, var(--accent) 38%, var(--line)); background: color-mix(in srgb, var(--accent) 6%, var(--panel)); }
.lesson-content .checklist-item.is-checked > :not(.checklist-toggle) { opacity: .62; }`;
if (!s.includes(anchor)) throw new Error('CSS anchor not found');
if (!s.includes('.lesson-content .checklist-toggle')) s = s.replace(anchor, css);
fs.writeFileSync(p, s, 'utf8');
console.log('Added checklist interaction styles');
