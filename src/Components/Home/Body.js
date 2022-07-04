import React from 'react'
import Slider from './Slider';
import Products from './Products';
import Videos from './Videos';

import { SliderData } from './SliderData';


   
const Body = ({products}) => {
  return (
      <div id='home'>
          <h1 className='first' id='services'>Services Offered</h1>
            <Slider slides={SliderData}/>
          <h1 className='first'>Products on Sale</h1>
            <Products products={products}/>
          <h1 className='first'>Most Relevant Talks</h1>
          <Videos/>



      </div>
    
 
  )
}
export default Body;  


