import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password) {
      if (email === "ahilh871@gmail.com" && password === "Ahil999@@@") {
        localStorage.removeItem("name");
        localStorage.setItem("name", name);
        alert("Login Succeed");
        navigate("/messages");
      } else {
        alert("Please Enter Valid Details");
      }
    } else {
      alert("Please Enter All Details");
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "30px" }}>
        <CssBaseline />
        <Box
          style={{
            border: "2px dotted grey",
            padding: "10px",
            borderRadius: "8px",
            width: "450px",
            height: "500px",
            margin: "auto",
            marginTop: "20px",
            color: "#c2e0ff",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "14px"
          }}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            User Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              style={{ width: "80%" }}
              onChange={(e) => setName(e.target.value)}
              color="grey"
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Full Name"
              name="fullname"
              autoComplete="fullname"
              autoFocus
              placeholder="Full Name"
            />
            <TextField
              style={{ width: "80%" }}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="email = admin@gmail.com"
            />
            <TextField
              style={{ width: "80%" }}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Password = masai"
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{
                    border: "2px solid grey",
                    marginRight: "10px"
                  }}
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              style={{
                backgroundColor: "#001e3c",
                color: "#c2e0ff",
                width: "80%"
              }}
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default UserSignup;
