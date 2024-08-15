import React, { useEffect } from 'react'
import { Navigate, useLocation } from "react-router-dom";
import Login from '../../components/Login/LogIn';
import { useAuth } from '../../global/authContext/authContext';


function LoginPage() {
  const { currentUser, userLoggedIn, } = useAuth()

  if (userLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Login />
  )
}

export default LoginPage
