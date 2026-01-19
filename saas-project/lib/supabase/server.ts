"use server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabassServer() {
  // NEXT.JS 15/16 FIX: cookies() must be awaited
  const cookieStore = await cookies(); 

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            // Server Actions can write cookies, but wrapping in try/catch
            // to prevent potential runtime errors in environments
            // where cookies are immutable.
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
          }
        },
      },
    }
  );
}
