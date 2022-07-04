import React from 'react'
import { FacebookRounded, Instagram, EmailRounded } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { LocationOnRounded } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';




const Footer = () => {
  return (

    <div className='footer' id="contacts">
       <div className='about'>
        <h3>More Information</h3>
        <p>Talk the talka with Melody aims at transforming the lives of both Men and Women through Improving:
            <ul>
                <li> &gt; Mental Awareness</li>
                <li> &gt; Financial Awareness</li>
                <li> &gt; Empowering Women</li>
                <li> &gt; Health and Fitness</li>
            </ul>
        </p>
       </div>
 
       <div className='social'>
           <h3>Social Media Platforms</h3> 
           <p>Contact us through: <br/> <br/>
                    <a href="https://www.facebook.com/cynthia.melodyke" target="_blank" rel="noreferrer"><FacebookRounded/> Facebook</a>
                    <a href="https://www.instagram.com/cynthiamelody01/" target="_blank" rel="noreferrer"><Instagram/> Instagram</a>
                    <a href="https://twitter.com/cynthia_melody7"  target="_blank" rel="noreferrer"><TwitterIcon/> Twitter</a> <br/> <br/>
                    <a  href="mailto:morvinian@gmail.com"  target="_blank" rel="noreferrer"><WhatsappOutlinedIcon/> Whatsapp</a> 
                    <a href='https://www.youtube.com/channel/UCP0i17JE3052sADPdjbfrPw' target="_blank" rel="noreferrer"><YouTubeIcon/> Youtube</a>
                    <a  href="mailto:morvinian@gmail.com"  target="_blank" rel="noreferrer"><EmailRounded/> Mail</a> 
               
                   
                 
           </p>
       </div>
    <div className='location'>
        <h3> <LocationOnRounded/> Locate us</h3>
        <p>We have our offices distributed throughout main towns in Kenya. Our branches are in: </p>
            <ul>
                <li> &gt; Eldoret (Main Branch)</li>
                <li> &gt; Nairobi</li>
                <li> &gt; Mombasa</li>
                <li> &gt; Kisumu</li>
                
            </ul>
    </div>

    </div>

  )
}

export default Footer;