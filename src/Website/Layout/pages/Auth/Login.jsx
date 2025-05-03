import React from 'react'
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { SignIn, SignOut } from '../../../../APP/features/User/UserSlice';
import UserManage from '../../../../Config/UserManage';
const Auth = UserManage(); // Call the function to get auth functions
function Login() {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    Auth.getLoggedInUser().then((user) => {
      if (user) {
        // User is logged in, you can access user details here
        console.log("User is logged in:", user);
        dispatch(SignIn({ Email: user.email, Password: user.password, Name: user.name, User: user }));
        navigate("/Home");
      } else {
        dispatch(SignOut())
      }
    })
  }, []);
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Auth.login(credentials.email, credentials.password).then(() => {
      Auth.getLoggedInUser().then((user) => {
        if (user) {
          // User is logged in, you can access user details here
          console.log("User is logged in:", user);
          setLoading(false);
          dispatch(SignIn({ Email: user.email, Password: user.password, Name: user.name, User: user }));
          navigate("/Home");
        } else {
          dispatch(SignOut())
        }
      })
    })
  };
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
        <Paper
          elevation={3}
          sx={{ padding: 4, width: 350, textAlign: "center", borderRadius: 3 }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {loading ? (
                <div className="dot-loader">
                  <span className="dot delay-0">.</span>
                  <span className="dot delay-0">.</span>
                  <span className="dot delay-1">.</span>
                  <span className="dot delay-2">.</span>
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default Login
