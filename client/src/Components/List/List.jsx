import React from "react";
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material";

import { default as api } from "../redux/store/apiSlice";
import "./List.scss";

function List() {
  // const { data } = api.useGetTransactionsQuery();
  console.log(api.useGetTransactionsQuery());
  const transactions = [
    { id: 1, type: "Income", category: "Salary", amount: 50, date: "13 wed 2022" },
    { id: 2, type: "Expense", category: "Salary", amount: 50, date: "13 wed 2022" },
    { id: 3, type: "Income", category: "Salary", amount: 50, date: "13 wed 2022" },
    { id: 4, type: "Expense", category: "Salary", amount: 50, date: "13 wed 2022" },
  ];
  const income = { backgroundColor: "#4CAF50", color: "#fff" };
  const expense = { backgroundColor: "#F44336", color: "#fff" };
  return (
    <MUIList dense={false} style={{ maxHeight: "225px", overflow: "auto" }} className="list__container" id="style-4">
      {transactions.map((transaction) => {
        return (
          <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar style={transaction.type === "Income" ? income : expense} className="avatar">
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Delete">
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
