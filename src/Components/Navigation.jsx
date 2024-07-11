import React from "react";
import '../CssModule/Navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = ({ contactCount }) => {
    return (
        <div className="Navigation">
            <i class="fa-solid fa-xmark btn-Cancel"></i>
            <nav>
                <NavLink to="/" className="Link Active-link hero-link">
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
