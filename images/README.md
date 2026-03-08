# Images

This directory holds all photography and video thumbnail assets for the VikVisuals website.

## Adding Real Images

Replace the placeholder references in the HTML with real image paths once photos are available.

### Portrait / About
- `vik-portrait.jpg` — Vik's portrait used in the homepage about teaser (recommended: ~800×1000px)

### General Placeholder
All `<img src="/images/placeholder.jpg">` references should be replaced with real images. The recommended approach is:

1. Name each image descriptively, e.g. `sedulo-conference-2024-01.jpg`
2. Update the `src` attribute in the relevant HTML file
3. Update the `alt` attribute to accurately describe the image
4. Optimise images before uploading (WebP recommended, max 200KB for gallery thumbnails)

### Recommended Image Sizes
| Use               | Recommended Size     | Format  |
|-------------------|----------------------|---------|
| Hero backgrounds  | 2000×1200px+         | JPG/WebP|
| Gallery thumbnails| 800×600px            | JPG/WebP|
| Intro block images| 900×675px            | JPG/WebP|
| Video thumbnails  | 1280×720px           | JPG/WebP|
| Portrait          | 800×1000px           | JPG/WebP|

### Gallery data-category attributes
When adding images to `gallery.html`, use these `data-category` values for the filter to work:
- `professional` — Professional services work
- `charity` — Charity and purpose-led organisations
- `events` — Corporate events, galas, conferences
- `hospitality` — Hotels, venues, hospitality brands
- `food` — Food and restaurant photography

## CSS Fallback
All `<img>` elements use `background-color: #2a2a2a` as a CSS fallback via the `.img-placeholder` class while real images are not present. The site looks and functions correctly without any images loaded.
