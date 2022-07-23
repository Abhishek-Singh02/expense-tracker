import React from "react";
import UserForm from "../UserForm/UserForm";
import "./Main.scss";

function Main() {
  return (
    <div className="main__container">
      <h1>Expense Tracker</h1>
      <h5>Made by Abhishek Singh</h5>
      <h1>Total Balance $757</h1>
      <div className="divider"></div>
      <UserForm />
    </div>
  );
}

export default Main;
