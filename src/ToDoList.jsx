import React from "react";

const ToDoList = (props) => {

    
  return(
        <>
        <div className = "todo_style">
            <button className= "delete"
             onClick = {() => {
                 props.onSelect(props.id);
             }}>
            <i className="fas fa-backspace" 
            aria-hidden = "true"
            />x</button>
             <li> {props.text} </li>
        </div>
         
        </>
    )
};

export default ToDoList;