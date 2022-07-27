import Details from "../Details/Details";
import Main from "../Main/Main";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="desktop">
        <Details title="Income" />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="mobile">
        <Details title="Income" className="small" />
      </div>
      <div className="last">
        <Details title="Expense" />
      </div>
    </div>
  );
}

export default App;
