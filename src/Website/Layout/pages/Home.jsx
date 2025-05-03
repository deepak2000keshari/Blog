import React from 'react'
import CardsCom from './components/CardsCom'
import Grid from '@mui/material/Grid2';
import { useState,useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import {Delete,Update,Add,Get} from '../../../Config/blogManage';
import ButtonC from './components/ButtonC';
import Modal from './components/Modal';
import {Preview} from '../../../Config/ImageManage';

// import { useSelector, useDispatch } from 'react-redux'
// import Container from '@mui/material/Container';
function Home() {
  const [list,SetList] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // 👈 Track submission
  const modalRef = useRef();  // 👈 Create ref for Modal
  const handleCardButtonClick = () => {
    modalRef.current.openModal();  // 👈 Call openModal when button is clicked inside CardsCom
  };
  useEffect(() => {
    Get().then(async (result) => {
      if (result) {
        const updatedData = await Promise.all(
          result.documents.map(async (item) => {
            const previewResult = await Preview(item.ImageId);
            return {
              ...item,
              Image: previewResult.href ?? null, // Add the image URL to the item
            };
          })
        );
        console.log(updatedData);
        // Now set the updated data list
        SetList(updatedData);
      }
    });
  }, []);

  useEffect(() => {
    // console.log("hello");
    // console.log("formSubmitted",formSubmitted);
    // console.log("formSubmittedFlase",formSubmitted);
    if (formSubmitted == true) {
      Get().then(async (result) => {
        if (result) {
          const updatedData = await Promise.all(
            result.documents.map(async (item) => {
              const previewResult = await Preview(item.ImageId);
              return {
                ...item,
                Image: previewResult.href ?? null, // Add the image URL to the item
              };
            })
          );
          
          // Now set the updated data list
          SetList(updatedData);
        }
      });
      setFormSubmitted(false); // 👈 Reset to false after updating the list
    }
  }, [formSubmitted]) // 👈 Dependency array

  
  const use = useSelector((state => state.User));
  console.log("user",use);
  // let cards = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <div>
     <Modal  ref={modalRef} setFormSubmitted = {setFormSubmitted}/>
      <Grid container spacing={2} sx={{ padding: 1 }}>
        {list.map((card) => (
          <Grid key={card.$id}>
            <CardsCom ref={modalRef} documentId ={card.$id} id = {card.Id} image = {card.Imagec  } paragraph = {card.Context} title= {card.Title}/>
        </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home
