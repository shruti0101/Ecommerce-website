import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="head-nav">
      <div className="container-fluid pt-2 nav-container">
        <nav className="navbar navbar-expand-lg ">
          {/* Logo Section */}
          <Link className="navbar-brand" to="/">
            <img
              src="https://demo1.wpthemego.com/themes/sw_styleshop/wp-content/themes/styleshop/assets/img/logo-sticky.png"
              className="img-fluid  "
              width={100}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav px-4 d-flex gap-2">
              <li className="nav-item  active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Women
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Men
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Sign Up and Log In Buttons */}

            <div className="d-flex gap-3 pt-2">
              <Link to="/signup">
                <button className="button2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    ></path>
                  </svg>

                  <div class="text2">Signup</div>
                </button>
              </Link>

              <Link to="/login">
                <button type="" className="btn1 btn-outline-dark">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
