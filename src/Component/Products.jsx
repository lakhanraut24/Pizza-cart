import { useEffect, useState } from "react";
import Product from "./Product";
import axios from 'axios';

const Products = () => {
const [products, setProducts]  = useState([]);

useEffect(() =>{
 axios.get('https://dummyjson.com/products')
   .then(response => {
    // console.log(response);
    setProducts(response.data)
   })
   .catch(err =>{
    console.log(err);
   })
}, []);


  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
               <Product productData={products}  />
          
      </div>
    </div>
  );
};

export default Products;
