export default function WaitlistPage() {
    return (
        <main className="">
            <div className=""></div>
                <h2 className="">Join our Waitlist</h2>
                <p className="">Get early access to our platform</p>
                <form className="">
                    <input
                    type="name"
                    required
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded px-4 py-2 mr-2"
                    />
                    <input 
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded px-4 py-2 mr-2"
                    />
                    <input
                    type="text"
                    placeholder="Your Company (optional)"
                    className="border border-gray-300 rounded px-4 py-2 mr-2"
                    />
                    <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Join Waitlist
                    </button>
                </form>
        </main>
    );
}