import React, { useState } from 'react';
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { doSignInWithGoogle, doSendEmailVerification, doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../global/authContext/authContext';

const SignInForm = ({ handleClickSnackbar }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate()

    const { setUserLoggedInWithGoogle, setUserLoggedInWithEmail } = useAuth()
    

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const onSignUp = async (event) => {
        event.preventDefault();
        if (name.trim() && password.trim()) {
            try {
                const user_info = {
                    id: Math.floor(Math.random() * 100) + 1,
                    displayName: name,
                    email: email,
                    password: password,
                };
                setUserLoggedInWithEmail(true)
                localStorage.setItem("user_info", JSON.stringify(user_info));
                localStorage.setItem("logInEmail", JSON.stringify(true));
                navigate("/home")
            } catch (error) {
                handleClickSnackbar("An error occurred during sign-up.", "error");
                console.error(error);
            }
        } else {
            handleClickSnackbar("Please enter both name and password.", "error");
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const result = await doSignInWithGoogle();
                const storeUser = { ...result.user, id: Math.floor(Math.random() * 100) + 1 };
                setUserLoggedInWithGoogle(true)
                localStorage.setItem("googleUser", JSON.stringify(storeUser));
                localStorage.setItem("logInGoogle", JSON.stringify(true));

                await doSendEmailVerification();
                handleClickSnackbar("Verification email sent. Please check your inbox.", "info");
            } catch (error) {
                handleClickSnackbar("An error occurred during Google sign-in.", "error");
                console.error(error);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="form-container sign-up">
            <form onSubmit={onSignUp}>
                <Typography variant='h3' sx={{ color: "#000", fontWeight: "700", letterSpacing: "1px", textAlign: "center", fontSize: { xs: "25px", md: "30px" } }} gutterBottom>
                    Create Account
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    size="small"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Email"
                    size="small"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl fullWidth variant="outlined" size="normal">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        size="small"
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
                <Typography variant='body2' component={RouterLink} to="/home" sx={{
                    color: "blue !important", fontStyle: "italic !important",
                    cursor: 'pointer', my: 1, textDecorationLine: "underline !important"
                }} >Continue as guest</Typography>
                <button type="submit" className='button'>Sign Up</button>
                <button onClick={onGoogleSignIn} className='button'>Sign Up With Google</button>
            </form>
        </div>
    );
};

export default SignInForm;