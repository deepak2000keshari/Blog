import React from "react";
import { Box, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Box
    component="footer"
    sx={{
      position: "static",
      bottom: 0,
      width: "100%",
      backgroundColor: "#1976d2",
      color: "white",
      textAlign: "center",
      py: 2,
    }}
  >
    <Container>
      <Typography variant="body2">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
    </Container>
  </Box>
  )
}

export default Footer
