import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import UserForm from "../UserForm/UserForm";
import List from "../List/List";
import "./Main.scss";

function Main() {
  return (
    <Card className="main__container">
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance : ₹100
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
