import React from "react";
// import { Link } from "react-router-dom";
// import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ alignItems: "center" }}
      >
        <a href="/" className="navbar-brand">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVp5HY1LZE2sjZFh5g96wRSV2gdqwoyDfTKKM1npd4ksJy581OcPXlOmDgxpM6DkuURw&usqp=CAU"
            style={{ height: "56px", width: "240px" }}
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.shopping.com/search.html?c=Clothing%20%26%20Accessories~~1_10000000"
                  >
                    Clothing & Accessories
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.shopping.com/search.html?c=Home%20%26%20Garden~~1_13000000"
                  >
                    Home & Garden
                  </a>
                </li>
                {/* <li>
                  <hr class="dropdown-divider" />
                </li> */}
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.shopping.com/search.html?c=Electronics~~1_11000000"
                  >
                    Electronics
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://localhost:3000/#topcategories"
              >
                Top catgories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/top-deals">
                Top Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/top-products">
                Top Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <button className="md-3 ">
                  <img
                    className="img-fluid"
                    style={{ border: "none" }}
                    src="https://www.shopping.com/images/install-pwa.png"
                    alt=""
                  />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
