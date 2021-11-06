import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = (props) => {
  function handleButtonClick(e) {
    e.preventDefault();
    const searchInput = document.getElementById("search-input").value;
    props.setSearchValue(searchInput);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light bg-green">
        <div className="container-fluid">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active link-light ms-3" to="/home" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/headlines">
                  Headlines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/latest">
                  Latest
                </Link>
              </li>
            </ul>
          </div>
          <form class="d-flex me-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search-input" />
            <button onClick={handleButtonClick} className="btn btn-outline-success" type="submit" id="search-button">
              Search
            </button>
          </form>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
