import { useAuth } from "../hooks/useAuth";

function Login() {
    const {login} = useAuth();

    const handleLogin = () => {
        const token = login('hello');
    }
    return (
        <>
            <div className="login-content">
                <h1>Login</h1>
                <p>Login form will go here.</p>
                <button onClick={handleLogin}>
                Simulate Login
                </button>
            </div>
        </>
    );
}

export default Login;