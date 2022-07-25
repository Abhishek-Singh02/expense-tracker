import { Grid } from "@mui/material";
import Details from "../Details/Details";
import Main from "../Main/Main";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Details title="Income" />
      <Main />
      <Details title="Expense" />
    </div>
  );
}

export default App;
