"use client"; 

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";


console.log("Supabase URL Check:", process.env.NEXT_PUBLIC_SUPABASE_URL);

export default function Login() {
    const router = useRouter();




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    // ✅ successful login
    router.push("/main");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
      <form
        onSubmit={signIn}
        className="max-w-md w-full bg-white p-8 rounded-lg shadow"
      >
        <h2 className="text-4xl font-semibold text-slate-900 mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 w-full px-4 py-2 text-slate-500 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-6 w-full px-4 py-2 text-slate-500 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errorMsg && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          className="mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>

        <Link href="/reset-password">
          <p className="text-sm text-center text-blue-500 hover:underline mb-6 cursor-pointer">
            Forgot Password?
          </p>
        </Link>

        <Link href="/signup">
          <p className="text-sm text-center text-slate-500 hover:underline mb-6 cursor-pointer">
            Don't have an account? Register
          </p>
        </Link>

        <p className="text-center text-slate-500 mb-4">Or login with</p>
        <hr className="my-6 border-slate-300" />

        <button type="button" className="mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
          Continue with Twitter
        </button>

        <button type="button" className="mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
          Continue with Facebook
        </button>

        <button type="button" className="mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
          Continue with GitHub
        </button>

        <button type="button" className="mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
          Continue with Google
        </button>
      </form>
    </main>
  );
}