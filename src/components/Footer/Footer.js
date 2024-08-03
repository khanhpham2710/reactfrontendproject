import React from 'react';
import { Container, Grid, Typography, List, ListItem, Link, Divider } from '@mui/material';
import { HeartBroken } from '@mui/icons-material';
import LoginButton from '../LoginButton/LoginButton';
import styled from 'styled-components';
import assets from '../../assets/assets';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="xl" sx={{ my: 6 }}>
        <Grid container>
          <Grid item mt={3} xs={12} md={6} lg={3}>
          <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={4}>Contact us</Typography>
            <List>
              <ListItem>
                <EmailIcon />
                <Link href="#">: support@blockbuster.com</Link>
              </ListItem>
              <ListItem>
                <PhoneIcon />
                <Link href="#">: +1 234 569 798</Link>
              </ListItem>
              <ListItem>
                <PublicIcon />
                <Link href="#">: www.blockbuster.com</Link>
              </ListItem>
              <ListItem>
                <LocationOnIcon />
                <Link href="#">: 97 Ilchester Road, Muirhead, KY15 2GP</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item mt={3} xs={12} md={6} lg={2}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={4}>Resources</Typography>
            <List>
              <ListItem><Link href="#">About BlockBuster</Link></ListItem>
              <ListItem><Link href="#">Contact us</Link></ListItem>
              <ListItem><Link href="#">Forums</Link></ListItem>
              <ListItem><Link href="#">Blog</Link></ListItem>
              <ListItem><Link href="#">Help Center</Link></ListItem>
            </List>
          </Grid>
          <Grid item mt={3} xs={12} md={6} lg={2}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={4}>Account</Typography>
            <List>
              <ListItem><Link href="#">My Account</Link></ListItem>
              <ListItem><Link href="#">Watchlist</Link></ListItem>
              <ListItem><Link href="#">Collections</Link></ListItem>
              <ListItem><Link href="#">User Guide</Link></ListItem>
            </List>
          </Grid>
          <Grid item mt={3} xs={12} md={6} lg={2}>
            <Typography variant="h5" sx={{ fontWeight: 600 }} textAlign="left" ml={4}>Legal</Typography>
            <List>
              <ListItem><Link href="#">Terms of Use</Link></ListItem>
              <ListItem><Link href="#">Privacy Policy</Link></ListItem>
              <ListItem><Link href="#">Security</Link></ListItem>
            </List>
          </Grid>
          <Grid item mt={3} xs={12} md={12} lg={3}>
            <h2>Newsletter</h2>
            <Typography variant="body1" my={4}>Ready to watch? Enter your email to create or restart your membership.</Typography>
            <LoginButton label="Login" />
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant='body2'>Made with <HeartBroken sx={{ fontSize: "15px" }} />. © 2024 BlockBuster. All Rights Reserved. Designed by Duy Khánh.</Typography>
      </Container>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  a, p {
    font-size: 20px;
    transition: 0.3s linear;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export default Footer;
