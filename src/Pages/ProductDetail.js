import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios  from 'axios'
import { Star } from '@mui/icons-material'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


const ProductDetail = () => {

    const [product, setProduct] = useState([]);
    const  { id }  = useParams(); 

    const Aproducts = axios.create ({
        baseURL:"https://melody-talk.herokuapp.com"
        
      })  
    
      useEffect(()=> {
        const fetchProduct = async () =>{
          try{
            const response = await Aproducts.get(`/api/product/${id}`)
            setProduct(response.data);
    
          }
          catch(err){
            console.log(err.message)      
        }
        }
        fetchProduct();
      },[]) 

   

  return (
      <>
      <Navbar/>
       <h3 style={{textAlign:"center"}}>{product.product_name}</h3>
        <div  className='detail-cont'>
           
            <img  src={`https://melody-talk.herokuapp.com${product.image}`} width="500" height="400"/>
           <div  className="details">
                <p>Ratings - <Star/> <Star/> <Star/> <Star/></p>
                <p>Stock - {product.stock}</p>
                <p>Price - $ {product.price}</p>
                <p>Description - {product.description}</p>
           </div>
        </div>
        {product.stock === 0 ?  <Button id="p" variant="contained" >PLACE ORDER</Button>: 
        <Button id='p' variant="contained" >PURCHASE</Button> }
   
     </> 
  )
}

export default ProductDetail;