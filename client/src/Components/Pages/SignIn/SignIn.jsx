import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./SignIn.scss";
import { default as api } from "../../redux/store/apiSlice";
import { useDispatch } from "react-redux";
import { getLogin } from "../../redux/store/reducer";
import { toast, ToastContainer } from "react-toastify";
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

export default function SignIn() {
  const [error, setError] = React.useState(null);
  const [error2, setError2] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = api.useGetUserMutation();
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await login({
      email: data.get("email"),
      password: data.get("password"),
    })
      .unwrap()
      .then((res) => {
        setTimeout(() => setLoading(false), 1000);
        if (res._id !== 0) {
          dispatch(getLogin(res));
          setTimeout(() => navigate("/home"), 2500);
          setTimeout(
            () =>
              toast.success("Welcome Back !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              }),
            1200
          );
          setError(false);
          setError2("");
        } else {
          setTimeout(
            () =>
              toast.error("Invalid Credentials!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              }),
            1200
          );
          setError(true);
          setError2("Invalid Credentials");
        }
      });
  };
  if (loading) {
    return (
      <div className="loader">
        <CircularProgress color="info" />
      </div>
    );
  }
  return (
    <div className="signin__container">
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
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 2 }}>
            <TextField margin="normal" required fullWidth type="email" id="email" label="Email Address" helperText={error2} error={error === true} name="email" autoComplete="email" />
            <TextField margin="normal" required fullWidth name="password" label="Password" helperText={error2} error={error === true} type="password" id="password" autoComplete="new-password" />
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
