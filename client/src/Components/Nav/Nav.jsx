import React from "react";
import Logo from "../../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Nav.scss";

function Nav() {
  return (
    <div className="nav__container">
      <img src={Logo} alt="" className="logo" />
      <button>
        <LogoutIcon />
        Log Out
      </button>
    </div>
  );
}

export default Nav;
