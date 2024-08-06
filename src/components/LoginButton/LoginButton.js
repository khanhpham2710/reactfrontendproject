import { Link } from "react-router-dom";
import React from 'react';
import MyButton from "../MyButton/MyButton";

function LoginButton(props) {
    return (
        <Link to="/login">
            <MyButton context={props.label} />
        </Link>
    );
}

export default LoginButton;
