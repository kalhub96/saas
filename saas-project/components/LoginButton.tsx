"use client"    

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    
    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) 
            setErrorMsg(error.message);
        else 
            setErrorMsg("Login successful!");
        };
        return (
        <div>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
            {errorMsg && <p>{errorMsg}</p>}
        </div>
        );
}
   