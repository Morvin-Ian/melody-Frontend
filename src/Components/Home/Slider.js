import { ArrowLeftOutlined, ArrowRightOutlined, EmailRounded, FacebookRounded, Instagram } from '@mui/icons-material';
import React from 'react'
import styled from '@emotion/styled'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import depression from "../../Images/depression.jpg"
import { Button } from '@mui/material';

import { SliderData } from './SliderData';
import { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos  } from '@mui/icons-material'



const Slider = ({slides}) => {
    const [current,setCurrent]=useState(0);
    const length = slides.length;

    const nextSlide = ()=>{
        setCurrent(current===length-1 ? 0: current+1)
    }

    const prevSlide = ()=>{
        setCurrent(current===0 ? length-1: current-1)
    }
  return (

    <div className='cont'>


    <div className='icons'>
           <ul>
                   <li> <a href="https://www.facebook.com/cynthia.melodyke" target="_blank" rel="noreferrer"><FacebookRounded/></a> </li>
                   <li> <a href="https://www.instagram.com/cynthiamelody01/" target="_blank" rel="noreferrer"><Instagram/></a> </li>
                   <li> <a href="https://twitter.com/cynthia_melody7"  target="_blank" rel="noreferrer"><TwitterIcon/></a></li>
                   <li> <a  href="mailto:morvinian@gmail.com"  target="_blank" rel="noreferrer"><EmailRounded/></a></li>
                   <li> <a href='https://www.youtube.com/channel/UCP0i17JE3052sADPdjbfrPw' target="_blank" rel="noreferrer"><YouTubeIcon/></a></li>
           </ul>
    </div>


        <div className='slider'>

            <ArrowBackIos onClick={nextSlide} className="left-arrow" />
            <ArrowForwardIos onClick={nextSlide} className="right-arrow"/>


                {SliderData.map((slide,index)=>{

                     return(
                        <div className='slide-cont'>
                        <div className={index == current ? 'slide active': 'slide'}
                        key={index}
                        >
                            {index === current && (<img className='image' src={slide.image}/>)}

                            <div className='description'>
                            <h4>{slide.description}</h4>
                            <Button className='btn' variant='contained'>MORE INFO</Button>

                        </div>
                        </div>



                        </div>


                        )
                })}

        </div>

    </div>


)}

export default Slider;
