import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';
import User from '../User/User';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRef, useEffect } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { Grid } from '@mui/material';

const pages = [
  { name: "Home", path: "/home" },
  { name: "Top Anime", path: "/top/popular" },
  { name: "Movies", path: "/animes/movies" },
  { name: "Blog", path: "/blog" },
];

const settings = [
  { name: 'Profile', path: "/profile" },
  { name: 'Account', path: "/account" },
  { name: 'Logout' },
];

function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: "10vh"}}>
        <IconButton
          size="large"
          aria-label="open navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={toggleDrawer(false)}
          sx={{ textAlign: "right" }}
        >
          <CancelPresentationIcon sx={{ fontSize: "40px", transform: "scaleY(1.2)" }} />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {pages.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              key={text.path}
              component={Link}
              to={text.path}
              sx={{
                color: 'white', display: 'block', mr: 1,
                transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out",
                "&:hover": {
                  color: "red",
                  backgroundColor: "#121212"
                }
              }}>
              <ListItemText primary={text.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {settings.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              key={text.path}
              component={Link}
              to={text.path}
              sx={{
                color: 'white', display: 'block', mr: 1,
                transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out",
                "&:hover": {
                  color: "red",
                  backgroundColor: "#121212"
                }
              }}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        aria-label="open navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ fontSize: "40px" }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


function Header() {
  
    const headerRef = useRef();
  
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
    <AppBar ref={headerRef} position="fixed" sx={{ height: "10vh", display: "flex", justifyContent: "center", transition: "opacity 0.7s" , "&:hover": {
                  opacity: "1 !important"
                } }}>
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
            <SideMenu />
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
                  color: 'white', display: 'block', mr: 1, p: "20px 30px",
                  transition: "color 0.5s ease-in-out, background-color 0.5s ease-in-out",
                  "&:hover": {
                    color: "red",
                    backgroundColor: "transparent",
                  }
                }}>
                <Typography variant='h6'>
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Grid container columnSpacing={6}>
              <Grid item><SearchBox /></Grid>
              <Grid item><User /></Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
