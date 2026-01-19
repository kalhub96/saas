"use server";

import { createSupabassServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = await createSupabassServer(); // Fix for Next.js 16

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const username = formData.get("username") as string;

  // Server-side safety check
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  // Proceed with Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  // Link to your SQL 'profiles' table
  if (data.user) {
    await supabase.from("profiles").insert([
      { id: data.user.id, email, username }
    ]);
  }

  return redirect("/dashboard");
}
