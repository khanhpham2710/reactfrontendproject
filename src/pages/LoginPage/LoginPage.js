import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from '../../global/authContext/authContext';
import Login from '../../components/LogIn/Login';


function LoginPage() {
  const { userLoggedIn, } = useAuth()

  if (userLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Login />
  )
}

export default LoginPage
