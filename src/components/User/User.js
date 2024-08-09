import { Box, Tooltip, IconButton, Avatar, Menu, Typography, MenuItem, Divider } from '@mui/material';
import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SwitchMode from "../SwitchMode/SwitchMode";
import { useAuth } from "../../global/authContext/authContext";
import { auth } from "../../firebase/firebase"
import { Navigate, useNavigate } from 'react-router-dom';

export default function User() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [user, setUser] = React.useState()
  const { currentUser, userLoggedInWithGoogle, userLogOut, userInfo, setUserLogOut } = useAuth()
  const navigate = useNavigate();

  React.useEffect(() => {
    const googleUser = JSON.parse(localStorage.getItem("googleUser"));
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    

    if (!userLogOut) {
      if (userInfo) {
        setUser(user_info);
      } else if (userLoggedInWithGoogle) {
        setUser(googleUser);
      }
    }
  }, [userInfo, currentUser, userLoggedInWithGoogle, userLogOut]);


  function handleLogout() {
    auth.signOut()
      .then(() => setUserLogOut(true))
      .then(() => {
        setUser(null)
        localStorage.setItem("logOut", JSON.stringify(true))
        // window.location.reload();
        navigate('/home');
      }).catch((error) => {
        console.error(error);
      });
  }

  console.log(user)

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
          {user ? <Avatar src={user.photoURL} sx={{ width: 40, height: 40 }}>{user?.name?.trim()[0]}</Avatar> : <Avatar sx={{ width: 40, height: 40 }}></Avatar>}
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
            minWidth: 250,
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
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <MenuItem>
          Switch mode <SwitchMode />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          handleLogout()
        }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
