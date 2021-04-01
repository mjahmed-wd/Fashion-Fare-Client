import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";

const CheckOut = () => {
  const [user] = useContext(UserContext);
  const [product, setProduct] = useState({});
  const id = sessionStorage.getItem("product");
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const placeOrder = () => {
    const orderData = {
      userEmail: user.email,
      productName: product.name,
      productPrice: product.price,
      orderPlacingTime: new Date(),
    };
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
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Product Price</th>
          </tr>
        </thead>
        {product && product.name && (
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>1</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td colSpan="2">Total Amount</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td colSpan="2"></td>
              <td>
                <button onClick={placeOrder} className="btn btn-primary">
                  Place Order
                </button>
              </td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default CheckOut;
