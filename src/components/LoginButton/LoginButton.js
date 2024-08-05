import { Link } from "react-router-dom";
import React from 'react';
import MyButton from "../MyButton/MyButton";

function LoginButton(prop) {
    return (
        <Link to="/login">
            <MyButton context={prop.label}/>
        </Link>
    );
}

export default LoginButton;
