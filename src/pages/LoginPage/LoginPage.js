import React from 'react'
import { Navigate } from "react-router-dom";
import Login from '../../components/Login/Login';
import { useAuth } from '../../global/authContext/authContext';


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
