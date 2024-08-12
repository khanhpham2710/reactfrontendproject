import React, { useState } from 'react';
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../global/authContext/authContext';

const LoginForm = ({ handleClickSnackbar }) => {
    const { setUserLoggedInWithEmail } = useAuth()

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const onLogin = (event) => {
        event.preventDefault();
        const user_info = JSON.parse(localStorage.getItem("user_info"));

        if (user_info) {
            if (email === user_info.email && password === user_info.password) {
                localStorage.setItem("logInEmail", true);
                setUserLoggedInWithEmail(true)
                navigate("/home")
            } else if (email === user_info.email && password !== user_info.password) {
                handleClickSnackbar("Incorrect password", "error");
            }
        } else {
            handleClickSnackbar("You have not signed up", "error");
        }
    };

    const handleForget = () => {
        localStorage.removeItem("user_info");
        setPassword("");
        setEmail("");
        handleClickSnackbar("Please sign up again", "info");
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
