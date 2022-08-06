import React from "react";
import Logo from "../../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLogin } from "../redux/store/reducer";
import "./Nav.scss";

function Nav() {
  const disptach = useDispatch();
  return (
    <div className="nav__container">
      <img src={Logo} alt="" className="logo" />
      <Link to="/">
        <button onClick={() => disptach(getLogin("0"))}>
          <LogoutIcon />
          Log Out
        </button>
      </Link>
    </div>
  );
}

export default Nav;
