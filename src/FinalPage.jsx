import React from "react";
import "./FinalPage.css";


function FinalPage() {
    return(
        <div className="section final">
            <h2 className="lead">You bring so much joy and love into the lives of those around you, and today is all about celebrating the incredible person you are.</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch mt-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg my-1 mx-1" style={{backgroundImage: `url(/images/barbie-sunbathing.jpg)`, backgroundSize: 'cover'}}>
          <div className="h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Enjoy every moment, unwind,</h3>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg my-1 mx-1" style={{backgroundImage: `url(/images/barbie-queen.jpg)`, backgroundSize: 'cover'}} >
          <div className="h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">And let yourself be treated like the queen you are.</h3>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg my-1 mx-1" style={{backgroundImage: `url(/images/barbie-fairy.jpg)`, backgroundSize: 'cover'}}>
          <div className="h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Thank you for always spreading your magic everywhere you go.</h3>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
};

export default FinalPage