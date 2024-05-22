import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const AboutUs = () => {
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
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            About Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Welcome to Scholar Sync
              </Typography>
              <Typography variant="body1" paragraph>
                Scholar Sync is a comprehensive student management system designed to streamline and enhance the educational experience for administrators, teachers, and students. Our platform provides a robust set of tools for managing schools, adding teachers, and enrolling students, all within a user-friendly interface.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At Scholar Sync, our mission is to empower educational institutions by providing a seamless and efficient management system. We aim to simplify administrative tasks, improve communication, and foster an environment where educators and students can thrive.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Key Features
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                <li>Create and manage schools with ease.</li>
                <li>Add and manage teacher profiles, assignments, and schedules.</li>
                <li>Enroll and manage student information, attendance, and performance.</li>
                <li>Generate reports and analytics to monitor educational progress.</li>
                <li>Secure and user-friendly interface for all users.</li>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Why Choose Scholar Sync?
              </Typography>
              <Typography variant="body1" paragraph>
                Scholar Sync stands out due to its intuitive design, comprehensive features, and dedication to improving the educational management process. Whether you are an administrator looking to streamline school operations, a teacher seeking to manage your classroom more effectively, or a student aiming to stay organized, Scholar Sync has the tools you need to succeed.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions or would like to learn more about Scholar Sync, please don't hesitate to <br/> <a href="/contactus" className='abtcontact'>contact us</a>. We are here to support you and ensure you get the most out of our platform.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;
