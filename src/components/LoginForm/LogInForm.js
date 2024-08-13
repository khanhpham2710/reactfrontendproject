import React, { useState } from 'react';
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../global/authContext/authContext';
import { doSignInWithEmailAndPassword, doPasswordReset } from '../../firebase/auth';

const LoginForm = ({ handleClickSnackbar }) => {
    const { setUserLoggedInWithEmail } = useAuth()

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const onLogin = async (event) => {
        event.preventDefault();

        try {
            await doSignInWithEmailAndPassword(email, password);
            setUserLoggedInWithEmail(true);
            navigate("/home");
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                handleClickSnackbar("Incorrect password", "error");
            } else if (error.code === 'auth/user-not-found') {
                handleClickSnackbar("No account found with this email", "error");
            } else {
                handleClickSnackbar(error.message, "error");
            }
        }
    };

    const handleForget = async () => {
        try {
            await doPasswordReset(email);
            handleClickSnackbar("Password reset email sent", "info");
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                handleClickSnackbar("No account found with this email", "error");
            } else {
                handleClickSnackbar(error.message, "error");
            }
        }
    };

    return (
        <div className="form-container sign-in">
            <form onSubmit={onLogin}>
                <Typography variant='h3' sx={{ color: "#000", fontWeight: "700", letterSpacing: "1px", fontSize: "30px" }}>Login</Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    size="normal"
                    margin="dense"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl fullWidth variant="outlined" size="normal" margin="dense">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        variant="outlined"
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
                <Typography variant='body2' sx={{
                    color: "blue", fontStyle: "italic",
                    cursor: 'pointer', my: 1, textDecorationLine: "underline"
                }} onClick={handleForget}>Forget password</Typography>
                <button type="submit" className='button'>Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;
