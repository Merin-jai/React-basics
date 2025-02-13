import React from 'react';
import '../Styles/cards.css';

const Cards = (props) => {
  return (
    <section className='section'>
        <div className='cards'>
            <div className='top'>
            <img  className="circle-img" src={props.img}></img>
                <h3>{props.name}</h3>
            </div>
            
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    </section>
  )
}

export default Cards