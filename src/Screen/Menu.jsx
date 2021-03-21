import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="Menubar">
        <NavLink exact activeClassName="active_class" to="/">
          About
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
