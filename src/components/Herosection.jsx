import React from "react";
import "./Herosection.css";

const Herosection = () => {
  return (
    <div className="container-fluid  mt-0 pt-0 m-0 p-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide   "
        data-bs-ride="carousel"
        data-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="image-container">
              <img
                className="d-block w-100"
                src="https://getmasum.com/html-preview/rapidshop/img/slider/1.jpg"
                alt="First slide"
              />
              <div className="carousel-text-1">
                <h3>best shopping</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae posuere est Sed placerat ligula
                </p>
               
                <button className="btn  btn-outline-dark">Shop More</button>
              </div>

              <div className="overlay"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image-container">
              <img
                className="d-block w-100"
                src="https://getmasum.com/html-preview/rapidshop/img/slider/2.jpg"
                alt="Second slide"
              />

              <div className="carousel-text-2">
                <h3>New Collection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae posuere est Sed placerat ligula
                </p>
         
                <button className="btn  btn-outline-dark">Shop More</button>
              </div>

              <div className="overlay"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image-container">
              <img
                className="d-block w-100"
                src="https://getmasum.com/html-preview/rapidshop/img/slider/3.jpg"
                alt="Third slide"
              />

              <div className="carousel-text-3">
                <h3>New Collection</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae posuere est Sed placerat ligula
                </p>

                <button className="btn  btn-outline-dark">Shop More</button>
              </div>

              <div className="overlay"></div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Herosection;
