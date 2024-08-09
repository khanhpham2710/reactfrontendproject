import React from 'react';
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { doSignInWithGoogle, doSendEmailVerification, doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../../firebase/auth';

const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isSigningIn, setIsSigningIn] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSignUp = async () => {
        if (name.trim() && password.trim()) {
            const user_info = {
                id: Math.floor(Math.random() * 100) + 1,
                name: name,
                email: email,
                password: password,
            };
            localStorage.setItem("user_info", JSON.stringify(user_info));
            localStorage.setItem("logOut", JSON.stringify(false));
            setIsSigningIn(true);
        } else {
            alert("Please enter both name and password.");
        }
    };

    

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const result = await doSignInWithGoogle();
                const storeUser = {...result.user,id:Math.floor(Math.random() * 100) + 1}
                localStorage.setItem("googleUser", JSON.stringify(storeUser));
                localStorage.setItem("logOut", JSON.stringify(false));

                // Send email verification after Google sign-in if necessary
                await doSendEmailVerification();
                alert("Verification email sent. Please check your inbox.");
            } catch (error) {
                alert("An error occurred during Google sign-in.");
                console.log(error);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="form-container sign-up">
            <form action="">
                <Typography variant='h3' sx={{ color: "#000", fontWeight: "700", letterSpacing: "1px", fontSize: "30px" }}>
                    Create Account
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    size="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Email"
                    size="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl fullWidth variant="outlined" size="normal">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <button onClick={onSignUp} className='button'>
                    Sign Up
                </button>
                {/* <button onClick={onSignIn} className='button'>
                    Sign In
                </button> */}
                <button onClick={onGoogleSignIn} className='button'>
                    Sign Up With Google
                </button>
                {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            </form>
        </div>
    );
};

export default SignUp;
