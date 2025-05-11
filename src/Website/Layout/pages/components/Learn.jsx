import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Learn({LikeAction}) {
  const blog = useSelector((state) => state.Blog);
  const user = useSelector((state) => state.User);
  console.log(blog);
  const [Like,SetLike] = useState(blog.Like);
  const [Current,CurrentLike] = useState(blog.CurrentLike);
  const likehandle  = ()=> {
    console.log(Current);
    SetLike(Current == false ? Like +1 : Like - 1);
    CurrentLike(!Current); 
    LikeAction(blog.documentID);
  }

  return (
    <Card
      sx={{
        maxWidth: '100%',
        m: 2,
        boxShadow: 3,
        maxHeight: '100vh', // Set total height
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top image */}
      <CardMedia
        component="img"
        height="100"
        image={blog.Image}
        alt="Blog Cover"
      />

      {/* Scrollable text section */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.Context}
          </Typography>
        </CardContent>
      </Box>

      {/* Fixed bottom icon section */}
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap={2}
        px={2}
        py={1}
        borderTop="1px solid #eee"
      >
        <Box display="flex" alignItems="center" gap={0.5}>
          <IconButton size="small" aria-label="like" onClick = {likehandle}>
            <FavoriteBorderIcon fontSize="small" sx={Current && {
                          backgroundColor: 'blue',
                          borderRadius: '50%',  // make it round
                          padding: '4px',
                          color: 'white',
                        }}/>
          </IconButton>
          <Typography variant="caption">{Like}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={0.5}>
          <IconButton size="small" aria-label="comment">
            <ChatBubbleOutlineIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption">3</Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default Learn;
