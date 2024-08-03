import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';
import User from '../User/User';

const pages = [
  { name: "Home", path: "/home" },
  { name: "TV shows", path: "/anime" },
  { name: "Movies", path: "/movie" },
  { name: "Blog", path: "/blog" },
];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ height: "10vh", display: "flex", justifyContent: "center" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 6, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/home">
              <img src={assets.logo} style={{ 
              width: "200px", 
              height: "auto",
              transform: "translateX(-20%)" }} alt="Logo" />
          </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center" variant='h6'>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1, ml: 5
            }}
          ><Link to="/home">
              <img src={assets.logo} style={{ 
              width: "200px", 
              height: "auto",
              transform: "translateX(-20%)" }} alt="Logo" />
          </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.path}
                sx={{ my: 2, color: 'white', display: 'block', height: "100%" }}
              ><Typography variant='h6'>
                  {page.name}
              </Typography>
              </Button>
            ))}
          </Box>
          <User />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
