### Architecture & Tech Stack
- **Environment**: Windows local development.
- **Project Location**: `C:\Users\neonn\Downloads\Friday Code Bootcamp`
- **Core Files**: `app.js`, `styles.css`, `index.html`.
- **Content Modules**: 10 Markdown files in the root directory.
- **Runtime**: Node.js (scripts, syntax validation, preview server).
- **Preview Port**: 4415.

### Design & Layout Conventions
- **Responsiveness**: Responsive design using CSS breakpoints.
- **Layout Consistency**: `.lesson-layout` and `.lesson-body` containers must share a 1040px max-width and center-alignment.
- **Checklist Styling**: Checklist headings are strictly labeled "Checklist". Items use persistent `localStorage` checkboxes. Leading emoji markers are prohibited.
- **Header Actions**: The `.topbar-actions` container hosts the theme toggle and the Slack invite icon (linked to `friday-code.slack.com`).
- **Browser Title**: Document title is hardcoded to "Friday Code Bootcamp: Go from idea to a product people can use" to prevent dynamic overwrites.
- **Image Assets**:
    - **Pathing**: Use `<Images/file name.png>` to support filenames with spaces.
    - **Styling**: Responsive `figure` and `figcaption` elements; avoid `image-rendering: pixelated`.

### Project Constraints
- **File Management**: Direct editing triggers Windows file-lock errors; use `node -e` or patch scripts.
- **Tooling**: `rg` (ripgrep) is unavailable. Use `Get-ChildItem` or `fs` module.
- **Newline Handling**: Files utilize `CRLF` endings; scripts must account for `\r\n`.
- **Data Integrity**: No literal escape sequences (`\n`, `\\n`) in Markdown source.
- **Header Cleanliness**: No "THE COURSE ---" prefixes in the Introduction header.
- **Content Exclusions**: Introduction module must not contain checklists.