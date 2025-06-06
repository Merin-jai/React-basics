import React, { useState } from "react";
import Navbar from "./navbar";

const DragAndDropList = () => {
  const [items, setItems] = useState(["React", "Java", "Python", "Cpp"]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  // Handle drag start
  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  // Handle drag over
  const handleDragOver = (event) => {
    event.preventDefault(); // Allows dropping
  };

  // Handle drop
  const handleDrop = (index) => {
    const updatedItems = [...items];
    
    // Remove the dragged item
    const [movedItem] = updatedItems.splice(draggedItemIndex, 1);

    // Insert the dragged item at the new position
    updatedItems.splice(index, 0, movedItem);

    setItems(updatedItems);
    setDraggedItemIndex(null);
  };

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Navbar />
        <ul style={styles.list}>
            {items.map((item, index) => (
              <li
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
                style={styles.item}
              >
                {item}
              </li>
            ))}
        </ul>
    </div>
  );
};

const styles = {
  list: {
    padding: "10px",
    background: "#333",
    width: "300px",
    borderRadius: "5px",
    draggable : "true",
  },
  item: {
    padding: "10px",
    marginBottom: "8px",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "grab",
    listStyle: "none",
  },
};

export default DragAndDropList;
