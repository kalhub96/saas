export default function Login() {
    return(
        <main>
            <form>
                <h2>
                    Login
                </h2>
                <input 
                type="email" 
                placeholder="Email"
                className=""
                />

                <input 
                type="password"
                placeholder="Password"
                className=""
                 />
                 <button>
                    Login
                 </button>
            </form>
        </main>
    );
}