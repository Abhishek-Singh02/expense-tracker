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
  return (
    <div className="form__container">
      <div className="row">
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Age">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Age">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
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
