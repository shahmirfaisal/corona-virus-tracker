import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__heading">Corona Virus Tracker</h1>

        <nav className="nav">
          <NavLink
            to="/"
            exact
            className="nav__link"
            activeClassName="nav__item--active"
          >
            <div className="nav__item">Home</div>
          </NavLink>

          <NavLink
            to="/precautions"
            className="nav__link"
            activeClassName="nav__item--active"
          >
            <div className="nav__item">Precautions</div>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
