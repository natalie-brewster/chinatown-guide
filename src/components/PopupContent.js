import React from "react";

const PopupContent = ({ title, description, image }) => {
  return (
    <div className="popup-content">
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: "100px", height: "auto" }} />
      <p>{description}</p>
    </div>
  );
};

export default PopupContent;