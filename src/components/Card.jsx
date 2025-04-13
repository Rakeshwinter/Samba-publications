import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-s3 d-flex justify-content-center align-items-center me-2 gap-2 flex-shrink-0">
      <div className="icon-flex d-flex justify-content-center align-items-center">
        <i className={props.icon}></i>
      </div>
      <div className="card-title-s3 d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-center">{props.title}</h3>
        <span>{props.items} items</span>
      </div>
    </div>
  );
}

export default Card;
