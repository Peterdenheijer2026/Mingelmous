# Koppeling: GitHub → Vercel → Supabase (zelfde structuur als buidlingsite)

Mingelmous heeft **dezelfde structuur** als de buidlingsite: Next.js, alle koppelingen, localhost, beheer en pleinen.

---

## Lokaal starten (localhost)

1. **Dubbelklik op `START-SITE.bat`** in de map `C:\xampp\htdocs\Mingelmous`.
2. Het script installeert automatisch de pakketten (npm install) en start de dev-server.
3. **Open in je browser: http://localhost:3000**
4. Laat het commandovenster open zolang je de site wilt gebruiken.

Zelfde werkwijze als bij de buidlingsite.

---

## Overzicht koppelingen

| Wat              | URL / link |
|------------------|------------|
| Home             | `/` of `#home` |
| Info             | `#info` |
| Plattegrond      | `#plattegrond` |
| Contact          | `#contact` |
| Algemene voorwaarden | `/algemene-voorwaarden` |
| Privacy          | `/privacy` |
| Beheerders login | `/beheer/login` |
| Pleinen (dropdown) | `/plein/plein` (pas pleinen aan in lib/pleinen.ts) |

Footer: Home, Info, Plattegrond, Contact + Algemene voorwaarden, Privacy, Beheerders login.

---

## Supabase (voor beheer en plein-content)

Voor **beheer** (inloggen, pleinen bewerken) en **plein-content** uit de database heb je Supabase nodig:

1. Kopieer **.env.example** naar **.env.local**.
2. Maak een project op **https://supabase.com** (zie buidlingsite of onderstaande stappen).
3. Vul in .env.local in:
   - `NEXT_PUBLIC_SUPABASE_URL` = je Project URL (Supabase → Project Settings → API)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = je anon public key

Zonder .env.local draait de site wel (home, legal pages, pleinen-pagina’s tonen “Nog geen content”), maar beheer en login werken niet. Na het invullen van .env.local kun je inloggen op `/beheer/login` (hoofdbeheerder: e-mail **admin@mingelmous.nl** na eerste accountaanmaak in Supabase).

---

## GitHub + Vercel (deploy)

1. **GitHub:** Maak een nieuw repository (bijv. `mingelmous`).
2. **Lokaal** (in `C:\xampp\htdocs\Mingelmous`):
   ```powershell
   git init
   git add .
   git commit -m "Eerste versie Mingelmous Next.js"
   git branch -M main
   git remote add origin https://github.com/JOUW-NAAM/mingelmous.git
   git push -u origin main
   ```
3. **Vercel:** vercel.com → Add New → Project → Import je repository → Deploy (Framework: Next.js).
4. **Supabase in Vercel:** Settings → Environment Variables → voeg `NEXT_PUBLIC_SUPABASE_URL` en `NEXT_PUBLIC_SUPABASE_ANON_KEY` toe → Redeploy.

Daarna: elke `git push` naar main zorgt voor een automatische deploy op Vercel.

---

## Samenvatting

- **Structuur:** Zelfde als buidlingsite (Next.js, app/, lib/, beheer, pleinen, middleware, Supabase).
- **Localhost:** `START-SITE.bat` → http://localhost:3000.
- **Koppelingen:** Zelfde navigatie en footer-links.
- **Supabase:** .env.local invullen voor beheer en plein-content; daarna zelfde koppeling (GitHub → Vercel → Supabase) als bij de buidlingsite.
