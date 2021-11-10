import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { navbar } from "bootstrap";

const NavBar = (props) => {
  function handleButtonClick(e) {
    e.preventDefault();
    const searchInput = document.getElementById("search-input").value;
    props.setSearchValue(searchInput);
  }

  return (
    <div>
      <navbar class="navbar navbar-expand-lg navbar-dark bg-custom">
        <div class="container-fluid">
          <Link className="me-3" to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active link-light " to="/home" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active link-light" to="/headlines">
                  Headlines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active link-light" to="/latest">
                  Latest
                </Link>
              </li>
            </ul>
            <form class="d-flex ms-auto me-1">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search-input" />
              <button onClick={handleButtonClick} className="btn btn-outline-light" type="submit" id="search-button">
                Search
              </button>
            </form>{" "}
          </div>
        </div>
      </navbar>{" "}
    </div>
  );
};

export default NavBar;
