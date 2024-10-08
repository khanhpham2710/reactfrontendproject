import React, { useState } from 'react';
import LoginForm from '../LoginForm/LogInForm';
import SignInForm from '../SignInForm/SignInForm';
import MySnackbars from '../MySnackbars/MySnackbars'; 
import "./Login.css";
import { Box } from '@mui/material';


const Login = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const toggleForm = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    const handleClickSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <Box height="100vh" width="100vw" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="login_container">
            <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
                <SignInForm handleClickSnackbar={handleClickSnackbar} />
                <LoginForm handleClickSnackbar={handleClickSnackbar} />
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome to BlockBuster</h1>
                            <button className="hidden button" id="login" onClick={toggleForm}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Welcome to BlockBuster</h1>
                            <button className="hidden button" id="register" onClick={toggleForm}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <MySnackbars
                open={snackbarOpen}
                handleClose={handleCloseSnackbar}
                message={snackbarMessage}
                severity={snackbarSeverity}
            />
        </Box>
    );
};

export default Login;
