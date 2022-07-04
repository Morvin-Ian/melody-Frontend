import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import axios from 'axios'
import { useEffect, useState } from 'react'


import Home from "./Pages/Home";
import Login from "./Pages/Login"
import ProductDetail from "./Pages/ProductDetail";





function App() {

  const Aproducts = axios.create ({
    baseURL:"https://melody-talk.herokuapp.com"
    
  })  

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const fetchProducts = async () =>{
      try{
        const response = await Aproducts.get("/api/product/")
        setProducts(response.data);

      }
      catch(err){
        console.log(err.message)      
    }
    }
    fetchProducts();
  },[])  


  return (
    <Router className="App">
      <Routes>
            <Route path="/" element={<Home products={products} />}/> 
            <Route path="/log-in" element={<Login/>}/> 
            <Route path="/product/:id" element={<ProductDetail/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
