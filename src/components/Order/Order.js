import React, { useContext, useEffect } from "react";
import { UserContext } from "../../App";

const Order = () => {
  const [user] = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user.email]);
  return <div></div>;
};

export default Order;
