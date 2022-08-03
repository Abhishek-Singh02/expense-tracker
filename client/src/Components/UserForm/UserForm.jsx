import React from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./UserForm.scss";
function UserForm() {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;

  //type selector
  const [type, setType] = React.useState("Income");

  return (
    <div className="form__container">
      <div className="row">
        <FormControl variant="standard">
          <InputLabel>Type</InputLabel>
          <Select defaultValue={"Income"}>
            <MenuItem value={"Income"} onClick={() => setType("Income")}>
              Income
            </MenuItem>
            <MenuItem value={"Expense"} onClick={() => setType("Expense")}>
              Expense
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel>Category</InputLabel>
          {type === "Income" ? (
            <Select label="Category">
              <MenuItem value={"Salary"}>Salary</MenuItem>
              <MenuItem value={"Savings"}>Savings</MenuItem>
              <MenuItem value={"Deposits"}>Deposits</MenuItem>
              <MenuItem value={"Investments"}>Investments</MenuItem>
              <MenuItem value={"Business"}>Business</MenuItem>
              <MenuItem value={"others"}>others</MenuItem>
            </Select>
          ) : (
            <Select label="Category">
              <MenuItem value={"Bills"}>Bills</MenuItem>
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Travel"}>Travel</MenuItem>
              <MenuItem value={"Shopping"}>Shopping</MenuItem>
              <MenuItem value={"House"}>House</MenuItem>
              <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
              <MenuItem value={"Phone"}>Phone</MenuItem>
              <MenuItem value={"others"}>others</MenuItem>
            </Select>
          )}
        </FormControl>
      </div>
      <div className="row">
        <TextField type="number" variant="standard" label="Amount" fullWidth />

        <TextField type="date" variant="standard" value={today} label="Date" id="theDate" fullWidth InputLabelProps={{ shrink: true }} />
      </div>
      <Button variant="outlined" color="primary" fullWidth>
        CREATE
      </Button>
    </div>
  );
}

export default UserForm;
