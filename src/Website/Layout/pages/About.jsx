import React from 'react'
import Button from '@mui/material/Button';
import { Container, Typography, Box, Avatar, Grid, Paper } from '@mui/material';
function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
    <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
      <Box textAlign="center" mb={4}>
        <Avatar
          alt="Company Logo"
          src="/logo.png" // replace with your image
          sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Us
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          We are passionate about delivering the best solutions to our customers.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Our Mission
          </Typography>
          <Typography color="textSecondary">
            To innovate and lead with exceptional products that enhance people’s lives.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Our Vision
          </Typography>
          <Typography color="textSecondary">
            To be a globally recognized brand known for quality, service, and innovation.
          </Typography>
        </Grid>
      </Grid>

      <Box mt={6} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Box>
    </Paper>
  </Container>
  )
}

export default About
