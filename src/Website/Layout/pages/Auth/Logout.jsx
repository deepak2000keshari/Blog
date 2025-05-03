import React from 'react'
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import {SignIn, SignOut }  from '../../../../APP/features/User/UserSlice';
import UserManage from '../../../../Config/UserManage';
import {useEffect } from 'react';
const Auth = UserManage(); // Call the function to get auth functions



function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
    Auth.getLoggedInUser().then((user) => {
        console.log("User is logged in:", user);
        if (user) {
            Auth.logout().then(() => {
                dispatch(SignOut());
                navigate('/signup');
            }) 
        } else {
            console.log("No user is logged in.");
        }
    });
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default Logout

