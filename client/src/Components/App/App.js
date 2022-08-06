import React from "react";
import "./App.scss";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => state.login.value);
  const routes = [{ path: "/home", element: <Home /> }];
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {routes.map((route, id) => {
          return <Route key={id} path={route.path} element={login !== "0" ? route.element : <Navigate to="/" />} />;
        })}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
