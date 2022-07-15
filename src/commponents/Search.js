import React from "react";
// import "./serach.css";
function Search() {
  return (
    <>
      <div
        // id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.shopping.com/images/banner-image-tall.jpg"
              className="img-fluid"
              alt="helo"
            />
          </div>
          <h2
            className="banner"
            style={{
              position: "absolute",
              top: "12%",
              left: "50%",
              fontFamily: "robotothin",
              color: " #000",
              transform: "translate(-50%,-50%)",
              width: " max-content",
              fontSize: "30px",
            }}
          >
            Search over a million products on Shopping.com
          </h2>
          <input />
        </div>
      </div>
    </>
  );
}

export default Search;
