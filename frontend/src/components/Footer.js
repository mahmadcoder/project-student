import React from 'react';
import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: '#8FBC8F',
        color: '#fff',
        py: 4,
        borderRadius: 2,
        mt: 'auto',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Logo and Name */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6">Scholar Sync</Typography>
            </Box>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: { lg: 'center' } }}>
              <Link href="/" color="inherit" sx={{ mb: { xs: 1, lg: 0 }, mr: { lg: 2 }, fontSize: '18px', textDecoration: 'none' }}>Home</Link>
              <Link href="/contactus" color="inherit" sx={{ mb: { xs: 1, lg: 0 }, mr: { lg: 2 }, fontSize: '18px', textDecoration: 'none' }}>Contact Us</Link>
              <Link href="/aboutus" color="inherit" sx={{ mb: { xs: 1, lg: 0 }, fontSize: '18px', textDecoration: 'none' }}>About Us</Link>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center' }}>
            <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%' } }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%' } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%' } }}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
