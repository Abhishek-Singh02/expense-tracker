import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Title } from "chart.js";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import "./Details.scss";
Chart.register(ArcElement, Legend, Title);

function Details(props) {
  //chart Data
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };
  const Income = { borderBottom: "10px solid  #4CAF50" };
  const Expense = { borderBottom: "10px solid #F44336" };
  return (
    <Card style={props.title === "Income" ? Income : Expense} className="details__container">
      <CardHeader title={props.title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        <Doughnut data={data} />
      </CardContent>
    </Card>
  );
}

export default Details;
