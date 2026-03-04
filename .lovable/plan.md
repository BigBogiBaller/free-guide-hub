

# Brevo Newsletter-Integration

Listen-ID: **3** -- notiert.

## Was wird gebaut

### 1. Brevo API-Key als Secret speichern
- Den API-Key `xkeysib-2a10b9d3e515...` sicher als `BREVO_API_KEY` Secret speichern (wird über das Secret-Tool angefordert)

### 2. Edge Function: `subscribe-newsletter`
Neue Datei: `supabase/functions/subscribe-newsletter/index.ts`

- Empfängt `firstName` und `email` per POST
- Validiert Eingaben (E-Mail-Format, Länge)
- Erstellt Kontakt in Brevo via `POST https://api.brevo.com/v3/contacts`
  - Setzt `FIRSTNAME` Attribut
  - Ordnet Kontakt der **Liste 3** zu
  - Aktiviert Double-Opt-In (`DOI`) via Brevo Template
- CORS-Headers für Browser-Zugriff
- Fehlerbehandlung (doppelter Kontakt, ungültige E-Mail etc.)

Config in `supabase/config.toml`:
```toml
[functions.subscribe-newsletter]
verify_jwt = false
```

### 3. Frontend: `NewsletterSection.tsx` anpassen
- Die simulierte `setTimeout`-Logik durch einen echten Aufruf der Edge Function ersetzen
- Fehlerbehandlung mit Toast-Meldungen bei API-Fehlern
- Erfolgsanzeige bleibt wie bisher

## Ablauf
```text
Formular → Edge Function → Brevo API (Kontakt + Liste 3)
                              ↓
                   Brevo sendet Double-Opt-In Mail
                              ↓
                   Nutzer bestätigt → Automation startet
                              ↓
                   E-Mail-Sequenz läuft automatisch
```

## Was du in Brevo noch einrichten musst
- **Automation**: Trigger = "Kontakt wird zur Liste 3 hinzugefügt" → E-Mail mit Checkliste senden → Follow-up E-Mails
- **Double-Opt-In Template** konfigurieren (unter Kontakte → Einstellungen)

