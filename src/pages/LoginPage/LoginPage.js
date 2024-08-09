import React, { useEffect } from 'react'
import Login from '../../components/Login/Login'
import { Navigate } from "react-router-dom";
import { useAuth } from "../../global/authContext/authContext";

function LoginPage() {
  const { userLoggedInWithGoogle, userLogOut, userInfo } = useAuth();
  console.log(userInfo,userLoggedInWithGoogle,userLogOut)

  if ((userInfo || userLoggedInWithGoogle) && !userLogOut) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Login />
  )
}

export default LoginPage
