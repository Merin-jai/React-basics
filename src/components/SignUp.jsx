import React,{ useState } from 'react';
import Navbar from './navbar';
import '../Styles/login.css';
import { auth } from '../firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(username,password);
    setError("");
    if(username===""|password==="")
    {
      setError("Please fill all the fields");
      return;
    }
    createUserWithEmailAndPassword(auth,username,password)
      .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      setUser(user);
      console.log(userCredential);
      setError("SIGN UP succesfull");
      alert("Sign Up successful");
      })
      .catch((error) => {
        setError(error.message);
        });
    // try {
    //   const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //   setUser(userCredential.user);
    // } catch (err) {
    //   setError(err.message);
    // }
  };


  return (
    <div class="login">
        <Navbar/>
        <div class="main">
            <h1 onclick="this.innerHTML='Please Log in'">SIGN UP</h1>
        </div>
        <form class="form" onSubmit={handleSignUp}>
            <div class="elements">
                <label>Username*</label>
                {error && <span class="passError">{error}</span>}
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
                <input type="password" 
                id="password" 
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="SIGN UP"/>
        </form>
    </div>
  )
};

export default SignUp;

