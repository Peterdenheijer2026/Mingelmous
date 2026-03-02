import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    await supabase.auth.signOut();
  } catch {
    // Supabase niet geconfigureerd
  }
  const url = new URL(request.url);
  return NextResponse.redirect(`${url.origin}/beheer/login`, 302);
}
