import React from "react";
import "./topdeals.css";
function Topdeals() {
  return (
    <>
      <p className="topdeal">
        Top Deals
        <span>
          <a href="https://www.shopping.com/topOffers.html">See More</a>
        </span>
      </p>
      <hr />
      <div className="card">
        <div className="card-body">
          <a className="card-link">
            Fifth Sun Women's Tank Tops BLK - Deadpool Black Heather 'No One
            Cares' Racerback Tank - Women & Juniors
          </a>
        </div>
        <div className="comparison">
          <button type="button" className="btn  btn btn-white btn-sm">
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Add to compare
              </label>
            </div>
          </button>
        </div>
        {/* <div className="bd position-relative overflow-hidden mx-auto card-img delayedShow">
          <div className="img1 position-relative overflow-hidden">
            <img
              src="https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd9.cnnx.io%2Fimage%2Fobj%2F9505294719%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2p2MAciLa3HiM5-JnazC1phjbJU5u3dF4ChxRmElNS6xIW3g5UBiw%3D%3D"
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="img1"> */}
        <img
          className="img sm-3"
          src="https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd9.cnnx.io%2Fimage%2Fobj%2F9505294719%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2p2MAciLa3HiM5-JnazC1phjbJU5u3dF4ChxRmElNS6xIW3g5UBiw%3D%3D"
          alt=""
        />
        {/* </div> */}
        <div className="merchent-name" title="Zulily">
          <img
            className="nametext"
            src="https://s9.cnnx.io/merchant/little/236934.gif"
            alt="Zulily"
          />
          {/* <button
            title="Merchant Information"
            aria-describedby="popover-basic"
            clasName=" merchantinformation new-sdcSprite iShowMerchantInfo merchantInfo align-middle ml-1 border-0"
            aria-haspopup="true"
          ></button> */}
        </div>
        <p className="card-text">
          <span aria-label="Discounted Price $17.97">
            $17.97 &nbsp;
            <s className="orignal">$19.97</s>
            <span className="percentage">18% off</span>
          </span>
        </p>
        <a className="getmore mt-3 mx-auto">
          <button type="button btn btn-outline-primary"> Getmore</button>
        </a>
      </div>
      <hr />
    </>
  );
}

export default Topdeals;
