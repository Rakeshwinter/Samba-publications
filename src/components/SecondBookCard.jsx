import React from "react";
import { Button } from "react-bootstrap";
import "./BookCard.css";
import "./SecondBookCard.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
    return (
      <ProgressBar
        now={30}
        style={{
          backgroundColor: "#e0e0e0", // optional: light grey background
          height: "10px"
        }}
        variant="custom"
      />
    );
  }
function SecondBookCard({
  image,
  rating,
  reviews,
  title,
  oldPrice,
  newPrice,
  discount,
}) {
  return (
    <div className="secondbookCards d-flex justify-content-center align-items-center">
      <div className="me-4">
        <img src={image} alt="alternative" className="bookCards-image" />
      </div>
      <div className="w-100">
        <div className="book-title-flex mt-2 ">
          <span>By Arthur Name</span>
          <h2>{title}</h2>
        </div>
        <div className="book-title-flex d-flex justify-content-between mt-2">
          <div>
            <span style={{ textDecoration: "line-through" }}>
              Rs {oldPrice} mrp
            </span>
            <h2>Rs {newPrice}</h2>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ color: "#F35F24" }}
          >
            {discount} Off
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div className="rating-btn d-flex justify-content-center align-items-center">
            <i className="bi bi-star-fill"></i> <span>{rating}</span>
          </div>
          <div className="total-review d-flex justify-content-center align-items-center">
            {reviews} Reviews
          </div>
        </div>
        <div className="mt-2">
            <div>Already sold: <span style={{fontWeight:"bold"}}>21/99</span> </div>
            <BasicExample/>
        </div>
        <div>
          <Button variant="dark" className="w-100 mt-3 add-to-cart-btn">
            <span className="me-2">Add To Cart</span>
            <i className="bi bi-bag-plus-fill"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SecondBookCard;
