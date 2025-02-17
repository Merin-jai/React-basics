import React,{ useState } from 'react';
import Navbar from './navbar';
import '../Styles/login.css';

const Login = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(username,password);
    // here you can call your api to login
    
  }
  return (
    <div class="login">
        <Navbar/>
        <div class="main">
            <h1 onclick="this.innerHTML='Please Log in'">LOGIN</h1>
        </div>
        <form class="form" onSubmit={handleSubmit}>
            <div class="elements">
                <label>Username*</label>
                <input 
                  type="email" 
                  id="username" 
                  placeholder="Enter Username" 
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <span class="userError"></span>
            <div class="elements">
                <label>Password*</label>
                <input type="text" 
                id="password" 
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <span class="passError"></span>
            <input type="submit"/>
        </form>
    </div>
  )
};

export default Login

