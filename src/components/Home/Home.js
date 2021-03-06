import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import IndividualProduct from "./IndividualProduct/IndividualProduct";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fashion-fare.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="card-group row row-cols-1 row-cols-md-4 padding-right">
          {products.map((product) => (
            <IndividualProduct key={product.name} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
