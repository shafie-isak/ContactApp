import React from "react";
import '../CssModule/Navigation.css';
import { NavLink } from "react-router-dom";

// Navigation component for sidebar navigation
const Navigation = ({ showNav, contactCount, handleshowNav }) => {
  // Determine display style based on window width
  const displayStyle = (window.innerWidth >= 601 && window.innerWidth <= 1024) ? (showNav ? "block" : "none") : "block";
  
  return (
    <div className="Navigation" style={{ display: displayStyle }} >
      <i className="fa-solid fa-xmark btn-Cancel" onClick={handleshowNav}></i>
      <nav>
        <NavLink to="/" className="Link hero-link">
          <i className="fa-solid fa-user"></i> My Contacts 
          <p className="Counter">{contactCount}</p>
        </NavLink>
        <NavLink to="/history" className="Link">
          <i className="fa-solid fa-clock-rotate-left"></i> History
        </NavLink>
        <NavLink to="/groups" className="Link">
          <i className="fa-solid fa-users"></i> Groups
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
