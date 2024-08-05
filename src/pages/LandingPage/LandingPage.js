import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';
import LoginButton from '../../components/LoginButton/LoginButton';
import Carousel from '../../components/Carousel/Carousel';
import { Typography, Box } from '@mui/material';
import assets from '../../assets/assets';
import Header_LandingPage from '../../components/Header_LandingPage/Header_LandingPage';

function LandingPage() {
  return (
    <div id="landing_page">
      <Header_LandingPage />
      <Box maxWidth="xl" sx={{ padding: 6, mt: "10vh"}}>
        <Typography gutterBottom mb={6} sx={{fontWeight : 900}} variant='h2'>Unlimited anime movies, shows and more</Typography>
        <Typography gutterBottom mb={6} sx={{fontWeight : 400}} variant='h3'>Watch anywhere. Cancel anytime</Typography>
        <Typography gutterBottom mb={6} sx={{fontWeight : 400}} variant='h3'>Ready to watch? Enter your email to create or restart your membership</Typography>
        <Link to="/login"><LoginButton label="Get Started" /></Link>
      </Box>
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
