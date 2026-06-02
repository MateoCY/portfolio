# Note: Just update contact.html when you see this next, and upload resume.pdf to assets

## File Structure
```
portfolio/
├── index.html          ← Home page
├── config.js           ← ⭐ EDIT THIS to update all content
├── assets/
│   ├── css/style.css   ← Visual styles
│   ├── js/main.js      ← Shared scripts
│   └── (your images)   ← Add photos here
└── pages/
    ├── experience.html  ← Experience list
    ├── exp-detail.html  ← Auto-generated detail page
    ├── projects.html    ← Projects list
    ├── proj-detail.html ← Auto-generated detail page
    └── contact.html     ← Contact page
```

## ⭐ Editing Your Content

**All your personal content lives in `config.js`.**
Open it and update:

- `name`, `title`, `tagline` — your hero text
- `profilePhoto` — path to your profile image
- `aboutText` — the paragraph about you
- `social` — email and social media links (leave blank to hide)
- `experience` — array of work history entries
- `projects` — array of project entries

### Adding a photo to an experience or project
1. Drop your image file into the `assets/` folder (e.g. `assets/my-project.jpg`)
2. In `config.js`, set `photo: "assets/my-project.jpg"` for that entry

### Adding a new experience entry
Copy this block into the `experience` array in `config.js`:
```js
{
  id: "exp4",          // must be unique
  company: "Company Name",
  role: "Your Role",
  period: "2024 – Present",
  location: "City, Country",
  photo: "assets/your-photo.jpg",
  summary: "One-line summary shown on cards.",
  details: `Full HTML description for the detail page.
    <br><br>Can include lists:
    <ul>
      <li>Achievement one</li>
      <li>Achievement two</li>
    </ul>`,
  tags: ["Skill1", "Skill2"],
},
```

### Adding a new project
Same idea — copy a block in the `projects` array.

## Running Locally
Just open `index.html` in a browser. No build step needed.

For best results (so images load correctly), serve with a simple local server:
```bash
# Python 3
python -m http.server 3000
# then open http://localhost:3000
```

## Customising the Look
All colours and fonts are in `assets/css/style.css` at the top under `/* Tokens */`.
Change `--accent` for the highlight colour, `--ink` for the main text colour, etc.
