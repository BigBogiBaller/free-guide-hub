

# Landing Page für Elisabeth Brommer-Kern – Aktualisierter Plan

## Überblick
Eine professionelle, warme Landing Page inspiriert von den Referenz-Designs (Bild 2, 4, 5 – modernes Coaching-Layout mit klaren Sektionen, großen Headlines, Testimonials-Bereich und prominenten CTAs). Integration von Brevo für Newsletter und einem Zeeg.me Call-Booking-Button.

## Design-Inspiration & Stil
Orientierung an den bevorzugten Designs (Bilder 2, 4, 5):
- **Große, mutige Headlines** mit warmem, einladendem Ton
- **Sektionen klar voneinander getrennt** mit abwechselnden Hintergründen (Cream/Weiß/Dunkelgrün)
- **Runde Bildrahmen** für Elisabeth's Foto (Platzhalter)
- **Prominente CTA-Buttons** in Blau (#265EA2) und Dunkelgrün (#295C38)
- Farbpalette: Dunkelgrün, Schilfgrün, Anthrazit, Cream, Blau – gemäß Branding

## Seitenstruktur

### 1. Hero-Bereich
- Logo oben
- Große Headline: „Professionell Online Wirken" (Platzhalter)
- Kurzer Untertitel über den Mehrwert
- Zwei CTAs nebeneinander: **„Gratis Guide sichern"** + **„Kostenloses Gespräch buchen"** (→ zeeg.me Link)
- Platzhalter für ein großes Foto von Elisabeth

### 2. Vorteile / Was du bekommst
- 3 Benefit-Karten mit Icons (ähnlich Bild 4/5 Stil)
- z.B. Sicherheit in Videocalls, Wirkungsvolle Kommunikation, Praxisnahe Tipps
- Platzhalter-Texte

### 3. Über Elisabeth
- Foto-Platzhalter + Kurztext über ihre Expertise
- „Sustainable · Joyful · Professional" Tagline
- Zahlen/Achievements wenn vorhanden (Platzhalter)

### 4. Newsletter & Guide Opt-in
- Eingabefelder: Vorname, E-Mail
- Datenschutz-Checkbox
- „Jetzt Guide sichern"-Button
- Brevo-Integration via Supabase Edge Function

### 5. Call buchen (CTA-Sektion)
- Auffällige Sektion mit dunklem/grünem Hintergrund
- Headline: „Lass uns sprechen" o.ä.
- Button → öffnet zeeg.me Booking-Link (extern)

### 6. Footer
- SJP Development GmbH, Kreuzlingen
- Impressum & Datenschutz Links (Platzhalter)
- Copyright

## Technische Integration
- **Brevo**: Supabase Edge Function sendet Formulardaten an Brevo API (Kontakt erstellen + Liste zuordnen + Double-Opt-In). API-Key wird als Secret gespeichert, sobald Elisabeth ihr Brevo-Konto hat.
- **Zeeg.me**: Einfacher externer Link-Button, der die Booking-Seite öffnet
- **Responsive**: Mobile-optimiert

## Noch offen (von Elisabeth zu liefern)
- Name des Guides / Leadmagnets
- Foto von Elisabeth
- Finale Texte
- Brevo API-Key
- Zeeg.me Booking-URL
- Impressum & Datenschutz

