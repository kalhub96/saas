import Link from "next/link";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 ">
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl font-semibold text-slate-900">Build, Manage, and scale your workflow in one platform</h1>

        <p className="mt-4 text-slate-600">All in one SaaS Designed for modern teams to move fast.</p>

          <Link href="/waitlist">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Join the Waitlist
          </button>
        </Link>
          
        <p className="mt-2 text-sm text-slate-500">Get early access to our platform</p>
      </section>
      <section>
        <h1 className="text-2xl font-semibold mt-16 text-slate-900 items-center justify-center">Features Coming Soon</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Feature One</h2>
            <p className="text-slate-900">Description of feature one that highlights its benefits.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Feature Two</h2>
            <p className="text-slate-900">Description of feature two that highlights its benefits.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Feature Three</h2>
            <p className="text-slate-900">Description of feature three that highlights its benefits.</p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-semibold mt-16 text-slate-900 items-center justify-center">We bring everything together in one intuitive platform</h1>
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Smart Dashbords</h2>
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Real-Time Collaboration</h2>
          </div>
          <div className="flex-1 p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">No Visiblity</h2>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-semibold mt-16 text-slate-900 items-center justify-center">How It Works</h1>
        <div className="mt-8 space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Step 1: Sign Up</h2>
            <p className="text-slate-900">Create an account to get started with our platform.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Step 2: Set Up Your Workspace</h2>
            <p className="text-slate-900">Customize your workspace to fit your team's needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-slate-900 text-xl font-semibold mb-2">Step 3: Start Collaborating</h2>
            <p className="text-slate-900">Invite team members and start working together seamlessly.</p>
          </div>
        </div>
      </section>
      <section className="mt-16 mb-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Get early access before public launch</h2>
        <form
        action="/api/waitlist"
        method="POST"
        className="mt-8 flex gap-3 justify-center"
        > 
          <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className=""
          />
          <button 
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Join Waitlist
          </button>
        </form>
      </section>
      <footer className="w-full border-t border-slate-200 py-6 mt-16 text-center text-slate-500">
        &copy; {new Date().getFullYear()} SaaS Platform. All rights reserved.
      </footer>
    </main>
  );
}