import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../global/authContext/authContext";

function SignInWithGG() {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                let data = await doSignInWithGoogle();
                localStorage.setItem("googleUser",JSON.stringify(data.user))
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    if (userLoggedIn) {
        return <Navigate to="/home" replace />;
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit" disabled={isSigningIn}>
                    {isSigningIn ? "Signing In..." : "Sign In"}
                </button>
            </form>
            <p>{errorMessage}</p>
            <button onClick={onGoogleSignIn} disabled={isSigningIn}>
                {isSigningIn ? "Signing In with Google..." : "Sign In with Google"}
            </button>
            <br />
        </div>
    );
}

export default SignInWithGG;
