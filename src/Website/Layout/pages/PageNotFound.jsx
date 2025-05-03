import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', p: 10 }}>
      <Box>
        <Typography variant="h1" fontWeight="bold" color="primary" sx={{ fontSize: { xs: '6rem', md: '10rem' } }}>
          404
        </Typography>
        <Typography variant="h5" fontWeight="medium" gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
          sx={{ borderRadius: 8 }}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  )
}

export default PageNotFound
