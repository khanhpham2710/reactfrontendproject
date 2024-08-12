import React, { useEffect, useState } from 'react';
import { useAuth } from "../../global/authContext/authContext";
import { Container, Grid, Box, Typography, Avatar, Divider, Button } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ChangePassword from '../../components/ChangePassword/ChangePassword';
import MySnackbars from '../../components/MySnackbars/MySnackbars'
import { useSelector, useDispatch } from 'react-redux';
import { loadFavorite } from '../../global/userSlice0';
import FavoriteAnimes from '../../components/FavoriteAnimes/FavoriteAnimes';
import PhotoDisplay from '../../components/PhotoDisplay/PhotoDisplay';

function Profile() {
  const [user, setUser] = React.useState()
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { favorite } = useSelector(state => state.user0)
  const dispatch = useDispatch()

  const logInEmail = JSON.parse(localStorage.getItem("logInEmail"));

  React.useEffect(() => {
    const googleUser = JSON.parse(localStorage.getItem("googleUser"));
    const user_info = JSON.parse(localStorage.getItem("user_info"));

    const logInGoogle = JSON.parse(localStorage.getItem("logInGoogle"));

    if (logInEmail && user_info) setUser(user_info)
    else if (logInGoogle && googleUser) setUser(googleUser);

  }, []);


  React.useEffect(() => {
    dispatch(loadFavorite)
  }, [])



  const handleClickSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };



  return (
    <Grid container mt="12vh">
      <Grid item xs={12} sm={12} md={4} lg={3} p={4}>
        <PhotoDisplay user={{ user }} handleClickSnackbar={handleClickSnackbar} logInEmail={logInEmail}/>
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs={12} sm={12} md={8} lg={8.5} sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }} textAlign="left">
        <Typography variant='h4' fontWeight="800" gutterBottom>User Info</Typography>
        <Typography variant='body1' gutterBottom>Name: {user?.displayName}</Typography>
        <Typography variant='body1' gutterBottom>Email: {user?.email} </Typography>
        {logInEmail && <ChangePassword handleClickSnackbar={handleClickSnackbar} />}
      </Grid>
      <MySnackbars
        open={snackbarOpen}
        handleClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
      <Box width="100%">
        {user && <FavoriteAnimes list={favorite} />}
      </Box>
    </Grid>
  )
}

export default Profile;
