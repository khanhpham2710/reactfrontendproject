import React from 'react';
import { Container, Grid, Typography, List, ListItem, Divider, Link, Box } from '@mui/material';
import { HeartBroken } from '@mui/icons-material';
import LoginButton from '../LoginButton/LoginButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Fab } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"

function Footer() {

  return (
    <Container maxWidth="100vw" sx={{ my: 6, borderTop: "4px solid #ccc" }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item mt={3} xs={12} sm={12} md={6} lg={3} sx={{ borderRight: { md: "2px solid #ccc" } }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={2}>Contact us</Typography>
          <List>
            <ListItem>
              <EmailIcon />
              <Link href="#">
                support@blockbuster.com
              </Link>
            </ListItem>
            <ListItem>
              <PhoneIcon />
              <Link href="#">+1 234 509 798</Link>
            </ListItem>
            <ListItem>
              <PublicIcon />
              <Link href="#">www.blockbuster.com</Link>
            </ListItem>
            <ListItem>
              <LocationOnIcon />
              <Link href="#">97 Ilchester Road, Muirhead, KY15 2GP</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item mt={3} xs={12} sm={5} md={6} lg={2} sx={{ borderRight: { sm: "2px solid #ccc", md: "none", lg: "2px solid #ccc" } }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={2}>Resources</Typography>
          <List>
            <ListItem><Link href="#">About BlockBuster</Link></ListItem>
            <ListItem><Link href="#">Contact us</Link></ListItem>
            <ListItem><Link href="#">Forums</Link></ListItem>
            <ListItem><Link href="#">Blog</Link></ListItem>
            <ListItem><Link href="#">Help Center</Link></ListItem>
          </List>
        </Grid>
        <Grid item mt={3} xs={12} sm={3} md={6} lg={2} sx={{ borderRight: { sm: "2px solid #ccc" } }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={2}>Account</Typography>
          <List>
            <ListItem><Link href="#">My Account</Link></ListItem>
            <ListItem><Link href="#">Watchlist</Link></ListItem>
            <ListItem><Link href="#">Collections</Link></ListItem>
            <ListItem><Link href="#">User Guide</Link></ListItem>
          </List>
        </Grid>
        <Grid item mt={3} xs={12} sm={4} md={6} lg={2} sx={{ borderRight: { md: "none", lg: "2px solid #ccc" } }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={2}>Legal</Typography>
          <List>
            <ListItem><Link href="#">Terms of Use</Link></ListItem>
            <ListItem><Link href="#">Privacy Policy</Link></ListItem>
            <ListItem><Link href="#">Security</Link></ListItem>
          </List>
        </Grid>
        <Grid item mt={3} xs={12} md={12} lg={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant='h4' textAlign="center" fontWeight="700">Newsletter</Typography>
          <Typography variant="body1" my={4} textAlign="center" >Ready to watch? Enter your email to create or restart your membership.</Typography>
          <LoginButton label="Login" />
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Container maxWidth="lg">
        <Typography variant='h5' fontWeight="800" letterSpacing={1} textAlign="center" gutterBottom>Follow us on:</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Fab
            sx={{
              bgcolor: '#1877F2',
              color: 'white',
              width: 50, 
              height: 50,
              animation: "pulse 1s ease-in-out infinite alternate",
              '&:hover': {
                bgcolor: '#1877F2',
                opacity: 0.8,
                boxShadow: '0 0 15px rgba(24, 119, 242, 0.5)',
                animation: 'aura 0.8s ease-in-out infinite alternate , pulse 1s ease-in-out infinite alternate',
              },
            }}
            aria-label="facebook"
          >
            <FacebookRoundedIcon />
          </Fab>
          <Fab
            sx={{
              bgcolor: '#1DA1F2',
              color: 'white',
              width: 50, 
              height: 50,
              animation: "pulse 1s ease-in-out infinite alternate",
              '&:hover': {
                bgcolor: '#1DA1F2',
                opacity: 0.8,
                boxShadow: '0 0 15px rgba(29, 161, 242, 0.5)',
                animation: 'aura 0.8s ease-in-out infinite alternate , pulse 1s ease-in-out infinite alternate',
              },
            }}
            aria-label="x"
          >
            <XIcon />
          </Fab>
          <Fab
            sx={{
              bgcolor: '#0077B5',
              color: 'white',
              width: 50, 
              height: 50,
              animation: "pulse 1s ease-in-out infinite alternate",
              '&:hover': {
                bgcolor: '#0077B5',
                opacity: 0.8,
                boxShadow: '0 0 15px rgba(0, 119, 181, 0.5)',
                animation: 'aura 0.8s ease-in-out infinite alternate , pulse 1s ease-in-out infinite alternate',
              },
            }}
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </Fab>
          <Fab
            sx={{
              bgcolor: '#FF0000',
              color: 'white',
              width: 50, 
              height: 50,
              animation: "pulse 1s ease-in-out infinite alternate",
              '&:hover': {
                bgcolor: '#FF0000',
                opacity: 0.8,
                boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
                animation: 'aura 0.8s ease-in-out infinite alternate , pulse 1s ease-in-out infinite alternate',
              },
            }}
            aria-label="youtube"
          >
            <YouTubeIcon />
          </Fab>
          <Fab
            sx={{
              bgcolor: '#E1306C',
              color: 'white',
              width: 50, 
              height: 50,
              animation: "pulse 1s ease-in-out infinite alternate",
              '&:hover': {
                bgcolor: '#E1306C',
                opacity: 0.8,
                boxShadow: '0 0 15px rgba(225, 48, 108, 0.5)',
                animation: 'aura 0.8s ease-in-out infinite alternate , pulse 1s ease-in-out infinite alternate ',
              },
            }}
            aria-label="instagram"
          >
            <InstagramIcon />
          </Fab>
        </Box>
      </Container>
      <Divider sx={{ my: 4 }} />
      <Typography variant='h6' textAlign="center">Made with <HeartBroken sx={{ fontSize: "15px" }} />. © 2024 BlockBuster. All Rights Reserved. Designed by Duy Khánh.</Typography>
    </Container>
  );
}

export default Footer;
