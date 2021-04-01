import React, { useState } from "react";

const ManageSingleProduct = ({ product }) => {
    const id=product._id
    const [hidden,makeHidden]=useState(false)
    const handleDelete=()=>{
        fetch(`http://localhost:5000/delete/${id}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})
        .then(res=>res.json())
        .then(data=>{
            makeHidden(data)
        })
    }
  return (
      <>
      {hidden===false&&<div className="d-flex">
      <h1>{product.name}</h1>
      <button>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>}
      </>
    
  );
};

export default ManageSingleProduct;
