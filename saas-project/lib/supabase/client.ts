import { createClient } from "@supabase/supabase-js";

// This pulls the values from your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// This check prevents the app from crashing with a "required" error
// Instead, it gives you a helpful message if the variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        "Missing Supabase Environment Variables. " +
        "Please check your .env.local file for NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
