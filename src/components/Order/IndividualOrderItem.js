import React from "react";

const IndividualOrderItem = ({ order }) => {
  return (
    <tr>
      <td>{order._id}</td>
      <td>{order.productName}</td>
      <td>{order.productPrice}</td>
      <td>{new Date(order.orderPlacingTime).toLocaleString()}</td>
    </tr>
  );
};

export default IndividualOrderItem;
