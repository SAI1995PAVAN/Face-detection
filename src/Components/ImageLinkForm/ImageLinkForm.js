import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = (props) => {
  const{onInputChange,onButtonSubmit}=props
  return (
    <div className="Imagelink-block">
      <p>This will detect faces in pictures.Giveit a try</p>
      <div className="detect">
        <div className="center">
          <input type="text" onChange={onInputChange}/>
          <button onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
