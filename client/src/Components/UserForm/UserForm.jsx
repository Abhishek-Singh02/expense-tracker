import React from "react";
import { TextField, Button, Select, MenuItem, Grid, Box } from "@mui/material";
import "./UserForm.scss";
import { useSelector } from "react-redux";
import { default as api } from "../redux/store/apiSlice";

function UserForm() {
  const [value, setValue] = React.useState("Error");
  const [value2, setValue2] = React.useState("Error");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };
  let transactionData;
  const [expenseData] = api.useCreateTransactionsMutation();
  const userId = useSelector((state) => state.login.value);
  //Date for form
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  var today = year + "-" + month + "-" + day;
  //type selector
  const [type, setType] = React.useState("Income");
  const income = ["Salary", "Savings", "Deposits", "Investments", "Business", "others"];
  const expense = ["Bills", "Food", "Travel", "Shopping", "Entertainment", "others"];
  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("Type"));
    transactionData = {
      type: data.get("Type"),
      category: data.get("Category"),
      amount: data.get("amount"),
      date: data.get("date"),
      user: userId,
    };
    await expenseData(transactionData)
      .unwrap()
      .then((res) => console.log(res));
    event.target.reset();
    setValue("Error");
    setValue2("Error");
  };

  return (
    <>
      <Box component="form" Validate sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mb: 0.5 }}>
          <Grid item xs={6}>
            <Select fullWidth variant="standard" value={value} onChange={handleChange} id="Type" name="Type">
              <MenuItem value="Error" disabled hidden>
                Select Type
              </MenuItem>
              <MenuItem value="Income" onClick={() => setType("Income")}>
                Income
              </MenuItem>
              <MenuItem value="Expense" onClick={() => setType("Expense")}>
                Expense
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select fullWidth variant="standard" value={value2} onChange={handleChange2} required id="Category" name="Category">
              <MenuItem value="Error" disabled hidden>
                Select Category
              </MenuItem>
              {type === "Income"
                ? income.map((text, i) => {
                    return (
                      <MenuItem key={i} value={text}>
                        {text}
                      </MenuItem>
                    );
                  })
                : expense.map((text, i) => {
                    return (
                      <MenuItem key={i} value={text}>
                        {text}
                      </MenuItem>
                    );
                  })}
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField required variant="standard" fullWidth id="amount" type="number" label="Amount" name="amount" />
          </Grid>
          <Grid item xs={6}>
            <TextField required variant="standard" fullWidth name="date" defaultValue={today} label="Date" type="date" id="date" InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>
    </>
  );
}
export default UserForm;
