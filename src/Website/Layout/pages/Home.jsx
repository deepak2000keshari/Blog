import React from 'react'
import CardsCom from './components/CardsCom'
import Grid from '@mui/material/Grid2';
import { useState,useEffect,useRef } from 'react';
import { useSelector } from 'react-redux'
import {Delete,Update,Add,Get} from '../../../Config/blogManage';
import {Add as AddLike,Get as GetLike,Delete as DeleteLike} from '../../../Config/Like';
import ButtonC from './components/ButtonC';
import Modal from './components/Modal';
import {Preview} from '../../../Config/ImageManage';
import { useParams } from "react-router";


// import { useSelector, useDispatch } from 'react-redux'
// import Container from '@mui/material/Container';
function Home() {
  const [list,SetList] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // 👈 Track submission
  const modalRef = useRef();  // 👈 Create ref for Modal
  const {edit,id} = useParams();
  const [like,Setlike] = useState();
  const use = useSelector((state => state.User));

  
  useEffect(() => {
    if(use.Email) {
      console.log(use.User.$id);
        if (edit == 'edit' && id) {
          Get('',id).then(async (result) => {
            if (result) {
              const updatedData = await Promise.all(
                result.documents.map(async (item) => {
                  const previewResult = await Preview(item.ImageId);
                  const like = await GetLike(item.$id);
                  const CUlike = await GetLike(item.$id,use.User.$id);
                  return {
                    ...item,
                    Image: previewResult.href ?? null, // Add the image URL to the item
                    LikeCount: like.documents.length,
                    CurrentUserLike : (CUlike.documents.length) ?? true,
                  };
                })
              );
              console.log(updatedData);
              // Now set the updated data list
              SetList(updatedData);
            }
          });
        } else {
          Get().then(async (result) => {
            if (result) {
              const updatedData = await Promise.all(
                result.documents.map(async (item) => {
                  const previewResult = await Preview(item.ImageId);
                  const like = await GetLike(item.$id);
                  const CUlike = await GetLike(item.$id,use.User.$id);
                  return {
                    ...item,
                    Image: previewResult.href ?? null, // Add the image URL to the item
                    LikeCount: like.documents.length,
                    CurrentUserLike : (CUlike.documents.length) ?? true,
                  };
                })
              );
              // Now set the updated data list
              SetList(updatedData);
            }
          });
        }
    }
  }, [like,use]);

  useEffect(() => {
    // console.log("hello");
    // console.log("formSubmitted",formSubmitted);
    // console.log("formSubmittedFlase",formSubmitted);
    if (formSubmitted == true) {
      if (edit == 'edit' && id) {
        Get('',id).then(async (result) => {
          if (result) {
            const updatedData = await Promise.all(
              result.documents.map(async (item) => {
                const previewResult = await Preview(item.ImageId);
                const like = await GetLike(item.$id);
                const CUlike = await GetLike(item.$id,use.User.$id);
                console.log("like",like);
                return {
                  ...item,
                  Image: previewResult.href ?? null, // Add the image URL to the item
                  LikeCount: like.documents.length,
                  CurrentUserLike : (CUlike.documents.length) ?? true,
                };
              })
            );
            console.log(updatedData);
            // Now set the updated data list
            SetList(updatedData);
          }
        });
      } else {
        Get().then(async (result) => {
          if (result) {
            const updatedData = await Promise.all(
              result.documents.map(async (item) => {
                const previewResult = await Preview(item.ImageId);
                const like = await GetLike(item.$id);
                const CUlike = await GetLike(item.$id,use.User.$id);
                return {
                  ...item,
                  Image: previewResult.href ?? null, // Add the image URL to the item
                  LikeCount: like.documents.length,
                  CurrentUserLike : (CUlike.documents.length) ?? true,
                };
              })
            );
            console.log(updatedData);
            // Now set the updated data list
            SetList(updatedData);
          }
        });
      }
      setFormSubmitted(false); // 👈 Reset to false after updating the list
    }
  }, [formSubmitted]) // 👈 Dependency array

 const ActionLike = (BlogId) => {
      console.log(BlogId);
      GetLike(BlogId,use.User.$id).then((result) => {
       if (result.total > 0) {
           DeleteLike(result.documents[0].$id).then(() => {
              Setlike(false);
           })
       } else {
            AddLike(BlogId,use.User.$id).then(() => {
              Setlike(true);
            })
       }
    })
  }


  // let cards = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <div>
     <Modal LikeAction = {ActionLike} paramsId = {id} ref={modalRef} setFormSubmitted = {setFormSubmitted}/>
      <Grid container spacing={2} sx={{ padding: 1 }}>
        {list.map((card) => (
          <Grid key={card.$id}>
            <CardsCom LikeAction = {ActionLike} like = {card.LikeCount} currentLike = {card.CurrentUserLike} paramsId = {id} ref={modalRef} documentId ={card.$id} id = {card.Id} image = {card.Imagec  } paragraph = {card.Context} title= {card.Title}/>
        </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home
