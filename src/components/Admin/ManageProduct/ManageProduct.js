import { CircularProgress } from "@material-ui/core";
import React, { createContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SideNavigation from "../SideNavigation/SideNavigation";
import ManageSingleProduct from "./ManageSingleProduct";

export const ProductContext = createContext();

const ManageProduct = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productChangeStatus, setProductChangeStatus] = useState(false);
  useEffect(() => {
    fetch(`https://fashion-fare.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [productChangeStatus]);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <SideNavigation />
        </div>
        <div className="col-md-8">
          {loading ? (
            <div className="text-center">
              <CircularProgress />
            </div>
          ) : (
            ""
          )}
          <ProductContext.Provider
            value={[productChangeStatus, setProductChangeStatus]}
          >
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
                      <ManageSingleProduct
                        key={product._id}
                        index={products.indexOf(product)}
                        product={product}
                      />
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </ProductContext.Provider>
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
