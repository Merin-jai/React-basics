import React from 'react';
import login from './login';
import Home from '../Home';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
        <button onClick={()=>navigate('/Login')}>Login</button>
        <button onClick={()=>navigate('/Signup')}>Sign Up</button>
        <button onClick={()=>navigate('/')}>Cards</button>
        <button onClick={()=>navigate('/DragList')}>List</button>
        <button onClick={()=>navigate('/video')}>Videos</button>
        <button onClick={()=>navigate('/chatbot')}>Chat Bot</button>
        <button onClick={()=>navigate('/counter')}>Counter</button>
    </nav>
  )
};

export default Navbar