import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <img
            width="55"
            alt="realtor logo"
            src={require("./../../assets/logo.png")}
          />
        </Link>
      </div>
      <h1 className="title">Earthquake Zen Garden</h1>
      <div className="user-greeting">
        <Link
          to={{
            pathname: `/profile`,
          }}
        >
          Welcome {props.profileName}
        </Link>
      </div>
    </nav>
  );
};
export default Header;
