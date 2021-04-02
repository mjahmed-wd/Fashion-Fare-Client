import React, { useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { Button, Modal } from "react-bootstrap";
import UpdateSingleProduct from "./UpdateSingleProduct";

const ManageSingleProduct = ({ product}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { _id, name, variant, price } = product;
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Information of {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateSingleProduct product={product} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {hidden === false && (
        <>
          <td>*</td>
          <td>{name}</td>
          <td>{variant}</td>
          <td>$ {price}</td>
          <td className="d-flex justify-content-around">
            <EditOutlinedIcon style={{ cursor: "pointer" }} onClick={handleShow} />
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
