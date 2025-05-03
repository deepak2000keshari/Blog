import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useState,useEffect } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import {SignIn, SignOut }  from '../../../../APP/features/User/UserSlice';
import UserManage from '../../../../Config/UserManage';

const Auth = UserManage(); // Call the function to get auth functions
function Signup() {
      const [credentials, setCredentials] = useState({ Name: "", email: "", password: "", comfirmpass: ""});
      const dispatch = useDispatch();
      const navigate = useNavigate();
      useEffect(() => {
        Auth.getLoggedInUser().then((user) => {
          if (user) {
            console.log("User is logged in:", user);
            dispatch
            dispatch(SignIn({ Email: user.email, Password: user.password, Name: user.name, User: user }));
            navigate("/Home");
          } else {
            dispatch(SignOut())
          }
        })
      }, [])
      const handleChange = (e) => {
        // console.log(e.target.value);
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log(credentials);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        Auth.signup(credentials.email,credentials.password,credentials.Name).then((user) => {
          if(user) {
            navigate("/Home");
          }
        })
      };

      const handleClick = (e) => {
        e.preventDefault();
        navigate('/signin')
      }
    
  return (
    <div>
        <Box 
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              backgroundColor: "#f4f4f4",
            }}
          >
            <Paper elevation={3} sx={{ padding: 4, width: 350, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h5" gutterBottom>
                Signup
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  type="text"
                  name="Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  value={credentials.Name}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  value={credentials.email}
                  onChange={handleChange}
                />
                
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                />

                <TextField
                  label="Confirm Password"
                  type="password"
                  name="comfirmpass"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  value={credentials.comfirmpass}
                  onChange={handleChange}
                />
                
                <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                >
                  Register
                </Button>
                <a href="#" onClick={handleClick} style={{ textDecoration: "none", color: "Black" , marginTop: 10, display: "block" }}>
                  Login
                </a>
              </form>
            </Paper>
          </Box>
    </div>
  )
}

export default Signup
