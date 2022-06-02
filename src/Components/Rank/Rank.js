import React from "react";
import "./Rank.css";

const Rank = () => {
  return (
    <div className="rank-block">
      <div>
        <p>Pavan, your current rank is ...</p>
        <div id="rank-number">{"#5"}</div>
      </div>
    </div>
  );
};

export default Rank
