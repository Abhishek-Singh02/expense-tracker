import React from "react";
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material";

import { useSelector } from "react-redux";

import { default as api } from "../redux/store/apiSlice";
import "./List.scss";

function List() {
  const params = useSelector((state) => state.login.value);
  const [remove] = api.useDeleteTransactionsMutation(params);
  let transactions;
  const { data, isFetching, isError, isSuccess } = api.useGetTransactionsQuery({ user: params });
  console.log(api.useGetTransactionsQuery());
  if (isSuccess) {
    transactions = data;
  } else {
    transactions = [
      { _id: 1, type: "Income", category: "Salary", amount: 50, date: "13 wed 2022" },
      { _id: 2, type: "Expense", category: "Salary", amount: 50, date: "13 wed 2022" },
      { _id: 3, type: "Income", category: "Salary", amount: 50, date: "13 wed 2022" },
      { _id: 4, type: "Expense", category: "Salary", amount: 50, date: "13 wed 2022" },
    ];
  }
  const income = { backgroundColor: "#4CAF50", color: "#fff" };
  const expense = { backgroundColor: "#F44336", color: "#fff" };
  return (
    <MUIList dense={false} style={{ maxHeight: "225px", overflow: "auto" }} className="list__container" id="style-4">
      {transactions.map((transaction) => {
        var fullDate = new Date(transaction.date);
        var date = fullDate.toString().split(" ").slice(0, 4).join(" ");
        return (
          <Slide direction="down" in mountOnEnter unmountOnExit key={transaction._id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar style={transaction.type === "Income" ? income : expense} className="avatar">
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount}${"\xa0".repeat(3)}${date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Delete" onClick={() => remove({ _id: transaction._id }).then((res) => console.log(res))}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        );
      })}
    </MUIList>
  );
}

export default List;
