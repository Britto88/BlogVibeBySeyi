import {Link} from "react-router-dom"
import React from "react";


export default function Header() {
    return(
    <header>
      <a href="" className="logo">BlogVibeBySeyi</a>
      <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </nav>
    </header>
    );
}