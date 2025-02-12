import React from 'react'

const Props = (props) => {
    console.log(props);
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p> 
    </div>
  )
}

export default Props