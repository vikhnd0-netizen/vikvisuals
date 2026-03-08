# VikVisuals

A complete, modern, high-end freelance photography and videography website for **VikVisuals** — Vik, a London-based photographer and videographer working with professional services firms, charities and events.

## Project Structure

```
/
├── index.html                    ← Homepage
├── gallery.html                  ← Gallery with filter + lightbox
├── contact.html                  ← Contact page with form
├── README.md
├── services/
│   ├── professional.html         ← Professional Services page
│   ├── charity.html              ← Charity page
│   ├── events.html               ← Events page
│   ├── hospitality.html          ← Hospitality page
│   └── food-restaurant.html      ← Food & Restaurant page
├── css/
│   ├── main.css                  ← Global styles, design tokens, nav, footer, buttons
│   ├── home.css                  ← Homepage-specific styles
│   └── services.css              ← Shared service page styles, gallery, contact
├── js/
│   ├── nav.js                    ← Sticky nav, scroll behaviour, hamburger, dropdown, scroll-reveal
│   └── gallery.js                ← Gallery filter + lightbox
└── images/
    └── README.md                 ← Image placeholder guide
```

## Tech Stack

- **Plain HTML5, custom CSS, vanilla JavaScript** — no frameworks, no build tools
- Responsive / mobile-first
- Deployable to any static host: Netlify, GitHub Pages, Vercel, etc.

## Getting Started

Open `index.html` in a browser. No build step required.

For local development with a simple server:
```bash
npx serve .
# or
python3 -m http.server 8000
```

## Adding Real Images

See `images/README.md` for full instructions on replacing placeholder images.

All image `src` attributes point to `/images/placeholder.jpg`. Replace with real images and update `alt` text accordingly.

## Connecting the Contact Form

The contact form at `contact.html` currently uses `action="#"` with JavaScript preventing default submission and showing a thank-you message.

To connect to a real form backend:

### Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
```
Then add `<input type="hidden" name="form-name" value="contact">` inside the form.

## Design System

| Token               | Value     |
|---------------------|-----------|
| `--color-accent`    | `#c9a84c` |
| `--color-black`     | `#0a0a0a` |
| `--color-white`     | `#ffffff` |
| `--color-mid`       | `#1e1e1e` |
| `--color-grey-light`| `#f5f5f5` |
| `--color-text`      | `#1a1a1a` |

Fonts: **Playfair Display** (headings) + **Inter** (body/UI) — loaded via Google Fonts.

## Pages

| Page                           | Description                          |
|--------------------------------|--------------------------------------|
| `index.html`                   | Homepage with hero, services overview, about teaser, logos, featured work, CTA |
| `gallery.html`                 | Masonry gallery with JS filter and lightbox |
| `contact.html`                 | Two-column contact page with form |
| `services/professional.html`   | Professional Services detail page |
| `services/charity.html`        | Charity detail page |
| `services/events.html`         | Events detail page |
| `services/hospitality.html`    | Hospitality detail page |
| `services/food-restaurant.html`| Food & Restaurant detail page |

## Features

- Fixed nav with scroll-triggered solid background
- Mobile hamburger menu with slide-down drawer
- Services dropdown (hover desktop / click mobile)
- Scroll-reveal animations via IntersectionObserver
- Gallery category filter (vanilla JS)
- Lightbox with keyboard navigation (Escape, arrow keys)
- Contact form with inline thank-you confirmation
- Fully functional with zero images present
