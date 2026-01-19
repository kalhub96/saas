import { createSupabassServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function login(identifier: string, password: string) {
  const supabase = await createSupabassServer(); 

  let email = identifier;

  // If the user didn't type an '@', assume it's a username
  if (!identifier.includes("@")) {
    const { data, error } = await supabase
      .from("profiles")
      .select("email")
      .eq("username", identifier)
      .single();

    if (error || !data) throw new Error("User not found");
    email = data.email; // We found the email linked to that username!
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
}

