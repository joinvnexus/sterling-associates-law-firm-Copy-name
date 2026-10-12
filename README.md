# Sterling & Associates — Luxury Editorial Law Firm Website

A multi-page, responsive law-firm website concept refreshed with a more distinctive luxury-editorial design system. Built with HTML, custom CSS, Tailwind CDN utilities, and vanilla JavaScript.

## Pages
- `index.html` — Home, practice index, firm approach, concept attorney profiles, process, insights, consultation form
- `pages/practice-areas.html` — Practice area overview
- `pages/attorneys.html` — Concept attorney profiles
- `pages/insights.html` — Editorial insights listing
- `pages/contact.html` — Contact and demo consultation form

## Assets and code
- `css/styles.css` — Base styles plus luxury editorial visual layer, responsive breakpoints, hover states, and reduced-motion support
- `js/main.js` — Responsive navigation, scroll progress, reveal animations, back-to-top, and demo form handling
- `js/schema-markup.js` — Example LegalService schema markup; replace all example data before a real launch
- `assets/README.md` — Asset guidance

## Run locally
1. Extract the ZIP.
2. Open the `sterling-associates-law-firm` folder in VS Code.
3. Start `index.html` with the Live Server extension, or serve the folder using any local static web server.

The project uses Google Fonts, Tailwind CSS CDN, and remote Unsplash image URLs, so an internet connection is needed for those resources. No build step is required.

## Demo / production notes
- This is a self-initiated portfolio concept, not a representation of a real law firm or a client engagement.
- Attorney names, portraits, testimonials, contact information, and firm details are illustrative. Replace them with authorized, accurate details before publication.
- Contact forms are front-end demos only; they do not send or store submissions. Connect a secure form endpoint before production use.
- Schema markup is illustrative. Validate and update it with accurate firm information before deployment.
- Legal advertising and professional-conduct rules vary by jurisdiction. Review all copy and disclosures before publishing a real legal-services website.
- Motion respects `prefers-reduced-motion`; verify keyboard navigation, contrast, and responsive behavior before launch.
