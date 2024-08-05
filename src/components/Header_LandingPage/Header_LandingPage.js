import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';
import User from '../User/User';




const pages = [
  { name: "Home", path: "/home" },
  { name: "TV shows", path: "/anime" },
  { name: "Movies", path: "/movie" },
  { name: "Blog", path: "/blog" },
];

const settings = [
  { name: 'Profile', path: "/profile" },
  { name: 'Account', path: "/account" },
  { name: 'Logout' },
];


function Header_LandingPage() {
  return (
    <AppBar position="fixed" sx={{ height: "10vh", display: "flex", justifyContent: "center" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 6, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/home">
              <img src={assets.logo} style={{
                width: "150px",
                height: "auto"
              }} alt="Logo" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MenuIcon />
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1, ml: 5
            }}
          ><Link to="/home">
              <img src={assets.logo} style={{
                width: "150px",
                height: "auto",
                transform: "translateX(-20%)"
              }} alt="Logo" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                sx={{
                  my: 2, color: 'white', display: 'block', mr: 1, p: "20px 30px",
                  transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out",
                  "&:hover": {
                    color: "red",
                    backgroundColor: "#121212"
                  }
                }}>
                <Typography variant='h6'>
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            { <User />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header_LandingPage;
