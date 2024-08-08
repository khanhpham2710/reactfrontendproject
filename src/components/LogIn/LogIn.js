import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../global/authContext/authContext";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Stack, Typography, Button } from "@mui/material";

function Login() {
    const { userLoggedIn, currentUser, loading } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);

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
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    // Uncomment the following line if you want to handle redirection when the user is logged in.
    // if (userLoggedIn) {
    //     return <Navigate to="/home" replace />;
    // }

    return (
        <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2} backgroundColor="green"
            height="100%">
            <Typography variant="h2" color="#000" fontWeight="800" textAlign="center" gutterBottom>Log In</Typography>
            <TextField
                sx={{
                    m: 1,
                    width: '80%',
                    '& input': {
                        color: 'black',
                    },
                    '& label': {
                        color: 'black',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'black',
                        },
                        '&:hover fieldset': {
                            borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        },
                    },
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl
                sx={{
                    m: 1,
                    width: '80%',
                    '& label': {
                        color: 'black',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& input': {
                            color: 'black',
                        },
                    },
                }}
                variant="outlined"
            >
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
                />
            </FormControl>
            <Button onClick={onSubmit} sx={{ color: "#ccc", fontWeight: "800", fontSize: "16px", border: "3px solid #ccc", mt: 2, borderRadius: "50px", width: "60%", backgroundColor: "red" }}>Log In</Button>
        </Stack>
    );
}

export default Login;
