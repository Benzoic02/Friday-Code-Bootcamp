const fs = require('fs');
const p = 'app.js';
let s = fs.readFileSync(p, 'utf8');
const anchor = '    const sourceTitle = temporary.querySelector("h1");';
const insert = `    temporary.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
      if (!/^checklist$/i.test(heading.textContent.trim())) return;
      let section = heading.nextElementSibling;
      while (section && !/^H[1-6]$/.test(section.tagName)) {
        if (section.tagName === "UL" || section.tagName === "OL") {
          section.classList.add("interactive-checklist");
          section.querySelectorAll(":scope > li").forEach((item, index) => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checklist-toggle";
            checkbox.setAttribute("aria-label", "Mark checklist item " + (index + 1) + " complete");
            item.classList.add("checklist-item");
            item.prepend(checkbox);
          });
        }
        section = section.nextElementSibling;
      }
    });

`;
if (!s.includes(anchor)) throw new Error('render anchor not found');
s = s.replace(anchor, insert + anchor);
const anchor2 = '    content.appendChild(layout);\r\n';
const insert2 = `    content.appendChild(layout);
    const checklistStorageKey = "friday-checklist-" + lesson.id;
    let checklistState = {};
    try { checklistState = JSON.parse(localStorage.getItem(checklistStorageKey) || "{}"); } catch (_) {}
    lessonBody.querySelectorAll(".checklist-toggle").forEach((checkbox, index) => {
      checkbox.checked = Boolean(checklistState[index]);
      checkbox.addEventListener("change", () => {
        checklistState[index] = checkbox.checked;
        try { localStorage.setItem(checklistStorageKey, JSON.stringify(checklistState)); } catch (_) {}
        checkbox.closest("li").classList.toggle("is-checked", checkbox.checked);
      });
      checkbox.closest("li").classList.toggle("is-checked", checkbox.checked);
    });
`;
if (!s.includes(anchor2)) throw new Error('append anchor not found');
s = s.replace(anchor2, insert2);
fs.writeFileSync(p, s, 'utf8');
console.log('Updated checklist renderer');
