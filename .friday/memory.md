### Architecture & Tech Stack
- **Environment**: Windows local development.
- **Project Location**: `C:\Users\neonn\Downloads\Friday Code Bootcamp`
- **Core Files**: `app.js`, `styles.css`, `index.html`.
- **Content Modules**: 10 Markdown files (e.g., `Module 01 - Setup and Your First Shipped Product.md`) in the root directory.
- **Runtime**: Node.js (scripts, syntax validation, preview server).
- **Preview Port**: 4415.

### Design & Layout Conventions
- **Responsiveness**: Responsive design using CSS breakpoints.
- **Layout Consistency**: `.lesson-layout` and `.lesson-body` containers must share a 1040px max-width and center-alignment.
- **Checklist Styling**: Checklist headings are strictly labeled "Checklist". Items use persistent `localStorage` checkboxes. Leading emoji markers (e.g., ✅) are prohibited in Markdown source.
- **Image Assets**:
    - **Pathing**: Use `<Images/file name.png>` (angle brackets) to support filenames with spaces.
    - **Styling**: Images and figures must be responsive. Use standard `<figure>` and `<figcaption>` elements.
    - **Rendering**: Avoid `image-rendering: pixelated`; use default browser interpolation.

### Project Constraints
- **File Management**: Direct editing triggers Windows file-lock errors. Use `node -e` one-liners or targeted patch scripts.
- **Tooling**: `rg` (ripgrep) is unavailable. Use `Get-ChildItem` with `Select-String` or Node.js `fs` module for file inspection.
- **Newline Handling**: Files utilize `CRLF` endings. Scripts must account for `\r\n` sequences.
- **Data Integrity**: No literal escape sequences (e.g., `\n`, `\\n`) are permitted in Markdown source. 
- **Header Cleanliness**: The Introduction page must not contain "THE COURSE ---" prefixes or dividers in the rendered header.