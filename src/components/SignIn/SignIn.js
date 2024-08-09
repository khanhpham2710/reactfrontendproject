import { useState } from "react";
import { Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../global/authContext/authContext";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Stack, Typography, Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

function SignInWithEmail() {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(prev => !prev);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message || "An error occurred during sign-in.");
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
                const result = await doSignInWithGoogle();
                localStorage.setItem("googleUser", JSON.stringify(result.user));
            } catch (error) {
                setErrorMessage(error.message || "An error occurred during Google sign-in.");
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    if (userLoggedIn) {
        return <Navigate to="/home" replace />;
    }

    return (
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} backgroundColor="white" height="100%">
            <Button
                onClick={onSubmit}
                sx={{ color: "#fff", fontWeight: "800", fontSize: "16px", border: "3px solid #ccc", mt: 2, borderRadius: "50px", width: "60%", backgroundColor: "red" }}
                disabled={isSigningIn}
            >
                Sign In
            </Button>
            <Button
                onClick={onGoogleSignIn}
                sx={{ color: "#fff", fontWeight: "800", fontSize: "16px", border: "3px solid #ccc", mt: 2, borderRadius: "40px", width: "60%", backgroundColor: "red" }}
                disabled={isSigningIn}
            >
                Sign In With<GoogleIcon fontSize="small" ml={2} />
            </Button>
        </Stack>
    );
}

export default SignInWithEmail;
