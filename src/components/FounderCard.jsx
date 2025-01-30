import React from "react";

const FounderCard = ({ image, name, role, description }) => {
  return (
    <div className="founder-card">
      <img src={image} alt={`Photo of ${name}`} />
      <div className="founder-name">{name}</div>
      <div className="founder-role">{role}</div>
      <div className="founder-description">{description}</div>
    </div>
  );
};

export default FounderCard;
