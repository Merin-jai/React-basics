// import React,{ useState } from 'react';
// import Sample from './components/sample';
// import Props from './components/Props';
// import contacts from './JSON/contacts';
// import Cards from './components/Cards';
// import Nav from './components/navbar';
// import './Styles/cards.css';

// const Home = () => {

//     const [contact,setContacts] =useState(contacts);
//     const[draggedIndex,setDraggedIndex]= useState(null);
//     // Handle drag start
//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   // Handle drag over
//   const handleDragOver = (event) => {
//     event.preventDefault(); 
//   };

//   // Handle drop
//   const handleDrop = (index) => {
//     const updatedItems = [...contact];
    
//     // Remove the dragged item
//     const [movedItem] = updatedItems.splice(draggedIndex, 1);

//     // Insert the dragged item at the new position
//     updatedItems.splice(index, 0, movedItem);

//     setItems(updatedItems);
//     setDraggedIndex(null);
//   };
//   return (
//     <div className='card-main'>
//     {/* <Sample /> */}

//     {/* demonstrating the use of props in the components  */}
//       {/* <Props name="John" age={30} /> */}

//       {/* {
//         contacts.map(function(contact){
//           return (
//             <Cards
//                 name = {contact.name}
//                 img = {contact.imgURL}
//                 phone = {contact.phone}
//                 email = {contact.email}
//               />
//           )
//         })
//       } */}
//       <Nav/>
//       <div className='card-container'>
//         {
//           contacts.map((contact,index)=>{
//             return (
//               <div
//               key={index} // Unique key
//               draggable="true"
//               onDragStart={() => handleDragStart(index)}
//               onDragOver={handleDragOver}
//               onDrop={() => handleDrop(index)}
//               >
//               <Cards
//                   name = {contact.name}
//                   img = {contact.imgURL}
//                   phone = {contact.phone}
//                   email = {contact.email}
//                 />
//               </div>
//             )
//           })
//         }
//       </div>
//       {/* <Cards 
//         name= {contacts[0].name}
//         img= {contacts[0].imgURL}
//         phone={contacts[0].phone}
//         email={contacts[0].email}
//       />
//       <Cards 
//         name= {contacts[1].name}
//         img= {contacts[1].imgURL}
//         phone={contacts[1].phone}
//         email={contacts[1].email}
//       />
//       <Cards 
//         name= {contacts[2].name}
//         img= {contacts[2].imgURL}
//         phone={contacts[2].phone}
//         email={contacts[2].email}
//       /> */}
//     </div>
//   )
// }

// export default Home