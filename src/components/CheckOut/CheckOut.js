import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const [product, setProduct] = useState();
  const id = sessionStorage.getItem("product");
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const placeOrder = () => {
      const orderData={
          productName: product.name,
          productPrice: product.price,
          orderPlacingTime: new Date()
      }
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1>Checkout</h1>
      <div className="d-flex justify-content-around">
        <h4>Description</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
      </div>
      {product &&product.name && (
        <div className="d-flex justify-content-around">
          <h4>{product.name}</h4>
          <h4>{product.price} </h4>
          <h4>50</h4>
        </div>
      )}
      {product && product.name && <button onClick={placeOrder}>Place Order</button>}
    </div>
  );
};

export default CheckOut;
