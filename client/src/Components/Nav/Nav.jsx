import React from "react";
import Logo from "../../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div className="nav__container">
      <img src={Logo} alt="" className="logo" />
      <Link to="/signin">
        <button>
          <LogoutIcon />
          Log Out
        </button>
      </Link>
    </div>
  );
}

export default Nav;
