import { createSlice } from '@reduxjs/toolkit'
// import {Login,Signup,Logout,loggedInUser} from '../User/UserSlice';
import UserManage from '../../../Config/UserManage';

const Auth = UserManage(); // Call the function to get auth functions


const initialState = {
  Email: '',
  Password: '',
  Name:'',
  Status:'', // 'Logged In' or 'Logged Out'
  User: null,
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    SignIn: (state,action) => {
      console.log(action.payload);
        state.Email = action.payload.Email;
        state.Password = action.payload.Password;
        state.Name = action.payload.Name;
        state.Status = true;
        state.User = action.payload.User;
    },
    SignOut: (state) => {
        state.Email = '';
        state.Password = '';
        state.Name = '';
        state.Status = false;
        state.User = null;
    },
    // Add other reducers here
  },
})

// Action creators are generated for each case reducer function
export const {SignIn, SignOut } = UserSlice.actions

export default UserSlice.reducer