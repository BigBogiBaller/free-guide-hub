

## Problem

An **3 Stellen** fehlt der Nachname (`lastName`):

1. **HeroSection.tsx, Zeile 56:** `body: JSON.stringify({ firstName, email })` -- `lastName` fehlt
2. **NewsletterSection.tsx, Zeile 42:** `body: { firstName, email }` -- `lastName` fehlt
3. **Edge Function, Zeile 49:** Brevo-Attribute nur `{ FIRSTNAME }` -- `LASTNAME` fehlt, und `lastName` wird nicht aus dem Request gelesen

## Änderungen

### 1. Edge Function (`supabase/functions/subscribe-newsletter/index.ts`)
- `lastName` aus dem Request-Body lesen und validieren (gleiche Regeln wie `firstName`)
- Brevo-Attribute erweitern: `attributes: { FIRSTNAME: firstName.trim(), LASTNAME: lastName.trim() }`

### 2. HeroSection.tsx (Zeile 56)
- Body ändern zu: `{ firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim() }`

### 3. NewsletterSection.tsx (Zeile 42)
- Body ändern zu: `{ firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim() }`

Danach werden Vor- und Nachname korrekt als Kontakt-Attribute in Brevo gespeichert.

