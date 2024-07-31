import React, { useRef } from "react";
import Cake from "./Cake";
import LightSwitch from "./LightSwitch";
import "./App.css";
import Spa from "./Spa";
import FinalPage from "./FinalPage";
import YoursTruly from "./YoursTruly";

function App() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behaviour: 'smooth'});
  };


  return (
    <div className="App">
      <div ref={ref}><Cake /></div>
      <div>
      <LightSwitch
      onClick={handleClick} />
      </div>
      <div>
      <Spa />
      </div>
      <div>      <FinalPage />     
      </div>
      <YoursTruly />
    </div>
  );
}

export default App;
