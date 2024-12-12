import React, { useState } from 'react';
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { doSignInWithGoogle, doCreateUserWithEmailAndPassword, doSendEmailVerification } from '../../firebase/auth';
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../global/authContext/authContext';
import { updateProfile } from 'firebase/auth'; 

const SignInForm = ({ handleClickSnackbar }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate();

    const { setCurrentUser } = useAuth()

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const onSignUp = async (event) => {
        event.preventDefault();
        if (name.trim() && password.trim()) {
            try {
                const userCredential = await doCreateUserWithEmailAndPassword(email, password);
                await doSendEmailVerification();
                handleClickSnackbar("Verification email sent. Please check your inbox.", "info");

                const user = userCredential.user;

                await updateProfile(user, { displayName: name });
                setCurrentUser((prev) => ({ ...prev, displayName: name }));

                navigate("/home");
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
                await doSignInWithGoogle();

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
