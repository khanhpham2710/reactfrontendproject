import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import LogIn from '../../components/LogIn/LogIn'
import { Box, Stack } from '@mui/material'

function Login() {
  return (
    <Box width="100vw" height="100vh">
      <Stack direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "50vw", minWidth: "700px", minHeight:"200px", height: "50vh", background: "white", borderRadius: "30px" }}>
        <Box width="50%" height="100%" p={2}>
          <SignIn />
        </Box>
        <Box width="50%" height="100%" p={2}>
          <LogIn />
        </Box>
      </Stack>
    </Box>
  )
}

export default Login
