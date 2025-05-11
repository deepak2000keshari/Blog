import React, { forwardRef } from 'react'
import { Card, CardContent, CardMedia, Typography, Button, CardActions, IconButton, Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ButtonC from './ButtonC';
import { useDispatch } from 'react-redux';
import { Updateblog } from '../../../../APP/features/Blog/BlogSlice';
const CardsCom = forwardRef(({LikeAction,like,currentLike,documentId, id, title, paragraph, image, paramsId}, ref) => {
  const dispatch = useDispatch();
  const handleButtonClick = (id, title, paragraph, image,like,currentLike) => {
    // Handle button click logic here
    dispatch(Updateblog({ documentID: documentId, id: id, Title: title, Context: paragraph, Image: image, modal_Open: true, mode: "Edit",Like:like,CurrentLike:currentLike }));
    ref.current.openModal();  // 👈 Call openModal when button is clicked inside CardsCom
    // console.log("ref",ref);
  };

  const handleClick = (id, title, paragraph, image,like,currentLike) => {
    dispatch(Updateblog({ documentID: documentId, id: id, Title: title, Context: paragraph, Image: image, modal_Open: true, mode: "Learn",Like:like,CurrentLike:currentLike}));
    ref.current.openModal(); // 👈 Call openModal when button is clicked inside CardsCom
  }
  const likehandle = (id) => {
    LikeAction(id);
  }
  return (
    <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3 }}>
      {/* Card Image */}
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt="Nature"
      />

      {/* Card Content */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: '275px',
            height: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block'
          }}
        >
          {paragraph}
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mt={1}
          gap={2}
        >
          {/* Likes */}
          <Box display="flex" alignItems="center" gap={0.5}>
            <IconButton size="small" aria-label="like" onClick = {likehandle(id)}>
              <FavoriteBorderIcon fontSize="small" sx={ currentLike && {
                          backgroundColor: 'blue',
                          borderRadius: '50%',  // make it round
                          padding: '4px',
                          color: 'white',
                        }}/>
            </IconButton>
            <Typography variant="caption">{like}</Typography>
          </Box>

          {/* Comments */}
          <Box display="flex" alignItems="center" gap={0.5}>
            <IconButton size="small" aria-label="comment">
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <Typography variant="caption">3</Typography>
          </Box>
        </Box>

        {/* <Typography variant="body2" color="text.secondary" width = "275px" height = "100px" overflow = "hidden" textOverflow = "ellipsis" display = "block">
          {paragraph}
        </Typography> */}
      </CardContent>

      {/* Card Actions */}
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonC action={() => handleClick(id, title, paragraph, image,like,currentLike)} text="Learn More" color="primary" size="small" />
        {paramsId && (<ButtonC action={() => handleButtonClick(id, title, paragraph, image,like,currentLike)} text="Edit" color="primary" size="small" />)}
      </CardActions>
    </Card>
  )
});

export default CardsCom
