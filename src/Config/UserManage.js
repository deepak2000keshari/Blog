
import { account, ID} from '../Config/config';
import {Role, Permission,Query} from 'appwrite';

export default function UserManage() {
    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
        } catch (err) {
            switch (err.code) {
                case 400:
                  return "Missing email or password.";
                case 401:
                  return "Invalid email or password.";
                case 403:
                  return "Account access denied. Email may not be verified.";
                case 429:
                    return "Too many login attempts. Please try again later.";
                case 500:
                  return "Server error. Try again later.";
                default:
                  return "Login failed: " + err.message;
              }
        }
    };

    // Signup function
    const signup = async (email, password, name) => {
        try {
            // await account.deleteSession('current');
            await account.create(ID.unique(), email, password, name);  // Correcting user creation
            return login(email, password); // Automatically log in after successful signup
        } catch (err) {
            switch (err.code) {
                case 400:
                  return "Invalid input. Please check your email and password.";
                case 401:
                  return "You are not authorized. Please log in.";
                case 403:
                  return "You do not have permission to do this.";
                case 404:
                  return "Requested resource not found.";
                case 409:
                  return "Email is already registered.";
                case 429:
                  return "Too many requests. Try again later.";
                case 500:
                  return "Server error. Please try again later.";
                default:
                  return "Something went wrong: " + err.message;
            }
       }
    }

    // Logout function
    const logout = async () => {
        try {
            await account.deleteSession('current');
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
