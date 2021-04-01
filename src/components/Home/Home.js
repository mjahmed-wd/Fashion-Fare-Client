import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import IndividualProduct from "./IndividualProduct/IndividualProduct";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="card-group row row-cols-1 row-cols-md-4 g-4 padding-right">
          {products.map((product) => (
            <IndividualProduct key={product.name} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
