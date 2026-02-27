# Kotha Vinuthna — Portfolio 2026

Personal portfolio website. No frameworks, no build step — pure HTML, CSS, and JavaScript.

## File Structure

```
portfolio/
├── index.html          # Markup
├── css/
│   └── style.css       # All styles, variables, animations
├── js/
│   ├── cursor.js       # Custom cursor + trailing ring
│   ├── reveal.js       # Scroll-triggered reveal animations
│   └── game.js         # Tic Tac Toe with minimax AI
└── README.md
```

## Local Development

No install needed. Just open `index.html` in a browser —
or use the VS Code Live Server extension for hot reload.

```bash
# with Python
python -m http.server 3000
# then open http://localhost:3000
```

## Before You Deploy

Update these two placeholders in `index.html`:

```html
<a href="https://github.com/YOUR_USERNAME" ...>GitHub</a>
<a href="YOUR_RESUME_LINK" ...>Resume</a>
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then: **Settings → Pages → Source: main / root** → Save.

Your site goes live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Deploy to Netlify

Drag and drop the entire `portfolio/` folder at **netlify.com/drop**,
or connect your GitHub repo for automatic deploys on every push.
