### Architecture & Tech Stack
- **Environment**: Windows local development.
- **Project Location**: `C:\Users\neonn\Downloads\Friday Code Bootcamp`
- **Core Files**: `app.js`, `styles.css`, `index.html`.
- **Runtime**: Node.js (used for local scripts and preview server).
- **Preview Port**: 4415.

### Design & Layout Conventions
- **Responsiveness**: The project follows a responsive design using CSS breakpoints for mobile and desktop views.
- **Layout Consistency**: The `.lesson-layout` and `.lesson-body` containers must share identical max-width and centering alignment to ensure the module information and main content are perfectly aligned in the web view.
- **Component Styling**: Unused layout components and CSS blocks related to removed features (e.g., the former checklist sidebar) must be fully purged to avoid layout gaps or empty columns.

### Project Constraints
- **File Management**: Direct file modifications via standard tools may encounter file-lock errors on this Windows environment; terminal-based `node -e` patching is the preferred workaround for CSS/JS updates.
- **Tooling**: `rg` (ripgrep) is unavailable; use `Get-ChildItem` with `Select-String` or Node.js-based file searching for cross-module content inspection.