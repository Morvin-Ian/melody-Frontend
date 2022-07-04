import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'




const Products = ({products}) => {
    
  return (
    <>
             <div className='row'>

                {products.map((product =>
                        
                            <div className='ImageCont'>
                                <img src={`https://melody-talk.herokuapp.com${product.image}`} alt=""hoodie/>
                                <div className='description'>
                                    <p>{product.product_name}-${product.price}</p>
                                    {product.stock === 0 ?
                                    <Button variant="contained" color="error"><Link style={{textDecoration:"none", color:"white"}} to={`/product/${product.id}`}>OUT OF STOCK</Link></Button> :

                                    <Button variant="outlined"><Link style={{textDecoration:"none", color:"white"}} to={`/product/${product.id}`}>VIEW DETAILS</Link></Button>
                                    }
                                </div> 
                            </div>
                    
                    ))}
            </div>

    </>
  )
}

export default Products;