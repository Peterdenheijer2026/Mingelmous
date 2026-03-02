"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(
    errorParam === "auth"
      ? { type: "err", text: "Inloggen mislukt. Probeer opnieuw." }
      : errorParam === "no_access"
        ? { type: "err", text: "Je hebt nog geen toegang. De beheerder moet je eerst minstens één plein toewijzen." }
        : null
  );

  let supabase: ReturnType<typeof createClient>;
  try {
    supabase = createClient();
  } catch (err) {
    return (
      <div className="beheer-login">
        <div className="beheer-login__card">
          <h1>Beheerderslogin</h1>
          <p className="beheer-login__msg beheer-login__msg--err">
            Supabase is nog niet geconfigureerd. Kopieer .env.example naar .env.local en vul NEXT_PUBLIC_SUPABASE_URL en NEXT_PUBLIC_SUPABASE_ANON_KEY in. Zie KOPPELING-STAPPEN.md.
          </p>
          <p className="beheer-login__back">
            <Link href="/">← Terug naar de site</Link>
          </p>
        </div>
      </div>
    );
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      if (mode === "up") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${location.origin}/auth/callback?next=/beheer` },
        });
        if (error) throw error;
        setMessage({ type: "ok", text: "Controleer je e-mail voor de bevestigingslink." });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/beheer");
        router.refresh();
      }
    } catch (err: unknown) {
      setMessage({
        type: "err",
        text: err instanceof Error ? err.message : "Er is iets misgegaan.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="beheer-login">
      <div className="beheer-login__card">
        <h1>Beheerderslogin</h1>
        <p className="beheer-login__sub">
          Log in of maak een account om een plein te beheren. De hoofdadministrator kan beheerrechten per plein toewijzen.
        </p>

        {message && (
          <p className={`beheer-login__msg beheer-login__msg--${message.type}`}>
            {message.text}
          </p>
        )}

        <form onSubmit={handleEmailSubmit} className="beheer-login__form">
          <div className="beheer-login__tabs">
            <button
              type="button"
              className={mode === "in" ? "is-active" : ""}
              onClick={() => setMode("in")}
            >
              Inloggen
            </button>
            <button
              type="button"
              className={mode === "up" ? "is-active" : ""}
              onClick={() => setMode("up")}
            >
              Account aanmaken
            </button>
          </div>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="bijv. naam@voorbeeld.nl"
            />
          </label>
          <label>
            Wachtwoord
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={mode === "up"}
              minLength={mode === "up" ? 6 : undefined}
              autoComplete={mode === "up" ? "new-password" : "current-password"}
              placeholder={mode === "up" ? "min. 6 tekens" : ""}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Even geduld…" : mode === "up" ? "Account aanmaken" : "Inloggen"}
          </button>
          {mode === "in" && (
            <p className="beheer-login__forgot">
              <Link href="/beheer/wachtwoord-vergeten">Wachtwoord vergeten?</Link>
            </p>
          )}
        </form>
      </div>

      <p className="beheer-login__back">
        <Link href="/">← Terug naar de site</Link>
      </p>
    </div>
  );
}
