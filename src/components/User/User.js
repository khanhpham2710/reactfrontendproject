import { Box, Tooltip, IconButton, Avatar, Menu, Typography, MenuItem, Divider } from '@mui/material';
import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SwitchMode from "../SwitchMode/SwitchMode";
import { auth } from "../../firebase/firebase"
import {  useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export default function User() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const [user, setUser] = React.useState()

  React.useEffect(() => {
    const googleUser = JSON.parse(localStorage.getItem("googleUser"));
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const logInEmail = JSON.parse(localStorage.getItem("logInEmail"));
    const logInGoogle = JSON.parse(localStorage.getItem("logInGoogle"));

    if (logInEmail && user_info) setUser(user_info)
    else if (logInGoogle && googleUser) setUser(googleUser);

  }, []);



  function handleLogout() {
    auth.signOut()
      .then(() => {
        setUser(null)
        localStorage.setItem("logInEmail", JSON.stringify(false))
        localStorage.setItem("logInGoogle", JSON.stringify(false))
        window.location.reload();
      }).catch((error) => {
        console.error(error);
      });
  }


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', zIndex: "10" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {user ? <Avatar src={user.photoURL} sx={{ width: 40, height: 40 }}>{user?.displayName?.trim()[0]}</Avatar> : <Avatar sx={{ width: 40, height: 40 }}></Avatar>}
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            minWidth: 200,
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 2,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>{
          handleClose()
          navigate("/profile")
          }}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={()=>{
          handleClose()
          navigate("/mycart")
        }}>
          <ListItemIcon>
            <ShoppingCartCheckoutIcon fontSize="small" />
          </ListItemIcon>
          My cart
        </MenuItem>
        <MenuItem>
          Switch mode <SwitchMode />
        </MenuItem>
        <Divider />
        {!user ? (<MenuItem onClick={() => {
          navigate("/login")
        }}>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>) : (<MenuItem onClick={() => {
          handleClose()
          handleLogout()
        }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>)}
      </Menu>
    </React.Fragment>
  );
}
