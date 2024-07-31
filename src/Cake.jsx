import React from "react";
import "./Cake.css";

function Cake(){
    return(<div id="section-two" className="cake-container section">
        <div className="salutations">Dear Barbie,</div>
        <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div className="candle">
            <div className="flame"></div>
        </div>
    </div>
    <div className="introduction">Happy birthday to the most fabulous and sweetest person ever!</div>

    </div>);
}

export default Cake;