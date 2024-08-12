import React from 'react';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';
import LoginButton from '../../components/LoginButton/LoginButton';
import Carousel from '../../components/Carousel/Carousel';
import { Typography, Box } from '@mui/material';
import Header_LandingPage from '../../components/Header_LandingPage/Header_LandingPage';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton'
import media from "../../assets/media"
import Media from '../../components/Media/Media';
import Packages from "../../components/Packages/Packages"


function LandingPage() {
  return (
    <div id="landing_page">
      <Header_LandingPage />
      <Box maxWidth="xl" sx={{ padding: 6, m: "10vh auto 0 auto", display: "flex", flexDirection: "column", alignItems: "center", height: "90vh", justifyContent: "center"}}>
        <Typography textAlign="center" gutterBottom mb={6} sx={{fontWeight : 900, fontSize: {
          xs: "30px", sm:"45px", md: "50px", lg: "70px"
        }}} variant='h1'>Unlimited anime movies, shows and more</Typography>
        <Typography textAlign="center" gutterBottom mb={6} sx={{fontWeight : 400, fontSize: {
          xs: "20px", sm:"35px", md: "40px", lg: "50px"
        }}} variant='h2'>Watch anywhere. Cancel anytime</Typography>
        <Typography textAlign="center" gutterBottom mb={6} sx={{fontWeight : 400, fontSize: {
          xs: "20px", sm:"35px", md: "40px", lg: "50px"
        }}} variant='h2'>Ready to watch? Enter your email to create or restart your membership</Typography>
        <LoginButton label="Get Started" />
      </Box>
      {media.map((item,index)=>
        <Media key={index} heading={item.heading} content={item.content} right={item.right} image={item.image} youtubeId={item?.youtubeId} />
      )}
      <Packages />
      <FAQ id="FAQ" />
      <Footer id="footer" />
      <ScrollUpButton />
    </div>
  );
}

export default LandingPage;
