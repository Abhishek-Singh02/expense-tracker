import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend, Title } from "chart.js";
import "./Details.scss";
Chart.register(ArcElement, Legend, Title);

function Details() {
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

  return (
    <div className="details__container">
      <h1>Income</h1>
      <h3>$1300</h3>
      <div className="chart">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default Details;
