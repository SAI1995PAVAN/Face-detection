import React from "react";
import "./Logo.css";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="brain logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
