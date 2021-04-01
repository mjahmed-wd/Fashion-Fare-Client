import React, { useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const ManageSingleProduct = ({ product }) => {
  const{_id,name,variant,price}=product
  console.log(product);
  const [hidden, makeHidden] = useState(false);
  const handleDelete = () => {
    fetch(`https://fashion-fare.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        makeHidden(data);
      });
  };
  return (
    <tr>
      {hidden === false && (
        <>
          <td>1</td>
          <td>{name}</td>
          <td>{variant}</td>
          <td>{price}</td>
          <td className="d-flex justify-content-around">
            <EditOutlinedIcon />{" "}
            <DeleteForeverOutlinedIcon
              style={{ cursor: "pointer" }}
              onClick={handleDelete}
            />
          </td>
        </>
      )}
    </tr>
  );
};

export default ManageSingleProduct;
