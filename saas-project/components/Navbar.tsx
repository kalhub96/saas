import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="text-slate-900 bg-slate-50 flex justify-between items-center px-6 py-4 ">
            <span className="font-semibold">SaaS Platform</span>
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
                <Link href="/about">About</Link>
                <Link href="/waitlist"><button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Join Waitlist</button></Link>
                
            </div>
        </nav>
    );
}