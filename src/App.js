import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Component/Navbar";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import ProductsPage from "./Pages/ProductsPage";
import {CartContext} from "./CartContext";
import { useEffect, useState } from "react";

function App() {
   const [cart, setcart] = useState({})

   //fetch from local storage

   useEffect(()=> {
     const cart = window.localStorage.getItem('cart')
     setcart(JSON.parse(cart));
    
     
   }, []);
   
   useEffect(() =>{
    window.localStorage.setItem('cart', JSON.stringify(cart)); 
   },[cart])


  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setcart }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/About" element={<About />} />
            <Route path="/Products" exact element={<ProductsPage />} />
            <Route path="/Products/:_id" element={<SingleProduct />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider> 
      </BrowserRouter>
    </>
  );
}

export default App;
