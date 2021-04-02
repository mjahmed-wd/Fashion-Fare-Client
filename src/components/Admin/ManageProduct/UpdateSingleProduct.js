import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "./ManageProduct";

const UpdateSingleProduct = ({ product,handleClose }) => {
  const [productChangeStatus, setProductChangeStatus]=useContext(ProductContext)
  const { _id, name, price, variant } = product;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      variant: data.variant,
    };
    fetch(`https://fashion-fare.herokuapp.com/updateProduct/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
        setProductChangeStatus(!productChangeStatus)
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="col-md-6 mb-2">
          <h6>Product Name</h6>
          <input
            name="name"
            defaultValue={name}
            className="w-75"
            placeholder="Product Name"
            ref={register({ required: true })}
          />
        </div>
        <div className="col-md-6">
          <h6>Product Price</h6>
          <input
            name="price"
            defaultValue={price}
            className="w-75"
            placeholder="Product Price"
            ref={register({ required: true })}
          />
        </div>
        <div className="col-md-6">
          <h6>Select Variant</h6>
          <select
            name="variant"
            defaultValue={variant}
            className="w-75"
            ref={register({ required: true })}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="col-md-6 button-wrap">
          <div className="w-75">
            <button type="submit" className="btn btn-primary" >Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateSingleProduct;
