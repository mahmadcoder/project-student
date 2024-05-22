import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: '#fff',
            p: 4,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Institute
              </Typography>
              <Typography variant="body1" gutterBottom>
                Scholar Sync
              </Typography>

              <Typography variant="h6" gutterBottom>
                Phone Number
              </Typography>
              <Typography variant="body1" gutterBottom>
                <PhoneIcon sx={{ mr: 1 }} />
                (123) 456-7890
              </Typography>

              <Typography variant="h6" gutterBottom>
                Address
              </Typography>
              <Typography variant="body1" gutterBottom>
                <LocationOnIcon sx={{ mr: 1 }} />
                University of Agriculture Faislabad
              </Typography>

              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" gutterBottom>
                <EmailIcon sx={{ mr: 1 }} />
                <Link href="mailto:info@example.com" color="inherit">
                  info@example.com
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: '#e0e0e0',
                }}
              >
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
