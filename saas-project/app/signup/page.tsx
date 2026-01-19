"use client"; // Required for state and event handling

import Link from "next/link";
import { useState } from "react";
import { signup } from "./actions"; // Your Server Action file

export default function Signup() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSignup(formData: FormData) {
        setError(null);
        setLoading(true);

        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        // Confirm Password Logic: Match check before server call
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            await signup(formData);
        } catch (err: any) {
            setError(err.message || "Failed to create account");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
            <form action={handleSignup} className="max-w-md w-full bg-white p-8 rounded-lg shadow">
                <h2 className="text-4xl font-semibold text-slate-900 mb-6 text-center">
                    Signup
                </h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg text-center font-medium">
                        {error}
                    </div>
                )}

                <input
                    name="username" 
                    type="text"
                    placeholder="username"
                    required
                    className="mb-4 w-full px-4 py-2 text-slate-500 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                    required
                    className="mb-4 w-full px-4 py-2 text-slate-500 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input 
                    name="password" 
                    type="password"
                    placeholder="Password"
                    required
                    className=" mb-6 w-full px-4 py-2 text-slate-500 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />

                 <input 
                    name="confirmPassword" 
                    type="password"
                    placeholder="Confirm Password"
                    required
                    className=" mb-6 w-full px-4 py-2  text-slate-500 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                 />

                <button 
                    disabled={loading}
                    className=" mb-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                >
                    {loading ? "Creating Account..." : "Signup"}
                 </button>

                <Link href="/login">
                    <p className="text-sm text-center text-slate-500 hover:underline mb-6 cursor-pointer">
                        Already have an account? Login
                    </p>
                </Link>    

                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-slate-300"></div>
                    <span className="flex-shrink mx-4 text-slate-500 text-sm">Or signup with</span>
                    <div className="flex-grow border-t border-slate-300"></div>
                </div>

                <button type="button" className="mb-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors">
                    Continue with GitHub
                </button>

                <button type="button" className="mb-4 w-full bg-white text-slate-700 border border-slate-300 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors">
                    Continue with Google
                </button>
            </form>
        </main>
    );
}
