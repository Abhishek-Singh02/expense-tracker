import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Title } from "chart.js";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./Details.scss";
Chart.register(ArcElement, Legend, Title);

function Details(props) {
  const userData = useSelector((state) => state.data);
  console.log(userData);
  const income = ["Salary", "Savings", "Deposits", "Investments", "Business", "others"];
  const expense = ["Bills", "Food", "Travel", "Shopping", "Entertainment", "others"];
  //chart Data
  const data = {
    labels: props.title === "Income" ? income : expense,
    datasets: [
      {
        label: "My First Dataset",
        data: [18, 18, 18, 18, 18, 18],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(123, 200, 164)", "rgb(147, 100, 141)", "rgb( 96,106,116)"],
      },
    ],
  };
  const Income = { borderBottom: "10px solid  #4CAF50" };
  const Expense = { borderBottom: "10px solid #F44336" };
  return (
    <Card style={props.title === "Income" ? Income : Expense} className="details__container">
      <CardHeader title={props.title} />
      <CardContent>
        <Typography variant="h5">₹{props.title === "Income" ? userData.inTotal : userData.exTotal}</Typography>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </CardContent>
    </Card>
  );
}

export default Details;
