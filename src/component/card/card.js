import React from "react";
import "./card.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} source={props.tagline} />
    </div>
  </div>
);

export default Card;
