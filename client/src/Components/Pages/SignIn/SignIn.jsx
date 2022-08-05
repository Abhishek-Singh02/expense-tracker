import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, Navigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./SignIn.scss";
import { default as api } from "../../redux/store/apiSlice";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      Expense Tracker
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const [user] = api.useCreateUserMutation();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await user({
      email: data.get("email"),
      password: data.get("password"),
    })
      .unwrap()
      .then((res) => {
        if (res === "User Created") <Navigate to="/" replace={true} />;
      });
  };

  return (
    <div className="signin__container">
      <Container component="main" maxWidth="xs" sx={{ bgcolor: "white", borderRadius: "8px", padding: "1rem" }}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 2 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
}
