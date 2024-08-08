import React from 'react';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';
import LoginButton from '../../components/LoginButton/LoginButton';
import Carousel from '../../components/Carousel/Carousel';
import { Typography, Box } from '@mui/material';
import Header_LandingPage from '../../components/Header_LandingPage/Header_LandingPage';
import Login from '../../components/LogIn/LogIn'


function LandingPage() {
  return (
    <div id="landing_page">
      <Header_LandingPage />
      <Box maxWidth="xl" sx={{ padding: 6, m: "10vh auto 0 auto", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography textAlign="center" gutterBottom mb={6} sx={{fontWeight : 900}} variant='h2'>Unlimited anime movies, shows and more</Typography>
        <Typography textAlign="center" gutterBottom mb={6} sx={{fontWeight : 400}} variant='h3'>Watch anywhere. Cancel anytime</Typography>
        <Typography textAlign="center" gutterBottom mb={6} sx={{fontWeight : 400}} variant='h3'>Ready to watch? Enter your email to create or restart your membership</Typography>
        <LoginButton label="Get Started" />
      </Box>
      <Login />
      <section className='tv'>

      </section>
      <section className='mobile'>

      </section>
      <section className='both'>

      </section>
      <section className='kid'>

      </section>
      <FAQ id="FAQ" />
      <Footer id="footer" />
    </div>
  );
}

export default LandingPage;
