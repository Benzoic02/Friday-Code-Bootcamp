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
- **Image Assets**: Relative paths to `Images/` folder are used for inline content. Supported formats include `.png` and `.svg`. All visuals must be contextualized with narrative captions or subtitles (e.g., `aetheria.tryfriday.app`).

### Project Constraints
- **File Management**: Direct editing triggers Windows file-lock errors. Modifications must be performed via `node -e` one-liners or patch scripts.
- **Tooling**: `rg` (ripgrep) is unavailable. Use `Get-ChildItem` with `Select-String` or Node.js `fs` module for file inspection.
- **Newline Handling**: Files utilize `CRLF` endings. Scripts must account for `\r\n` sequences; regex-based modifications must be performed carefully to avoid shell-escaping corruption of backslashes.
- **Formatting**: Modules 1-4 must maintain professional publication-grade layout with process diagrams and contextualized asset integration.