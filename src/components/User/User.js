import { Box, IconButton, Avatar, Menu, MenuItem, Divider } from '@mui/material';
import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import SwitchMode from "../SwitchMode/SwitchMode";
import { doSignOut } from '../../firebase/auth';
import {  useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useAuth } from '../../global/authContext/authContext';


export default function User() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const { currentUser, userLoggedIn } = useAuth()

  // console.log(currentUser)

  function handleLogout() {
    doSignOut()
      .then(() => {
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
          {userLoggedIn ? <Avatar src={currentUser?.photoURL} sx={{ width: 40, height: 40 }}>{currentUser?.displayName?.trim()[0]}</Avatar> : <Avatar sx={{ width: 40, height: 40 }}></Avatar>}
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
        {!userLoggedIn ? (<MenuItem onClick={() => {
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
