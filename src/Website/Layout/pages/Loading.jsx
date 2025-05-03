import React from 'react'
import { CircularProgress, Box } from "@mui/material";
function Loading() {
  return (
    <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1300,
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(255,255,255,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress size={60} />
  </Box>
  )
}

export default Loading
