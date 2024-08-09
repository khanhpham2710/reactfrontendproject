import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function onLogin(event) {
        event.preventDefault();
        const user_info = JSON.parse(localStorage.getItem("user_info"));
        
        if (user_info) {
            if (email === user_info.email && password === user_info.password) {
                localStorage.setItem("logOut", false);
                alert("Logged in successfully.");
                window.location.reload();
            } else if (email === user_info.email && password !== user_info.password) {
                alert("Incorrect password");
            }
        } else {
            alert("You have not signed up");
        }
    }

    function handleForget() {
        localStorage.removeItem("user_infoy")
        setPassword("");
        setEmail("");
        alert("Please sign up again");
    }


    return (
        <div className="form-container sign-in">
            <form onSubmit={onLogin}>
                <Typography variant='h3' sx={{color: "#000", fontWeight: "700", letterSpacing: "1px", fontSize: "30px"}}>Login</Typography>
                <TextField
                    fullWidth
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
                <p style={{color: "blue", fontStyle: 'italic', cursor: "pointer"}} onClick={handleForget}>Forget password</p>
                <button type="submit" className='button'>Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;
