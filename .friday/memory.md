### Architecture & Tech Stack
- **Environment**: Windows local development.
- **Project Location**: `C:\Users\neonn\Downloads\Friday Code Bootcamp`
- **Core Files**: `app.js`, `styles.css`, `index.html`.
- **Content Modules**: 10 Markdown files (e.g., `Module 1.md`) located in the root or `content/` directory.
- **Runtime**: Node.js (used for local scripts, syntax validation, and preview server).
- **Preview Port**: 4415.

### Design & Layout Conventions
- **Responsiveness**: Responsive design using CSS breakpoints.
- **Layout Consistency**: `.lesson-layout` and `.lesson-body` containers must share a 1040px max-width and center-alignment to ensure module info and main content are perfectly aligned.
- **Component Styling**: Unused layout components (e.g., checklist sidebar) are purged. Checklist items are rendered as interactive checkboxes with custom hover/focus affordances.
- **State Management**: Module-specific checkbox tick states are persisted in the browser using `localStorage` keyed to the specific module identifier.

### Project Constraints
- **File Management**: Direct file modifications via standard tools often trigger Windows file-lock errors. Terminal-based `node -e` patching or executing temporary helper scripts is the required workaround for `app.js` and `styles.css` updates.
- **Tooling**: `rg` (ripgrep) is unavailable. Use `Get-ChildItem` with `Select-String` or Node.js-based file traversal (e.g., `fs.readdirSync`) for cross-module content inspection.
- **Naming Conventions**: Checklist headings must strictly be labeled "Checklist" (no "Visual" prefix).