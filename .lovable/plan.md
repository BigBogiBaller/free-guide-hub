

## Problem

Die Brevo-Attribute heißen in deinem Konto `VORNAME`, `NACHNAME` und `SMS` — aber der Code sendet sie aktuell als `FIRSTNAME` und `LASTNAME`. Deshalb werden sie von Brevo ignoriert und nicht gespeichert.

Zusätzlich wird noch kein Telefonnummer-Feld abgefragt.

## Änderungen

### 1. Edge Function: Attribut-Namen korrigieren + Telefonnummer hinzufügen
**Datei:** `supabase/functions/subscribe-newsletter/index.ts`
- `phone` aus dem Request-Body lesen (optional, nicht required)
- Attribut-Mapping ändern: `{ VORNAME: firstName.trim(), NACHNAME: lastName.trim(), SMS: phone?.trim() || undefined }`

### 2. HeroSection.tsx: Telefonnummer-Feld hinzufügen
- Neues State `phone` + Input-Feld für Telefonnummer (optional)
- Im Body mitsenden: `{ firstName, lastName, phone, email }`

### 3. NewsletterSection.tsx: Telefonnummer-Feld hinzufügen
- Neues State `phone` + Input-Feld für Telefonnummer (optional)
- Im Body mitsenden: `{ firstName, lastName, phone, email }`

### Zusammenfassung
| Vorher | Nachher |
|---|---|
| `FIRSTNAME` | `VORNAME` |
| `LASTNAME` | `NACHNAME` |
| — | `SMS` (Telefonnummer, optional) |

