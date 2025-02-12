import React from 'react';
import Sample from './components/sample';
import Props from './components/Props';
import contacts from './JSON/contacts';
import Cards from './components/Cards';

const Home = () => {

  return (
    <main>
    {/* <Sample /> */}

    {/* demonstrating the use of props in the components  */}
      {/* <Props name="John" age={30} /> */}
      <Cards 
        name= {contacts[0].name}
        img= {contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Cards 
        name= {contacts[1].name}
        img= {contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Cards 
        name= {contacts[2].name}
        img= {contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </main>
  )
}

export default Home