import React from "react";
import "./topcate.css";
function Topcategories() {
  return (
    <>
      <p className="topcate">
        TOP Categories
        <span>
          <a style={{ color: "#3c3a98" }}> see more</a>
        </span>
      </p>

      <hr></hr>
      <div className="container">
        <div className="card">
          <div className="body">
            <a>Clothing</a>
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
            <a>Clothing</a>
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
            <a>Clothing</a>
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
            <a>Clothing</a>
          </div>
          <img
            className="mb-3 "
            style={{ height: "78px", width: "219px" }}
            src="https://www.shopping.com/images/categories/img_1_10000000.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Topcategories;
