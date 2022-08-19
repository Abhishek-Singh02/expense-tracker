import React from "react";
import { TextField, Button, Select, MenuItem, Grid, Box, FormHelperText } from "@mui/material";
import "./UserForm.scss";
import { useSelector } from "react-redux";
import { default as api } from "../redux/store/apiSlice";

function UserForm() {
  const [value, setValue] = React.useState("Error");
  const [value2, setValue2] = React.useState("Error");
  const [typeerr, setTypeerr] = React.useState("");
  const [cat, setCat] = React.useState("");
  const [amt, setAmt] = React.useState("");
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

    transactionData = {
      type: data.get("Type"),
      category: data.get("Category"),
      amount: data.get("amount"),
      date: data.get("date"),
      user: userId,
    };
    if (data.get("Type") === "Error") {
      setTypeerr("Select a option");
    } else setTypeerr("");
    if (data.get("Category") === "Error") {
      setCat("Select a option");
    } else setCat("");
    if (data.get("amount") === "") {
      setAmt("Enter amount");
    } else setAmt("");
    if (data.get("Type") !== "Error" && data.get("Category") !== "Error" && data.get("amount") !== "")
      await expenseData(transactionData)
        .unwrap()
        .then(() => {
          setAmt("");
          setCat("");
          setTypeerr("");
          event.target.reset();
          setValue("Error");
          setValue2("Error");
        });
  };

  return (
    <>
      <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mb: 0.5 }}>
          <Grid item xs={6}>
            <Select fullWidth variant="standard" value={value} onChange={handleChange} error={typeerr !== ""} id="Type" name="Type">
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
            <FormHelperText>{typeerr}</FormHelperText>
          </Grid>
          <Grid item xs={6}>
            <Select fullWidth variant="standard" value={value2} onChange={handleChange2} error={cat !== ""} id="Category" name="Category">
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
            <FormHelperText>{cat}</FormHelperText>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField required variant="standard" fullWidth id="amount" type="number" helperText={amt} error={amt !== ""} label="Amount" name="amount" />
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
