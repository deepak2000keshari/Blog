import React, { useState,useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent
} from '@mui/material';
import {AddImage} from '../../../../Config/ImageManage'; 
import {Add,Update} from '../../../../Config/blogManage';
import { useSelector} from 'react-redux'

function EditCard({ onRef,setFormSubmitted}) {
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);
  const [docID, setDocID] = useState(null);
  const user = useSelector((state) => state.User);
  const blog = useSelector((state) => state.Blog);
  console.log("uskkker",user);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    AddImage(image).then((result) => {
      if (result) {
         const Imageid = result.$id;
        //  const user = result.$createdBy;
         const userId  = user.User.$id; 
        if (!id) {
         Add(title,paragraph,Imageid,userId).then((result) => {
          if (result) {
            setFormSubmitted(true); // 👈 Set to true after successful submission
            console.log("result after edit",result);
          }
         }) } else {
          console.log("id",id);
           Update(docID,id,title,paragraph,Imageid,userId).then((result) => {
            if (result) {
              setFormSubmitted(true); // 👈 Set to true after successful submission
              console.log("result after edit",result);
            }
         });
      }

      // console.log("Image uploaded:", result);
    }});
    // You can send this data to backend or Appwrite, etc.
  };
  // const formRef = useRef();
  useEffect(() => {
    console.log("sfhdjs",blog);
    if (blog) {
      setId(blog.id);
      setImage(blog.Image);
      setParagraph(blog.Context);
      setTitle(blog.Title);
      setDocID(blog.documentID);
    }
    // 🔥 Now open modal automatically
    // setAutoOpen(true);   // 👈 call it here
  }, [blog]);
  useEffect(() => {
    // Pass the actual React submit handler to the parent
    onRef(() => {
      handleSubmit({ preventDefault: () => {} }); // Simulate event
    });
  }, [onRef, title, paragraph, image]);
  
  return (
        <Box component="form"  sx={{ display: 'flex', flexDirection: 'column', gap: 2, p:10   }}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Paragraph"
            variant="outlined"
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button variant="outlined" component="label">
            Upload Image
            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
          </Button>
          {image && <Typography variant="body2">Selected: {image.name}</Typography>}
          {/* <Button variant="contained" color="primary" type="submit">
            Submit
          </Button> */}
        </Box>
  );
}

export default EditCard;
