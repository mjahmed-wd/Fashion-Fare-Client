import React from "react";
import { Link } from "react-router-dom";
import "./IndividualProduct.css";

const IndividualProduct = ({ product }) => {
  const { name, variant, price } = product;
  const handleSession = () => {
    sessionStorage.setItem("product", product._id);
  };
  return (
    <div className="col mb-3">
      <div className="card h-100 bg-light p-2">
        <img
          src={product.imageURL}
          className="card-img-top shadow rounded"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="card-title">{variant}</p>
          <div className="d-flex justify-content-between cart_text">
            <p>${price}</p>
            <Link to="/checkout" onClick={handleSession}>
              <p>Buy Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
