import React from 'react'
import {  FacebookRounded, Instagram } from '@mui/icons-material';
import styled from '@emotion/styled';
import logo from "../Images/logoo.png"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    background-color:black;


;`

const input ={
    padding: "10px",
    margin: "10px 0px",
    width: "100%",
    textAlign:"center",

};

const submit = {
    marginLeft:"35%",
    padding:"10px",
    borderRadius:"5px",
    backgroundColor: "rgb(16, 16, 39)",
    color:"white",
    border:"none"
    
}

const fb = {
    width: "100%",
    padding:"10px",
    backgroundColor:"white"
   
};

const ig ={
    width: "100%",
    padding:"10px",
    backgroundColor:"white"
};


const Form = () => {
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')

    const Ausers = axios.create ({
        baseURL:"http://localhost:8000/"
        
      })  
    
      const [products, setProducts] = useState([]);
    
      useEffect(()=> {
        const fetchUsers = async () =>{
          try{
            const response = await Ausers.get("api/user/")
            console.log(response.data);
    
          }
          catch(err){
            console.log(err.message)      
        }
        }
        fetchUsers();
      },[])  
    

  return (
  <Login>
      <img style={{marginLeft:"25px"}} src={logo} alt="logo" width="200px" height="100px"/>
        <form onSubmit={(e)=> e.preventDefault()}>

            <input 
                style={input} 
                type='email' 
                placeholder='Email e.g talk@gmail.com'
                value={username}
                onChange={(e)=>setusername(e.target.value)}

            /> <br/>

            <input 
                style={input} 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                /> <br/>
          
            <button style={submit} type="submit"> LOG IN</button> <br/>

            <p style={{color:"wheat"}}>------------------or---------------------</p>

            <button style={fb}>< FacebookRounded/> Login with Facebook</button> <br/>
            <button style={ig}> <Instagram/> Login with Instagram</button> <br/>

        </form>
  </Login>
  )
}

export default Form;