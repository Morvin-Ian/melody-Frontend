import { Avatar, AvatarGroup } from '@mui/material';
import React from 'react'
import logo from "../../Images/logoo.png"
import { Login } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';




const Navbar = () => {
  const menu = () =>{
    const drop = document.getElementById('drop');
    if(drop.style.display=="none"){
      drop.style.display='block';}
      else{
        drop.style.display='none';
      }
  }
  return (
    <nav>
        <img className='logo' src={logo} alt='logo' width={100} height={100} />  
        <p>Talk the Talk with <br/> Melody</p>  
        <li id='menubar' onClick={()=> menu()}><Menu/> </li>
       
        <ul id='drop'>
       
        <li> <Link to="/">Home</Link> </li>
        <li> <a href='#'>Appointments</a> </li>
        <li> <a href='#'>Women Talk</a> </li>
        <li> <a href='https://www.youtube.com/channel/UCP0i17JE3052sADPdjbfrPw' target="_blank">Videos</a> </li>
        <li> <a href='#contacts'>Contacts</a> </li>
        <AvatarGroup id='user'>
         <Link className='user' to="/log-in"> <Login/> LOG IN / SIGN IN</Link>
        </AvatarGroup>
      
   
      </ul>
     


    
     

    </nav>
  )
}

export default Navbar;