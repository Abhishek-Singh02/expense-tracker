import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./SignUp.scss";
import { default as api } from "../../redux/store/apiSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

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

export default function SignUp() {
  const [error, setError] = React.useState(null);
  const [error2, setError2] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [user] = api.useCreateUserMutation();
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await user({
      email: data.get("email"),
      password: data.get("password"),
    })
      .unwrap()
      .then((res) => {
        setLoading(false)
        if (res === "User Created") {
          toast.success("Signed Up successfully !")
          navigate("/")
          setError(false);
          setError2("");
        }
        if (res === "Email exists") {
          toast.error("Email already exists!!!")

          setError(true);
          setError2("Email already Exists");
        }
      });
  };
  if (loading) {
    return (
      <>
        <div className="loader">
          <CircularProgress color="info" />
        </div>
      </>
    );
  }
  return (
    <div className="signup__container">
      <ToastContainer />
      <Container component="main" maxWidth="xs" sx={{ bgcolor: "white", borderRadius: "8px", padding: "1rem" }}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" type="email" label="Email Address" helperText={error2} error={error === true} name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/">Already have an account? Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
}
