import React from 'react'
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';
import Body from '../Components/Home/Body';



const Home = ({products}) => {
  return (
    <div>
        <Navbar/>
        <Body products={products}/>
        <Footer/>
       
    </div>
  )
}

export default Home;