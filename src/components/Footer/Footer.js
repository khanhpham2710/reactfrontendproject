import React from 'react';
import { Container, Grid, Typography, List, ListItem, Divider, Link, Box } from '@mui/material';
import { HeartBroken } from '@mui/icons-material';
import LoginButton from '../LoginButton/LoginButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function Footer() {
  return (
    <Container maxWidth="xll" sx={{ my: 6, borderTop: "4px solid #ccc" }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item mt={3} xs={12} sm={12} md={6} lg={3} sx={{ borderRight: { md: "2px solid #ccc" }}}>
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
              <Link href="#">+1 234 569 798</Link>
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
        <Grid item mt={3} xs={12} sm={4} md={6} lg={2} sx={{ borderRight: { md: "2px solid #ccc", md:"none", lg: "2px solid #ccc" } }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={2}>Legal</Typography>
          <List>
            <ListItem><Link href="#">Terms of Use</Link></ListItem>
            <ListItem><Link href="#">Privacy Policy</Link></ListItem>
            <ListItem><Link href="#">Security</Link></ListItem>
          </List>
        </Grid>
        <Grid item mt={3} xs={12} md={12} lg={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Newsletter</h2>
          <Typography variant="body1" my={4}>Ready to watch? Enter your email to create or restart your membership.</Typography>
          <LoginButton label="Login" />
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography variant='h6' textAlign="center">Made with <HeartBroken sx={{ fontSize: "15px" }} />. © 2024 BlockBuster. All Rights Reserved. Designed by Duy Khánh.</Typography>
    </Container>
  );
}

export default Footer;
