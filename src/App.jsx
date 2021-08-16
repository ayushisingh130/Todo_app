import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const[inputList,setInputList] = useState("");
  const[Items,setItems] = useState([]);

  const inputEvent = (event) => {
     setInputList(event.target.value);
  };

  const listOfItems = () => {
   setItems((oldItems) => {
     return[...oldItems,inputList]
   })
   setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index !== id;
      })
    })
}

  return(
    <>
    <div className = "main_div">
      <div className = "center_div">
        <h1> To Do List </h1>
        <input type ="text"
        value = {inputList} 
        placeholder="Add Items" 
        onChange ={inputEvent} 
        />
        <button className="add" onClick = {listOfItems} > + </button>
        <ol>
          {Items.map((itemval,index) => {
            return <ToDoList
             key = {index}
             id = {index}
             text = {itemval}
             onSelect = {deleteItems}
              />
          })}
        </ol>       
      </div>
    </div>
    </>
  );
};

export default App;