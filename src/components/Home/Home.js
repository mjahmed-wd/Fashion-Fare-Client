import React, { useEffect, useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import IndividualProduct from "../IndividualProduct/IndividualProduct";

const fakeData = [
  { name: "Eloquent Javascript", imgLink: "image 19.png", price: "50" },
  { name: "Learning React", imgLink: "image 20.png" , price: "60" },
  { name: "The read to React", imgLink: "image 21.png" , price: "70" },
  { name: "Effective TypeScript", imgLink: "image 23.png" , price: "80" },
  { name: "Javascript Everywhere", imgLink: "image 25.png" , price: "90" },
  { name: "Learn Javascript Quickly", imgLink: "image 31.png" , price: "100" },
];
const Home = () => {
  const [products,setProducts]=useState([])
  // console.log(fakeData)
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  return (<>
  <AddProduct/>
  {
    products.map(product=><IndividualProduct key={product.name} product={product}/>)
  }
  </>);
};

export default Home;
