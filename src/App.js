import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import Products from "./Pages/Products";
import Navbar from "./Component/Navbar";
import Cart from "./Pages/Cart";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
