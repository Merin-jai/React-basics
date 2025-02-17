import React from 'react';
import login from './login';
import Home from '../Home';

const navbar = () => {
  return (
    <nav>
        <button onclick={login}>Login</button>
        {/* <button onclick="location.href='todo.html'">To-Do List</button>
        <button onclick="location.href='weather.html'">Weather App</button> */}
    </nav>
  )
};

export default navbar