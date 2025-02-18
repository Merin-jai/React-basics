import React,{ useState } from 'react';
import Sample from './components/sample';
import Props from './components/Props';
import contacts from './JSON/contacts';
import Cards from './components/Cards';
import Nav from './components/navbar';
import './Styles/cards.css';

const Home = () => {

    const [contact,setContacts] =useState(contacts);
    const[draggedIndex,setDraggedIndex]= useState(null);
    
  return (
    <div className='card-main'>
    {/* <Sample /> */}

    {/* demonstrating the use of props in the components  */}
      {/* <Props name="John" age={30} /> */}

      {/* {
        contacts.map(function(contact){
          return (
            <Cards
                name = {contact.name}
                img = {contact.imgURL}
                phone = {contact.phone}
                email = {contact.email}
              />
          )
        })
      } */}
      <Nav/>
      <div className='card-container'>
        {
          contacts.map((contact,index)=>{
            return (
              <div
              key={contact.name} // Unique key
              draggable="true">
              <Cards
                  name = {contact.name}
                  img = {contact.imgURL}
                  phone = {contact.phone}
                  email = {contact.email}
                />
              </div>
            )
          })
        }
      </div>
      {/* <Cards 
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
      /> */}
    </div>
  )
}

export default Home