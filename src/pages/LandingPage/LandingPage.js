import React from 'react';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';
import LoginButton from '../../components/LoginButton/LoginButton';
import { Typography, Box, Container } from '@mui/material';
import HeaderLandingPage from '../../components/HeaderLandingPage/HeaderLandingPage';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton'
import media from "../../assets/media"
import Media from '../../components/Media/Media';



function LandingPage() {
  return (
    <div id="landing_page">
      <HeaderLandingPage />
      <Container maxWidth="xl">
        <Box maxWidth="xl" sx={{ padding: {xs: 4, sm: 8, md: 9, lg: 10}, m: "12vh auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography textAlign="center" gutterBottom mb={6} sx={{ fontWeight: 900, fontSize : {xs: "30px", sm: "45px", md:"53px", lg: "60px"}}} variant='h2'>Unlimited anime movies, shows and more</Typography>
          <Typography textAlign="center" gutterBottom mb={6} sx={{ fontWeight: 400, fontSize : {xs: "25px", sm: "30px", md:"43px", lg: "50px"} }} variant='h3'>Watch anywhere. Cancel anytime</Typography>
          <Typography textAlign="center" gutterBottom mb={6} sx={{ fontWeight: 400, fontSize : {xs: "28px", sm: "35px", md:"48px", lg: "55px"} }} variant='h3'>Ready to watch? Enter your email to create or restart your membership</Typography>
          <LoginButton label="Get Started" />
        </Box>
        {media.map((item, index) =>
          <Media key={index} heading={item.heading} content={item.content} right={item.right} image={item.image} youtubeId={item?.youtubeId} />
        )}
        <FAQ id="FAQ" />
        <Footer id="footer" />
      </Container>
      <ScrollUpButton />
    </div>
  );
}

export default LandingPage;
