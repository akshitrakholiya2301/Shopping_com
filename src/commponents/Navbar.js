import React from "react";
// import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ alignItems: "center" }}
      >
        <a href="#" className="navbar-brand">
          <img
            src="E:\REACT\shopping\logo.jpg"
            style={{ height: "28" }}
            alt="Shopping.com"
          />
        </a>

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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All catgories
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Top catgories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Top Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Top Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <button className="md-3">⬇ </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
