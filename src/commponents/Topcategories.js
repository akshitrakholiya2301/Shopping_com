import React from "react";
import "./topcate.css";
function Topcategories() {
  return (
    <>
      <p className="topcate">
        Top Categories
        <span>
          <a
            href="https://www.shopping.com/taxonomy.html"
            style={{ color: "#3c3a98" }}
          >
            See More
          </a>
        </span>
      </p>

      <hr></hr>
      <div className="box">
        {/* <div className="container"> */}
        <div className="card">
          <div className="body">
            <a
              className="card-link"
              href="https://www.shopping.com/search.html?c=Clothing%20%26%20Accessories~~1_10000000"
            >
              Clothing & Accessories
            </a>
          </div>
          <img
            className="mb-3 "
            style={{ height: "78px", width: "219px" }}
            src="https://www.shopping.com/images/categories/img_1_10000000.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <div className="body">
            <a
              className="card-link"
              href="https://www.shopping.com/search.html?c=Home%20%26%20Garden~~1_13000000"
            >
              Home & Garden
            </a>
          </div>
          <img
            className="mb-3 "
            style={{ height: "78px", width: "219px" }}
            src="https://www.shopping.com/images/categories/img_1_13000000.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <div className="body">
            <a
              className="card-link"
              href="https://www.shopping.com/search.html?c=Electronics~~1_11000000"
            >
              Electronics
            </a>
          </div>
          <img
            className="mb-3 "
            style={{ height: "78px", width: "219px" }}
            src="https://www.shopping.com/images/categories/img_1_11000000.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <div className="body">
            <a
              className="card-link"
              href="https://www.shopping.com/search.html?c=Automotive~~1_22000000"
            >
              Automotive
            </a>
          </div>
          <img
            className="mb-3 "
            style={{ height: "78px", width: "219px" }}
            src="https://www.shopping.com/images/categories/img_1_22000000.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <div className="body">
            <a
              className="card-link"
              href="https://www.shopping.com/search.html?c=Computers%20%26%20Software~~1_4"
            >
              Computers & Software
            </a>
          </div>
          <img
            className="mb-3 "
            style={{ height: "78px", width: "219px" }}
            src="https://www.shopping.com/images/categories/img_1_4.jpg"
            alt=""
          />
        </div>
        {/* </div> */}
      </div>
      <hr />
    </>
  );
}

export default Topcategories;
