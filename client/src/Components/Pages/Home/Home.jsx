import React from "react";
import "./Home.scss";
import Details from "../../Details/Details";
import Main from "../../Main/Main";
import Nav from "../../Nav/Nav";

function Home() {
  return (
    <>
      <Nav />
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
    </>
  );
}

export default Home;
