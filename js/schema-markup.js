/*
  Demo schema markup for Sterling & Associates.
  IMPORTANT: This is a fictional portfolio concept. Replace all demo details with
  verified business information before deploying for a real law firm.
  Do not publish invented addresses, coordinates, opening hours, reviews, or credentials.
*/
const legalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Sterling & Associates",
  "description": "Fictional law firm website concept for portfolio demonstration.",
  "url": "https://example.com/",
  "telephone": "+1-000-555-0148",
  "email": "hello@sterling-demo.example",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Replace with verified service area"
  },
  "knowsAbout": [
    "Corporate and business law",
    "Civil litigation",
    "Family law",
    "Real estate law",
    "Estate planning",
    "Criminal defense"
  ]
};

// This schema is intentionally marked as demo data and uses a reserved example domain.
// Replace it with verified, accurate details and validate before using on a live business site.
const schemaScript = document.createElement("script");
schemaScript.type = "application/ld+json";
schemaScript.textContent = JSON.stringify(legalBusinessSchema);
document.head.appendChild(schemaScript);
