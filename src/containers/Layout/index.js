import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
      <hr></hr>
      <main>{children}</main>
      <footer>
        <hr></hr>
        <p style={{ textAlign: "center" }}>Powered by Wordpress</p>
      </footer>
    </div>
  );
};

export default Layout;
