import React, { useState } from 'react';
import LoginForm from '../LoginForm/LogInForm';
import SignInForm from '../SignInForm/SignInForm';
import "./Login.css"
import { Box } from '@mui/material';


const Login = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const toggleForm = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    return (
        <Box height="100vh" width="100vw" sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
                <SignInForm />
                <LoginForm />
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

        </Box>
    );
};

export default Login;
