# SharePal Gaming Gadgets Rental Page Clone

Responsive static recreation of the SharePal Bangalore gaming gadgets rental listing page.

## Files

- `index.html` - page structure and modals
- `styles.css` - responsive styling and SharePal-inspired visual system
- `data.js` - product, FAQ, and review data
- `app.js` - filters, product drawer, FAQ toggles, calendar modal, and micro-interactions

## Run in VS Code

1. Open this folder in VS Code.
2. Install the "Live Server" extension if you do not already have it.
3. Right-click `index.html`.
4. Choose "Open with Live Server".

NPM command:

```bash
npm start
```

Then open:

```text
http://127.0.0.1:5247
```

Alternative terminal command:

```bash
python -m http.server 5247
```

Then open:

```text
http://127.0.0.1:5247
```

## Deploy

This is a static site, so you can deploy the folder as-is to Netlify, Vercel, GitHub Pages, or any static hosting provider.

For Vercel, the included `vercel.json` forces Vercel to serve the static `index.html`, CSS, and JavaScript files directly. The local `server.mjs` file is only for running the project with `npm start` on your computer.
