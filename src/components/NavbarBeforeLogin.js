import React from "react";
import "./NavbarBeforeLogin.css";
import logo from "../assets/crying-cat.jpg";
import { Link } from 'react-router-dom';


const NavbarBeforeLogin = () => {
    return (
        <nav className="navbar">
            <div className="brand-logo">
                <Link to="/">
                    <img src={logo} alt="Brand Logo" className="logo-image" />
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/artworks">Artworks</Link>
                <Link to="/artists">Artists</Link>
                <Link to="/exhibitions">Exhibitions</Link>
            </div>
        </nav>
    )
}

export default NavbarBeforeLogin;