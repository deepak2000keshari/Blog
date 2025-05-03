import React from 'react'
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
function Contact() {
  return (
    <Container maxWidth="sm" sx={{ mt: 7.5, mb: 7.5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            We'd love to hear from you! Please fill out the form below.
          </Typography>
        </Box>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Contact
