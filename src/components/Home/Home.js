import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddProduct from "../Admin/AddProduct/AddProduct";
import IndividualProduct from "./IndividualProduct/IndividualProduct";


const Home = () => {
  const [loading,setLoading]=useState(true)
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>{setProducts(data)
    setLoading(false)})
  },[])
  return (<>
  <AddProduct/>
  { loading?<CircularProgress />:
    products.map(product=><IndividualProduct key={product.name} product={product}/>)
  }
  </>);
};

export default Home;
