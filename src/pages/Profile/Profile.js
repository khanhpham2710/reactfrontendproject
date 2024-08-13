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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const { currentUser, userLoggedIn } = useAuth()


  const { favorite } = useSelector(state => state.user0)
  const dispatch = useDispatch()

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
        <PhotoDisplay user={ currentUser } handleClickSnackbar={handleClickSnackbar}/>
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs={12} sm={12} md={8} lg={8.5} sx={{ p: { xs: 2, sm: 2, md: 3, lg: 4 } }} textAlign="left">
        <Typography variant='h4' fontWeight="800" gutterBottom>User Info</Typography>
        <Typography variant='body1' gutterBottom>Name: {currentUser?.displayName}</Typography>
        <Typography variant='body1' gutterBottom>Email: {currentUser?.email} </Typography>
        <ChangePassword handleClickSnackbar={handleClickSnackbar} />
      </Grid>
      <MySnackbars
        open={snackbarOpen}
        handleClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
      <Box width="100%">
        {userLoggedIn && <FavoriteAnimes list={favorite} />}
      </Box>
    </Grid>
  )
}

export default Profile;
