import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        BlogVibeBySeyi
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}