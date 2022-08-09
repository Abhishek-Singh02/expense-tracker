import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./UserForm.scss";
import { useSelector } from "react-redux";
import { default as api } from "../redux/store/apiSlice";

function UserForm() {
  const [expenseData] = api.useCreateTransactionsMutation();
  const userId = useSelector((state) => state.login.value);
  let transactionData = {};
  const { register, control, handleSubmit, resetField } = useForm();
  const onSubmit = async (data) => {
    setType("Income");
    resetField("Type");
    resetField("category");
    resetField("amount");
    if (data.Type === undefined) {
      data.Type = "Income";
    }
    transactionData = {
      type: data.Type,
      category: data.Category,
      amount: data.amount,
      date: data.date,
      user: userId,
    };
    console.log(data);
    await expenseData(transactionData)
      .unwrap()
      .then((res) => console.log(res));
  };

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
  return (
    <div className="form__container">
      <form id="form">
        <div className="row">
          <FormControl variant="standard">
            <InputLabel>Type</InputLabel>
            <Controller
              name="Type"
              id="Type"
              control={control}
              render={({ field }) => (
                <Select {...field} defaultValue="Income">
                  <MenuItem value="Income" onClick={() => setType("Income")}>
                    Income
                  </MenuItem>
                  <MenuItem value="Expense" onClick={() => setType("Expense")}>
                    Expense
                  </MenuItem>
                </Select>
              )}
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel>Category</InputLabel>
            <Controller
              name="Category"
              id="Category"
              control={control}
              render={({ field }) => (
                <Select {...field}>
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
              )}
            />
          </FormControl>
        </div>
        <div className="row">
          <TextField type="number" variant="standard" label="Amount" fullWidth {...register("amount")} />

          <TextField type="date" variant="standard" defaultValue={today} label="Date" {...register("date")} fullWidth InputLabelProps={{ shrink: true }} />
        </div>
        <Button variant="outlined" color="primary" fullWidth onClick={handleSubmit(onSubmit)}>
          CREATE
        </Button>
      </form>
    </div>
  );
}

export default UserForm;
