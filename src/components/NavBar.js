import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  display: "block",
  width: "50px",
  margin: "0 6px 6px",
  background: "white",
  textDecoration: "underline",
 };

function NavBar() {
  
  return (
    <div>
      <NavLink exact to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink exact to="/movies" style={linkStyle}>
        Movies
      </NavLink>
      <NavLink exact to="/directors" style={linkStyle}>
        Directors
      </NavLink>
      <NavLink exact to="/actors" style={linkStyle}>
        Actors
      </NavLink>
    </div>
  )
    
    
}

export default NavBar;
