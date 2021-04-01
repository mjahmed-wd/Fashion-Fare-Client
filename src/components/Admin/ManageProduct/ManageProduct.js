import React, { useEffect, useState } from "react";
import SideNavigation from "../SideNavigation/SideNavigation";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-md-4">
          <SideNavigation/>
      </div>
      <div className="col-md-8">
        {products.length &&
          products.map((product) => (
            <ManageSingleProduct
              key={product._id}
              product={product}
            ></ManageSingleProduct>
          ))}
      </div>
    </div>
  );
};

export default ManageProduct;
