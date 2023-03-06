
import { React, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

function Login() {

const [username, setUserName] = useState('');
const [password, setPassword] = useState('');
const EMPTY_USERNAME = "Username cannot be empty!";
const EMPTY_PASSWORD = "Password cannot be empty!";
const INVALID_CREDENTIALS = "Incorrect Username and/or Password!";
const [unerr, setUErr] = useState("");
const [perr, setPErr] = useState("");
const [invaliderr, setInErr] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const loginApi = (e) => {
    e.preventDefault();
    if (validate()) {
      let input = { username: username, password: password };
      fetch("https://express-t4.onrender.com/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(input),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            alert("Login failed, invalid credentials");
          } else if (resp.message === "Login success!") {
            // alert("Success");
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("jwttoken", resp.jwtToken);
            usenavigate("/user");
          }else {
              setInErr(INVALID_CREDENTIALS);
            }
        })
        .catch((err) => {
          alert("Login Failed due to :" + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      setUErr(EMPTY_USERNAME);
    }
    if (password === "" || password === null) {
      result = false;
      setPErr(EMPTY_PASSWORD);
    }
    return result;
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <p style={{ color: "red" }}>
          {unerr}
          {perr} {invaliderr}
        </p>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={loginApi}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Login;
