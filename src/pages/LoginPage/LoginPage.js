import React, { useEffect } from 'react'
import Login from '../../components/LogIn/LogIn';
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../global/authContext/authContext";


function LoginPage() {
  const [user,setUser] = React.useState()

  React.useEffect(() => {
    const googleUser = JSON.parse(localStorage.getItem("googleUser"));
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const logInEmail = JSON.parse(localStorage.getItem("logInEmail"));
    const logInGoogle = JSON.parse(localStorage.getItem("logInGoogle"));

    if (logInEmail && user_info) setUser(user_info)
    else if (logInGoogle && googleUser) setUser(googleUser);

  }, []);


  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Login />
  )
}

export default LoginPage
