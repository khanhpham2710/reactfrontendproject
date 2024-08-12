import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import assets from '../../assets/assets';
import User from '../User/User';
import { useRef, useEffect } from 'react';
import { Grid } from '@mui/material';
import SideMenu from '../SideMenu/SideMenu';
import styles from "./Header.module.css";
import SearchBoxOpen from '../SearchBoxOpen/SearchBoxOpen'

export const pages = [
  { name: "Home", path: "/home" },
  { name: "Top Anime", path: "/top" },
  { name: "Watch", path: "/watch" },
];

export const settings = [
  { name: 'Profile', path: "/profile" },
  { name: 'Account', path: "/account" },
  { name: 'Logout' },
];
function Header({ play }) {
  const navigate = useNavigate(); 
  const headerRef = useRef();
  const [showSearch, setShowSearch] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        headerRef.current.style.opacity = 0.7;
      } else {
        headerRef.current.style.opacity = 1;
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar 
      ref={headerRef} 
      position="fixed" 
      sx={{
        display: play ? "none" : "flex", 
        height: "10vh", 
        justifyContent: "center", 
        transition: "opacity 0.7s", 
        "&:hover": {
          opacity: "1 !important", 
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 6, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/home">
              <img src={assets.logo} style={{ width: "150px", height: "auto", transform: "translateY(10%)" }} alt="Logo" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <SideMenu />
          </Box>
          <img className={styles.logo} src={assets.logo} alt="Logo" onClick={() => navigate('/home')} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', transition: "transform 0.5s", transform: showSearch ? "translateY(-500%)" : "" } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                sx={{
                  color: 'white', 
                  display: 'block', 
                  p: "10px 15px",
                  transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out, display 0.5s ease-in-out",
                  "&:hover": {
                    color: "red",
                    backgroundColor: "transparent",
                  }
                }}
              >
                <Typography variant='h6' fontSize="18px" fontWeight="700" lineHeight="30px">
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "none", md: "block" } }}>
            <Grid container columnSpacing={6} sx={{height: "60px"}}>
              <Box sx={{ flexGrow: 0, display: "flex", gap: "20px" }}>
                <SearchBoxOpen setShowSearch={setShowSearch}/>
              </Box>
            </Grid>
          </Box>
          <User />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
