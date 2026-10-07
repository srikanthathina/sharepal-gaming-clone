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

Build command:

```bash
npm run build
```

Run locally:

```bash
python -m http.server 5247
```

Then open:

```text
http://127.0.0.1:5247
```

Then open:

```text
http://127.0.0.1:5247
```

## Deploy

This is a static site, so you can deploy the folder as-is to Netlify, Vercel, GitHub Pages, or any static hosting provider.

For Vercel, the included `vercel.json` runs `npm run build` and serves the generated static `dist/` folder.
