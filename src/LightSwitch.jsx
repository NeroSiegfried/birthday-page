import React, { useState } from "react";
import './LightSwitch.css';

function LightSwitch(props) {

    const [status, setStatus] = useState(false);

    function scroll(){
        setTimeout(setStatus(!status),1000)
    }


  return (
    <div id="section-one" className="light-switch-container section">
        <div className="text top" style={status ? {display: 'block'}: {display: 'none'}} >Your kindness, positivity, and sparkle light up every room you enter</div>
      <input type="checkbox" id="light-switch" />
      <label for="light-switch" id="light-switch-label">
        <div className="screw"></div>
        <div className="switch" onClick={scroll}></div>
        <div className="screw"></div>
      </label>
      <div className="text bottom" style={status ? {display: 'block'}: {display: 'none'}} >And you make everyone's day a little brighter just by being you</div>
      <div id="background"></div>
    </div>
  );
}

export default LightSwitch;