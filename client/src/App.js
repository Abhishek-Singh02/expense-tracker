import "./App.scss";
import Details from "./Components/Details/Details";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="container">
      <Details />
      <Main />
      <Details />
    </div>
  );
}

export default App;
