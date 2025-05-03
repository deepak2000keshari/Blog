import React, {forwardRef } from 'react'
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import ButtonC from './ButtonC';
import { useDispatch} from 'react-redux';
import { Updateblog } from '../../../../APP/features/Blog/BlogSlice';
const CardsCom = forwardRef(({documentId,id,title, paragraph,image},ref) => {
  const dispatch = useDispatch();
  const handleButtonClick = (id,title,paragraph,image) => {
    // Handle button click logic here
    console.log("Button clicked!");
    console.log("ID:", id);
    console.log("Title:", title);
    console.log("Paragraph:", paragraph);
    console.log("image:", image);
    console.log("documentId:", documentId);
    dispatch(Updateblog({ documentID: documentId,id:id, Title:title, Context:paragraph, Image:image,modal_Open: true,mode: "Edit" }));
    ref.current.openModal();  // 👈 Call openModal when button is clicked inside CardsCom
    // console.log("ref",ref);
  };

  const handleClick = (id,title,paragraph,image) => {
    dispatch(Updateblog({ documentID: documentId,id:id, Title:title, Context:paragraph, Image:image,modal_Open: true,mode: "Learn" }));
    ref.current.openModal(); // 👈 Call openModal when button is clicked inside CardsCom
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
        <Typography variant="body2" color="text.secondary" width = "275px" height = "100px" overflow = "hidden" textOverflow = "ellipsis" display = "block">
          {paragraph}
        </Typography>
      </CardContent>

      {/* Card Actions */}
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonC action = {()=> handleClick(id,title,paragraph,image)} text = "Learn More" color="primary" size = "small"/>
        <ButtonC action = {()=> handleButtonClick(id,title,paragraph,image)} text = "Edit" color="primary" size = "small"/>
      </CardActions>
    </Card>
  )
});

export default CardsCom
