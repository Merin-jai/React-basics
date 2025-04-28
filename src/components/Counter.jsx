//counter app using useEffect
import { useState, useEffect } from 'react';
import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [trigger,setTrigger] = useState(false)
    useEffect(()=>{
            console.log(count);
            setCount(count+1);
     }, [trigger]);
  return (
    <div>
        <div>Counter</div>
        <div>{count}</div>
        {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
        <button onClick={()=>setTrigger(!trigger)}>+</button>
    </div>
  )
}

export default Counter