const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone } = await req.json();

    // Validate inputs
    if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0 || firstName.length > 100) {
      return new Response(JSON.stringify({ error: "Ungültiger Vorname." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim().length === 0 || lastName.length > 100) {
      return new Response(JSON.stringify({ error: "Ungültiger Nachname." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Ungültige E-Mail-Adresse." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate phone (optional)
    if (phone && (typeof phone !== "string" || phone.length > 20)) {
      return new Response(JSON.stringify({ error: "Ungültige Telefonnummer." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY not configured");
      return new Response(JSON.stringify({ error: "Server-Konfigurationsfehler." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const attributes: Record<string, string> = {
      VORNAME: firstName.trim(),
      NACHNAME: lastName.trim(),
    };
    if (phone?.trim()) {
      attributes.SMS = phone.trim();
    }

    const requestBody = {
      email: email.trim().toLowerCase(),
      attributes,
      listIds: [3],
      updateEnabled: true,
    };
    console.log("Sending to Brevo:", JSON.stringify(requestBody));

    const sendToBrevo = async (body: Record<string, unknown>) => {
      console.log("Sending to Brevo:", JSON.stringify(body));
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(body),
      });
      const text = await res.text();
      console.log("Brevo response status:", res.status, "body:", text);
      return { res, text };
    };

    let { res: brevoResponse, text: responseText } = await sendToBrevo(requestBody);

    // If Brevo rejects the phone number, retry without SMS
    if (!brevoResponse.ok) {
      let errorData: Record<string, unknown> = {};
      try { errorData = JSON.parse(responseText); } catch { /* ignore */ }

      if (
        String(errorData?.message).toLowerCase().includes("invalid phone") &&
        requestBody.attributes.SMS
      ) {
        console.log("Retrying without SMS attribute due to invalid phone number");
        const { SMS: _, ...cleanAttributes } = requestBody.attributes;
        const retryBody = { ...requestBody, attributes: cleanAttributes };
        ({ res: brevoResponse, text: responseText } = await sendToBrevo(retryBody));
      }
    }

    if (!brevoResponse.ok) {
      let errorData: Record<string, unknown> = {};
      try { errorData = JSON.parse(responseText); } catch { /* ignore */ }
      console.error("Brevo API error:", brevoResponse.status, errorData);

      // Duplicate contact is still a success for the user
      if (errorData?.code === "duplicate_parameter") {
        return new Response(JSON.stringify({ success: true, message: "already_subscribed" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ error: "Anmeldung fehlgeschlagen. Bitte versuche es später erneut." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Ein unerwarteter Fehler ist aufgetreten." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
