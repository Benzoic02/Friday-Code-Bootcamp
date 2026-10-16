### Architecture & Tech Stack
- **Environment**: Windows local development.
- **Project Location**: `C:\Users\neonn\Downloads\Friday Code Bootcamp`
- **Core Files**: `app.js`, `styles.css`, `index.html`.
- **Content Modules**: 10 Markdown files (e.g., `Module 01 - Setup and Your First Shipped Product.md`) located in the root directory.
- **Runtime**: Node.js (for scripts, syntax validation, and preview server).
- **Preview Port**: 4415.

### Design & Layout Conventions
- **Responsiveness**: Responsive design using CSS breakpoints.
- **Layout Consistency**: `.lesson-layout` and `.lesson-body` containers must share a 1040px max-width and center-alignment.
- **Checklist Styling**: Checklist headings are strictly labeled "Checklist". Items are rendered as interactive, persistent checkboxes via `localStorage`. Leading emoji markers (e.g., ✅) are prohibited within Markdown source to prevent display duplication.
- **Image Assets**: Relative paths to `Images/` folder are used for inline content.

### Project Constraints
- **File Management**: Direct editing via standard editors often triggers Windows file-lock errors. Modifications must be performed via `node -e` one-liners or dedicated patch scripts (e.g., `_finish-checklist-and-image.js`).
- **Tooling**: `rg` (ripgrep) is unavailable. Use `Get-ChildItem` with `Select-String` or Node.js `fs` module for file traversal and inspection.
- **Newline Handling**: Files utilize `CRLF` endings; scripts must be regex-compatible with `\r\n` or newline-agnostic patterns.