# Friday Code Bootcamp

A project-based course about planning, building, testing, and launching products with Friday Code.

## Run the course locally

The course is a static site. Its lessons are loaded from Markdown files, so open it through a local web server rather than directly as a `file://` page.

### Option 1: VS Code Live Server

1. Open this folder in VS Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `index.html` and choose **Open with Live Server**.

### Option 2: Python

If Python is installed, run this from the project folder:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Course contents

- `Introduction.md` introduces the course and its project-based approach.
- `Module 01` through `Module 10` contain the lessons.
- `Images/` contains images used in the lessons.
- `Videos/` contains the embedded course video examples.
- `Friday_Code_Bootcamp_Outline.md` contains the course outline.

The site uses `marked` and `DOMPurify` from jsDelivr and Urbanist and JetBrains Mono from Google Fonts. An internet connection is needed for these hosted assets. Lesson text, images, videos, and site code are stored in this repository.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. Open the repository's **Settings**, then **Pages**.
3. Select **Deploy from a branch**, choose the `main` branch and the root (`/`) folder, then save.
4. Wait for the Pages deployment to complete and open the published URL.

The included `.nojekyll` file tells GitHub Pages to publish the static project without Jekyll processing.

## Files to keep private

Do not add API keys, passwords, private environment files, or service credentials to the repository. The `.gitignore` file excludes common local environment files and generated development folders.
