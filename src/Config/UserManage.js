import { useState } from 'react';
import { account, ID } from '../Config/config';
import {Role, Permission} from 'appwrite';

export default function UserManage() {
    // Declaring state inside the component
    // const [loggedInUser, setLoggedInUser] = useState(null); // Initialize loggedInUser to an empty object

    // Login function
    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            // const user = await account.get();
            // return user;
            // console.log('Logged in user:', user);
            // console.log("loggedInUser",loggedInUser);
            // setLoggedInUser(user); // Update the state with the logged-in user
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    // Signup function
    const signup = async (email, password, name) => {
        try {
            // await account.deleteSession('current');
            await account.create(ID.unique(), email, password, name);  // Correcting user creation
            return login(email, password); // Automatically log in after successful signup
        } catch (err) {
            console.error('Signup failed:', err);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await account.deleteSession('current');
            // loggedInUser = {}; // Update the state to indicate user is logged out
            // return loggedInUser;
            // setLoggedInUser(null); // Clear the logged-in user state
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    const getLoggedInUser = async () => {
        try {
            const user = await account.get();
            return user;
        } catch (err) {
            console.error('Failed to get logged-in user:', err);
        }
    };
    

    // Return the functions and loggedInUser for use in your app
    // return { login, signup, logout, loggedInUser };
    return { login, signup, logout,getLoggedInUser};
}
