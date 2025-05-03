import React from 'react'
import { useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
function Learn() {
    const blog = useSelector((state) => state.Blog);
  return (
    <Card sx={{ maxWidth: "100%", m: 2, boxShadow: 3,overflow: "auto" }}>
    <CardMedia
      component="img"
      height="100px"
      image={blog.Image}
      alt="Random Image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {blog.Title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {blog.Context}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default Learn
