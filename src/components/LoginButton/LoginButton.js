import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from 'react';

function LoginButton(prop) {
    return (
        <Link to="/login">
            <Button variant="contained" sx={{ 
                minWidth: "140px",
                padding: "10px 20px", 
                fontSize: "20px", 
                borderRadius: "15px",
                transition: "0.3s linear",
                "&:hover":{
                    backgroundColor: "red",
                    color: "#fff"
                }
                }} >
                {prop.label}
            </Button>
        </Link>
    );
}

export default LoginButton;
