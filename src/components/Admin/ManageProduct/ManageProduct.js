import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SideNavigation from "../SideNavigation/SideNavigation";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fashion-fare.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-md-4">
        <SideNavigation />
      </div>
      <div className="col-md-8">
        {products.length > 0 && (
          <div className="p-4">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Variant</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ManageSingleProduct key={product._id} product={product} />
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
