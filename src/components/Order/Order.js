import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import IndividualOrderItem from "./IndividualOrderItem";

const Order = () => {
  const [user] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user.email]);
  return (
    <div>
      <h3 className="text-center mb-4 mt-4">You have {orders.length} order running.</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Order Placing Time</th>
          </tr>
        </thead>
        <tbody>
          
        {orders.map((order) => (
        <IndividualOrderItem key={order._id} order={order} />
      ))}
        </tbody>
      </Table>
      
      
    </div>
  );
};

export default Order;
