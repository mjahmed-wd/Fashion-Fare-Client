import React from "react";
import { Link } from "react-router-dom";

const IndividualProduct = ({ product }) => {
//   console.log(product)
 const handleSession=()=>{
     sessionStorage.setItem('product',product._id)
 }
  return (
    <div className="w-25">
      <h1>{product.name}</h1>
      <img
        src={product.imageURL}
        className="w-100"
        alt=""
      />
      <div className="d-flex justify-content-between">
        <h4>{product.price}</h4>
        <Link to="/checkout">
        <button onClick={handleSession}>Buy Now</button>

        </Link>

      </div>
    </div>
  );
};

export default IndividualProduct;
