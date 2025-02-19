import React,{ useState } from 'react';
import Navbar from './navbar';
import '../Styles/login.css';
import { auth }  from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username,password);
    setError("");
    if(username===""|password==="")
      {
        setError("*Please fill all the fields");
        return;
      }
    signInWithEmailAndPassword(auth,username,password)
      .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      setError("LOGGED IN SUCCESSFULLY");
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
            <h1 onclick="this.innerHTML='Please Log in'">LOGIN</h1>
        </div>
        <form class="form" onSubmit={handleLogin}>
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
            {error && <span class="passError">{error}</span>}
            <input type="submit" value="LOGIN"/>
        </form>
    </div>
  )
};

export default Login

