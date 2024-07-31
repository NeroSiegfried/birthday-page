import React from "react";
import "./Spa.css";

function Spa(){
    return(
        <div className="section spa-date">
    <div className="container col-xxl-8 px-4 pt-2 main-container py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center pt-4">
          <div className="col-10 col-sm-8 col-lg-6">
          <div className="photo">
            <img src="./images/barbie-spa.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
          </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 heading">Spa Date</h1>
          </div>
        </div>
      </div>
      <div className="container info">I've booked a spa date for you because you work so hard and truly deserve to relax and be pampered in true Barbie style</div>
      </div>
      );
};

export default Spa;