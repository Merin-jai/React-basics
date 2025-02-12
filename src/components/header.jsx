import React from 'react';
import pi, {sample1} from '../math';

const header = () => {
  const currentdate=new Date();
  console.log(currentdate.getFullYear()); //used to retrieve th ecurrent year
  return (
    <>
      <h1>Year {currentdate.getFullYear()} </h1>
      <p>Use of export files {pi}</p>
      <p>{sample1}</p>
    </>
  )
}

export default header;
