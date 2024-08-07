import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import assets from '../../assets/assets';
import User from '../User/User';



function Header_LandingPage() {
  return (
    <AppBar position="fixed" sx={{ height: "10vh", display: "flex", justifyContent: "center" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ mr: 6 }}>
            <img src={assets.logo} style={{
              width: "150px",
              height: "auto"
            }} alt="Logo" />
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", gap: "20px" }}>
            <User />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header_LandingPage;
