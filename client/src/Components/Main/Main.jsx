import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import UserForm from "../UserForm/UserForm";
import List from "../List/List";
import "./Main.scss";
import { useData } from "../Data/Data";

function Main() {
  const { userData } = useData();
  const minus = { color: "red" };
  return (
    <Card className="main__container">
      <CardContent>
        <Typography align="center" variant="h5" sx={userData.total < 0 ? minus : ""}>
          Total Balance : ₹{userData.total}
        </Typography>
        <div className="divider" />
        <UserForm />
      </CardContent>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
