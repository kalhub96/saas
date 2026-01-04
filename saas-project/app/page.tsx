export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">

      <section className="max-w-2xl text-center">
        <h1 className="text-4xl font-semibold text-slate-900">Build, Manage, and scale your workflow in one platform</h1>

        <p className="mt-4 text-slate-600">All in one SaaS Designed for modern teams to move fast.</p>

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
    </main>
  );
}